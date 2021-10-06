const buttonHeight = 40;
const buttonWidth = 90;

const maxWidth=window.innerWidth - buttonWidth;
const maxHeight=window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', ()=>{
 const button=document.getElementById('button');
 button.addEventListener('click', ()=> alert('Resposta errada!!'))
 button.addEventListener('mouseover', ()=>{
 button.style.left=Math.floor(Math.random()*(maxWidth+1))+ 'px';
 button.style.top=Math.floor(Math.random()*(maxHeight+1))+ 'px';
 })
})

window.addEventListener('DOMContentLoaded', ()=>{
 const button=document.getElementById('button1');
 button.addEventListener('click', ()=> alert('Te adoro mo'))
})
