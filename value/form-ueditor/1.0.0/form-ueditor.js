define("value/form-ueditor/1.0.0/form-ueditor",["$","value/form/1.0.0/form-widget","value/base/1.0.0/base","arale/templatable/0.9.2/templatable","gallery/handlebars/1.0.2/handlebars","arale/widget/1.1.1/widget","arale/base/1.1.1/base","arale/class/1.1.0/class","arale/events/1.1.0/events","./form-ueditor.handlebars","./ueditor-config"],function(a,b,c){"use strict";var d=a("$"),e=a("value/form/1.0.0/form-widget"),f=a("./form-ueditor.handlebars"),g=a("./ueditor-config"),h=e.extend({attrs:{template:f,config:{},model:{},commonValid:!1,name:"",value:""},initAttrs:function(a,b){h.superclass.initAttrs.call(this,a,b),this.setModel()},setup:function(){var a=this,b="ueditor_"+a.get("name");a.$("script").prop("id",b);var c=d.extend({},g,a.get("config"));setTimeout(function(){UE.delEditor(b);var d=a.editorInstance=UE.getEditor(b,c);d.addListener("contentChange",function(){a.valid()})},100)},setModel:function(){var a=this.get("model");a.name=this.get("name"),a.value=this.get("value")},getValue:function(a){var b=this.get("name"),c=this.editorInstance.getContent();if(a)return c;var d={};return d[b]=c,d},clear:function(){},valid:function(){var a=this.getRules();return a.required?this.getValue(!0)?(this.element.removeClass("has-error"),!0):(this.showError(),!1):!0},showError:function(){this.element.addClass("has-error");var a=this.$("div.error");if(!a.length){var b=this.getMessages(),c=this.$("div[class^=col]");c.append('<div class="error"><i class="fa fa-remove"></i> '+b.required+"</div>")}}});c.exports=h}),define("value/form-ueditor/1.0.0/form-ueditor.handlebars",["gallery/handlebars/1.0.2/runtime"],function(a,b,c){var d=a("gallery/handlebars/1.0.2/runtime"),e=d.template;c.exports=e(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||{};for(var f in a.helpers)c[f]=c[f]||a.helpers[f];e=e||{};var g,h,i="",j="function",k=this.escapeExpression;return i+='<div class="form-group">\n    <label class="col-xs-2 control-label '+k((g=b.label,g=null==g||g===!1?g:g.requiredCls,typeof g===j?g.apply(b):g))+'">'+k((g=b.label,g=null==g||g===!1?g:g.text,typeof g===j?g.apply(b):g))+'</label>\n\n    <div class="col-xs-10">\n        <script type="text/plain" name="',(h=c.name)?h=h.call(b,{hash:{},data:e}):(h=b.name,h=typeof h===j?h.apply(b):h),i+=k(h)+'">',(h=c.value)?h=h.call(b,{hash:{},data:e}):(h=b.value,h=typeof h===j?h.apply(b):h),(h||0===h)&&(i+=h),i+="</script>\n    </div>\n</div>"})}),define("value/form-ueditor/1.0.0/ueditor-config",[],function(){"use strict";return{serverUrl:"/upload",autoFloatEnabled:!1,initialFrameWidth:"100%",initialFrameHeight:200,minFrameHeight:150,elementPathEnabled:!1,wordCountMsg:"",enableAutoSave:!1,saveInterval:9e7,zIndex:1e3,toolbars:[["source","undo","redo","|","bold","italic","underline","strikethrough","removeformat","formatmatch","autotypeset","pasteplain","|","forecolor","backcolor","insertorderedlist","insertunorderedlist","selectall","cleardoc","|","rowspacingtop","rowspacingbottom","lineheight","|","fontfamily","fontsize","|","indent","justifyleft","justifycenter","justifyright","justifyjustify","|","link","unlink","anchor","|","imagecenter","simpleupload","insertimage","emotion"]]}});
