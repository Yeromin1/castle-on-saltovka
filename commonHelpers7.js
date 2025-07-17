import"./assets/menu-f265ad14.js";import{S as M,A as D}from"./assets/vendor-f7826fb8.js";window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),n=document.getElementById("main-picture"),o=n.querySelector("img"),t=n.querySelector("source"),r=document.querySelectorAll("picture.thumbnail");let l;const s=["https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg","../../../img/pages/home/popular/mobile/GoldenSoft2Hotel@2x.jpg","/img/pages/home/popular/mobile/GoldenSoft2Office@2x.jpg","/img/pages/home/popular/mobile/GoldenSoftHotel@2x.jpg"];r.forEach((a,i)=>{a.dataset.full=s[i]});function f(a){const i=Array.from(r),m=[...i.slice(a),...i.slice(0,a)];let c=document.querySelector(".lightbox-gallery");c?c.innerHTML="":(c=document.createElement("div"),c.classList.add("lightbox-gallery"),c.hidden=!0,document.body.appendChild(c)),m.forEach(g=>{var x;const $=g.dataset.full,A=((x=g.querySelector("img"))==null?void 0:x.alt)||"",p=document.createElement("a");p.href=$,p.setAttribute("data-gallery","gallery"),p.setAttribute("data-title",A),c.appendChild(p)}),l&&l.destroy(),l=new M('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function b(a){const i=r[a];if(!i)return;const m=i.querySelector("source"),c=i.querySelector("img");t&&m?(t.srcset=m.srcset,t.media=m.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),o.src=c.src,o.alt=c.alt,e.href=i.dataset.full,r.forEach(g=>g.classList.remove("active")),i.classList.add("active"),f(a)}r.forEach((a,i)=>{a.addEventListener("click",m=>{m.preventDefault(),b(i)})}),b(0)});const w=document.getElementById("list-equipment"),S=document.getElementById("selected-equipment"),C=S.querySelector(".selected-equipment "),L=S.querySelector(".icon-close"),j=document.querySelectorAll(".item-equipment");S.addEventListener("click",e=>{e.stopPropagation(),w.classList.toggle("active"),L.classList.toggle("rotated")});j.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),C.textContent=e.textContent,w.classList.remove("active"),L.classList.remove("rotated")})});document.addEventListener("click",()=>{w.classList.remove("active"),L.classList.remove("rotated")});new D(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(n=>n.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),R=document.getElementById("openModalBtn"),H=document.getElementById("closeModalBtn"),I=document.getElementById("reviewForm"),B=document.getElementById("reviewsContainer"),G=document.getElementById("showMoreBtn"),q=document.getElementById("starRating"),v=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let d=JSON.parse(localStorage.getItem("reviews"))||[],E=3,u=0;R.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};H.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==y&&(y.style.display="none",document.body.style.overflow="")};q.innerHTML=Array.from({length:5},(e,n)=>`
  <span data-index="${n}">
    <svg class="icon-star" width="20" height="20">
      <use href="${v}#icon-star"></use>
    </svg>
  </span>
`).join("");q.addEventListener("click",e=>{const n=e.target.closest("span");n&&(u=parseInt(n.dataset.index)+1,k())});function k(){[...q.children].forEach((e,n)=>{e.classList.toggle("selected",n<u)})}I.onsubmit=function(e){e.preventDefault();const n=document.getElementById("nameInput").value,o=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:n,comment:o,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};d.unshift(t),localStorage.setItem("reviews",JSON.stringify(d)),y.style.display="none",document.body.style.overflow="",I.reset(),u=0,k(),h()};function h(){B.innerHTML="",d.slice(0,E).forEach(o=>{const t=document.createElement("div");t.className="review";const r=o.comments.length;t.innerHTML=`
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
    `,t.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const s=t.querySelector(".reply-form");s.style.display=s.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const s=t.querySelector(".comments");s.style.display=s.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const l=t.querySelector(".reply-name").value.trim(),s=t.querySelector(".reply-text").value.trim();if(!l||!s)return alert("Введите имя и комментарий");const f=parseInt(t.querySelector(".reply-btn").dataset.id);d.find(a=>a.id===f).comments.push({name:l,text:s,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(d)),h()}),B.appendChild(t)});const n=document.getElementById("showMoreContainer");n.style.display=d.length>E?"flex":"none"}G.onclick=()=>{E+=3,h()};h();
//# sourceMappingURL=commonHelpers7.js.map
