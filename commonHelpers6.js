import"./assets/menu-f265ad14.js";import{S as q,A}from"./assets/vendor-f7826fb8.js";import"./assets/select-filter-46a13389.js";const B=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const n=document.querySelector("a.main-lightbox"),s=document.getElementById("main-picture"),c=s.querySelector("img"),t=s.querySelector("source"),d=document.querySelectorAll("picture.thumbnail");let l=null;function a(){return window.innerWidth<=767}function b(){return B.map(o=>a()?o.mobile["2x"]:o.desktop["2x"])}function y(){const o=b();d.forEach((e,i)=>{e.dataset.full=o[i]})}function p(o=0){let e=document.querySelector(".lightbox-gallery");e?e.innerHTML="":(e=document.createElement("div"),e.classList.add("lightbox-gallery"),e.style.display="none",document.body.appendChild(e));const i=Array.from(d);return i.slice(o).concat(i.slice(0,o)).forEach(f=>{var G;const U=f.dataset.full,j=((G=f.querySelector("img"))==null?void 0:G.alt)||"",v=document.createElement("a");v.href=U,v.setAttribute("data-gallery","gallery"),v.setAttribute("data-title",j),e.appendChild(v)}),e}function k(o=".lightbox-gallery a"){return l&&l.destroy(),l=new q(o,{captionsData:"title",captionDelay:250}),l.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),l.on("close.simplelightbox",()=>{document.body.style.overflow=""}),l}function S(o){y();const e=d[o];if(!e)return;const i=e.querySelector("source"),r=e.querySelector("img");t&&i?(t.srcset=i.srcset,t.media=i.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),c.src=r.src,c.alt=r.alt,n.href=e.dataset.full,d.forEach(f=>f.classList.remove("active")),e.classList.add("active")}d.forEach((o,e)=>{o.addEventListener("click",i=>{if(i.preventDefault(),y(),a()){const r=p(e);k(".lightbox-gallery a"),setTimeout(()=>{const f=r.querySelectorAll("a");f[0]&&f[0].click()},50)}else S(e)})}),n.addEventListener("click",o=>{if(a()){o.preventDefault();return}o.preventDefault();const e=Array.from(d).findIndex(r=>r.classList.contains("active"));y();const i=p(e>=0?e:0);k(".lightbox-gallery a"),setTimeout(()=>{const r=i.querySelectorAll("a");r[0]&&r[0].click()},50)}),S(0),window.addEventListener("resize",()=>{const o=Array.from(d).findIndex(e=>e.classList.contains("active"));S(o>=0?o:0)})});new A(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(s=>s.classList.remove("active")),n.classList.add("active"),document.getElementById(n.dataset.tab).classList.add("active")})});const g=document.getElementById("reviewModal"),$=document.getElementById("openModalBtn"),H=document.getElementById("closeModalBtn"),E=document.getElementById("reviewForm"),R=document.getElementById("reviewsContainer"),M=document.getElementById("showMoreBtn"),L=document.getElementById("starRating"),x=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let m=JSON.parse(localStorage.getItem("reviews"))||[],w=3,u=0;$.onclick=()=>{g.style.display="flex",document.body.style.overflow="hidden"};H.onclick=()=>{g.style.display="none",document.body.style.overflow=""};window.onclick=n=>{n.target==g&&(g.style.display="none",document.body.style.overflow="")};L.innerHTML=Array.from({length:5},(n,s)=>`
  <span data-index="${s}">
    <svg class="icon-star" width="20" height="20">
      <use href="${x}#icon-star"></use>
    </svg>
  </span>
`).join("");L.addEventListener("click",n=>{const s=n.target.closest("span");s&&(u=parseInt(s.dataset.index)+1,I())});function I(){[...L.children].forEach((n,s)=>{n.classList.toggle("selected",s<u)})}E.onsubmit=function(n){n.preventDefault();const s=document.getElementById("nameInput").value,c=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:s,comment:c,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};m.unshift(t),localStorage.setItem("reviews",JSON.stringify(m)),g.style.display="none",document.body.style.overflow="",E.reset(),u=0,I(),h()};function h(){R.innerHTML="",m.slice(0,w).forEach(c=>{const t=document.createElement("div");t.className="review";const d=c.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${c.name}</li>
          <li class="item-review-date">${c.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,a)=>`
            <svg class="icon-star ${a<c.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${x}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${c.comment}</p>
        <button class="">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${x}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${c.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${x}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${c.id}">
              ${d} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${c.comments.map(l=>`<ul class="comment">
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
    `,t.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const a=t.querySelector(".reply-form");a.style.display=a.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const a=t.querySelector(".comments");a.style.display=a.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const l=t.querySelector(".reply-name").value.trim(),a=t.querySelector(".reply-text").value.trim();if(!l||!a)return alert("Введите имя и комментарий");const b=parseInt(t.querySelector(".reply-btn").dataset.id);m.find(p=>p.id===b).comments.push({name:l,text:a,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(m)),h()}),R.appendChild(t)});const s=document.getElementById("showMoreContainer");s.style.display=m.length>w?"flex":"none"}M.onclick=()=>{w+=3,h()};h();
//# sourceMappingURL=commonHelpers6.js.map
