import {CKEDITOR} from "../../../app/foodscience-ua/foodscience-ua.component";
(function(){
    CKEDITOR.editorConfig = function( config ) {
        config.toolbar = 'tlbar';
        config.toolbar_tlbar = [
            { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ] },
            { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
            { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
            { name: 'links', items: [ 'Link', 'Unlink' ] },
            { name: 'insert', items: [ 'Image',  'Table', 'SpecialChar'] },
        ];
        config.language = 'ru';
        config.fontFamily = 'Times New Roman';
        config.fontcolor = 'black';
    };
})();