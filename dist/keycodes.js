!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,s,a,l,_,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,r){var o,i,u,s={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:s[u]=n[u];if(arguments.length>2&&(s.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===s[u]&&(s[u]=e.defaultProps[u]);return g(e,s,o,i,null)}function g(e,n,t,i,u){var s={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(s),s}function b(e){return e.children}function w(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function P(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!S.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||s)(S)}function S(){var e,n,t,o,u,s,l,_;for(i.sort(a);e=i.shift();)e.__d&&(n=i.length,o=void 0,s=(u=(t=e).__v).__e,l=[],_=[],t.__P&&((o=v({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[s]:null,l,null==s?k(u):s,!!(32&u.__u),_),o.__v=u.__v,o.__.__k[o.__i]=o,x(l,o,_),o.__e!=s&&C(o)),i.length>n&&i.sort(a));S.__r=0}function I(e,n,t,r,o,i,u,s,a,l,_){var c,f,h,v,m,y=r&&r.__k||p,g=n.length;for(t.__d=a,H(t,n,y),a=t.__d,c=0;c<g;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:y[h.__i]||d,h.__i=c,M(e,h,f,o,i,u,s,a,l,_),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),_.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(a&&"string"==typeof h.type&&!e.contains(a)&&(a=k(f)),a=A(h,a,e)):"function"==typeof h.type&&void 0!==h.__d?a=h.__d:v&&(a=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=a,t.__e=m}function H(e,n,t){var r,o,i,u,s,a=n.length,l=t.length,_=l,c=0;for(e.__k=[],r=0;r<a;r++)u=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):h(o)?g(b,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,s=T(o,t,u,_),o.__i=s,i=null,-1!==s&&(_--,(i=t[s])&&(i.__u|=131072)),null==i||null===i.__v?(-1==s&&c--,"function"!=typeof o.type&&(o.__u|=65536)):s!==u&&(s==u-1?c=s-u:s==u+1?c++:s>u?_>a-u?c+=s-u:c--:s<u&&c++,s!==r+c&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i,!1),t[u]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function T(e,n,t,r){var o=e.key,i=e.type,u=t-1,s=t+1,a=n[t];if(null===a||a&&o==a.key&&i===a.type&&!(131072&a.__u))return t;if(r>(null==a||131072&a.__u?0:1))for(;u>=0||s<n.length;){if(u>=0){if((a=n[u])&&!(131072&a.__u)&&o==a.key&&i===a.type)return u;u--}if(s<n.length){if((a=n[s])&&!(131072&a.__u)&&o==a.key&&i===a.type)return s;s++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function R(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?c:_,i)):e.removeEventListener(n,i?c:_,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function N(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,t,o,i,u,s,a,l,_){var c,d,p,f,m,y,g,k,C,P,S,H,A,T,D,R,N=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),u=[a=n.__e=t.__e]),(c=r.__b)&&c(n);e:if("function"==typeof N)try{if(k=n.props,C="prototype"in N&&N.prototype.render,P=(c=N.contextType)&&o[c.__c],S=c?P?P.props.value:c.__:o,t.__c?g=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new N(k,S):(n.__c=d=new w(k,S),d.constructor=N,d.render=L),P&&P.sub(d),d.props=k,d.state||(d.state={}),d.context=S,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=N.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=v({},d.__s)),v(d.__s,N.getDerivedStateFromProps(k,d.__s))),f=d.props,m=d.state,d.__v=n,p)C&&null==N.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==N.getDerivedStateFromProps&&k!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,S),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,S)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=k,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&s.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,S),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,m,y)}))}if(d.context=S,d.props=k,d.__P=e,d.__e=!1,A=r.__r,T=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),c=d.render(d.props,d.state,d.context),D=0;D<d._sb.length;D++)d.__h.push(d._sb[D]);d._sb=[]}else do{d.__d=!1,A&&A(n),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++T<25);d.state=d.__s,null!=d.getChildContext&&(o=v(v({},o),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(y=d.getSnapshotBeforeUpdate(f,m)),I(e,h(R=null!=c&&c.type===b&&null==c.key?c.props.children:c)?R:[R],n,t,o,i,u,s,a,l,_),d.base=n.__e,n.__u&=-161,d.__h.length&&s.push(d),g&&(d.__E=d.__=null)}catch(e){n.__v=null,l||null!=u?(n.__e=a,n.__u|=l?160:32,u[u.indexOf(a)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=F(t.__e,n,t,o,i,u,s,l,_);(c=r.diffed)&&c(n)}function x(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function F(e,n,r,o,i,u,s,a,l){var _,c,p,f,v,y,g,b=r.props,w=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(_=0;_<u.length;_++)if((v=u[_])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,u[_]=null;break}if(null==e){if(null===C)return document.createTextNode(w);e=document.createElementNS(i,C,w.is&&w),u=null,a=!1}if(null===C)b===w||a&&e.data===w||(e.data=w);else{if(u=u&&t.call(e.childNodes),b=r.props||d,!a&&null!=u)for(b={},_=0;_<e.attributes.length;_++)b[(v=e.attributes[_]).name]=v.value;for(_ in b)if(v=b[_],"children"==_);else if("dangerouslySetInnerHTML"==_)p=v;else if("key"!==_&&!(_ in w)){if("value"==_&&"defaultValue"in w||"checked"==_&&"defaultChecked"in w)continue;R(e,_,null,v,i)}for(_ in w)v=w[_],"children"==_?f=v:"dangerouslySetInnerHTML"==_?c=v:"value"==_?y=v:"checked"==_?g=v:"key"===_||a&&"function"!=typeof v||b[_]===v||R(e,_,v,b[_],i);if(c)a||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,s,u?u[0]:r.__k&&k(r,0),a,l),null!=u)for(_=u.length;_--;)null!=u[_]&&m(u[_]);a||(_="value",void 0!==y&&(y!==e[_]||"progress"===C&&!y||"option"===C&&y!==b[_])&&R(e,_,y,b[_],i),_="checked",void 0!==g&&g!==e[_]&&R(e,_,g,b[_],i))}return e}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function L(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,w.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},w.prototype.render=b,i=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=function(e,n){return e.__v.__b-n.__v.__b},S.__r=0,l=0,_=N(!1),c=N(!0);var G=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],s=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=s:4===u?r[1]=Object.assign(r[1]||{},s):5===u?(r[1]=r[1]||{})[n[++i]]=s:6===u?r[1][n[++i]]+=s+"":u?(o=e.apply(s,G(e,s,t,["",null])),r.push(o),s[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(s)}return r},W=new Map;var K=function(e){var n=W.get(this);return n||(n=new Map,W.set(this,n)),(n=G(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},a=0;a<e.length;a++){a&&(1===r&&s(),s(a));for(var l=0;l<e[a].length;l++)n=e[a][l],1===r?"<"===n?(s(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(s(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[a][l+1])?(s(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(s(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return s(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(y);function O(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=B(r,t)),r):(n&&(r=B(r,n)),r)}}function B(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var j,q=O("header");function V(e){return K(j||(j=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),q(),e.children)}var z,$={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"}};function Y(e){var n=$[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[z];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(z,'" in getText().')),e):t}function J(e){return e[z]}var Q="undefined"!=typeof document,X="undefined"!=typeof window,Z="undefined"!=typeof navigator,ee="undefined"!=typeof screen;var ne=1;function te(e,n){return(e||"").slice(0,n)}function re(){return Math.floor(Math.random()*(1<<30))}var oe=512;function ie(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function ue(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return ie(t,n,e[n])})),ie(t,"rn",re()),ie(t,"c",!!Z&&navigator.cookieEnabled),ie(t,"s",ee?[screen.width,screen.height,screen.colorDepth].join("x"):""),ie(t,"sk",X&&window.devicePixelRatio||ne),ie(t,"w",X?[window.innerWidth,window.innerHeight].join("x"):""),ie(t,"en",Q&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return ie(t,"et",r),ie(t,"st",r),ie(t,"t",te(n,oe)),t.join(":")}var se,ae=1024;function le(e){return te(e,ae)}function _e(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":ue(n,r.title),rn:re(),ut:r.ut};r.url&&(o["page-url"]=le(r.url)),r.referrer&&(o["page-ref"]=le(r.referrer)),_e(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:Q?document.referrer:"",title:Q?document.title:"",url:X&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===window.location.host?"95998062":"97747983"),function(e){z=e}((se=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==se&&"ru"!==se&&(se="en"),se)),window.addEventListener("beforeinstallprompt",(function(e){}));var ce,de=O("link");function pe(e){return K(ce||(ce=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),de({theme:e.theme}),e.href,e.children)}var fe,he=O("footer");function ve(){return K(fe||(fe=n(['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"],['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"])),he(),he("item"),he("l1"),he("l2"),he("l3"),he("l4"),he("l5"),he("l6"),he("item",{g:!0}),pe,Y("Report a bug"))}var me,ye,ge=O("main-menu");function be(e){return K(ye||(ye=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),ge(),e.items.filter((function(e){return!e.hidden})).map((function(e){return K(me||(me=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),ge("item",{selected:e.selected}),e.url,e.title)})))}var we,ke=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"Mic",ru:"Микрофон"},id:"mic",url:"./mic.html",hidden:!0},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},id:"fonts",url:"./fonts.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Ce(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=ke.map((function(n){var r=n.id===t;return r&&(document.title=J(n.header||n.menuTitle)),e(e({},n),{title:J(n.menuTitle),selected:r})}));return K(we||(we=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),be,r)}var Pe,Se,Ie=O("head");function He(){return K(Pe||(Pe=n(['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "],['\n        <div class="','">\n            <span class="','"></span>',"\n        </div>\n    "])),Ie(),Ie("logo"),Y("Check device online"))}function Ae(e){return K(Se||(Se=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),He,Ce,e.children,ve)}var Te,De,Re,Ne,Me=0,xe=[],Fe=r,Ue=Fe.__b,Ee=Fe.__r,Le=Fe.diffed,Ge=Fe.__c,We=Fe.unmount,Ke=Fe.__;function Oe(e,n){Fe.__h&&Fe.__h(De,e,Me||n),Me=0;var t=De.__H||(De.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Be(e){return Me=1,function(e,n,t){var r=Oe(Te++,2);if(r.t=e,!r.__c&&(r.__=[Ye(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=De,!De.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};De.u=!0;var i=De.shouldComponentUpdate,u=De.componentWillUpdate;De.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},De.shouldComponentUpdate=o}return r.__N||r.__}(Ye,e)}function je(){for(var e;e=xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ze),e.__H.__h.forEach($e),e.__H.__h=[]}catch(n){e.__H.__h=[],Fe.__e(n,e.__v)}}Fe.__b=function(e){De=null,Ue&&Ue(e)},Fe.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Ke&&Ke(e,n)},Fe.__r=function(e){Ee&&Ee(e),Te=0;var n=(De=e.__c).__H;n&&(Re===De?(n.__h=[],De.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(ze),n.__h.forEach($e),n.__h=[],Te=0)),Re=De},Fe.diffed=function(e){Le&&Le(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==xe.push(n)&&Ne===Fe.requestAnimationFrame||((Ne=Fe.requestAnimationFrame)||Ve)(je)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),Re=De=null},Fe.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ze),e.__h=e.__h.filter((function(e){return!e.__||$e(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Fe.__e(t,e.__v)}})),Ge&&Ge(e,n)},Fe.unmount=function(e){We&&We(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{ze(e)}catch(e){n=e}})),t.__H=void 0,n&&Fe.__e(n,t.__v))};var qe="function"==typeof requestAnimationFrame;function Ve(e){var n,t=function(){clearTimeout(r),qe&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);qe&&(n=requestAnimationFrame(t))}function ze(e){var n=De,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),De=n}function $e(e){var n=De;e.__c=e.__(),De=n}function Ye(e,n){return"function"==typeof n?n(e):n}var Je,Qe=O("row");function Xe(e){return K(Je||(Je=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Qe(),Qe("category"),e.name,Qe("body"),e.children)}var Ze,en,nn,tn,rn,on,un,sn,an,ln,_n,cn,dn,pn,fn,hn,vn,mn,yn=O("tree-list"),gn={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function bn(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e)return K(Ze||(Ze=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),yn("string"),e);if("number"==typeof e)return K(en||(en=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),yn("number"),e);if("bigint"==typeof e)return K(nn||(nn=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),yn("bigint"),e);if("boolean"==typeof e)return K(tn||(tn=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),yn("boolean"),String(e));if("function"==typeof e)return K(rn||(rn=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),yn("function"));if("symbol"==typeof e)return K(on||(on=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),yn("symbol"),e);if(void 0===e)return K(un||(un=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),yn("undefined"));if(null===e)return K(sn||(sn=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),yn("null"));if(Array.isArray(e))return t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||gn[typeof e]}))?K(ln||(ln=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return K(an||(an=n(["","",""],["","",""])),o?", ":"",bn(e,t,r+1))}))," "):K(dn||(dn=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,i){var u=t.showArrayIndex?K(_n||(_n=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),yn("index"),i):"";return K(cn||(cn=n(["<li>","","","</li>"],["<li>","","","</li>"])),u,bn(o,t,r+1),i===e.length-1?"":",")})));if(t.compactObject&&r>0)return K(fn||(fn=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,i,u){return K(pn||(pn=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),yn("property"),o,bn(e[o],t,r+1),i===u.length-1?"":", ")}))," ");var o=Boolean(t.showCurlyBracesAtRootLevel||r);return K(vn||(vn=n(["",'<ul class="','">\n        ',"\n    </ul>",""],["",'<ul class="','">\n        ',"\n    </ul>",""])),o?"{":"",yn("ul",{padding:o?"yes":"no"}),Object.keys(e).map((function(o,i,u){return K(hn||(hn=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),yn("property"),o,bn(e[o],t,r+1),i===u.length-1?"":",")})),o?"}":"")}function wn(e){return K(mn||(mn=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Xe,e.title,yn(),bn(e.data,e.options))}var kn,Cn,Pn,Sn,In=O("keycode");function Hn(e){return String(e.code||e.key||e.keyCode)}function An(){var e=Be(""),t=e[0],r=e[1],o=Be(!1),i=o[0],u=o[1],s=Be(),a=s[0],l=s[1];!function(e,n){var t=Oe(Te++,3);!Fe.__s&&function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e,t.i=n,De.__H.__h.push(t))}((function(){var e=function(e){l(e),r(Hn(e)),u(!0)},n=function(e){r(Hn(e)),u(!1)};return document.addEventListener("keydown",e),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[]);var _,c=(_=a)?{key:_.key,code:_.code,keyCode:_.keyCode,ctrlKey:_.ctrlKey,altKey:_.altKey,shiftKey:_.shiftKey,metaKey:_.metaKey,charCode:_.charCode,which:_.which,repeat:_.repeat,location:_.location}:{};return K(Cn||(Cn=n(['\n        <div class="','">\n            <div class="','">',"</div>\n            ",'\n            <div class="','">\n                <'," data=",' title="keydown event" //>\n            </div>\n        </div>\n    '],['\n        <div class="','">\n            <div class="','">',"</div>\n            ",'\n            <div class="','">\n                <'," data=",' title="keydown event" //>\n            </div>\n        </div>\n    '])),In(),In("description"),Y("Press a key to display its code."),t?K(kn||(kn=n(['<div class="','">',"</div>"],['<div class="','">',"</div>"])),In("key",{pressed:i}),t):"",In("keydown"),wn,c)}!function(e,n,o){var i,u,s,a;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,s=[],a=[],M(n,e=(!i&&o||n).__k=y(b,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,s,!i&&o?o:u?u.__e:n.firstChild,i,a),x(s,e,a)}(K(Sn||(Sn=n(["<"," //>"],["<"," //>"])),(function(){return K(Pn||(Pn=n(["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"],["\n        <",">\n            <",">\n                ","\n            <//>\n\n            <"," //>\n        <//>"])),Ae,V,Y("Displaying key codes"),An)})),document.querySelector(".page"))}));
