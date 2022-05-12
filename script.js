const readMorebtn = document.querySelector('.read__more--btn');
const text = document.querySelector('.text');
const more = document.querySelector('.more');
const intro = document.querySelector('.introduction__users')
const result2 = document.querySelector('.result__form');
const form = document.querySelector('.form__users');

readMorebtn.addEventListener('click', (e)=>{
  text.classList.toggle('show-more');

      if(text.style.classList === 'text show-more'){
          more.style.display = 'none'
          result2.style.display = 'none'
          intro.style.display = 'flex'
          form.style.display = 'none'
      }else{
        intro.style.display = 'flex'
        result2.style.display = 'none'
        form.style.display = 'none'
        more.style.display = 'none'
      }
      
  
})

const showMorebtn = document.querySelector('.btn__showMore');
const answers = document.querySelector('.answers');


  showMorebtn.addEventListener('click', (e)=>{
  answers.classList.toggle('show__more');
  
})

const btn = document.querySelector('.button-topic');
const introduction = document.querySelector('.introduction__users')
const form__users = document.querySelector('.form__users');

btn.addEventListener('click', function() {
    
  if(form__users.style.display === 'block') { 
    introduction.style.display = 'none';
  } else {
  	form__users.style.display = 'block' 
    introduction.style.display = 'none';
  }
});

const btn2 = document.querySelector('.section2');
const form__users2 = document.querySelector('.form__users');
const result = document.querySelector('.result__form');
const btn3 = document.querySelector('.button__topic2');

 btn2.addEventListener('click', function() {
   
  if(result.style.display === 'block') { 
    form__users2.style.display = 'none';
  } else {
    result.style.display = 'block';
  	form__users2.style.display = 'none' 
  } }
);
  btn3.addEventListener('click', function() {
   
    
    if(form__users2.style.display === 'block') { 
      result.style.display = 'none';
    } else {
      form__users2.style.display = 'block';
      result.style.display = 'none' 
    }
 }

 );
