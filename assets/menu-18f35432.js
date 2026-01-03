document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".cart-count"),a=document.getElementById("cart-modal"),d=document.getElementById("cart-overlay"),L=document.getElementById("cart-items"),w=document.getElementById("cart-total"),E=document.getElementById("checkout-button"),h=document.getElementById("continue-button"),S=document.getElementById("wholesale-warning"),b=document.getElementById("wholesale-warning-copy"),k=document.getElementById("wholesale-sales"),x=document.getElementById("cart-close-btn"),f=new URL("/castle-on-saltovka/assets/icons-e1d2494d.svg",self.location),I=localStorage.getItem("cart"),n=I?JSON.parse(I):[];document.querySelectorAll(".btn-categories-basket").forEach(c=>{c.addEventListener("click",s=>{var m,y,g;const t=s.currentTarget.closest(".container-btn-favorites"),e=s.currentTarget.closest(".container");if(!t||!e)return;const o=t.dataset.id,r=((m=e.querySelector(".title-characteristics"))==null?void 0:m.textContent.trim())||"Без назви",v=((y=e.querySelector(".price"))==null?void 0:y.textContent.trim())||"0 грн.",q=parseInt(v.replace(/\D/g,""))||0,p=((g=e.querySelector("#main-image"))==null?void 0:g.src)||"",u=n.find($=>$.id===o);u?u.quantity++:n.push({id:o,name:r,price:q,quantity:1,image:p}),l()})});function C(){localStorage.setItem("cart",JSON.stringify(n))}function B(){const c=n.reduce((s,t)=>s+t.quantity,0);i.forEach(s=>{s.textContent=c||"",s.style.display=c?"flex":"none"})}function l(){n.reduce((t,e)=>t+e.quantity,0),B(),L.innerHTML="",n.forEach(t=>{const e=document.createElement("li");e.className="cart-item",e.innerHTML=`
        <img src="${t.image}" alt="${t.name}" class="cart-item-image" />
        <div class="cart-item-info">
          <div class="container-name-remove">
            <p class="cart-item-name">${t.name}</p>
            <button class="remove-item" data-id="${t.id}">
              <svg class="basket-delete-svg" width="24" height="24">
                <use href="${f}#icon-delete"></use>
              </svg> Видалити
            </button>
          </div>
          <div class="container-quantity-price">
            <div class="cart-item-quantity">
              <button class="qty-btn minus" data-id="${t.id}" ${t.quantity===1?"disabled":""}>
                <svg class="qty-minus" width="16" height="16">
                  <use href="${f}#icon-minus"></use>
                </svg>
              </button>
              <span class="qty-count">${t.quantity}</span>
              <button class="qty-btn plus" data-id="${t.id}">
              <svg class="qty-plus" width="16" height="16">
                <use href="${f}#icon-plus"></use>
              </svg>
              </button>
            </div>
            <p class="cart-item-price">${t.price.toLocaleString()} грн.</p>
          </div>
        </div>
      `,L.appendChild(e)});const c=n.reduce((t,e)=>t+e.quantity*e.price,0);w.innerHTML=`
      <span class="cart-label">Разом:</span>
      <span class="cart-amount">${c.toLocaleString()} грн.</span>
    `;const s=window.matchMedia("(min-width: 1158px)").matches;c>1e5?(E.style.display="none",h.style.display="none",s||S.classList.remove("hidden"),k.classList.remove("hidden"),s&&b.classList.remove("hidden")):(E.style.display="block",h.style.display="block",s||S.classList.add("hidden"),k.classList.add("hidden"),s&&b.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.onclick=()=>{const e=n.find(o=>o.id===t.dataset.id);e&&e.quantity++,l()}}),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.onclick=()=>{const e=n.find(o=>o.id===t.dataset.id);if(e&&e.quantity>1)e.quantity--;else{const o=n.findIndex(r=>r.id===t.dataset.id);o!==-1&&n.splice(o,1)}l()}}),document.querySelectorAll(".remove-item").forEach(t=>{t.onclick=()=>{const e=n.findIndex(o=>o.id===t.dataset.id);e!==-1&&n.splice(e,1),l()}}),C()}document.querySelectorAll(".button-addition").forEach(c=>{c.addEventListener("click",s=>{var u,m,y;const t=s.currentTarget.closest(".swiper-slide");if(!t)return;const e=t.dataset.id||t.querySelector(".model").textContent.trim(),o=((u=t.querySelector(".model"))==null?void 0:u.textContent.trim())||"Без названия",r=((m=t.querySelector(".price-sum"))==null?void 0:m.textContent.trim())||"0 грн.",v=parseInt(r.replace(/\D/g,""))||0,q=((y=t.querySelector("img.foto"))==null?void 0:y.src)||"",p=n.find(g=>g.id===e);p?p.quantity++:n.push({id:e,name:o,price:v,quantity:1,image:q}),l()})}),document.querySelectorAll("#cart-button, .mobal-menu-button.hopping-cart").forEach(c=>{c.addEventListener("click",()=>{a.classList.remove("hidden"),d.classList.remove("hidden"),document.body.classList.add("no-scroll")})}),x.addEventListener("click",()=>{a.classList.add("hidden"),d.classList.add("hidden"),document.body.classList.remove("no-scroll")}),d.addEventListener("click",c=>{c.target===d&&(a.classList.add("hidden"),d.classList.add("hidden"),document.body.classList.remove("no-scroll"))}),h.addEventListener("click",()=>{a.classList.add("hidden"),d.classList.add("hidden"),document.body.classList.remove("no-scroll")}),l()});document.querySelectorAll("[filter-menu-open], [data-menu-open]").forEach(i=>{i.addEventListener("click",()=>{const a=i.hasAttribute("filter-menu-open")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");a&&(a.classList.add("is-open"),document.documentElement.classList.add("no-scroll"))})});document.querySelectorAll("[filter-menu-close], [data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{const a=i.hasAttribute("filter-menu-close")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");a&&(a.classList.remove("is-open"),document.documentElement.classList.remove("no-scroll"))})});
//# sourceMappingURL=menu-18f35432.js.map
