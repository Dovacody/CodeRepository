(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[123],{"1aMd":function(e,t,a){"use strict";var r=a("E+oP"),n=a.n(r),i=a("Z0cm"),o=a.n(i),c=a("mwIZ"),s=a.n(c),l=a("DzJC"),u=a.n(l),d=a("q1tI"),p=a.n(d),m=a("24Ii"),f=a.n(m),b=a("xk4V"),y=a.n(b),_=a("TSYQ"),v=a.n(_),h=a("iRAd"),g=a("TUVh"),S=a("gnvm"),E=a("QqFe"),C=a("gtj7"),O=a("ev9x"),j=a("b0K7"),w=a("fLhW"),k=a("tYyt"),P=a("hFGM"),I=a("NWss"),N=a("DAui"),x=a("f8p9"),F=a("oHca"),R=a("1wI6"),V=a("5sab"),A=a("IiNe"),T=a.n(A),B={password:'\n  Codecademy requires that you have a secure password. If your password is too weak, make sure you:\n\n  - Use at least 6 characters\n  - Use a mix of upper and lower case characters\n  - Use at least 1 number\n  - Use at least 1 special character like ".", "&", or "*"\n  - Do not use common words or simple passwords like "password", "qwerty", or "123456"\n  '},L=function ValidationError(e){if(!e.validationError)return null;var t=B[e.fieldName];return t?p.a.createElement("div",{className:T.a.tooltip},p.a.createElement(F.b,{focusable:!0,id:"".concat(e.fieldName,"-tooltip"),target:p.a.createElement("div",{className:T.a.tooltipTarget},p.a.createElement("span",{"aria-live":"assertive",className:T.a.validationText},e.validationError),p.a.createElement(R.a,{height:16,width:16,className:T.a.infoIcon})),position:F.a.BottomRight,tipClassName:T.a.tipWrapper},p.a.createElement(V.a,{text:t,spacing:"tight",className:T.a.tooltipContents}))):p.a.createElement("span",{"aria-live":"assertive",className:T.a.validationText},e.validationError)},U=a("OYi6"),D=a.n(U);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(Object(a));"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,a[t])})}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}return a}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G=[{name:"email",label:I.emailLabel,type:"email",invalidMessage:"Please use a valid email address"},{name:"password",label:I.passwordLabel,type:"password",invalidMessage:"is not long enough",pattern:".{6,128}"}],z="/register/validate",W="/register",q=function extractValidationErrors(e){var t=s()(e,"body.errors");return t&&Object.values(t).filter(function(e){return e})?Object.entries(t).reduce(function(e,t){var a=_slicedToArray(t,2),r=a[0],n=a[1];return _objectSpread({},e,{[r]:o()(n)?n[0]:n})},{}):null},H=function(e){function RegistrationForm(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RegistrationForm);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(RegistrationForm)).call.apply(e,[this].concat(r)))).idPrefix="sign_up_form_",t.state={disabled:!1,recaptchaInstanceId:y()(),validationErrors:{},validatedFields:new Set([])},t.onRecapChange=function(e){t.submitForm(e)},t.onRecapExpire=function(){t.resetRecaptcha()},t.onSuccessfulValidation=function(e){t.setValidationErrorState({[e]:void 0}),t.setState(function(t){return{validatedFields:t.validatedFields.add(e)}})},t.onFailedValidation=function(e,a){t.setValidationErrorState({[e]:a}),t.setState(function(t){return t.validatedFields.delete(e),{validatedFields:t.validatedFields}})},t.onSubmissionFailedValidation=function(e){t.setValidationErrorState(e),t.setState(function(a){Object.keys(e).forEach(function(e){a.validatedFields.delete(e)}),t.setState({validatedFields:a.validatedFields})})},t.submitForm=function(e){f.a.post(W).send(_objectSpread({},t.serialize(),{"g-recaptcha-response":e})).use(P.b).accept("json").then(function(e){var a=e.body;Object(w.a)("user_sign_up"),t.setState({disabled:!1}),t.props.onSuccess(a)}).catch(function(e){var a=q(e.response);t.setState({disabled:!1}),a&&t.onSubmissionFailedValidation(a),t.resetRecaptcha()})},t.onSubmitInitialize=function(e){return e.preventDefault(),t.isValid()?(t.setState({disabled:!0}),f.a.post(z).send(t.serialize()).use(P.b).accept("json").then(function(){t.captcha.execute()}).catch(function(e){var a=q(e.response);a&&t.onSubmissionFailedValidation(a),t.setState({disabled:!1})})):null},t.genericClientSideValidityHandler=function(e,a){var r,n=a.target.validity.valueMissing,i=a.target.validity.valid;n?r="can't be blank":i||(r=G.find(function(t){return t.name===e}).invalidMessage),r?t.onFailedValidation(e,r):t.onSuccessfulValidation(e)},t.genericServerSideValidityHandler=u()(function(e,a){a.target.value?f.a.post(z).send({user:{[e]:a.target.value}}).use(P.b).accept("json").then(function(){t.onSuccessfulValidation(e)}).catch(function(a){var r=q(a.response);r&&r[e]?t.onFailedValidation(e,r[e]):t.onSuccessfulValidation(e)}):t.onFailedValidation(e,"can't be blank")},250),t.validateField=function(e,a){"password"===e?t.genericClientSideValidityHandler(a.target.name,a):t.genericServerSideValidityHandler(a.target.name,a)},t.onFieldBlur=function(e){e.persist();var a=t.serialize().user||{},r=a.email,i=void 0===r?"":r,o=a.password,c=void 0===o?"":o;n()(i)&&n()(c)||t.validateField(e.target.name,e)},t.onFieldKeyUp=function(e){e.persist();var a=e.target.name;t.state.validationErrors[a]&&t.validateField(e.target.name,e)},t.onSubmitClick=function(){Object(w.e)({target:"create_account"})},t.setFormRef=function(e){t.form=e},t.setCaptchaRef=function(e){t.captcha=e},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(RegistrationForm,d["Component"]),function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(RegistrationForm,[{key:"setValidationErrorState",value:function setValidationErrorState(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setState(function(a){return _objectSpread({validationErrors:_objectSpread({},a.validationErrors,e)},t)})}},{key:"isValid",value:function isValid(){return!Object.values(this.state.validationErrors).filter(function(e){return e}).length}},{key:"serialize",value:function serialize(){return _toConsumableArray(this.form.elements).filter(function(e){return e.name}).reduce(function(e,t){var a=t.dataset.resource;return _objectSpread({},e,a?{[a]:_objectSpread({},e[a],{[t.name]:t.value})}:{[t.name]:t.value})},{})}},{key:"resetRecaptcha",value:function resetRecaptcha(){this.setState({recaptchaInstanceId:y()(),disabled:!1})}},{key:"render",value:function render(){var e=this,t=k.a.get("authenticity_token"),a=this.props,r=a.ctaText,n=a.currentPage,i=a.defaultValues,o=void 0===i?{email:"",password:""}:i,c=a.disableFieldset,s=a.hideOauth,l=a.hideRecaptchaInfo,u=a.hideSubmitButton,d=a.locationType,m=a.markValidatedFields,f=a.redirectUrl,b=a.submitButtonProps,y=a.theme,_=a.classNames,O=void 0===_?{}:_,j=a.isStudent,w="location/EXERCISE"===d,P=this.state.disabled,F=f&&Object(C.f)(f),R=v()("recaptcha-wrapper",{[D.a.padBottomIfNotEmpty]:"compact"!==y});return p.a.createElement("div",{className:v()(D.a.registrationContainer,{[D.a.registrationContainerCompact]:"compact"===y})},p.a.createElement("form",{onSubmit:this.onSubmitInitialize,noValidate:!0,ref:this.setFormRef,method:"POST"},p.a.createElement("fieldset",{className:D.a.fieldset,disabled:c},p.a.createElement("input",{name:"authenticity_token",type:"hidden",value:t}),p.a.createElement("input",{name:"signing_up_from_exercise",type:"hidden",value:"".concat(w)}),j&&p.a.createElement("input",{name:"student_access",type:"hidden",value:1}),p.a.createElement("input",{name:"referring_page",type:"hidden",value:n}),p.a.createElement("input",{name:"redirect",type:"hidden",value:F}),p.a.createElement("div",{className:v()(D.a.formGroups,{[D.a.formGroupsCompact]:"compact"===y},O.formGroups)},G.map(function(t){return p.a.createElement(h.a,{key:"".concat(e.idPrefix).concat(t.name),htmlFor:"".concat(e.idPrefix).concat(t.name),label:"email"===t.name&&j?I.emailStudentLabel:t.label,className:v()(D.a.formGroup,{[D.a.formGroupCompact]:"compact"===y})},p.a.createElement(L,{fieldName:t.name,validationError:e.state.validationErrors[t.name]}),p.a.createElement("div",{className:D.a.inputWrapper},p.a.createElement(g.a,{"aria-invalid":e.state.validationErrors[t.name]?"true":void 0,className:v()(D.a.input,{[D.a.inputCompact]:"compact"===y},O.input),"data-testid":"".concat(t.name,"-field"),htmlFor:"".concat(e.idPrefix).concat(t.name),name:t.name,type:t.type,onBlur:e.onFieldBlur,onKeyUp:e.onFieldKeyUp,required:!0,error:!!e.state.validationErrors[t.name],pattern:t.pattern,"data-resource":"user",defaultValue:o[t.name]}),m&&e.state.validatedFields.has(t.name)&&p.a.createElement(S.a,{name:"checkmark",className:D.a.validCheckmark})))})),p.a.createElement("div",{className:R},this.state.validationErrors.recaptcha&&p.a.createElement("div",{className:D.a.recaptchaError,"data-testid":"recaptcha-error"},this.state.validationErrors.recaptcha),p.a.createElement(N.a,{key:this.state.recaptchaInstanceId,publicKey:k.a.get("recaptcha_key"),size:"invisible",ref:this.setCaptchaRef,onChange:this.onRecapChange,onExpired:this.onRecapExpire})),p.a.createElement(E.a,_extends({},b,{onClick:this.onSubmitClick,type:"submit",className:v()(D.a.submitButton,{[D.a.submitButtonCompact]:"compact"===y,[D.a.hidden]:u},O.submitButton),disabled:P,theme:"brand-purple",id:"".concat(this.idPrefix,"submit")}),r),!l&&p.a.createElement("p",{className:D.a.tos,dangerouslySetInnerHTML:{__html:I.recaptchaTOS}}))),!s&&p.a.createElement(x.a,{signUp:!0,urlParams:{redirect:F}}))}}]),RegistrationForm}();H.defaultProps={onSuccess:function redirectAfterLogin(e){var t=e.redirectTo,a=e.experiments,r=e.grantedStudentAccess;Object(O.g)(t)?window.location.assign(Object(C.f)(t||Object(j.C)())):window.location.assign(Object(C.f)(function getAfterLoginPath(e,t,a){var r="variant"===t.exp_credit_card_trial_2019_9_16_v0_3;return r&&!a?Object(j.T)({redirectUrl:e,fromSignUpPage:!0,showCheckoutV2:!0}):Object(j.J)(e,r,!0)||Object(j.C)()}(t,a,r)))},submitButtonProps:{size:"large",theme:"brand-purple"},ctaText:I.createAccountCTA,isStudent:!1};t.a=H},IiNe:function(e,t,a){e.exports={validationText:"validationText__2V8IomQ7py3ImJSkR74lUL",tooltip:"tooltip__SfXUpCRO-J9ns7jIIcq-2",tipWrapper:"tipWrapper__2EqLYLfvCkkov8Czpsfpvc",tooltipTarget:"tooltipTarget__2QEgWo1UnUfrI64N8g5a7R",infoIcon:"infoIcon__1g_zfaxGIRIbEh291YxmGv",tooltipContents:"tooltipContents__2bqd9NtbRxq1kYIR2tCLhZ"}},NWss:function(e){e.exports=JSON.parse('{"createAccountCTA":"Start coding now","createAccountComplete":"Account created. You\'re almost there!","emailLabel":"Email","passwordLabel":"Password","emailStudentLabel":"Student Email","recaptchaTOS":"By signing up for Codecademy, you agree to Codecademy\'s <a href=\\"/terms\\">Terms of Service</a> & <a href=\\"/policy\\">Privacy Policy</a>."}')},OYi6:function(e,t,a){e.exports={registrationContainer:"registrationContainer__1DWVArjxkRSHEqpISv3YfU",registrationContainerCompact:"registrationContainerCompact__3f5fD0mXckkhzC_gkXDQaJ",screenReaderOnly:"screenReaderOnly__2S7ruRxpd1VhnuyeMz0di2",submitButton:"submitButton__1syIjVGtZiGfg2aBWCcvkZ",submitButtonCompact:"submitButtonCompact__DTD3_nPUjcDW2juBilPyk",tos:"tos__2S7BNNliayxJrYfZEqHGOH",fieldset:"fieldset__2IcsxborktqVvm5FdfygAO",formCompact:"formCompact__Q6nQtda86q7aKdsfLQSvz",formGroupsCompact:"formGroupsCompact__1e0cWED9TSZNrITxnH3MoV",formGroupCompact:"formGroupCompact__225iYntNRtxkKn05IYqtJ1",inputCompact:"inputCompact__2Shf6uPLKjgQGwlRGM6u4D",validCheckmark:"validCheckmark__FINN8PBxaKyExgp8BuWaN",inputWrapper:"inputWrapper__1WcSn7pm4PiUUt2d3hgszk",hidden:"hidden__IE7yAQczIi7NG5Xaf2XMv",recaptchaError:"recaptchaError__2PRVQPBckCquoqnpNkolaI",formGroup:"formGroup__26lWN6IoN44keRivjjZbD7",padBottomIfNotEmpty:"padBottomIfNotEmpty__SRLk-qQ59lLzCQRc26yql"}}}]);
//# sourceMappingURL=123.1f187d44552f08997595.chunk.js.map