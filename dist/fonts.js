!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,l,c,_,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function m(e,n){for(var t in n)e[t]=n[t];return e}function v(e){var n=e.parentNode;n&&n.removeChild(e)}function y(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return g(e,a,o,i,null)}function g(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function k(e){return e.children}function b(e,n){this.props=e,this.context=n}function w(e,n){if(null==n)return e.__?w(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?w(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function S(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(P)}function P(){var e,n,t,o,u,a,l,c;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,l=[],c=[],t.__P&&((o=m({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),M(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,l,null==a?w(u):a,!!(32&u.__u),c),o.__v=u.__v,o.__.__k[o.__i]=o,F(l,o,c),o.__e!=a&&C(o)),i.length>n&&i.sort(s));P.__r=0}function I(e,n,t,r,o,i,u,a,s,l,c){var _,f,h,m,v,y=r&&r.__k||p,g=n.length;for(t.__d=s,H(t,n,y),s=t.__d,_=0;_<g;_++)null!=(h=t.__k[_])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:y[h.__i]||d,h.__i=_,M(e,h,f,o,i,u,a,s,l,c),m=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&U(f.ref,null,h),c.push(h.ref,h.__c||m,h)),null==v&&null!=m&&(v=m),65536&h.__u||f.__k===h.__k?(s&&"string"==typeof h.type&&!e.contains(s)&&(s=w(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:m&&(s=m.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=v}function H(e,n,t){var r,o,i,u,a,s=n.length,l=t.length,c=l,_=0;for(e.__k=[],r=0;r<s;r++)u=r+_,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?g(null,o,null,null,null):h(o)?g(k,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?g(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=N(o,t,u,c),o.__i=a,i=null,-1!==a&&(c--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&_--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a==u-1?_=a-u:a==u+1?_++:a>u?c>s-u?_+=a-u:_--:a<u&&_++,a!==r+_&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),E(i,i,!1),t[u]=null,c--);if(c)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),E(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function T(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function D(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||T(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||T(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?_:c,i)):e.removeEventListener(n,i?_:c,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function R(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function M(e,n,t,o,i,u,a,s,l,c){var _,d,p,f,v,y,g,w,C,S,P,H,A,N,T,D,R=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),u=[s=n.__e=t.__e]),(_=r.__b)&&_(n);e:if("function"==typeof R)try{if(w=n.props,C="prototype"in R&&R.prototype.render,S=(_=R.contextType)&&o[_.__c],P=_?S?S.props.value:_.__:o,t.__c?g=(d=n.__c=t.__c).__=d.__E:(C?n.__c=d=new R(w,P):(n.__c=d=new b(w,P),d.constructor=R,d.render=L),S&&S.sub(d),d.props=w,d.state||(d.state={}),d.context=P,d.__n=o,p=d.__d=!0,d.__h=[],d._sb=[]),C&&null==d.__s&&(d.__s=d.state),C&&null!=R.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=m({},d.__s)),m(d.__s,R.getDerivedStateFromProps(w,d.__s))),f=d.props,v=d.state,d.__v=n,p)C&&null==R.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),C&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(C&&null==R.getDerivedStateFromProps&&w!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(w,P),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(w,d.__s,P)||n.__v===t.__v)){for(n.__v!==t.__v&&(d.props=w,d.state=d.__s,d.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),H=0;H<d._sb.length;H++)d.__h.push(d._sb[H]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(w,d.__s,P),C&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,v,y)}))}if(d.context=P,d.props=w,d.__P=e,d.__e=!1,A=r.__r,N=0,C){for(d.state=d.__s,d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do{d.__d=!1,A&&A(n),_=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++N<25);d.state=d.__s,null!=d.getChildContext&&(o=m(m({},o),d.getChildContext())),C&&!p&&null!=d.getSnapshotBeforeUpdate&&(y=d.getSnapshotBeforeUpdate(f,v)),I(e,h(D=null!=_&&_.type===k&&null==_.key?_.props.children:_)?D:[D],n,t,o,i,u,a,s,l,c),d.base=n.__e,n.__u&=-161,d.__h.length&&a.push(d),g&&(d.__E=d.__=null)}catch(e){n.__v=null,l||null!=u?(n.__e=s,n.__u|=l?160:32,u[u.indexOf(s)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==u&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=x(t.__e,n,t,o,i,u,a,l,c);(_=r.diffed)&&_(n)}function F(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function x(e,n,r,o,i,u,a,s,l){var c,_,p,f,m,y,g,k=r.props,b=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((m=u[c])&&"setAttribute"in m==!!C&&(C?m.localName===C:3===m.nodeType)){e=m,u[c]=null;break}if(null==e){if(null===C)return document.createTextNode(b);e=document.createElementNS(i,C,b.is&&b),u=null,s=!1}if(null===C)k===b||s&&e.data===b||(e.data=b);else{if(u=u&&t.call(e.childNodes),k=r.props||d,!s&&null!=u)for(k={},c=0;c<e.attributes.length;c++)k[(m=e.attributes[c]).name]=m.value;for(c in k)if(m=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)p=m;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;D(e,c,null,m,i)}for(c in b)m=b[c],"children"==c?f=m:"dangerouslySetInnerHTML"==c?_=m:"value"==c?y=m:"checked"==c?g=m:"key"===c||s&&"function"!=typeof m||k[c]===m||D(e,c,m,k[c],i);if(_)s||p&&(_.__html===p.__html||_.__html===e.innerHTML)||(e.innerHTML=_.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&w(r,0),s,l),null!=u)for(c=u.length;c--;)null!=u[c]&&v(u[c]);s||(c="value",void 0!==y&&(y!==e[c]||"progress"===C&&!y||"option"===C&&y!==k[c])&&D(e,c,y,k[c],i),c="checked",void 0!==g&&g!==e[c]&&D(e,c,g,k[c],i))}return e}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||v(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function L(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=m({},this.state),"function"==typeof e&&(e=e(m({},t),this.props)),e&&m(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=k,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,l=0,c=R(!1),_=R(!0);var G=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,G(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},W=new Map;var B,O=function(e){var n=W.get(this);return n||(n=new Map,W.set(this,n)),(n=G(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(y),q={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},"Request fonts":{en:"Request fonts",ru:"Запросить шрифты"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},Webcamera:{en:"Webcamera",ru:"Веб-камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"},Input:{en:"Input",ru:"Ввод"},Mouse:{en:"Mouse",ru:"Мышь"},Reset:{en:"Reset",ru:"Сброс"},"Mouse and keyboard":{en:"Mouse and keyboard",ru:"Мышь и клавиатура"},Keyboard:{en:"Keyboard",ru:"Клавиатура"},"Testing keyboard":{en:"Testing keyboard",ru:"Тестирование клавиатуры"},"Testing mouse":{en:"Testing mouse",ru:"Тестирование мышки"},"Check device online":{en:"Check device online",ru:"Проверь устройство онлайн"},"Report a bug":{en:"Report a bug",ru:"Сообщить об ошибке"},"Press a key to display its code.":{en:"Press a key to display its code.",ru:"Нажмите клавишу, чтобы увидеть её код."},"Displaying key codes":{en:"Displaying key codes",ru:"Отображение кодов клавиш"},Mic:{en:"Mic",ru:"Микрофон"},Fonts:{en:"Fonts",ru:"Шрифты"},"Local fonts":{en:"Local fonts",ru:"Локальные шрифты"},Filter:{en:"Filter",ru:"Фильтр"},Family:{en:"Family",ru:"Семейство"},Style:{en:"Style",ru:"Стиль"},"Local Font Access API is not supported.":{en:"Local Font Access API is not supported.",ru:"Local Font Access API не поддерживается."},"Group by family":{en:"Group by family",ru:"Группировать по семейству"},"Sample rate":{en:"Sample rate",ru:"Частота дискретизации"},"Sample size":{en:"Sample size",ru:"Размер семпла"},"Channel count":{en:"Channel count",ru:"Количество каналов"},"Auto gain control":{en:"Auto gain control",ru:"Автоматическая регулировка усиления"},Latency:{en:"Latency",ru:"Задержка"},"Noise suppression":{en:"Noise suppression",ru:"Шумоподавление"},"Echo cancellation":{en:"Echo cancellation",ru:"Эхоподавление"},"Background blur":{en:"Background blur",ru:"Размытие фона"},"hr.":{en:"hr.",ru:"ч."},"min.":{en:"min.",ru:"мин."},"sec.":{en:"sec.",ru:"с."},"Discharging time":{en:"Discharging time",ru:"Время до полной разрядки"},"Charging time":{en:"Charging time",ru:"Время до полной зарядки"}};function j(e){var n=q[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[B];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(B,'" in getText().')),e):t}function K(e){return e[B]}var V,z,$,Y,J=0,Q=[],X=r,Z=X.__b,ee=X.__r,ne=X.diffed,te=X.__c,re=X.unmount,oe=X.__;function ie(e,n){X.__h&&X.__h(z,e,J||n),J=0;var t=z.__H||(z.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function ue(e){return J=1,function(e,n,t){var r=ie(V++,2);if(r.t=e,!r.__c&&(r.__=[me(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=z,!z.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};z.u=!0;var i=z.shouldComponentUpdate,u=z.componentWillUpdate;z.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},z.shouldComponentUpdate=o}return r.__N||r.__}(me,e)}function ae(e){return J=5,se((function(){return{current:e}}),[])}function se(e,n){var t=ie(V++,7);return he(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function le(e,n){return J=8,se((function(){return e}),n)}function ce(){for(var e;e=Q.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(pe),e.__H.__h.forEach(fe),e.__H.__h=[]}catch(n){e.__H.__h=[],X.__e(n,e.__v)}}X.__b=function(e){z=null,Z&&Z(e)},X.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),oe&&oe(e,n)},X.__r=function(e){ee&&ee(e),V=0;var n=(z=e.__c).__H;n&&($===z?(n.__h=[],z.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0}))):(n.__h.forEach(pe),n.__h.forEach(fe),n.__h=[],V=0)),$=z},X.diffed=function(e){ne&&ne(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Q.push(n)&&Y===X.requestAnimationFrame||((Y=X.requestAnimationFrame)||de)(ce)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0}))),$=z=null},X.__c=function(e,n){n.some((function(e){try{e.__h.forEach(pe),e.__h=e.__h.filter((function(e){return!e.__||fe(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],X.__e(t,e.__v)}})),te&&te(e,n)},X.unmount=function(e){re&&re(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{pe(e)}catch(e){n=e}})),t.__H=void 0,n&&X.__e(n,t.__v))};var _e="function"==typeof requestAnimationFrame;function de(e){var n,t=function(){clearTimeout(r),_e&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);_e&&(n=requestAnimationFrame(t))}function pe(e){var n=z,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),z=n}function fe(e){var n=z;e.__c=e.__(),z=n}function he(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function me(e,n){return"function"==typeof n?n(e):n}function ve(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ye(r,t)),r):(n&&(r=ye(r,n)),r)}}function ye(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}function ge(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}var ke,be=ve("button");function we(e){var t=ge(e.class,be({theme:e.theme,size:e.size}));return O(ke||(ke=n(['<button class="','" onClick="','">',"</button>"],['<button class="','" onClick="','">',"</button>"])),t,e.onClick,e.children)}var Ce,Se=ve("checkbox");function Pe(e){var t=ue(e.checked),r=t[0],o=t[1],i=ae(),u=le((function(){if(i.current){var n=!i.current.checked;o(n),e.onClick&&e.onClick(n)}}),[r]),a=ge(e.class,Se({checked:r,theme:e.theme}));return O(Ce||(Ce=n(['<label class="','" onClick="','">\n        <input autocomplete="off" ref="','" class="','" type="checkbox" checked="','" />',"\n    </label>"],['<label class="','" onClick="','">\n        <input autocomplete="off" ref="','" class="','" type="checkbox" checked="','" />',"\n    </label>"])),a,u,i,Se("input"),r,e.label)}var Ie,He,Ae=ve("input");function Ne(e){var t=ge(Ae(),e.class),r=ue(e.value||""),o=r[0],i=r[1],u=ae(),a=le((function(){if(u.current){var n=u.current.value;i(n),e.onChange&&e.onChange(n)}}),[o,e.onChange]);return O(Ie||(Ie=n(['<input ref="','" class="','" onInput="','" placeholder="','" value="','" />'],['<input ref="','" class="','" onInput="','" placeholder="','" value="','" />'])),u,t,a,e.placeholder,o)}function Te(e){return O(He||(He=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var De,Re,Me=ve("font-item");function Fe(e){var t=ue(!1),r=t[0],o=t[1],i=le((function(){o(!r)}),[r]);return O(Re||(Re=n(['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"],['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"])),Me({opened:r}),Me("value"),Me("switcher"),i,e.fullName,r?O(De||(De=n(['<div class="','">\n                <div class="','">',": ",'</div>\n                <div class="','">',": ","</div>\n            </div>"],['<div class="','">\n                <div class="','">',": ",'</div>\n                <div class="','">',": ","</div>\n            </div>"])),Me("content"),Me("family"),j("Family"),e.family,Me("style"),j("Style"),e.style):"")}var xe,Ue,Ee=ve("font-list");function Le(e){var t=e.items;return O(Ue||(Ue=n(['<div class="','">\n        ',"\n    </div>"],['<div class="','">\n        ',"\n    </div>"])),Ee(),t.map((function(e,t){return O(xe||(xe=n(["<",' key="','" family="','" fullName="','" style="','" num="','" //>'],["<",' key="','" family="','" fullName="','" style="','" num="','" //>'])),Fe,e.fullName,e.family,e.fullName,e.style,t+1)})))}var Ge,We,Be=ve("font-family-item");function Oe(e){var t=ue(!1),r=t[0],o=t[1],i=le((function(){o(!r)}),[r]);return O(We||(We=n(['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"],['<div class="','">\n        <div class="','">\n            <span class="','" onClick="','">',"</span>\n            ","\n        </div>\n    </div>"])),Be({opened:r}),Be("value"),Be("switcher"),i,e.name,r?O(Ge||(Ge=n(['<div class="','"><',' items="','" //></div>'],['<div class="','"><',' items="','" //></div>'])),Be("items"),Le,e.items):"")}var qe,je,Ke=ve("font-list-grouped");function Ve(e){var t=function(e){var n={};e.forEach((function(e){n[e.family]=n[e.family]||{name:e.family,items:[]},n[e.family].items.push(e)}));var t=[];return Object.keys(n).forEach((function(e){t.push(n[e]),n[e].items.sort((function(e,n){return e.fullName>n.fullName?1:-1}))})),t.sort((function(e,n){return e.name>n.name?1:-1})),t}(e.items);return O(je||(je=n(['<div class="','">\n        ',"\n    </div>"],['<div class="','">\n        ',"\n    </div>"])),Ke(),t.map((function(e,t){return O(qe||(qe=n(["<",' key="','" name="','" items="','" num="','" //>'],["<",' key="','" name="','" items="','" num="','" //>'])),Oe,e.name,e.name,e.items,t+1)})))}var ze,$e,Ye,Je,Qe,Xe=ve("fonts");function Ze(){if(!window.queryLocalFonts)return O(ze||(ze=n(["<",">","<//>"],["<",">","<//>"])),Te,j("Local Font Access API is not supported."));var e=ue(),t=e[0],r=e[1],o=ue(""),i=o[0],u=o[1],a=ue(!0),s=a[0],l=a[1],c=le((function(){window.queryLocalFonts&&window.queryLocalFonts().then((function(e){r(e)}))}),[]);!function(e,n){var t=ie(V++,3);!X.__s&&he(t.__H,n)&&(t.__=e,t.i=n,z.__H.__h.push(t))}((function(){c()}),[]);var _=le((function(e){l(e)}),[]),d=le((function(e){u(e)}),[]),p=function(e,n){return(e||[]).filter((function(e){return-1!==e.fullName.toLowerCase().indexOf(n.toLowerCase())}))}(t||[],i);return O(Qe||(Qe=n(['\n        <div class="','">\n            <div class="','">\n                ',"\n                ","\n                ","\n            </div>\n            <",' items="','" />\n        </div>\n    '],['\n        <div class="','">\n            <div class="','">\n                ',"\n                ","\n                ","\n            </div>\n            <",' items="','" />\n        </div>\n    '])),Xe(),Xe("controls"),t?"":O($e||($e=n(["<",' theme="active" onClick="','">',"<//>"],["<",' theme="active" onClick="','">',"<//>"])),we,c,j("Request fonts")),t?O(Ye||(Ye=n(["<",' class="','" placeholder="','" value="" onChange="','" //>'],["<",' class="','" placeholder="','" value="" onChange="','" //>'])),Ne,Xe("filter"),j("Filter"),d):"",t?O(Je||(Je=n(['<div class="','"><',' onClick="','" label="','" checked="','" //></div>'],['<div class="','"><',' onClick="','" label="','" checked="','" //></div>'])),Xe("group-by-family"),Pe,_,j("Group by family"),s):"",s?Ve:Le,p)}var en="undefined"!=typeof document,nn="undefined"!=typeof window,tn="undefined"!=typeof navigator,rn="undefined"!=typeof screen;var on=1;function un(e,n){return(e||"").slice(0,n)}function an(){return Math.floor(Math.random()*(1<<30))}var sn=512;function ln(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function cn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return ln(t,n,e[n])})),ln(t,"rn",an()),ln(t,"c",!!tn&&navigator.cookieEnabled),ln(t,"s",rn?[screen.width,screen.height,screen.colorDepth].join("x"):""),ln(t,"sk",nn&&window.devicePixelRatio||on),ln(t,"w",nn?[window.innerWidth,window.innerHeight].join("x"):""),ln(t,"en",en&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return ln(t,"et",r),ln(t,"st",r),ln(t,"t",un(n,sn)),t.join(":")}var _n=1024;function dn(e){return un(e,_n)}function pn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var fn,hn=window.location.host;!function(e,n,t){!function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":cn(n,r.title),rn:an(),ut:r.ut};r.url&&(o["page-url"]=dn(r.url)),r.referrer&&(o["page-ref"]=dn(r.referrer)),pn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:e,pageParams:{referrer:en?document.referrer:"",title:en?document.title:"",url:nn&&window.location?window.location.href:""},params:t})}("caniwatchvideo.online"===hn||"checkdevice.online"===hn?"95998062":"97747983"),function(e){B=e}((fn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==fn&&"ru"!==fn&&(fn="en"),fn)),window.addEventListener("beforeinstallprompt",(function(e){}));var mn,vn=ve("link");function yn(e){return O(mn||(mn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),vn({theme:e.theme}),e.href,e.children)}var gn,kn=ve("footer");function bn(){return O(gn||(gn=n(['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"],['<footer class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><',' target="_blank" href="https://github.com/vvideo/caniwatchvideo/issues">',"<//></div>\n    </footer>"])),kn(),kn("item"),kn("l1"),kn("l2"),kn("l3"),kn("l4"),kn("l5"),kn("l6"),kn("item",{g:!0}),yn,j("Report a bug"))}var wn,Cn,Sn=ve("main-menu");function Pn(e){return O(Cn||(Cn=n(['\n        <nav class="','">\n            ',"\n        </nav>\n    "],['\n        <nav class="','">\n            ',"\n        </nav>\n    "])),Sn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return O(wn||(wn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Sn("item",{selected:e.selected}),e.url,e.title)})))}var In,Hn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Webcamera",ru:"Веб-камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"Mic",ru:"Микрофон"},id:"mic",url:"./mic.html",hidden:!0},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Mouse",ru:"Мышь"},id:"mouse",url:"./mouse.html"},{menuTitle:{en:"Keyboard",ru:"Клавиатура"},id:"keyboard",url:"./keyboard.html"},{menuTitle:{en:"Key codes",ru:"Коды клавиш"},id:"keycodes",url:"./keycodes.html",hidden:!0},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"Fonts",ru:"Шрифты"},id:"fonts",url:"./fonts.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function An(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Hn.map((function(n){var r=n.id===t;return r&&(document.title=K(n.header||n.menuTitle)),e(e({},n),{title:K(n.menuTitle),selected:r})}));return O(In||(In=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),Pn,r)}var Nn,Tn,Dn=ve("header");function Rn(){return O(Nn||(Nn=n(['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "],['\n        <header class="','">\n            <',' theme="white" href="/"><span class="','"></span>',"<//>\n        </header>\n    "])),Dn(),yn,Dn("logo"),j("Check device online"))}function Mn(e){return O(Tn||(Tn=n(["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <"," //>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Rn,An,e.children,bn)}var Fn,xn,Un,En=ve("page-title");function Ln(e){return O(Fn||(Fn=n(['\n        <h1 class="','">\n            ',"\n        </h1>\n    "],['\n        <h1 class="','">\n            ',"\n        </h1>\n    "])),En(),e.children)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],M(n,e=(!i&&o||n).__k=y(k,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),F(a,e,s)}(O(Un||(Un=n(["<"," //>"],["<"," //>"])),(function(){return O(xn||(xn=n(["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"],["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"])),Mn,Ln,j("Local fonts"),Ze)})),document.querySelector(".page"))}));
