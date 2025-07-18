import"./assets/menu-f265ad14.js";import{S as M,A as D}from"./assets/vendor-f7826fb8.js";const C="/castle-on-saltovka/assets/1ectangle2x-567b97cc.png",R="/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",H="/castle-on-saltovka/assets/3Rectangle2x-9e1b875b.png",j="/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg";window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),n=document.getElementById("main-picture"),l=n.querySelector("img"),t=n.querySelector("source"),r=document.querySelectorAll("picture.thumbnail");let s;const o=[C,R,H,j];r.forEach((c,a)=>{c.dataset.full=o[a]});function h(c){const a=Array.from(r),d=[...a.slice(c),...a.slice(0,c)];let i=document.querySelector(".lightbox-gallery");i?i.innerHTML="":(i=document.createElement("div"),i.classList.add("lightbox-gallery"),i.hidden=!0,document.body.appendChild(i)),d.forEach(g=>{var x;const $=g.dataset.full,A=((x=g.querySelector("img"))==null?void 0:x.alt)||"",v=document.createElement("a");v.href=$,v.setAttribute("data-gallery","gallery"),v.setAttribute("data-title",A),i.appendChild(v)}),s&&s.destroy(),s=new M('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function b(c){const a=r[c];if(!a)return;const d=a.querySelector("source"),i=a.querySelector("img");t&&d?(t.srcset=d.srcset,t.media=d.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),l.src=i.src,l.alt=i.alt,e.href=a.dataset.full,r.forEach(g=>g.classList.remove("active")),a.classList.add("active"),h(c)}r.forEach((c,a)=>{c.addEventListener("click",d=>{d.preventDefault(),b(a)})}),b(0)});const w=document.getElementById("list-equipment"),S=document.getElementById("selected-equipment"),T=S.querySelector(".selected-equipment "),L=S.querySelector(".icon-close"),G=document.querySelectorAll(".item-equipment");S.addEventListener("click",e=>{e.stopPropagation(),w.classList.toggle("active"),L.classList.toggle("rotated")});G.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),T.textContent=e.textContent,w.classList.remove("active"),L.classList.remove("rotated")})});document.addEventListener("click",()=>{w.classList.remove("active"),L.classList.remove("rotated")});new D(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(n=>n.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),N=document.getElementById("openModalBtn"),U=document.getElementById("closeModalBtn"),I=document.getElementById("reviewForm"),k=document.getElementById("reviewsContainer"),J=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),p=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let m=JSON.parse(localStorage.getItem("reviews"))||[],E=3,u=0;N.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};U.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==y&&(y.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(e,n)=>`
  <span data-index="${n}">
    <svg class="icon-star" width="20" height="20">
      <use href="${p}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",e=>{const n=e.target.closest("span");n&&(u=parseInt(n.dataset.index)+1,B())});function B(){[...q.children].forEach((e,n)=>{e.classList.toggle("selected",n<u)})}I.onsubmit=function(e){e.preventDefault();const n=document.getElementById("nameInput").value,l=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:n,comment:l,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};m.unshift(t),localStorage.setItem("reviews",JSON.stringify(m)),y.style.display="none",document.body.style.overflow="",I.reset(),u=0,B(),f()};function f(){k.innerHTML="",m.slice(0,E).forEach(l=>{const t=document.createElement("div");t.className="review";const r=l.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${l.name}</li>
          <li class="item-review-date">${l.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,o)=>`
            <svg class="icon-star ${o<l.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${p}#icon-star"></use>
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
              <use href="${p}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${l.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${p}#icon-message"></use>
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
    `,t.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const o=t.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const o=t.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const s=t.querySelector(".reply-name").value.trim(),o=t.querySelector(".reply-text").value.trim();if(!s||!o)return alert("Введите имя и комментарий");const h=parseInt(t.querySelector(".reply-btn").dataset.id);m.find(c=>c.id===h).comments.push({name:s,text:o,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(m)),f()}),k.appendChild(t)});const n=document.getElementById("showMoreContainer");n.style.display=m.length>E?"flex":"none"}J.onclick=()=>{E+=3,f()};f();
//# sourceMappingURL=commonHelpers7.js.map
