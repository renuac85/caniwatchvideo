!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,a,i,s,u,_,l,c,p={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,a,i,s={};for(i in n)"key"==i?o=n[i]:"ref"==i?a=n[i]:s[i]=n[i];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return y(e,s,o,a,null)}function y(e,n,t,a,i){var s={type:e,props:n,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==i?++o:i,__i:-1,__u:0};return null==i&&null!=r.vnode&&r.vnode(s),s}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function I(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return I(e)}}function S(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!C.__r++||i!==r.debounceRendering)&&((i=r.debounceRendering)||s)(C)}function C(){var e,n,t,o,i,s,_,l;for(a.sort(u);e=a.shift();)e.__d&&(n=a.length,o=void 0,s=(i=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},i)).__v=i.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,_,null==s?k(i):s,!!(32&i.__u),l),o.__v=i.__v,o.__.__k[o.__i]=o,G(_,o,l),o.__e!=s&&I(o)),a.length>n&&a.sort(u));C.__r=0}function P(e,n,t,r,o,a,i,s,u,_,l){var c,f,h,v,m,g=r&&r.__k||d,y=n.length;for(t.__d=u,H(t,n,g),u=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?p:g[h.__i]||p,h.__i=c,M(e,h,f,o,a,i,s,u,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&T(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(u&&!u.isConnected&&(u=k(f)),u=A(h,u,e)):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=u,t.__e=m}function H(e,n,t){var r,o,a,i,s,u=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<u;r++)i=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,s=N(o,t,i,l),o.__i=s,a=null,-1!==s&&(l--,(a=t[s])&&(a.__u|=131072)),null==a||null===a.__v?(-1==s&&c--,"function"!=typeof o.type&&(o.__u|=65536)):s!==i&&(s===i+1?c++:s>i?l>u-i?c+=s-i:c--:s<i?s==i-1&&(c=s-i):c=0,s!==r+c&&(o.__u|=65536))):(a=t[i])&&null==a.key&&a.__e&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=k(a)),E(a,a,!1),t[i]=null,l--);if(l)for(r=0;r<_;r++)null!=(a=t[r])&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=k(a)),E(a,a))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(e,n,t,r){var o=e.key,a=e.type,i=t-1,s=t+1,u=n[t];if(null===u||u&&o==u.key&&a===u.type&&!(131072&u.__u))return t;if(r>(null==u||131072&u.__u?0:1))for(;i>=0||s<n.length;){if(i>=0){if((u=n[i])&&!(131072&u.__u)&&o==u.key&&a===u.type)return i;i--}if(s<n.length){if((u=n[s])&&!(131072&u.__u)&&o==u.key&&a===u.type)return s;s++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function x(e,n,t,r,o){var a;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])a=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+a]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,a?c:l,a)):e.removeEventListener(n,a?c:l,a);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function U(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,o,a,i,s,u,_,l,c){var d,f,g,y,I,S,C,H,A,N,D,U,M,G,T,E=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),s=[_=n.__e=o.__e]),(d=r.__b)&&d(n);e:if("function"==typeof E)try{if(H=n.props,A=(d=E.contextType)&&a[d.__c],N=d?A?A.props.value:d.__:a,o.__c?C=(f=n.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(H,N):(n.__c=f=new b(H,N),f.constructor=E,f.render=R),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=N,f.__n=a,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,E.getDerivedStateFromProps(H,f.__s))),y=f.props,I=f.state,f.__v=n,g)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,N),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,N)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),D=0;D<f._sb.length;D++)f.__h.push(f._sb[D]);f._sb=[],f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,N),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,I,S)}))}if(f.context=N,f.props=H,f.__P=e,f.__e=!1,U=r.__r,M=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,U&&U(n),d=f.render(f.props,f.state,f.context),G=0;G<f._sb.length;G++)f.__h.push(f._sb[G]);f._sb=[]}else do{f.__d=!1,U&&U(n),d=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++M<25);f.state=f.__s,null!=f.getChildContext&&(a=v(v({},a),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(S=f.getSnapshotBeforeUpdate(y,I)),P(e,h(T=null!=d&&d.type===w&&null==d.key?d.props.children:d)?T:[T],n,o,a,i,s,u,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&u.push(f),C&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=s?(n.__e=_,n.__u|=l?160:32,s[s.indexOf(_)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==s&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,a,i,s,u,_){var l,c,d,f,v,g,y,w=r.props,b=n.props,I=n.type;if("svg"===I?a="http://www.w3.org/2000/svg":"math"===I?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=i)for(l=0;l<i.length;l++)if((v=i[l])&&"setAttribute"in v==!!I&&(I?v.localName===I:3===v.nodeType)){e=v,i[l]=null;break}if(null==e){if(null===I)return document.createTextNode(b);e=document.createElementNS(a,I,b.is&&b),i=null,u=!1}if(null===I)w===b||u&&e.data===b||(e.data=b);else{if(i=i&&t.call(e.childNodes),w=r.props||p,!u&&null!=i)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)d=v;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;x(e,l,null,v,a)}for(l in b)v=b[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||u&&"function"!=typeof v||w[l]===v||x(e,l,v,w[l],a);if(c)u||d&&(c.__html===d.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(d&&(e.innerHTML=""),P(e,h(f)?f:[f],n,r,o,"foreignObject"===I?"http://www.w3.org/1999/xhtml":a,i,s,i?i[0]:r.__k&&k(r,0),u,_),null!=i)for(l=i.length;l--;)null!=i[l]&&m(i[l]);u||(l="value",void 0!==g&&(g!==e[l]||"progress"===I&&!g||"option"===I&&g!==w[l])&&x(e,l,g,w[l],a),l="checked",void 0!==y&&y!==e[l]&&x(e,l,y,w[l],a))}return e}(o.__e,n,o,a,i,s,u,l,c);(d=r.diffed)&&d(n)}function G(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)T(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function T(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,a;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&E(o[a],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function R(e,n,t){return this.constructor(e,t)}t=d.slice,r={__e:function(e,n,t,r){for(var o,a,i;n=n.__;)if((o=n.__c)&&!o.__)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),i=o.__d),i)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=w,a=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},C.__r=0,_=0,l=U(!1),c=U(!0);var F=function(e,n,t,r){var o;n[0]=0;for(var a=1;a<n.length;a++){var i=n[a++],s=n[a]?(n[0]|=i?1:2,t[n[a++]]):n[++a];3===i?r[0]=s:4===i?r[1]=Object.assign(r[1]||{},s):5===i?(r[1]=r[1]||{})[n[++a]]=s:6===i?r[1][n[++a]]+=s+"":i?(o=e.apply(s,F(e,s,t,["",null])),r.push(o),s[0]?n[0]|=2:(n[a-2]=0,n[a]=o)):r.push(s)}return r},W=new Map;var O=function(e){var n=W.get(this);return n||(n=new Map,W.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",a="",i=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,t),r=6),e&&(i.push(r,e,0,t),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&s(),s(u));for(var _=0;_<e[u].length;_++)n=e[u][_],1===r?"<"===n?(s(),i=[i],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:a?n===a?a="":o+=n:'"'===n||"'"===n?a=n:">"===n?(s(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[u][_+1])?(s(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(s(),r=2):o+=n),3===r&&"!--"===o&&(r=4,i=i[0])}return s(),i}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function V(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=j(r,t)),r):(n&&(r=j(r,n)),r)}}function j(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var L,B=V("header");function K(e){return O(L||(L=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),B(),e.children)}var q,$={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Stop:{en:"Stop",ru:"Стоп"}};function z(e){var n=$[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[q];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(q,'" in getText().')),e):t}var Y,J,Q,X,Z=0,ee=[],ne=[],te=r,re=te.__b,oe=te.__r,ae=te.diffed,ie=te.__c,se=te.unmount,ue=te.__;function _e(e,n){te.__h&&te.__h(J,e,Z||n),Z=0;var t=J.__H||(J.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:ne}),t.__[e]}function le(e){return Z=1,function(e,n,t){var r=_e(Y++,2);if(r.t=e,!r.__c&&(r.__=[ye(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=J,!J.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!a||a.call(this,e,n,t);var i=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(i=!0)}})),!(!i&&r.__c.props===e)&&(!a||a.call(this,e,n,t))};J.u=!0;var a=J.shouldComponentUpdate,i=J.componentWillUpdate;J.componentWillUpdate=function(e,n,t){if(this.__e){var r=a;a=void 0,o(e,n,t),a=r}i&&i.call(this,e,n,t)},J.shouldComponentUpdate=o}return r.__N||r.__}(ye,e)}function ce(e,n){var t=_e(Y++,7);return ge(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function pe(){for(var e;e=ee.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ve),e.__H.__h.forEach(me),e.__H.__h=[]}catch(n){e.__H.__h=[],te.__e(n,e.__v)}}te.__b=function(e){J=null,re&&re(e)},te.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),ue&&ue(e,n)},te.__r=function(e){oe&&oe(e),Y=0;var n=(J=e.__c).__H;n&&(Q===J?(n.__h=[],J.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=ne,e.__N=e.i=void 0}))):(n.__h.forEach(ve),n.__h.forEach(me),n.__h=[],Y=0)),Q=J},te.diffed=function(e){ae&&ae(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==ee.push(n)&&X===te.requestAnimationFrame||((X=te.requestAnimationFrame)||he)(pe)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==ne&&(e.__=e.__V),e.i=void 0,e.__V=ne}))),Q=J=null},te.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ve),e.__h=e.__h.filter((function(e){return!e.__||me(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],te.__e(t,e.__v)}})),ie&&ie(e,n)},te.unmount=function(e){se&&se(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{ve(e)}catch(e){n=e}})),t.__H=void 0,n&&te.__e(n,t.__v))};var de,fe="function"==typeof requestAnimationFrame;function he(e){var n,t=function(){clearTimeout(r),fe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);fe&&(n=requestAnimationFrame(t))}function ve(e){var n=J,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),J=n}function me(e){var n=J;e.__c=e.__(),J=n}function ge(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function ye(e,n){return"function"==typeof n?n(e):n}function we(e){return O(de||(de=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var be,ke=V("row");function Ie(e){return O(be||(be=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),ke(),ke("category"),e.name,ke("body"),e.children)}var Se,Ce,Pe,He,Ae,Ne,De,xe,Ue,Me,Ge,Te,Ee,Re,Fe,We,Oe,Ve,je=V("tree-list"),Le={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function Be(e,t,r){return void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e?O(Se||(Se=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),je("string"),e):"number"==typeof e?O(Ce||(Ce=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("number"),e):"bigint"==typeof e?O(Pe||(Pe=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),je("bigint"),e):"boolean"==typeof e?O(He||(He=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("boolean"),String(e)):"function"==typeof e?O(Ae||(Ae=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),je("function")):"symbol"==typeof e?O(Ne||(Ne=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("symbol"),e):void 0===e?O(De||(De=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),je("undefined")):null===e?O(xe||(xe=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),je("null")):Array.isArray(e)?t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||Le[typeof e]}))?O(Me||(Me=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return O(Ue||(Ue=n(["","",""],["","",""])),o?", ":"",Be(e,t,r+1))}))," "):O(Ee||(Ee=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,a){var i=t.showArrayIndex?O(Ge||(Ge=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),je("index"),a):"";return O(Te||(Te=n(["<li>","","","</li>"],["<li>","","","</li>"])),i,Be(o,t,r+1),a===e.length-1?"":",")}))):t.compactObject&&r>0?O(Fe||(Fe=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,a,i){return O(Re||(Re=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),je("property"),o,Be(e[o],t,r+1),a===i.length-1?"":", ")}))," "):O(Oe||(Oe=n(["{<ul>\n        ","\n    </ul>}"],["{<ul>\n        ","\n    </ul>}"])),Object.keys(e).map((function(o,a,i){return O(We||(We=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),je("property"),o,Be(e[o],t,r+1),a===i.length-1?"":",")})))}function Ke(e){return O(Ve||(Ve=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Ie,e.title,je(),Be(e.data,e.options))}var qe,$e,ze,Ye,Je=function(){var e=le({})[1];return function(e,n){return Z=8,ce((function(){return e}),n)}((function(){return e({})}),[])},Qe=V("gamepad-list");function Xe(){if(!navigator.getGamepads)return O(qe||(qe=n(["<",">","<//>"],["<",">","<//>"])),we,z("🎮 Gamepad API is not supported."));var e=Je();!function(e,n){var t=_e(Y++,3);!te.__s&&ge(t.__H,n)&&(t.__=e,t.i=n,J.__H.__h.push(t))}((function(){var n=window.setInterval((function(){e()}),20),t=function(){e()};return window.addEventListener("gamepadconnected",t),window.addEventListener("gamepaddisconnected",t),function(){window.removeEventListener("gamepadconnected",t),window.removeEventListener("gamepaddisconnected",t),window.clearInterval(n)}}),[]);var t=navigator.getGamepads(),r=Array.isArray(t)?t.filter((function(e){return null!==e})):[];return r.length?O(ze||(ze=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Qe(),r.map((function(e,t){var r=e,o={index:r.index,mapping:r.mapping,connected:r.connected,timestamp:r.timestamp,axes:r.axes,buttons:r.buttons.map((function(e){return{value:e.value,pressed:e.pressed,touched:e.touched}}))};void 0!==r.hand&&(o.hand=r.hand);return O($e||($e=n(['\n                        <div class="','">\n                            <div class="','">',"</div>\n                            <",' name="','" data="','" options="','"><//>\n                        </div>'],['\n                        <div class="','">\n                            <div class="','">',"</div>\n                            <",' name="','" data="','" options="','"><//>\n                        </div>'])),Qe("item"),Qe("title"),r.id,Ke,t,o,{compactObject:!0,compactArrayWithSimpleTypes:!0,showArrayIndex:!0})}))):O(Ye||(Ye=n(["<",">","<//>"],["<",">","<//>"])),we,z("Connect and press any button on the gamepad."))}var Ze="undefined"!=typeof document,en="undefined"!=typeof window,nn="undefined"!=typeof navigator,tn="undefined"!=typeof screen;var rn=1;function on(e,n){return(e||"").slice(0,n)}function an(){return Math.floor(Math.random()*(1<<30))}var sn=512;function un(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function _n(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return un(t,n,e[n])})),un(t,"rn",an()),un(t,"c",!!nn&&navigator.cookieEnabled),un(t,"s",tn?[screen.width,screen.height,screen.colorDepth].join("x"):""),un(t,"sk",en&&window.devicePixelRatio||rn),un(t,"w",en?[window.innerWidth,window.innerHeight].join("x"):""),un(t,"en",Ze&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return un(t,"et",r),un(t,"st",r),un(t,"t",on(n,sn)),t.join(":")}var ln,cn,pn=1024;function dn(e){return on(e,pn)}function fn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":_n(n,r.title),rn:an(),ut:r.ut};r.url&&(o["page-url"]=dn(r.url)),r.referrer&&(o["page-ref"]=dn(r.referrer)),fn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:Ze?document.referrer:"",title:Ze?document.title:"",url:en&&window.location?window.location.href:""},params:ln}),function(e){q=e}((cn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==cn&&"ru"!==cn&&(cn="en"),cn));var hn,vn=V("footer");function mn(){return O(hn||(hn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),vn(),vn("item"),vn("l1"),vn("l2"),vn("l3"),vn("l4"),vn("l5"),vn("l6"),vn("item",{g:!0}),vn("G"),vn("i"),vn("t"),vn("H"),vn("u"),vn("b"))}var gn,yn,wn=V("main-menu");function bn(e){return O(yn||(yn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),wn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return O(gn||(gn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),wn("item",{selected:e.selected}),e.url,e.title)})))}var kn,In,Sn,Cn,Pn=[{header:"Can I watch video",menuTitle:{en:"Video & audio",ru:"Видео и аудио"},id:"index",url:"./"},{header:"Screen",menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{header:"Camera",menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html",hidden:!0},{header:"GPU",menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{header:"Gamepad",menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{header:"Storage",menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{header:"Network",menuTitle:{en:"Network",ru:"Сеть"},id:"network",url:"./network.html"},{header:"Battery",menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"}];function Hn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Pn.map((function(n){return e(e({},n),{title:(r=n.menuTitle,r[q]),selected:n.id===t});var r}));return O(kn||(kn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),bn,r)}function An(e){return O(In||(In=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Hn,e.children,mn)}!function(e,n,o){var a,i,s,u;r.__&&r.__(e,n),i=(a="function"==typeof o)?null:n.__k,s=[],u=[],M(n,e=(!a&&o||n).__k=g(w,null,[e]),i||p,p,n.namespaceURI,!a&&o?[o]:i?null:n.firstChild?t.call(n.childNodes):null,s,!a&&o?o:i?i.__e:n.firstChild,a,u),G(s,e,u)}(O(Cn||(Cn=n(["<"," //>"],["<"," //>"])),(function(){return O(Sn||(Sn=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),An,K,z("Gamepad"),Xe)})),document.querySelector(".page"))}));
