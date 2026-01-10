import"./assets/loader-576bd17f.js";import"./assets/menu-18f35432.js";import{S as j,A as B}from"./assets/vendor-8163a847.js";import"./assets/select-filter-c4848f9b.js";import"./assets/prices-a076d57a.js";const G=[{id:1,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const n=document.querySelector("a.main-lightbox"),s=document.getElementById("main-picture"),i=s.querySelector("img"),t=s.querySelector("source"),d=document.querySelectorAll("picture.thumbnail");let l=null;function a(){return window.innerWidth<=767}function x(){return G.map(o=>a()?o.mobile["2x"]:o.desktop["2x"])}function g(){const o=x();d.forEach((e,c)=>{e.dataset.full=o[c]})}function p(o=0){let e=document.querySelector(".lightbox-gallery");e?e.innerHTML="":(e=document.createElement("div"),e.classList.add("lightbox-gallery"),e.style.display="none",document.body.appendChild(e));const c=Array.from(d);return c.slice(o).concat(c.slice(0,o)).forEach(m=>{var E;const A=m.dataset.full,U=((E=m.querySelector("img"))==null?void 0:E.alt)||"",v=document.createElement("a");v.href=A,v.setAttribute("data-gallery","gallery"),v.setAttribute("data-title",U),e.appendChild(v)}),e}function k(o=".lightbox-gallery a"){return l&&l.destroy(),l=new j(o,{captionsData:"title",captionDelay:250}),l.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),l.on("close.simplelightbox",()=>{document.body.style.overflow=""}),l}function w(o){g();const e=d[o];if(!e)return;const c=e.querySelector("source"),r=e.querySelector("img");t&&c?(t.srcset=c.srcset,t.media=c.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),i.src=r.src,i.alt=r.alt,n.href=e.dataset.full,d.forEach(m=>m.classList.remove("active")),e.classList.add("active")}d.forEach((o,e)=>{o.addEventListener("click",c=>{if(c.preventDefault(),g(),a()){const r=p(e);k(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}else w(e)})}),n.addEventListener("click",o=>{if(a()){o.preventDefault();return}o.preventDefault();const e=Array.from(d).findIndex(r=>r.classList.contains("active"));g();const c=p(e>=0?e:0);k(".lightbox-gallery a"),setTimeout(()=>{const r=c.querySelectorAll("a");r[0]&&r[0].click()},50)}),w(0),window.addEventListener("resize",()=>{const o=Array.from(d).findIndex(e=>e.classList.contains("active"));w(o>=0?o:0)})});new B(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(s=>s.classList.remove("active")),n.classList.add("active"),document.getElementById(n.dataset.tab).classList.add("active")})});const y=document.getElementById("reviewModal"),$=document.getElementById("openModalBtn"),M=document.getElementById("closeModalBtn"),I=document.getElementById("reviewForm"),R=document.getElementById("reviewsContainer"),D=document.getElementById("showMoreBtn"),L=document.getElementById("starRating"),h=new URL("/castle-on-saltovka/assets/icons-e1d2494d.svg",self.location);let u=JSON.parse(localStorage.getItem("reviews"))||[],S=3,f=0;$.onclick=()=>{y.style.display="flex",document.body.style.overflow="hidden"};M.onclick=()=>{y.style.display="none",document.body.style.overflow=""};window.onclick=n=>{n.target==y&&(y.style.display="none",document.body.style.overflow="")};L.innerHTML=Array.from({length:5},(n,s)=>`
  <span data-index="${s}">
    <svg class="icon-star" width="20" height="20">
      <use href="${h}#icon-star"></use>
    </svg>
  </span>
`).join("");L.addEventListener("click",n=>{const s=n.target.closest("span");s&&(f=parseInt(s.dataset.index)+1,q())});function q(){[...L.children].forEach((n,s)=>{n.classList.toggle("selected",s<f)})}I.onsubmit=function(n){n.preventDefault();const s=document.getElementById("nameInput").value,i=document.getElementById("commentInput").value;if(f===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:s,comment:i,rating:f,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};u.unshift(t),localStorage.setItem("reviews",JSON.stringify(u)),y.style.display="none",document.body.style.overflow="",I.reset(),f=0,q(),b()};function b(){R.innerHTML="",u.slice(0,S).forEach(i=>{const t=document.createElement("div");t.className="review";const d=i.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${i.name}</li>
          <li class="item-review-date">${i.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,a)=>`
            <svg class="icon-star ${a<i.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${h}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${i.comment}</p>
        <button class="more">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${h}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${i.id}">Відповісти</button>
          </li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${h}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${i.id}">
              ${d} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${i.comments.map(l=>`
          <ul class="comment">
            <li class="comment-name">${l.name}</li>
            <li class="item-review-date">${l.date}</li>
            <li class="comment-text">${l.text}</li>
          </ul>
        `).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар"></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,t.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const a=t.querySelector(".reply-form");a.style.display=a.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const a=t.querySelector(".comments");a.style.display=a.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const l=t.querySelector(".reply-name").value.trim(),a=t.querySelector(".reply-text").value.trim();if(!l||!a)return alert("Введіть ім`я та коментар");const x=parseInt(t.querySelector(".reply-btn").dataset.id);u.find(p=>p.id===x).comments.push({name:l,text:a,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(u)),b()}),R.appendChild(t)});const s=document.getElementById("showMoreContainer");s.style.display=u.length>S?"flex":"none"}D.onclick=()=>{S+=3,b()};b();
//# sourceMappingURL=commonHelpers6.js.map
