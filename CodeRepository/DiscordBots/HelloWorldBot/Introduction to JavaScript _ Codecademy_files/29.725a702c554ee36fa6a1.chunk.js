(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[29],{"Fm/g":function(t,e,n){"use strict";var o=n("q1tI"),r=n("i8i4"),i=n.n(r);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function Portal(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Portal),_possibleConstructorReturn(this,_getPrototypeOf(Portal).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Portal,o["Component"]),function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Portal,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.onUnmount()}},{key:"render",value:function render(){return i.a.createPortal(this.props.children,document.body)}}]),Portal}();c.defaultProps={onMount:function onMount(){},onUnmount:function onUnmount(){}},e.a=c},IjG6:function(t,e,n){t.exports={screenBlock:"screenBlock__oDL_b0XmAyRvoYrsmUxz4","delay-visibility":"delay-visibility__36MTTgxPXW5uOxBcCAGXfo",overlay:"overlay__jJd3Opyr9Zs5mY1f4tFKW",fixed:"fixed__5ByRX4jYA7_n_BxvynhgL",content:"content__2CtWzD8DWtxmsCDdRVneG3"}},QJz3:function(t,e,n){"use strict";n.d(e,"b",function(){return useNotificationArea}),n.d(e,"c",function(){return useNotificationInteractions}),n.d(e,"a",function(){return useNotifications});var o=n("q1tI"),r=n("/MKj"),i=n("tQXl"),c=n("GsXu"),a=n("peh1");function useNotificationArea(t){var e=t.id,n=Object(o.useMemo)(function(){var t=Object(i.a)(e),n=Object(i.b)(t);return Object(a.createStructuredSelector)({notifications:t,unreadCount:n})},[e]);return Object(r.useSelector)(n)}function useNotificationInteractions(){var t=Object(r.useDispatch)();return Object(o.useMemo)(function(){return{notificationsMarkedRead:function notificationsMarkedRead(e){return t(Object(c.d)(e))}}},[t])}function useNotifications(t){return function useNotificationSubscribe(t){var e=Object(r.useDispatch)();return Object(o.useEffect)(function(){return e(Object(c.c)(t)),function(){e(Object(c.b)(t.id))}},[e,t])}(t),{data:useNotificationArea(t),actions:useNotificationInteractions()}}},ixXQ:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={HEADER_AREA:{id:"bell",types:[],showRead:!0,limit:5},TOAST_AREA:{id:"toast",types:["achievement","streak"],showRead:!1,limit:5}}},wIFh:function(t,e,n){"use strict";var o=n("Puqe"),r=n.n(o),i=n("mwIZ"),c=n.n(i),a=n("gLAU"),u=n.n(a),s=n("6vz9"),f=n.n(s),p=n("TSYQ"),l=n.n(p),y=n("/kEZ"),d=n.n(y),_=n("ZMKu"),b=n("q1tI"),O=n.n(b),m=n("Fm/g"),v=n("IjG6"),h=n.n(v),P=n("eikI");function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var j=["transparent","screen","screen--light"],C=function(t){function Modal(t){var e;return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Modal),(e=_possibleConstructorReturn(this,_getPrototypeOf(Modal).call(this,t))).layerDidMount=function(){document.body.classList.add("modal-overlay-active"),e.props.viewportLocked&&(document.body.style.position="fixed"),e.props.shouldFocusOnMount&&e.containerRef&&e.containerRef.current&&e.containerRef.current.focus()},e.layerWillUnmount=function(){document.body.classList.remove("modal-overlay-active"),e.props.viewportLocked&&(document.body.style.position="")},e._initialOpen=function(){return e.props.isOpen},e._close=function(){e.setState({open:!1})},e._open=function(){e.setState({open:!0})},e.onContentClick=function(t){t.stopPropagation()},e.onOverlayClick=function(){e.props.onOutsideClick()},e.state={open:e._initialOpen()},e.containerRef=O.a.createRef(),e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Modal,O.a.Component),function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Modal,[{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(t){var e=this;t.isOpen!==this.props.isOpen&&(t.isOpen?u()(this._open):f()(function(){u()(e._close)},1e3*c()(this.props,"animation.transition.duration")||250))}},{key:"render",value:function render(){var t=this.props,e=t.overrideFocusTrap,n=t.contentProps,o=t.className,i=t.fixed,c=t.overlayType,a=t.isOpen,u=t.animation;if(!this.state.open&&!a)return null;var s=r()(this.props,"isOpen","onOutsideClick","fixed","transition","overlayType","contentProps","shouldFocusOnMount","overrideFocusTrap"),f=l()({[h.a.overlay]:!0,[h.a.fixed]:i,[h.a["type-".concat(c)]]:j.includes(c),["".concat(o)]:!!o}),p=l()(h.a.content,null==n?void 0:n.className),y=O.a.Children.map(this.props.children,function(t){return t}),b=e||P.a.isAdmin();return O.a.createElement(m.a,{onMount:this.layerDidMount,onUnmount:this.layerWillUnmount},O.a.createElement(d.a,{active:a,focusTrapOptions:{clickOutsideDeactivates:b}},O.a.createElement("div",_extends({},s,{className:f,onClick:this.onOverlayClick}),O.a.createElement("div",_extends({tabIndex:-1,ref:this.containerRef},n,{className:p,onClick:this.onContentClick}),O.a.createElement(_.a,null,a?O.a.createElement(_.b.div,u,y):null)))))}}]),Modal}();C.defaultProps={isOpen:!1,fixed:!0,onOutsideClick:function onOutsideClick(){},overlayType:"screen",contentProps:{},shouldFocusOnMount:!1,animation:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25}},overrideFocusTrap:!1},e.a=C}}]);
//# sourceMappingURL=29.725a702c554ee36fa6a1.chunk.js.map