let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let stop_btn = document.getElementById("stop-btn");
let contenedor = document.getElementById("contenedor");
let  so = document.getElementById("so");



play_btn.addEventListener("click",()=>{
    cancion.play();
    contenedor.style.animationPlayState ="running";
    so.style.animationPlayState ="running";

})
pause_btn.addEventListener("click", ()=>{
    cancion.pause();
    contenedor.style.animationPlayState ="paused";
    so.style.animationPlayState ="paused";

   
})
stop_btn.addEventListener("click", ()=>{
    cancion.pause();
    cancion.currentTime =0;
    contenedor.style.animationPlayState ="paused";
    so.style.animationPlayState ="paused";

})
