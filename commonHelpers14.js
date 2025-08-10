import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("order-cart-list"),i=document.getElementById("order-cart-total"),d=localStorage.getItem("cart"),c=d?JSON.parse(d):[];function l(){localStorage.setItem("cart",JSON.stringify(c))}function o(){r.innerHTML="";let a=0;c.forEach(t=>{const e=document.createElement("li");e.className="order-cart-item",e.innerHTML=`
          <img src="${t.image}" alt="${t.name}" class="order-cart-img" />
          <div class="order-cart-info">
            <div class="container-cart-name-price">
              <p class="order-cart-name">${t.name}</p>
              <div class="order-cart-controls">
                <p class="order-cart-price">${t.price.toLocaleString()} грн.</p>
                <button class="qty-btn minus" data-id="${t.id}" ${t.quantity===1?"disabled":""}>−</button>
                <span class="qty-count">${t.quantity}</span>
                <button class="qty-btn plus" data-id="${t.id}">+</button>
              </div>
            </div>
            <button class="remove-item" data-id="${t.id}">Видалити</button>
          </div>
        `,r.appendChild(e),a+=t.price*t.quantity}),i.innerHTML=`<div class="container-order-cart-total"><span class="order-cart-total">Загальна сума:</span> <span class="order-cart-total-price">${a.toLocaleString()} грн.</span></div>`,l(),u()}function u(){document.querySelectorAll(".qty-btn.plus").forEach(a=>{a.onclick=()=>{const t=a.dataset.id,e=c.find(n=>n.id===t);e&&e.quantity++,o()}}),document.querySelectorAll(".qty-btn.minus").forEach(a=>{a.onclick=()=>{const t=a.dataset.id,e=c.find(n=>n.id===t);e&&e.quantity>1&&e.quantity--,o()}}),document.querySelectorAll(".remove-item").forEach(a=>{a.onclick=()=>{const t=a.dataset.id,e=c.findIndex(n=>n.id===t);e!==-1&&(c.splice(e,1),o())}})}o(),document.getElementById("edit-cart-btn").addEventListener("click",()=>{var n;const a=document.querySelectorAll(".order-cart-item"),t=(n=a[0])==null?void 0:n.classList.contains("edit-mode");a.forEach(s=>{t?s.classList.remove("edit-mode"):s.classList.add("edit-mode")});const e=document.getElementById("edit-cart-btn");e.textContent=t?"Редагувати":""})});
//# sourceMappingURL=commonHelpers14.js.map
