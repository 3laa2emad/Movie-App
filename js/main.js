var allMovie = []
var x = new XMLHttpRequest();
x.open("get" , "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
x.send();


x.addEventListener('readystatechange' , function(){
  if(x.readyState == 4 ){
      allMovie = (JSON.parse(x.response)).results;
      displayMovies();
} } )

const widthSideBar = $(".sidebar").outerWidth()
$(".icone2").click(function(){
if($(".sidebar").css('left') == "0px"){
  $(".sidebar").animate({left: -widthSideBar } , 500)
// document.querySelector(".ChangeIcone").classList.("fa-align-justify" , " fa-xmark")
}
else{
  $(".sidebar").animate({left: 0 } , 500)
}
})

var allMovie = [];
function displayMovies() {
  var cartona = " ";
  for(var i=0 ; i< allMovie.length ; i++){
cartona += `
<div class="col-md-4 mb-4 " >
<div class="innerdiv overflow-hidden position-relative ">

  <div class="imageDesign"><img class="w-100 " src="https://image.tmdb.org/t/p/original/${allMovie[i].poster_path}" alt=""></div>
  <div class="movieContent position-absolute ">
    <h1>${allMovie[i].title}</h1>
    <p  class="description" >${allMovie[i].overview}</p>
  <p class="descriptionTwo" >${allMovie[i].release_date}</p>
  <div class="movieRating" ><p class="Rate" >${Math.floor(allMovie[i].vote_average)}</p></div>
  
  </div>
</div>
  </div>
`


  }

  document.querySelector(".row").innerHTML = cartona;

}



// $(window).scroll(function(){
//   if($(window).scrollTop()>100){
//     $('.')
//   }
// })



// function searchMovie(searchBottun) {

//   var x = new XMLHttpRequest();
// x.open("get" , `https://api.themoviedb.org/3/trending/all/${searchBottun}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
// x.send();


// x.addEventListener('readystatechange' , function(){
//   if(x.readyState == 4 ){
//       allMovie = (JSON.parse(x.response)).results;
//       displayMovies();
// } } )

// const widthSideBar = $(".sidebar").outerWidth()
// $(".icone2").click(function(){
// if($(".sidebar").css('left') == "0px"){
//   $(".sidebar").animate({left: -widthSideBar } , 500)
// // document.querySelector(".ChangeIcone").classList.("fa-align-justify" , " fa-xmark")
// }
// else{
//   $(".sidebar").animate({left: 0 } , 500)
// }
// })
// }

// document.querySelector(".serchFILM").addEventListener("keyup" , function(e){
//   searchMovie(e.target.value)
// })
