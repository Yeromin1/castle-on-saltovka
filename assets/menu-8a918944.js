(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("cart-count"),c=document.getElementById("cart-modal"),l=document.getElementById("cart-overlay"),u=document.getElementById("cart-items"),n=document.getElementById("cart-total"),s=document.getElementById("checkout-button"),r=document.getElementById("continue-button"),p=document.getElementById("wholesale-warning"),g=document.getElementById("wholesale-warning-copy"),h=document.getElementById("wholesale-sales"),q=document.getElementById("cart-close-btn"),b=new URL("/castle-on-saltovka/assets/icons-dab88771.svg",self.location),L=localStorage.getItem("cart"),o=L?JSON.parse(L):[],v={id:"JA182765",name:"Дверний Замок Golden Soft для офісу",price:1e3,quantity:1,image:new URL("/castle-on-saltovka/assets/2Rectangle1x-a96ffe2e.png",self.location).href};function I(){localStorage.setItem("cart",JSON.stringify(o))}function S(i){a&&(a.textContent=i>0?i:"",a.style.display=i>0?"block":"none")}const E=document.querySelector(".btn-categories-basket");E&&E.addEventListener("click",()=>{const i=o.find(f=>f.id===v.id);i?i.quantity++:o.push({...v}),m()}),document.getElementById("cart-button").addEventListener("click",()=>{c.classList.remove("hidden"),l.classList.remove("hidden")}),q.addEventListener("click",()=>{c.classList.add("hidden"),l.classList.add("hidden")}),l.addEventListener("click",i=>{i.target===l&&(c.classList.add("hidden"),l.classList.add("hidden"))});function m(){const i=o.reduce((e,t)=>e+t.quantity,0);S(i),u.innerHTML="",o.forEach(e=>{const t=document.createElement("li");t.className="cart-item",t.innerHTML=`
      <img src="${e.image}" alt="${e.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="container-name-remove">
          <p class="cart-item-name">${e.name}</p>
          <button class="remove-item" data-id="${e.id}">
            <svg class="basket-delete-svg" width="24" height="24">
              <use href="${b}#icon-delete"></use>
            </svg> Видалити
          </button>
        </div>
        <div class="container-quantity-price">
          <div class="cart-item-quantity">
            <button class="qty-btn minus" data-id="${e.id}" ${e.quantity===1?"disabled":""}>–</button>
            <span class="qty-count">${e.quantity}</span>
            <button class="qty-btn plus" data-id="${e.id}">+</button>
          </div>
          <p class="cart-item-price">${e.price.toLocaleString()} грн.</p>
        </div>
      </div>
    `,u.appendChild(t)});const f=o.reduce((e,t)=>e+t.quantity*t.price,0);n.innerHTML=`
    <span class="cart-label">Разом:</span>
    <span class="cart-amount">${f.toLocaleString()} грн.</span>
  `;const y=window.matchMedia("(min-width: 1158px)").matches;f>1e3?(s.style.display="none",r.style.display="none",y||p.classList.remove("hidden"),h.classList.remove("hidden"),y&&g.classList.remove("hidden")):(s.style.display="block",r.style.display="block",y||p.classList.add("hidden"),h.classList.add("hidden"),y&&g.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(e=>{e.onclick=()=>{const t=o.find(d=>d.id===e.dataset.id);t&&t.quantity++,m()}}),document.querySelectorAll(".qty-btn.minus").forEach(e=>{e.onclick=()=>{const t=o.find(d=>d.id===e.dataset.id);if(t&&t.quantity>1)t.quantity--;else{const d=o.findIndex(B=>B.id===e.dataset.id);d!==-1&&o.splice(d,1)}m()}}),document.querySelectorAll(".remove-item").forEach(e=>{e.onclick=()=>{const t=o.findIndex(d=>d.id===e.dataset.id);t!==-1&&o.splice(t,1),m()}}),I()}m()});document.querySelectorAll("[filter-menu-open], [data-menu-open]").forEach(a=>{a.addEventListener("click",()=>{const c=a.hasAttribute("filter-menu-open")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");c&&(c.classList.add("is-open"),document.documentElement.classList.add("no-scroll"))})});document.querySelectorAll("[filter-menu-close], [data-menu-close]").forEach(a=>{a.addEventListener("click",()=>{const c=a.hasAttribute("filter-menu-close")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");c&&(c.classList.remove("is-open"),document.documentElement.classList.remove("no-scroll"))})});
//# sourceMappingURL=menu-8a918944.js.map
