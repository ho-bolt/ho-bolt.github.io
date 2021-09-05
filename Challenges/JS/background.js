const images=["2.jpg","3.jpg","4.jpg"];

const RandomImg=images[Math.floor(Math.random()*images.length)];

const bg=document.createElement("img");
bg.src=`img/${RandomImg}`;
document.body.appendChild(bg);





