import"./assets/menu-f265ad14.js";import{S as N,A as F}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-c4848f9b.js";const J=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const n=document.querySelector("a.main-lightbox"),s=document.getElementById("main-picture"),t=s.querySelector("img"),e=s.querySelector("source"),c=document.querySelectorAll("picture.thumbnail");let l=null;function i(){return window.innerWidth<=767}function w(){return J.map(a=>i()?a.mobile["2x"]:a.desktop["2x"])}function v(){const a=w();c.forEach((o,r)=>{o.dataset.full=a[r]})}function h(a=0){let o=document.querySelector(".lightbox-gallery");o?o.innerHTML="":(o=document.createElement("div"),o.classList.add("lightbox-gallery"),o.style.display="none",document.body.appendChild(o));const r=Array.from(c);return r.slice(a).concat(r.slice(0,a)).forEach(f=>{var B;const D=f.dataset.full,T=((B=f.querySelector("img"))==null?void 0:B.alt)||"",b=document.createElement("a");b.href=D,b.setAttribute("data-gallery","gallery"),b.setAttribute("data-title",T),o.appendChild(b)}),o}function R(a=".lightbox-gallery a"){return l&&l.destroy(),l=new N(a,{captionsData:"title",captionDelay:250}),l.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),l.on("close.simplelightbox",()=>{document.body.style.overflow=""}),l}function k(a){v();const o=c[a];if(!o)return;const r=o.querySelector("source"),m=o.querySelector("img");e&&r?(e.srcset=r.srcset,e.media=r.media):e&&(e.removeAttribute("srcset"),e.removeAttribute("media")),t.src=m.src,t.alt=m.alt,n.href=o.dataset.full,c.forEach(f=>f.classList.remove("active")),o.classList.add("active")}c.forEach((a,o)=>{a.addEventListener("click",r=>{if(r.preventDefault(),v(),i()){const m=h(o);R(".lightbox-gallery a"),setTimeout(()=>{const f=m.querySelectorAll("a");f[0]&&f[0].click()},50)}else k(o)})}),n.addEventListener("click",a=>{if(i()){a.preventDefault();return}a.preventDefault();const o=Array.from(c).findIndex(m=>m.classList.contains("active"));v();const r=h(o>=0?o:0);R(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}),k(0),window.addEventListener("resize",()=>{const a=Array.from(c).findIndex(o=>o.classList.contains("active"));k(a>=0?a:0)})});const E=document.getElementById("cart-count"),G=document.getElementById("cart-modal"),y=document.getElementById("cart-overlay"),U=document.getElementById("cart-items"),P=document.getElementById("cart-total"),j=document.getElementById("checkout-button"),$=document.getElementById("continue-button"),A=document.getElementById("wholesale-warning"),Z=document.getElementById("cart-close-btn"),d=[],H={id:"JA182765",name:"Дверной Замок Golden Soft для офиса",price:1e3,quantity:1,image:new URL("/castle-on-saltovka/assets/2Rectangle1x-a96ffe2e.png",self.location).href};function W(n){E&&(E.textContent=n>0?n:"",E.style.display=n>0?"inline-block":"none")}document.querySelector(".btn-categories-basket").addEventListener("click",()=>{const n=d.find(s=>s.id===H.id);n?n.quantity++:d.push({...H}),x()});document.getElementById("cart-button").addEventListener("click",()=>{G.classList.remove("hidden"),y.classList.remove("hidden")});Z.addEventListener("click",()=>{G.classList.add("hidden"),y.classList.add("hidden")});y.addEventListener("click",n=>{n.target===y&&(G.classList.add("hidden"),y.classList.add("hidden"))});function x(){const n=d.reduce((t,e)=>t+e.quantity,0);W(n),U.innerHTML="",d.forEach(t=>{const e=document.createElement("li");e.className="cart-item",e.innerHTML=`
      <img src="${t.image}" alt="${t.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="container-name-remove">
          <p class="cart-item-name">${t.name}</p>
          <button class="remove-item" data-id="${t.id}">Удалить</button>
        </div>
        <div class="container-quantity-price">
          <div class="cart-item-quantity">
            <button class="qty-btn minus" data-id="${t.id}" ${t.quantity===1?"disabled":""}>–</button>
            <span class="qty-count">${t.quantity}</span>
            <button class="qty-btn plus" data-id="${t.id}">+</button>
          </div>
          <p class="cart-item-price">${t.price.toLocaleString()} грн.</p>
        </div>
      </div>
    `,U.appendChild(e)});const s=d.reduce((t,e)=>t+e.quantity*e.price,0);P.innerHTML=`
    <span class="cart-label">Итого:</span>
    <span class="cart-amount">${s.toLocaleString()} грн.</span>
  `,s>1e5?(j.style.display="none",$.style.display="none",A.classList.remove("hidden")):(j.style.display="inline-block",$.style.display="inline-block",A.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(t=>{t.onclick=()=>{const e=d.find(c=>c.id===t.dataset.id);e&&e.quantity++,x()}}),document.querySelectorAll(".qty-btn.minus").forEach(t=>{t.onclick=()=>{const e=d.find(c=>c.id===t.dataset.id);if(e&&e.quantity>1)e.quantity--;else{const c=d.findIndex(l=>l.id===t.dataset.id);c!==-1&&d.splice(c,1)}x()}}),document.querySelectorAll(".remove-item").forEach(t=>{t.onclick=()=>{const e=d.findIndex(c=>c.id===t.dataset.id);e!==-1&&d.splice(e,1),x()}})}new F(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(s=>s.classList.remove("active")),n.classList.add("active"),document.getElementById(n.dataset.tab).classList.add("active")})});const p=document.getElementById("reviewModal"),_=document.getElementById("openModalBtn"),z=document.getElementById("closeModalBtn"),M=document.getElementById("reviewForm"),C=document.getElementById("reviewsContainer"),V=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),S=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let u=JSON.parse(localStorage.getItem("reviews"))||[],I=3,g=0;_.onclick=()=>{p.style.display="flex",document.body.style.overflow="hidden"};z.onclick=()=>{p.style.display="none",document.body.style.overflow=""};window.onclick=n=>{n.target==p&&(p.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(n,s)=>`
  <span data-index="${s}">
    <svg class="icon-star" width="20" height="20">
      <use href="${S}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",n=>{const s=n.target.closest("span");s&&(g=parseInt(s.dataset.index)+1,O())});function O(){[...q.children].forEach((n,s)=>{n.classList.toggle("selected",s<g)})}M.onsubmit=function(n){n.preventDefault();const s=document.getElementById("nameInput").value,t=document.getElementById("commentInput").value;if(g===0){alert("Поставте оцінку");return}const e={id:Date.now(),name:s,comment:t,rating:g,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};u.unshift(e),localStorage.setItem("reviews",JSON.stringify(u)),p.style.display="none",document.body.style.overflow="",M.reset(),g=0,O(),L()};function L(){C.innerHTML="",u.slice(0,I).forEach(t=>{const e=document.createElement("div");e.className="review";const c=t.comments.length;e.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${t.name}</li>
          <li class="item-review-date">${t.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,i)=>`
            <svg class="icon-star ${i<t.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${S}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${t.comment}</p>
        <button class="more">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${S}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${t.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${S}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${t.id}">
              ${c} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${t.comments.map(l=>`
          <ul class="comment">
            <li class="comment-name">${l.name}</li>
            <li class="item-review-date">${l.date}</li>
            <li class="comment-text">${l.text}</li>
          </ul>
        `).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар"></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,e.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const i=e.querySelector(".reply-form");i.style.display=i.style.display==="none"?"block":"none"}),e.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const i=e.querySelector(".comments");i.style.display=i.style.display==="none"?"block":"none"}),e.querySelector(".submit-reply").addEventListener("click",()=>{const l=e.querySelector(".reply-name").value.trim(),i=e.querySelector(".reply-text").value.trim();if(!l||!i)return alert("Введіть ім`я та коментар");const w=parseInt(e.querySelector(".reply-btn").dataset.id);u.find(h=>h.id===w).comments.push({name:l,text:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(u)),L()}),C.appendChild(e)});const s=document.getElementById("showMoreContainer");s.style.display=u.length>I?"flex":"none"}V.onclick=()=>{I+=3,L()};L();
//# sourceMappingURL=commonHelpers6.js.map
