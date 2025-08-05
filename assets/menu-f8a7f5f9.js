(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))f(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(n){if(n.ep)return;n.ep=!0;const c=l(n);fetch(n.href,c)}})();document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("cart-count"),s=document.getElementById("cart-modal"),l=document.getElementById("cart-overlay"),f=document.getElementById("cart-items"),n=document.getElementById("cart-total"),c=document.getElementById("checkout-button"),u=document.getElementById("continue-button"),b=document.getElementById("wholesale-warning"),I=document.getElementById("wholesale-warning-copy"),w=document.getElementById("wholesale-sales"),B=document.getElementById("cart-close-btn"),E=new URL("/castle-on-saltovka/assets/icons-165bb9f1.svg",self.location),C=localStorage.getItem("cart"),i=C?JSON.parse(C):[];document.querySelectorAll(".btn-categories-basket").forEach(r=>{r.addEventListener("click",m=>{var h,v,q;const o=m.currentTarget.closest(".container-btn-favorites"),e=m.currentTarget.closest(".container");if(!o||!e)return;const t=o.dataset.id,a=((h=e.querySelector(".title-characteristics"))==null?void 0:h.textContent.trim())||"Без назви",p=((v=e.querySelector(".price"))==null?void 0:v.textContent.trim())||"0 грн.",S=parseInt(p.replace(/\D/g,""))||0,L=((q=e.querySelector("#main-image"))==null?void 0:q.src)||"",g=i.find($=>$.id===t);g?g.quantity++:i.push({id:t,name:a,price:S,quantity:1,image:L}),y()})});function k(){localStorage.setItem("cart",JSON.stringify(i))}function x(r){d&&(d.textContent=r>0?r:"",d.style.display=r>0?"block":"none")}function y(){const r=i.reduce((e,t)=>e+t.quantity,0);x(r),f.innerHTML="",i.forEach(e=>{const t=document.createElement("li");t.className="cart-item",t.innerHTML=`
        <img src="${e.image}" alt="${e.name}" class="cart-item-image" />
        <div class="cart-item-info">
          <div class="container-name-remove">
            <p class="cart-item-name">${e.name}</p>
            <button class="remove-item" data-id="${e.id}">
              <svg class="basket-delete-svg" width="24" height="24">
                <use href="${E}#icon-delete"></use>
              </svg> Видалити
            </button>
          </div>
          <div class="container-quantity-price">
            <div class="cart-item-quantity">
              <button class="qty-btn minus" data-id="${e.id}" ${e.quantity===1?"disabled":""}>
                <svg class="qty-minus" width="16" height="16">
                  <use href="${E}#icon-minus"></use>
                </svg>
              </button>
              <span class="qty-count">${e.quantity}</span>
              <button class="qty-btn plus" data-id="${e.id}">
              <svg class="qty-plus" width="16" height="16">
                <use href="${E}#icon-plus"></use>
              </svg>
              </button>
            </div>
            <p class="cart-item-price">${e.price.toLocaleString()} грн.</p>
          </div>
        </div>
      `,f.appendChild(t)});const m=i.reduce((e,t)=>e+t.quantity*t.price,0);n.innerHTML=`
      <span class="cart-label">Разом:</span>
      <span class="cart-amount">${m.toLocaleString()} грн.</span>
    `;const o=window.matchMedia("(min-width: 1158px)").matches;m>1e5?(c.style.display="none",u.style.display="none",o||b.classList.remove("hidden"),w.classList.remove("hidden"),o&&I.classList.remove("hidden")):(c.style.display="block",u.style.display="block",o||b.classList.add("hidden"),w.classList.add("hidden"),o&&I.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(e=>{e.onclick=()=>{const t=i.find(a=>a.id===e.dataset.id);t&&t.quantity++,y()}}),document.querySelectorAll(".qty-btn.minus").forEach(e=>{e.onclick=()=>{const t=i.find(a=>a.id===e.dataset.id);if(t&&t.quantity>1)t.quantity--;else{const a=i.findIndex(p=>p.id===e.dataset.id);a!==-1&&i.splice(a,1)}y()}}),document.querySelectorAll(".remove-item").forEach(e=>{e.onclick=()=>{const t=i.findIndex(a=>a.id===e.dataset.id);t!==-1&&i.splice(t,1),y()}}),k()}document.querySelectorAll(".button-addition").forEach(r=>{r.addEventListener("click",m=>{var g,h,v;const o=m.currentTarget.closest(".swiper-slide");if(!o)return;const e=o.dataset.id||o.querySelector(".model").textContent.trim(),t=((g=o.querySelector(".model"))==null?void 0:g.textContent.trim())||"Без названия",a=((h=o.querySelector(".price-sum"))==null?void 0:h.textContent.trim())||"0 грн.",p=parseInt(a.replace(/\D/g,""))||0,S=((v=o.querySelector("img.foto"))==null?void 0:v.src)||"",L=i.find(q=>q.id===e);L?L.quantity++:i.push({id:e,name:t,price:p,quantity:1,image:S}),y()})}),document.getElementById("cart-button").addEventListener("click",()=>{s.classList.remove("hidden"),l.classList.remove("hidden")}),B.addEventListener("click",()=>{s.classList.add("hidden"),l.classList.add("hidden")}),l.addEventListener("click",r=>{r.target===l&&(s.classList.add("hidden"),l.classList.add("hidden"))}),u.addEventListener("click",()=>{s.classList.add("hidden"),l.classList.add("hidden")}),y()});document.querySelectorAll("[filter-menu-open], [data-menu-open]").forEach(d=>{d.addEventListener("click",()=>{const s=d.hasAttribute("filter-menu-open")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");s&&(s.classList.add("is-open"),document.documentElement.classList.add("no-scroll"))})});document.querySelectorAll("[filter-menu-close], [data-menu-close]").forEach(d=>{d.addEventListener("click",()=>{const s=d.hasAttribute("filter-menu-close")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");s&&(s.classList.remove("is-open"),document.documentElement.classList.remove("no-scroll"))})});
//# sourceMappingURL=menu-f8a7f5f9.js.map
