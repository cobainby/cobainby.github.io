(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{191:function(t,e,s){"use strict";var n=s(68);s.n(n).a},21:function(t,e,s){"use strict";s.d(e,"d",function(){return n}),s.d(e,"f",function(){return o}),s.d(e,"g",function(){return l}),s.d(e,"h",function(){return u}),s.d(e,"b",function(){return h}),s.d(e,"e",function(){return f}),s.d(e,"j",function(){return b}),s.d(e,"k",function(){return p}),s.d(e,"c",function(){return d}),s.d(e,"i",function(){return g}),s.d(e,"a",function(){return v});const n=/#.*$/,i=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(n,"").replace(i,"")}function o(t){return r.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(o(t))return t;const e=t.match(n),s=e?e[0]:"",i=c(t);return a.test(i)?t:i+".html"+s}function f(t,e){const s=t.hash,i=function(t){const e=t.match(n);if(e)return e[0]}(e);return(!i||s===i)&&c(t.path)===c(e)}function b(t,e,s){s&&(e=function(t,e,s){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const i=e.split("/");s&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));const n=c(e);for(let e=0;e<t.length;e++)if(c(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function p(t,e,s,n){const{pages:i,themeConfig:a}=s,r=n&&a.locales&&a.locales[n]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=d(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const c=r.sidebar||a.sidebar;if(c){const{base:t,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(n))return{base:n,config:e[n]};var s;return{}}(e,c);return s?s.map(e=>(function t(e,s,n,i){if("string"==typeof e)return b(s,e,n);if(Array.isArray(e))return Object.assign(b(s,e[0],n),{title:e[1]});{i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const a=e.children||[];return{type:"group",title:e.title,children:a.map(e=>t(e,s,n,!0)),collapsable:!1!==e.collapsable}}})(e,i,t)):[]}return[]}function d(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}const v=function(t,e,s){var n,i,a,r,c;function o(){var l=Date.now()-r;l<e&&l>=0?n=setTimeout(o,e-l):(n=null,s||(c=t.apply(a,i),a=i=null))}null==e&&(e=100);var l=function(){a=this,i=arguments,r=Date.now();var l=s&&!n;return n||(n=setTimeout(o,e)),l&&(c=t.apply(a,i),a=i=null),c};return l.clear=function(){n&&(clearTimeout(n),n=null)},l.flush=function(){n&&(c=t.apply(a,i),a=i=null,clearTimeout(n),n=null)},l}},213:function(t,e,s){"use strict";s.r(e);var n=s(21),i={props:{options:{type:Object,required:!1,default:()=>({useUrlFragment:!0,defaultTabHash:null})}},data:()=>({tabs:[],activeTabHash:"",activeTabIndex:0,lastActiveTabHash:"",swiperX:0,swiperY:0,curIndex:0,gapStyle:{visiblity:!1,left:0}}),watch:{tabs(t){this.$nextTick(()=>{t[0]&&t[0].hash&&this.selectTab(t[0].hash),this.curIndex=0})}},created(){this.tabs=this.$children},mounted(){null!==this.options.defaultTabHash&&this.findTab("#"+this.options.defaultTabHash)&&this.selectTab("#"+this.options.defaultTabHash)},methods:{debounce:n.a,findTab(t){return this.tabs.find((e,s)=>{const n=e.hash===t;return n&&(this.curIndex=s),n})},selectTab(t,e){e&&!this.options.useUrlFragment&&e.preventDefault();const s=this.findTab(t);s&&(s.isDisabled?e.preventDefault():this.lastActiveTabHash!==s.hash?(this.tabs.forEach(t=>{t.isActive=t.hash===s.hash}),setTimeout(()=>{this.gapStyle={visibility:"visible",...this.getElementOffsetLeft()}},0),this.$emit("changed",{tab:s}),this.activeTabHash=s.hash,this.activeTabIndex=this.getTabIndex(t),this.lastActiveTabHash=this.activeTabHash=s.hash):this.$emit("clicked",{tab:s}))},setTabVisible(t,e){const s=this.findTab(t);s&&(s.isVisible=e,s.isActive&&(s.isActive=e,this.tabs.every((t,e,s)=>!t.isVisible||(t.isActive=!0,!1))))},getTabIndex(t){const e=this.findTab(t);return this.tabs.indexOf(e)},getTabHash(t){const e=this.tabs.find(e=>this.tabs.indexOf(e)===t);if(e)return e.hash},getActiveTab(){return this.findTab(this.activeTabHash)},getActiveTabIndex(){return this.getTabIndex(this.activeTabHash)},getElementOffsetLeft(){const t=this.$refs.tabHeader.children[this.activeTabIndex];return{left:t.offsetLeft+"px",width:t.offsetWidth+"px"}},swiperStart(t){const e=t.changedTouches;e&&e[0]&&(this.swiperX=e[0].pageX,this.swiperY=e[0].pageY,t.stopPropagation())},changeTab(t){const e=t?--this.curIndex:++this.curIndex;if(e<0)return this.curIndex=0;if(e>this.tabs.length-1)return this.curIndex=this.tabs.length-1;const s=this.getTabHash(e);this.selectTab(s)},swiperEnd(t){const e=t.changedTouches;e&&e[0]&&Math.abs(this.swiperY-e[0].pageY)<50&&Math.abs(this.swiperX-e[0].pageX)>100&&(this.changeTab(this.swiperX>e[0].pageX),t.stopPropagation())}}},a=(s(191),s(1)),r=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs-component"},[s("ul",{ref:"tabHeader",staticClass:"tabs-component-tabs",attrs:{role:"tablist"}},[t._l(t.tabs,function(e,n){return s("li",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"tab.isVisible"}],key:n,staticClass:"tabs-component-tab",class:{"is-active":e.isActive,"is-disabled":e.isDisabled},attrs:{role:"presentation"}},[t.options.useUrlFragment?s("a",{staticClass:"tabs-component-tab-a",attrs:{"aria-controls":e.hash,"aria-selected":e.isActive,href:e.hash,role:"tab"},domProps:{innerHTML:t._s(e.header)},on:{click:function(s){return t.selectTab(e.hash,s)}}}):s("span",{staticClass:"tabs-component-tab-a",attrs:{"aria-selected":e.isActive,role:"tab"},domProps:{innerHTML:t._s(e.header)},on:{click:function(s){return t.selectTab(e.hash,s)}}})])}),t._v(" "),s("li",{staticClass:"tabs-component-tab-gap",style:t.gapStyle})],2),t._v(" "),s("div",{staticClass:"tabs-component-panels",on:{touchstart:function(e){return t.swiperStart(e)},touchend:function(e){return t.swiperEnd(e)}}},[t._t("default")],2)])},[],!1,null,null,null);e.default=r.exports},68:function(t,e,s){}}]);