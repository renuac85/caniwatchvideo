!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,i,u,a,s,_,l,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,i,u,a={};for(u in n)"key"==u?o=n[u]:"ref"==u?i=n[u]:a[u]=n[u];if(arguments.length>2&&(a.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(u in e.defaultProps)void 0===a[u]&&(a[u]=e.defaultProps[u]);return y(e,a,o,i,null)}function y(e,n,t,i,u){var a={type:e,props:n,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==u?++o:u,__i:-1,__u:0};return null==u&&null!=r.vnode&&r.vnode(a),a}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function S(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||u!==r.debounceRendering)&&((u=r.debounceRendering)||a)(P)}function P(){var e,n,t,o,u,a,_,l;for(i.sort(s);e=i.shift();)e.__d&&(n=i.length,o=void 0,a=(u=(t=e).__v).__e,_=[],l=[],t.__P&&((o=v({},u)).__v=u.__v+1,r.vnode&&r.vnode(o),R(t.__P,o,u,t.__n,t.__P.namespaceURI,32&u.__u?[a]:null,_,null==a?k(u):a,!!(32&u.__u),l),o.__v=u.__v,o.__.__k[o.__i]=o,E(_,o,l),o.__e!=a&&C(o)),i.length>n&&i.sort(s));P.__r=0}function I(e,n,t,r,o,i,u,a,s,_,l){var c,f,h,v,m,g=r&&r.__k||p,y=n.length;for(t.__d=s,H(t,n,g),s=t.__d,c=0;c<y;c++)null!=(h=t.__k[c])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?d:g[h.__i]||d,h.__i=c,R(e,h,f,o,i,u,a,s,_,l),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&M(f.ref,null,h),l.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(s&&!s.isConnected&&(s=k(f)),s=A(h,s,e)):"function"==typeof h.type&&void 0!==h.__d?s=h.__d:v&&(s=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=s,t.__e=m}function H(e,n,t){var r,o,i,u,a,s=n.length,_=t.length,l=_,c=0;for(e.__k=[],r=0;r<s;r++)u=r+c,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,a=D(o,t,u,l),o.__i=a,i=null,-1!==a&&(l--,(i=t[a])&&(i.__u|=131072)),null==i||null===i.__v?(-1==a&&c--,"function"!=typeof o.type&&(o.__u|=65536)):a!==u&&(a===u+1?c++:a>u?l>s-u?c+=a-u:c--:a<u?a==u-1&&(c=a-u):c=0,a!==r+c&&(o.__u|=65536))):(i=t[u])&&null==i.key&&i.__e&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),U(i,i,!1),t[u]=null,l--);if(l)for(r=0;r<_;r++)null!=(i=t[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=k(i)),U(i,i))}function A(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=A(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function D(e,n,t,r){var o=e.key,i=e.type,u=t-1,a=t+1,s=n[t];if(null===s||s&&o==s.key&&i===s.type&&!(131072&s.__u))return t;if(r>(null==s||131072&s.__u?0:1))for(;u>=0||a<n.length;){if(u>=0){if((s=n[u])&&!(131072&s.__u)&&o==s.key&&i===s.type)return u;u--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&o==s.key&&i===s.type)return a;a++}}return-1}function N(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function x(e,n,t,r,o){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||N(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||N(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?r?t.u=r.u:(t.u=_,e.addEventListener(n,i?c:l,i)):e.removeEventListener(n,i?c:l,i);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function T(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=_++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function R(e,n,o,i,u,a,s,_,l,c){var p,f,g,y,C,S,P,H,A,D,N,T,R,E,M,U=n.type;if(void 0!==n.constructor)return null;128&o.__u&&(l=!!(32&o.__u),a=[_=n.__e=o.__e]),(p=r.__b)&&p(n);e:if("function"==typeof U)try{if(H=n.props,A=(p=U.contextType)&&i[p.__c],D=p?A?A.props.value:p.__:i,o.__c?P=(f=n.__c=o.__c).__=f.__E:("prototype"in U&&U.prototype.render?n.__c=f=new U(H,D):(n.__c=f=new b(H,D),f.constructor=U,f.render=G),A&&A.sub(f),f.props=H,f.state||(f.state={}),f.context=D,f.__n=i,g=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=U.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=v({},f.__s)),v(f.__s,U.getDerivedStateFromProps(H,f.__s))),y=f.props,C=f.state,f.__v=n,g)null==U.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==U.getDerivedStateFromProps&&H!==y&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(H,D),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(H,f.__s,D)||n.__v===o.__v)){for(n.__v!==o.__v&&(f.props=H,f.state=f.__s,f.__d=!1),n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),N=0;N<f._sb.length;N++)f.__h.push(f._sb[N]);f._sb=[],f.__h.length&&s.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(H,f.__s,D),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(y,C,S)}))}if(f.context=D,f.props=H,f.__P=e,f.__e=!1,T=r.__r,R=0,"prototype"in U&&U.prototype.render){for(f.state=f.__s,f.__d=!1,T&&T(n),p=f.render(f.props,f.state,f.context),E=0;E<f._sb.length;E++)f.__h.push(f._sb[E]);f._sb=[]}else do{f.__d=!1,T&&T(n),p=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++R<25);f.state=f.__s,null!=f.getChildContext&&(i=v(v({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(S=f.getSnapshotBeforeUpdate(y,C)),I(e,h(M=null!=p&&p.type===w&&null==p.key?p.props.children:p)?M:[M],n,o,i,u,a,s,_,l,c),f.base=n.__e,n.__u&=-161,f.__h.length&&s.push(f),P&&(f.__E=f.__=null)}catch(e){n.__v=null,l||null!=a?(n.__e=_,n.__u|=l?160:32,a[a.indexOf(_)]=null):(n.__e=o.__e,n.__k=o.__k),r.__e(e,n,o)}else null==a&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=function(e,n,r,o,i,u,a,s,_){var l,c,p,f,v,g,y,w=r.props,b=n.props,C=n.type;if("svg"===C?i="http://www.w3.org/2000/svg":"math"===C?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),null!=u)for(l=0;l<u.length;l++)if((v=u[l])&&"setAttribute"in v==!!C&&(C?v.localName===C:3===v.nodeType)){e=v,u[l]=null;break}if(null==e){if(null===C)return document.createTextNode(b);e=document.createElementNS(i,C,b.is&&b),u=null,s=!1}if(null===C)w===b||s&&e.data===b||(e.data=b);else{if(u=u&&t.call(e.childNodes),w=r.props||d,!s&&null!=u)for(w={},l=0;l<e.attributes.length;l++)w[(v=e.attributes[l]).name]=v.value;for(l in w)if(v=w[l],"children"==l);else if("dangerouslySetInnerHTML"==l)p=v;else if("key"!==l&&!(l in b)){if("value"==l&&"defaultValue"in b||"checked"==l&&"defaultChecked"in b)continue;x(e,l,null,v,i)}for(l in b)v=b[l],"children"==l?f=v:"dangerouslySetInnerHTML"==l?c=v:"value"==l?g=v:"checked"==l?y=v:"key"===l||s&&"function"!=typeof v||w[l]===v||x(e,l,v,w[l],i);if(c)s||p&&(c.__html===p.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),n.__k=[];else if(p&&(e.innerHTML=""),I(e,h(f)?f:[f],n,r,o,"foreignObject"===C?"http://www.w3.org/1999/xhtml":i,u,a,u?u[0]:r.__k&&k(r,0),s,_),null!=u)for(l=u.length;l--;)null!=u[l]&&m(u[l]);s||(l="value",void 0!==g&&(g!==e[l]||"progress"===C&&!g||"option"===C&&g!==w[l])&&x(e,l,g,w[l],i),l="checked",void 0!==y&&y!==e[l]&&x(e,l,y,w[l],i))}return e}(o.__e,n,o,i,u,a,s,l,c);(p=r.diffed)&&p(n)}function E(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)M(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function M(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function U(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||M(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&U(o[i],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function G(e,n,t){return this.constructor(e,t)}t=p.slice,r={__e:function(e,n,t,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),u=o.__d),u)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=w,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(e,n){return e.__v.__b-n.__v.__b},P.__r=0,_=0,l=T(!1),c=T(!0);var F=function(e,n,t,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var u=n[i++],a=n[i]?(n[0]|=u?1:2,t[n[i++]]):n[++i];3===u?r[0]=a:4===u?r[1]=Object.assign(r[1]||{},a):5===u?(r[1]=r[1]||{})[n[++i]]=a:6===u?r[1][n[++i]]+=a+"":u?(o=e.apply(a,F(e,a,t,["",null])),r.push(o),a[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(a)}return r},L=new Map;var V=function(e){var n=L.get(this);return n||(n=new Map,L.set(this,n)),(n=F(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",i="",u=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,o):3===r&&(e||o)?(u.push(3,e,o),r=2):2===r&&"..."===o&&e?u.push(4,e,0):2===r&&o&&!e?u.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(u.push(r,0,o,t),r=6),e&&(u.push(r,e,0,t),r=6)),o=""},s=0;s<e.length;s++){s&&(1===r&&a(),a(s));for(var _=0;_<e[s].length;_++)n=e[s][_],1===r?"<"===n?(a(),u=[u],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[s][_+1])?(a(),3===r&&(u=u[0]),r=u,(u=u[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,u=u[0])}return a(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),W="undefined"!=typeof document,B="undefined"!=typeof window,O="undefined"!=typeof navigator,j="undefined"!=typeof screen;var q=1;function K(e,n){return(e||"").slice(0,n)}function z(){return Math.floor(Math.random()*(1<<30))}var $=512;function Y(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function J(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return Y(t,n,e[n])})),Y(t,"rn",z()),Y(t,"c",!!O&&navigator.cookieEnabled),Y(t,"s",j?[screen.width,screen.height,screen.colorDepth].join("x"):""),Y(t,"sk",B&&window.devicePixelRatio||q),Y(t,"w",B?[window.innerWidth,window.innerHeight].join("x"):""),Y(t,"en",W&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return Y(t,"et",r),Y(t,"st",r),Y(t,"t",K(n,$)),t.join(":")}var Q=1024;function X(e){return K(e,Q)}function Z(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var ee,ne,te,re={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотношение сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},"Network & geo":{en:"Network & geo",ru:"Сеть и гео"},"Request geo location":{en:"Request geo location",ru:"Запросить местоположение"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"},"Color spaces":{en:"Color spaces",ru:"Цветовые пространства"},"HDR support":{en:"HDR support",ru:"Поддержка HDR"},"Current screen":{en:"Current screen",ru:"Текущий экран"},Orientation:{en:"Orientation",ru:"Ориентация"},Camera:{en:"Camera",ru:"Камера"},"Select camera":{en:"Select camera",ru:"Выбрать камеру"},Stop:{en:"Stop",ru:"Стоп"},Resolution:{en:"Resolution",ru:"Разрешение"},"Low resolution":{en:"Low resolution",ru:"Низкое разрешение"},"High resolution":{en:"High resolution",ru:"Высокое разрешение"},"High frame rate":{en:"High frame rate",ru:"Высокая частота кадров"},"Frame rate":{en:"Frame rate",ru:"Частота кадров"},Specify:{en:"Specify",ru:"Уточнить"},"Camera not found.":{en:"Camera not found.",ru:"Камера не найдена."},"Camera is blocked.":{en:"Camera is blocked.",ru:"Камера заблокирована."},"Has touch screen":{en:"Has touch screen",ru:"Сенсорный экран"},Additionally:{en:"Additionally",ru:"Дополнительно"},"Standalone application":{en:"Standalone application",ru:"Автономное приложение"},"Page not found.":{en:"Page not found.",ru:"Страница не найдена."},"Go to main page":{en:"Go to main page",ru:"Перейти на главную"},Permissions:{en:"Permissions",ru:"Разрешения"},"Start test":{en:"Start test",ru:"Начать тест"},"Test dead pixels":{en:"Test dead pixels",ru:"Тест битых пикселей"},Tests:{en:"Tests",ru:"Тесты"}};function oe(e){var n=re[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[ee];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(ee,'" in getText().')),e):t}function ie(e){return e[ee]}function ue(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ae(r,t)),r):(n&&(r=ae(r,n)),r)}}function ae(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":J(n,r.title),rn:z(),ut:r.ut};r.url&&(o["page-url"]=X(r.url)),r.referrer&&(o["page-ref"]=X(r.referrer)),Z(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:W?document.referrer:"",title:W?document.title:"",url:B&&window.location?window.location.href:""},params:ne}),function(e){ee=e}((te=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==te&&"ru"!==te&&(te="en"),te)),window.addEventListener("beforeinstallprompt",(function(e){}));var se,_e=ue("footer");function le(){return V(se||(se=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),_e(),_e("item"),_e("l1"),_e("l2"),_e("l3"),_e("l4"),_e("l5"),_e("l6"),_e("item",{g:!0}),_e("G"),_e("i"),_e("t"),_e("H"),_e("u"),_e("b"))}var ce,de,pe=ue("main-menu");function fe(e){return V(de||(de=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),pe(),e.items.filter((function(e){return!e.hidden})).map((function(e){return V(ce||(ce=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),pe("item",{selected:e.selected}),e.url,e.title)})))}var he,ve,me=[{header:{en:"Can I watch video?",ru:"Могу ли я смотреть видео?"},menuTitle:{en:"Video",ru:"Видео"},id:"index",url:"./"},{menuTitle:{en:"Audio",ru:"Аудио"},id:"audio",url:"./audio.html"},{menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html"},{menuTitle:{en:"Camera",ru:"Камера"},id:"camera",url:"./camera.html"},{menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{menuTitle:{en:"Network & geo",ru:"Сеть и гео"},id:"network",url:"./network.html"},{menuTitle:{en:"Platform",ru:"Платформа"},id:"platform",url:"./platform.html"},{menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"},{menuTitle:{en:"404",ru:"404"},id:"error404",url:"./error404.html",hidden:!0},{menuTitle:{en:"Test dead pixels",ru:"Тестирование битых пикселей"},id:"test-dead-pixels",url:"./test-dead-pixels.html",hidden:!0}];function ge(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=me.map((function(n){var r=n.id===t;return r&&(document.title=ie(n.header||n.menuTitle)),e(e({},n),{title:ie(n.menuTitle),selected:r})}));return V(he||(he=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),fe,r)}function ye(e){return V(ve||(ve=n(["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"],["\n        <div>\n            <","><//>\n\n            ","\n\n            <","><//>\n        </div>"])),ge,e.children,le)}var we,be=ue("header");function ke(e){return V(we||(we=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),be(),e.children)}var Ce,Se=ue("monitor");function Pe(e){return V(Ce||(Ce=n(['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','"></div>\n            <div class="','"></div>\n        </div>\n    '],['\n        <div class="','">\n            <div class="','">','</div>\n            <div class="','"></div>\n            <div class="','"></div>\n        </div>\n    '])),Se(),Se("content"),e.children,Se("rack"),Se("foot"))}var Ie,He=ue("screen-dead-pixels-example");function Ae(){return V(Ie||(Ie=n(['\n        <div class="','">\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n        </div>\n    '],['\n        <div class="','">\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n            <div class="','"></div>\n        </div>\n    '])),He(),He("content"),He("dpixel1"),He("dpixel2"),He("dpixel3"))}var De,Ne,xe,Te,Re=0,Ee=[],Me=[],Ue=r,Ge=Ue.__b,Fe=Ue.__r,Le=Ue.diffed,Ve=Ue.__c,We=Ue.unmount,Be=Ue.__;function Oe(e,n){Ue.__h&&Ue.__h(Ne,e,Re||n),Re=0;var t=Ne.__H||(Ne.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Me}),t.__[e]}function je(e){return Re=1,function(e,n,t){var r=Oe(De++,2);if(r.t=e,!r.__c&&(r.__=[en(void 0,n),function(e){var n=r.__N?r.__N[0]:r.__[0],t=r.t(n,e);n!==t&&(r.__N=[t,r.__[1]],r.__c.setState({}))}],r.__c=Ne,!Ne.u)){var o=function(e,n,t){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,n,t);var u=!1;return o.forEach((function(e){if(e.__N){var n=e.__[0];e.__=e.__N,e.__N=void 0,n!==e.__[0]&&(u=!0)}})),!(!u&&r.__c.props===e)&&(!i||i.call(this,e,n,t))};Ne.u=!0;var i=Ne.shouldComponentUpdate,u=Ne.componentWillUpdate;Ne.componentWillUpdate=function(e,n,t){if(this.__e){var r=i;i=void 0,o(e,n,t),i=r}u&&u.call(this,e,n,t)},Ne.shouldComponentUpdate=o}return r.__N||r.__}(en,e)}function qe(e,n){var t=Oe(De++,3);!Ue.__s&&Ze(t.__H,n)&&(t.__=e,t.i=n,Ne.__H.__h.push(t))}function Ke(e,n){var t=Oe(De++,7);return Ze(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function ze(e,n){return Re=8,Ke((function(){return e}),n)}function $e(){for(var e;e=Ee.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Qe),e.__H.__h.forEach(Xe),e.__H.__h=[]}catch(n){e.__H.__h=[],Ue.__e(n,e.__v)}}Ue.__b=function(e){Ne=null,Ge&&Ge(e)},Ue.__=function(e,n){e&&n.__k&&n.__k.__m&&(e.__m=n.__k.__m),Be&&Be(e,n)},Ue.__r=function(e){Fe&&Fe(e),De=0;var n=(Ne=e.__c).__H;n&&(xe===Ne?(n.__h=[],Ne.__h=[],n.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=Me,e.__N=e.i=void 0}))):(n.__h.forEach(Qe),n.__h.forEach(Xe),n.__h=[],De=0)),xe=Ne},Ue.diffed=function(e){Le&&Le(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==Ee.push(n)&&Te===Ue.requestAnimationFrame||((Te=Ue.requestAnimationFrame)||Je)($e)),n.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==Me&&(e.__=e.__V),e.i=void 0,e.__V=Me}))),xe=Ne=null},Ue.__c=function(e,n){n.some((function(e){try{e.__h.forEach(Qe),e.__h=e.__h.filter((function(e){return!e.__||Xe(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],Ue.__e(t,e.__v)}})),Ve&&Ve(e,n)},Ue.unmount=function(e){We&&We(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{Qe(e)}catch(e){n=e}})),t.__H=void 0,n&&Ue.__e(n,t.__v))};var Ye="function"==typeof requestAnimationFrame;function Je(e){var n,t=function(){clearTimeout(r),Ye&&cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);Ye&&(n=requestAnimationFrame(t))}function Qe(e){var n=Ne,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),Ne=n}function Xe(e){var n=Ne;e.__c=e.__(),Ne=n}function Ze(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function en(e,n){return"function"==typeof n?n(e):n}var nn,tn=ue("button");function rn(e){var t=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return e.filter((function(e){return null!=e})).join(" ")}(e.class,tn({theme:e.theme,size:e.size}));return V(nn||(nn=n(['<button class="','" onClick="','">',"</button>"],['<button class="','" onClick="','">',"</button>"])),t,e.onClick,e.children)}var on,un,an,sn=27,_n=8,ln=ue("test-dead-pixels"),cn=["white","black","red","green","blue"];function dn(){var e=je(!1),t=e[0],r=e[1],o=je(0),i=o[0],u=o[1],a=function(e){return Re=5,Ke((function(){return{current:e}}),[])}(),s=ze((function(){var e,n;u(0),r(!0),a.current&&(null===(n=(e=a.current).requestFullscreen)||void 0===n||n.call(e))}),[]),_=ze((function(){var e=i+1;u(e>cn.length-1?0:e)}),[i]),l=ze((function(){_()}),[_]);return qe((function(){var e=function(e){var n;e.keyCode===sn||e.keyCode===_n?(r(!1),a.current&&document.fullscreenElement&&(null===(n=document.exitFullscreen)||void 0===n||n.call(document))):_()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[_,t]),qe((function(){var e=function(){r(!1)};return document.addEventListener("fullscreenchange",e),function(){document.removeEventListener("fullscreenchange",e)}}),[]),V(on||(on=n(['\n        <div class="','">\n            <',' theme="active" onClick="','">','<///>\n            <div class="','" ref="','" style="background-color: ','" onClick="','"></div>\n        </div>\n    '],['\n        <div class="','">\n            <',' theme="active" onClick="','">','<///>\n            <div class="','" ref="','" style="background-color: ','" onClick="','"></div>\n        </div>\n    '])),ln({fullscreen:t}),rn,s,oe("Start test"),ln("content"),a,cn[i],l)}!function(e,n,o){var i,u,a,s;r.__&&r.__(e,n),u=(i="function"==typeof o)?null:n.__k,a=[],s=[],R(n,e=(!i&&o||n).__k=g(w,null,[e]),u||d,d,n.namespaceURI,!i&&o?[o]:u?null:n.firstChild?t.call(n.childNodes):null,a,!i&&o?o:u?u.__e:n.firstChild,i,s),E(a,e,s)}(V(an||(an=n(["<"," //>"],["<"," //>"])),(function(){return V(un||(un=n(["\n        <",">\n            <",">","<//>\n            <","><"," //><//>\n            <"," //>\n        <//>"],["\n        <",">\n            <",">","<//>\n            <","><"," //><//>\n            <"," //>\n        <//>"])),ye,ke,oe("Test dead pixels"),Pe,Ae,dn)})),document.querySelector(".page"))}));