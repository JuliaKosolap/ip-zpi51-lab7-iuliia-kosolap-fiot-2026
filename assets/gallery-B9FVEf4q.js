import{i as e,r as t,t as n}from"./chunk-aKtaBQYM.js";/* empty css              */import"./modulepreload-polyfill-Dezn_h7o.js";var r=e(n(((e,n)=>{(function(t){typeof e==`object`&&n!==void 0?n.exports=t():typeof define==`function`&&define.amd?define([],t):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).basicLightbox=t()})((function(){return function e(n,r,i){function a(s,c){if(!r[s]){if(!n[s]){var l=typeof t==`function`&&t;if(!c&&l)return l(s,!0);if(o)return o(s,!0);var u=Error(`Cannot find module '`+s+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=r[s]={exports:{}};n[s][0].call(d.exports,(function(e){return a(n[s][1][e]||e)}),d,d.exports,e,n,r,i)}return r[s].exports}for(var o=typeof t==`function`&&t,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=document.createElement(`div`);return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return n.length===1&&n[0].tagName===t},a=function(e){return(e||=document.querySelector(`.basicLightbox`))!=null&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n=function(e,t){var n=r(`
		<div class="basicLightbox ${t.className}">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`),a=n.querySelector(`.basicLightbox__placeholder`);e.forEach((function(e){return a.appendChild(e)}));var o=i(a,`IMG`),s=i(a,`VIDEO`),c=i(a,`IFRAME`);return!0===o&&n.classList.add(`basicLightbox--img`),!0===s&&n.classList.add(`basicLightbox--video`),!0===c&&n.classList.add(`basicLightbox--iframe`),n}(e=function(e){var t=typeof e==`string`,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error(`Content must be a DOM element/node or string`);return!0===t?Array.from(r(e,!0)):e.tagName===`TEMPLATE`?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).closable??(e.closable=!0),e.className??=``,e.onShow??=function(){},e.onClose??=function(){},typeof e.closable!=`boolean`)throw Error("Property `closable` must be a boolean");if(typeof e.className!=`string`)throw Error("Property `className` must be a string");if(typeof e.onShow!=`function`)throw Error("Property `onShow` must be a function");if(typeof e.onClose!=`function`)throw Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(s)&&function(e,t){return e.classList.remove(`basicLightbox--visible`),setTimeout((function(){return!1===a(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if(typeof e==`function`)return e(s)}))};!0===t.closable&&n.addEventListener(`click`,(function(e){e.target===n&&o()}));var s={element:function(){return n},visible:function(){return a(n)},show:function(e){return!1!==t.onShow(s)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add(`basicLightbox--visible`),t()}))}),10),!0}(n,(function(){if(typeof e==`function`)return e(s)}))},close:o};return s}},{}]},{},[1])(1)}))}))(),1);document.querySelector(`#app`).innerHTML=`
<div class="page">

<a
  href="/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/"
  class="back-btn"
>
  ← На головну
</a>

  <h1>Галерея зображень</h1>

  <ul class="gallery">

    <li>
      <a href="https://picsum.photos/id/1015/1200/800">
        <img
          class="gallery-image"
          src="https://picsum.photos/id/1015/400/300"
          alt="Nature"
        />
      </a>
    </li>

    <li>
      <a href="https://picsum.photos/id/1016/1200/800">
        <img
          class="gallery-image"
          src="https://picsum.photos/id/1016/400/300"
          alt="Road"
        />
      </a>
    </li>

    <li>
      <a href="https://picsum.photos/id/1018/1200/800">
        <img
          class="gallery-image"
          src="https://picsum.photos/id/1018/400/300"
          alt="Sea"
        />
      </a>
    </li>

  </ul>

</div>
`,document.querySelectorAll(`.gallery-image`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),r.create(`
        <img
          src="${e.parentElement.href}"
          style="
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
          "
        />
      `).show()})});