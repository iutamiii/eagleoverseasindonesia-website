function openVideoModal(embedUrl){
  document.getElementById('videoModalFrame').src = embedUrl;
  document.getElementById('videoModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeVideoModal(e){
  if(e.target.id === 'videoModal' || e.currentTarget === e.target || e.target.classList.contains('video-modal-close')){
    document.getElementById('videoModal').classList.remove('active');
    document.getElementById('videoModalFrame').src = '';
    document.body.style.overflow = '';
  }
}

const partnerLogos = [
  {name:"St. Gabriel's Pre-University", src:"/preview/images/partner-st-gabriels.png"},
  {name:"University of the West of Scotland", src:"/preview/images/partner-uws-scotland.png"},
  {name:"Wales Young Institute", src:"/preview/images/partner-wales-young-institute.png"},
  {name:"Australasia Technology Institute", src:"/preview/images/partner-australasia-tech-institute.png"},
  {name:"Rosewood International College", src:"/preview/images/partner-rosewood-college.png"},
  {name:"UWS London Campus", src:"/preview/images/partner-uws-london.png"},
  {name:"TMC Academy", src:"/preview/images/partner-tmc-academy.png"},
  {name:"Aspen Experience", src:"/preview/images/partner-aspen-experience.png"},
  {name:"Kangaroo Immigration", src:"/preview/images/partner-kangaroo-immigration.png"},
  {name:"BSG Hospitality Interns", src:"/preview/images/partner-bsg-hospitality.png"},
  {name:"Analytics Institute of Australia", src:"/preview/images/partner-analytics-institute-aus.png"},
  {name:"Algoma University", src:"/preview/images/partner-algoma-university.png"},
  {name:"States College Australia", src:"/preview/images/partner-states-college-aus.png"},
  {name:"Truxton University", src:"/preview/images/partner-truxton-university.png"},
  {name:"Hospitality Placements USA", src:"/preview/images/partner-hospitality-placements-usa.png"},
  {name:"AIAT", src:"/preview/images/partner-aiat.png"},
  {name:"ALTEC College", src:"/preview/images/partner-altec-college.png"},
  {name:"Amity Global Institute", src:"/preview/images/partner-amity-global.png"},
  {name:"SITE", src:"/preview/images/partner-site.png"},
  {name:"Palmer Migration & Education", src:"/preview/images/partner-palmer-migration.png"},
  {name:"Sydney Polytechnic Institute", src:"/preview/images/partner-sydney-polytechnic.png"},
  {name:"Amazing-English", src:"/preview/images/partner-amazing-english.png"},
  {name:"VFS", src:"/preview/images/partner-vfs.png"},
  {name:"Maple Corp", src:"/preview/images/partner-maple-corp.png"},
  // New partners (Oct 2026) — upload each logo to /images/ with the exact file name below.
  // Any logo not uploaded yet is hidden automatically, so nothing looks broken in the meantime.
  {name:"PSB Academy", src:"/preview/images/partner-psb-academy.png"},
  {name:"MDIS", src:"/preview/images/partner-mdis.png"},
  {name:"Beacon College", src:"/preview/images/partner-beacon-college.png"},
  {name:"At-Sunrice DigiChef Academy", src:"/preview/images/partner-at-sunrice.png"},
  {name:"NTCA", src:"/preview/images/partner-ntca.png"},
  {name:"King's School of Culinary Arts", src:"/preview/images/partner-kings-college.png"},
  {name:"Australian Institute of Higher Education", src:"/preview/images/partner-aih.png"},
  {name:"Laurus Education", src:"/preview/images/partner-laurus-education.png"},
  {name:"Pacific College of Technology", src:"/preview/images/partner-pacific-college.png"},
  {name:"Australian Performing Arts Conservatory", src:"/preview/images/partner-apac.png"},
  {name:"Impel College of London", src:"/preview/images/partner-impel-college.png"},
  {name:"Confederation College", src:"/preview/images/partner-confederation-college.png"},
  {name:"GBS Malta", src:"/preview/images/partner-gbs-malta.png"},
  {name:"ICN Business School", src:"/preview/images/partner-icn.png"},
  {name:"INTI International University & Colleges", src:"/preview/images/partner-inti-university.png"},
  {name:"German Educare", src:"/preview/images/partner-german-educare.png"},
  {name:"IBS International Business School", src:"/preview/images/partner-ibs.png"},
  {name:"Campus Spain", src:"/preview/images/partner-campus-spain.png"},
  {name:"C3S Business School", src:"/preview/images/partner-c3s.png"},
  {name:"BHMS", src:"/preview/images/partner-bhms.png"},
  {name:"Schiller International University", src:"/preview/images/partner-schiller.png"},
  {name:"Stanley Prep", src:"/preview/images/partner-stanley-prep.png"},
];
function renderPartnerMarquee(id){
  const el = document.getElementById(id);
  if(!el) return;
  const doubled = partnerLogos.concat(partnerLogos);
  el.innerHTML = doubled.map(p=>`<img src="${p.src}" alt="${p.name}" title="${p.name}" onerror="this.remove();">`).join('');
}
renderPartnerMarquee('homePartnerTrack');

/* About page — static logo grid, 5 per row on desktop */
function renderPartnerGrid(id){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = partnerLogos.map(p=>`
    <div class="pg-card" title="${p.name}">
      <img src="${p.src}" alt="${p.name}" loading="lazy" onerror="this.parentElement.remove();">
    </div>`).join('');
}
renderPartnerGrid('aboutPartnerGrid');
const services = [
  {name:"Study Abroad Placement", icon:"cap", desc:"Full support for studying abroad, from choosing the right course to enrollment, so you step forward with confidence."},
  {name:"Visa Assisting", icon:"passport", desc:"End-to-end visa support: consultation, documentation, submission, and interview prep for smooth, compliant mobility."},
  {name:"J1 Internship", icon:"plane", desc:"End-to-end J-1 internship and trainee program support, connecting talent with U.S. host companies through legal, structured placements."},
  {name:"IELTS Preparation", icon:"book", desc:"Focused IELTS/TOEFL prep with expert guidance and mock tests to help you hit your target score."},
  {name:"CV Optimization", icon:"doc", desc:"Sharp, tailored CVs aligned with global hiring standards — helping candidates stand out and succeed."},
  {name:"Proof Reading", icon:"pencil", desc:"Careful review of essays, motivation letters, and official documents — polished, accurate, and error-free."},
  {name:"Job Support Services", icon:"briefcase", desc:"Tiered career support, from one-on-one consultation to a full year of career mentoring toward the global job market."},
  {name:"Sworn Translation", icon:"translate", desc:"Certified, accurate translation for legal, academic, and corporate documents that require official processing."},
];
const icons = {
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 2 8l10 5 10-5-10-5z"/preview/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/preview/><path d="M22 8v6"/preview/></svg>',
  passport:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/preview/><circle cx="12" cy="10" r="3"/preview/><path d="M8 17h8"/preview/></svg>',
  plane:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2.5 1.5V21l3.5-1 3.5 1v-1.5L13 18v-4.5l8 2.5z"/preview/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13z"/preview/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13z"/preview/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l5 5v13H7z"/preview/><path d="M14 3v5h5"/preview/><path d="M9.5 13h5M9.5 16.5h5"/preview/></svg>',
  pencil:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20l1-4 12-12 3 3-12 12-4 1z"/preview/><path d="M14 5l3 3"/preview/></svg>',
  briefcase:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/preview/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/preview/></svg>',
  translate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 5h11M8 3v2M11 5c-.6 3.5-2.6 6-6 8"/preview/><path d="M6 10c1.5 1.7 3.5 3 6 3.7"/preview/><path d="M14 21l4-9 4 9"/preview/><path d="M15.3 18h5.4"/preview/></svg>',
};
/* Services page — one service per row: text on the left, logo/image space on the right.
   Upload each image to /images/ as service-<name>.png (see svcImg below). Until an image
   is uploaded, the right side shows the service icon instead. */
const svcImg = {
  "Study Abroad Placement":"/preview/images/service-study-abroad.png",
  "Visa Assisting":"/preview/images/service-visa.png",
  "J1 Internship":"/preview/images/service-j1-internship.png",
  "IELTS Preparation":"/preview/images/service-ielts.png",
  "CV Optimization":"/preview/images/service-cv.png",
  "Proof Reading":"/preview/images/service-proofreading.png",
  "Job Support Services":"/preview/images/service-job-support.png",
  "Sworn Translation":"/preview/images/service-translation.png",
};
function svcCard(s){
  return `<div class="svc-row">
    <div class="svc-row-text">
      <b>${s.name}</b>
      <p>${s.desc}</p>
    </div>
    <div class="svc-row-logo">
      <img src="${(svcImg[s.name]||'').replace('.png','-white.png')}" alt="${s.name}" loading="lazy" onerror="this.parentElement.classList.add('no-img');this.remove();">
      <span class="svc-row-fallback">${icons[s.icon]}</span>
    </div>
  </div>`;
}
{ const el = document.getElementById('servicesFullGrid'); if(el) el.innerHTML = services.map(svcCard).join(''); }
const quickStats = [
  {n:"25", l:"Destination countries guided"},
  {n:"6+", l:"Years of founder experience in international education"},
  {n:"1,600+", l:"Universities we can help you apply to"},
];
{ const el = document.getElementById('miniStatList'); if(el) el.innerHTML = quickStats.map(s=>`<div class="mini-svc-item"><span class="dot"></span><b style="color:#fff;margin-right:6px;">${s.n}</b>${s.l}</div>`).join(''); }

/* ===== Services carousel — smooth sliding, infinite loop ===== */
const CAR_GAP = 22;
let carVis = 3;
let carIndex = 0; // position within tripled array
let carCardWidth = 0;
const tripleServices = services.concat(services).concat(services);
const svcViewportEl = document.querySelector('.carousel-wrap .carousel-viewport');

function visibleCountFor(w){ return w <= 600 ? 1 : (w <= 980 ? 2 : 3); }

function buildCarouselDOM(){
  const track = document.getElementById('svcCarousel');
  track.innerHTML = tripleServices.map(s=>`<div class="car-card"><div class="car-icon car-img"><img src="${svcImg[s.name]}" alt="" onerror="this.parentElement.classList.remove('car-img');this.outerHTML=icons['${s.icon}'];"></div><b>${s.name}</b></div>`).join('');
}

// Measures the carousel viewport element itself rather than window.innerWidth —
// window.innerWidth can read 0 depending on load/measurement timing (seen in
// some preview/embed contexts), which previously collapsed every card down to
// a sliver. ResizeObserver reports the real, laid-out width whenever it's
// ready or changes, so it self-corrects regardless of initial-load timing.
function layoutCarousel(vw){
  if(!vw){ return; }
  carVis = visibleCountFor(vw);
  carCardWidth = (vw - CAR_GAP * (carVis - 1)) / carVis;
  const svcCards = document.querySelectorAll('.car-card');
  for(let i=0; i<svcCards.length; i++){ svcCards[i].style.width = carCardWidth + 'px'; }
  moveTrack(false);
}

function moveTrack(animate){
  const track = document.getElementById('svcCarousel');
  track.style.transition = animate ? 'transform .5s cubic-bezier(.4,0,.2,1)' : 'none';
  track.style.transform = `translateX(-${carIndex * (carCardWidth + CAR_GAP)}px)`;
  updateDots();
}

function updateDots(){
  const active = ((carIndex % services.length) + services.length) % services.length;
  document.getElementById('carDots').innerHTML = services.map((_,i)=>`<span class="car-dot${i===active?' active':''}"></span>`).join('');
}

function shiftCarousel(dir){
  carIndex += dir;
  moveTrack(true);
}

if(svcViewportEl){
  document.getElementById('svcCarousel').addEventListener('transitionend', ()=>{
    if(carIndex >= services.length * 2){ carIndex -= services.length; moveTrack(false); }
    else if(carIndex <= 0){ carIndex += services.length; moveTrack(false); }
  });

  buildCarouselDOM();
  carIndex = services.length; // start on the middle copy

  if(window.ResizeObserver){
    new ResizeObserver(entries => {
      const w = entries[0].contentRect.width;
      // Deferring the DOM writes to the next frame (rather than mutating
      // synchronously inside the callback) avoids the browser's "ResizeObserver
      // loop completed with undelivered notifications" error — that fires when
      // a callback resizes elements it's observing within the same delivery cycle.
      requestAnimationFrame(() => layoutCarousel(w));
    }).observe(svcViewportEl);
  } else {
    // Fallback for engines without ResizeObserver: wait for full page load
    // (layout is reliably stable by then) and re-check on window resize.
    const fallbackLayout = () => layoutCarousel(svcViewportEl.offsetWidth || window.innerWidth || 996);
    window.addEventListener('load', fallbackLayout);
    window.addEventListener('resize', fallbackLayout);
    fallbackLayout();
  }
}

/* ===== TikTok video carousel — official iframe Player API, native scroll-snap ===== */
// Using www.tiktok.com/player/v1/{id} (TikTok's iframe Player API) rather than
// the blockquote+embed.js widget: it's a plain iframe (renders immediately,
// no dependent oEmbed fetch that can fail silently) and it exposes postMessage
// controls, which is what lets us pause every other video the moment one starts.
const ttVideoIds = [
  "7670767607032581383",
  "7667954020518055175",
  "7666862185578106120",
  "7660893149836905736",
  "7659756622876626184",
  "7656804817091726610",
  "7654828359171542279",
  "7652717852834696456",
  "7649756076287610119",
];
const ttScrollEl = document.getElementById('ttScrollViewport');
if(ttScrollEl){
  ttScrollEl.innerHTML = ttVideoIds.map(id=>`
    <div class="tt-embed-card">
      <iframe src="https://www.tiktok.com/player/v1/${id}?rel=0" allow="fullscreen" allowfullscreen loading="eager" title="TikTok video"></iframe>
    </div>`).join('');

  // Enforce "only one video plays at a time": when any player reports it has
  // started playing (onStateChange value 1), tell every other player to pause.
  const ttFrames = Array.from(ttScrollEl.querySelectorAll('iframe'));
  window.addEventListener('message', (e)=>{
    if(!e.data || e.data['x-tiktok-player'] !== true) return;
    if(e.data.type === 'onStateChange' && e.data.value === 1){
      ttFrames.forEach(f=>{
        if(f.contentWindow !== e.source){
          f.contentWindow.postMessage({type:'pause', 'x-tiktok-player':true}, '*');
        }
      });
    }
  });
}

function scrollTt(dir){
  const firstCard = ttScrollEl.firstElementChild;
  const step = (firstCard ? firstCard.getBoundingClientRect().width : 260) + 20;
  ttScrollEl.scrollBy({ left: dir * step, behavior: 'smooth' });
}

const events = [
  {d:"07", m:"Nov", title:"Menembus Batas Migrasi Australia: Jadi Chef di Australia", partner:"King's School of Culinary Arts", note:"Sabtu, 20.00 WIB · Online, Zoom", start:"2026-11-07T20:00:00+07:00", link:"https://bit.ly/iu_kings", poster:"/preview/images/webinar-kings-culinary.jpg"},
];

/* ===== Event promo helpers (home poster card and urgency label) ===== */
const EVT_LIVE_MS = 2*60*60*1000; // keep showing for 2 hours after start
function upcomingEvents(){
  const now = Date.now();
  return events.filter(e => !e.start || (new Date(e.start).getTime() + EVT_LIVE_MS) > now);
}
function evtUrgency(e){
  if(!e.start) return '';
  const t = new Date(e.start).getTime(), now = Date.now(), diff = t - now;
  if(diff <= 0) return 'LIVE NOW';
  const day = d => new Date(d.toLocaleString('en-US',{timeZone:'Asia/Jakarta'})).toDateString();
  const today = day(new Date(now)), evDay = day(new Date(t)), tmr = day(new Date(now + 86400000));
  if(evDay === today) return new Date(t).toLocaleString('en-US',{timeZone:'Asia/Jakarta',hour:'numeric',hour12:false}) >= 17 ? 'TONIGHT' : 'TODAY';
  if(evDay === tmr) return 'TOMORROW';
  if(diff < 7*86400000) return 'THIS WEEK';
  return 'UPCOMING';
}
function renderHomeEvents(){
  const el = document.getElementById('homeEvtList'); if(!el) return;
  const list = upcomingEvents();
  if(!list.length){
    el.innerHTML = `<a href="https://whatsapp.com/channel/0029Vb72LoyLSmbcJvDunX1U" target="_blank" class="evt-row"><div class="evt-date"><b>Soon</b><span class="mono">Next</span></div><div class="evt-info"><b>Next webinar coming soon</b><span>Follow the Eagle Overseas WhatsApp Channel for the latest schedule</span></div><div class="evt-arrow">→</div></a>`;
    return;
  }
  el.innerHTML = list.map(e => e.poster ? `
    <div class="evt-promo">
      <a class="evt-promo-poster" href="${e.link}" target="_blank" rel="noopener"><img src="${e.poster}" alt="${e.title}"></a>
      <div class="evt-promo-body">
        <span class="evt-badge" data-urgency="${e.start||''}">${evtUrgency(e)}</span>
        <b class="evt-promo-title">${e.title}</b>
        <span class="evt-promo-partner">with ${e.partner}</span>
        <span class="evt-promo-meta">${e.d} ${e.m} · ${e.note}</span>
        <div class="evt-promo-actions">
          <a class="btn btn-primary btn-sm" href="${e.link}" target="_blank" rel="noopener">Free Registration</a>
        </div>
      </div>
    </div>` : `
    <a href="/preview/event/" class="evt-row">
      <div class="evt-date"><b>${e.d}</b><span class="mono">${e.m}</span></div>
      <div class="evt-info"><b>${e.title}</b><span>${e.note}</span></div>
      <div class="evt-arrow">→</div>
    </a>`).join('');
}
function tickEventTimers(){
  document.querySelectorAll('[data-urgency]').forEach(n => { const ev = events.find(x => x.start === n.dataset.urgency); if(ev) n.textContent = evtUrgency(ev) || n.textContent; });
}
renderHomeEvents();
setInterval(tickEventTimers, 30000);

const testimonials = [
  {name:"Annisa", place:"Canada", text:"Sis Indira has helped me for the past 2 years relentlessly. She met me where I was and fulfilled what I needed for every twist and turn. I can finally start my study journey in Canada this year."},
  {name:"Yaya", place:"Pati, Indonesia", text:"Highly recommended. Patient, detailed, and professional guidance — always answering questions to the core, clearly and quickly. Worth every consultation."},
  {name:"Indra", place:"Pati, Indonesia", text:"It's always been my dream to immigrate to Canada. After a private consultation with Ms. Indira, I now have a broad understanding of the process and I'm on my way to making it real."},
];

function testiCardHTML(t){
  const initials = (t.name || '').slice(0,2).toUpperCase();
  const placeHTML = t.place ? `<span>${t.place}</span>` : '';
  return `<div class="testi-card"><p>&ldquo;${t.text}&rdquo;</p><div class="testi-who"><div class="init-badge" style="width:38px;height:38px;font-size:12px;">${initials}</div><div><b>${t.name}</b>${placeHTML}</div></div></div>`;
}

function renderTestimonialMarquee(){
  const track = document.getElementById('homeTestiGrid');
  if(!track) return;
  // doubled so the CSS loop (translateX 0 -> -50%) is seamless
  const doubled = testimonials.concat(testimonials);
  track.innerHTML = doubled.map(testiCardHTML).join('');
}
renderTestimonialMarquee();

/* ===== Community testimonials — pulled from a published Google Sheet =====
   Setup:
   1. Google Form with 3 questions titled exactly: Name / Program / Destination / Testimonial
   2. Link the form to a Sheet (Responses tab -> green Sheets icon)
   3. In that Sheet, add one more column titled exactly: Approved — type Yes on
      rows you want live on the site
   4. File > Share > Publish to web -> pick that sheet tab -> format: CSV -> Publish
   5. Paste the published CSV link below */
const TESTIMONIAL_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSkgv2Gul48OypAIPCrvR6pdsjge7PTQMMD9ePWbZITBKCmuHL7Q6Iyvc8-Loh0rvdNvg119EDHgghr/pub?gid=417347468&single=true&output=csv";

function escapeHTML(str){
  return String(str).replace(/preview/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function parseCSV(str){
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for(let i=0;i<str.length;i++){
    const c = str[i], next = str[i+1];
    if(inQuotes){
      if(c === '"' && next === '"'){ field += '"'; i++; }
      else if(c === '"'){ inQuotes = false; }
      else{ field += c; }
    }else{
      if(c === '"'){ inQuotes = true; }
      else if(c === ','){ row.push(field); field=''; }
      else if(c === '\n'){ row.push(field); rows.push(row); row=[]; field=''; }
      else if(c === '\r'){ /* skip */ }
      else{ field += c; }
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows;
}

function parseSheetCSV(str){
  const table = parseCSV(str.trim());
  if(!table.length) return {headers:[], rows:[]};
  const headers = table[0].map(h=>h.trim());
  const rows = table.slice(1).filter(r=>r.length>1 || r[0]).map(r=>{
    const obj = {};
    headers.forEach((h,i)=>{ obj[h] = (r[i]||'').trim(); });
    return obj;
  });
  return {headers, rows};
}

// Finds the header whose text contains one of the keywords (case-insensitive),
// so the sheet's column titles don't need to match the code exactly.
function findHeaderKey(headers, keywords){
  const found = headers.find(h=>{
    const low = h.toLowerCase();
    return keywords.some(kw=>low.includes(kw));
  });
  return found || null;
}

async function loadCommunityTestimonials(){
  if(!TESTIMONIAL_SHEET_CSV_URL) return;
  try{
    const res = await fetch(TESTIMONIAL_SHEET_CSV_URL);
    if(!res.ok) return;
    const {headers, rows} = parseSheetCSV(await res.text());
    const nameKey = findHeaderKey(headers, ['name','nama']);
    const placeKey = findHeaderKey(headers, ['program','destination','tujuan','negara']);
    const testiKey = findHeaderKey(headers, ['testimoni']);
    const approvedKey = findHeaderKey(headers, ['approv','setuju']);
    console.log('[testimonials] sheet headers:', headers, '-> matched:', {nameKey, placeKey, testiKey, approvedKey});
    if(!approvedKey){ console.warn('[testimonials] No "Approved" column found in the sheet headers above.'); return; }
    const approved = rows.filter(r=>{
      const v = (r[approvedKey]||'').toLowerCase();
      return v === 'yes' || v === 'y' || v === 'true' || v === '1';
    });
    if(!approved.length) return;
    approved.forEach(r=>{
      testimonials.push({
        name: escapeHTML(nameKey ? r[nameKey] : ''),
        place: escapeHTML(placeKey ? r[placeKey] : ''),
        text: escapeHTML(testiKey ? r[testiKey] : '')
      });
    });
    renderTestimonialMarquee(); // re-render with the combined, still-doubled list
  }catch(e){
    console.warn('Could not load community testimonials:', e);
  }
}
if(document.getElementById('homeTestiGrid')) loadCommunityTestimonials();

/* Small UWS London video reviews */
const uwsVideos = [
  {name:"Rizky Budi", fileId:"1YqBo8HnQegr-YSFaBpD9HYBcWu__75Z8"},
  {name:"Indra Anggoro", fileId:"1IrAW2e7j8Y8S7Fn4KMsH4vVU_zGAKTwe"},
];
{ const el = document.getElementById('uwsVideoTesti'); if(el) el.innerHTML = uwsVideos.map(v=>`
  <div class="mini-video-card" onclick="openVideoModal('https://drive.google.com/file/d/${v.fileId}/preview')">
    <div class="mini-video-thumb">
      <img src="https://drive.google.com/thumbnail?id=${v.fileId}&sz=w400" alt="${v.name} — UWS London" onerror="this.remove();">
      <div class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/preview/></svg></div>
    </div>
    <span class="name-highlight">${v.name} — UWS London</span>
  </div>`).join(''); }

const pastEvents = [
  {title:"Start Your Career as a Chef: Start in Singapore. Graduate with a UK Qualification. Go Global. (At-Sunrice GlobalChef Academy)", date:"Past · November 2026", src:"/preview/images/webinar-at-sunrice.jpg"},
  {title:"Study Construction in New Zealand: Your Pathway to Green List Careers (Laurus Education NZ)", date:"Past · October 2026", src:"/preview/images/webinar-laurus-nz.png"},
  {title:"Singapore, Your Door to APAC: Study. Network. Go Global. Last Chance 50% Scholarship (TMC Academy Singapore)", date:"Past · October 2026", src:"/preview/images/webinar-tmc-singapore.png"},
  {title:"Move to Barcelona: Study in Spain. Connect with Europe. Build Your Global Career. (C3S Business School)", date:"Past · October 2026", src:"/preview/images/webinar-c3s-barcelona.png"},
  {title:"Your Pathway to Austria & Germany: Two Destinations, Two Language Options. English or German, You Choose! (German Educare)", date:"Past · October 2026", src:"/preview/images/webinar-german-educare.jpg"},
  {title:"Kuliah S1 di Belgia Gratis? Bongkar Strategi Mendapatkan Beasiswa S1 Fully Funded di Belgia bersama Scholarship Awardee", date:"Past · October 2026", src:"/preview/images/webinar-belgium-s1.jpg"},
];
/* ===== Past Events — simple static list ===== */
function renderPastEvents(){
  const list = document.getElementById('pastEventsList');
  if(!list) return;
  list.innerHTML = pastEvents.map(e=>`<div class="pe-simple-item"><b>${e.title}</b><span>${e.date}</span></div>`).join('');
}
renderPastEvents();

const replays = [
  {ytId:"_3HZLfDNc8M", title:"Hospitality Internship in New Zealand: Gain 6-12 Months of International Exposure (Aspen Experience)", date:"Webinar · 15 October 2026"},
  {ytId:"o4uK1PavjZM", title:"Unlocking Hidden Gem in Europe: Strategi Kuliah Super Hemat di Spanyol Hanya 15jt-an/Year (Campus Spain)", date:"Webinar · 14 October 2026"},
  {ytId:"SJLNaQLo2jw", title:"Bongkar Strategi Tembus LPDP 2027: Kunci Lolos Beasiswa Sekaligus Siap Jadi Rebutan Industri", date:"Webinar · 13 October 2026"},
];
{ const el = document.getElementById('replayGrid'); if(el) el.innerHTML = replays.map(r=>`
  <div class="replay-card" onclick="openVideoModal('https://www.youtube.com/embed/${r.ytId}?autoplay=1')">
    <div class="replay-thumb">
      <img src="https://img.youtube.com/vi/${r.ytId}/hqdefault.jpg" alt="${r.title}" onerror="this.remove();">
      <div class="play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/preview/></svg></div>
    </div>
    <div class="replay-info"><b>${r.title}</b><span>${r.date}</span></div>
  </div>`).join(''); }

const faqs = [
  {q:"What happens in the first consultation?", a:"We take time to understand your background and goals, then walk you through the pathways that fit best — so you leave with a clear next step."},
  {q:"Which countries does Eagle Overseas support?", a:"We support clients heading to 25 destination countries, including Canada, Australia, the UK, and the US, through our network of partner campuses and host companies."},
  {q:"Does Eagle Overseas guarantee visa approval?", a:"We never promise certainty — every pathway is presented as an opportunity we prepare you for, never a guarantee."},
  {q:"How do I register for a webinar?", a:"Register directly through the WhatsApp button on the Event page, or reach us through any of the contact channels listed."},
];
{ const el = document.getElementById('faqList'); if(el) el.innerHTML = faqs.map((f,i)=>`
  <div class="faq-item" data-i="${i}">
    <button class="faq-q" onclick="toggleFaq(${i})"><span>${f.q}</span><span class="plus">+</span></button>
    <div class="faq-a" id="faqA${i}"><p>${f.a}</p></div>
  </div>`).join(''); }
function toggleFaq(i){
  const item = document.querySelector(`.faq-item[data-i="${i}"]`);
  const a = document.getElementById('faqA'+i);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el=>{el.classList.remove('open');el.querySelector('.faq-a').style.maxHeight=null;});
  if(!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight+20+'px'; }
}


/* ===== Event gallery lightbox ===== */
(function(){
  var lb=document.getElementById('lightbox'); if(!lb) return;
  var img=document.getElementById('lbImg'), cap=document.getElementById('lbCap');
  var items=[], idx=0;
  var vid=document.getElementById('lbVid');
  function show(i){ idx=(i+items.length)%items.length; var a=items[idx], im=a.querySelector('img'), v=a.getAttribute('data-video');
    vid.innerHTML='';
    if(v){ img.style.display='none'; img.src=''; vid.style.display='block'; vid.classList.toggle('landscape', a.getAttribute('data-orient')==='landscape'); vid.innerHTML='<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>'; cap.textContent=''; }
    else { vid.style.display='none'; img.style.display='block'; img.src=a.getAttribute('href'); img.alt=im?im.alt:''; cap.textContent=im?im.alt:''; } }
  function open(group,el){ items=[].slice.call(document.querySelectorAll('[data-gallery="'+group+'"]')); show(items.indexOf(el)); lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function close(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; img.src=''; vid.innerHTML=''; }
  document.querySelectorAll('[data-gallery]').forEach(function(a){ a.addEventListener('click',function(e){ e.preventDefault(); open(a.getAttribute('data-gallery'),a); }); });
  lb.querySelector('.lb-close').addEventListener('click',close);
  lb.querySelector('.lb-prev').addEventListener('click',function(e){e.stopPropagation();show(idx-1);});
  lb.querySelector('.lb-next').addEventListener('click',function(e){e.stopPropagation();show(idx+1);});
  lb.addEventListener('click',function(e){ if(e.target===lb) close(); });
  document.addEventListener('keydown',function(e){ if(!lb.classList.contains('open')) return; if(e.key==='Escape') close(); if(e.key==='ArrowLeft') show(idx-1); if(e.key==='ArrowRight') show(idx+1); });
  var sx=null; lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
  lb.addEventListener('touchend',function(e){ if(sx===null) return; var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>50) show(idx+(dx<0?1:-1)); sx=null; });
})();
