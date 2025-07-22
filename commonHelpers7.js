import"./assets/menu-f265ad14.js";import{S as $,A as H}from"./assets/vendor-f7826fb8.js";const M=[{id:1,category:"Накладні електронні замки",title:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@1x-4b6bfba3.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftOffice@2x-bd445720.jpg",self.location).href}},{id:2,category:"Накладні електронні замки",name:"Варіативний замок Golden Soft для готелю",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для готелю",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@1x-ea15abd8.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Hotel@2x-5a8419c7.jpg",self.location).href}},{id:3,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@1x-8d774211.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoft2Office@2x-c6fb0212.jpg",self.location).href}},{id:4,category:"Накладні електронні замки",name:"Дверний Замок Golden Soft для офісу",text:{text1:"Замок дверний електронний Golden Soft GS-200Z-5 має розкішний глянсовий блиск, чіткі лінії, красиві форми.",text2:"Підходить для встановлення на дерев'яні/міжкімнатні двері."},price:1e3,description:"Golden Soft для офісу",desktop:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},tablet:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href},mobile:{"1x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@1x-1a279a99.jpg",self.location).href,"2x":new URL("/castle-on-saltovka/assets/GoldenSoftHotel@2x-67280020.jpg",self.location).href}}];window.addEventListener("load",()=>{const t=document.querySelector("a.main-lightbox"),l=document.getElementById("main-picture"),c=l.querySelector("img"),o=l.querySelector("source"),d=document.querySelectorAll("picture.thumbnail");let n=null;function a(){return window.innerWidth<=767}function b(){return M.map(s=>a()?s.mobile["2x"]:s.desktop["2x"])}function y(){const s=b();d.forEach((e,i)=>{e.dataset.full=s[i]})}function p(s=0){let e=document.querySelector(".lightbox-gallery");e?e.innerHTML="":(e=document.createElement("div"),e.classList.add("lightbox-gallery"),e.style.display="none",document.body.appendChild(e));const i=Array.from(d);return i.slice(s).concat(i.slice(0,s)).forEach(m=>{var q;const A=m.dataset.full,B=((q=m.querySelector("img"))==null?void 0:q.alt)||"",v=document.createElement("a");v.href=A,v.setAttribute("data-gallery","gallery"),v.setAttribute("data-title",B),e.appendChild(v)}),e}function I(s=".lightbox-gallery a"){return n&&n.destroy(),n=new $(s,{captionsData:"title",captionDelay:250}),n.on("show.simplelightbox",()=>{document.body.style.overflow="hidden"}),n.on("close.simplelightbox",()=>{document.body.style.overflow=""}),n}function S(s){y();const e=d[s];if(!e)return;const i=e.querySelector("source"),r=e.querySelector("img");o&&i?(o.srcset=i.srcset,o.media=i.media):o&&(o.removeAttribute("srcset"),o.removeAttribute("media")),c.src=r.src,c.alt=r.alt,t.href=e.dataset.full,d.forEach(m=>m.classList.remove("active")),e.classList.add("active")}d.forEach((s,e)=>{s.addEventListener("click",i=>{if(i.preventDefault(),y(),a()){const r=p(e);I(".lightbox-gallery a"),setTimeout(()=>{const m=r.querySelectorAll("a");m[0]&&m[0].click()},50)}else S(e)})}),t.addEventListener("click",s=>{if(a()){s.preventDefault();return}s.preventDefault();const e=Array.from(d).findIndex(r=>r.classList.contains("active"));y();const i=p(e>=0?e:0);I(".lightbox-gallery a"),setTimeout(()=>{const r=i.querySelectorAll("a");r[0]&&r[0].click()},50)}),S(0),window.addEventListener("resize",()=>{const s=Array.from(d).findIndex(e=>e.classList.contains("active"));S(s>=0?s:0)})});const L=document.getElementById("list-equipment"),k=document.getElementById("selected-equipment"),O=k.querySelector(".selected-equipment "),E=k.querySelector(".icon-close"),D=document.querySelectorAll(".item-equipment");k.addEventListener("click",t=>{t.stopPropagation(),L.classList.toggle("active"),E.classList.toggle("rotated")});D.forEach(t=>{t.addEventListener("click",l=>{l.stopPropagation(),O.textContent=t.textContent,L.classList.remove("active"),E.classList.remove("rotated")})});document.addEventListener("click",()=>{L.classList.remove("active"),E.classList.remove("rotated")});new H(".acc-container",{duration:300});document.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(l=>l.classList.remove("active")),document.querySelectorAll(".list-tab").forEach(l=>l.classList.remove("active")),t.classList.add("active"),document.getElementById(t.dataset.tab).classList.add("active")})});const g=document.getElementById("reviewModal"),C=document.getElementById("openModalBtn"),T=document.getElementById("closeModalBtn"),R=document.getElementById("reviewForm"),U=document.getElementById("reviewsContainer"),F=document.getElementById("showMoreBtn"),G=document.getElementById("starRating"),x=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);let f=JSON.parse(localStorage.getItem("reviews"))||[],w=3,u=0;C.onclick=()=>{g.style.display="flex",document.body.style.overflow="hidden"};T.onclick=()=>{g.style.display="none",document.body.style.overflow=""};window.onclick=t=>{t.target==g&&(g.style.display="none",document.body.style.overflow="")};G.innerHTML=Array.from({length:5},(t,l)=>`
  <span data-index="${l}">
    <svg class="icon-star" width="20" height="20">
      <use href="${x}#icon-star"></use>
    </svg>
  </span>
`).join("");G.addEventListener("click",t=>{const l=t.target.closest("span");l&&(u=parseInt(l.dataset.index)+1,j())});function j(){[...G.children].forEach((t,l)=>{t.classList.toggle("selected",l<u)})}R.onsubmit=function(t){t.preventDefault();const l=document.getElementById("nameInput").value,c=document.getElementById("commentInput").value;if(u===0){alert("Поставте оцінку");return}const o={id:Date.now(),name:l,comment:c,rating:u,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"}),comments:[]};f.unshift(o),localStorage.setItem("reviews",JSON.stringify(f)),g.style.display="none",document.body.style.overflow="",R.reset(),u=0,j(),h()};function h(){U.innerHTML="",f.slice(0,w).forEach(c=>{const o=document.createElement("div");o.className="review";const d=c.comments.length;o.innerHTML=`
      <ul class="list-review">
        <div class="container-item-name-date">
          <li class="item-review-name">${c.name}</li>
          <li class="item-review-date">${c.date}</li>
        </div>
        <li class="item-stars-view">
          ${Array.from({length:5},(n,a)=>`
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
        ${c.comments.map(n=>`<ul class="comment">
                <li class="comment-name">${n.name}</li>
                <li class="item-review-date">${n.date}</li>
                <li class="comment-text">${n.text}</li>
              </ul>`).join("")}
      </div>

      <div class="reply-form" style="display: none;">
        <input type="text" class="reply-name" placeholder="Ваше ім'я" />
        <textarea type="text" class="reply-text" placeholder="Ваш коментар" ></textarea>
        <button class="submit-reply btn-categories">Надіслати</button>
      </div>
    `,o.querySelector(".reply-btn").addEventListener("click",n=>{n.preventDefault();const a=o.querySelector(".reply-form");a.style.display=a.style.display==="none"?"block":"none"}),o.querySelector(".toggle-comments").addEventListener("click",n=>{n.preventDefault();const a=o.querySelector(".comments");a.style.display=a.style.display==="none"?"block":"none"}),o.querySelector(".submit-reply").addEventListener("click",()=>{const n=o.querySelector(".reply-name").value.trim(),a=o.querySelector(".reply-text").value.trim();if(!n||!a)return alert("Введите имя и комментарий");const b=parseInt(o.querySelector(".reply-btn").dataset.id);f.find(p=>p.id===b).comments.push({name:n,text:a,date:new Date().toLocaleDateString("uk-UA",{day:"numeric",month:"long",year:"numeric"})}),localStorage.setItem("reviews",JSON.stringify(f)),h()}),U.appendChild(o)});const l=document.getElementById("showMoreContainer");l.style.display=f.length>w?"flex":"none"}F.onclick=()=>{w+=3,h()};h();
//# sourceMappingURL=commonHelpers7.js.map
