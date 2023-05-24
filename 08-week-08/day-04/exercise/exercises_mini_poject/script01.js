let colorCourent;
const colorSelect = document.querySelector('#color_select');
const left = document.querySelector('#left');
const pixel = document.querySelector('#main_pixel')
const right = document.querySelector('#right');
const button = document.querySelector('#button')

const colors = [
  '#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF',
  '#800080', '#FF00FF', '#FF69B4', '#FF4500', '#008000', '#000080',
  '#FF6347', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#40E0D0',
  '#9370DB', '#FF1493', '#1E90FF'
];
console.log(colorSelect);
let colorSelectList = [colorSelect];
let pixelList = [pixel];

for (let i=0; i<20; i++){
  let nextColorSelector = colorSelect.cloneNode();
  nextColorSelector.setAttribute ('clr',colors[i]);
  nextColorSelector.style.backgroundColor = colors[i];
  colorSelectList.push(nextColorSelector);
  left.appendChild(nextColorSelector);
}
for (el of colorSelectList){
  el.addEventListener('click', selectCurentColor);
}

for(let i=1; i<6474 ;i++){
  let nextPixel = pixel.cloneNode();
  pixelList.push(nextPixel);
  right.appendChild(nextPixel);
}
for (el of pixelList){
  el.addEventListener('mouseover',drow)
}

button.addEventListener('click', clearFeald);

function selectCurentColor(e){
  colorCourent = e.target.attributes.clr.nodeValue;
  console.log(colorCourent);  
}

function drow(e){
  // console.log(e);
  if (e.buttons === 1){
    e.target.style.backgroundColor = colorCourent;
    console.log(colorCourent);
  }  
}

function clearFeald(){
  for (el of pixelList){
    el.style.backgroundColor='white';
  }  
}