import"./assets/menu-f265ad14.js";import{S as q,A as B}from"./assets/vendor-f7826fb8.js";document.getElementById("container-list-equipment");const v=document.getElementById("list-equipment"),p=document.getElementById("selected-equipment"),x=p.querySelector(".selected-equipment"),f=p.querySelector(".icon-close"),k=document.querySelectorAll(".item-equipment");p.addEventListener("click",e=>{e.stopPropagation(),v.classList.toggle("active"),f.classList.toggle("rotated")});k.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),x.textContent=e.textContent,v.classList.remove("active"),f.classList.remove("rotated")})});document.addEventListener("click",()=>{v.classList.remove("active"),f.classList.remove("rotated")});window.addEventListener("load",()=>{const e=document.getElementById("main-picture"),t=document.getElementById("main-image"),l=document.querySelector(".main-lightbox"),n=document.querySelectorAll(".thumbnails li .thumbnail");n.forEach(c=>{c.addEventListener("click",()=>{var E;const s=c.querySelector("img"),o=s.src,m=(E=c.querySelector("source"))==null?void 0:E.getAttribute("srcset"),w=c.getAttribute("data-full")||o;t.src=o,t.alt=s.alt;const d=e.querySelector("source");d&&m&&d.setAttribute("srcset",m),l&&(l.href=w),n.forEach(I=>I.classList.remove("active")),c.classList.add("active")})}),n[0]&&n[0].classList.add("active")});new q('[data-gallery="gallery"]',{captionsData:"alt",captionDelay:250});new B(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const r=document.getElementById("reviewModal"),$=document.getElementById("openModalBtn"),A=document.getElementById("closeModalBtn"),b=document.getElementById("reviewForm"),L=document.getElementById("reviewsContainer"),M=document.getElementById("showMoreBtn"),h=document.getElementById("starRating"),u=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let i=JSON.parse(localStorage.getItem("reviews"))||[],g=3,a=0;$.onclick=()=>{r.style.display="flex",document.body.style.overflow="hidden"};A.onclick=()=>{r.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==r&&(r.style.display="none",document.body.style.overflow="")};h.innerHTML=Array.from({length:5},(e,t)=>`
  <span data-index="${t}">
    <svg class="icon-star" width="20" height="20">
      <use href="${u}#icon-star"></use>
    </svg>
  </span>
`).join("");h.addEventListener("click",e=>{const t=e.target.closest("span");t&&(a=parseInt(t.dataset.index)+1,S())});function S(){[...h.children].forEach((e,t)=>{e.classList.toggle("selected",t<a)})}b.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,l=document.getElementById("commentInput").value;if(a===0){alert("Поставте оцінку");return}const n={id:Date.now(),name:t,comment:l,rating:a,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};i.unshift(n),localStorage.setItem("reviews",JSON.stringify(i)),r.style.display="none",document.body.style.overflow="",b.reset(),a=0,S(),y()};function y(){L.innerHTML="",i.slice(0,g).forEach(l=>{const n=document.createElement("div");n.className="review";const c=l.comments.length;n.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${l.name}</li>
          <li class="item-review-date">${l.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,o)=>`
            <svg class="icon-star ${o<l.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${u}#icon-star"></use>
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
              <use href="${u}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${l.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${u}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${l.id}">
              ${c} Коментарі
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
    `,n.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const o=n.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const o=n.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const s=n.querySelector(".reply-name").value.trim(),o=n.querySelector(".reply-text").value.trim();if(!s||!o)return alert("Введите имя и комментарий");const m=parseInt(n.querySelector(".reply-btn").dataset.id);i.find(d=>d.id===m).comments.push({name:s,text:o,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(i)),y()}),L.appendChild(n)});const t=document.getElementById("showMoreContainer");t.style.display=i.length>g?"flex":"none"}M.onclick=()=>{g+=3,y()};y();
//# sourceMappingURL=commonHelpers7.js.map
