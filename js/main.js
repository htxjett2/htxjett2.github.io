// Small interactions: nav toggle, smooth scroll, set copyright year
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      navList.classList.toggle('open');
      // toggle aria-expanded for accessibility
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.nav-list a').forEach(a=>{
    a.addEventListener('click', ()=>{ if(navList.classList.contains('open')) navList.classList.remove('open'); });
  });

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
