import"./assets/menu-f265ad14.js";import{A as L}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const v=document.getElementById("list-equipment"),g=document.getElementById("selected-equipment"),S=g.querySelector(".selected-equipment"),p=g.querySelector(".icon-close"),I=document.querySelectorAll(".item-equipment");g.addEventListener("click",e=>{e.stopPropagation(),v.classList.toggle("active"),p.classList.toggle("rotated")});I.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),S.textContent=e.textContent,v.classList.remove("active"),p.classList.remove("rotated")})});document.addEventListener("click",()=>{v.classList.remove("active"),p.classList.remove("rotated")});window.addEventListener("load",()=>{const e=document.getElementById("main-picture"),t=document.getElementById("main-image"),s=document.querySelectorAll(".thumbnails li .thumbnail");s.forEach(n=>{n.addEventListener("click",()=>{const m=n.querySelector("img").src,o=n.querySelector("source").getAttribute("srcset");t.src=m;const l=e.querySelector("source");l&&l.setAttribute("srcset",o),s.forEach(u=>u.classList.remove("active")),n.classList.add("active")})}),s[0]&&s[0].classList.add("active")});new L(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const a=document.getElementById("reviewModal"),q=document.getElementById("openModalBtn"),B=document.getElementById("closeModalBtn"),f=document.getElementById("reviewForm"),w=document.getElementById("reviewsContainer"),k=document.getElementById("showMoreBtn"),h=document.getElementById("starRating"),r=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let c=JSON.parse(localStorage.getItem("reviews"))||[],y=3,i=0;q.onclick=()=>{a.style.display="flex",document.body.style.overflow="hidden"};B.onclick=()=>{a.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==a&&(a.style.display="none",document.body.style.overflow="")};h.innerHTML=Array.from({length:5},(e,t)=>`
  <span data-index="${t}">
    <svg class="icon-star" width="20" height="20">
      <use href="${r}#icon-star"></use>
    </svg>
  </span>
`).join("");h.addEventListener("click",e=>{const t=e.target.closest("span");t&&(i=parseInt(t.dataset.index)+1,E())});function E(){[...h.children].forEach((e,t)=>{e.classList.toggle("selected",t<i)})}f.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,s=document.getElementById("commentInput").value;if(i===0){alert("Поставте оцінку");return}const n={id:Date.now(),name:t,comment:s,rating:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};c.unshift(n),localStorage.setItem("reviews",JSON.stringify(c)),a.style.display="none",document.body.style.overflow="",f.reset(),i=0,E(),d()};function d(){w.innerHTML="",c.slice(0,y).forEach(s=>{const n=document.createElement("div");n.className="review";const m=s.comments.length;n.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${s.name}</li>
          <li class="item-review-date">${s.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(o,l)=>`
            <svg class="icon-star ${l<s.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${r}#icon-star"></use>
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
              <use href="${r}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${s.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${r}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${s.id}">
              ${m} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${s.comments.map(o=>`<ul class="comment">
                <li class="comment-name">${o.name}</li>
                <li class="item-review-date">${o.date}</li>
                <li class="comment-text">${o.text}</li>
              </ul>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",o=>{o.preventDefault();const l=n.querySelector(".reply-form");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",o=>{o.preventDefault();const l=n.querySelector(".comments");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const o=n.querySelector(".reply-name").value.trim(),l=n.querySelector(".reply-text").value.trim();if(!o||!l)return alert("Введите имя и комментарий");const u=parseInt(n.querySelector(".reply-btn").dataset.id);c.find(b=>b.id===u).comments.push({name:o,text:l,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(c)),d()}),w.appendChild(n)});const t=document.getElementById("showMoreContainer");t.style.display=c.length>y?"flex":"none"}k.onclick=()=>{y+=3,d()};d();
//# sourceMappingURL=commonHelpers7.js.map
