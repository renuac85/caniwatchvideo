!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,l,_,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function h(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return y(e,a,o,i,null)}function y(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function S(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(P)}function P(){var e,n,t,o,u,a,l,_;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,l=[],_=[],t.__P&&((o=h({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,l,null==a?k(u):a,!!(32&u.__u),_),o.__v=u.__v,o.__.__k[o.__i]=o,T(l,o,_),o.__e!=a&&C(o)),i.length>n&&i.sort(s));P.__r=0}function I(e,n,t,r,o,i,u,a,s,l,_){var c,f,v,h,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(v=t.__k[c])&&"boolean"!=typeof v&&"function"!=typeof v&&(f=-1===v.__i?d:g[v.__i]||d,v.__i=c,R(e,v,f,o,i,u,a,s,l,_),h=v.__e,v.ref&&f.ref!=v.ref&&(f.ref&&U(f.ref,null,v),_.push(v.ref,v.__c||h,v)),null==m&&null!=h&&(m=h),65536&v.__u||f.__k===v.__k?(s&&!s.isConnected&&(s=k(f)),s=x(v,s,e)):"function"==typeof v.type&&void 0!==v.__d?s=v.__d:h&&(s=h.nextSibling),v.__d=void 0,v.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,u,a,s=n.length,l=t.length,_=l,c=0;for(e.__k=[],r=0;r<s;r++)u=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):v(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=A(o,t,u,_),o.__i=a,i=null,-1!==a&&(_--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a===u+1?c++:a>u?_>s-u?c+=a-u:c--:a<u?a==u-1&&(c=a-u):c=0,a!==r+c&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i,!1),t[u]=null,_--);if(_)for(r=0;r<l;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),E(i,i))}function x(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=x(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function A(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function D(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function N(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||D(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||D(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,i?c:_,i)):e.removeEventListener(n,i?c:_,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function M(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,o,i,u,a,s,l,_,c){var p,f,g,y,C,S,P,H,x,A,D,M,R,T,U,E=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(_=!!(32&o.__u),a=[l=n.__e=o.__e]),(p=r.__b)&&p(n);e:if("function"==typeof E)try{if(H=n.props,x=(p=E.contextType)&&i[p.__c],A=p?x?x.props.value:p.__:i,o.__c?P=(f=n.__c=o.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(H,A):(n.__c=f=new b(H,A),f.constructor=E,f.render=G),x&&x.sub(f),f.props=H,f.state||(f.state={}),f.context=A,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=h({},f.__s)),h(f.__s,E.getDerivedStateFromProps(H,f.__s))),y=f.props,C=f.state,f.__v=n,g)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,A),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,A)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),D=0;D<f._sb.length;D++)f.__h.push(f._sb[D]);f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,A),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,C,S)}))}if(f.context=A,f.props=H,f.__P=e,f.__e=!1,M=r.__r,R=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,M&&M(n),p=f.render(f.props,f.state,f.context),T=0;T<f._sb.length;T++)f.__h.push(f._sb[T]);f._sb=[]}else do{f.__d=!1,M&&M(n),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++R<25);f.state=f.__s,null!=f.getChildContext&&(i=h(h({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(S=f.getSnapshotBeforeUpdate(y,C)),I(e,v(U=null!=p&&p.type===w&&null==p.key?p.props.children:p)?U:[U],n,o,i,u,a,s,l,_,c),f.base=n.__e,n.__u&=-161,f.__h.length&&s.push(f),P&&(f.__E=f.__=null)}catch(e){n.__v=null,_||null!=a?(n.__e=l,n.__u|=_?160:32,a[a.indexOf(l)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==a&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,u,a,s,l){var _,c,p,f,h,g,y,w=r.props,b=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(_=0;_<u.length;_++)if((h=u[_])&&"setAttribute"in h==!!C&&(C?h.localName===C:3===h.nodeType)){e=h,u[_]=null;break}if(null==e){if(null===C)return document.createTextNode(b);e=document.createElementNS(i,C,b.is&&b),u=null,s=!1}if(null===C)w===b||s&&e.data===b||(e.data=b);else{if(u=u&&t.call(e.childNodes),w=r.props||d,!s&&null!=u)for(w={},_=0;_<e.attributes.length;_++)w[(h=e.attributes[_]).name]=h.value;for(_ in w)if(h=w[_],"children"==_);else if("dangerouslySetInnerHTML"==_)p=h;else if("key"!==_&&!(_ in b)){if("value"==_&&"defaultValue"in b||"checked"==_&&"defaultChecked"in b)continue;N(e,_,null,h,i)}for(_ in b)h=b[_],"children"==_?f=h:"dangerouslySetInnerHTML"==_?c=h:"value"==_?g=h:"checked"==_?y=h:"key"===_||s&&"function"!=typeof h||w[_]===h||N(e,_,h,w[_],i);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,v(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&k(r,0),s,l),null!=u)for(_=u.length;_--;)null!=u[_]&&m(u[_]);s||(_="value",void 0!==g&&(g!==e[_]||"progress"===C&&!g||"option"===C&&g!==w[_])&&N(e,_,g,w[_],i),_="checked",void 0!==y&&y!==e[_]&&N(e,_,y,w[_],i))}return e}(o.__e,n,o,i,u,a,s,_,c);(p=r.diffed)&&p(n)}function T(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)U(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function U(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function E(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&E(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},t),this.props)),e&&h(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=w,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,l=0,_=M(!1),c=M(!0);var F=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,F(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},V=new Map;var W=function(e){var n=V.get(this);return n||(n=new Map,V.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var l=0;l<e[s].length;l++)n=e[s][l],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][l+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g);function B(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=L(r,t)),r):(n&&(r=L(r,n)),r)}}function L(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}var O,j=B("header");function q(e){return W(O||(O=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),j(),e.children)}var $,K={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"},RAM:{en:"RAM",ru:"ОЗУ"},Hz:{en:"Hz",ru:"Гц"},"Refresh rate":{en:"Refresh rate",ru:"Частота обновления"}};function z(e){var n=K[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[$];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat($,'" in getText().')),e):t}function Y(e){return e[$]}var J,Q,X,Z,ee=0,ne=[],te=[],re=r,oe=re.__b,ie=re.__r,ue=re.diffed,ae=re.__c,se=re.unmount,le=re.__;function _e(e,n){re.__h&&re.__h(Q,e,ee||n),ee=0;var t=Q.__H||(Q.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:te}),t.__[e]}function ce(e){return ee=1,function(e,n,t){var r=_e(J++,2);if(r.t=e,!r.__c&&(r.__=[ye(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};Q.u=!0;var i=Q.shouldComponentUpdate,u=Q.componentWillUpdate;Q.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},Q.shouldComponentUpdate=o}return r.__N||r.__}(ye,e)}function de(e,n){var t=_e(J++,7);return function(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function pe(e,n){return ee=8,de((function(){return e}),n)}function fe(){for(var e;e=ne.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(me),e.__H.__h.forEach(ge),e.__H.__h=[]}catch(n){e.__H.__h=[],re.__e(n,e.__v)}}re.__b=function(e){Q=null,oe&&oe(e)},re.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),le&&le(e,n)},re.__r=function(e){ie&&ie(e),J=0;var n=(Q=e.__c).__H;n&&(X===Q?(n.__h=[],Q.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=te,e.__N=e.i=void 0}))):(n.__h.forEach(me),n.__h.forEach(ge),n.__h=[],J=0)),X=Q},re.diffed=function(e){ue&&ue(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==ne.push(n)&&Z===re.requestAnimationFrame||((Z=re.requestAnimationFrame)||he)(fe)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==te&&(e.__=e.__V),e.i=void 0,e.__V=te}))),X=Q=null},re.__c=function(e,n){n.some((function(e){try{e.__h.forEach(me),e.__h=e.__h.filter((function(e){return!e.__||ge(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],re.__e(t,e.__v)}})),ae&&ae(e,n)},re.unmount=function(e){se&&se(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{me(e)}catch(e){n=e}})),t.__H=void 0,n&&re.__e(n,t.__v))};var ve="function"==typeof requestAnimationFrame;function he(e){var n,t=function(){clearTimeout(r),ve&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);ve&&(n=requestAnimationFrame(t))}function me(e){var n=Q,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Q=n}function ge(e){var n=Q;e.__c=e.__(),Q=n}function ye(e,n){return"function"==typeof n?n(e):n}function we(e,n){e.getTracks().forEach((function(e){e.stop()})),n.pause(),n.srcObject=null}function be(e,n){return navigator.mediaDevices.getUserMedia(n).then((function(n){return e.srcObject=n,e.setAttribute("playsinline",""),e.muted=!0,e.controls=!0,e.play(),n}))}function ke(e){return{0:{video:{width:{ideal:19200}},audio:!0},1:{video:{width:{ideal:0}},audio:!0},2:{video:{frameRate:{ideal:200}},audio:!0}}[e]}function Ce(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}var Se,Pe=B("button");function Ie(e){var t=Ce(e.class,Pe({theme:e.theme,size:e.size}));return W(Se||(Se=n(['<button class="','" onClick="','">',"</button>"],['<button class="','" onClick="','">',"</button>"])),t,e.onClick,e.children)}var He,xe=B("radio-button");function Ae(e){var t=pe((function(){var n;null===(n=e.onClick)||void 0===n||n.call(e,e.value)}),[e.onClick]),r=Ce(xe({selected:e.selected}),e.class);return W(He||(He=n(['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "],['\n        <span\n            class="','"\n            onClick="','"\n            key="','"\n        >',"</span>\n    "])),r,t,e.value,e.text)}var De,Ne,Me,Re=B("radio-buttons");function Te(e){var t=e.buttons,r=e.label,o=e.onSelect,i=function(e){var n=e.find((function(e){return e.selected}));return null!=n?n:e[0]}(t),u=ce(i?i.value:void 0),a=u[0],s=u[1],l=pe((function(e){s(e),o(e)}),[o]);return W(Ne||(Ne=n(['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','">\n                ',"\n            </div>\n        </div>\n    "],['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','">\n                ',"\n            </div>\n        </div>\n    "])),Re(),Re("label"),r,Re("items"),t.map((function(e){return W(De||(De=n(["<",'\n                            key="','"\n                            class="','"\n                            selected="','"\n                            text="','"\n                            value="','"\n                            onClick="','"\n                        ><//>'],["<",'\n                            key="','"\n                            class="','"\n                            selected="','"\n                            text="','"\n                            value="','"\n                            onClick="','"\n                        ><//>'])),Ae,e.value,Re("item"),e.value===a,e.text,e.value,l)})))}function Ue(e){return W(Me||(Me=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var Ee,Ge=B("row");function Fe(e){return W(Ee||(Ee=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),Ge(),Ge("category"),e.name,Ge("body"),e.children)}var Ve,We,Be,Le=B("list");function Oe(e){var t=e.items.filter((function(e){if(!e)return!1;if(1===e.length)return!0;e[0];var n=e[1];return void 0!==n&&""!==n})).map((function(e){var n=e[0],t=e[1];return 1===e.length?[n]:[n,"boolean"==typeof t?String(t):t]}));return t.length?W(Be||(Be=n(["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"],["<",' name="','">\n        <ul class="','">\n        ',"\n        </ul>\n    <//>"])),Fe,e.title,Le(),t.map((function(e){var t=e[0],r=e[1];return 1===e.length?W(Ve||(Ve=n(["<li>","</li>"],["<li>","</li>"])),t):W(We||(We=n(["<li>",": ","</li>"],["<li>",": ","</li>"])),t,r)}))):""}const je=[[1,1],[3,2],[4,1],[4,3],[5,3],[5,4],[16,9],[16,10],[21,9],[32,9],[12,5],[43,18],[64,27],[16,5],[18,5],[32,9]].map((e=>{const[n,t]=e;return{x:n,y:t,value:`${n}:${t}`,ratio:n/t}})),qe=je.map((e=>e.ratio)).sort(),$e=je.reduce(((e,n)=>(e[n.ratio]=n,e)),{}),Ke=.06;function ze(e,n,t={tolerance:Ke}){const r=Math.max(e,n)/Math.min(e,n),o=$e[r];if(o)return{x:o.x,y:o.y,value:o.value,approximately:!1,nonStandard:!1};const i=function(e,n,t){for(let r=0;r<e.length;r++){if(Math.abs(e[r]-n)<t)return e[r]}return}(qe,r,t.tolerance);if(i){const e=$e[i];return{x:e.x,y:e.y,value:`≈${e.value}`,approximately:!0,nonStandard:!1}}const u=function(e=0,n=0){for(;n;)[e,n]=[n,e%n];return e}(e,n);let a=e/u,s=n/u;return 1===u&&(a=Math.round(100*r)/100,s=1),{x:a,y:s,value:`${a}:${s}`,approximately:!1,nonStandard:!0}}function Ye(e){var t=e.video,r=t.width,o=t.height,i=[[z("Resolution"),"".concat(t.width,"×").concat(t.height)],[z("Aspect ratio"),ze(Math.max(r,o),Math.min(r,o)).value],[z("Frame rate"),"".concat(t.frameRate)]];return W(Je||(Je=n(["\n        <",' title="','" items="','"><//>\n    '],["\n        <",' title="','" items="','"><//>\n    '])),Oe,t.label,i)}var Je,Qe,Xe,Ze,en,nn,tn,rn=B("camera");function on(){var e=function(e){return ee=5,de((function(){return{current:e}}),[])}(null),t=ce(null),r=t[0],o=t[1],i=ce(0),u=i[0],a=i[1],s=ce(null),l=s[0],_=s[1],c=[{text:z("High resolution"),value:"0"},{text:z("Low resolution"),value:"1"},{text:z("High frame rate"),value:"2"}],d=pe((function(){var n=e.current;if(n)return r?(we(r,n),o(null),void(n.controls=!1)):void be(n,ke(u)).then((function(e){o(e),_(null)})).catch((function(e){_(e),console.log(e)}))}),[r,u]),p=pe((function(n){var t=e.current;a(n),r&&t&&(we(r,t),o(null),be(t,ke(n)).then((function(e){o(e),_(null)})).catch((function(e){_(e),console.log(e)})))}),[u,r]),f=r?function(e){var n=e.getVideoTracks()[0],t=e.getAudioTracks()[0],r=null==n?void 0:n.getSettings();return{video:{width:null==r?void 0:r.width,height:null==r?void 0:r.height,label:null==n?void 0:n.label,frameRate:null==r?void 0:r.frameRate},audio:{label:null==t?void 0:t.label}}}(r):void 0;if(!navigator.mediaDevices||"function"!=typeof navigator.mediaDevices.getUserMedia)return W(Qe||(Qe=n(["<",">","<//>"],["<",">","<//>"])),Ue,z("Media Devices API is not supported."));var v=Boolean(r),h=Boolean(r);return W(Ze||(Ze=n(['<div class="','">\n        <div class="','">\n            <',' theme="','" onClick="','">','<//>\n        </div>\n        <div class="','">\n            <',' onSelect="','" buttons="','"><//>\n        </div>\n\n        <',' error="','" //>\n\n        <div class="','">\n            <video ref="','" class="','" />\n        </div>\n\n        <div class="','">\n            ',"\n        </div>\n    </div>"],['<div class="','">\n        <div class="','">\n            <',' theme="','" onClick="','">','<//>\n        </div>\n        <div class="','">\n            <',' onSelect="','" buttons="','"><//>\n        </div>\n\n        <',' error="','" //>\n\n        <div class="','">\n            <video ref="','" class="','" />\n        </div>\n\n        <div class="','">\n            ',"\n        </div>\n    </div>"])),rn(),rn("select"),Ie,v?"red":"active",d,z(r?"Stop":"Select camera"),rn("controls"),Te,p,c,un,l,rn("container",{played:h}),e,rn("video"),rn("params"),f?W(Xe||(Xe=n(["<"," ..."," //>"],["<"," ..."," //>"])),Ye,f):"")}function un(e){var t=e.error;return t?"NotFoundError"===t.name?W(en||(en=n(["<",">","<//>"],["<",">","<//>"])),Ue,z("Camera not found.")):"NotAllowedError"===t.name?W(nn||(nn=n(["<",">","<//>"],["<",">","<//>"])),Ue,z("Camera is blocked.")):W(tn||(tn=n(["<",">","<//>"],["<",">","<//>"])),Ue,t.message):""}var an="undefined"!=typeof document,sn="undefined"!=typeof window,ln="undefined"!=typeof navigator,_n="undefined"!=typeof screen;var cn=1;function dn(e,n){return(e||"").slice(0,n)}function pn(){return Math.floor(Math.random()*(1<<30))}var fn=512;function vn(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function hn(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return vn(t,n,e[n])})),vn(t,"rn",pn()),vn(t,"c",!!ln&&navigator.cookieEnabled),vn(t,"s",_n?[screen.width,screen.height,screen.colorDepth].join("x"):""),vn(t,"sk",sn&&window.devicePixelRatio||cn),vn(t,"w",sn?[window.innerWidth,window.innerHeight].join("x"):""),vn(t,"en",an&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return vn(t,"et",r),vn(t,"st",r),vn(t,"t",dn(n,fn)),t.join(":")}var mn,gn,yn=1024;function wn(e){return dn(e,yn)}function bn(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":hn(n,r.title),rn:pn(),ut:r.ut};r.url&&(o["page-url"]=wn(r.url)),r.referrer&&(o["page-ref"]=wn(r.referrer)),bn(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:an?document.referrer:"",title:an?document.title:"",url:sn&&window.location?window.location.href:""},params:mn}),function(e){$=e}((gn=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==gn&&"ru"!==gn&&(gn="en"),gn)),window.addEventListener("beforeinstallprompt",(function(e){}));var kn,Cn=B("footer");function Sn(){return W(kn||(kn=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),Cn(),Cn("item"),Cn("l1"),Cn("l2"),Cn("l3"),Cn("l4"),Cn("l5"),Cn("l6"),Cn("item",{g:!0}),Cn("G"),Cn("i"),Cn("t"),Cn("H"),Cn("u"),Cn("b"))}var Pn,In,Hn=B("main-menu");function xn(e){return W(In||(In=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),Hn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return W(Pn||(Pn=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),Hn("item",{selected:e.selected}),e.url,e.title)})))}var An,Dn,Nn,Mn,Rn=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function Tn(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=Rn.map((function(n){var r=n.id===t;return r&&(document.title=Y(n.header||n.menuTitle)),e(e({},n),{title:Y(n.menuTitle),selected:r})}));return W(An||(An=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),xn,r)}function Un(e){return W(Dn||(Dn=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),Tn,e.children,Sn)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],R(n,e=(!i&&o||n).__k=g(w,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),T(a,e,s)}(W(Mn||(Mn=n(["<"," //>"],["<"," //>"])),(function(){return W(Nn||(Nn=n(["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"],["\n        <",">\n            <",">","<//>\n            <","><//>\n        <//>"])),Un,q,z("Camera"),on)})),document.querySelector(".page"))}));
