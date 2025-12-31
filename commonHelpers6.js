import"./assets/modulepreload-polyfill-3cfb730f.js";import"./assets/menu-c3cd60f7.js";import{S as U,A as B}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-c4848f9b.js";import{p as G}from"./assets/prices-68bf09fc.js";const $=[{id:1,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const o=document.querySelector("a.main-lightbox"),l=document.getElementById("main-picture"),a=l.querySelector("img"),t=l.querySelector("source"),d=document.querySelectorAll("picture.thumbnail");let n=null;function i(){return window.innerWidth<=767}function x(){return $.map(s=>i()?s.mobile["2x"]:s.desktop["2x"])}function g(){const s=x();d.forEach((e,c)=>{e.dataset.full=s[c]})}function p(s=0){let e=document.querySelector(".lightbox-gallery");e?e.innerHTML="":(e=document.createElement("div"),e.classList.add("lightbox-gallery"),e.style.display="none",document.body.appendChild(e));const c=Array.from(d);return c.slice(s).concat(c.slice(0,s)).forEach(m=>{var E;const A=m.dataset.full,j=((E=m.querySelector("img"))==null?void 0:E.alt)||"",v=document.createElement("a");v.href=A,v.setAttribute("data-gallery","gallery"),v.setAttribute("data-title",j),e.appendChild(v)}),e}function k(s=".lightbox-gallery a"){return n&&n.destroy(),n=new U(s,{captionsData:"title",captionDelay:250}),n.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),n.on("close.simplelightbox",()=>{document.body.style.overflow=""}),n}function w(s){g();const e=d[s];if(!e)return;const c=e.querySelector("source"),r=e.querySelector("img");t&&c?(t.srcset=c.srcset,t.media=c.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),a.src=r.src,a.alt=r.alt,o.href=e.dataset.full,d.forEach(m=>m.classList.remove("active")),e.classList.add("active")}d.forEach((s,e)=>{s.addEventListener("click",c=>{if(c.preventDefault(),g(),i()){const r=p(e);k(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}else w(e)})}),o.addEventListener("click",s=>{if(i()){s.preventDefault();return}s.preventDefault();const e=Array.from(d).findIndex(r=>r.classList.contains("active"));g();const c=p(e>=0?e:0);k(".lightbox-gallery a"),setTimeout(()=>{const r=c.querySelectorAll("a");r[0]&&r[0].click()},50)}),w(0),window.addEventListener("resize",()=>{const s=Array.from(d).findIndex(e=>e.classList.contains("active"));w(s>=0?s:0)})});const M=document.querySelectorAll(".div-price");M.forEach(o=>{const l=Number(o.dataset.id),a=G.find(t=>t.id===l);a&&o.insertAdjacentHTML("beforeend",`<p class="price">${a.price} грн.</p>`)});new B(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(l=>l.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(l=>l.classList.remove("active")),o.classList.add("active"),document.getElementById(o.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),D=document.getElementById("openModalBtn"),H=document.getElementById("closeModalBtn"),I=document.getElementById("reviewForm"),R=document.getElementById("reviewsContainer"),O=document.getElementById("showMoreBtn"),L=document.getElementById("starRating"),h=new URL("/castle-on-saltovka/assets/icons-e1d2494d.svg",self.location);let u=JSON.parse(localStorage.getItem("reviews"))||[],S=3,f=0;D.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};H.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=o=>{o.target==y&&(y.style.display="none",document.body.style.overflow="")};L.innerHTML=Array.from({length:5},(o,l)=>`
  <span data-index="${l}">
    <svg class="icon-star" width="20" height="20">
      <use href="${h}#icon-star"></use>
    </svg>
  </span>
`).join("");L.addEventListener("click",o=>{const l=o.target.closest("span");l&&(f=parseInt(l.dataset.index)+1,q())});function q(){[...L.children].forEach((o,l)=>{o.classList.toggle("selected",l<f)})}I.onsubmit=function(o){o.preventDefault();const l=document.getElementById("nameInput").value,a=document.getElementById("commentInput").value;if(f===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:l,comment:a,rating:f,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};u.unshift(t),localStorage.setItem("reviews",JSON.stringify(u)),y.style.display="none",document.body.style.overflow="",I.reset(),f=0,q(),b()};function b(){R.innerHTML="",u.slice(0,S).forEach(a=>{const t=document.createElement("div");t.className="review";const d=a.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${a.name}</li>
          <li class="item-review-date">${a.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(n,i)=>`
            <svg class="icon-star ${i<a.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${h}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${a.comment}</p>
        <button class="more">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${h}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${a.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${h}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${a.id}">
              ${d} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${a.comments.map(n=>`
          <ul class="comment">
            <li class="comment-name">${n.name}</li>
            <li class="item-review-date">${n.date}</li>
            <li class="comment-text">${n.text}</li>
          </ul>
        `).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар"></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,t.querySelector(".reply-btn").addEventListener("click",n=>{n.preventDefault();const i=t.querySelector(".reply-form");i.style.display=i.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",n=>{n.preventDefault();const i=t.querySelector(".comments");i.style.display=i.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const n=t.querySelector(".reply-name").value.trim(),i=t.querySelector(".reply-text").value.trim();if(!n||!i)return alert("Введіть ім`я та коментар");const x=parseInt(t.querySelector(".reply-btn").dataset.id);u.find(p=>p.id===x).comments.push({name:n,text:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(u)),b()}),R.appendChild(t)});const l=document.getElementById("showMoreContainer");l.style.display=u.length>S?"flex":"none"}O.onclick=()=>{S+=3,b()};b();
//# sourceMappingURL=commonHelpers6.js.map
