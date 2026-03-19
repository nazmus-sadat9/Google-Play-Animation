let main = document.getElementById('main');
let rightx = document.getElementById('right_part');
let leftx = document.getElementById('left_part')
let head = document.getElementById('head');

// starting 
setTimeout(()=>{
  main.style.width = '100px';
  main.style.height = '100px'
  leftx.style.opacity = '0';
  main.style.transition = '1s';
},500);

setTimeout(()=>{
  main.style.width = '600px';
  main.style.transition = '0.8s';
  leftx.style.transition = '0.8s'
  leftx.style.opacity = '1'
}, 1000);

setTimeout(()=>{
  main.style.display = 'flex';
  rightx.style.opacity = '1';
  head.style.opacity = '1';
}, 1700);

// Ending 
setTimeout(()=>{
  main.style.transition = '1s';
  rightx.style.opacity = '0';
  rightx.style.transition = '0.5s';
  head.style.transition = '0.5s';
  head.style.opacity = '0';
  main.style.width = '100px';
  main.style.height = '100px';
}, 2500);

setTimeout(()=>{
  leftx.style.transition = '0.6s';
  leftx.style.transform = 'scale(0)'
}, 3200);

setTimeout(()=>{
  main.style.transition = '0.6s'
  main.style.transform = 'scale(0)'
}, 3600)

