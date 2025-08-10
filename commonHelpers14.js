import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("order-cart-list"),u=document.getElementById("order-cart-total"),i=document.getElementById("edit-cart-btn"),r=new URL("/castle-on-saltovka/assets/icons-e1d2494d.svg",self.location),l=localStorage.getItem("cart"),a=l?JSON.parse(l):[];let o=!1;i.addEventListener("click",()=>{o=!o;const e=i.querySelector(".edit-cart-text"),t=i.querySelector("svg");e&&t&&(o?(e.style.display="none",t.style.display="none"):(e.style.display="",t.style.display="")),n()});function p(){localStorage.setItem("cart",JSON.stringify(a))}function n(){d.innerHTML="";let e=0;a.forEach(t=>{const s=document.createElement("li");s.className="order-cart-item",o&&s.classList.add("edit-mode"),s.innerHTML=`
        <img src="${t.image}" alt="${t.name}" class="order-cart-img" />
          <div class="order-cart-info">
            <div class="container-cart-name-price">
              <p class="order-cart-name">${t.name}</p>
              <div class="order-cart-controls">
                <p class="order-cart-price">${t.price.toLocaleString()} грн.</p>
                <button class="qty-btn minus" data-id="${t.id}" ${t.quantity===1?"disabled":""}>
                  <svg class="qty-minus" width="16" height="16">
                    <use href="${r}#icon-minus"></use>
                  </svg>
                </button>
                <span class="qty-count">${t.quantity}</span>
                <button class="qty-btn plus" data-id="${t.id}">
                  <svg class="qty-plus" width="16" height="16">
                    <use href="${r}#icon-plus"></use>
                  </svg>
                </button>
            </div>
          </div>
          <button class="remove-item" data-id="${t.id}">Видалити</button>
        </div>
      `,d.appendChild(s),e+=t.price*t.quantity}),u.innerHTML=`
      <div class="container-order-cart-total">
        <span class="order-cart-total">Загальна сума:</span>
        <span class="order-cart-total-price">${e.toLocaleString()} грн.</span>
      </div>
    `,p(),y()}function y(){document.querySelectorAll(".qty-btn.plus").forEach(e=>{e.onclick=()=>{const t=e.dataset.id,s=a.find(c=>c.id===t);s&&s.quantity++,n()}}),document.querySelectorAll(".qty-btn.minus").forEach(e=>{e.onclick=()=>{const t=e.dataset.id,s=a.find(c=>c.id===t);s&&s.quantity>1&&s.quantity--,n()}}),document.querySelectorAll(".remove-item").forEach(e=>{e.onclick=()=>{const t=e.dataset.id,s=a.findIndex(c=>c.id===t);s!==-1&&(a.splice(s,1),n())}})}n()});
//# sourceMappingURL=commonHelpers14.js.map
