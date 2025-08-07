import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("order-cart-list"),s=document.getElementById("order-cart-total"),d=localStorage.getItem("cart"),c=d?JSON.parse(d):[];function i(){localStorage.setItem("cart",JSON.stringify(c))}function r(){e.innerHTML="";let n=0;c.forEach(t=>{const a=document.createElement("li");a.className="order-cart-item",a.innerHTML=`
          <img src="${t.image}" alt="${t.name}" class="order-cart-img" />
          <div class="order-cart-info">
            <p class="order-cart-name">${t.name}</p>
            <div class="order-cart-controls">
              <button class="qty-btn minus" data-id="${t.id}" ${t.quantity===1?"disabled":""}>−</button>
              <span class="qty-count">${t.quantity}</span>
              <button class="qty-btn plus" data-id="${t.id}">+</button>
              <button class="remove-item" data-id="${t.id}">Видалити</button>
            </div>
            <p class="order-cart-price">${t.price.toLocaleString()} грн.</p>
          </div>
        `,e.appendChild(a),n+=t.price*t.quantity}),s.innerHTML=`<div class="container-order-cart-total"><span class="order-cart-total">Загальна сума:</span> <span class="order-cart-total-price">${n.toLocaleString()} грн.</span></div>`,i(),l()}function l(){document.querySelectorAll(".qty-btn.plus").forEach(n=>{n.onclick=()=>{const t=n.dataset.id,a=c.find(o=>o.id===t);a&&a.quantity++,r()}}),document.querySelectorAll(".qty-btn.minus").forEach(n=>{n.onclick=()=>{const t=n.dataset.id,a=c.find(o=>o.id===t);a&&a.quantity>1&&a.quantity--,r()}}),document.querySelectorAll(".remove-item").forEach(n=>{n.onclick=()=>{const t=n.dataset.id,a=c.findIndex(o=>o.id===t);a!==-1&&(c.splice(a,1),r())}})}r()});
//# sourceMappingURL=commonHelpers14.js.map
