(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),o=a(3),l=a(4),s=a(15),u=a(13),m=a(16);var h=function(){return c.a.createElement("div",{className:"spinner"})},p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={article:null},a.fetchArticle(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"fetchArticle",value:function(){var e=this;this.props.apodApiClient.fetchArticle().then(function(t){e.setArticle(t)})}},{key:"setArticle",value:function(e){this.setState({article:e})}},{key:"render",value:function(){var e=this.state.article;return c.a.createElement("div",{id:"APODClient"},e?c.a.createElement(b,{article:e}):c.a.createElement(h,null))}}]),t}(c.a.Component),d=a(2);a(23);var f=function(e){var t=e.className,a=Object(d.a)(e,["className"]);return c.a.createElement("h1",Object.assign({className:t?"".concat("article-title"," ").concat(t):"article-title"},a))};a(25);var v=function(e){var t=e.className,a=e.href,n=e.children,r=Object(d.a)(e,["className","href","children"]);return c.a.createElement("div",Object.assign({className:t?"".concat("image-container"," ").concat(t):"image-container"},r),c.a.createElement("a",{href:a},n))};a(27);var E=function(e){var t=e.className,a=Object(d.a)(e,["className"]);return c.a.createElement("p",Object.assign({className:t?"".concat("article-body"," ").concat(t):"article-body"},a))};a(29);var b=function(e){var t=e.article,a=t.title,n=t.explanation,r=t.url,i=t.hdurl;return c.a.createElement("div",{className:"article"},c.a.createElement(f,null,a),c.a.createElement(v,{href:i},c.a.createElement("img",{src:r})),c.a.createElement(E,null,n))},O=a(14),A=a.n(O),N=function(){function e(t){var a=t.baseURL,n=t.apiKey;Object(o.a)(this,e),this.axios=void 0,this.axios=A.a.create({baseURL:a,params:{api_key:n}})}return Object(l.a)(e,[{key:"fetchArticle",value:function(){return this.axios.get(this.endpoint).then(function(e){return e.data})}},{key:"endpoint",get:function(){return"/planetary/apod"}}]),e}(),j={apodApiClient:{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).APOD_API_KEY||"DEMO_KEY",baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).APOD_BASE_URL||"https://api.nasa.gov"}};var g=function(){var e=new N(j.apodApiClient);return c.a.createElement("div",{className:"App"},c.a.createElement(p,{apodApiClient:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.bdb5e6f9.chunk.js.map