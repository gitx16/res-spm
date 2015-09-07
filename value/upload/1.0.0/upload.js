define("value/upload/1.0.0/upload",["$"],function(a){var b=a("$"),c=b("body"),d=function(){var a=0;return function(){return"Upload"+a++}}(),e=function(a){this.btn=a.btn,this.fieldName=a.fieldName||"file",this.formAction=a.formAction||"fileUpload",this.fileType=a.fileType||{},this.otherParams=a.otherParams||{},this.onSubmit=a.onSubmit,this.onComplete=a.onComplete,this.onFileTypeFail=a.onFileTypeFail,this.f_domain=a.f_domain,this.form=null,this.iframe=null,this.init()};e.prototype={init:function(){this.createFileEl()},createFileEl:function(){var a=this,c=(this.fileType.allow||[]).map(function(a){return"."+a}),d=b('<input type="file" class="hide" id="'+a.btn.prop("for")+'" name="'+a.fieldName+'" accept="'+c.join(",")+'"/>'),e=function(){var c=b(this);return a.checkFileType(c.val())?((!a.onSubmit||a.onSubmit(a.btn,c))&&(a.btn.attr("disabled",!0),a.createForm(),c.appendTo(a.form),a.createOtherData(),a.form.submit(),c.remove()),void 0):(c.remove(),a.createFileEl(),a.onFileTypeFail?a.onFileTypeFail(a.btn,a.fileType):alert("file type is forbidden"),void 0)};d.change(e),a.btn.after(d)},createForm:function(){var a=this,e=d(),f=b('<iframe frameborder="0"  style="display:none;" name="hiddenIframe'+e+'" class="hide"></script></iframe>'),g=b('<form action="'+this.formAction+'" target="hiddenIframe'+e+'" enctype="multipart/form-data" method="post" style="display:none;"></form>');f.on("load",function(){var b=f[0].contentWindow.document;b.readyState&&"complete"!=b.readyState||b.body.innerHTML&&(a.onComplete.call(null,a.btn,JSON.parse(b.body.innerHTML)),a.destroyForm(),a.btn.attr("disabled",!1),a.createFileEl())}),c.append(f),c.append(g),this.iframe=f,this.form=g},destroyForm:function(){this.form.remove(),this.iframe.remove()},checkFileType:function(a){var c=this.fileType.allow,d=this.fileType.forbidden,e=a.match(/^.*\.(.+)$/);if(!e)return!1;if(c){if(-1!=b.inArray(e[1],c))return!0}else if(d&&-1==b.inArray(e[1],d))return!0;return!1},createOtherData:function(){var a=this.otherParams,c="";b.each(a,function(a,b){c+='<input type="hidden" name="'+a+'" value="'+b+'"/>'}),this.form.append(c)},setOtherData:function(a){this.otherParams=a}},b.fn.ajaxUpload=function(a){var c=[];return this.each(function(){var d=b.extend({},a);d.btn=b(this),c.push(new e(d))}),c}});