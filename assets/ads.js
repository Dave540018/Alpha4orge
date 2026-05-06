
(function(){
  const KEYS = {
    rect300x250: 'f7c53ea38f793fd4f60f274c989e86a3',
    sky160x600: '001d2d159d6e43ef2e7fbbbcd1832bc4',
    banner468x60: 'ede7e3ae9689c152e525018b06e65432',
    banner320x50: '4404d2d96e9fdd2085c017e2ecbf8d84',
    bar728x90: 'eb1a078043c7129e0f97b92e26a08a3e'
  };
  function visible(el){
    if(!el) return false;
    const st = getComputedStyle(el);
    return st.display !== 'none' && st.visibility !== 'hidden' && el.offsetParent !== null;
  }
  function config(slot){
    const mobile = window.matchMedia('(max-width: 680px)').matches;
    if(slot === 'sky') return {key:KEYS.sky160x600,w:160,h:600,cls:'ad-sky'};
    if(slot === 'banner') return mobile ? {key:KEYS.banner320x50,w:320,h:50,cls:'ad-mobile'} : {key:KEYS.bar728x90,w:728,h:90,cls:'ad-banner'};
    if(slot === 'small-banner') return mobile ? {key:KEYS.banner320x50,w:320,h:50,cls:'ad-mobile'} : {key:KEYS.banner468x60,w:468,h:60,cls:'ad-mobile'};
    return {key:KEYS.rect300x250,w:300,h:250,cls:'ad-rect'};
  }
  function loadAdsterra(box, key, w, h){
    return new Promise(resolve => {
      if(!box) return resolve(false);
      box.innerHTML = '';
      box.style.width = w + 'px';
      box.style.minHeight = h + 'px';
      const def = document.createElement('script');
      def.type = 'text/javascript';
      def.text = "window.atOptions={key:'"+key+"',format:'iframe',height:"+h+",width:"+w+",params:{}};";
      const inv = document.createElement('script');
      inv.type = 'text/javascript';
      inv.src = 'https://www.highperformanceformat.com/' + key + '/invoke.js';
      inv.async = true;
      inv.onload = () => resolve(true);
      inv.onerror = () => { box.textContent = 'Advertisement'; resolve(false); };
      box.appendChild(def);
      box.appendChild(inv);
      setTimeout(()=>resolve(true), 1800);
    });
  }
  async function mount(root=document){
    const slots = [...root.querySelectorAll('.ad-slot:not([data-loaded="1"])')];
    for(const slot of slots){
      if(!visible(slot)) continue;
      const box = slot.querySelector('.ad-box') || slot;
      const c = config(slot.dataset.adSlot || 'rect');
      slot.classList.add(c.cls);
      slot.dataset.loaded = '1';
      await loadAdsterra(box, c.key, c.w, c.h);
    }
  }
  window.A4Ads = { mount };
  document.addEventListener('DOMContentLoaded', ()=>mount());
  window.addEventListener('a4:routechange', ()=>setTimeout(()=>mount(), 60));
})();
