import"./assets/menu-f265ad14.js";import{A as S}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const m=document.getElementById("list-equipment"),u=document.getElementById("selected-equipment"),b=u.querySelector(".selected-equipment"),y=u.querySelector(".icon-close"),h=document.querySelectorAll(".item-equipment");u.addEventListener("click",e=>{e.stopPropagation(),m.classList.toggle("active"),y.classList.toggle("rotated")});h.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),b.textContent=e.textContent,m.classList.remove("active"),y.classList.remove("rotated")})});document.addEventListener("click",()=>{m.classList.remove("active"),y.classList.remove("rotated")});new S(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const i=document.getElementById("reviewModal"),q=document.getElementById("openModalBtn"),I=document.getElementById("closeModalBtn"),v=document.getElementById("reviewForm"),g=document.getElementById("reviewsContainer"),E=document.getElementById("showMoreBtn"),p=document.getElementById("starRating");let l=JSON.parse(localStorage.getItem("reviews"))||[],d=3,c=0;q.onclick=()=>i.style.display="flex";I.onclick=()=>i.style.display="none";window.onclick=e=>{e.target==i&&(i.style.display="none")};p.innerHTML="★".repeat(5).split("").map((e,t)=>`<span data-index="${t}">${e}</span>`).join("");p.addEventListener("click",e=>{e.target.tagName==="SPAN"&&(c=parseInt(e.target.dataset.index)+1,f())});function f(){[...p.children].forEach((e,t)=>e.classList.toggle("selected",t<c))}v.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,n=document.getElementById("commentInput").value;if(c===0){alert("Поставьте оценку");return}const r={id:Date.now(),name:t,comment:n,rating:c,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};l.unshift(r),localStorage.setItem("reviews",JSON.stringify(l)),i.style.display="none",v.reset(),c=0,f(),a()};function a(){g.innerHTML="",l.slice(0,d).forEach(t=>{const n=document.createElement("div");n.className="review";const r=t.comments.length;n.innerHTML=`
      <ul class="list-review">
        <li class="item-review-name">${t.name}</li>
        <li class="item-review-date">${t.date}</li>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,o)=>`
            <svg class="icon-star ${o<t.rating?"filled":"outlined"}" width="20" height="20">
              <use href="/img/icons.svg#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>
      <p class="text-review-comment">${t.comment}</p>

      <button class="reply-btn" data-id="${t.id}">Відповісти</button>
      <button class="toggle-comments" data-id="${t.id}">Коментарі (${r})</button>

      <div class="comments" style="display: none;">
        ${t.comments.map(s=>`<div class="comment"><strong>${s.name}</strong>: ${s.text}</div>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <input type="text" class="reply-text" placeholder="Ваш коментар" />
        <button class="submit-reply">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const o=n.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const o=n.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const s=n.querySelector(".reply-name").value.trim(),o=n.querySelector(".reply-text").value.trim();if(!s||!o)return alert("Введите имя и комментарий");const w=parseInt(n.querySelector(".reply-btn").dataset.id);l.find(L=>L.id===w).comments.push({name:s,text:o}),localStorage.setItem("reviews",JSON.stringify(l)),a()}),g.appendChild(n)}),E.style.display=l.length>d?"inline-block":"none"}E.onclick=()=>{d+=3,a()};a();
//# sourceMappingURL=commonHelpers7.js.map
