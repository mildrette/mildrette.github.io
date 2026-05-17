function toggleTheme(){document.body.classList.toggle('dark')}

const texts={
  en:"Android & Frontend Developer specializing in scalable mobile systems, UI engineering, and open-source ecosystems.",
  fr:"Développeur Android et Frontend spécialisé.",
  es:"Desarrollador Android y Frontend.",
  fa:"توسعه‌دهنده اندروید و فرانت‌اند"
}

function setLang(l){document.getElementById('desc').innerText=texts[l]}

const obs=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('active')))
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))

const c=document.getElementById('particles'),x=c.getContext('2d')
c.width=innerWidth;c.height=innerHeight

let p=Array.from({length:70},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:1+Math.random()*2,dx:(Math.random()-0.5),dy:(Math.random()-0.5)}))

function a(){
  x.clearRect(0,0,c.width,c.height)
  p.forEach(i=>{
    i.x+=i.dx;i.y+=i.dy
    if(i.x<0||i.x>c.width)i.dx*=-1
    if(i.y<0||i.y>c.height)i.dy*=-1
    x.beginPath()
    x.arc(i.x,i.y,i.r,0,Math.PI*2)
    x.fillStyle='rgba(184,134,11,0.6)'
    x.fill()
  })
  requestAnimationFrame(a)
}
a()