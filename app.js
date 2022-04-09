

function showMenu() {
  let togleBtn = document.querySelector(".header-togle");
  let menuHeader = document.querySelector(".header-menu");
  const expandClass= "is_expand";

  togleBtn.addEventListener('click',function(){
    menuHeader.classList.add(expandClass);
  })

  window.addEventListener('click',function(e){
    if(!menuHeader.contains(e.target) && ! e.target.matches('.header-togle')){
      menuHeader.classList.remove(expandClass);
    }
  })
}
function accordion(){
  let items = document.querySelectorAll('.wedo-item');
  const showClass = "is_active";
  items = Array.from(items);
  items.forEach((item)=>{
    item.addEventListener('click', function(){
      let itemActive = document.querySelector(".wedo-item.is_active")
      if(itemActive){
        itemActive.classList.remove(showClass);
      }
      let checkClass= this.classList.contains('.is_active');
      console.log(checkClass);
      this.classList.toggle("is_active");
    })
  })
}
$(document).ready(function(){
    $('.quote-content').slick({
      autoplay:true,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });

  $(document).ready(function(){
    $('.quote-content1').slick({
      autoplay:true,
      arrows: true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
showMenu();
accordion();

