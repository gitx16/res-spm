define("jquery/reqSelector/1.0.1/reqSelector-debug", [ "$-debug" ], function(require, exports, module) {
    var $ = require("$-debug");
    // myNode.requiredSelector(); 
    // target defaults to prev element
    $.fn.extend({
        reqSelector: function() {
            var defaults = {
                target: null,
                keepFirst: true,
                caching: true,
                invalidValue: null,
                url: "",
                // auto, uses target's action
                method: "",
                // auto, uses target's method, defaults to 'GET'
                params: {},
                paramName: "",
                // auto, uses target's name
                itemTemplate: '<option value="{value}">{label}</option>',
                itemTemplateForMultiple: '<option value="{value}" {selected}>{label}</option>',
                onFailure: function() {},
                stopOnError: true,
                callback: null,
                multiple: false
            };
            function substitute(template, date) {
                var matchs = template.match(/\{[a-zA-Z]+\}/gi);
                var temp = "";
                for (var i = 0; i < matchs.length; i++) {
                    if (temp == "") temp = template;
                    var re_match = matchs[i].replace(/[\{\}]/gi, "");
                    temp = temp.replace(matchs[i], date[re_match]);
                }
                return temp;
            }
            return function(options) {
                var o = $.extend({}, defaults, options);
                return this.each(function() {
                    var el = this, sel = $(o.target)[0] || $(this).prev()[0];
                    if (!el || !sel) return;
                    var handler = function(e) {
                        if (!e && !$(sel).data("value")) return;
                        // clear items
                        var items = $(el).children();
                        if (o.keepFirst) items = items.slice(1);
                        items.remove();
                        if (e && !$(sel).val()) {
                            o.callback && o.callback.call(el, sel.value, el.value);
                            $(el).trigger("change");
                            return;
                        }
                        // skip if invalid value
                        if (sel.value === o.invalidValue) return;
                        if (o.multiple) {
                            var _optionValue = [];
                            $(sel).find("option").each(function() {
                                if (this.selected) _optionValue.push(this.value);
                            });
                            o.params[o.paramName || sel.name] = _optionValue.join(",");
                        } else {
                            o.params[o.paramName || sel.name] = e ? sel.value : $(sel).data("value");
                        }
                        // resp: {data: {key1: value1, key2: value2}}
                        $.ajax(o.url || sel.getAttribute("action"), {
                            data: o.params,
                            dataType: "json",
                            success: function(data) {
                                if (o.multiple) {
                                    $.each(data, function() {
                                        $(substitute(o.itemTemplateForMultiple, {
                                            value: this.value,
                                            label: this.label,
                                            selected: !!this.selected ? 'selected="selected"' : ""
                                        })).appendTo(el);
                                    });
                                } else {
                                    $.each(data, function() {
                                        $(substitute(o.itemTemplate, {
                                            value: this.value,
                                            label: this.label
                                        })).appendTo(el);
                                    });
                                }
                                // el.selectedIndex = 0;
                                // restore value after init
                                if (!e && !o.multiple) {
                                    var value = el.getAttribute("data-value");
                                    value && $(el).val(value);
                                }
                                o.callback && o.callback.call(el, sel.value, el.value);
                                if (e) $(el).trigger("change");
                            },
                            error: function(jqXHR) {
                                o.onFailure.apply(jqXHR, arguments);
                                o.stopOnError && e && e.preventDefault();
                            },
                            type: (o.method || sel.method || "get").toUpperCase()
                        });
                    };
                    $(sel).change(handler);
                    // init
                    handler();
                });
            };
        }()
    });
});
