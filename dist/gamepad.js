!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,s,u,_,l,c,p={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,a,s={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:s[a]=n[a];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===s[a]&&(s[a]=e.defaultProps[a]);return y(e,s,o,i,null)}function y(e,n,t,i,a){var s={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(s),s}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function C(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!I.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||s)(I)}function I(){var e,n,t,o,a,s,_,l;for(i.sort(u);e=i.shift();)e.__d&&(n=i.length,o=void 0,s=(a=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[s]:null,_,null==s?k(a):s,!!(32&a.__u),l),o.__v=a.__v,o.__.__k[o.__i]=o,M(_,o,l),o.__e!=s&&S(o)),i.length>n&&i.sort(u));I.__r=0}function P(e,n,t,r,o,i,a,s,u,_,l){var c,f,h,v,m,g=r&&r.__k||d,y=n.length;for(t.__d=u,H(t,n,g),u=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?p:g[h.__i]||p,h.__i=c,R(e,h,f,o,i,a,s,u,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(u&&!u.isConnected&&(u=k(f)),u=A(h,u,e)):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=u,t.__e=m}function H(e,n,t){var r,o,i,a,s,u=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<u;r++)a=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,s=D(o,t,a,l),o.__i=s,i=null,-1!==s&&(l--,(i=t[s])&&(i.__u|=131072)),null==i||null===i.__v?(-1==s&&c--,"function"!=typeof o.type&&(o.__u|=65536)):s!==a&&(s===a+1?c++:s>a?l>u-a?c+=s-a:c--:s<a?s==a-1&&(c=s-a):c=0,s!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i,!1),t[a]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,a=t-1,s=t+1,u=n[t];if(null===u||u&&o==u.key&&i===u.type&&!(131072&u.__u))return t;if(r>(null==u||131072&u.__u?0:1))for(;a>=0||s<n.length;){if(a>=0){if((u=n[a])&&!(131072&u.__u)&&o==u.key&&i===u.type)return a;a--}if(s<n.length){if((u=n[s])&&!(131072&u.__u)&&o==u.key&&i===u.type)return s;s++}}return-1}function N(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function T(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||N(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,i?c:l,i)):e.removeEventListener(n,i?c:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function x(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,o,i,a,s,u,_,l,c){var d,f,g,y,S,C,I,H,A,D,N,x,R,M,U,E=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),s=[_=n.__e=o.__e]),(d=r.__b)&&d(n);e:if("function"==typeof E)try{if(H=n.props,A=(d=E.contextType)&&i[d.__c],D=d?A?A.props.value:d.__:i,o.__c?I=(f=n.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(H,D):(n.__c=f=new b(H,D),f.constructor=E,f.render=G),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=D,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,E.getDerivedStateFromProps(H,f.__s))),y=f.props,S=f.state,f.__v=n,g)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,D),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,D)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),N=0;N<f._sb.length;N++)f.__h.push(f._sb[N]);f._sb=[],f.__h.length&&u.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,D),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,S,C)}))}if(f.context=D,f.props=H,f.__P=e,f.__e=!1,x=r.__r,R=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,x&&x(n),d=f.render(f.props,f.state,f.context),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[]}else do{f.__d=!1,x&&x(n),d=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++R<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(C=f.getSnapshotBeforeUpdate(y,S)),P(e,h(U=null!=d&&d.type===w&&null==d.key?d.props.children:d)?U:[U],n,o,i,a,s,u,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&u.push(f),I&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=s?(n.__e=_,n.__u|=l?160:32,s[s.indexOf(_)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==s&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,a,s,u,_){var l,c,d,f,v,g,y,w=r.props,b=n.props,S=n.type;if("svg"===S?i="http://www.w3.org/2000/svg":"math"===S?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(l=0;l<a.length;l++)if((v=a[l])&&"setAttribute"in v==!!S&&(S?v.localName===S:3===v.nodeType)){e=v,a[l]=null;break}if(null==e){if(null===S)return document.createTextNode(b);e=document.createElementNS(i,S,b.is&&b),a=null,u=!1}if(null===S)w===b||u&&e.data===b||(e.data=b);else{if(a=a&&t.call(e.childNodes),w=r.props||p,!u&&null!=a)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)d=v;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;T(e,l,null,v,i)}for(l in b)v=b[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||u&&"function"!=typeof v||w[l]===v||T(e,l,v,w[l],i);if(c)u||d&&(c.__html===d.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(d&&(e.innerHTML=""),P(e,h(f)?f:[f],n,r,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":i,a,s,a?a[0]:r.__k&&k(r,0),u,_),null!=a)for(l=a.length;l--;)null!=a[l]&&m(a[l]);u||(l="value",void 0!==g&&(g!==e[l]||"progress"===S&&!g||"option"===S&&g!==w[l])&&T(e,l,g,w[l],i),l="checked",void 0!==y&&y!==e[l]&&T(e,l,y,w[l],i))}return e}(o.__e,n,o,i,a,s,u,l,c);(d=r.diffed)&&d(n)}function M(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=d.slice,r={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),C(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},b.prototype.render=w,i=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},I.__r=0,_=0,l=x(!1),c=x(!0);var F=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],s=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=s:4===a?r[1]=Object.assign(r[1]||{},s):5===a?(r[1]=r[1]||{})[n[++i]]=s:6===a?r[1][n[++i]]+=s+"":a?(o=e.apply(s,F(e,s,t,["",null])),r.push(o),s[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(s)}return r},L=new Map;var W=function(e){var n=L.get(this);return n||(n=new Map,L.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&s(),s(u));for(var _=0;_<e[u].length;_++)n=e[u][_],1===r?"<"===n?(s(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(s(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[u][_+1])?(s(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(s(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return s(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function O(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=V(r,t)),r):(n&&(r=V(r,n)),r)}}function V(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var j,B=O("header");function q(e){return W(j||(j=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),B(),e.children)}var K,z={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"}};function $(e){var n=z[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[K];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(K,'" in getText().')),e):t}function Y(e){return e[K]}var J,Q,X,Z,ee=0,ne=[],te=[],re=r,oe=re.__b,ie=re.__r,ae=re.diffed,se=re.__c,ue=re.unmount,_e=re.__;function le(e,n){re.__h&&re.__h(Q,e,ee||n),ee=0;var t=Q.__H||(Q.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:te}),t.__[e]}function ce(e){return ee=1,function(e,n,t){var r=le(J++,2);if(r.t=e,!r.__c&&(r.__=[we(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};Q.u=!0;var i=Q.shouldComponentUpdate,a=Q.componentWillUpdate;Q.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},Q.shouldComponentUpdate=o}return r.__N||r.__}(we,e)}function pe(e,n){var t=le(J++,7);return ye(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function de(){for(var e;e=ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(me),e.__H.__h.forEach(ge),e.__H.__h=[]}catch(n){e.__H.__h=[],re.__e(n,e.__v)}}re.__b=function(e){Q=null,oe&&oe(e)},re.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),_e&&_e(e,n)},re.__r=function(e){ie&&ie(e),J=0;var n=(Q=e.__c).__H;n&&(X===Q?(n.__h=[],Q.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=te,e.__N=e.i=void 0}))):(n.__h.forEach(me),n.__h.forEach(ge),n.__h=[],J=0)),X=Q},re.diffed=function(e){ae&&ae(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==ne.push(n)&&Z===re.requestAnimationFrame||((Z=re.requestAnimationFrame)||ve)(de)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==te&&(e.__=e.__V),e.i=void 0,e.__V=te}))),X=Q=null},re.__c=function(e,n){n.some((function(e){try{e.__h.forEach(me),e.__h=e.__h.filter((function(e){return!e.__||ge(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],re.__e(t,e.__v)}})),se&&se(e,n)},re.unmount=function(e){ue&&ue(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{me(e)}catch(e){n=e}})),t.__H=void 0,n&&re.__e(n,t.__v))};var fe,he="function"==typeof requestAnimationFrame;function ve(e){var n,t=function(){clearTimeout(r),he&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);he&&(n=requestAnimationFrame(t))}function me(e){var n=Q,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Q=n}function ge(e){var n=Q;e.__c=e.__(),Q=n}function ye(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function we(e,n){return"function"==typeof n?n(e):n}function be(e){return W(fe||(fe=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var ke,Se=O("row");function Ce(e){return W(ke||(ke=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Se(),Se("category"),e.name,Se("body"),e.children)}var Ie,Pe,He,Ae,De,Ne,Te,xe,Re,Me,Ue,Ee,Ge,Fe,Le,We,Oe,Ve,je=O("tree-list"),Be={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function qe(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e)return W(Ie||(Ie=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),je("string"),e);if("number"==typeof e)return W(Pe||(Pe=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("number"),e);if("bigint"==typeof e)return W(He||(He=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),je("bigint"),e);if("boolean"==typeof e)return W(Ae||(Ae=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("boolean"),String(e));if("function"==typeof e)return W(De||(De=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),je("function"));if("symbol"==typeof e)return W(Ne||(Ne=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),je("symbol"),e);if(void 0===e)return W(Te||(Te=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),je("undefined"));if(null===e)return W(xe||(xe=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),je("null"));if(Array.isArray(e))return t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||Be[typeof e]}))?W(Me||(Me=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return W(Re||(Re=n(["","",""],["","",""])),o?", ":"",qe(e,t,r+1))}))," "):W(Ge||(Ge=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,i){var a=t.showArrayIndex?W(Ue||(Ue=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),je("index"),i):"";return W(Ee||(Ee=n(["<li>","","","</li>"],["<li>","","","</li>"])),a,qe(o,t,r+1),i===e.length-1?"":",")})));if(t.compactObject&&r>0)return W(Le||(Le=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,i,a){return W(Fe||(Fe=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),je("property"),o,qe(e[o],t,r+1),i===a.length-1?"":", ")}))," ");var o=Boolean(t.showCurlyBracesAtRootLevel||r);return W(Oe||(Oe=n(["",'<ul class="','">\n        ',"\n    </ul>",""],["",'<ul class="','">\n        ',"\n    </ul>",""])),o?"{":"",je("ul",{padding:o?"yes":"no"}),Object.keys(e).map((function(o,i,a){return W(We||(We=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),je("property"),o,qe(e[o],t,r+1),i===a.length-1?"":",")})),o?"}":"")}function Ke(e){return W(Ve||(Ve=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Ce,e.title,je(),qe(e.data,e.options))}var ze,$e=function(){var e=ce({})[1];return function(e,n){return ee=8,pe((function(){return e}),n)}((function(){return e({})}),[])},Ye=O("spinner");function Je(e){return W(ze||(ze=n(['<div class="','"></div>'],['<div class="','"></div>'])),Ye({size:e.size}))}var Qe,Xe,Ze,en,nn=O("gamepad-list");function tn(){if(!navigator.getGamepads)return W(Qe||(Qe=n(["<",">","<//>"],["<",">","<//>"])),be,$("🎮 Gamepad API is not supported."));var e=$e();!function(e,n){var t=le(J++,3);!re.__s&&ye(t.__H,n)&&(t.__=e,t.i=n,Q.__H.__h.push(t))}((function(){var n=window.setInterval((function(){e()}),20),t=function(){e()};return window.addEventListener("gamepadconnected",t),window.addEventListener("gamepaddisconnected",t),function(){window.removeEventListener("gamepadconnected",t),window.removeEventListener("gamepaddisconnected",t),window.clearInterval(n)}}),[]);var t=navigator.getGamepads(),r=Array.isArray(t)?t.filter((function(e){return null!==e})):[];return r.length?W(Ze||(Ze=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),nn(),r.map((function(e,t){var r=e,o={index:r.index,mapping:r.mapping,connected:r.connected,timestamp:r.timestamp,axes:r.axes,buttons:r.buttons.map((function(e){return{value:e.value,pressed:e.pressed,touched:e.touched}}))};void 0!==r.hand&&(o.hand=r.hand);return W(Xe||(Xe=n(['\n                        <div class="','">\n                            <div class="','">',"</div>\n                            <",' name="','" data="','" options="','"><//>\n                        </div>'],['\n                        <div class="','">\n                            <div class="','">',"</div>\n                            <",' name="','" data="','" options="','"><//>\n                        </div>'])),nn("item"),nn("title"),r.id,Ke,t,o,{compactObject:!0,compactArrayWithSimpleTypes:!0,showArrayIndex:!0})}))):W(en||(en=n(["<",' size="m" //> ',""],["<",' size="m" //> ',""])),Je,$("Connect and press any button on the gamepad."))}var rn="undefined"!=typeof document,on="undefined"!=typeof window,an="undefined"!=typeof navigator,sn="undefined"!=typeof screen;var un=1;function _n(e,n){return(e||"").slice(0,n)}function ln(){return Math.floor(Math.random()*(1<<30))}var cn=512;function pn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function dn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return pn(t,n,e[n])})),pn(t,"rn",ln()),pn(t,"c",!!an&&navigator.cookieEnabled),pn(t,"s",sn?[screen.width,screen.height,screen.colorDepth].join("x"):""),pn(t,"sk",on&&window.devicePixelRatio||un),pn(t,"w",on?[window.innerWidth,window.innerHeight].join("x"):""),pn(t,"en",rn&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return pn(t,"et",r),pn(t,"st",r),pn(t,"t",_n(n,cn)),t.join(":")}var fn,hn,vn=1024;function mn(e){return _n(e,vn)}function gn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":dn(n,r.title),rn:ln(),ut:r.ut};r.url&&(o["page-url"]=mn(r.url)),r.referrer&&(o["page-ref"]=mn(r.referrer)),gn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:rn?document.referrer:"",title:rn?document.title:"",url:on&&window.location?window.location.href:""},params:fn}),function(e){K=e}((hn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==hn&&"ru"!==hn&&(hn="en"),hn)),window.addEventListener("beforeinstallprompt",(function(e){}));var yn,wn=O("footer");function bn(){return W(yn||(yn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),wn(),wn("item"),wn("l1"),wn("l2"),wn("l3"),wn("l4"),wn("l5"),wn("l6"),wn("item",{g:!0}),wn("G"),wn("i"),wn("t"),wn("H"),wn("u"),wn("b"))}var kn,Sn,Cn=O("main-menu");function In(e){return W(Sn||(Sn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Cn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return W(kn||(kn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Cn("item",{selected:e.selected}),e.url,e.title)})))}var Pn,Hn,An,Dn,Nn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Tn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Nn.map((function(n){var r=n.id===t;return r&&(document.title=Y(n.header||n.menuTitle)),e(e({},n),{title:Y(n.menuTitle),selected:r})}));return W(Pn||(Pn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),In,r)}function xn(e){return W(Hn||(Hn=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Tn,e.children,bn)}!function(e,n,o){var i,a,s,u;r.__&&r.__(e,n),a=(i="function"==typeof o)?null:n.__k,s=[],u=[],R(n,e=(!i&&o||n).__k=g(w,null,[e]),a||p,p,n.namespaceURI,!i&&o?[o]:a?null:n.firstChild?t.call(n.childNodes):null,s,!i&&o?o:a?a.__e:n.firstChild,i,u),M(s,e,u)}(W(Dn||(Dn=n(["<"," //>"],["<"," //>"])),(function(){return W(An||(An=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),xn,q,$("Gamepad"),tn)})),document.querySelector(".page"))}));
