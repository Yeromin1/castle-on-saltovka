import"./assets/menu-f265ad14.js";import s from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";const n=new URL("/castle-on-saltovka/assets/icons-e70d3d57.svg",self.location);document.addEventListener("DOMContentLoaded",()=>{new s(".premium-swiper",{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return`
          <li class="${e}">
            <svg class="ball-icon" width="4" height="4">
              <use href="${n}#icon-circle"></use>
            </svg>
          </li>`}}})});const r=document.querySelectorAll(".gallery");r.forEach(t=>{t.addEventListener("click",e=>{const i=e.target.getAttribute("srcset")||e.target.getAttribute("src");basicLightbox.create(`<img src="${i}" width="800" height="600">`).show()})});
//# sourceMappingURL=commonHelpers.js.map
