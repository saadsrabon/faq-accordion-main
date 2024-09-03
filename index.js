// first method with event bubble
const faqBody = document.querySelector('.faq_body')
let minus=true
faqBody.addEventListener('click',(e)=>{
if(minus){
    e.target.src='./assets/images/icon-minus.svg'
}else{
      e.target.src='./assets/images/icon-plus.svg'
}
minus=!minus
})