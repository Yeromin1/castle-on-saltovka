import"./assets/menu-f265ad14.js";import{A as L}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const u=document.getElementById("list-equipment"),y=document.getElementById("selected-equipment"),I=y.querySelector(".selected-equipment"),v=y.querySelector(".icon-close"),S=document.querySelectorAll(".item-equipment");y.addEventListener("click",e=>{e.stopPropagation(),u.classList.toggle("active"),v.classList.toggle("rotated")});S.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),I.textContent=e.textContent,u.classList.remove("active"),v.classList.remove("rotated")})});document.addEventListener("click",()=>{u.classList.remove("active"),v.classList.remove("rotated")});new L(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const a=document.getElementById("reviewModal"),q=document.getElementById("openModalBtn"),B=document.getElementById("closeModalBtn"),g=document.getElementById("reviewForm"),h=document.getElementById("reviewsContainer"),x=document.getElementById("showMoreBtn"),p=document.getElementById("starRating"),r=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let c=JSON.parse(localStorage.getItem("reviews"))||[],m=3,i=0;q.onclick=()=>{a.style.display="flex",document.body.style.overflow="hidden"};B.onclick=()=>{a.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==a&&(a.style.display="none",document.body.style.overflow="")};p.innerHTML=Array.from({length:5},(e,t)=>`
  <span data-index="${t}">
    <svg class="icon-star" width="20" height="20">
      <use href="${r}#icon-star"></use>
    </svg>
  </span>
`).join("");p.addEventListener("click",e=>{const t=e.target.closest("span");t&&(i=parseInt(t.dataset.index)+1,f())});function f(){[...p.children].forEach((e,t)=>{e.classList.toggle("selected",t<i)})}g.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,l=document.getElementById("commentInput").value;if(i===0){alert("Поставте оцінку");return}const n={id:Date.now(),name:t,comment:l,rating:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};c.unshift(n),localStorage.setItem("reviews",JSON.stringify(c)),a.style.display="none",document.body.style.overflow="",g.reset(),i=0,f(),d()};function d(){h.innerHTML="",c.slice(0,m).forEach(l=>{const n=document.createElement("div");n.className="review";const w=l.comments.length;n.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${l.name}</li>
          <li class="item-review-date">${l.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,o)=>`
            <svg class="icon-star ${o<l.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${r}#icon-star"></use>
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
              <use href="${r}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${l.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${r}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${l.id}">
              ${w} Коментарі
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
    `,n.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const o=n.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const o=n.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const s=n.querySelector(".reply-name").value.trim(),o=n.querySelector(".reply-text").value.trim();if(!s||!o)return alert("Введите имя и комментарий");const E=parseInt(n.querySelector(".reply-btn").dataset.id);c.find(b=>b.id===E).comments.push({name:s,text:o,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(c)),d()}),h.appendChild(n)});const t=document.getElementById("showMoreContainer");t.style.display=c.length>m?"flex":"none"}x.onclick=()=>{m+=3,d()};d();
//# sourceMappingURL=commonHelpers7.js.map
