const r=document.querySelectorAll(".gallery");r.forEach(e=>{e.addEventListener("click",t=>{const c=t.target.getAttribute("srcset")||t.target.getAttribute("src");basicLightbox.create(`<img src="${c}" width="800" height="600">`).show()})});
//# sourceMappingURL=gallery-24695563.js.map
