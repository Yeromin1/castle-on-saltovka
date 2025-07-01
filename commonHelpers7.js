import"./assets/menu-f265ad14.js";import{A as b}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const d=document.getElementById("list-equipment"),u=document.getElementById("selected-equipment"),L=u.querySelector(".selected-equipment"),y=u.querySelector(".icon-close"),S=document.querySelectorAll(".item-equipment");u.addEventListener("click",e=>{e.stopPropagation(),d.classList.toggle("active"),y.classList.toggle("rotated")});S.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),L.textContent=e.textContent,d.classList.remove("active"),y.classList.remove("rotated")})});document.addEventListener("click",()=>{d.classList.remove("active"),y.classList.remove("rotated")});new b(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const a=document.getElementById("reviewModal"),q=document.getElementById("openModalBtn"),I=document.getElementById("closeModalBtn"),v=document.getElementById("reviewForm"),g=document.getElementById("reviewsContainer"),B=document.getElementById("showMoreBtn"),p=document.getElementById("starRating");let i=JSON.parse(localStorage.getItem("reviews"))||[],m=3,c=0;q.onclick=()=>a.style.display="flex";I.onclick=()=>a.style.display="none";window.onclick=e=>{e.target==a&&(a.style.display="none")};p.innerHTML="★".repeat(5).split("").map((e,t)=>`<span data-index="${t}">${e}</span>`).join("");p.addEventListener("click",e=>{e.target.tagName==="SPAN"&&(c=parseInt(e.target.dataset.index)+1,h())});function h(){[...p.children].forEach((e,t)=>e.classList.toggle("selected",t<c))}v.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,s=document.getElementById("commentInput").value;if(c===0){alert("Поставте оцінку");return}const n={id:Date.now(),name:t,comment:s,rating:c,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};i.unshift(n),localStorage.setItem("reviews",JSON.stringify(i)),a.style.display="none",v.reset(),c=0,h(),r()};function r(){g.innerHTML="",i.slice(0,m).forEach(s=>{const n=document.createElement("div");n.className="review";const E=s.comments.length;n.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${s.name}</li>
          <li class="item-review-date">${s.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,o)=>`
            <svg class="icon-star ${o<s.rating?"filled":"outlined"}" width="20" height="20">
              <use href="/castle-on-saltovka/img/icons.svg#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${s.comment}</p>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="/img/icons.svg#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${s.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="/img/icons.svg#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${s.id}">
              ${E} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${s.comments.map(l=>`<div class="comment">${l.name} ${l.text}</div>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const o=n.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const o=n.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const l=n.querySelector(".reply-name").value.trim(),o=n.querySelector(".reply-text").value.trim();if(!l||!o)return alert("Введите имя и комментарий");const f=parseInt(n.querySelector(".reply-btn").dataset.id);i.find(w=>w.id===f).comments.push({name:l,text:o}),localStorage.setItem("reviews",JSON.stringify(i)),r()}),g.appendChild(n)});const t=document.getElementById("showMoreContainer");t.style.display=i.length>m?"flex":"none"}B.onclick=()=>{m+=3,r()};r();
//# sourceMappingURL=commonHelpers7.js.map
