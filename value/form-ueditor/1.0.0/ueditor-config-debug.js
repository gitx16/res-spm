define("value/form-ueditor/1.0.0/ueditor-config-debug", [], function(require, exports, module) {
    "use strict";
    return {
        serverUrl: "/upload",
        autoFloatEnabled: false,
        initialFrameWidth: "100%",
        initialFrameHeight: 200,
        minFrameHeight: 150,
        elementPathEnabled: false,
        wordCountMsg: "",
        enableAutoSave: false,
        //无效。。。
        saveInterval: 9e7,
        zIndex: 1e3,
        toolbars: [ [ "source", "undo", "redo", "|", "bold", "italic", "underline", "strikethrough", "removeformat", "formatmatch", "autotypeset", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "selectall", "cleardoc", "|", "rowspacingtop", "rowspacingbottom", "lineheight", "|", "fontfamily", "fontsize", "|", "indent", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "|", "link", "unlink", "anchor", "|", "imagecenter", "simpleupload", "insertimage", "emotion" ] ]
    };
});
