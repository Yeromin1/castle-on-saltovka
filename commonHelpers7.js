import"./assets/menu-f265ad14.js";import{A as S}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const m=document.getElementById("list-equipment"),u=document.getElementById("selected-equipment"),q=u.querySelector(".selected-equipment"),y=u.querySelector(".icon-close"),w=document.querySelectorAll(".item-equipment");u.addEventListener("click",e=>{e.stopPropagation(),m.classList.toggle("active"),y.classList.toggle("rotated")});w.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),q.textContent=e.textContent,m.classList.remove("active"),y.classList.remove("rotated")})});document.addEventListener("click",()=>{m.classList.remove("active"),y.classList.remove("rotated")});new S(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const i=document.getElementById("reviewModal"),I=document.getElementById("openModalBtn"),B=document.getElementById("closeModalBtn"),v=document.getElementById("reviewForm"),g=document.getElementById("reviewsContainer"),f=document.getElementById("showMoreBtn"),p=document.getElementById("starRating");let o=JSON.parse(localStorage.getItem("reviews"))||[],d=3,c=0;I.onclick=()=>i.style.display="flex";B.onclick=()=>i.style.display="none";window.onclick=e=>{e.target==i&&(i.style.display="none")};p.innerHTML="★".repeat(5).split("").map((e,t)=>`<span data-index="${t}">${e}</span>`).join("");p.addEventListener("click",e=>{e.target.tagName==="SPAN"&&(c=parseInt(e.target.dataset.index)+1,E())});function E(){[...p.children].forEach((e,t)=>e.classList.toggle("selected",t<c))}v.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,n=document.getElementById("commentInput").value;if(c===0){alert("Поставьте оценку");return}const r={id:Date.now(),name:t,comment:n,rating:c,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};o.unshift(r),localStorage.setItem("reviews",JSON.stringify(o)),i.style.display="none",v.reset(),c=0,E(),a()};function a(){g.innerHTML="",o.slice(0,d).forEach(t=>{const n=document.createElement("div");n.className="review";const r=t.comments.length;n.innerHTML=`
      <ul class="list-review">
        <li class="item-review-name">${t.name}</li>
        <li class="item-review-date">${t.date}</li>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,l)=>`
            <svg class="icon-star ${l<t.rating?"filled":"outlined"}" width="20" height="20">
              <use href="/img/symbol-defs.svg#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>
      <p>${t.comment}</p>

      <a href="#" class="reply-btn" data-id="${t.id}">Відповісти</a> |
      <a href="#" class="toggle-comments" data-id="${t.id}">Коментарі (${r})</a>

      <div class="comments" style="display: none;">
        ${t.comments.map(s=>`<div class="comment"><strong>${s.name}</strong>: ${s.text}</div>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <input type="text" class="reply-text" placeholder="Ваш коментар" />
        <button class="submit-reply">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const l=n.querySelector(".reply-form");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const l=n.querySelector(".comments");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const s=n.querySelector(".reply-name").value.trim(),l=n.querySelector(".reply-text").value.trim();if(!s||!l)return alert("Введите имя и комментарий");const h=parseInt(n.querySelector(".reply-btn").dataset.id);o.find(L=>L.id===h).comments.push({name:s,text:l}),localStorage.setItem("reviews",JSON.stringify(o)),a()}),g.appendChild(n)}),f.style.display=o.length>d?"inline-block":"none"}f.onclick=()=>{d+=3,a()};a();
//# sourceMappingURL=commonHelpers7.js.map
