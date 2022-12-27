const navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener('click', (e) => {
    e.target.classList.toggle("active")
    const nav_item = document.querySelector('.mb-nav-item');
    nav_item.classList.toggle('show-nav')
})


  // accordion content
  const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
      let header = item.querySelector("header");
      header.addEventListener("click", () =>{
          item.classList.toggle("open");
  
          let description = item.querySelector(".description");
          if(item.classList.contains("open")){
              description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
              item.querySelector("i").classList.replace("fa-plus", "fa-minus");
          }else{
              description.style.height = "0px";
              item.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
          removeOpen(index); //calling the funtion and also passing the index number of the clicked header
      })
  })
  
  function removeOpen(index1){
      accordionContent.forEach((item2, index2) => {
          if(index1 != index2){
              item2.classList.remove("open");
  
              let des = item2.querySelector(".description");
              des.style.height = "0px";
              item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
      })
  }


// pop-up Script
var detailBtns = document.querySelectorAll(".view-detail");
function serviceDetails() {
    detailBtns.forEach(detailBtn => {
        detailBtn.addEventListener("click", function(e){
            btn = e.target.nextElementSibling
            btn.classList.add('active-details')
        });
    });
        var closeBtns = document.querySelectorAll(".close");
        closeBtns.forEach(closeBtn => {
            closeBtn.addEventListener("click", function(){
                btn.classList.remove('active-details')
            })
        });
}
serviceDetails();


var ctaBtns = document.querySelectorAll(".cta-pop-btn");

ctaBtns.forEach(ctaBtn => {
    ctaBtn.addEventListener("click", function(){
            activeCta = document.querySelector(".cta-container");
            activeCta.classList.add('active-cta')
        });
    });
        var closeCta = document.querySelector(".cta-container .close");
            closeCta.addEventListener("click", function(){
                activeCta.classList.remove('active-cta')
            });

