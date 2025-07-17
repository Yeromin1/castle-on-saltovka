import"./assets/menu-f265ad14.js";import{S as D,A as C}from"./assets/vendor-f7826fb8.js";window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),n=document.getElementById("main-picture"),s=n.querySelector("img"),t=n.querySelector("source"),r=document.querySelectorAll("picture.thumbnail");let l;const o=window.location.pathname.includes("/castle-on-saltovka/")?"/castle-on-saltovka":"",b=[`${o}/img/pages/home/popular/mobile/GoldenSoftOffice@2x.jpg`,`${o}/img/pages/home/popular/mobile/GoldenSoft2Hotel@2x.jpg`,`${o}/img/pages/home/popular/mobile/GoldenSoft2Office@2x.jpg`,`${o}/img/pages/home/popular/mobile/GoldenSoftHotel@2x.jpg`];r.forEach((c,a)=>{c.dataset.full=b[a]});function x(c){const a=Array.from(r),m=[...a.slice(c),...a.slice(0,c)];let i=document.querySelector(".lightbox-gallery");i?i.innerHTML="":(i=document.createElement("div"),i.classList.add("lightbox-gallery"),i.hidden=!0,document.body.appendChild(i)),m.forEach(p=>{var I;const A=p.dataset.full,M=((I=p.querySelector("img"))==null?void 0:I.alt)||"",v=document.createElement("a");v.href=A,v.setAttribute("data-gallery","gallery"),v.setAttribute("data-title",M),i.appendChild(v)}),l&&l.destroy(),l=new D('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function g(c){const a=r[c];if(!a)return;const m=a.querySelector("source"),i=a.querySelector("img");t&&m?(t.srcset=m.srcset,t.media=m.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),s.src=i.src,s.alt=i.alt,e.href=a.dataset.full,r.forEach(p=>p.classList.remove("active")),a.classList.add("active"),x(c)}r.forEach((c,a)=>{c.addEventListener("click",m=>{m.preventDefault(),g(a)})}),g(0)});const E=document.getElementById("list-equipment"),S=document.getElementById("selected-equipment"),j=S.querySelector(".selected-equipment "),L=S.querySelector(".icon-close"),R=document.querySelectorAll(".item-equipment");S.addEventListener("click",e=>{e.stopPropagation(),E.classList.toggle("active"),L.classList.toggle("rotated")});R.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),j.textContent=e.textContent,E.classList.remove("active"),L.classList.remove("rotated")})});document.addEventListener("click",()=>{E.classList.remove("active"),L.classList.remove("rotated")});new C(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(n=>n.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),G=document.getElementById("openModalBtn"),H=document.getElementById("closeModalBtn"),k=document.getElementById("reviewForm"),B=document.getElementById("reviewsContainer"),O=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),f=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let d=JSON.parse(localStorage.getItem("reviews"))||[],w=3,u=0;G.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};H.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==y&&(y.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(e,n)=>`
  <span data-index="${n}">
    <svg class="icon-star" width="20" height="20">
      <use href="${f}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",e=>{const n=e.target.closest("span");n&&(u=parseInt(n.dataset.index)+1,$())});function $(){[...q.children].forEach((e,n)=>{e.classList.toggle("selected",n<u)})}k.onsubmit=function(e){e.preventDefault();const n=document.getElementById("nameInput").value,s=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:n,comment:s,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};d.unshift(t),localStorage.setItem("reviews",JSON.stringify(d)),y.style.display="none",document.body.style.overflow="",k.reset(),u=0,$(),h()};function h(){B.innerHTML="",d.slice(0,w).forEach(s=>{const t=document.createElement("div");t.className="review";const r=s.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${s.name}</li>
          <li class="item-review-date">${s.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,o)=>`
            <svg class="icon-star ${o<s.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${f}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${s.comment}</p>
        <button class="">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${f}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${s.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${f}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${s.id}">
              ${r} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${s.comments.map(l=>`<ul class="comment">
                <li class="comment-name">${l.name}</li>
                <li class="item-review-date">${l.date}</li>
                <li class="comment-text">${l.text}</li>
              </ul>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,t.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const o=t.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const o=t.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const l=t.querySelector(".reply-name").value.trim(),o=t.querySelector(".reply-text").value.trim();if(!l||!o)return alert("Введите имя и комментарий");const b=parseInt(t.querySelector(".reply-btn").dataset.id);d.find(g=>g.id===b).comments.push({name:l,text:o,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(d)),h()}),B.appendChild(t)});const n=document.getElementById("showMoreContainer");n.style.display=d.length>w?"flex":"none"}O.onclick=()=>{w+=3,h()};h();
//# sourceMappingURL=commonHelpers7.js.map
