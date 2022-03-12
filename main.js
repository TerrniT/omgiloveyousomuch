let heart = document.querySelector('.container');
heart.onclick = function(){
document.querySelector('.heart__one').classList.add("heart__one__active");
document.querySelector('.heart__two').classList.add("heart__two__active");
document.querySelector('body').classList.add("body__black");
setTimeout(function() {
document.querySelector('.heart__one').classList.remove("heart__one__active");
document.querySelector('.heart__two').classList.remove("heart__two__active");
document.querySelector('body').classList.remove("body__black");
}, 4600);
}