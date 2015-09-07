define("value/form-text-date/1.0.0/form-text-date-debug", [ "$-debug", "value/datetimepicker/3.1.3/datetimepicker-debug", "gallery/bootstrap/3.2.0/bootstrap-debug", "gallery/moment/2.8.3/moment_zh-cn-debug", "./text-date-debug.handlebars", "value/form-text/1.0.0/form-text-debug", "value/form/1.0.0/form-widget-debug", "value/base/1.0.0/base-debug", "arale/templatable/0.9.2/templatable-debug", "gallery/handlebars/1.0.2/handlebars-debug", "arale/widget/1.1.1/widget-debug", "arale/base/1.1.1/base-debug", "arale/class/1.1.0/class-debug", "arale/events/1.1.0/events-debug", "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var $ = require("$-debug");
    require("value/datetimepicker/3.1.3/datetimepicker-debug");
    var template = require("./text-date-debug.handlebars");
    var FormText = require("value/form-text/1.0.0/form-text-debug");
    var FormTextDate = FormText.extend({
        attrs: {
            template: template,
            emailTip: false,
            explain: ""
        },
        setup: function() {
            var format = this.get("format") || "YYYY-MM-DD HH:mm:ss";
            var pickTime = this.get("pickTime") !== false;
            this.$("input").datetimepicker({
                pickTime: pickTime,
                lang: "zh-cn",
                format: format
            });
            FormTextDate.superclass.setup.call(this);
        }
    });
    module.exports = FormTextDate;
});

define("value/form-text-date/1.0.0/text-date-debug.handlebars", [ "gallery/handlebars/1.0.2/runtime-debug" ], function(require, exports, module) {
    var Handlebars = require("gallery/handlebars/1.0.2/runtime-debug");
    var template = Handlebars.template;
    module.exports = template(function(Handlebars, depth0, helpers, partials, data) {
        this.compilerInfo = [ 3, ">= 1.0.0-rc.4" ];
        helpers = helpers || {};
        for (var key in Handlebars.helpers) {
            helpers[key] = helpers[key] || Handlebars.helpers[key];
        }
        data = data || {};
        var buffer = "", stack1, stack2, self = this, functionType = "function", escapeExpression = this.escapeExpression;
        function program1(depth0, data) {
            return "vertical-form-group";
        }
        function program3(depth0, data) {
            return "disabled";
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
        buffer += '">\r\n    <label class="col-xs-2 control-label ' + escapeExpression((stack1 = (stack1 = depth0.label, 
        stack1 == null || stack1 === false ? stack1 : stack1.requiredCls), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '">' + escapeExpression((stack1 = (stack1 = depth0.label, 
        stack1 == null || stack1 === false ? stack1 : stack1.text), typeof stack1 === functionType ? stack1.apply(depth0) : stack1)) + '</label>\r\n\r\n    <div class="col-xs-';
        if (stack2 = helpers.colWidth) {
            stack2 = stack2.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack2 = depth0.colWidth;
            stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
        }
        buffer += escapeExpression(stack2) + ' date-control">\r\n        <input type="';
        if (stack2 = helpers.type) {
            stack2 = stack2.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack2 = depth0.type;
            stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
        }
        buffer += escapeExpression(stack2) + '" class="form-control form-date" name="';
        if (stack2 = helpers.name) {
            stack2 = stack2.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack2 = depth0.name;
            stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
        }
        buffer += escapeExpression(stack2) + '" value="';
        if (stack2 = helpers.value) {
            stack2 = stack2.call(depth0, {
                hash: {},
                data: data
            });
        } else {
            stack2 = depth0.value;
            stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2;
        }
        buffer += escapeExpression(stack2) + '"  ';
        stack2 = helpers["if"].call(depth0, depth0.disabled, {
            hash: {},
            inverse: self.noop,
            fn: self.program(3, program3, data),
            data: data
        });
        if (stack2 || stack2 === 0) {
            buffer += stack2;
        }
        buffer += ' readonly/>\r\n             <span class="glyphicon-calendar glyphicon"></span>\r\n\r\n    </div>\r\n</div>';
        return buffer;
    });
});
