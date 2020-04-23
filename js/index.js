$(document).ready(function () {
  $('.sidenav').sidenav();
  $('.slider').slider();
  $('.collapsible').collapsible();

  let parameter = window.location.href.split("#");
  let currentPage = parameter.length > 1 ? parameter.pop() : "home"
  changePage(currentPage + "Btn")
});
$(window).on('load',(()=>{
  $(".loading").addClass("loadedPage")
  setTimeout(()=>{
    $(".loading").remove()
  },1000)
}))

function changePage(current){
  $("li").removeClass("selectedTopic");
  $("#"+current).addClass("selectedTopic")
}
