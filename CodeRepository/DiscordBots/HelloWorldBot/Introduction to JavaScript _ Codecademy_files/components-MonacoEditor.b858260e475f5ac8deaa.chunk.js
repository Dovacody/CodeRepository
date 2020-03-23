(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[333],{"3pgq":function(e,o,r){e.exports={editor:"editor__sFh9pBisgyysnjTYa9sGj"}},C5ZO:function(e,o,r){"use strict";r.r(o);var n={};r.r(n),r.d(n,"darkTheme",function(){return b}),r.d(n,"syntax",function(){return v}),r.d(n,"ui",function(){return w});var t=r("o0o1"),d=r.n(t),a=r("q1tI"),i=r.n(a),c=r("gL5p"),s=r.n(c),u=r("GL4F"),f=new Map([["css",u.a],["html",u.b],["javascript",u.c],["python",u.d],["scss",u.e],["sql",u.f]]),l=new Map([[".sqlite",".sql"]]),g=function getLanguageForFile(e,o){var r,n,t=function getExtensionForFileName(e){var o,r=e.substring(e.lastIndexOf(".")).toLowerCase();return null!==(o=l.get(r))&&void 0!==o?o:r}(e);if(t){var d=null===(r=o.languages.getLanguages().find(function(e){var o;return null===(o=e.extensions)||void 0===o?void 0:o.includes(t)}))||void 0===r?void 0:r.id;if(d)return null!==(n=f.get(d))&&void 0!==n?n:d}},m=r("3pgq"),p=r.n(m),y=new Set([u.b]),k=function createMonacoOptions(e){return{acceptSuggestionOnCommitCharacter:!1,acceptSuggestionOnEnter:"off",automaticLayout:!0,codeLens:!1,colorDecorators:!1,contextmenu:!1,detectIndentation:!1,extraEditorClassName:p.a.editor,find:{addExtraSpaceOnTop:!1},fontFamily:"Monaco, Menlo, 'Ubuntu Mono', 'Droid Sans Mono', Consolas, monospace",fontSize:14.08,glyphMargin:!0,highlightActiveIndentGuide:!1,lightbulb:{enabled:!1},lineDecorationsWidth:0,lineNumbersMinChars:3,lineHeight:22.5,matchBrackets:y.has(e)?"never":"near",minimap:{enabled:!1},occurrencesHighlight:!1,quickSuggestions:!1,renderIndentGuides:!1,renderLineHighlight:"none",scrollbar:{verticalScrollbarSize:6},scrollBeyondLastLine:!1,selectionHighlight:!1,showFoldingControls:"always",showUnused:!1,suggest:{showClasses:!1,showColors:!1,showConstants:!1,showConstructors:!1,showEnumMembers:!1,showEnums:!1,showEvents:!1,showFields:!1,showFiles:!1,showFolders:!1,showFunctions:!1,showIcons:!1,showInterfaces:!1,showKeywords:!1,showMethods:!1,showModules:!1,showOperators:!1,showProperties:!1,showReferences:!1,showSnippets:!1,showStructs:!1,showTypeParameters:!1,showUnits:!1,showValues:!1,showVariables:!1,showWords:!1},tabSize:2,wordBasedSuggestions:!1,wordWrap:"on"}};function asyncGeneratorStep(e,o,r,n,t,d,a){try{var i=e[d](a),c=i.value}catch(e){return void r(e)}i.done?o(c):Promise.resolve(c).then(n,t)}function _defineProperties(e,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function LanguageServices(e){!function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,LanguageServices),this.services=new Map,this.creators=e}return function _createClass(e,o,r){return o&&_defineProperties(e.prototype,o),r&&_defineProperties(e,r),e}(LanguageServices,[{key:"use",value:function(){var e=function _asyncToGenerator(e){return function(){var o=this,r=arguments;return new Promise(function(n,t){var d=e.apply(o,r);function _next(e){asyncGeneratorStep(d,n,t,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(d,n,t,_next,_throw,"throw",e)}_next(void 0)})}}(d.a.mark(function _callee(e,o){var r,n,t,a;return d.a.wrap(function _callee$(d){for(;;)switch(d.prev=d.next){case 0:if(r=this.creators.get(e)){d.next=3;break}return d.abrupt("return",{});case 3:if(!(n=this.services.get(e))){d.next=6;break}return d.abrupt("return",n);case 6:return d.next=8,r();case 8:return t=d.sent,a=t.default(o),this.services.set(e,a),d.abrupt("return",a);case 12:case"end":return d.stop()}},_callee,this)}));return function use(o,r){return e.apply(this,arguments)}}()}]),LanguageServices}(),b={blue:"#83fff5",comment:"#939598",gray:"#939598",green:"#b4d353",orange:"#ff8973",purple:"#b3ccff",deepPurple:"#cc7bc2",red:"#e85d7f",yellow:"#ffe083",white:r("u6zU").a.white},v={attribute:b.green,annotation:b.red,atom:b.deepPurple,basic:b.white,comment:b.gray,constant:b.orange,decoration:b.red,invalid:b.red,key:b.blue,keyword:b.purple,number:b.red,operator:b.red,predefined:b.white,property:b.red,regexp:b.green,string:b.yellow,tag:b.red,text:b.orange,value:b.yellow,variable:b.green},w={background:"#211E2F",text:b.white,indent:{active:"#393b41",inactive:"#494b51"}},_=function c(e){return e.substr(1)},x=function theme(e){var o=e.ui,r=e.syntax;return{base:"vs-dark",inherit:!0,rules:[{token:"",foreground:_(r.basic)},{token:"regexp",foreground:_(r.regexp)},{token:"annotation",foreground:_(r.annotation)},{token:"type",foreground:_(r.annotation)},{token:"doctype",foreground:_(r.comment)},{token:"delimiter",foreground:_(r.decoration)},{token:"invalid",foreground:_(r.invalid)},{token:"emphasis",fontStyle:"italic"},{token:"strong",fontStyle:"bold"},{token:"variable",foreground:_(r.variable)},{token:"variable.predefined",foreground:_(r.variable)},{token:"constant",foreground:_(r.constant)},{token:"comment",foreground:_(r.comment)},{token:"number",foreground:_(r.number)},{token:"number.hex",foreground:_(r.number)},{token:"keyword.directive",foreground:_(r.comment)},{token:"include",foreground:_(r.comment)},{token:"key",foreground:_(r.property)},{token:"attribute.name",foreground:_(r.attribute)},{token:"attribute.name-numeric",foreground:_(r.string)},{token:"attribute.value",foreground:_(r.property)},{token:"attribute.value.number",foreground:_(r.number)},{token:"string",foreground:_(r.string)},{token:"string.yaml",foreground:_(r.string)},{token:"tag",foreground:_(r.tag)},{token:"tag.id.jade",foreground:_(r.tag)},{token:"tag.class.jade",foreground:_(r.tag)},{token:"metatag",foreground:_(r.comment)},{token:"attribute.value.unit",foreground:_(r.string)},{token:"keyword",foreground:_(r.keyword)},{token:"keyword.flow",foreground:_(r.keyword)},{token:"attribute.value.xml",foreground:_(r.string)},{token:"delimiter.xml",foreground:_(r.decoration)},{token:"metatag.xml",foreground:_(r.comment)},{token:"string.key.json",foreground:_(r.property)},{token:"string.value.json",foreground:_(r.string)},{token:"keyword.json",foreground:_(r.keyword)},{token:"cpp",foreground:_(r.constant)},{token:"number.cpp",foreground:_(r.text)},{token:"number.float.cpp",foreground:_(r.text)},{token:"delimiter.cpp",foreground:_(r.predefined)},{token:"delimiter.angle.cpp",foreground:_(r.predefined)},{token:"delimiter.curly.cpp",foreground:_(r.predefined)},{token:"delimiter.parenthesis.cpp",foreground:_(r.predefined)},{token:"delimiter.square.cpp",foreground:_(r.predefined)},{token:"keyword.cpp",foreground:_(r.comment)},{token:"string.include.identifier.cpp",foreground:_(r.comment)},{token:"number.cs",foreground:_(r.text)},{token:"number.float.cs",foreground:_(r.text)},{token:"delimiter.cs",foreground:_(r.predefined)},{token:"delimiter.angle.cs",foreground:_(r.predefined)},{token:"delimiter.curly.cs",foreground:_(r.predefined)},{token:"delimiter.parenthesis.cs",foreground:_(r.predefined)},{token:"delimiter.square.cs",foreground:_(r.predefined)},{token:"number.go",foreground:_(r.text)},{token:"number.float.go",foreground:_(r.text)},{token:"delimiter.go",foreground:_(r.predefined)},{token:"delimiter.angle.go",foreground:_(r.predefined)},{token:"delimiter.curly.go",foreground:_(r.predefined)},{token:"delimiter.parenthesis.go",foreground:_(r.predefined)},{token:"delimiter.square.go",foreground:_(r.predefined)},{token:"delimiter.php",foreground:_(r.predefined)},{token:"delimiter.bracket.php",foreground:_(r.predefined)},{token:"delimiter.curly.php",foreground:_(r.predefined)},{token:"delimiter.parenthesis.php",foreground:_(r.predefined)},{token:"delimiter.square.php",foreground:_(r.predefined)},{token:"metatag.php",fontStyle:"bold"},{token:"default.codecademy-html",foreground:_(r.basic)},{token:"delimiter.codecademy-html",foreground:_(r.decoration)},{token:"equals.codecademy-html",foreground:_(r.predefined)},{token:"metatag.content.codecademy-html",foreground:_(r.comment)},{token:"metatag.codecademy-html",foreground:_(r.comment)},{token:"attribute.value.codecademy-html",foreground:_(r.string)},{token:"string.codecademy-html",foreground:_(r.string)},{token:"default.codecademy-css",foreground:_(r.constant)},{token:"number.codecademy-css",foreground:_(r.text)},{token:"delimiter.codecademy-css",foreground:_(r.predefined)},{token:"delimiter.bracket.codecademy-css",foreground:_(r.predefined)},{token:"delimiter.curly.codecademy-css",foreground:_(r.predefined)},{token:"delimiter.parenthesis.codecademy-css",foreground:_(r.predefined)},{token:"delimiter.square.codecademy-css",foreground:_(r.predefined)},{token:"delimiter.codecademy-css",foreground:_(r.predefined)},{token:"keyword.media.type.value.codecademy-css",foreground:_(r.attribute)},{token:"keyword.media.value.value.codecademy-css",foreground:_(r.keyword)},{token:"keyword.property.value.codecademy-css",foreground:_(r.key)},{token:"keyword.name.codecademy-css",foreground:_(r.key)},{token:"selector-class.codecademy-css",foreground:_(r.attribute)},{token:"selector-colon.codecademy-css",foreground:_(r.predefined)},{token:"selector-id.codecademy-css",foreground:_(r.predefined)},{token:"meta.codecademy-css",foreground:_(r.tag)},{token:"meta-parens.codecademy-css",foreground:_(r.predefined)},{token:"meta-url.codecademy-css",foreground:_(r.text)},{token:"attribute.name.codecademy-css",foreground:_(r.predefined)},{token:"attribute.value.codecademy-css",foreground:_(r.constant)},{token:"attribute.value.number.codecademy-css",foreground:_(r.text)},{token:"attribute.value.unit.codecademy-css",foreground:_(r.text)},{token:"keyword.flow.codecademy-css",foreground:_(r.keyword)},{token:"keyword.value.codecademy-css",foreground:_(r.atom)},{token:"operator.codecademy-css",foreground:_(r.predefined)},{token:"operator-word.codecademy-css",foreground:_(r.keyword)},{token:"default.codecademy-scss",foreground:_(r.constant)},{token:"number.codecademy-scss",foreground:_(r.text)},{token:"delimiter.codecademy-scss",foreground:_(r.predefined)},{token:"delimiter.bracket.codecademy-scss",foreground:_(r.predefined)},{token:"delimiter.curly.codecademy-scss",foreground:_(r.predefined)},{token:"delimiter.parenthesis.codecademy-scss",foreground:_(r.predefined)},{token:"delimiter.square.codecademy-scss",foreground:_(r.predefined)},{token:"delimiter.codecademy-scss",foreground:_(r.predefined)},{token:"keyword.media.type.value.codecademy-scss",foreground:_(r.attribute)},{token:"keyword.media.value.value.codecademy-scss",foreground:_(r.keyword)},{token:"keyword.property.value.codecademy-scss",foreground:_(r.key)},{token:"keyword.name.codecademy-scss",foreground:_(r.key)},{token:"selector-class.codecademy-scss",foreground:_(r.attribute)},{token:"selector-colon.codecademy-scss",foreground:_(r.predefined)},{token:"selector-id.codecademy-scss",foreground:_(r.predefined)},{token:"meta.codecademy-scss",foreground:_(r.tag)},{token:"meta-parens.codecademy-scss",foreground:_(r.predefined)},{token:"meta-url.codecademy-scss",foreground:_(r.text)},{token:"attribute.name.codecademy-scss",foreground:_(r.key)},{token:"attribute.value.codecademy-scss",foreground:_(r.keyword)},{token:"attribute.name.codecademy-scss",foreground:_(r.predefined)},{token:"attribute.value.codecademy-scss",foreground:_(r.constant)},{token:"attribute.value.number.codecademy-scss",foreground:_(r.text)},{token:"attribute.value.unit.codecademy-scss",foreground:_(r.text)},{token:"keyword.flow.codecademy-scss",foreground:_(r.keyword)},{token:"operator.codecademy-scss",foreground:_(r.predefined)},{token:"operator-word.codecademy-scss",foreground:_(r.keyword)},{token:"operator.swift",foreground:_(r.operator)},{token:"default.codecademy-sql",foreground:_(r.constant)},{token:"string.codecademy-sql",foreground:_(r.string)},{token:"operator.codecademy-sql",foreground:_(r.basic)},{token:"null.codecademy-sql",foreground:_(r.atom)},{token:"predefined.codecademy-sql",foreground:_(r.keyword)},{token:"identifier.codecademy-sql",foreground:_(r.basic)},{token:"delimiter.codecademy-sql",foreground:_(r.basic)},{token:"number.codecademy-sql",foreground:_(r.constant)},{token:"default.codecademy-js",foreground:_(r.invalid)},{token:"identifier.codecademy-js",foreground:_(r.text)},{token:"type.codecademy-js",foreground:_(r.keyword)},{token:"definition.codecademy-js",foreground:_(r.keyword)},{token:"keyword.codecademy-js",foreground:_(r.keyword)},{token:"primitive.codecademy-js",foreground:_(r.atom)},{token:"number.codecademy-js",foreground:_(r.text)},{token:"property.codecademy-js",foreground:_(r.key)},{token:"delimiter.codecademy-js",foreground:_(r.basic)},{token:"delimiter.parenthesis.codecademy-js",foreground:_(r.basic)},{token:"delimiter.square.codecademy-js",foreground:_(r.basic)},{token:"delimiter.bracket.codecademy-js",foreground:_(r.basic)},{token:"delimiter.curly.codecademy-js",foreground:_(r.basic)},{token:"delimiter.angle.codecademy-js",foreground:_(r.basic)},{token:"default.codecademy-python",foreground:_(r.constant)},{token:"subkeyword.codecademy-python",foreground:_(r.basic)},{token:"delimiter.parenthesis.codecademy-python",foreground:_(r.basic)},{token:"delimiter.bracket.codecademy-python",foreground:_(r.basic)},{token:"delimiter.curly.codecademy-python",foreground:_(r.basic)},{token:"delimiter.codecademy-python",foreground:_(r.basic)},{token:"number.codecademy-python",foreground:_(r.constant)},{token:"operator.codecademy-python",foreground:_(r.basic)},{token:"definition.codecademy-python",foreground:_(r.keyword)},{token:"classMember.codecademy-python",foreground:_(r.key)}],colors:{"editor.background":o.background,"editor.foreground":o.text,"editorIndentGuide.background":o.indent.inactive,"editorIndentGuide.activeBackground":o.indent.active}}}(n);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(o){_defineProperty(e,o,r[o])})}return e}function _defineProperty(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function MonacoEditor_asyncGeneratorStep(e,o,r,n,t,d,a){try{var i=e[d](a),c=i.value}catch(e){return void r(e)}i.done?o(c):Promise.resolve(c).then(n,t)}function MonacoEditor_defineProperties(e,o){for(var r=0;r<o.length;r++){var n=o[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,o){return!o||"object"!==_typeof(o)&&"function"!=typeof o?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,o){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,o){return e.__proto__=o,e})(e,o)}var E=new h(new Map([[u.a,function(){return Promise.all([r.e(53),r.e(255),r.e(245),r.e(270),r.e(268),r.e(501)]).then(r.bind(null,"8q3k"))}],[u.b,function(){return Promise.all([r.e(53),r.e(259),r.e(245),r.e(269),r.e(502)]).then(r.bind(null,"tzQ0"))}],[u.c,function(){return Promise.all([r.e(236),r.e(503)]).then(r.bind(null,"j8eP"))}],[u.d,function(){return Promise.all([r.e(236),r.e(504)]).then(r.bind(null,"Kpuk"))}],[u.e,function(){return Promise.all([r.e(270),r.e(505)]).then(r.bind(null,"wqtg"))}],[u.f,function(){return r.e(506).then(r.bind(null,"EhmE"))}]])),O=function(e){function MonacoEditor(){var e,o;!function MonacoEditor_classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,MonacoEditor);for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return(o=_possibleConstructorReturn(this,(e=_getPrototypeOf(MonacoEditor)).call.apply(e,[this].concat(n)))).editorWillMount=function(e){o.monaco=e,e.editor.defineTheme("dark",x)},o.editorDidMount=function(e,r){r.editor.setTheme("dark"),o.editor=e;var n=function transmitKeyboardEvent(e){var o=new KeyboardEvent(e.browserEvent.type,e.browserEvent);document.dispatchEvent(o),e.keyCode===r.KeyCode.Enter&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),e.stopPropagation())},t=!0,d=!1,a=void 0;try{for(var i,c=["onKeyDown","onKeyUp"][Symbol.iterator]();!(t=(i=c.next()).done);t=!0){e[i.value](n)}}catch(e){d=!0,a=e}finally{try{t||null==c.return||c.return()}finally{if(d)throw a}}o.applyLanguage(!0)},o.onValueChange=function(e){var r,n;null===(r=(n=o.props).onValueChange)||void 0===r||r.call(n,e),o.applyLanguage()},o}return function _inherits(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&_setPrototypeOf(e,o)}(MonacoEditor,a["Component"]),function MonacoEditor_createClass(e,o,r){return o&&MonacoEditor_defineProperties(e.prototype,o),r&&MonacoEditor_defineProperties(e,r),e}(MonacoEditor,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(e,o){var r;return this.props.file!==e.file||this.props.onValueChange!==e.onValueChange||(null===(r=this.state)||void 0===r?void 0:r.languageId)!==(null==o?void 0:o.languageId)}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.applyLanguage(!0)}},{key:"applyLanguage",value:function(){var e=function MonacoEditor_asyncToGenerator(e){return function(){var o=this,r=arguments;return new Promise(function(n,t){var d=e.apply(o,r);function _next(e){MonacoEditor_asyncGeneratorStep(d,n,t,_next,_throw,"next",e)}function _throw(e){MonacoEditor_asyncGeneratorStep(d,n,t,_next,_throw,"throw",e)}_next(void 0)})}}(d.a.mark(function _callee(e){var o,r,n,t,a,i;return d.a.wrap(function _callee$(d){for(;;)switch(d.prev=d.next){case 0:if(t=g(this.props.file.name,this.monaco),this.setState({languageId:t}),t){d.next=4;break}return d.abrupt("return");case 4:return a=this.editor.getModel(),e&&this.monaco.editor.setModelLanguage(a,t),d.next=8,E.use(t,this.monaco);case 8:i=d.sent,this.previousDecorations=a.deltaDecorations(null!==(o=this.previousDecorations)&&void 0!==o?o:[],null!==(r=null===(n=i.validateSyntax)||void 0===n?void 0:n.call(i,a.getValue()))&&void 0!==r?r:[]);case 10:case"end":return d.stop()}},_callee,this)}));return function applyLanguage(o){return e.apply(this,arguments)}}()},{key:"render",value:function render(){var e;return i.a.createElement(s.a,{editorDidMount:this.editorDidMount,editorWillMount:this.editorWillMount,onChange:this.onValueChange,options:_objectSpread({},k(null===(e=this.state)||void 0===e?void 0:e.languageId),{readOnly:this.props.readOnly}),theme:"vs-dark",value:this.props.file.content})}}]),MonacoEditor}();o.default=O},GL4F:function(e,o,r){"use strict";r.d(o,"a",function(){return n}),r.d(o,"b",function(){return t}),r.d(o,"c",function(){return d}),r.d(o,"d",function(){return a}),r.d(o,"e",function(){return i}),r.d(o,"f",function(){return c});var n="codecademy-css",t="codecademy-html",d="codecademy-js",a="codecademy-python",i="codecademy-scss",c="codecademy-sql"}}]);
//# sourceMappingURL=components-MonacoEditor.b858260e475f5ac8deaa.chunk.js.map