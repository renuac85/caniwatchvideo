!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,a,u,s,l,_,c,p={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,a,u={};for(a in n)"key"==a?o=n[a]:"ref"==a?i=n[a]:u[a]=n[a];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===u[a]&&(u[a]=e.defaultProps[a]);return y(e,u,o,i,null)}function y(e,n,t,i,a){var u={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(u),u}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function I(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(P)}function P(){var e,n,t,o,a,u,l,_;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,u=(a=(t=e).__v).__e,l=[],_=[],t.__P&&((o=v({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),x(t.__P,o,a,t.__n,t.__P.namespaceURI,32&a.__u?[u]:null,l,null==u?k(a):u,!!(32&a.__u),_),o.__v=a.__v,o.__.__k[o.__i]=o,M(l,o,_),o.__e!=u&&S(o)),i.length>n&&i.sort(s));P.__r=0}function C(e,n,t,r,o,i,a,u,s,l,_){var c,f,h,v,m,g=r&&r.__k||d,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?p:g[h.__i]||p,h.__i=c,x(e,h,f,o,i,a,u,s,l,_),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),_.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,a,u,s=n.length,l=t.length,_=l,c=0;for(e.__k=[],r=0;r<s;r++)a=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,u=T(o,t,a,_),o.__i=u,i=null,-1!==u&&(_--,(i=t[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=65536)):u!==a&&(u===a+1?c++:u>a?_>s-a?c+=u-a:c--:u<a?u==a-1&&(c=u-a):c=0,u!==r+c&&(o.__u|=65536))):(i=t[a])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i,!1),t[a]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function T(e,n,t,r){var o=e.key,i=e.type,a=t-1,u=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;a>=0||u<n.length;){if(a>=0){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a--}if(u<n.length){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function N(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?c:_,i)):e.removeEventListener(n,i?c:_,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function R(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function x(e,n,o,i,a,u,s,l,_,c){var d,f,g,y,S,I,P,H,A,T,D,R,x,M,U,E=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(_=!!(32&o.__u),u=[l=n.__e=o.__e]),(d=r.__b)&&d(n);e:if("function"==typeof E)try{if(H=n.props,A=(d=E.contextType)&&i[d.__c],T=d?A?A.props.value:d.__:i,o.__c?P=(f=n.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(H,T):(n.__c=f=new b(H,T),f.constructor=E,f.render=G),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=T,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,E.getDerivedStateFromProps(H,f.__s))),y=f.props,S=f.state,f.__v=n,g)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,T),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,T)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),D=0;D<f._sb.length;D++)f.__h.push(f._sb[D]);f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,T),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,S,I)}))}if(f.context=T,f.props=H,f.__P=e,f.__e=!1,R=r.__r,x=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,R&&R(n),d=f.render(f.props,f.state,f.context),M=0;M<f._sb.length;M++)f.__h.push(f._sb[M]);f._sb=[]}else do{f.__d=!1,R&&R(n),d=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++x<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(I=f.getSnapshotBeforeUpdate(y,S)),C(e,h(U=null!=d&&d.type===w&&null==d.key?d.props.children:d)?U:[U],n,o,i,a,u,s,l,_,c),f.base=n.__e,n.__u&=-161,f.__h.length&&s.push(f),P&&(f.__E=f.__=null)}catch(e){n.__v=null,_||null!=u?(n.__e=l,n.__u|=_?160:32,u[u.indexOf(l)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==u&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,a,u,s,l){var _,c,d,f,v,g,y,w=r.props,b=n.props,S=n.type;if("svg"===S?i="http://www.w3.org/2000/svg":"math"===S?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=a)for(_=0;_<a.length;_++)if((v=a[_])&&"setAttribute"in v==!!S&&(S?v.localName===S:3===v.nodeType)){e=v,a[_]=null;break}if(null==e){if(null===S)return document.createTextNode(b);e=document.createElementNS(i,S,b.is&&b),a=null,s=!1}if(null===S)w===b||s&&e.data===b||(e.data=b);else{if(a=a&&t.call(e.childNodes),w=r.props||p,!s&&null!=a)for(w={},_=0;_<e.attributes.length;_++)w[(v=e.attributes[_]).name]=v.value;for(_ in w)if(v=w[_],"children"==_);else if("dangerouslySetInnerHTML"==_)d=v;else if("key"!==_&&!(_ in b)){if("value"==_&&"defaultValue"in b||"checked"==_&&"defaultChecked"in b)continue;N(e,_,null,v,i)}for(_ in b)v=b[_],"children"==_?f=v:"dangerouslySetInnerHTML"==_?c=v:"value"==_?g=v:"checked"==_?y=v:"key"===_||s&&"function"!=typeof v||w[_]===v||N(e,_,v,w[_],i);if(c)s||d&&(c.__html===d.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(d&&(e.innerHTML=""),C(e,h(f)?f:[f],n,r,o,"foreignObject"===S?"http://www.w3.org/1999/xhtml":i,a,u,a?a[0]:r.__k&&k(r,0),s,l),null!=a)for(_=a.length;_--;)null!=a[_]&&m(a[_]);s||(_="value",void 0!==g&&(g!==e[_]||"progress"===S&&!g||"option"===S&&g!==w[_])&&N(e,_,g,w[_],i),_="checked",void 0!==y&&y!==e[_]&&N(e,_,y,w[_],i))}return e}(o.__e,n,o,i,a,u,s,_,c);(d=r.diffed)&&d(n)}function M(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=d.slice,r={__e:function(e,n,t,r){for(var o,i,a;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),I(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},b.prototype.render=w,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,l=0,_=R(!1),c=R(!0);var B=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var a=n[i++],u=n[i]?(n[0]|=a?1:2,t[n[i++]]):n[++i];3===a?r[0]=u:4===a?r[1]=Object.assign(r[1]||{},u):5===a?(r[1]=r[1]||{})[n[++i]]=u:6===a?r[1][n[++i]]+=u+"":a?(o=e.apply(u,B(e,u,t,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},F=new Map;var V=function(e){var n=F.get(this);return n||(n=new Map,F.set(this,n)),(n=B(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",a=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(0,e,o):3===r&&(e||o)?(a.push(3,e,o),r=2):2===r&&"..."===o&&e?a.push(4,e,0):2===r&&o&&!e?a.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(a.push(r,0,o,t),r=6),e&&(a.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&u(),u(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(u(),a=[a],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(u(),3===r&&(a=a[0]),r=a,(a=a[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,a=a[0])}return u(),a}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function W(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=O(r,t)),r):(n&&(r=O(r,n)),r)}}function O(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var L,j=W("header");function q(e){return V(L||(L=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),j(),e.children)}var K,z={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"}};function $(e){var n=z[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[K];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(K,'" in getText().')),e):t}function Y(e){return e[K]}var J,Q,X,Z,ee=0,ne=[],te=[],re=r,oe=re.__b,ie=re.__r,ae=re.diffed,ue=re.__c,se=re.unmount,le=re.__;function _e(e,n){re.__h&&re.__h(Q,e,ee||n),ee=0;var t=Q.__H||(Q.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:te}),t.__[e]}function ce(e){return ee=1,function(e,n,t){var r=_e(J++,2);if(r.t=e,!r.__c&&(r.__=[we(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var a=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(a=!0)}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};Q.u=!0;var i=Q.shouldComponentUpdate,a=Q.componentWillUpdate;Q.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}a&&a.call(this,e,n,t)},Q.shouldComponentUpdate=o}return r.__N||r.__}(we,e)}function pe(e,n){var t=_e(J++,7);return ye(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function de(){for(var e;e=ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(me),e.__H.__h.forEach(ge),e.__H.__h=[]}catch(n){e.__H.__h=[],re.__e(n,e.__v)}}re.__b=function(e){Q=null,oe&&oe(e)},re.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),le&&le(e,n)},re.__r=function(e){ie&&ie(e),J=0;var n=(Q=e.__c).__H;n&&(X===Q?(n.__h=[],Q.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=te,e.__N=e.i=void 0}))):(n.__h.forEach(me),n.__h.forEach(ge),n.__h=[],J=0)),X=Q},re.diffed=function(e){ae&&ae(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==ne.push(n)&&Z===re.requestAnimationFrame||((Z=re.requestAnimationFrame)||ve)(de)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==te&&(e.__=e.__V),e.i=void 0,e.__V=te}))),X=Q=null},re.__c=function(e,n){n.some((function(e){try{e.__h.forEach(me),e.__h=e.__h.filter((function(e){return!e.__||ge(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],re.__e(t,e.__v)}})),ue&&ue(e,n)},re.unmount=function(e){se&&se(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{me(e)}catch(e){n=e}})),t.__H=void 0,n&&re.__e(n,t.__v))};var fe,he="function"==typeof requestAnimationFrame;function ve(e){var n,t=function(){clearTimeout(r),he&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);he&&(n=requestAnimationFrame(t))}function me(e){var n=Q,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Q=n}function ge(e){var n=Q;e.__c=e.__(),Q=n}function ye(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function we(e,n){return"function"==typeof n?n(e):n}function be(e){return V(fe||(fe=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var ke,Se=W("row");function Ie(e){return V(ke||(ke=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Se(),Se("category"),e.name,Se("body"),e.children)}var Pe,Ce,He,Ae,Te,De,Ne,Re,xe,Me,Ue,Ee,Ge,Be,Fe,Ve,We,Oe,Le=W("tree-list"),je={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function qe(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e)return V(Pe||(Pe=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),Le("string"),e);if("number"==typeof e)return V(Ce||(Ce=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Le("number"),e);if("bigint"==typeof e)return V(He||(He=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),Le("bigint"),e);if("boolean"==typeof e)return V(Ae||(Ae=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Le("boolean"),String(e));if("function"==typeof e)return V(Te||(Te=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),Le("function"));if("symbol"==typeof e)return V(De||(De=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Le("symbol"),e);if(void 0===e)return V(Ne||(Ne=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),Le("undefined"));if(null===e)return V(Re||(Re=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),Le("null"));if(Array.isArray(e))return t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||je[typeof e]}))?V(Me||(Me=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return V(xe||(xe=n(["","",""],["","",""])),o?", ":"",qe(e,t,r+1))}))," "):V(Ge||(Ge=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,i){var a=t.showArrayIndex?V(Ue||(Ue=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),Le("index"),i):"";return V(Ee||(Ee=n(["<li>","","","</li>"],["<li>","","","</li>"])),a,qe(o,t,r+1),i===e.length-1?"":",")})));if(t.compactObject&&r>0)return V(Fe||(Fe=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,i,a){return V(Be||(Be=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),Le("property"),o,qe(e[o],t,r+1),i===a.length-1?"":", ")}))," ");var o=Boolean(t.showCurlyBracesAtRootLevel||r);return V(We||(We=n(["",'<ul class="','">\n        ',"\n    </ul>",""],["",'<ul class="','">\n        ',"\n    </ul>",""])),o?"{":"",Le("ul",{padding:o?"yes":"no"}),Object.keys(e).map((function(o,i,a){return V(Ve||(Ve=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),Le("property"),o,qe(e[o],t,r+1),i===a.length-1?"":",")})),o?"}":"")}function Ke(e){return V(Oe||(Oe=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),Ie,e.title,Le(),qe(e.data,e.options))}var ze,$e,Ye=W("battery-badge");function Je(e){return V($e||($e=n(['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','" style="width: ','%"></div>\n            <div class="','"></div>\n            ','\n            <div class="','">',"%</div>\n        </div>\n    "])),Ye({low:e.level<.2}),Ye("charge"),100*e.level,Ye("contact"),e.charging?V(ze||(ze=n(['<div class="','">↯</div>'],['<div class="','">↯</div>'])),Ye("charging")):"",Ye("level"),Math.floor(100*e.level))}var Qe,Xe,Ze=function(){var e=ce({})[1];return function(e,n){return ee=8,pe((function(){return e}),n)}((function(){return e({})}),[])},en=W("battery-status");function nn(){var e,t,r,o,i=ce(!1),a=i[0],u=i[1],s=function(e){return ee=5,pe((function(){return{current:e}}),[])}(),l=Ze();if(function(e,n){var t=_e(J++,3);!re.__s&&ye(t.__H,n)&&(t.__=e,t.i=n,Q.__H.__h.push(t))}((function(){if(navigator.getBattery){navigator.getBattery().then((function(e){s.current=e,u(!0)})).catch((function(e){console.error(e)}));var e=setInterval((function(){l()}),1e3);return function(){return clearInterval(e)}}}),[]),!navigator.getBattery)return V(Qe||(Qe=n(["<",">","<//>"],["<",">","<//>"])),be,$("Battery Status API is not supported."));var _={charging:null===(e=s.current)||void 0===e?void 0:e.charging,chargingTime:null===(t=s.current)||void 0===t?void 0:t.chargingTime,dischargingTime:null===(r=s.current)||void 0===r?void 0:r.dischargingTime,level:null===(o=s.current)||void 0===o?void 0:o.level};return a?V(Xe||(Xe=n(['\n        <div class="','">\n            <',' data="','"><//>\n            <',' level="','" charging="','"><//>\n        </div>\n    '],['\n        <div class="','">\n            <',' data="','"><//>\n            <',' level="','" charging="','"><//>\n        </div>\n    '])),en(),Ke,_,Je,_.level,_.charging):"..."}var tn="undefined"!=typeof document,rn="undefined"!=typeof window,on="undefined"!=typeof navigator,an="undefined"!=typeof screen;var un=1;function sn(e,n){return(e||"").slice(0,n)}function ln(){return Math.floor(Math.random()*(1<<30))}var _n=512;function cn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function pn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return cn(t,n,e[n])})),cn(t,"rn",ln()),cn(t,"c",!!on&&navigator.cookieEnabled),cn(t,"s",an?[screen.width,screen.height,screen.colorDepth].join("x"):""),cn(t,"sk",rn&&window.devicePixelRatio||un),cn(t,"w",rn?[window.innerWidth,window.innerHeight].join("x"):""),cn(t,"en",tn&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return cn(t,"et",r),cn(t,"st",r),cn(t,"t",sn(n,_n)),t.join(":")}var dn,fn,hn=1024;function vn(e){return sn(e,hn)}function mn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":pn(n,r.title),rn:ln(),ut:r.ut};r.url&&(o["page-url"]=vn(r.url)),r.referrer&&(o["page-ref"]=vn(r.referrer)),mn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:tn?document.referrer:"",title:tn?document.title:"",url:rn&&window.location?window.location.href:""},params:dn}),function(e){K=e}((fn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==fn&&"ru"!==fn&&(fn="en"),fn)),window.addEventListener("beforeinstallprompt",(function(e){}));var gn,yn=W("footer");function wn(){return V(gn||(gn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),yn(),yn("item"),yn("l1"),yn("l2"),yn("l3"),yn("l4"),yn("l5"),yn("l6"),yn("item",{g:!0}),yn("G"),yn("i"),yn("t"),yn("H"),yn("u"),yn("b"))}var bn,kn,Sn=W("main-menu");function In(e){return V(kn||(kn=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Sn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return V(bn||(bn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Sn("item",{selected:e.selected}),e.url,e.title)})))}var Pn,Cn,Hn,An,Tn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Input",ru:"Ввод"},id:"input",url:"./input.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Dn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Tn.map((function(n){var r=n.id===t;return r&&(document.title=Y(n.header||n.menuTitle)),e(e({},n),{title:Y(n.menuTitle),selected:r})}));return V(Pn||(Pn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),In,r)}function Nn(e){return V(Cn||(Cn=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Dn,e.children,wn)}!function(e,n,o){var i,a,u,s;r.__&&r.__(e,n),a=(i="function"==typeof o)?null:n.__k,u=[],s=[],x(n,e=(!i&&o||n).__k=g(w,null,[e]),a||p,p,n.namespaceURI,!i&&o?[o]:a?null:n.firstChild?t.call(n.childNodes):null,u,!i&&o?o:a?a.__e:n.firstChild,i,s),M(u,e,s)}(V(An||(An=n(["<"," //>"],["<"," //>"])),(function(){return V(Hn||(Hn=n(["\n        <","}>\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"],["\n        <","}>\n            <",">\n                ","\n            <//>\n\n            <","><//>\n        <//>"])),Nn,q,$("Battery"),nn)})),document.querySelector(".page"))}));
