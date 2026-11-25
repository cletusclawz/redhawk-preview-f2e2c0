// Redhawk shared behavior (all pages)
(function(){
  const nav=document.getElementById('nav');
  const solid=()=>nav&&nav.classList.toggle('solid',scrollY>40||document.body.classList.contains('inner')&&scrollY>10);
  addEventListener('scroll',solid,{passive:true});solid();
  // mobile menu
  if(nav){
    const ul=nav.querySelector('ul');const b=document.createElement('button');
    b.className='mtoggle';b.type='button';b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Open menu');b.innerHTML='<span></span><span></span>';
    nav.querySelector('.wrap').appendChild(b);
    b.addEventListener('click',()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
    ul.addEventListener('click',e=>{if(e.target.closest('a'))nav.classList.remove('open')});
  }
  const yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
  // reveal
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.1});els.forEach(el=>io.observe(el))}
  else els.forEach(el=>el.classList.add('on'));
  // preview forms: never send anything
  document.querySelectorAll('form[data-preview]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!f.reportValidity())return;f.classList.add('sent');f.querySelector('.done').scrollIntoView({behavior:'smooth',block:'center'})}));
})();
