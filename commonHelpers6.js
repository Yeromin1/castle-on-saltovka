import"./assets/menu-f265ad14.js";import{S as J,A as P}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-c4848f9b.js";const Z=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const n=document.querySelector("a.main-lightbox"),l=document.getElementById("main-picture"),c=l.querySelector("img"),e=l.querySelector("source"),t=document.querySelectorAll("picture.thumbnail");let o=null;function i(){return window.innerWidth<=767}function L(){return Z.map(a=>i()?a.mobile["2x"]:a.desktop["2x"])}function v(){const a=L();t.forEach((s,d)=>{s.dataset.full=a[d]})}function h(a=0){let s=document.querySelector(".lightbox-gallery");s?s.innerHTML="":(s=document.createElement("div"),s.classList.add("lightbox-gallery"),s.style.display="none",document.body.appendChild(s));const d=Array.from(t);return d.slice(a).concat(d.slice(0,a)).forEach(f=>{var B;const N=f.dataset.full,F=((B=f.querySelector("img"))==null?void 0:B.alt)||"",b=document.createElement("a");b.href=N,b.setAttribute("data-gallery","gallery"),b.setAttribute("data-title",F),s.appendChild(b)}),s}function R(a=".lightbox-gallery a"){return o&&o.destroy(),o=new J(a,{captionsData:"title",captionDelay:250}),o.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),o.on("close.simplelightbox",()=>{document.body.style.overflow=""}),o}function k(a){v();const s=t[a];if(!s)return;const d=s.querySelector("source"),m=s.querySelector("img");e&&d?(e.srcset=d.srcset,e.media=d.media):e&&(e.removeAttribute("srcset"),e.removeAttribute("media")),c.src=m.src,c.alt=m.alt,n.href=s.dataset.full,t.forEach(f=>f.classList.remove("active")),s.classList.add("active")}t.forEach((a,s)=>{a.addEventListener("click",d=>{if(d.preventDefault(),v(),i()){const m=h(s);R(".lightbox-gallery a"),setTimeout(()=>{const f=m.querySelectorAll("a");f[0]&&f[0].click()},50)}else k(s)})}),n.addEventListener("click",a=>{if(i()){a.preventDefault();return}a.preventDefault();const s=Array.from(t).findIndex(m=>m.classList.contains("active"));v();const d=h(s>=0?s:0);R(".lightbox-gallery a"),setTimeout(()=>{const m=d.querySelectorAll("a");m[0]&&m[0].click()},50)}),k(0),window.addEventListener("resize",()=>{const a=Array.from(t).findIndex(s=>s.classList.contains("active"));k(a>=0?a:0)})});const E=document.getElementById("cart-count"),G=document.getElementById("cart-modal"),y=document.getElementById("cart-overlay"),U=document.getElementById("cart-items"),W=document.getElementById("cart-total"),$=document.getElementById("checkout-button"),j=document.getElementById("continue-button"),A=document.getElementById("wholesale-warning"),M=document.getElementById("wholesale-warning-copy"),H=document.getElementById("wholesale-sales"),_=document.getElementById("cart-close-btn"),z=new URL("/castle-on-saltovka/assets/icons-dab88771.svg",self.location),r=[],C={id:"JA182765",name:"Дверний Замок Golden Soft для офісу",price:1e3,quantity:1,image:new URL("/castle-on-saltovka/assets/2Rectangle1x-a96ffe2e.png",self.location).href};function V(n){E&&(E.textContent=n>0?n:"",E.style.display=n>0?"block":"none")}document.querySelector(".btn-categories-basket").addEventListener("click",()=>{const n=r.find(l=>l.id===C.id);n?n.quantity++:r.push({...C}),x()});document.getElementById("cart-button").addEventListener("click",()=>{G.classList.remove("hidden"),y.classList.remove("hidden")});_.addEventListener("click",()=>{G.classList.add("hidden"),y.classList.add("hidden")});y.addEventListener("click",n=>{n.target===y&&(G.classList.add("hidden"),y.classList.add("hidden"))});function x(){const n=r.reduce((e,t)=>e+t.quantity,0);V(n),U.innerHTML="",r.forEach(e=>{const t=document.createElement("li");t.className="cart-item",t.innerHTML=`
      <img src="${e.image}" alt="${e.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="container-name-remove">
          <p class="cart-item-name">${e.name}</p>
          <button class="remove-item" data-id="${e.id}">
            <svg class="basket-delete-svg" width="24" height="24">
              <use href="${z}#icon-delete"></use>
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
    `,U.appendChild(t)});const l=r.reduce((e,t)=>e+t.quantity*t.price,0);W.innerHTML=`
    <span class="cart-label">Разом:</span>
    <span class="cart-amount">${l.toLocaleString()} грн.</span>
  `;const c=window.matchMedia("(min-width: 1158px)").matches;l>1e3?($.style.display="none",j.style.display="none",c||A.classList.remove("hidden"),H.classList.remove("hidden"),c&&M.classList.remove("hidden")):($.style.display="block",j.style.display="block",c||A.classList.add("hidden"),H.classList.add("hidden"),c&&M.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(e=>{e.onclick=()=>{const t=r.find(o=>o.id===e.dataset.id);t&&t.quantity++,x()}}),document.querySelectorAll(".qty-btn.minus").forEach(e=>{e.onclick=()=>{const t=r.find(o=>o.id===e.dataset.id);if(t&&t.quantity>1)t.quantity--;else{const o=r.findIndex(i=>i.id===e.dataset.id);o!==-1&&r.splice(o,1)}x()}}),document.querySelectorAll(".remove-item").forEach(e=>{e.onclick=()=>{const t=r.findIndex(o=>o.id===e.dataset.id);t!==-1&&r.splice(t,1),x()}})}new P(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(l=>l.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(l=>l.classList.remove("active")),n.classList.add("active"),document.getElementById(n.dataset.tab).classList.add("active")})});const p=document.getElementById("reviewModal"),K=document.getElementById("openModalBtn"),Q=document.getElementById("closeModalBtn"),O=document.getElementById("reviewForm"),D=document.getElementById("reviewsContainer"),X=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),w=new URL("/castle-on-saltovka/assets/icons-dab88771.svg",self.location);let u=JSON.parse(localStorage.getItem("reviews"))||[],I=3,g=0;K.onclick=()=>{p.style.display="flex",document.body.style.overflow="hidden"};Q.onclick=()=>{p.style.display="none",document.body.style.overflow=""};window.onclick=n=>{n.target==p&&(p.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(n,l)=>`
  <span data-index="${l}">
    <svg class="icon-star" width="20" height="20">
      <use href="${w}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",n=>{const l=n.target.closest("span");l&&(g=parseInt(l.dataset.index)+1,T())});function T(){[...q.children].forEach((n,l)=>{n.classList.toggle("selected",l<g)})}O.onsubmit=function(n){n.preventDefault();const l=document.getElementById("nameInput").value,c=document.getElementById("commentInput").value;if(g===0){alert("Поставте оцінку");return}const e={id:Date.now(),name:l,comment:c,rating:g,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};u.unshift(e),localStorage.setItem("reviews",JSON.stringify(u)),p.style.display="none",document.body.style.overflow="",O.reset(),g=0,T(),S()};function S(){D.innerHTML="",u.slice(0,I).forEach(c=>{const e=document.createElement("div");e.className="review";const t=c.comments.length;e.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${c.name}</li>
          <li class="item-review-date">${c.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(o,i)=>`
            <svg class="icon-star ${i<c.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${w}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${c.comment}</p>
        <button class="more">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${w}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${c.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${w}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${c.id}">
              ${t} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${c.comments.map(o=>`
          <ul class="comment">
            <li class="comment-name">${o.name}</li>
            <li class="item-review-date">${o.date}</li>
            <li class="comment-text">${o.text}</li>
          </ul>
        `).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар"></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,e.querySelector(".reply-btn").addEventListener("click",o=>{o.preventDefault();const i=e.querySelector(".reply-form");i.style.display=i.style.display==="none"?"block":"none"}),e.querySelector(".toggle-comments").addEventListener("click",o=>{o.preventDefault();const i=e.querySelector(".comments");i.style.display=i.style.display==="none"?"block":"none"}),e.querySelector(".submit-reply").addEventListener("click",()=>{const o=e.querySelector(".reply-name").value.trim(),i=e.querySelector(".reply-text").value.trim();if(!o||!i)return alert("Введіть ім`я та коментар");const L=parseInt(e.querySelector(".reply-btn").dataset.id);u.find(h=>h.id===L).comments.push({name:o,text:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(u)),S()}),D.appendChild(e)});const l=document.getElementById("showMoreContainer");l.style.display=u.length>I?"flex":"none"}X.onclick=()=>{I+=3,S()};S();
//# sourceMappingURL=commonHelpers6.js.map
