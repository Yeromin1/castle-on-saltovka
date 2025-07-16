import"./assets/menu-f265ad14.js";import{S as A,A as M}from"./assets/vendor-f7826fb8.js";window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),n=document.getElementById("main-picture"),s=n.querySelector("img"),t=n.querySelector("source"),d=document.querySelectorAll("picture.thumbnail");document.querySelector(".lightbox-gallery");let l;function o(a){const c=Array.from(d),r=[...c.slice(a),...c.slice(0,a)];let i=document.querySelector(".lightbox-gallery");i?i.innerHTML="":(i=document.createElement("div"),i.classList.add("lightbox-gallery"),i.hidden=!0,document.body.appendChild(i)),r.forEach(v=>{var q;const k=v.dataset.full,$=((q=v.querySelector("img"))==null?void 0:q.alt)||"",p=document.createElement("a");p.href=k,p.setAttribute("data-gallery","gallery"),p.setAttribute("data-title",$),i.appendChild(p)}),l&&l.destroy(),l=new A('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function g(a){const c=d[a];if(!c)return;const r=c.querySelector("source"),i=c.querySelector("img");t&&r?(t.srcset=r.srcset,t.media=r.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),s.src=i.src,s.alt=i.alt,e.href=c.dataset.full,d.forEach(v=>v.classList.remove("active")),c.classList.add("active"),o(a)}d.forEach((a,c)=>{a.addEventListener("click",r=>{r.preventDefault(),g(c)})}),g(0)});const w=document.getElementById("list-equipment"),E=document.getElementById("selected-equipment"),D=E.querySelector(".selected-equipment "),S=E.querySelector(".icon-close"),C=document.querySelectorAll(".item-equipment");E.addEventListener("click",e=>{e.stopPropagation(),w.classList.toggle("active"),S.classList.toggle("rotated")});C.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),D.textContent=e.textContent,w.classList.remove("active"),S.classList.remove("rotated")})});document.addEventListener("click",()=>{w.classList.remove("active"),S.classList.remove("rotated")});new M(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(n=>n.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),R=document.getElementById("openModalBtn"),T=document.getElementById("closeModalBtn"),x=document.getElementById("reviewForm"),I=document.getElementById("reviewsContainer"),H=document.getElementById("showMoreBtn"),L=document.getElementById("starRating"),h=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let m=JSON.parse(localStorage.getItem("reviews"))||[],b=3,u=0;R.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};T.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==y&&(y.style.display="none",document.body.style.overflow="")};L.innerHTML=Array.from({length:5},(e,n)=>`
  <span data-index="${n}">
    <svg class="icon-star" width="20" height="20">
      <use href="${h}#icon-star"></use>
    </svg>
  </span>
`).join("");L.addEventListener("click",e=>{const n=e.target.closest("span");n&&(u=parseInt(n.dataset.index)+1,B())});function B(){[...L.children].forEach((e,n)=>{e.classList.toggle("selected",n<u)})}x.onsubmit=function(e){e.preventDefault();const n=document.getElementById("nameInput").value,s=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:n,comment:s,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};m.unshift(t),localStorage.setItem("reviews",JSON.stringify(m)),y.style.display="none",document.body.style.overflow="",x.reset(),u=0,B(),f()};function f(){I.innerHTML="",m.slice(0,b).forEach(s=>{const t=document.createElement("div");t.className="review";const d=s.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${s.name}</li>
          <li class="item-review-date">${s.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,o)=>`
            <svg class="icon-star ${o<s.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${h}#icon-star"></use>
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
              <use href="${h}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${s.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${h}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${s.id}">
              ${d} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${s.comments.map(l=>`<ul class="comment">
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
    `,t.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const o=t.querySelector(".reply-form");o.style.display=o.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const o=t.querySelector(".comments");o.style.display=o.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const l=t.querySelector(".reply-name").value.trim(),o=t.querySelector(".reply-text").value.trim();if(!l||!o)return alert("Введите имя и комментарий");const g=parseInt(t.querySelector(".reply-btn").dataset.id);m.find(c=>c.id===g).comments.push({name:l,text:o,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(m)),f()}),I.appendChild(t)});const n=document.getElementById("showMoreContainer");n.style.display=m.length>b?"flex":"none"}H.onclick=()=>{b+=3,f()};f();
//# sourceMappingURL=commonHelpers7.js.map
