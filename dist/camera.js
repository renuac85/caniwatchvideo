!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,l,s,c,_,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return y(e,a,o,i,null)}function y(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function b(e){return e.children}function k(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.__?w(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?w(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function S(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(P)}function P(){var e,n,t,o,u,a,s,c;for(i.sort(l);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,s=[],c=[],t.__P&&((o=v({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,s,null==a?w(u):a,!!(32&u.__u),c),o.__v=u.__v,o.__.__k[o.__i]=o,N(s,o,c),o.__e!=a&&C(o)),i.length>n&&i.sort(l));P.__r=0}function I(e,n,t,r,o,i,u,a,l,s,c){var _,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=l,H(t,n,g),l=t.__d,_=0;_<y;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=_,R(e,h,f,o,i,u,a,l,s,c),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&E(f.ref,null,h),c.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(l&&"string"==typeof h.type&&!e.contains(l)&&(l=w(f)),l=x(h,l,e)):"function"==typeof h.type&&void 0!==h.__d?l=h.__d:v&&(l=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=l,t.__e=m}function H(e,n,t){var r,o,i,u,a,l=n.length,s=t.length,c=s,_=0;for(e.__k=[],r=0;r<l;r++)u=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=M(o,t,u,c),o.__i=a,i=null,-1!==a&&(c--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&_--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?_=a-u:a==u+1?_++:a>u?c>l-u?_+=a-u:_--:a<u&&_++,a!==r+_&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),F(i,i,!1),t[u]=null,c--);if(c)for(r=0;r<s;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),F(i,i))}function x(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=x(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function M(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,l=n[t];if(null===l||l&&o==l.key&&i===l.type&&!(131072&l.__u))return t;if(r>(null==l||131072&l.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((l=n[u])&&!(131072&l.__u)&&o==l.key&&i===l.type)return u;u--}if(a<n.length){if((l=n[a])&&!(131072&l.__u)&&o==l.key&&i===l.type)return a;a++}}return-1}function A(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function T(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||A(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||A(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=s,e.addEventListener(n,i?_:c,i)):e.removeEventListener(n,i?_:c,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function D(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=s++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,t,o,i,u,a,l,s,c){var _,d,p,f,m,g,y,w,C,S,P,H,x,M,A,T,D=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(s=!!(32&t.__u),u=[l=n.__e=t.__e]),(_=r.__b)&&_(n);e:if("function"==typeof D)try{if(w=n.props,C="prototype"in D&&D.prototype.render,S=(_=D.contextType)&&o[_.__c],P=_?S?S.props.value:_.__:o,t.__c?y=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new D(w,P):(n.__c=d=new k(w,P),d.constructor=D,d.render=G),S&&S.sub(d),d.props=w,d.state||(d.state={}),d.context=P,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=D.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,D.getDerivedStateFromProps(w,d.__s))),f=d.props,m=d.state,d.__v=n,p)C&&null==D.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==D.getDerivedStateFromProps&&w!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,P),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,P)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=w,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,P),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,m,g)}))}if(d.context=P,d.props=w,d.__P=e,d.__e=!1,x=r.__r,M=0,C){for(d.state=d.__s,d.__d=!1,x&&x(n),_=d.render(d.props,d.state,d.context),A=0;A<d._sb.length;A++)d.__h.push(d._sb[A]);d._sb=[]}else do{d.__d=!1,x&&x(n),_=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++M<25);d.state=d.__s,null!=d.getChildContext&&(o=v(v({},o),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(g=d.getSnapshotBeforeUpdate(f,m)),I(e,h(T=null!=_&&_.type===b&&null==_.key?_.props.children:_)?T:[T],n,t,o,i,u,a,l,s,c),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),y&&(d.__E=d.__=null)}catch(e){n.__v=null,s||null!=u?(n.__e=l,n.__u|=s?160:32,u[u.indexOf(l)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=U(t.__e,n,t,o,i,u,a,s,c);(_=r.diffed)&&_(n)}function N(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)E(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,r,o,i,u,a,l,s){var c,_,p,f,v,g,y,b=r.props,k=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((v=u[c])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,u[c]=null;break}if(null==e){if(null===C)return document.createTextNode(k);e=document.createElementNS(i,C,k.is&&k),u=null,l=!1}if(null===C)b===k||l&&e.data===k||(e.data=k);else{if(u=u&&t.call(e.childNodes),b=r.props||d,!l&&null!=u)for(b={},c=0;c<e.attributes.length;c++)b[(v=e.attributes[c]).name]=v.value;for(c in b)if(v=b[c],"children"==c);else if("dangerouslySetInnerHTML"==c)p=v;else if("key"!==c&&!(c in k)){if("value"==c&&"defaultValue"in k||"checked"==c&&"defaultChecked"in k)continue;T(e,c,null,v,i)}for(c in k)v=k[c],"children"==c?f=v:"dangerouslySetInnerHTML"==c?_=v:"value"==c?g=v:"checked"==c?y=v:"key"===c||l&&"function"!=typeof v||b[c]===v||T(e,c,v,b[c],i);if(_)l||p&&(_.__html===p.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&w(r,0),l,s),null!=u)for(c=u.length;c--;)null!=u[c]&&m(u[c]);l||(c="value",void 0!==g&&(g!==e[c]||"progress"===C&&!g||"option"===C&&g!==b[c])&&T(e,c,g,b[c],i),c="checked",void 0!==y&&y!==e[c]&&T(e,c,y,b[c],i))}return e}function E(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function F(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||E(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&F(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,k.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},k.prototype.render=b,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,s=0,c=D(!1),_=D(!0);var W=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,W(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},B=new Map;var L=function(e){var n=B.get(this);return n||(n=new Map,B.set(this,n)),(n=W(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},l=0;l<e.length;l++){l&&(1===r&&a(),a(l));for(var s=0;s<e[l].length;s++)n=e[l][s],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[l][s+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function O(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=j(r,t)),r):(n&&(r=j(r,n)),r)}}function j(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var K,V=O("header");function q(e){return L(K||(K=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),V(),e.children)}var $,z={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"}};function Y(e){var n=z[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[$];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat($,'" in getText().')),e):t}function J(e){return e[$]}var Q,X,Z,ee,ne=0,te=[],re=r,oe=re.__b,ie=re.__r,ue=re.diffed,ae=re.__c,le=re.unmount,se=re.__;function ce(e,n){re.__h&&re.__h(X,e,ne||n),ne=0;var t=X.__H||(X.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function _e(e){return ne=1,function(e,n,t){var r=ce(Q++,2);if(r.t=e,!r.__c&&(r.__=[be(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=X,!X.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};X.u=!0;var i=X.shouldComponentUpdate,u=X.componentWillUpdate;X.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},X.shouldComponentUpdate=o}return r.__N||r.__}(be,e)}function de(e){return ne=5,pe((function(){return{current:e}}),[])}function pe(e,n){var t=ce(Q++,7);return function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function fe(e,n){return ne=8,pe((function(){return e}),n)}function he(){for(var e;e=te.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ge),e.__H.__h.forEach(ye),e.__H.__h=[]}catch(n){e.__H.__h=[],re.__e(n,e.__v)}}re.__b=function(e){X=null,oe&&oe(e)},re.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),se&&se(e,n)},re.__r=function(e){ie&&ie(e),Q=0;var n=(X=e.__c).__H;n&&(Z===X?(n.__h=[],X.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(ge),n.__h.forEach(ye),n.__h=[],Q=0)),Z=X},re.diffed=function(e){ue&&ue(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==te.push(n)&&ee===re.requestAnimationFrame||((ee=re.requestAnimationFrame)||me)(he)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),Z=X=null},re.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ge),e.__h=e.__h.filter((function(e){return!e.__||ye(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],re.__e(t,e.__v)}})),ae&&ae(e,n)},re.unmount=function(e){le&&le(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{ge(e)}catch(e){n=e}})),t.__H=void 0,n&&re.__e(n,t.__v))};var ve="function"==typeof requestAnimationFrame;function me(e){var n,t=function(){clearTimeout(r),ve&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ve&&(n=requestAnimationFrame(t))}function ge(e){var n=X,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),X=n}function ye(e){var n=X;e.__c=e.__(),X=n}function be(e,n){return"function"==typeof n?n(e):n}function ke(e,n){e.getTracks().forEach((function(e){e.stop()})),n.pause(),n.srcObject=null}function we(e,n){return navigator.mediaDevices.getUserMedia(n).then((function(n){return e.srcObject=n,e.setAttribute("playsinline",""),e.controls=!0,e.play(),n}))}function Ce(e,n){return{0:{video:{width:{ideal:19200}},audio:n},1:{video:{width:{ideal:0}},audio:n},2:{video:{frameRate:{ideal:200}},audio:n}}[e]}function Se(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}var Pe,Ie=O("button");function He(e){var t=Se(e.class,Ie({theme:e.theme,size:e.size}));return L(Pe||(Pe=n(['<button class="','" onClick="','">',"</button>"],['<button class="','" onClick="','">',"</button>"])),t,e.onClick,e.children)}var xe,Me=O("radio-button");function Ae(e){var t=fe((function(){var n;null===(n=e.onClick)||void 0===n||n.call(e,e.value)}),[e.onClick]),r=Se(Me({selected:e.selected}),e.class);return L(xe||(xe=n(['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "],['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "])),r,t,e.value,e.text)}var Te,De,Re,Ne=O("radio-buttons");function Ue(e){return e.filter((function(e){return e.selected}))[0]}function Ee(e){var t=e.className,r=e.buttons,o=e.label,i=e.onSelect,u=Ue(r),a=_e(u?u.value:void 0),l=a[0],s=a[1],c=fe((function(e){s(e),i(e)}),[i]);return L(De||(De=n(['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','">\n                ',"\n            </div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','">\n                ',"\n            </div>\n        </div>\n    "])),Se(Ne(),t),Ne("label"),o,Ne("items"),r.map((function(e){return L(Te||(Te=n(["<",'\n                            key="','"\n                            class="','"\n                            selected="','"\n                            text="','"\n                            value="','"\n                            onClick="','"\n                        ><//>'],["<",'\n                            key="','"\n                            class="','"\n                            selected="','"\n                            text="','"\n                            value="','"\n                            onClick="','"\n                        ><//>'])),Ae,e.value,Ne("item"),e.value===l,e.text,e.value,c)})))}function Fe(e){return L(Re||(Re=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var Ge,We=O("row");function Be(e){return L(Ge||(Ge=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),We(),We("category"),e.name,We("body"),e.children)}var Le,Oe,je,Ke=O("list");function Ve(e){var t=e.items.filter((function(e){if(!e)return!1;if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]}));return t.length?L(je||(je=n(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),Be,e.title,Ke(),t.map((function(e){var t=e[0],r=e[1];return 1===e.length?L(Le||(Le=n(["<li>","</li>"],["<li>","</li>"])),t):L(Oe||(Oe=n(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}const qe=[[1,1],[3,2],[4,1],[4,3],[5,3],[5,4],[16,9],[16,10],[21,9],[32,9],[12,5],[43,18],[64,27],[16,5],[18,5],[32,9]].map((e=>{const[n,t]=e;return{x:n,y:t,value:`${n}:${t}`,ratio:n/t}})),$e=qe.map((e=>e.ratio)).sort(),ze=qe.reduce(((e,n)=>(e[n.ratio]=n,e)),{}),Ye=.06;function Je(e,n,t={tolerance:Ye}){const r=Math.max(e,n)/Math.min(e,n),o=ze[r];if(o)return{x:o.x,y:o.y,value:o.value,approximately:!1,nonStandard:!1};const i=function(e,n,t){for(let r=0;r<e.length;r++){if(Math.abs(e[r]-n)<t)return e[r]}return}($e,r,t.tolerance);if(i){const e=ze[i];return{x:e.x,y:e.y,value:`≈${e.value}`,approximately:!0,nonStandard:!1}}const u=function(e=0,n=0){for(;n;)[e,n]=[n,e%n];return e}(e,n);let a=e/u,l=n/u;return 1===u&&(a=Math.round(100*r)/100,l=1),{x:a,y:l,value:`${a}:${l}`,approximately:!1,nonStandard:!0}}function Qe(e){var t=e.video,r=t.width,o=t.height,i=[[Y("Resolution"),"".concat(t.width,"×").concat(t.height)],[Y("Aspect ratio"),Je(Math.max(r,o),Math.min(r,o)).value],[Y("Frame rate"),"".concat(t.frameRate)]];return L(Xe||(Xe=n(["\n        <",' title="','" items="','"><//>\n    '],["\n        <",' title="','" items="','"><//>\n    '])),Ve,t.label,i)}var Xe,Ze,en,nn,tn,rn=O("checkbox");function on(e){var t=_e(e.checked),r=t[0],o=t[1],i=de(),u=fe((function(){if(i.current){var n=!i.current.checked;o(n),e.onClick&&e.onClick(n)}}),[r]),a=Se(e.class,rn({checked:r,theme:e.theme}));return L(Ze||(Ze=n(['<label class="','" onClick="','">\n        <input autocomplete="off" ref="','" class="','" type="checkbox" checked="','" />',"\n    </label>"],['<label class="','" onClick="','">\n        <input autocomplete="off" ref="','" class="','" type="checkbox" checked="','" />',"\n    </label>"])),a,u,i,rn("input"),r,e.label)}function un(e){var t=e.error;return t?"NotFoundError"===t.name?L(en||(en=n(["<",">","<//>"],["<",">","<//>"])),Fe,Y("Camera not found.")):"NotAllowedError"===t.name?L(nn||(nn=n(["<",">","<//>"],["<",">","<//>"])),Fe,Y("Camera is blocked.")):L(tn||(tn=n(["<",">","<//>"],["<",">","<//>"])),Fe,t.message):""}var an,ln,sn,cn=O("camera");function _n(){var e=[{text:Y("High resolution"),value:"0",selected:!0},{text:Y("Low resolution"),value:"1"},{text:Y("High frame rate"),value:"2"}],t=de(null),r=_e(null),o=r[0],i=r[1],u=_e(Ue(e).value),a=u[0],l=u[1],s=_e(!1),c=s[0],_=s[1],d=_e(null),p=d[0],f=d[1],h=fe((function(){var e=t.current;if(e)return o?(ke(o,e),i(null),void(e.controls=!1)):void we(e,Ce(a,c)).then((function(e){i(e),f(null)})).catch((function(e){f(e),console.log(e)}))}),[o,a,c]),v=fe((function(e){var n=t.current;l(e),o&&n&&(ke(o,n),i(null),we(n,Ce(e,c)).then((function(e){i(e),f(null)})).catch((function(e){f(e),console.log(e)})))}),[a,o,c]),m=fe((function(e){_(e)}),[]),g=o?function(e){var n=e.getVideoTracks()[0],t=e.getAudioTracks()[0],r=null==n?void 0:n.getSettings();return{video:{width:null==r?void 0:r.width,height:null==r?void 0:r.height,label:null==n?void 0:n.label,frameRate:null==r?void 0:r.frameRate},audio:{label:null==t?void 0:t.label}}}(o):void 0;if(!navigator.mediaDevices||"function"!=typeof navigator.mediaDevices.getUserMedia)return L(an||(an=n(["<",">","<//>"],["<",">","<//>"])),Fe,Y("Media Devices API is not supported."));var y=Boolean(o),b=Boolean(o);return L(sn||(sn=n(['<div class="','">\n        <div class="','">\n            <',' class="','" theme="','" onClick="','">',"<//>\n            <",' label="','" checked="','" onClick="','" //>\n        </div>\n        <div class="','">\n            <',' onSelect="','" buttons="','"><//>\n        </div>\n\n        <',' error="','" //>\n\n        <div class="','">\n            <video ref="','" class="','" />\n        </div>\n\n        <div class="','">\n            ',"\n        </div>\n    </div>"],['<div class="','">\n        <div class="','">\n            <',' class="','" theme="','" onClick="','">',"<//>\n            <",' label="','" checked="','" onClick="','" //>\n        </div>\n        <div class="','">\n            <',' onSelect="','" buttons="','"><//>\n        </div>\n\n        <',' error="','" //>\n\n        <div class="','">\n            <video ref="','" class="','" />\n        </div>\n\n        <div class="','">\n            ',"\n        </div>\n    </div>"])),cn(),cn("select"),He,cn("select-camera"),y?"red":"active",h,Y(o?"Stop":"Select camera"),on,Y("Mic"),c,m,cn("controls"),Ee,v,e,un,p,cn("container",{played:b}),t,cn("video"),cn("params"),g?L(ln||(ln=n(["<"," ..."," //>"],["<"," ..."," //>"])),Qe,g):"")}var dn="undefined"!=typeof document,pn="undefined"!=typeof window,fn="undefined"!=typeof navigator,hn="undefined"!=typeof screen;var vn=1;function mn(e,n){return(e||"").slice(0,n)}function gn(){return Math.floor(Math.random()*(1<<30))}var yn=512;function bn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function kn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return bn(t,n,e[n])})),bn(t,"rn",gn()),bn(t,"c",!!fn&&navigator.cookieEnabled),bn(t,"s",hn?[screen.width,screen.height,screen.colorDepth].join("x"):""),bn(t,"sk",pn&&window.devicePixelRatio||vn),bn(t,"w",pn?[window.innerWidth,window.innerHeight].join("x"):""),bn(t,"en",dn&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return bn(t,"et",r),bn(t,"st",r),bn(t,"t",mn(n,yn)),t.join(":")}var wn,Cn=1024;function Sn(e){return mn(e,Cn)}function Pn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":kn(n,r.title),rn:gn(),ut:r.ut};r.url&&(o["page-url"]=Sn(r.url)),r.referrer&&(o["page-ref"]=Sn(r.referrer)),Pn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:dn?document.referrer:"",title:dn?document.title:"",url:pn&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===window.location.host?"95998062":"97747983"),function(e){$=e}((wn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==wn&&"ru"!==wn&&(wn="en"),wn)),window.addEventListener("beforeinstallprompt",(function(e){}));var In,Hn=O("link");function xn(e){return L(In||(In=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Hn({theme:e.theme}),e.href,e.children)}var Mn,An=O("footer");function Tn(){return L(Mn||(Mn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </div>"],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </div>"])),An(),An("item"),An("l1"),An("l2"),An("l3"),An("l4"),An("l5"),An("l6"),An("item",{g:!0}),xn,Y("Report a bug"))}var Dn,Rn,Nn=O("main-menu");function Un(e){return L(Rn||(Rn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Nn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return L(Dn||(Dn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Nn("item",{selected:e.selected}),e.url,e.title)})))}var En,Fn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},id:"fonts",url:"./fonts.html",hidden:!0},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Gn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Fn.map((function(n){var r=n.id===t;return r&&(document.title=J(n.header||n.menuTitle)),e(e({},n),{title:J(n.menuTitle),selected:r})}));return L(En||(En=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),Un,r)}var Wn,Bn,Ln,On,jn=O("head");function Kn(){return L(Wn||(Wn=n(['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "],['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "])),jn(),jn("logo"),Y("Check device online"))}function Vn(e){return L(Bn||(Bn=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Kn,Gn,e.children,Tn)}!function(e,n,o){var i,u,a,l;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],l=[],R(n,e=(!i&&o||n).__k=g(b,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,l),N(a,e,l)}(L(On||(On=n(["<"," //>"],["<"," //>"])),(function(){return L(Ln||(Ln=n(["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"],["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"])),Vn,q,Y("Webcamera"),_n)})),document.querySelector(".page"))}));
