import"./assets/menu-f265ad14.js";import{S as P,A as Z}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-c4848f9b.js";const W=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const o=document.querySelector("a.main-lightbox"),l=document.getElementById("main-picture"),c=l.querySelector("img"),e=l.querySelector("source"),t=document.querySelectorAll("picture.thumbnail");let n=null;function i(){return window.innerWidth<=767}function L(){return W.map(a=>i()?a.mobile["2x"]:a.desktop["2x"])}function h(){const a=L();t.forEach((s,r)=>{s.dataset.full=a[r]})}function b(a=0){let s=document.querySelector(".lightbox-gallery");s?s.innerHTML="":(s=document.createElement("div"),s.classList.add("lightbox-gallery"),s.style.display="none",document.body.appendChild(s));const r=Array.from(t);return r.slice(a).concat(r.slice(0,a)).forEach(f=>{var B;const J=f.dataset.full,F=((B=f.querySelector("img"))==null?void 0:B.alt)||"",x=document.createElement("a");x.href=J,x.setAttribute("data-gallery","gallery"),x.setAttribute("data-title",F),s.appendChild(x)}),s}function R(a=".lightbox-gallery a"){return n&&n.destroy(),n=new P(a,{captionsData:"title",captionDelay:250}),n.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),n.on("close.simplelightbox",()=>{document.body.style.overflow=""}),n}function k(a){h();const s=t[a];if(!s)return;const r=s.querySelector("source"),m=s.querySelector("img");e&&r?(e.srcset=r.srcset,e.media=r.media):e&&(e.removeAttribute("srcset"),e.removeAttribute("media")),c.src=m.src,c.alt=m.alt,o.href=s.dataset.full,t.forEach(f=>f.classList.remove("active")),s.classList.add("active")}t.forEach((a,s)=>{a.addEventListener("click",r=>{if(r.preventDefault(),h(),i()){const m=b(s);R(".lightbox-gallery a"),setTimeout(()=>{const f=m.querySelectorAll("a");f[0]&&f[0].click()},50)}else k(s)})}),o.addEventListener("click",a=>{if(i()){a.preventDefault();return}a.preventDefault();const s=Array.from(t).findIndex(m=>m.classList.contains("active"));h();const r=b(s>=0?s:0);R(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}),k(0),window.addEventListener("resize",()=>{const a=Array.from(t).findIndex(s=>s.classList.contains("active"));k(a>=0?a:0)})});const E=document.getElementById("cart-count"),G=document.getElementById("cart-modal"),y=document.getElementById("cart-overlay"),U=document.getElementById("cart-items"),_=document.getElementById("cart-total"),$=document.getElementById("checkout-button"),j=document.getElementById("continue-button"),A=document.getElementById("wholesale-warning"),C=document.getElementById("wholesale-warning-copy"),M=document.getElementById("wholesale-sales"),z=document.getElementById("cart-close-btn"),V=new URL("/castle-on-saltovka/assets/icons-dab88771.svg",self.location),H=localStorage.getItem("cart"),d=H?JSON.parse(H):[],O={id:"JA182765",name:"Дверний Замок Golden Soft для офісу",price:1e3,quantity:1,image:new URL("/castle-on-saltovka/assets/2Rectangle1x-a96ffe2e.png",self.location).href};function K(){localStorage.setItem("cart",JSON.stringify(d))}function Q(o){E&&(E.textContent=o>0?o:"",E.style.display=o>0?"block":"none")}document.querySelector(".btn-categories-basket").addEventListener("click",()=>{const o=d.find(l=>l.id===O.id);o?o.quantity++:d.push({...O}),g()});document.getElementById("cart-button").addEventListener("click",()=>{G.classList.remove("hidden"),y.classList.remove("hidden")});z.addEventListener("click",()=>{G.classList.add("hidden"),y.classList.add("hidden")});y.addEventListener("click",o=>{o.target===y&&(G.classList.add("hidden"),y.classList.add("hidden"))});function g(){const o=d.reduce((e,t)=>e+t.quantity,0);Q(o),U.innerHTML="",d.forEach(e=>{const t=document.createElement("li");t.className="cart-item",t.innerHTML=`
      <img src="${e.image}" alt="${e.name}" class="cart-item-image" />
      <div class="cart-item-info">
        <div class="container-name-remove">
          <p class="cart-item-name">${e.name}</p>
          <button class="remove-item" data-id="${e.id}">
            <svg class="basket-delete-svg" width="24" height="24">
              <use href="${V}#icon-delete"></use>
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
    `,U.appendChild(t)});const l=d.reduce((e,t)=>e+t.quantity*t.price,0);_.innerHTML=`
    <span class="cart-label">Разом:</span>
    <span class="cart-amount">${l.toLocaleString()} грн.</span>
  `;const c=window.matchMedia("(min-width: 1158px)").matches;l>1e3?($.style.display="none",j.style.display="none",c||A.classList.remove("hidden"),M.classList.remove("hidden"),c&&C.classList.remove("hidden")):($.style.display="block",j.style.display="block",c||A.classList.add("hidden"),M.classList.add("hidden"),c&&C.classList.add("hidden")),document.querySelectorAll(".qty-btn.plus").forEach(e=>{e.onclick=()=>{const t=d.find(n=>n.id===e.dataset.id);t&&t.quantity++,g()}}),document.querySelectorAll(".qty-btn.minus").forEach(e=>{e.onclick=()=>{const t=d.find(n=>n.id===e.dataset.id);if(t&&t.quantity>1)t.quantity--;else{const n=d.findIndex(i=>i.id===e.dataset.id);n!==-1&&d.splice(n,1)}g()}}),document.querySelectorAll(".remove-item").forEach(e=>{e.onclick=()=>{const t=d.findIndex(n=>n.id===e.dataset.id);t!==-1&&d.splice(t,1),g()}}),K()}g();new Z(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(l=>l.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(l=>l.classList.remove("active")),o.classList.add("active"),document.getElementById(o.dataset.tab).classList.add("active")})});const v=document.getElementById("reviewModal"),X=document.getElementById("openModalBtn"),Y=document.getElementById("closeModalBtn"),D=document.getElementById("reviewForm"),T=document.getElementById("reviewsContainer"),ee=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),S=new URL("/castle-on-saltovka/assets/icons-dab88771.svg",self.location);let u=JSON.parse(localStorage.getItem("reviews"))||[],I=3,p=0;X.onclick=()=>{v.style.display="flex",document.body.style.overflow="hidden"};Y.onclick=()=>{v.style.display="none",document.body.style.overflow=""};window.onclick=o=>{o.target==v&&(v.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(o,l)=>`
  <span data-index="${l}">
    <svg class="icon-star" width="20" height="20">
      <use href="${S}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",o=>{const l=o.target.closest("span");l&&(p=parseInt(l.dataset.index)+1,N())});function N(){[...q.children].forEach((o,l)=>{o.classList.toggle("selected",l<p)})}D.onsubmit=function(o){o.preventDefault();const l=document.getElementById("nameInput").value,c=document.getElementById("commentInput").value;if(p===0){alert("Поставте оцінку");return}const e={id:Date.now(),name:l,comment:c,rating:p,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};u.unshift(e),localStorage.setItem("reviews",JSON.stringify(u)),v.style.display="none",document.body.style.overflow="",D.reset(),p=0,N(),w()};function w(){T.innerHTML="",u.slice(0,I).forEach(c=>{const e=document.createElement("div");e.className="review";const t=c.comments.length;e.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${c.name}</li>
          <li class="item-review-date">${c.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(n,i)=>`
            <svg class="icon-star ${i<c.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${S}#icon-star"></use>
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
              <use href="${S}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${c.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${S}#icon-message"></use>
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
        ${c.comments.map(n=>`
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
    `,e.querySelector(".reply-btn").addEventListener("click",n=>{n.preventDefault();const i=e.querySelector(".reply-form");i.style.display=i.style.display==="none"?"block":"none"}),e.querySelector(".toggle-comments").addEventListener("click",n=>{n.preventDefault();const i=e.querySelector(".comments");i.style.display=i.style.display==="none"?"block":"none"}),e.querySelector(".submit-reply").addEventListener("click",()=>{const n=e.querySelector(".reply-name").value.trim(),i=e.querySelector(".reply-text").value.trim();if(!n||!i)return alert("Введіть ім`я та коментар");const L=parseInt(e.querySelector(".reply-btn").dataset.id);u.find(b=>b.id===L).comments.push({name:n,text:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(u)),w()}),T.appendChild(e)});const l=document.getElementById("showMoreContainer");l.style.display=u.length>I?"flex":"none"}ee.onclick=()=>{I+=3,w()};w();
//# sourceMappingURL=commonHelpers6.js.map
