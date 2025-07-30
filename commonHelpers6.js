import"./assets/menu-f265ad14.js";import{S as D,A as T}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-c4848f9b.js";const N=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const o=document.querySelector("a.main-lightbox"),s=document.getElementById("main-picture"),e=s.querySelector("img"),t=s.querySelector("source"),a=document.querySelectorAll("picture.thumbnail");let n=null;function i(){return window.innerWidth<=767}function L(){return N.map(c=>i()?c.mobile["2x"]:c.desktop["2x"])}function v(){const c=L();a.forEach((l,r)=>{l.dataset.full=c[r]})}function h(c=0){let l=document.querySelector(".lightbox-gallery");l?l.innerHTML="":(l=document.createElement("div"),l.classList.add("lightbox-gallery"),l.style.display="none",document.body.appendChild(l));const r=Array.from(a);return r.slice(c).concat(r.slice(0,c)).forEach(f=>{var q;const M=f.dataset.full,O=((q=f.querySelector("img"))==null?void 0:q.alt)||"",x=document.createElement("a");x.href=M,x.setAttribute("data-gallery","gallery"),x.setAttribute("data-title",O),l.appendChild(x)}),l}function I(c=".lightbox-gallery a"){return n&&n.destroy(),n=new D(c,{captionsData:"title",captionDelay:250}),n.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),n.on("close.simplelightbox",()=>{document.body.style.overflow=""}),n}function k(c){v();const l=a[c];if(!l)return;const r=l.querySelector("source"),m=l.querySelector("img");t&&r?(t.srcset=r.srcset,t.media=r.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),e.src=m.src,e.alt=m.alt,o.href=l.dataset.full,a.forEach(f=>f.classList.remove("active")),l.classList.add("active")}a.forEach((c,l)=>{c.addEventListener("click",r=>{if(r.preventDefault(),v(),i()){const m=h(l);I(".lightbox-gallery a"),setTimeout(()=>{const f=m.querySelectorAll("a");f[0]&&f[0].click()},50)}else k(l)})}),o.addEventListener("click",c=>{if(i()){c.preventDefault();return}c.preventDefault();const l=Array.from(a).findIndex(m=>m.classList.contains("active"));v();const r=h(l>=0?l:0);I(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}),k(0),window.addEventListener("resize",()=>{const c=Array.from(a).findIndex(l=>l.classList.contains("active"));k(c>=0?c:0)})});const d=[],y=document.getElementById("cart-count"),F=document.getElementById("cart-modal"),R=document.getElementById("cart-items"),J=document.getElementById("cart-total"),U=document.getElementById("checkout-button"),B=document.getElementById("continue-button"),j=document.getElementById("wholesale-warning"),$={id:"JA182765",name:"Дверной Замок Golden Soft для офиса",price:1e3,quantity:1,image:new URL("/castle-on-saltovka/assets/2Rectangle1x-a96ffe2e.png",self.location).href};function P(o){y&&(o>0?(y.textContent=o,y.style.display="inline-block"):(y.textContent="",y.style.display="none"))}document.querySelector(".btn-categories-basket").addEventListener("click",()=>{const o=d.find(s=>s.id===$.id);o?o.quantity++:d.push({...$}),b()});document.getElementById("cart-button").addEventListener("click",()=>{F.classList.toggle("hidden")});function b(){const o=d.reduce((e,t)=>e+t.quantity,0);P(o),R.innerHTML="",d.forEach(e=>{const t=document.createElement("li");t.className="cart-item",t.innerHTML=`
      <img src="${e.image}" alt="${e.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="container-name-remove">
          <p class="cart-item-name">${e.name}</p>
          <button class="remove-item" data-id="${e.id}">Удалить</button>
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
    `,R.appendChild(t)});const s=d.reduce((e,t)=>e+t.quantity*t.price,0);J.textContent=`Итого: ${s.toLocaleString()} грн.`,s>1e5?(U.style.display="none",B.style.display="none",j.classList.remove("hidden")):(U.style.display="inline-block",B.style.display="inline-block",j.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.id,a=d.find(n=>n.id===t);a&&a.quantity++,b()})}),document.querySelectorAll(".qty-btn.minus").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.id,a=d.find(n=>n.id===t);if(a&&a.quantity>1)a.quantity--;else{const n=d.findIndex(i=>i.id===t);n!==-1&&d.splice(n,1)}b()})}),document.querySelectorAll(".remove-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.id,a=d.findIndex(n=>n.id===t);a!==-1&&d.splice(a,1),b()})})}new T(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(s=>s.classList.remove("active")),o.classList.add("active"),document.getElementById(o.dataset.tab).classList.add("active")})});const p=document.getElementById("reviewModal"),Z=document.getElementById("openModalBtn"),W=document.getElementById("closeModalBtn"),A=document.getElementById("reviewForm"),C=document.getElementById("reviewsContainer"),_=document.getElementById("showMoreBtn"),G=document.getElementById("starRating"),S=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let u=JSON.parse(localStorage.getItem("reviews"))||[],E=3,g=0;Z.onclick=()=>{p.style.display="flex",document.body.style.overflow="hidden"};W.onclick=()=>{p.style.display="none",document.body.style.overflow=""};window.onclick=o=>{o.target==p&&(p.style.display="none",document.body.style.overflow="")};G.innerHTML=Array.from({length:5},(o,s)=>`
  <span data-index="${s}">
    <svg class="icon-star" width="20" height="20">
      <use href="${S}#icon-star"></use>
    </svg>
  </span>
`).join("");G.addEventListener("click",o=>{const s=o.target.closest("span");s&&(g=parseInt(s.dataset.index)+1,H())});function H(){[...G.children].forEach((o,s)=>{o.classList.toggle("selected",s<g)})}A.onsubmit=function(o){o.preventDefault();const s=document.getElementById("nameInput").value,e=document.getElementById("commentInput").value;if(g===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:s,comment:e,rating:g,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};u.unshift(t),localStorage.setItem("reviews",JSON.stringify(u)),p.style.display="none",document.body.style.overflow="",A.reset(),g=0,H(),w()};function w(){C.innerHTML="",u.slice(0,E).forEach(e=>{const t=document.createElement("div");t.className="review";const a=e.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${e.name}</li>
          <li class="item-review-date">${e.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(n,i)=>`
            <svg class="icon-star ${i<e.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${S}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${e.comment}</p>
        <button class="more">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${S}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${e.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${S}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${e.id}">
              ${a} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${e.comments.map(n=>`
          <ul class="comment">
            <li class="comment-name">${n.name}</li>
            <li class="item-review-date">${n.date}</li>
            <li class="comment-text">${n.text}</li>
          </ul>
        `).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар"></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,t.querySelector(".reply-btn").addEventListener("click",n=>{n.preventDefault();const i=t.querySelector(".reply-form");i.style.display=i.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",n=>{n.preventDefault();const i=t.querySelector(".comments");i.style.display=i.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const n=t.querySelector(".reply-name").value.trim(),i=t.querySelector(".reply-text").value.trim();if(!n||!i)return alert("Введіть ім`я та коментар");const L=parseInt(t.querySelector(".reply-btn").dataset.id);u.find(h=>h.id===L).comments.push({name:n,text:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(u)),w()}),C.appendChild(t)});const s=document.getElementById("showMoreContainer");s.style.display=u.length>E?"flex":"none"}_.onclick=()=>{E+=3,w()};w();
//# sourceMappingURL=commonHelpers6.js.map
