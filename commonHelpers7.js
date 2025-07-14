import"./assets/menu-f265ad14.js";import{S as B,A as $}from"./assets/vendor-f7826fb8.js";window.addEventListener("load",()=>{const n=document.querySelector("a.main-lightbox"),t=document.getElementById("main-picture"),o=t.querySelector("img"),e=t.querySelector("source"),r=document.querySelectorAll("picture.thumbnail"),l=document.querySelector(".lightbox-gallery");let s;function h(i){const a=Array.from(r),c=[...a.slice(i),...a.slice(0,i)];l.innerHTML="",c.forEach(d=>{var E;const b=d.dataset.full,q=((E=d.querySelector("img"))==null?void 0:E.alt)||"",g=document.createElement("a");g.href=b,g.setAttribute("data-gallery","gallery"),g.setAttribute("data-title",q),l.appendChild(g)}),s&&s.destroy(),s=new B('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function f(i){const a=r[i];if(!a)return;const c=a.querySelector("source"),d=a.querySelector("img");e&&c?(e.srcset=c.srcset,e.media=c.media):e&&(e.removeAttribute("srcset"),e.removeAttribute("media")),o.src=d.src,o.alt=d.alt,n.href=a.dataset.full,r.forEach(b=>b.classList.remove("active")),a.classList.add("active"),h(i)}r.forEach((i,a)=>{i.addEventListener("click",c=>{c.preventDefault(),f(a)})}),f(0)});new $(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(t=>t.classList.remove("active")),n.classList.add("active"),document.getElementById(n.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),k=document.getElementById("openModalBtn"),A=document.getElementById("closeModalBtn"),L=document.getElementById("reviewForm"),I=document.getElementById("reviewsContainer"),M=document.getElementById("showMoreBtn"),S=document.getElementById("starRating"),v=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let m=JSON.parse(localStorage.getItem("reviews"))||[],w=3,u=0;k.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};A.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=n=>{n.target==y&&(y.style.display="none",document.body.style.overflow="")};S.innerHTML=Array.from({length:5},(n,t)=>`
  <span data-index="${t}">
    <svg class="icon-star" width="20" height="20">
      <use href="${v}#icon-star"></use>
    </svg>
  </span>
`).join("");S.addEventListener("click",n=>{const t=n.target.closest("span");t&&(u=parseInt(t.dataset.index)+1,x())});function x(){[...S.children].forEach((n,t)=>{n.classList.toggle("selected",t<u)})}L.onsubmit=function(n){n.preventDefault();const t=document.getElementById("nameInput").value,o=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const e={id:Date.now(),name:t,comment:o,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};m.unshift(e),localStorage.setItem("reviews",JSON.stringify(m)),y.style.display="none",document.body.style.overflow="",L.reset(),u=0,x(),p()};function p(){I.innerHTML="",m.slice(0,w).forEach(o=>{const e=document.createElement("div");e.className="review";const r=o.comments.length;e.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${o.name}</li>
          <li class="item-review-date">${o.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,s)=>`
            <svg class="icon-star ${s<o.rating?"filled":"outlined"}" width="20" height="20">
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
        ${o.comments.map(l=>`<ul class="comment">
                <li class="comment-name">${l.name}</li>
                <li class="item-review-date">${l.date}</li>
                <li class="comment-text">${l.text}</li>
              </ul>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,e.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const s=e.querySelector(".reply-form");s.style.display=s.style.display==="none"?"block":"none"}),e.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const s=e.querySelector(".comments");s.style.display=s.style.display==="none"?"block":"none"}),e.querySelector(".submit-reply").addEventListener("click",()=>{const l=e.querySelector(".reply-name").value.trim(),s=e.querySelector(".reply-text").value.trim();if(!l||!s)return alert("Введите имя и комментарий");const h=parseInt(e.querySelector(".reply-btn").dataset.id);m.find(i=>i.id===h).comments.push({name:l,text:s,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(m)),p()}),I.appendChild(e)});const t=document.getElementById("showMoreContainer");t.style.display=m.length>w?"flex":"none"}M.onclick=()=>{w+=3,p()};p();
//# sourceMappingURL=commonHelpers7.js.map
