const searchEl = document.querySelector('.search');
const searchInputEl =  searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

//focus 일때
searchInputEl.addEventListener('focus',function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});
//blur일때
searchInputEl.addEventListener('blur',function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});