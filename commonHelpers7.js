import"./assets/menu-f265ad14.js";import{S as I,A as B}from"./assets/vendor-f7826fb8.js";const $=[{id:1,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",description:"Golden Soft для офісу",price:1e3,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",description:"Golden Soft для готелю",price:1e3,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",description:"Golden Soft для офісу",price:1e3,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",description:"Golden Soft для офісу",price:1e3,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),o=document.getElementById("main-picture"),l=o.querySelector("img"),t=o.querySelector("source"),r=document.querySelectorAll("picture.thumbnail");let s;const a=$.map(n=>n.desktop["2x"]);r.forEach((n,c)=>{n.dataset.full=a[c]});function h(n){const c=Array.from(r),d=[...c.slice(n),...c.slice(0,n)];let i=document.querySelector(".lightbox-gallery");i?i.innerHTML="":(i=document.createElement("div"),i.classList.add("lightbox-gallery"),i.hidden=!0,document.body.appendChild(i)),d.forEach(p=>{var E;const U=p.dataset.full,j=((E=p.querySelector("img"))==null?void 0:E.alt)||"",g=document.createElement("a");g.href=U,g.setAttribute("data-gallery","gallery"),g.setAttribute("data-title",j),i.appendChild(g)}),s&&s.destroy(),s=new I('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250}),s.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),s.on("close.simplelightbox",()=>{document.body.style.overflow=""})}function b(n){const c=r[n];if(!c)return;const d=c.querySelector("source"),i=c.querySelector("img");t&&d?(t.srcset=d.srcset,t.media=d.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),l.src=i.src,l.alt=i.alt,e.href=c.dataset.full,r.forEach(p=>p.classList.remove("active")),c.classList.add("active"),h(n)}r.forEach((n,c)=>{n.addEventListener("click",d=>{d.preventDefault(),b(c)})}),b(0)});const S=document.getElementById("list-equipment"),w=document.getElementById("selected-equipment"),A=w.querySelector(".selected-equipment "),L=w.querySelector(".icon-close"),H=document.querySelectorAll(".item-equipment");w.addEventListener("click",e=>{e.stopPropagation(),S.classList.toggle("active"),L.classList.toggle("rotated")});H.forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),A.textContent=e.textContent,S.classList.remove("active"),L.classList.remove("rotated")})});document.addEventListener("click",()=>{S.classList.remove("active"),L.classList.remove("rotated")});new B(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(o=>o.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const u=document.getElementById("reviewModal"),O=document.getElementById("openModalBtn"),M=document.getElementById("closeModalBtn"),G=document.getElementById("reviewForm"),R=document.getElementById("reviewsContainer"),D=document.getElementById("showMoreBtn"),k=document.getElementById("starRating"),y=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let m=JSON.parse(localStorage.getItem("reviews"))||[],x=3,f=0;O.onclick=()=>{u.style.display="flex",document.body.style.overflow="hidden"};M.onclick=()=>{u.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==u&&(u.style.display="none",document.body.style.overflow="")};k.innerHTML=Array.from({length:5},(e,o)=>`
  <span data-index="${o}">
    <svg class="icon-star" width="20" height="20">
      <use href="${y}#icon-star"></use>
    </svg>
  </span>
`).join("");k.addEventListener("click",e=>{const o=e.target.closest("span");o&&(f=parseInt(o.dataset.index)+1,q())});function q(){[...k.children].forEach((e,o)=>{e.classList.toggle("selected",o<f)})}G.onsubmit=function(e){e.preventDefault();const o=document.getElementById("nameInput").value,l=document.getElementById("commentInput").value;if(f===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:o,comment:l,rating:f,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};m.unshift(t),localStorage.setItem("reviews",JSON.stringify(m)),u.style.display="none",document.body.style.overflow="",G.reset(),f=0,q(),v()};function v(){R.innerHTML="",m.slice(0,x).forEach(l=>{const t=document.createElement("div");t.className="review";const r=l.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${l.name}</li>
          <li class="item-review-date">${l.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,a)=>`
            <svg class="icon-star ${a<l.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${y}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${l.comment}</p>
        <button class="">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${y}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${l.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${y}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${l.id}">
              ${r} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${l.comments.map(s=>`<ul class="comment">
                <li class="comment-name">${s.name}</li>
                <li class="item-review-date">${s.date}</li>
                <li class="comment-text">${s.text}</li>
              </ul>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,t.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const a=t.querySelector(".reply-form");a.style.display=a.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const a=t.querySelector(".comments");a.style.display=a.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const s=t.querySelector(".reply-name").value.trim(),a=t.querySelector(".reply-text").value.trim();if(!s||!a)return alert("Введите имя и комментарий");const h=parseInt(t.querySelector(".reply-btn").dataset.id);m.find(n=>n.id===h).comments.push({name:s,text:a,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(m)),v()}),R.appendChild(t)});const o=document.getElementById("showMoreContainer");o.style.display=m.length>x?"flex":"none"}D.onclick=()=>{x+=3,v()};v();
//# sourceMappingURL=commonHelpers7.js.map
