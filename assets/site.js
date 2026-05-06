
(function(){
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  function activeFromPath(){
    const path = location.pathname.split('/').pop() || 'index.html';
    let key = 'home';
    if(path === 'blog.html') key = 'blog';
    else if(path === 'comics.html') key = 'comics';
    else if(path === 'about.html') key = 'about';
    else if(path === 'contact.html') key = 'contact';
    else if(location.hash.includes('printables')) key = 'printables';
    else if(location.hash.includes('figma')) key = 'figma';
    document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('active', a.dataset.nav === key));
  }

  function initHeroRotator(){
    const words = Array.from(document.querySelectorAll('.hero-word'));
    if(!words.length) return;
    words.forEach(word => {
      if(word.dataset.split === '1') return;
      const text = word.textContent.trim();
      word.textContent = '';
      Array.from(text).forEach((ch, i) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.transitionDelay = `${Math.min(i * 36, 420)}ms`;
        word.appendChild(span);
      });
      word.dataset.split = '1';
    });
    let current = Math.max(0, words.findIndex(w => w.classList.contains('active')));
    words.forEach((w,i)=>w.classList.toggle('active', i === current));
    setInterval(() => {
      const old = words[current];
      const nextIndex = (current + 1) % words.length;
      const next = words[nextIndex];
      old.classList.remove('active');
      old.classList.add('out');
      next.classList.remove('out');
      next.classList.add('active');
      window.setTimeout(() => old.classList.remove('out'), 850);
      current = nextIndex;
    }, 2800);
  }

  function initHeroCanvas(){
    const canvas = document.getElementById('heroCanvas');
    const hero = document.querySelector('.hero-animated');
    if(!canvas || !hero) return;
    const ctx = canvas.getContext('2d');
    if(!ctx) return;
    const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, dpr = 1, raf = 0;
    function resize(){
      const rect = hero.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function blob(x,y,r,inner,outer){
      const g = ctx.createRadialGradient(x,y,0,x,y,r);
      g.addColorStop(0, inner);
      g.addColorStop(1, outer);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x,y,r,0,Math.PI*2);
      ctx.fill();
    }
    function wave(t, layer){
      const base = h * (0.56 + layer * 0.085);
      const amp = 22 + layer * 10;
      const speed = 0.00045 + layer * 0.00016;
      const freq = 0.006 + layer * 0.0012;
      const colors = [
        'rgba(14,165,233,.22)',
        'rgba(99,102,241,.20)',
        'rgba(20,184,166,.16)',
        'rgba(255,255,255,.08)'
      ];
      ctx.beginPath();
      ctx.moveTo(0, h + 30);
      ctx.lineTo(0, base);
      for(let x = 0; x <= w + 18; x += 18){
        const y = base + Math.sin(x * freq + t * speed + layer * 1.8) * amp + Math.cos(x * freq * .55 + t * speed * 1.8) * amp * .45;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h + 30);
      ctx.closePath();
      ctx.fillStyle = colors[layer % colors.length];
      ctx.fill();
    }
    function draw(time){
      const t = motionOK ? time : 0;
      const g = ctx.createLinearGradient(0,0,w,h);
      g.addColorStop(0,'#06111f');
      g.addColorStop(.52,'#101a35');
      g.addColorStop(1,'#062e38');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);
      blob(w*.14 + Math.sin(t*.00025)*24, h*.22, Math.min(w,h)*.34, 'rgba(34,211,238,.30)', 'rgba(34,211,238,0)');
      blob(w*.78 + Math.cos(t*.0002)*28, h*.20, Math.min(w,h)*.40, 'rgba(124,58,237,.28)', 'rgba(124,58,237,0)');
      blob(w*.54, h*.86, Math.min(w,h)*.46, 'rgba(20,184,166,.16)', 'rgba(20,184,166,0)');
      for(let i=0;i<4;i++) wave(t,i);
      ctx.save();
      ctx.globalAlpha = .34;
      ctx.fillStyle = '#dff7ff';
      for(let i=0;i<42;i++){
        const px = (i * 157 + (motionOK ? t*.012 : 0)) % (w + 80) - 40;
        const py = (Math.sin(i*9.7 + t*.00045) * .5 + .5) * h * .62 + h*.08;
        const r = (i % 3) + .8;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
      if(motionOK) raf = requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize, {passive:true});
    draw(0);
    if(motionOK) raf = requestAnimationFrame(draw);
  }

  ready(function(){
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    if(btn && nav){
      btn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    const dd = document.getElementById('gamesDropdown');
    if(dd){
      const b = dd.querySelector('.nav-dropbtn');
      b && b.addEventListener('click', (e)=>{ e.preventDefault(); const open = dd.classList.toggle('open'); b.setAttribute('aria-expanded', open ? 'true':'false'); });
      document.addEventListener('click', e=>{ if(!dd.contains(e.target)) dd.classList.remove('open'); });
      document.addEventListener('keydown', e=>{ if(e.key === 'Escape') dd.classList.remove('open'); });
    }
    document.querySelectorAll('[data-year]').forEach(el=>el.textContent = new Date().getFullYear());
    initHeroRotator();
    initHeroCanvas();
    activeFromPath();
  });
  window.addEventListener('hashchange', function(){
    activeFromPath();
    if(typeof gtag === 'function'){
      gtag('event','page_view',{page_title:document.title,page_location:location.href,page_path:location.pathname + location.hash});
    }
  });
  window.A4Site = { activeFromPath };
})();
