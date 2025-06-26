import"./assets/menu-f265ad14.js";import{A as q}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const m=document.getElementById("list-equipment"),u=document.getElementById("selected-equipment"),I=u.querySelector(".selected-equipment"),p=u.querySelector(".icon-close"),w=document.querySelectorAll(".item-equipment");u.addEventListener("click",t=>{t.stopPropagation(),m.classList.toggle("active"),p.classList.toggle("rotated")});w.forEach(t=>{t.addEventListener("click",e=>{e.stopPropagation(),I.textContent=t.textContent,m.classList.remove("active"),p.classList.remove("rotated")})});document.addEventListener("click",()=>{m.classList.remove("active"),p.classList.remove("rotated")});new q(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(e=>e.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.tab).classList.add("active")})});const a=document.getElementById("reviewModal"),B=document.getElementById("openModalBtn"),h=document.getElementById("closeModalBtn"),v=document.getElementById("reviewForm"),g=document.getElementById("reviewsContainer"),E=document.getElementById("showMoreBtn"),y=document.getElementById("starRating");let o=JSON.parse(localStorage.getItem("reviews"))||[],d=3,c=0;B.onclick=()=>a.style.display="flex";h.onclick=()=>a.style.display="none";window.onclick=t=>{t.target==a&&(a.style.display="none")};y.innerHTML="★".repeat(5).split("").map((t,e)=>`<span data-index="${e}">${t}</span>`).join("");y.addEventListener("click",t=>{t.target.tagName==="SPAN"&&(c=parseInt(t.target.dataset.index)+1,f())});function f(){[...y.children].forEach((t,e)=>t.classList.toggle("selected",e<c))}v.onsubmit=function(t){t.preventDefault();const e=document.getElementById("nameInput").value,n=document.getElementById("commentInput").value;if(c===0){alert("Поставьте оценку");return}const r={id:Date.now(),name:e,comment:n,rating:c,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};o.unshift(r),localStorage.setItem("reviews",JSON.stringify(o)),a.style.display="none",v.reset(),c=0,f(),i()};function i(){g.innerHTML="",o.slice(0,d).forEach(e=>{const n=document.createElement("div");n.className="review";const r=e.comments.length;n.innerHTML=`
      <ul class="list-review">
        <li class="item-review-name">${e.name}</li>
        <li class="item-review-date">${e.date}</li>
        <li class="item-stars-view">${"★".repeat(e.rating)}${"☆".repeat(5-e.rating)}</li>
      </ul>
      <p>${e.comment}</p>

      <a href="#" class="reply-btn" data-id="${e.id}">Відповісти</a> |
      <a href="#" class="toggle-comments" data-id="${e.id}">Коментарі (${r})</a>

      <div class="comments" style="display: none;">
        ${e.comments.map(s=>`<div class="comment"><strong>${s.name}</strong>: ${s.text}</div>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <input type="text" class="reply-text" placeholder="Ваш коментар" />
        <button class="submit-reply">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const l=n.querySelector(".reply-form");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const l=n.querySelector(".comments");l.style.display=l.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const s=n.querySelector(".reply-name").value.trim(),l=n.querySelector(".reply-text").value.trim();if(!s||!l)return alert("Введите имя и комментарий");const L=parseInt(n.querySelector(".reply-btn").dataset.id);o.find(S=>S.id===L).comments.push({name:s,text:l}),localStorage.setItem("reviews",JSON.stringify(o)),i()}),g.appendChild(n)}),E.style.display=o.length>d?"inline-block":"none"}E.onclick=()=>{d+=3,i()};i();
//# sourceMappingURL=commonHelpers7.js.map
