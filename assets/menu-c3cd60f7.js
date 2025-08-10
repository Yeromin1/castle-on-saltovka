document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("cart-count"),a=document.getElementById("cart-modal"),l=document.getElementById("cart-overlay"),q=document.getElementById("cart-items"),C=document.getElementById("cart-total"),E=document.getElementById("checkout-button"),f=document.getElementById("continue-button"),S=document.getElementById("wholesale-warning"),b=document.getElementById("wholesale-warning-copy"),I=document.getElementById("wholesale-sales"),w=document.getElementById("cart-close-btn"),v=new URL("/castle-on-saltovka/assets/icons-e1d2494d.svg",self.location),k=localStorage.getItem("cart"),n=k?JSON.parse(k):[];document.querySelectorAll(".btn-categories-basket").forEach(o=>{o.addEventListener("click",d=>{var y,g,h;const s=d.currentTarget.closest(".container-btn-favorites"),t=d.currentTarget.closest(".container");if(!s||!t)return;const e=s.dataset.id,c=((y=t.querySelector(".title-characteristics"))==null?void 0:y.textContent.trim())||"Без назви",u=((g=t.querySelector(".price"))==null?void 0:g.textContent.trim())||"0 грн.",L=parseInt(u.replace(/\D/g,""))||0,p=((h=t.querySelector("#main-image"))==null?void 0:h.src)||"",m=n.find($=>$.id===e);m?m.quantity++:n.push({id:e,name:c,price:L,quantity:1,image:p}),r()})});function B(){localStorage.setItem("cart",JSON.stringify(n))}function x(o){i&&(i.textContent=o>0?o:"",i.style.display=o>0?"block":"none")}function r(){const o=n.reduce((t,e)=>t+e.quantity,0);x(o),q.innerHTML="",n.forEach(t=>{const e=document.createElement("li");e.className="cart-item",e.innerHTML=`
        <img src="${t.image}" alt="${t.name}" class="cart-item-image" />
        <div class="cart-item-info">
          <div class="container-name-remove">
            <p class="cart-item-name">${t.name}</p>
            <button class="remove-item" data-id="${t.id}">
              <svg class="basket-delete-svg" width="24" height="24">
                <use href="${v}#icon-delete"></use>
              </svg> Видалити
            </button>
          </div>
          <div class="container-quantity-price">
            <div class="cart-item-quantity">
              <button class="qty-btn minus" data-id="${t.id}" ${t.quantity===1?"disabled":""}>
                <svg class="qty-minus" width="16" height="16">
                  <use href="${v}#icon-minus"></use>
                </svg>
              </button>
              <span class="qty-count">${t.quantity}</span>
              <button class="qty-btn plus" data-id="${t.id}">
              <svg class="qty-plus" width="16" height="16">
                <use href="${v}#icon-plus"></use>
              </svg>
              </button>
            </div>
            <p class="cart-item-price">${t.price.toLocaleString()} грн.</p>
          </div>
        </div>
      `,q.appendChild(e)});const d=n.reduce((t,e)=>t+e.quantity*e.price,0);C.innerHTML=`
      <span class="cart-label">Разом:</span>
      <span class="cart-amount">${d.toLocaleString()} грн.</span>
    `;const s=window.matchMedia("(min-width: 1158px)").matches;d>1e5?(E.style.display="none",f.style.display="none",s||S.classList.remove("hidden"),I.classList.remove("hidden"),s&&b.classList.remove("hidden")):(E.style.display="block",f.style.display="block",s||S.classList.add("hidden"),I.classList.add("hidden"),s&&b.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.onclick=()=>{const e=n.find(c=>c.id===t.dataset.id);e&&e.quantity++,r()}}),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.onclick=()=>{const e=n.find(c=>c.id===t.dataset.id);if(e&&e.quantity>1)e.quantity--;else{const c=n.findIndex(u=>u.id===t.dataset.id);c!==-1&&n.splice(c,1)}r()}}),document.querySelectorAll(".remove-item").forEach(t=>{t.onclick=()=>{const e=n.findIndex(c=>c.id===t.dataset.id);e!==-1&&n.splice(e,1),r()}}),B()}document.querySelectorAll(".button-addition").forEach(o=>{o.addEventListener("click",d=>{var m,y,g;const s=d.currentTarget.closest(".swiper-slide");if(!s)return;const t=s.dataset.id||s.querySelector(".model").textContent.trim(),e=((m=s.querySelector(".model"))==null?void 0:m.textContent.trim())||"Без названия",c=((y=s.querySelector(".price-sum"))==null?void 0:y.textContent.trim())||"0 грн.",u=parseInt(c.replace(/\D/g,""))||0,L=((g=s.querySelector("img.foto"))==null?void 0:g.src)||"",p=n.find(h=>h.id===t);p?p.quantity++:n.push({id:t,name:e,price:u,quantity:1,image:L}),r()})}),document.getElementById("cart-button").addEventListener("click",()=>{a.classList.remove("hidden"),l.classList.remove("hidden"),document.body.classList.add("no-scroll")}),w.addEventListener("click",()=>{a.classList.add("hidden"),l.classList.add("hidden"),document.body.classList.remove("no-scroll")}),l.addEventListener("click",o=>{o.target===l&&(a.classList.add("hidden"),l.classList.add("hidden"),document.body.classList.remove("no-scroll"))}),f.addEventListener("click",()=>{a.classList.add("hidden"),l.classList.add("hidden"),document.body.classList.remove("no-scroll")}),r()});document.querySelectorAll("[filter-menu-open], [data-menu-open]").forEach(i=>{i.addEventListener("click",()=>{const a=i.hasAttribute("filter-menu-open")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");a&&(a.classList.add("is-open"),document.documentElement.classList.add("no-scroll"))})});document.querySelectorAll("[filter-menu-close], [data-menu-close]").forEach(i=>{i.addEventListener("click",()=>{const a=i.hasAttribute("filter-menu-close")?document.querySelector("[filter-menu]"):document.querySelector("[data-menu]");a&&(a.classList.remove("is-open"),document.documentElement.classList.remove("no-scroll"))})});
//# sourceMappingURL=menu-c3cd60f7.js.map
