(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[345],{CCiN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=n("/MKj"),i=n("MKeS"),a=n("M8cR"),s=n("2oex"),u=n("svkj"),l=n("m2dg"),p=n("Wdql");function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n,r,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var f=Object(i.a)({chunkName:function chunkName(){return"platform-scenes-lesson-exercise"},isReady:function isReady(e){return!!n.m[this.resolve(e)]},requireAsync:function requireAsync(){return Promise.all([n.e(4),n.e(8),n.e(10),n.e(12),n.e(13),n.e(25),n.e(19),n.e(52),n.e(53),n.e(55),n.e(56),n.e(83),n.e(84),n.e(95),n.e(109),n.e(144),n.e(165),n.e(170),n.e(233),n.e(435),n.e(0),n.e(2),n.e(5),n.e(7),n.e(9),n.e(11),n.e(14),n.e(15),n.e(58),n.e(67),n.e(49),n.e(81),n.e(98),n.e(65),n.e(101),n.e(114),n.e(157),n.e(163),n.e(230),n.e(346)]).then(n.bind(null,"4EYg"))},requireSync:function requireSync(e){var t=this.resolve(e);return n(t)},resolve:function resolve(){return"4EYg"}}),x=Object(i.a)({chunkName:function chunkName(){return"platform-scenes-lesson-legacy-exercise"},isReady:function isReady(e){return!!n.m[this.resolve(e)]},requireAsync:function requireAsync(){return Promise.all([n.e(4),n.e(8),n.e(10),n.e(12),n.e(13),n.e(25),n.e(19),n.e(52),n.e(53),n.e(55),n.e(56),n.e(63),n.e(83),n.e(84),n.e(95),n.e(105),n.e(144),n.e(165),n.e(207),n.e(229),n.e(438),n.e(0),n.e(2),n.e(5),n.e(7),n.e(9),n.e(11),n.e(14),n.e(15),n.e(58),n.e(67),n.e(49),n.e(81),n.e(65),n.e(102),n.e(114),n.e(66),n.e(120),n.e(73),n.e(157),n.e(99),n.e(163),n.e(134),n.e(194),n.e(224),n.e(347)]).then(n.bind(null,"NuAQ"))},requireSync:function requireSync(e){var t=this.resolve(e);return n(t)},resolve:function resolve(){return"NuAQ"}}),d=function mapStateToProps(e){return{currentExercise:Object(s.k)(e),currentCheckpoint:Object(p.i)(e),exercises:Object(s.m)(e)}},m={lessonSceneMounted:a.b,lessonSceneExerciseUpdated:a.a},b=function(e){function LessonScene(){return _classCallCheck(this,LessonScene),_possibleConstructorReturn(this,_getPrototypeOf(LessonScene).apply(this,arguments))}return _inherits(LessonScene,r["Component"]),_createClass(LessonScene,[{key:"componentDidMount",value:function componentDidMount(){this.props.lessonSceneMounted()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){this.props.currentExercise!==e.currentExercise&&this.props.lessonSceneExerciseUpdated()}},{key:"hasExercise",value:function hasExercise(){var e=this.props.currentExercise;return Boolean(e)}},{key:"render",value:function render(){if(!this.hasExercise())return null;var e=this.props,t=e.exercises,n=e.currentCourse,r=e.disabled,c=e.currentContentItem,i=e.currentExercise,a=e.currentCheckpoint,s=e.exitPaths,p=e.platformPage,d=e.showModal,m=(e.hasNextContent,e.navigateToExercise),b=_objectWithoutProperties(e,["exercises","currentCourse","disabled","currentContentItem","currentExercise","currentCheckpoint","exitPaths","platformPage","showModal","hasNextContent","navigateToExercise"]);return o.a.createElement(u.a,{flagName:"le_next"},function(e){return e?o.a.createElement(o.a.Fragment,null,o.a.createElement(f,_extends({},b,{disabled:r,currentContentItem:c,currentExercise:i,currentCheckpoint:a,exitPaths:s})),o.a.createElement(l.a,_extends({},b,{exitPaths:s,currentContentItem:c,currentExercise:i,exercises:t,navigate:m,noLock:!1}))):o.a.createElement(x,_extends({},b,{currentLesson:c,currentCourse:n,currentExercise:i,showModal:d,platformPage:p,navigateToExercise:m,disabled:Boolean(r),exitPaths:s}))})}}]),LessonScene}();t.default=Object(c.connect)(d,m)(b)},"M+gl":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("LZY7"),i=n("lkI2"),a=n("swBZ"),s=n("oHca"),u=n("QqFe"),l=n("kqkn"),p=n("TSYQ"),f=n.n(p),x=n("h60D"),d=n.n(x);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function ExerciseNavigationButton(e){var t=e.buttonProps,n=e.buttonText,r=e.id,c=e.tipText;return o.a.createElement(s.b,{id:r,target:o.a.createElement(u.a,_extends({},t,{className:f()(d.a.exerciseNavigationButton,t.className)}),n),theme:l.a.DarkMode,tipClassName:d.a.tooltip},c)},b=function ExerciseBackButton(e){var t=e.currentExerciseIndex,n=e.onClick,r=e.tipKey;return o.a.createElement(m,{buttonProps:{theme:"white",outline:!0,disabled:t<1,onClick:n},buttonText:a.components.exercise_navigation.back,id:"back",tipText:"".concat(r," + <")})},y=function ExerciseNextButton(e){var t=e.atLastExercise,n=e.mayProceed,r=e.nextButtonText,c=e.onClick,i=e.tipKey;return o.a.createElement(m,{buttonProps:{id:"discovery-next",go:n,disabled:!n,onClick:c,theme:"yellow"},buttonText:function renderNextButtonText(){return r||(t?a.components.exercise_navigation.up_next:a.components.exercise_navigation.next)}(),id:"next",tipText:"".concat(i," + >")})};t.a=function Navigation(e){var t=e.currentExerciseIndex,n=e.exerciseCount,r=e.mayProceed,a=e.navigate,s=e.nextButtonText,u=e.userClick,l=function next(){Object(i.a)("info","Clicked exercise navigation next button (".concat(r?"enabled":"disabled",")")),r?a({exerciseIndex:t+1}):u({data:{target:"disabled_next_exercise_button"}})},p=function previous(){t<1||(Object(i.a)("info","Clicked exercise navigation previous button"),a({exerciseIndex:t-1}))},f=navigator.platform.match("Mac")?"ctrl":"alt";return Object(c.a)((navigator.platform.match("Mac"),"".concat(f,"+.")),function(){return l(),!1},[t,r]),Object(c.a)((navigator.platform.match("Mac"),"".concat(f,"+,")),function(){return p(),!1},[t]),o.a.createElement("div",{className:"fcn-nav-wrapper"},o.a.createElement("div",{className:"fcn-nav-wrapper__center fcn-progress-container"},o.a.createElement(b,{currentExerciseIndex:t,onClick:p,tipKey:f}),o.a.createElement("div",{className:"fnc-nav__exercise-count"},"".concat(t+1,"/").concat(n)),o.a.createElement(y,{atLastExercise:t+1===n,mayProceed:r,nextButtonText:s,onClick:l,tipKey:f})))}},OfDm:function(e,t,n){e.exports={getHelpContainer:"getHelpContainer__YwLE3rnRqiS3132vjFBE1"}},h60D:function(e,t,n){e.exports={exerciseNavigationButton:"exerciseNavigationButton__4U6hooxHHA3QPMeUpIfPv",tooltip:"tooltip__4TgMJkN4JwWYNyoTUMg_P"}},m2dg:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("/MKj"),i=n("cFwM"),a=n("vBdZ"),s=n("M+gl"),u=n("CWAm"),l=n("2oex"),p=n("wE9P"),f=n("OfDm"),x=n.n(f),d={userClick:u.g},m=function legacyBugReportData(e){return{course:e.trackSlug,skill:e.contentItemSlug,exercise:e.exerciseSlug}};t.a=Object(c.connect)(function mapStateToProps(e){return{contentItemProgresses:Object(p.b)(e),currentExerciseIndex:Object(l.l)(e),canAccessNextExercise:Object(l.c)(e)}},d)(function ExerciseFooter(e){var t=e.disabled,n=e.currentContentItem,c=e.currentExercise,u=e.exercises,l=void 0===u?[]:u,p=e.locationParams,f=e.contentItemProgresses,d=e.currentExerciseIndex,b=e.noLock,y=e.navigate,h=e.exitPaths,v=e.canAccessNextExercise,_=e.userClick,g=Object(r.useCallback)(function(e){var t=e.exerciseIndex;if(!(t>=l.length)){var n=l[t];y(n.slug)}},[l,y]);return o.a.createElement(i.c,{currentType:"lesson",disabled:t,currentLesson:n,currentExercise:c,exercises:l,params:p,contentItemProgresses:f,titleRoute:h.back,title:"".concat(d+1,". ").concat(c.title),unlockAll:b,authors:[],navigate:g,entityTitle:n.title||""},o.a.createElement(i.b,{position:"center"},o.a.createElement(s.a,{mayProceed:b||v,currentLesson:n,exerciseCount:l.length,currentExerciseIndex:d,navigate:g,userClick:_})),o.a.createElement(i.b,{position:"right"},o.a.createElement(a.a,{isLesson:!0,className:x.a.getHelpContainer,bugReportData:m(p)})))})}}]);
//# sourceMappingURL=platform-scenes-lesson.f35e7f0de77f85387ab3.chunk.js.map