let nums=document.querySelectorAll('.about__contant .about__cards .about__card .nums')
let aboutSection=document.querySelector('.aboutSection')
let started=false

let expsection=document.querySelector('.expertwo')
let spans=document.querySelectorAll('.progress span')

let proloader=document.getElementById('proloader');

window.addEventListener('load',()=>{
  proloader.style.display='none';
})

var typed = new Typed('.autoType',{
  strings:["Programmer","Front-End Dev"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
});

window.onscroll=()=>{
  if(window.scrollY >= aboutSection.offsetTop -200){
    if(!started){
      nums.forEach((num)=>startCount(num))
    }
    started=true;
  }
  if(window.scrollY > expsection.offsetTop-200){
    spans.forEach((span)=>{
      span.style.width=span.dataset.width;
  })
  }
}

function startCount(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++;
        if(el.textContent==goal){
            clearInterval(count)
        }
    },2000/goal)
}

// ===============================
// let expsection=document.querySelector('.expertwo')
// let spans=document.querySelectorAll('.progress span')

// window.onscroll=function(){
//     if(window.scrollY > expsection.offsetTop-200){
//         spans.forEach((span)=>{
//             span.style.width=span.dataset.width;
//         })
//     }
// }

// =========================
const data=[
    {
      id:1,
      image:'images/comfyZone.jpg',
      header:'E-commers',
      title:"an E-commers website..fully functionalaty...Developed in HTML ,CSS, JS.....(Desctop design only)",
      github:'https://github.com/Lotus-Kattini',
      demo:'https://lotus-kattini.github.io/E-commers/',
    },
    {
      id:2,
      image:'images/guessingGame.jpg',
      header:'Guessing game ',
      title:"A simple Guessing game to guess an number from 1 to 100 and enter it..if ture or false you will get a message to let you know in a beatiful way",
      github:'https://github.com/Lotus-Kattini/Guessing-Game',
      demo:'https://lotus-kattini.github.io/Guessing-Game/',
    },
    {
      id:3,
      image:'images/housecompany.jpg',
      header:'house company',
      title:"My first project with HTML,CSS for a house company that sell houses with all the details..(Desctop design only)",
      github:'https://github.com/Lotus-Kattini/HouseCompany',
      demo:'https://lotus-kattini.github.io/HouseCompany/'
    },
    {
      id:4,
      image:'images/omnifood.jpg',
      header:'Resturant page',
      title:"My second project with HTML,CSS for a resturant with its meals and customres views and all these things..(Desctop design only)",
      github:'https://github.com/Lotus-Kattini/omniFood',
      demo:'https://lotus-kattini.github.io/omniFood/'
    },
    {
      id:5,
      image:'images/xoGame.jpg',
      header:'XO game ',
      title:"An XO game fully functionality with all the Probabilities of winning or losing also with result sharing in a beatiful design and a good UI/UX",
      github:'https://github.com/Lotus-Kattini/XO-game',
      demo:'https://lotus-kattini.github.io/XO-game/'
    },
    {
      id:6,
      image:'images/weather-app.jpg',
      header:'Weather App',
      title:"A weather app build with ReactJS and i use APIs..fullyfunctionality in a beaty desgin",
      github:'https://github.com/Lotus-Kattini/weather-app-react',
      demo:'https://my-weather-app-lk.netlify.app/'
    },
    {
      id:7,
      image:'images/stop-watch.jpg',
      header:'Stop Watch',
      title:"A Stop watch made with JS in a beaty responsive design",
      github:'https://github.com/Lotus-Kattini/stop-watch',
      demo:'https://lotus-kattini.github.io/stop-watch/'
    },
    {
      id:8,
      image:'images/materialUI.jpg',
      header:'Material UI project',
      title:"A full Material UI project with dark mode and light mode,its fully working in local host only because i use a JSON server not an API",
      github:'https://github.com/Lotus-Kattini/MUI-React-Pro',
      demo:'https://lk-material-ui-project.netlify.app/'
    },
    {
      id:9,
      image:'images/guessGame.jpg',
      header:'Guess Word Game',
      title:"A game project that requires a lot of logic and really good understanding of JS, its fully responsive with so many features",
      github:'https://github.com/Lotus-Kattini/Guess-word-game',
      demo:'https://guess-the-word-game-lk.netlify.app/'
    },
]

