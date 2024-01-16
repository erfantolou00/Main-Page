let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

let inputElem = document.querySelector('input')
let ulElem = document.querySelector('.autocom-box')
let searchInput = document.querySelector('.search-input')

inputElem.addEventListener('input' , function (ev) {
    let newSuggestArray = []

    searchInput.classList.add('active')
    
   if (ev.target.value) {
    newSuggestArray = suggestions.filter( item => item.toLocaleLowerCase().includes(ev.target.value))
    newSuggestArray = newSuggestArray.map(item => '<li> '+ item +' </li>').join(' ')

    ulElem.innerHTML = newSuggestArray

    ulElem.childNodes.forEach(function (li) {
        li.addEventListener('click' , function(){
           ev.target.value = li.textContent
           searchInput.classList.remove('active')
        })
    })
   

   }

})

window.addEventListener('click' , function(){
    searchInput.classList.remove('active')
})
