define("value/autocomplete/1.0.0/autocomplete",["$","arale/autocomplete/1.3.0/autocomplete","arale/overlay/1.1.2/overlay","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/widget/1.1.1/widget","arale/base/1.1.1/base","arale/class/1.1.0/class","arale/events/1.1.0/events","arale/templatable/0.9.2/templatable","gallery/handlebars/1.0.2/handlebars","gallery/handlebars/1.0.2/runtime"],function(a,b,c){"use strict";var d=a("$"),e=a("arale/autocomplete/1.3.0/autocomplete"),f=e.extend({parseElement:function(){var a=this;this.templatePartials||(this.templatePartials={}),d.each(["header","footer","html"],function(b,c){a.templatePartials[c]=a.get(c)}),e.superclass.parseElement.call(this)}});c.exports=f});
