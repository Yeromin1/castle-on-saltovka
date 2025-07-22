import"./assets/menu-f265ad14.js";import r from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";document.addEventListener("DOMContentLoaded",()=>{new r(".premium-swiper",{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,e){return`
          <li class="${e}">
            <svg class="ball-icon" width="4" height="4">
              <use href="./img/icons.svg#icon-circle"></use>
            </svg>
          </li>`}}})});const n=document.querySelectorAll(".gallery");n.forEach(t=>{t.addEventListener("click",e=>{const i=e.target.getAttribute("srcset")||e.target.getAttribute("src");basicLightbox.create(`<img src="${i}" width="800" height="600">`).show()})});
//# sourceMappingURL=commonHelpers.js.map