let protifolioContainer=document.querySelector('.protifolio__container');
function intiApp(){
    data.forEach((value)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('protifolio__item')
        newDiv.innerHTML=`
        <div class="protifolio__item-image">
        <img src=${value.image} alt=${value.title}/>
      </div>
      <h2>${value.header}</h2>
      <h3>${value.title}</h3>
      <div class="protifolio__item-cta">
        <a href=${value.github} class='gitbtn' target='_blank'>Github</a>
        <a href=${value.demo} class='demobtn' target='_blank'>Live Demo</a>
      </div>
        `
        protifolioContainer.appendChild(newDiv);
    })
}

intiApp()


function SendEmail(){
  var params={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    message:document.getElementById('message').value,
  }

  emailjs.send('service_otaxrkh','template_bfxxt8b',params).then(
    (res)=>{
      console.log(res)
      document.getElementById('name').value='';
      document.getElementById('email').value='';
      document.getElementById('message').value='';
      alert('Your Message Sent Sucsesfully!'+ res.status)
    }
  )
}



//dark mode
let Darkmode=document.querySelector('.Darkmode');
let home=document.getElementById('home');
let about=document.getElementById('about');
let experence=document.getElementById('experence');
let services=document.getElementById('services');
let protifolio=document.getElementById('protifolio');
let contact=document.getElementById('contact');
let skills=document.getElementById('MYskills');
let contactbtn=document.querySelector('.contactbtn');
let forjs=document.querySelectorAll('.contact__option-icon .forjs')
let turn=0
let protifolio__item=document.querySelectorAll('.protifolio__item')

function Darkmodefunc(){
  home.style.background='lavender'
  about.style.background='lavender'
  experence.style.background='lavender'
  services.style.background='lavender'
  protifolio.style.background='lavender'
  contact.style.background='lavender'
  skills.style.background='lavender'
  home.style.color='black'
  about.style.color='black'
  skills.style.color='black'
  experence.style.color='black'
  services.style.color='black'
  protifolio.style.color='black'
  contact.style.color='black'
  contactbtn.style.color='black'
  // protifolio__item.style.background='mediumpurple'
  protifolio__item.forEach((item)=>{item.style.background='mediumpurple'})
  forjs.forEach((elemant)=>{
    elemant.style.color='black'
  })
  Darkmode.innerHTML=`<i class="fa-solid fa-moon"></i>`
  turn=1
}

function lightmode(){
    home.style.background='black'
    about.style.background='black'
    experence.style.background='black'
    services.style.background='black'
    protifolio.style.background='black'
    contact.style.background='black'
    skills.style.background='black'
    home.style.color='white'
    about.style.color='white'
    experence.style.color='white'
    services.style.color='white'
    protifolio.style.color='white'
    contact.style.color='white'
    skills.style.color='white'
    contactbtn.style.color='white'
    protifolio__item.forEach((item)=>item.style.background='#03a8f461')
    forjs.forEach((elemant)=>{
      elemant.style.color='white'
    })
  Darkmode.innerHTML=`<i class="fa-solid fa-sun"></i>`
    turn=0
}

Darkmode.onclick=function(){
  if(turn==0){
    Darkmodefunc();
    console.log('dark')
  }
  else{
    lightmode();
  }
}

// let body=document.querySelector('body')
// let fofractive=document.querySelectorAll('nav .fofractive');
// // let nav=document.querySelector('nav')
// fofractive.forEach((el)=>{
//   el.addEventListener('click',()=>{
//     body.classList.add('active')
//   })
// })

