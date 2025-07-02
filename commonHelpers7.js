import"./assets/menu-f265ad14.js";import{A as L}from"./assets/vendor-ef9e0552.js";document.getElementById("container-list-equipment");const u=document.getElementById("list-equipment"),y=document.getElementById("selected-equipment"),I=y.querySelector(".selected-equipment"),p=y.querySelector(".icon-close"),S=document.querySelectorAll(".item-equipment");y.addEventListener("click",e=>{e.stopPropagation(),u.classList.toggle("active"),p.classList.toggle("rotated")});S.forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),I.textContent=e.textContent,u.classList.remove("active"),p.classList.remove("rotated")})});document.addEventListener("click",()=>{u.classList.remove("active"),p.classList.remove("rotated")});new L(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const a=document.getElementById("reviewModal"),q=document.getElementById("openModalBtn"),B=document.getElementById("closeModalBtn"),g=document.getElementById("reviewForm"),f=document.getElementById("reviewsContainer"),x=document.getElementById("showMoreBtn"),v=document.getElementById("starRating"),m=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let i=JSON.parse(localStorage.getItem("reviews"))||[],d=3,c=0;q.onclick=()=>a.style.display="flex";B.onclick=()=>a.style.display="none";window.onclick=e=>{e.target==a&&(a.style.display="none")};v.innerHTML="★".repeat(5).split("").map((e,t)=>`<span data-index="${t}">${e}</span>`).join("");v.addEventListener("click",e=>{e.target.tagName==="SPAN"&&(c=parseInt(e.target.dataset.index)+1,h())});function h(){[...v.children].forEach((e,t)=>e.classList.toggle("selected",t<c))}g.onsubmit=function(e){e.preventDefault();const t=document.getElementById("nameInput").value,s=document.getElementById("commentInput").value;if(c===0){alert("Поставте оцінку");return}const n={id:Date.now(),name:t,comment:s,rating:c,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};i.unshift(n),localStorage.setItem("reviews",JSON.stringify(i)),a.style.display="none",g.reset(),c=0,h(),r()};function r(){f.innerHTML="",i.slice(0,d).forEach(s=>{const n=document.createElement("div");n.className="review";const E=s.comments.length;n.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${s.name}</li>
          <li class="item-review-date">${s.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,o)=>`
            <svg class="icon-star ${o<s.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${m}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${s.comment}</p>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${m}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${s.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${m}#icon-message"></use>
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
        ${s.comments.map(l=>`<ul class="comment">
                <li class="comment-name">${l.name}</li>
                <li class="item-review-date">${s.date}</li>
                <li class="comment-text">${l.text}</li>
              </ul>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,n.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const o=n.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const o=n.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),n.querySelector(".submit-reply").addEventListener("click",()=>{const l=n.querySelector(".reply-name").value.trim(),o=n.querySelector(".reply-text").value.trim();if(!l||!o)return alert("Введите имя и комментарий");const w=parseInt(n.querySelector(".reply-btn").dataset.id);i.find(b=>b.id===w).comments.push({name:l,text:o}),localStorage.setItem("reviews",JSON.stringify(i)),r()}),f.appendChild(n)});const t=document.getElementById("showMoreContainer");t.style.display=i.length>d?"flex":"none"}x.onclick=()=>{d+=3,r()};r();
//# sourceMappingURL=commonHelpers7.js.map
