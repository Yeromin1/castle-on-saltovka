import"./assets/menu-f265ad14.js";import{S as $,A}from"./assets/vendor-f7826fb8.js";const H=[{id:1,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",description:"Golden Soft для офісу",price:1e3,desktop:{"1x":"/img/pages/home/popular/mobile/GoldenSoftOffice@1x.jpg","2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":"/img/pages/home/popular/mobile/GoldenSoftOffice@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoftOffice@2x.jpg"},mobile:{"1x":"/img/pages/home/popular/mobile/GoldenSoftOffice@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoftOffice@2x.jpg"}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",description:"Golden Soft для готелю",price:1e3,desktop:{"1x":"/img/pages/home/popular/mobile/GoldenSoft2Hotel@1x.jpg","2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":"/img/pages/home/popular/mobile/GoldenSoft2Hotel@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoft2Hotel@2x.jpg"},mobile:{"1x":"/img/pages/home/popular/mobile/GoldenSoft2Hotel@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoft2Hotel@2x.jpg"}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",description:"Golden Soft для офісу",price:1e3,desktop:{"1x":"/img/pages/home/popular/mobile/GoldenSoft2Office@1x.jpg","2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":"/img/pages/home/popular/mobile/GoldenSoft2Office@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoft2Office@2x.jpg"},mobile:{"1x":"/img/pages/home/popular/mobile/GoldenSoft2Office@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoft2Office@2x.jpg"}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",description:"Golden Soft для офісу",price:1e3,desktop:{"1x":"/img/pages/home/popular/mobile/GoldenSoftHotel@1x.jpg","2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":"/img/pages/home/popular/mobile/GoldenSoftHotel@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoftHotel@2x.jpg"},mobile:{"1x":"/img/pages/home/popular/mobile/GoldenSoftHotel@1x.jpg","2x":"/img/pages/home/popular/mobile/GoldenSoftHotel@2x.jpg"}}];window.addEventListener("load",()=>{const e=document.querySelector("a.main-lightbox"),o=document.getElementById("main-picture"),n=o.querySelector("img"),t=o.querySelector("source"),r=document.querySelectorAll("picture.thumbnail");let l;const i=H.map(s=>s.desktop["2x"]);r.forEach((s,a)=>{s.dataset.full=i[a]});function h(s){const a=Array.from(r),m=[...a.slice(s),...a.slice(0,s)];let c=document.querySelector(".lightbox-gallery");c?c.innerHTML="":(c=document.createElement("div"),c.classList.add("lightbox-gallery"),c.hidden=!0,document.body.appendChild(c)),m.forEach(g=>{var G;const I=g.dataset.full,B=((G=g.querySelector("img"))==null?void 0:G.alt)||"",f=document.createElement("a");f.href=I,f.setAttribute("data-gallery","gallery"),f.setAttribute("data-title",B),c.appendChild(f)}),l&&l.destroy(),l=new $('[data-gallery="gallery"]',{captionsData:"title",captionDelay:250})}function b(s){const a=r[s];if(!a)return;const m=a.querySelector("source"),c=a.querySelector("img");t&&m?(t.srcset=m.srcset,t.media=m.media):t&&(t.removeAttribute("srcset"),t.removeAttribute("media")),n.src=c.src,n.alt=c.alt,e.href=a.dataset.full,r.forEach(g=>g.classList.remove("active")),a.classList.add("active"),h(s)}r.forEach((s,a)=>{s.addEventListener("click",m=>{m.preventDefault(),b(a)})}),b(0)});const S=document.getElementById("list-equipment"),w=document.getElementById("selected-equipment"),O=w.querySelector(".selected-equipment "),E=w.querySelector(".icon-close"),M=document.querySelectorAll(".item-equipment");w.addEventListener("click",e=>{e.stopPropagation(),S.classList.toggle("active"),E.classList.toggle("rotated")});M.forEach(e=>{e.addEventListener("click",o=>{o.stopPropagation(),O.textContent=e.textContent,S.classList.remove("active"),E.classList.remove("rotated")})});document.addEventListener("click",()=>{S.classList.remove("active"),E.classList.remove("rotated")});new A(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(o=>o.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(o=>o.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab).classList.add("active")})});const u=document.getElementById("reviewModal"),D=document.getElementById("openModalBtn"),R=document.getElementById("closeModalBtn"),q=document.getElementById("reviewForm"),k=document.getElementById("reviewsContainer"),C=document.getElementById("showMoreBtn"),L=document.getElementById("starRating"),y=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let d=JSON.parse(localStorage.getItem("reviews"))||[],x=3,p=0;D.onclick=()=>{u.style.display="flex",document.body.style.overflow="hidden"};R.onclick=()=>{u.style.display="none",document.body.style.overflow=""};window.onclick=e=>{e.target==u&&(u.style.display="none",document.body.style.overflow="")};L.innerHTML=Array.from({length:5},(e,o)=>`
  <span data-index="${o}">
    <svg class="icon-star" width="20" height="20">
      <use href="${y}#icon-star"></use>
    </svg>
  </span>
`).join("");L.addEventListener("click",e=>{const o=e.target.closest("span");o&&(p=parseInt(o.dataset.index)+1,j())});function j(){[...L.children].forEach((e,o)=>{e.classList.toggle("selected",o<p)})}q.onsubmit=function(e){e.preventDefault();const o=document.getElementById("nameInput").value,n=document.getElementById("commentInput").value;if(p===0){alert("Поставте оцінку");return}const t={id:Date.now(),name:o,comment:n,rating:p,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};d.unshift(t),localStorage.setItem("reviews",JSON.stringify(d)),u.style.display="none",document.body.style.overflow="",q.reset(),p=0,j(),v()};function v(){k.innerHTML="",d.slice(0,x).forEach(n=>{const t=document.createElement("div");t.className="review";const r=n.comments.length;t.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${n.name}</li>
          <li class="item-review-date">${n.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(l,i)=>`
            <svg class="icon-star ${i<n.rating?"filled":"outlined"}" width="20" height="20">
              <use href="${y}#icon-star"></use>
            </svg>
          `).join("")}
        </li>
      </ul>

      <div class="container-text-review-reply">
        <p class="text-review-comment">${n.comment}</p>
        <button class="">...more</button>

        <ul class="list-reply">
          <li class="item-reply">
            <svg class="icon-reply-btn" width="24" height="24">
              <use href="${y}#icon-subdirectory"></use>
            </svg>
          </li>
          <li class="item-reply">
            <button class="reply-btn" data-id="${n.id}">
              Відповісти
            </button></li>
          <li class="item-reply">
            <svg class="icon-toggle-comments" width="24" height="24">
              <use href="${y}#icon-message"></use>
            </svg>
          </li>
          <li class="item-comments">
            <button class="toggle-comments" data-id="${n.id}">
              ${r} Коментарі
            </button>
          </li>
        </ul>
      </div>

      <div class="comments" style="display: none;">
        ${n.comments.map(l=>`<ul class="comment">
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
    `,t.querySelector(".reply-btn").addEventListener("click",l=>{l.preventDefault();const i=t.querySelector(".reply-form");i.style.display=i.style.display==="none"?"block":"none"}),t.querySelector(".toggle-comments").addEventListener("click",l=>{l.preventDefault();const i=t.querySelector(".comments");i.style.display=i.style.display==="none"?"block":"none"}),t.querySelector(".submit-reply").addEventListener("click",()=>{const l=t.querySelector(".reply-name").value.trim(),i=t.querySelector(".reply-text").value.trim();if(!l||!i)return alert("Введите имя и комментарий");const h=parseInt(t.querySelector(".reply-btn").dataset.id);d.find(s=>s.id===h).comments.push({name:l,text:i,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(d)),v()}),k.appendChild(t)});const o=document.getElementById("showMoreContainer");o.style.display=d.length>x?"flex":"none"}C.onclick=()=>{x+=3,v()};v();
//# sourceMappingURL=commonHelpers7.js.map
