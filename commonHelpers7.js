import"./assets/menu-f265ad14.js";import{S as A,A as M}from"./assets/vendor-f7826fb8.js";const E=document.getElementById("list-equipment"),S=document.getElementById("selected-equipment"),D=S.querySelector(".selected-equipment "),L=S.querySelector(".icon-close"),C=document.querySelectorAll(".item-equipment");S.addEventListener("click",e=>{e.stopPropagation(),E.classList.toggle("active"),L.classList.toggle("rotated")});C.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),D.textContent=e.textContent,E.classList.remove("active"),L.classList.remove("rotated")})});document.addEventListener("click",()=>{E.classList.remove("active"),L.classList.remove("rotated")});window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),n=document.getElementById("main-picture"),o=n.querySelector("img"),t=n.querySelector("source"),r=document.querySelectorAll("picture.thumbnail"),s=document.querySelector(".lightbox-gallery");let l;function h(i){const c=Array.from(r),a=[...c.slice(i),...c.slice(0,i)];s.innerHTML="",a.forEach(d=>{var I;const b=d.dataset.full,$=((I=d.querySelector("img"))==null?void 0:I.alt)||"",g=document.createElement("a");g.href=b,g.setAttribute("data-gallery","gallery"),g.setAttribute("data-title",$),s.appendChild(g)}),l&&l.destroy(),l=new A('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function f(i){const c=r[i];if(!c)return;const a=c.querySelector("source"),d=c.querySelector("img");t&&a?(t.srcset=a.srcset,t.media=a.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),o.src=d.src,o.alt=d.alt,e.href=c.dataset.full,r.forEach(b=>b.classList.remove("active")),c.classList.add("active"),h(i)}r.forEach((i,c)=>{i.addEventListener("click",a=>{a.preventDefault(),f(c)})}),f(0)});new M(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(n=>n.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),R=document.getElementById("openModalBtn"),T=document.getElementById("closeModalBtn"),x=document.getElementById("reviewForm"),B=document.getElementById("reviewsContainer"),H=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),v=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let m=JSON.parse(localStorage.getItem("reviews"))||[],w=3,u=0;R.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};T.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==y&&(y.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(e,n)=>`
  <span data-index="${n}">
    <svg class="icon-star" width="20" height="20">
      <use href="${v}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",e=>{const n=e.target.closest("span");n&&(u=parseInt(n.dataset.index)+1,k())});function k(){[...q.children].forEach((e,n)=>{e.classList.toggle("selected",n<u)})}x.onsubmit=function(e){e.preventDefault();const n=document.getElementById("nameInput").value,o=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:n,comment:o,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};m.unshift(t),localStorage.setItem("reviews",JSON.stringify(m)),y.style.display="none",document.body.style.overflow="",x.reset(),u=0,k(),p()};function p(){B.innerHTML="",m.slice(0,w).forEach(o=>{const t=document.createElement("div");t.className="review";const r=o.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${o.name}</li>
          <li class="item-review-date">${o.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(s,l)=>`
            <svg class="icon-star ${l<o.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${v}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${o.comment}</p>
        <button class="">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${v}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${o.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${v}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${o.id}">
              ${r} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${o.comments.map(s=>`<ul class="comment">
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
    `,t.querySelector(".reply-btn").addEventListener("click",s=>{s.preventDefault();const l=t.querySelector(".reply-form");l.style.display=l.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",s=>{s.preventDefault();const l=t.querySelector(".comments");l.style.display=l.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const s=t.querySelector(".reply-name").value.trim(),l=t.querySelector(".reply-text").value.trim();if(!s||!l)return alert("Введите имя и комментарий");const h=parseInt(t.querySelector(".reply-btn").dataset.id);m.find(i=>i.id===h).comments.push({name:s,text:l,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(m)),p()}),B.appendChild(t)});const n=document.getElementById("showMoreContainer");n.style.display=m.length>w?"flex":"none"}H.onclick=()=>{w+=3,p()};p();
//# sourceMappingURL=commonHelpers7.js.map
