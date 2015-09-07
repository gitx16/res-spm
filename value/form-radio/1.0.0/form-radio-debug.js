define("value/form-radio/1.0.0/form-radio-debug", [ "$-debug", "value/form/1.0.0/form-widget-debug", "value/base/1.0.0/base-debug", "arale/templatable/0.9.2/templatable-debug", "gallery/handlebars/1.0.2/handlebars-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "./radio-debug.handlebars" ], function(require, exports, module) {
    "use strict";
    var $ = require("$-debug");
    var FormWidget = require("value/form/1.0.0/form-widget-debug");
    var template = require("./radio-debug.handlebars");
    var FormRadio = FormWidget.extend({
        attrs: {
            template: template,
            model: {},
            checked: "",
            disabled: false,
            dataList: [],
            addNullChoice: false
        },
        _onChangeDataList: function() {
            this.setModel();
            this.renderPartial(".form-group");
        },
        initAttrs: function(cfg, dataAttrsConfig) {
            FormRadio.superclass.initAttrs.call(this, cfg, dataAttrsConfig);
            this.setModel();
        },
        setModel: function() {
            //可以被子类覆盖
            var addNullChoice = this.get("addNullChoice");
            var dataList = this.get("dataList");
            if (addNullChoice) {
                dataList = [ {
                    label: "全部",
                    value: ""
                } ].concat(dataList);
            } else {
                var checked = this.get("checked");
                if (!checked) {
                    this.set("checked", dataList[0]["value"]);
                }
            }
            var model = this.get("model");
            model.name = this.get("name");
            model.checked = this.get("checked");
            model.disabled = this.get("disabled");
            model.colWidth = this.get("colWidth") || 10;
            model.dataList = dataList;
        },
        templateHelpers: {
            dealRadioChecked: function(value, checked) {
                return value == checked ? "checked" : "";
            }
        },
        getItemData: function(value) {
            var dataList = this.get("dataList");
            for (var i = 0; i < dataList.length; i++) {
                var itemData = dataList[i];
                if (itemData.value == value) {
                    return itemData;
                }
            }
            return null;
        },
        getValue: function() {
            var name = this.get("name");
            var value = {};
            var val = this.$(":checked").val();
            if (val) {
                value[name] = val;
            }
            return value;
        },
        valid: function() {
            return this.$(":radio").valid();
        },
        clear: function() {
            this.$("input").prop("checked", false);
        }
    });
    module.exports = FormRadio;
});

define("value/form-radio/1.0.0/radio-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        var buffer = "", stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, self = this, helperMissing = helpers.helperMissing;
        function program1(depth0, data, depth1) {
            var buffer = "", stack1, stack2, options;
            buffer += '\n            <label class="radio-inline">\n                <input type="radio" name="' + escapeExpression((stack1 = depth1.name, 
            typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '" value="';
            if (stack2 = helpers.value) {
                stack2 = stack2.call(depth0, {
                    hash: {},
                    data: data
                });
            } else {
                stack2 = depth0.value;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + '" ';
            stack2 = helpers["if"].call(depth0, depth1.disabled, {
                hash: {},
                inverse: self.noop,
                fn: self.program(2, program2, data),
                data: data
            });
            if (stack2 || stack2 === 0) {
                buffer += stack2;
            }
            buffer += " ";
            options = {
                hash: {},
                data: data
            };
            buffer += escapeExpression((stack1 = helpers.dealRadioChecked, stack1 ? stack1.call(depth0, depth0.value, depth1.checked, options) : helperMissing.call(depth0, "dealRadioChecked", depth0.value, depth1.checked, options))) + "/>";
            if (stack2 = helpers.label) {
                stack2 = stack2.call(depth0, {
                    hash: {},
                    data: data
                });
            } else {
                stack2 = depth0.label;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "\n            </label>\n        ";
            return buffer;
        }
        function program2(depth0, data) {
            return "disabled";
        }
        buffer += '<div class="form-group">\n    <label class="col-xs-2 control-label ' + escapeExpression((stack1 = (stack1 = depth0.label, 
        stack1 == null || stack1 === false ? stack1 : stack1.requiredCls), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '">' + escapeExpression((stack1 = (stack1 = depth0.label, 
        stack1 == null || stack1 === false ? stack1 : stack1.text), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '</label>\n\n    <div class="col-xs-';
        if (stack2 = helpers.colWidth) {
            stack2 = stack2.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack2 = depth0.colWidth;
            stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
        }
        buffer += escapeExpression(stack2) + '">\n        ';
        stack2 = helpers.each.call(depth0, depth0.dataList, {
            hash: {},
            inverse: self.noop,
            fn: self.programWithDepth(1, program1, data, depth0),
            data: data
        });
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += "\n    </div>\n</div>";
        return buffer;
    });
});
