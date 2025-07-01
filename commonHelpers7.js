import"./assets/menu-f265ad14.js";import{A as b}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const d=document.getElementById("list-equipment"),u=document.getElementById("selected-equipment"),L=u.querySelector(".selected-equipment"),y=u.querySelector(".icon-close"),S=document.querySelectorAll(".item-equipment");u.addEventListener("click",e=>{e.stopPropagation(),d.classList.toggle("active"),y.classList.toggle("rotated")});S.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),L.textContent=e.textContent,d.classList.remove("active"),y.classList.remove("rotated")})});document.addEventListener("click",()=>{d.classList.remove("active"),y.classList.remove("rotated")});new b(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const c=document.getElementById("reviewModal"),q=document.getElementById("openModalBtn"),I=document.getElementById("closeModalBtn"),v=document.getElementById("reviewForm"),g=document.getElementById("reviewsContainer"),E=document.getElementById("showMoreBtn"),p=document.getElementById("starRating");let i=JSON.parse(localStorage.getItem("reviews"))||[],m=3,o=0;q.onclick=()=>c.style.display="flex";I.onclick=()=>c.style.display="none";window.onclick=e=>{e.target==c&&(c.style.display="none")};p.innerHTML="★".repeat(5).split("").map((e,t)=>`<span data-index="${t}">${e}</span>`).join("");p.addEventListener("click",e=>{e.target.tagName==="SPAN"&&(o=parseInt(e.target.dataset.index)+1,f())});function f(){[...p.children].forEach((e,t)=>e.classList.toggle("selected",t<o))}v.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,n=document.getElementById("commentInput").value;if(o===0){alert("Поставте оцінку");return}const r={id:Date.now(),name:t,comment:n,rating:o,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};i.unshift(r),localStorage.setItem("reviews",JSON.stringify(i)),c.style.display="none",v.reset(),o=0,f(),a()};function a(){g.innerHTML="",i.slice(0,m).forEach(t=>{const n=document.createElement("div");n.className="review";const r=t.comments.length;n.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${t.name}</li>
          <li class="item-review-date">${t.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,l)=>`
            <svg class="icon-star ${l<t.rating?"filled":"outlined"}" width="20" height="20">
              <use href="/img/icons.svg#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${t.comment}</p>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="/img/icons.svg#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${t.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="/img/icons.svg#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${t.id}">
              ${r} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${t.comments.map(s=>`<div class="comment">${s.name} ${s.text}</div>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <input type="text" class="reply-text" placeholder="Ваш коментар" />
        <button class="submit-reply">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const l=n.querySelector(".reply-form");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const l=n.querySelector(".comments");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const s=n.querySelector(".reply-name").value.trim(),l=n.querySelector(".reply-text").value.trim();if(!s||!l)return alert("Введите имя и комментарий");const h=parseInt(n.querySelector(".reply-btn").dataset.id);i.find(w=>w.id===h).comments.push({name:s,text:l}),localStorage.setItem("reviews",JSON.stringify(i)),a()}),g.appendChild(n)}),E.style.display=i.length>m?"inline-block":"none"}E.onclick=()=>{m+=3,a()};a();
//# sourceMappingURL=commonHelpers7.js.map
