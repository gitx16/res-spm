define("value/form-select/1.0.0/form-select-debug", [ "$-debug", "value/form/1.0.0/form-widget-debug", "value/base/1.0.0/base-debug", "arale/templatable/0.9.2/templatable-debug", "gallery/handlebars/1.0.2/handlebars-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "jquery/select2/3.5.2/select2-zh-cn-debug", "./select-debug.handlebars" ], function(require, exports, module) {
    "use strict";
    var $ = require("$-debug");
    var FormWidget = require("value/form/1.0.0/form-widget-debug");
    require("jquery/select2/3.5.2/select2-zh-cn-debug");
    require.async("jquery/select2/3.5.2/select2-debug.css");
    var template = require("./select-debug.handlebars");
    var FormSelect = FormWidget.extend({
        attrs: {
            //            select2:{//示例，既可以传true也可以传｛...｝
            //
            //            },
            template: template,
            model: {},
            verticalLayout: false,
            //纵向表单布局，即label与控件不在同一行
            selected: "",
            dataList: [],
            addNullChoice: true,
            disabled: false
        },
        actualDOM: null,
        _onChangeDataList: function() {
            var model = this.get("model");
            var dataList = this.get("dataList") || [];
            if (!model.multiple) {
                dataList = this.addNullChoice(dataList);
            }
            model.dataList = dataList;
            this.renderPartial("select");
        },
        _onChangeSelected: function(val) {
            var model = this.get("model");
            model.selected = val;
        },
        setVal: function(value) {
            this.$("select").val(value).trigger("change");
        },
        initAttrs: function(cfg, dataAttrsConfig) {
            FormSelect.superclass.initAttrs.call(this, cfg, dataAttrsConfig);
            this.setModel();
        },
        setModel: function() {
            //可以被子类覆盖
            var dataList = this.get("dataList");
            var model = this.get("model");
            model.multiple = this.get("multiple");
            if (!model.multiple) {
                dataList = this.addNullChoice(dataList);
            }
            model.verticalLayout = this.get("verticalLayout");
            model.name = this.get("name");
            model.selected = this.get("selected");
            model.dataList = dataList;
            model.disabled = this.get("disabled");
        },
        addNullChoice: function(dataList) {
            var addNullChoice = this.get("addNullChoice");
            if (addNullChoice) {
                dataList = [ {
                    label: "-请选择-",
                    value: ""
                } ].concat(dataList);
            }
            return dataList;
        },
        setup: function() {
            FormSelect.superclass.setup.call(this);
            this.setActualDOM();
            var self = this;
            var options = this.get("select2");
            if (options) {
                if (options === true) {
                    options = {
                        closeOnSelect: false
                    };
                }
                this.actualDOM.select2(options);
                setTimeout(function() {
                    self.$("select").val(self.get("selected")).trigger("change");
                }, 10);
            }
        },
        setActualDOM: function() {
            this.actualDOM = this.element.find("select");
        },
        templateHelpers: {
            dealSelected: function(value, selected) {
                return value == selected ? "selected" : "";
            }
        },
        valid: function() {
            return this.$("select").valid();
        },
        getValue: function() {
            var value = {};
            var val = this.$("select").val();
            if (val) {
                var name = this.get("name");
                value[name] = this.$("select").val();
            }
            return value;
        },
        clear: function() {
            this.$("select").val("");
        }
    });
    module.exports = FormSelect;
});

define("value/form-select/1.0.0/select-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        var buffer = "", stack1, stack2, functionType = "function", escapeExpression = this.escapeExpression, helperMissing = helpers.helperMissing, self = this;
        function program1(depth0, data) {
            return "vertical-form-group";
        }
        function program3(depth0, data) {
            return "disabled";
        }
        function program5(depth0, data) {
            return "multiple";
        }
        function program7(depth0, data, depth1) {
            var buffer = "", stack1, stack2, options;
            buffer += '\n                <option value="';
            if (stack1 = helpers.value) {
                stack1 = stack1.call(depth0, {
                    hash: {},
                    data: data
                });
            } else {
                stack1 = depth0.value;
                stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
            }
            buffer += escapeExpression(stack1) + '" ';
            options = {
                hash: {},
                data: data
            };
            buffer += escapeExpression((stack1 = helpers.dealSelected, stack1 ? stack1.call(depth0, depth0.value, depth1.selected, options) : helperMissing.call(depth0, "dealSelected", depth0.value, depth1.selected, options))) + ">";
            if (stack2 = helpers.label) {
                stack2 = stack2.call(depth0, {
                    hash: {},
                    data: data
                });
            } else {
                stack2 = depth0.label;
                stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
            }
            buffer += escapeExpression(stack2) + "</option>\n            ";
            return buffer;
        }
        buffer += '<div class="form-group ';
        stack1 = helpers["if"].call(depth0, depth0.verticalLayout, {
            hash: {},
            inverse: self.noop,
            fn: self.program(1, program1, data),
            data: data
        });
        if (stack1 || stack1 === 0) {
            buffer += stack1;
        }
        buffer += '">\n    <label class="col-xs-2 control-label ' + escapeExpression((stack1 = (stack1 = depth0.label, 
        stack1 == null || stack1 === false ? stack1 : stack1.requiredCls), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '">' + escapeExpression((stack1 = (stack1 = depth0.label, 
        stack1 == null || stack1 === false ? stack1 : stack1.text), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '</label>\n\n    <div class="col-xs-10">\n        <select class="form-control" name="';
        if (stack2 = helpers.name) {
            stack2 = stack2.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack2 = depth0.name;
            stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
        }
        buffer += escapeExpression(stack2) + '" ';
        stack2 = helpers["if"].call(depth0, depth0.disabled, {
            hash: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            data: data
        });
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += " ";
        stack2 = helpers["if"].call(depth0, depth0.multiple, {
            hash: {},
            inverse: self.noop,
            fn: self.program(5, program5, data),
            data: data
        });
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += ">\n            ";
        stack2 = helpers.each.call(depth0, depth0.dataList, {
            hash: {},
            inverse: self.noop,
            fn: self.programWithDepth(7, program7, data, depth0),
            data: data
        });
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += "\n        </select>\n    </div>\n</div>\n";
        return buffer;
    });
});
