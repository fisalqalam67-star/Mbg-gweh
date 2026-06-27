const loading = document.getElementById("loading");

const gift = document.getElementById("gift");

const music = document.getElementById("music");

const typing = document.getElementById("typing");

const next1 = document.getElementById("next1");

const yes = document.getElementById("yes");

const no = document.getElementById("no");

const pages = document.querySelectorAll(".page");

const text =
"selamat telah menjadi cewe abnormal pertama seng deket ama ku jir ❤️";

window.onload = () => {

setTimeout(() => {

loading.style.display = "none";

pages[0].classList.add("active");

},2000);

};

gift.onclick = () => {

music.play().catch(()=>{});

pages[0].classList.remove("active");

pages[1].classList.add("active");

typeWriter();

};

let i = 0;

function typeWriter(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

next1.onclick = () => {

pages[1].classList.remove("active");

pages[2].classList.add("active");

};

no.addEventListener("mouseover", pindah);

no.addEventListener("touchstart", pindah);

function pindah(){

let x = Math.random() * (window.innerWidth - 150);

let y = Math.random() * (window.innerHeight - 80);

no.style.position = "fixed";

no.style.left = x + "px";

no.style.top = y + "px";

}

yes.onclick = () => {

pages[2].classList.remove("active");

pages[3].classList.add("active");

setInterval(heart,250);

};

function heart(){

const h = document.createElement("div");

h.className = "heart";

h.innerHTML = "❤️";

h.style.left = Math.random() * window.innerWidth + "px";

h.style.fontSize = (20 + Math.random()*30) + "px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

}

const loveBtn = document.getElementById("loveBtn");

loveBtn.onclick = ()=>{

for(let i=0;i<30;i++){

setTimeout(heart,i*80);

}

alert("Aku Sayang Mbg ❤️");

};