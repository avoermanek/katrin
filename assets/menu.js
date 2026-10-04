(function(){
  var menu=document.querySelector('.header-menu');
  var open=document.querySelector('.ham-menu-trigger');
  var close=document.querySelector('.ham-menu-close-container');
  if(!menu||!open||!close) return;
  function show(){menu.style.display='block';close.style.display='block';document.body.classList.add('menu-open');}
  function hide(){menu.style.display='';close.style.display='';document.body.classList.remove('menu-open');}
  open.addEventListener('click',show);
  close.addEventListener('click',hide);
  menu.addEventListener('click',function(e){if(e.target.closest('a'))hide();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')hide();});
})();