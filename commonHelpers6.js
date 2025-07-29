import"./assets/menu-f265ad14.js";import{S as O,A as D}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-c4848f9b.js";const T=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const t=document.querySelector("a.main-lightbox"),n=document.getElementById("main-picture"),l=n.querySelector("img"),e=n.querySelector("source"),d=document.querySelectorAll("picture.thumbnail");let a=null;function c(){return window.innerWidth<=767}function w(){return T.map(s=>c()?s.mobile["2x"]:s.desktop["2x"])}function v(){const s=w();d.forEach((o,i)=>{o.dataset.full=s[i]})}function h(s=0){let o=document.querySelector(".lightbox-gallery");o?o.innerHTML="":(o=document.createElement("div"),o.classList.add("lightbox-gallery"),o.style.display="none",document.body.appendChild(o));const i=Array.from(d);return i.slice(s).concat(i.slice(0,s)).forEach(m=>{var I;const H=m.dataset.full,M=((I=m.querySelector("img"))==null?void 0:I.alt)||"",x=document.createElement("a");x.href=H,x.setAttribute("data-gallery","gallery"),x.setAttribute("data-title",M),o.appendChild(x)}),o}function G(s=".lightbox-gallery a"){return a&&a.destroy(),a=new O(s,{captionsData:"title",captionDelay:250}),a.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),a.on("close.simplelightbox",()=>{document.body.style.overflow=""}),a}function L(s){v();const o=d[s];if(!o)return;const i=o.querySelector("source"),r=o.querySelector("img");e&&i?(e.srcset=i.srcset,e.media=i.media):e&&(e.removeAttribute("srcset"),e.removeAttribute("media")),l.src=r.src,l.alt=r.alt,t.href=o.dataset.full,d.forEach(m=>m.classList.remove("active")),o.classList.add("active")}d.forEach((s,o)=>{s.addEventListener("click",i=>{if(i.preventDefault(),v(),c()){const r=h(o);G(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}else L(o)})}),t.addEventListener("click",s=>{if(c()){s.preventDefault();return}s.preventDefault();const o=Array.from(d).findIndex(r=>r.classList.contains("active"));v();const i=h(o>=0?o:0);G(".lightbox-gallery a"),setTimeout(()=>{const r=i.querySelectorAll("a");r[0]&&r[0].click()},50)}),L(0),window.addEventListener("resize",()=>{const s=Array.from(d).findIndex(o=>o.classList.contains("active"));L(s>=0?s:0)})});const y=[],u=document.getElementById("cart-count"),F=document.getElementById("cart-modal"),R=document.getElementById("cart-items"),J=document.getElementById("cart-total"),U=document.getElementById("checkout-button"),B=document.getElementById("continue-button"),q=document.getElementById("wholesale-warning"),j={id:"JA182765",name:"Дверной Замок Golden Soft для офиса",price:33e3,quantity:1};function N(t){u&&(t>0?(u.textContent=t,u.style.display="inline-block"):(u.textContent="",u.style.display="none"))}document.querySelector(".btn-categories-basket").addEventListener("click",()=>{const t=y.find(n=>n.id===j.id);t?t.quantity++:y.push({...j}),P()});document.getElementById("cart-button").addEventListener("click",()=>{F.classList.toggle("hidden")});function P(){const t=y.reduce((l,e)=>l+e.quantity,0);N(t),R.innerHTML="",y.forEach(l=>{const e=document.createElement("li");e.textContent=`${l.name} x${l.quantity} — ${l.quantity*l.price}₽`,R.appendChild(e)});const n=y.reduce((l,e)=>l+e.quantity*e.price,0);J.textContent=`Итого: ${n.toLocaleString()}₽`,n>1e5?(U.style.display="none",B.style.display="none",q.classList.remove("hidden")):(U.style.display="inline-block",B.style.display="inline-block",q.classList.add("hidden"))}new D(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(n=>n.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.tab).classList.add("active")})});const p=document.getElementById("reviewModal"),Z=document.getElementById("openModalBtn"),W=document.getElementById("closeModalBtn"),A=document.getElementById("reviewForm"),$=document.getElementById("reviewsContainer"),_=document.getElementById("showMoreBtn"),E=document.getElementById("starRating"),b=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let f=JSON.parse(localStorage.getItem("reviews"))||[],k=3,g=0;Z.onclick=()=>{p.style.display="flex",document.body.style.overflow="hidden"};W.onclick=()=>{p.style.display="none",document.body.style.overflow=""};window.onclick=t=>{t.target==p&&(p.style.display="none",document.body.style.overflow="")};E.innerHTML=Array.from({length:5},(t,n)=>`
  <span data-index="${n}">
    <svg class="icon-star" width="20" height="20">
      <use href="${b}#icon-star"></use>
    </svg>
  </span>
`).join("");E.addEventListener("click",t=>{const n=t.target.closest("span");n&&(g=parseInt(n.dataset.index)+1,C())});function C(){[...E.children].forEach((t,n)=>{t.classList.toggle("selected",n<g)})}A.onsubmit=function(t){t.preventDefault();const n=document.getElementById("nameInput").value,l=document.getElementById("commentInput").value;if(g===0){alert("Поставте оцінку");return}const e={id:Date.now(),name:n,comment:l,rating:g,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};f.unshift(e),localStorage.setItem("reviews",JSON.stringify(f)),p.style.display="none",document.body.style.overflow="",A.reset(),g=0,C(),S()};function S(){$.innerHTML="",f.slice(0,k).forEach(l=>{const e=document.createElement("div");e.className="review";const d=l.comments.length;e.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${l.name}</li>
          <li class="item-review-date">${l.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(a,c)=>`
            <svg class="icon-star ${c<l.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${b}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${l.comment}</p>
        <button class="more">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${b}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${l.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${b}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${l.id}">
              ${d} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${l.comments.map(a=>`
          <ul class="comment">
            <li class="comment-name">${a.name}</li>
            <li class="item-review-date">${a.date}</li>
            <li class="comment-text">${a.text}</li>
          </ul>
        `).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар"></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,e.querySelector(".reply-btn").addEventListener("click",a=>{a.preventDefault();const c=e.querySelector(".reply-form");c.style.display=c.style.display==="none"?"block":"none"}),e.querySelector(".toggle-comments").addEventListener("click",a=>{a.preventDefault();const c=e.querySelector(".comments");c.style.display=c.style.display==="none"?"block":"none"}),e.querySelector(".submit-reply").addEventListener("click",()=>{const a=e.querySelector(".reply-name").value.trim(),c=e.querySelector(".reply-text").value.trim();if(!a||!c)return alert("Введіть ім`я та коментар");const w=parseInt(e.querySelector(".reply-btn").dataset.id);f.find(h=>h.id===w).comments.push({name:a,text:c,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(f)),S()}),$.appendChild(e)});const n=document.getElementById("showMoreContainer");n.style.display=f.length>k?"flex":"none"}_.onclick=()=>{k+=3,S()};S();
//# sourceMappingURL=commonHelpers6.js.map
