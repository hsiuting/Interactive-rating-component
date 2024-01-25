const userRating = document.querySelectorAll("li");
const submit = document.querySelector(".submitButton")
const resultNumber = document.querySelector(".rating-number")
const ratingPage = document.querySelector(".ratingPage")
const thanksPage = document.querySelector(".thanksPage")

let result = false;

userRating.forEach((e) =>{
    let score = e.innerText // 送出後顯示數值
    e.addEventListener("click", () => { //選取所有e,再跑一次for Each
        userRating.forEach((e) => {
            e.classList.remove('colorChange')
        })
        e.classList.add('colorChange')
        resultNumber.innerText = score;
        result = true;
    })
})
submit.addEventListener('click', () => {
    if(result){
        ratingPage.style.display = 'none'
        thanksPage.style.display = 'block'
        // ratingPage.classList.add('invisible')
        // thanksPage.classList.add('show')
    }else{
        alert('Please choose a score')
    }
    
})
//doesn't work
// ratingPage.classList.add('invisible')
// thanksPage.classList.add('show')
