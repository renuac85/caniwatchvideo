!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},e.apply(this,arguments)};function n(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}"function"==typeof SuppressedError&&SuppressedError;var t,r,o,a,s,i,u,l,c,p,_={},d=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function v(e,n){for(var t in n)e[t]=n[t];return e}function m(e){var n=e.parentNode;n&&n.removeChild(e)}function g(e,n,r){var o,a,s,i={};for(s in n)"key"==s?o=n[s]:"ref"==s?a=n[s]:i[s]=n[s];if(arguments.length>2&&(i.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===i[s]&&(i[s]=e.defaultProps[s]);return y(e,i,o,a,null)}function y(e,n,t,a,s){var i={type:e,props:n,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==s?++o:s,__i:-1,__u:0};return null==s&&null!=r.vnode&&r.vnode(i),i}function w(e){return e.children}function b(e,n){this.props=e,this.context=n}function k(e,n){if(null==n)return e.__?k(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?k(e):null}function I(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return I(e)}}function P(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!S.__r++||s!==r.debounceRendering)&&((s=r.debounceRendering)||i)(S)}function S(){var e,n,t,o,s,i,l,c;for(a.sort(u);e=a.shift();)e.__d&&(n=a.length,o=void 0,i=(s=(t=e).__v).__e,l=[],c=[],t.__P&&((o=v({},s)).__v=s.__v+1,r.vnode&&r.vnode(o),U(t.__P,o,s,t.__n,t.__P.namespaceURI,32&s.__u?[i]:null,l,null==i?k(s):i,!!(32&s.__u),c),o.__v=s.__v,o.__.__k[o.__i]=o,T(l,o,c),o.__e!=i&&I(o)),a.length>n&&a.sort(u));S.__r=0}function C(e,n,t,r,o,a,s,i,u,l,c){var p,f,h,v,m,g=r&&r.__k||d,y=n.length;for(t.__d=u,A(t,n,g),u=t.__d,p=0;p<y;p++)null!=(h=t.__k[p])&&"boolean"!=typeof h&&"function"!=typeof h&&(f=-1===h.__i?_:g[h.__i]||_,h.__i=p,U(e,h,f,o,a,s,i,u,l,c),v=h.__e,h.ref&&f.ref!=h.ref&&(f.ref&&R(f.ref,null,h),c.push(h.ref,h.__c||v,h)),null==m&&null!=v&&(m=v),65536&h.__u||f.__k===h.__k?(u&&!u.isConnected&&(u=k(f)),u=D(h,u,e)):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);t.__d=u,t.__e=m}function A(e,n,t){var r,o,a,s,i,u=n.length,l=t.length,c=l,p=0;for(e.__k=[],r=0;r<u;r++)s=r+p,null!=(o=e.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,null):h(o)?y(w,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,i=N(o,t,s,c),o.__i=i,a=null,-1!==i&&(c--,(a=t[i])&&(a.__u|=131072)),null==a||null===a.__v?(-1==i&&p--,"function"!=typeof o.type&&(o.__u|=65536)):i!==s&&(i===s+1?p++:i>s?c>u-s?p+=i-s:p--:i<s?i==s-1&&(p=i-s):p=0,i!==r+p&&(o.__u|=65536))):(a=t[s])&&null==a.key&&a.__e&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=k(a)),W(a,a,!1),t[s]=null,c--);if(c)for(r=0;r<l;r++)null!=(a=t[r])&&!(131072&a.__u)&&(a.__e==e.__d&&(e.__d=k(a)),W(a,a))}function D(e,n,t){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,n=D(r[o],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function N(e,n,t,r){var o=e.key,a=e.type,s=t-1,i=t+1,u=n[t];if(null===u||u&&o==u.key&&a===u.type&&!(131072&u.__u))return t;if(r>(null==u||131072&u.__u?0:1))for(;s>=0||i<n.length;){if(s>=0){if((u=n[s])&&!(131072&u.__u)&&o==u.key&&a===u.type)return s;s--}if(i<n.length){if((u=n[i])&&!(131072&u.__u)&&o==u.key&&a===u.type)return i;i++}}return-1}function M(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||f.test(n)?t:t+"px"}function H(e,n,t,r,o){var a;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||M(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||M(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])a=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+a]=t,t?r?t.u=r.u:(t.u=l,e.addEventListener(n,a?p:c,a)):e.removeEventListener(n,a?p:c,a);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,t))}}function x(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=l++;else if(n.t<t.u)return;return t(r.event?r.event(n):n)}}}function U(e,n,t,o,a,s,i,u,l,c){var p,_,d,f,m,g,y,k,I,P,S,A,D,N,M,H=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(l=!!(32&t.__u),s=[u=n.__e=t.__e]),(p=r.__b)&&p(n);e:if("function"==typeof H)try{if(k=n.props,I=(p=H.contextType)&&o[p.__c],P=p?I?I.props.value:p.__:o,t.__c?y=(_=n.__c=t.__c).__=_.__E:("prototype"in H&&H.prototype.render?n.__c=_=new H(k,P):(n.__c=_=new b(k,P),_.constructor=H,_.render=F),I&&I.sub(_),_.props=k,_.state||(_.state={}),_.context=P,_.__n=o,d=_.__d=!0,_.__h=[],_._sb=[]),null==_.__s&&(_.__s=_.state),null!=H.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=v({},_.__s)),v(_.__s,H.getDerivedStateFromProps(k,_.__s))),f=_.props,m=_.state,_.__v=n,d)null==H.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==H.getDerivedStateFromProps&&k!==f&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(k,P),!_.__e&&(null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(k,_.__s,P)||n.__v===t.__v)){for(n.__v!==t.__v&&(_.props=k,_.state=_.__s,_.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),S=0;S<_._sb.length;S++)_.__h.push(_._sb[S]);_._sb=[],_.__h.length&&i.push(_);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(k,_.__s,P),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(f,m,g)}))}if(_.context=P,_.props=k,_.__P=e,_.__e=!1,A=r.__r,D=0,"prototype"in H&&H.prototype.render){for(_.state=_.__s,_.__d=!1,A&&A(n),p=_.render(_.props,_.state,_.context),N=0;N<_._sb.length;N++)_.__h.push(_._sb[N]);_._sb=[]}else do{_.__d=!1,A&&A(n),p=_.render(_.props,_.state,_.context),_.state=_.__s}while(_.__d&&++D<25);_.state=_.__s,null!=_.getChildContext&&(o=v(v({},o),_.getChildContext())),d||null==_.getSnapshotBeforeUpdate||(g=_.getSnapshotBeforeUpdate(f,m)),C(e,h(M=null!=p&&p.type===w&&null==p.key?p.props.children:p)?M:[M],n,t,o,a,s,i,u,l,c),_.base=n.__e,n.__u&=-161,_.__h.length&&i.push(_),y&&(_.__E=_.__=null)}catch(e){n.__v=null,l||null!=s?(n.__e=u,n.__u|=l?160:32,s[s.indexOf(u)]=null):(n.__e=t.__e,n.__k=t.__k),r.__e(e,n,t)}else null==s&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=G(t.__e,n,t,o,a,s,i,l,c);(p=r.diffed)&&p(n)}function T(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)R(t[o],t[++o],t[++o]);r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function G(e,n,r,o,a,s,i,u,l){var c,p,d,f,v,g,y,w=r.props,b=n.props,I=n.type;if("svg"===I?a="http://www.w3.org/2000/svg":"math"===I?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=s)for(c=0;c<s.length;c++)if((v=s[c])&&"setAttribute"in v==!!I&&(I?v.localName===I:3===v.nodeType)){e=v,s[c]=null;break}if(null==e){if(null===I)return document.createTextNode(b);e=document.createElementNS(a,I,b.is&&b),s=null,u=!1}if(null===I)w===b||u&&e.data===b||(e.data=b);else{if(s=s&&t.call(e.childNodes),w=r.props||_,!u&&null!=s)for(w={},c=0;c<e.attributes.length;c++)w[(v=e.attributes[c]).name]=v.value;for(c in w)if(v=w[c],"children"==c);else if("dangerouslySetInnerHTML"==c)d=v;else if("key"!==c&&!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;H(e,c,null,v,a)}for(c in b)v=b[c],"children"==c?f=v:"dangerouslySetInnerHTML"==c?p=v:"value"==c?g=v:"checked"==c?y=v:"key"===c||u&&"function"!=typeof v||w[c]===v||H(e,c,v,w[c],a);if(p)u||d&&(p.__html===d.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),n.__k=[];else if(d&&(e.innerHTML=""),C(e,h(f)?f:[f],n,r,o,"foreignObject"===I?"http://www.w3.org/1999/xhtml":a,s,i,s?s[0]:r.__k&&k(r,0),u,l),null!=s)for(c=s.length;c--;)null!=s[c]&&m(s[c]);u||(c="value",void 0!==g&&(g!==e[c]||"progress"===I&&!g||"option"===I&&g!==w[c])&&H(e,c,g,w[c],a),c="checked",void 0!==y&&y!==e[c]&&H(e,c,y,w[c],a))}return e}function R(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function W(e,n,t){var o,a;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||R(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&W(o[a],n,t||"function"!=typeof e.type);t||null==e.__e||m(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function F(e,n,t){return this.constructor(e,t)}t=d.slice,r={__e:function(e,n,t,r){for(var o,a,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((a=o.constructor)&&null!=a.getDerivedStateFromError&&(o.setState(a.getDerivedStateFromError(e)),s=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(n){e=n}throw e}},o=0,b.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},t),this.props)),e&&v(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),P(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),P(this))},b.prototype.render=w,a=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,n){return e.__v.__b-n.__v.__b},S.__r=0,l=0,c=x(!1),p=x(!0);var j=function(e,n,t,r){var o;n[0]=0;for(var a=1;a<n.length;a++){var s=n[a++],i=n[a]?(n[0]|=s?1:2,t[n[a++]]):n[++a];3===s?r[0]=i:4===s?r[1]=Object.assign(r[1]||{},i):5===s?(r[1]=r[1]||{})[n[++a]]=i:6===s?r[1][n[++a]]+=i+"":s?(o=e.apply(i,j(e,i,t,["",null])),r.push(o),i[0]?n[0]|=2:(n[a-2]=0,n[a]=o)):r.push(i)}return r},B=new Map;var E=function(e){var n=B.get(this);return n||(n=new Map,B.set(this,n)),(n=j(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,r=1,o="",a="",s=[0],i=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,o):3===r&&(e||o)?(s.push(3,e,o),r=2):2===r&&"..."===o&&e?s.push(4,e,0):2===r&&o&&!e?s.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(s.push(r,0,o,t),r=6),e&&(s.push(r,e,0,t),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&i(),i(u));for(var l=0;l<e[u].length;l++)n=e[u][l],1===r?"<"===n?(i(),s=[s],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:a?n===a?a="":o+=n:'"'===n||"'"===n?a=n:">"===n?(i(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[u][l+1])?(i(),3===r&&(s=s[0]),r=s,(s=s[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(i(),r=2):o+=n),3===r&&"!--"===o&&(r=4,s=s[0])}return i(),s}(e)),n),arguments,[])).length>1?n:n[0]}.bind(g),O="undefined"!=typeof document,L="undefined"!=typeof window,V="undefined"!=typeof navigator,K="undefined"!=typeof screen;var z=1;function $(e,n){return(e||"").slice(0,n)}function q(){return Math.floor(Math.random()*(1<<30))}var Y=512;function J(e,n,t){(t||0===t)&&e.push(n+":"+(!0===t?"1":t))}function Q(e,n){var t=[];e&&Object.keys(e).forEach((function(n){return J(t,n,e[n])})),J(t,"rn",q()),J(t,"c",!!V&&navigator.cookieEnabled),J(t,"s",K?[screen.width,screen.height,screen.colorDepth].join("x"):""),J(t,"sk",L&&window.devicePixelRatio||z),J(t,"w",L?[window.innerWidth,window.innerHeight].join("x"):""),J(t,"en",O&&"string"==typeof document.charset?document.charset.toLowerCase():"");var r=Math.round(Date.now()/1e3);return J(t,"et",r),J(t,"st",r),J(t,"t",$(n,Y)),t.join(":")}var X=1024;function Z(e){return $(e,X)}function ee(e,n){var t,r="https://mc.yandex.ru/watch/"+e+"?"+(t=n,Object.keys(t).filter((function(e){return t[e]||0===t[e]})).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"));"undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(r," ")||("undefined"!=typeof fetch?fetch(r,{credentials:"include"}).catch((function(){})):"undefined"!=typeof Image&&((new Image).src=r))}var ne,te,re,oe={"Can I watch video in this browser?":{en:"Can I watch video in this browser?",ru:"Могу ли я смотреть видео в этом браузере?"},"Audio Codecs":{en:"Audio Codecs",ru:"Аудиокодеки"},"Video Codecs":{en:"Video Codecs",ru:"Видеокодеки"},Supported:{en:"Supported",ru:"Поддерживаемые"},"No supported audio codecs.":{en:"No supported audio codecs.",ru:"Нет поддерживаемых аудиокодеков."},"No supported video codecs.":{en:"No supported video codecs.",ru:"Нет поддерживаемых видеокодеков."},Unsupported:{en:"Unsupported",ru:"Не поддерживаемые"},Size:{en:"Size",ru:"Размер"},"Color depth":{en:"Color depth",ru:"Глубина цвета"},Audio:{en:"Audio",ru:"Аудио"},Video:{en:"Video",ru:"Видео"},"Image Formats":{en:"Image Formats",ru:"Форматы картинок"},"Native Streaming Support":{en:"Native Streaming Support",ru:"Поддержка нативного стримминга"},Yes:{en:"Yes",ru:"Да"},No:{en:"No",ru:"Нет"},Warning:{en:"Warning",ru:"Предупреждение"},Screens:{en:"Screens",ru:"Экраны"},Screen:{en:"Screen",ru:"Экран"},"No supported image formats.":{en:"No supported image formats.",ru:"Нет поддерживаемых форматов картинок."},"Can I listen to surround sound on online services?":{en:"Can I listen to surround sound on online services?",ru:"Могу ли я услышать многоканальный звук в онлайн-сервисах?"},"HTMLVideoElement Features":{en:"HTMLVideoElement Features",ru:"Возможности HTMLVideoElement"},"Aspect ratio":{en:"Aspect ratio",ru:"Соотн. сторон"},Primary:{en:"Primary",ru:"Основной"},Internal:{en:"Internal",ru:"Внутренний"},"Please reset zoom in the page":{en:"Please reset zoom in the page",ru:"Необходимо сбросить зум на странице"},"Can I watch HDR video?":{en:"Can I watch HDR video?",ru:"Могу ли я смотреть HDR видео?"},"Supports one of the audio codecs?":{en:"Supports one of the audio codecs?",ru:"Есть поддержка одного из аудиокодеков?"},"Is this an HDR-compatible screen?":{en:"Is this an HDR-compatible screen?",ru:"Это HDR-совместимый экран?"},"Supports one of the video codecs?":{en:"Supports one of the video codecs?",ru:"Есть поддержка одного из видеокодеков?"},"Supports one of the video codecs and DRM with high security level?":{en:"Supports one of the video codecs and DRM with high security level?",ru:"Есть поддержка одного из видеокодеков и DRM с высоким уровнем безопасности?"},"Can I watch 4K video on online services?":{en:"Can I watch 4K video on online services?",ru:"Могу ли я смотреть 4К видео в онлайн-сервисах?"},"Online services protect content using":{en:"Online services protect content using",ru:"Онлайн-сервисы защищают контент с помощью"},"Has DRM support?":{en:"Has DRM support?",ru:"Есть поддержка DRM?"},"Can I watch 4K video?":{en:"Can I watch 4K video?",ru:"Могу ли я смотреть 4К видео?"},"Is the screen larger than 2K?":{en:"Is the screen larger than 2K?",ru:"Экран больше чем 2К?"},"link:wiki:drm":{en:"https://en.wikipedia.org/wiki/Digital_rights_management",ru:"https://ru.wikipedia.org/wiki/Digital_rights_management"},bit:{en:"bit",ru:"бит"},"Not detected":{en:"Not detected",ru:"Не обнаружено"},"HDCP not detected":{en:"Could not be determined",ru:"Не удалось определить"},"Security level":{en:"Security level",ru:"Уровень безопасности"},"Security levels":{en:"Security levels",ru:"Уровни безопасности"},"Key system":{en:"Key system",ru:"Система ключей"},"Key systems":{en:"Key systems",ru:"Системы ключей"},Request:{en:"Request",ru:"Запрос"},Details:{en:"Details",ru:"Подробности"},Battery:{en:"Battery",ru:"Батарея"},Platform:{en:"Platform",ru:"Платформа"},Connection:{en:"Connection",ru:"Связь"},"Has HDR support for video?":{en:"Has HDR support for video?",ru:"Есть поддержка HDR для видео?"},"Additional monitor detected":{en:"Additional monitor detected",ru:"Обнаружен дополнительный монитор"},"link:apple:t2":{en:"https://support.apple.com/en-us/103265",ru:"https://support.apple.com/ru-ru/103265"},"Select 2018 or later Mac computer with an":{en:"Select 2018 or later Mac computer with an",ru:"Компьютер Мак (начиная с 2018 или новее) с"},"Internet Speed":{en:"Internet Speed",ru:"Скорость интернета"},"HDCP 2.2 or later":{en:"HDCP 2.2 or later",ru:"HDCP 2.2 или выше"},"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.":{en:"Make sure that monitors, video cards, and cables support HDCP 2.2 or later.",ru:"Монитор, видеокарта и кабель должны поддерживать HDCP 2.2 и выше"},GB:{en:"GB",ru:"ГБ"},"Hardware acceleration":{en:"Hardware acceleration",ru:"Аппаратное ускорение"},Model:{en:"Model",ru:"Модель"},Architecture:{en:"Architecture",ru:"Архитектура"},"Form factor":{en:"Form factor",ru:"Форм-фактор"},unsupported:{en:"unsupported",ru:"не поддерживается"},Name:{en:"Name",ru:"Название"},"Can I use WebGPU?":{en:"Can I use WebGPU?",ru:"Могу ли я использовать WebGPU?"},"WebGPU is not supported.":{en:"WebGPU is not supported.",ru:"WebGPU не поддерживается."},"GPU Adapter is not found.":{en:"GPU Adapter is not found.",ru:"GPU адаптер не найден."},"Video & audio":{en:"Video & audio",ru:"Видео и аудио"},"Can I use Battery Status API?":{en:"Can I use Battery Status API?",ru:"Могу ли я использовать Battery Status API?"},"Battery Status API is not supported.":{en:"Battery Status API is not supported.",ru:"Battery Status API не поддерживается."},"Can I use Network Information API?":{en:"Can I use Network Information API?",ru:"Могу ли я использовать Network Information API?"},"Network Information API is not supported.":{en:"Network Information API is not supported.",ru:"Network Information API не поддерживается."},Network:{en:"Network",ru:"Сеть"},"Can I use 🎮 Gamepad API?":{en:"Can I use 🎮 Gamepad API?",ru:"Могу ли я использовать 🎮 Gamepad API?"},"🎮 Gamepad API is not supported.":{en:"🎮 Gamepad API is not supported.",ru:"🎮 Gamepad API не поддерживается."},"Connect and press any button on the gamepad.":{en:"Connect and press any button on the gamepad.",ru:"Подключите и нажмите любую кнопку на джойстике."},Gamepad:{en:"Gamepad",ru:"Джойстик"},Storage:{en:"Storage",ru:"Хранилище"},Storages:{en:"Storages",ru:"Хранилища"},Features:{en:"Features",ru:"Возможности"},"Can I use web storages?":{en:"Can I use web storages?",ru:"Могу ли я использовать веб-хранилища?"},"Support of persistent storage":{en:"Support of persistent storage",ru:"Поддержка постоянного хранилища"},"Storage quota for origin":{en:"Storage quota for origin",ru:"Квота хранилища на домен"}};function ae(e){var n=oe[e];if(!n)return console.error('Not found key "'.concat(e,'" in getText().')),e;var t=n[ne];return void 0===t?(console.error('Not found key "'.concat(e,'", lang "').concat(ne,'" in getText().')),e):t}function se(e){return function(n,t){if(!n)return e;var r=e;return"string"==typeof n?(r=e+"__"+n,t&&(r=ie(r,t)),r):(n&&(r=ie(r,n)),r)}}function ie(e,n){var t=e;return Object.keys(n).forEach((function(r){var o=n[r];!1!==o&&null!=o&&""!==o&&(t+=" "+e+"_",!0===n[r]?t+=r:t+=r+"_"+o)})),t}"localhost"!==window.location.host&&function(e){var n=e.browserInfo,t=e.counterId,r=e.pageParams,o={"browser-info":Q(n,r.title),rn:q(),ut:r.ut};r.url&&(o["page-url"]=Z(r.url)),r.referrer&&(o["page-ref"]=Z(r.referrer)),ee(t,o)}({browserInfo:{pv:!0,ar:!0},counterId:"95998062",pageParams:{referrer:O?document.referrer:"",title:O?document.title:"",url:L&&window.location?window.location.href:""},params:te}),function(e){ne=e}((re=function(){for(var e=window.location.search.slice(1).split("&"),n=0;n<e.length;n++){var t=e[n].split("="),r=t[0],o=t[1];if("lang"===r)return o}return""}()||(navigator.language||"").split("-")[0]||"en","en"!==re&&"ru"!==re&&(re="en"),re));var ue,le=se("header");function ce(e){return E(ue||(ue=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),le(),e.children)}var pe,_e=se("footer");function de(){return E(pe||(pe=n(['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'],['<div class="','">\n        <div class="','">© <span class="','">V</span><span class="','">v</span><span class="','">i</span><span class="','">d</span><span class="','">e</span><span class="','">o</span></div>\n        <div class="','"><a target="_blank" href="https://github.com/vvideo/caniwatchvideo"><span class="','">G</span><span class="','">i</span><span class="','">t</span><span class="','">H</span><span class="','">u</span><span class="','">b</span></a></div>\n    </div>'])),_e(),_e("item"),_e("l1"),_e("l2"),_e("l3"),_e("l4"),_e("l5"),_e("l6"),_e("item",{g:!0}),_e("G"),_e("i"),_e("t"),_e("H"),_e("u"),_e("b"))}var fe,he=se("info-link");function ve(e){return E(fe||(fe=n(['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'],['<span class="','">\n        <a class="','" href="','" title="','" target="_blank">ⓘ</a>\n    </span>'])),he(),he("link"),e.href,e.title)}var me,ge=se("row");function ye(e){return E(me||(me=n(['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"],['<div class="','">\n        <div class="','">','</div>\n        <div class="','">',"</div>\n    </div>"])),ge(),ge("category"),e.name,ge("body"),e.children)}var we,be,ke,Ie=se("internet-speed");function Pe(){return E(be||(be=n(['<ul class="','">\n        <li><a href="https://speedtest.net" target="_blank">Speedtest</a></li>\n        <li><a href="https://fast.com" target="_blank">Fast</a></li>\n        ',"\n    </ul>"],['<ul class="','">\n        <li><a href="https://speedtest.net" target="_blank">Speedtest</a></li>\n        <li><a href="https://fast.com" target="_blank">Fast</a></li>\n        ',"\n    </ul>"])),Ie(),"ru"===ne?E(we||(we=n(['<li><a href="https://ya.ru/internet" target="_blank">Интернетометр</a></li>'],['<li><a href="https://ya.ru/internet" target="_blank">Интернетометр</a></li>']))):"")}function Se(e){return E(ke||(ke=n(["<span>⚠️ ","</span>"],["<span>⚠️ ","</span>"])),e.children)}var Ce,Ae,De,Ne,Me,He,xe,Ue,Te,Ge,Re,We,Fe,je,Be,Ee,Oe,Le,Ve=se("tree-list"),Ke={string:!0,number:!0,bigint:!0,boolean:!0,symbol:!0,undefined:!0,function:!0,object:!1};function ze(e,t,r){return void 0===t&&(t={}),void 0===r&&(r=0),"string"==typeof e?E(Ce||(Ce=n(['<span class="',"\">'","'</span>"],['<span class="',"\">'","'</span>"])),Ve("string"),e):"number"==typeof e?E(Ae||(Ae=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Ve("number"),e):"bigint"==typeof e?E(De||(De=n(['<span class="','">',"n</span>"],['<span class="','">',"n</span>"])),Ve("bigint"),e):"boolean"==typeof e?E(Ne||(Ne=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Ve("boolean"),String(e)):"function"==typeof e?E(Me||(Me=n(['<span class="','">function</span>'],['<span class="','">function</span>'])),Ve("function")):"symbol"==typeof e?E(He||(He=n(['<span class="','">',"</span>"],['<span class="','">',"</span>"])),Ve("symbol"),e):void 0===e?E(xe||(xe=n(['<span class="','">undefined</span>'],['<span class="','">undefined</span>'])),Ve("undefined")):null===e?E(Ue||(Ue=n(['<span class="','">null</span>'],['<span class="','">null</span>'])),Ve("null")):Array.isArray(e)?t.compactArrayWithSimpleTypes&&e.every((function(e){return null===e||Ke[typeof e]}))?E(Ge||(Ge=n(["[","\n                ","\n            ","]"],["[","\n                ","\n            ","]"]))," ",e.map((function(e,o){return E(Te||(Te=n(["","",""],["","",""])),o?", ":"",ze(e,t,r+1))}))," "):E(Fe||(Fe=n(["[<ul>\n                ","\n            </ul>]"],["[<ul>\n                ","\n            </ul>]"])),e.map((function(o,a){var s=t.showArrayIndex?E(Re||(Re=n([' <span class="','">',": </span>"],[' <span class="','">',": </span>"])),Ve("index"),a):"";return E(We||(We=n(["<li>","","","</li>"],["<li>","","","</li>"])),s,ze(o,t,r+1),a===e.length-1?"":",")}))):t.compactObject&&r>0?E(Be||(Be=n(["{","\n            ","\n        ","}"],["{","\n            ","\n        ","}"]))," ",Object.keys(e).map((function(o,a,s){return E(je||(je=n(['<span class="','">',": </span>","",""],['<span class="','">',": </span>","",""])),Ve("property"),o,ze(e[o],t,r+1),a===s.length-1?"":", ")}))," "):E(Oe||(Oe=n(["{<ul>\n        ","\n    </ul>}"],["{<ul>\n        ","\n    </ul>}"])),Object.keys(e).map((function(o,a,s){return E(Ee||(Ee=n(['<li><span class="','">',": </span>","","</li>"],['<li><span class="','">',": </span>","","</li>"])),Ve("property"),o,ze(e[o],t,r+1),a===s.length-1?"":",")})))}function $e(e){return E(Le||(Le=n(["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"],["\n        <",' name="','">\n            <div class="','">\n                ',"\n            </div>\n        <//>"])),ye,e.title,Ve(),ze(e.data,e.options))}var qe,Ye,Je,Qe=se("network-information");function Xe(){if(!navigator.connection)return E(qe||(qe=n(['\n            <div class="','">\n                 <',">","<//>\n            </div>"],['\n            <div class="','">\n                 <',">","<//>\n            </div>"])),Qe(),Se,ae("Network Information API is not supported."));var e=navigator.connection,t={downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:e.saveData};"type"in e&&(t.type=e.type),"downlinkMax"in e&&(t.downlinkMax=e.downlinkMax);var r=E(Ye||(Ye=n(["navigator.connection<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>'],["navigator.connection<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>'])),ve);return E(Je||(Je=n(['\n        <div class="','">\n            <',' title="','" data="','"><//>\n        </div>'],['\n        <div class="','">\n            <',' title="','" data="','"><//>\n        </div>'])),Qe(),$e,r,t)}var Ze,en,nn=se("main-menu");function tn(e){return E(en||(en=n(['\n        <div class="','">\n            ',"\n        </div>\n    "],['\n        <div class="','">\n            ',"\n        </div>\n    "])),nn(),e.items.filter((function(e){return!e.hidden})).map((function(e){return E(Ze||(Ze=n(['<a class="','" href="','">',"</a>"],['<a class="','" href="','">',"</a>"])),nn("item",{selected:e.selected}),e.url,e.title)})))}var rn,on=[{header:"Can I use video",menuTitle:{en:"Video & audio",ru:"Видео и аудио"},id:"index",url:"./"},{header:"My Screen",menuTitle:{en:"Screen",ru:"Экран"},id:"screen",url:"./screen.html",hidden:!0},{header:"GPU",menuTitle:{en:"GPU",ru:"GPU"},id:"gpu",url:"./gpu.html"},{header:"My Gamepads",menuTitle:{en:"Gamepad",ru:"Джойстик"},id:"gamepad",url:"./gamepad.html"},{header:"Storage",menuTitle:{en:"Storage",ru:"Хранилище"},id:"storage",url:"./storage.html"},{header:"Network",menuTitle:{en:"Network",ru:"Сеть"},id:"network",url:"./network.html"},{header:"Battery",menuTitle:{en:"Battery",ru:"Батарея"},id:"battery",url:"./battery.html"}];function an(){var t=function(){var e=window.location.pathname.replace(/^\/caniwatchvideo/,"").split(/[?./]/)[1];return e||"index"}(),r=on.map((function(n){return e(e({},n),{title:(r=n.menuTitle,r[ne]),selected:n.id===t});var r}));return E(rn||(rn=n(["<",' items="','"><//>'],["<",' items="','"><//>'])),tn,r)}var sn,un,ln=se("network-page");!function(e,n,o){var a,s,i,u;r.__&&r.__(e,n),s=(a="function"==typeof o)?null:n.__k,i=[],u=[],U(n,e=(!a&&o||n).__k=g(w,null,[e]),s||_,_,n.namespaceURI,!a&&o?[o]:s?null:n.firstChild?t.call(n.childNodes):null,i,!a&&o?o:s?s.__e:n.firstChild,a,u),T(i,e,u)}(E(un||(un=n(["<"," //>"],["<"," //>"])),(function(){return E(sn||(sn=n(['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>\n            <//>\n\n            <',"><//>\n\n            <",' name="','">\n                <',"><//>\n            <//>\n\n            <","><//>\n        </div>"],['\n        <div class="','">\n            <',"><//>\n\n            <",">\n                ","<",' href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation"><//>\n            <//>\n\n            <',"><//>\n\n            <",' name="','">\n                <',"><//>\n            <//>\n\n            <","><//>\n        </div>"])),ln(),an,ce,ae("Can I use Network Information API?"),ve,Xe,ye,ae("Internet Speed"),Pe,de)})),document.querySelector(".page"))}));
