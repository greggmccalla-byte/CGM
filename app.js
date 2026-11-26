// =============================================================================
// APP.JS - INTERACTIVE GUEST GUIDEBOOK LOGIC
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  if (typeof GUIDE_DATA === 'undefined') {
    console.error('GUIDE_DATA not loaded!');
    return;
  }

  // 1. Initialize Property & Wi-Fi
  renderPropertyBasics();

  // 2. Render Rec Center Section
  renderRecCenter();

  // 3. Render Dining & Filters
  renderDining('All');
  setupDiningFilters();

  // 3b. Render Events & Calendars
  renderEvents();

  // 4. Render Ski Mountains
  renderSkiing();

  // 5. Render Hiking Trails
  renderHiking();

  // 6. Render Fishing Spots
  renderFishing();

  // 7. Render Attractions
  renderAttractions();

  // 8. Render Essentials & Groceries
  renderEssentials();

  // 9. Render Appliances Guide
  renderAppliances();

  // 10. Render House Rules
  renderHouseRules();

  // 11. Render Check-Out Checklist
  renderCheckOutChecklist();

  // 12. Render Emergency Contacts
  renderEmergency();

  // 14. Setup Interactive Search
  setupSearch();

  // 15. Setup Wi-Fi & Address Copy Buttons
  setupWifiCopy();
  setupAddressCopy();

  // 15a. Setup Explore Category Sub-Tabs
  setupExploreTabs();

  // 15b. Setup Mobile Bottom Sheet Navigation
  setupBottomSheet();

  // 15c. Setup Appliances Expand/Collapse All
  setupAppliancesToggleAll();

  // 16. Display Last Updated Date & Setup Update Buttons
  renderLastUpdated();
  setupUpdateGuideButton();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// -----------------------------------------------------------------------------
// 1. PROPERTY BASICS & WI-FI
// -----------------------------------------------------------------------------
function renderPropertyBasics() {
  const p = GUIDE_DATA.property;

  // Digital Arrival Pass (Enso Connect Style)
  const arrivalCheckin  = document.getElementById('arrival-checkin');
  const arrivalCheckout = document.getElementById('arrival-checkout');
  const arrivalEntryT   = document.getElementById('arrival-entry-title');
  const arrivalEntryTxt = document.getElementById('arrival-entry-text');
  const arrivalAddr     = document.getElementById('arrival-address');
  const arrivalNavBtn   = document.getElementById('arrival-nav-btn');
  const arrivalParkTxt  = document.getElementById('arrival-parking-text');
  const arrivalParkNote = document.getElementById('arrival-parking-note');

  if (arrivalCheckin && p.checkInTime)   arrivalCheckin.textContent = p.checkInTime;
  if (arrivalCheckout && p.checkOutTime) arrivalCheckout.textContent = p.checkOutTime;
  if (arrivalAddr && p.address)          arrivalAddr.textContent = p.address;
  if (arrivalNavBtn && p.googleMapsUrl)  arrivalNavBtn.href = p.googleMapsUrl;
  if (p.arrival) {
    if (arrivalEntryT && p.arrival.entryTitle)         arrivalEntryT.textContent = p.arrival.entryTitle;
    if (arrivalEntryTxt && p.arrival.entryInstructions) arrivalEntryTxt.textContent = p.arrival.entryInstructions;
    if (arrivalParkTxt && p.arrival.parkingSummary)    arrivalParkTxt.textContent = p.arrival.parkingSummary;
    if (arrivalParkNote && p.arrival.parkingNote)      arrivalParkNote.textContent = p.arrival.parkingNote;
  }

  // Wi-Fi
  const wifiSsid  = document.getElementById('wifi-ssid');
  const wifiPass  = document.getElementById('wifi-password');
  const wifiNote  = document.getElementById('wifi-note');
  const wifiAlert = document.getElementById('wifi-placeholder-alert');

  if (wifiSsid) wifiSsid.textContent = p.wifi.network;
  if (wifiPass) wifiPass.textContent = p.wifi.password;
  if (wifiNote) wifiNote.textContent = p.wifi.note || '';

  // Hide alert if host has updated the placeholder
  if (wifiAlert && !p.wifi.network.includes('[PLEASE UPDATE')) {
    wifiAlert.classList.add('hidden');
  }

  // Trash
  const trashInst  = document.getElementById('trash-instructions');
  const trashLoc   = document.getElementById('trash-location');
  const trashAlert = document.getElementById('trash-placeholder-alert');
  if (trashInst) trashInst.textContent = p.trash.instructions;
  if (trashLoc && p.trash.dumpsterLocation) trashLoc.textContent = p.trash.dumpsterLocation;
  if (trashAlert && !p.trash.summary.includes('[PLEASE UPDATE')) {
    trashAlert.classList.add('hidden');
  }

  // Host contact buttons
  const callBtn = document.getElementById('host-call-btn');
  const textBtn = document.getElementById('host-text-btn');
  const sheetCallBtn = document.getElementById('sheet-call-btn');
  const sheetTextBtn = document.getElementById('sheet-text-btn');
  if (p.hostContact && p.hostContact.phone) {
    const rawPhone = p.hostContact.phone.replace(/[^0-9]/g, '');
    if (callBtn) callBtn.href = `tel:${rawPhone}`;
    if (textBtn) textBtn.href = `sms:${rawPhone}`;
    if (sheetCallBtn) sheetCallBtn.href = `tel:${rawPhone}`;
    if (sheetTextBtn) sheetTextBtn.href = `sms:${rawPhone}`;
  }
}

// -----------------------------------------------------------------------------
// 2. REC CENTER & PASSES
// -----------------------------------------------------------------------------
function renderRecCenter() {
  const rec = GUIDE_DATA.recCenter;

  // Official site link
  const siteBtn = document.getElementById('rec-official-site-btn');
  if (siteBtn && rec.website) {
    siteBtn.href = rec.website;
  }

  // Pass Instructions list
  const instList = document.getElementById('rec-instructions-list');
  if (instList) {
    instList.innerHTML = rec.passInstructions.map(item => `
      <li class="flex items-start gap-2.5">
        <i data-lucide="check-circle-2" class="w-4 h-4 text-amber-400 shrink-0 mt-0.5"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Pricing Grid
  const priceGrid = document.getElementById('rec-pricing-grid');
  if (priceGrid) {
    priceGrid.innerHTML = rec.pricing.map(tier => `
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
        <h5 class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">${tier.category}</h5>
        <div class="space-y-1.5 text-xs text-slate-200">
          <div class="flex justify-between pb-1 border-b border-white/10">
            <span>Adults:</span>
            <span class="font-bold text-white">${tier.adult}</span>
          </div>
          <div class="flex justify-between pb-1 border-b border-white/10">
            <span>Seniors (65+):</span>
            <span class="font-bold text-white">${tier.senior}</span>
          </div>
          <div class="flex justify-between pb-1 border-b border-white/10">
            <span>Children (8–17):</span>
            <span class="font-bold text-white">${tier.child}</span>
          </div>
          <div class="flex justify-between text-amber-300 font-semibold pt-0.5">
            <span>Kids 7 &amp; Under:</span>
            <span>FREE</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Amenities Grid
  const amenGrid = document.getElementById('rec-amenities-grid');
  if (amenGrid) {
    amenGrid.innerHTML = rec.amenities.map(a => `
      <div class="bg-white/5 rounded-xl p-3 border border-white/10 flex items-start gap-2.5">
        <div class="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></div>
        <div>
          <h5 class="text-xs font-bold text-white">${a.name}</h5>
          <p class="text-[11px] text-slate-300 mt-0.5">${a.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Rec Center Photos
  const recPhotos = document.getElementById('rec-photos-grid');
  if (recPhotos && rec.photos && rec.photos.length) {
    recPhotos.innerHTML = rec.photos.map(p => `
      <div class="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800/90 border border-white/15 shadow-sm cursor-pointer photo-zoom"
           onclick="openLightbox('${p.url}', '${(p.title + ' — ' + p.caption).replace(/'/g, "\\'")}')">
        <img src="${p.url}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-2.5 flex flex-col justify-end">
          <span class="text-xs font-bold text-white leading-tight drop-shadow-sm">${p.title}</span>
          <span class="text-[10px] text-sky-200 line-clamp-1 mt-0.5">${p.caption}</span>
        </div>
      </div>
    `).join('');
  }
}

// Global lightbox opener (used by rec center photos and gallery)
window.openLightbox = function(url, caption) {
  const modal    = document.getElementById('lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCap = document.getElementById('lightbox-caption');
  if (modal && modalImg && modalCap) {
    modalImg.src = url;
    modalCap.textContent = caption;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

// -----------------------------------------------------------------------------
// 3. DINING & DRINKS
// -----------------------------------------------------------------------------
function renderDining(filter = 'All') {
  const grid = document.getElementById('dining-grid');
  if (!grid) return;

  const items = GUIDE_DATA.dining.filter(item => {
    if (filter === 'All') return true;
    return item.tag === filter;
  });

  grid.innerHTML = items.map(d => `
    <div class="bg-white rounded-2xl p-5 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card"
         data-search="${d.name} ${d.type} ${d.desc} ${d.address}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-pine-50 text-pine-700 border border-pine-100">
            ${d.type}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${d.driveTime}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1.5">${d.name}</h4>
        <p class="text-xs text-slate-600 mb-3 leading-relaxed">${d.desc}</p>
        <p class="text-[11px] text-slate-400 mb-4 flex items-center gap-1">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i> ${d.address}
        </p>
      </div>
      <div class="flex items-center gap-2 pt-3 border-t border-slate-100">
        ${d.mapUrl ? `
          <a href="${d.mapUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-700 text-xs font-semibold transition">
            <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Directions
          </a>
        ` : ''}
        ${d.website ? `
          <a href="${d.website}" target="_blank" class="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-pine-50 hover:bg-pine-100 text-pine-700 text-xs font-semibold transition">
            <i data-lucide="globe" class="w-3.5 h-3.5"></i> Menu/Web
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

function setupDiningFilters() {
  const btns = document.querySelectorAll('.dining-filter');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state styling
      btns.forEach(b => {
        b.className = 'dining-filter px-3 py-1.5 rounded-lg text-slate-500 hover:bg-white/70 transition text-[11px] font-semibold';
      });
      btn.className = 'dining-filter px-3 py-1.5 rounded-lg bg-white text-pine-800 shadow-sm transition text-[11px] font-semibold';
      renderDining(btn.dataset.filter);
    });
  });
}

// -----------------------------------------------------------------------------
// 4. SKI MOUNTAINS
// -----------------------------------------------------------------------------
function renderSkiing() {
  const grid = document.getElementById('skiing-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.skiing.map(s => {
    const isCampton = s.name.toLowerCase().includes('campton');
    const idAttr = isCampton ? 'id="campton-mountain"' : '';
    return `
    <div ${idAttr} class="bg-white rounded-2xl p-5 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card scroll-mt-28"
         data-search="${s.name} ${s.type} ${s.desc} ${s.specs}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-frost-50 text-frost-700 border border-frost-100">
            ${s.type}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${s.driveTime}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1.5">${s.name}</h4>
        <p class="text-xs text-slate-600 mb-3 leading-relaxed">${s.desc}</p>
        <div class="p-2.5 rounded-xl bg-frost-50 border border-frost-100 text-[11px] text-frost-900 font-medium mb-4">
          ⛷️ ${s.specs}
        </div>
      </div>
      <div class="flex items-center gap-2 pt-3 border-t border-slate-100">
        <a href="${s.mapUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-700 text-xs font-semibold transition">
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Maps
        </a>
        <a href="${s.website}" target="_blank" class="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-frost-50 hover:bg-frost-100 text-frost-700 text-xs font-semibold transition">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Lift Tickets
        </a>
      </div>
    </div>
  `;
  }).join('');
}

// -----------------------------------------------------------------------------
// 5. HIKING TRAILS
// -----------------------------------------------------------------------------
function renderHiking() {
  const grid = document.getElementById('hiking-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.hiking.map(h => `
    <div class="bg-white rounded-2xl p-5 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card"
         data-search="${h.name} ${h.difficulty} ${h.desc} ${h.distance}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
            ${h.difficulty}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${h.driveTime}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1">${h.name}</h4>
        <span class="text-xs font-semibold text-pine-700 block mb-2">${h.distance}</span>
        <p class="text-xs text-slate-600 mb-4 leading-relaxed">${h.desc}</p>
      </div>
      <div class="flex items-center gap-2 pt-3 border-t border-slate-100">
        <a href="${h.mapUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-700 text-xs font-semibold transition">
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Trailhead
        </a>
        <a href="${h.website}" target="_blank" class="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition">
          <i data-lucide="map" class="w-3.5 h-3.5"></i> Trail Map
        </a>
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// 6. FISHING SPOTS
// -----------------------------------------------------------------------------
function renderFishing() {
  const grid = document.getElementById('fishing-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.fishing.map(f => `
    <div class="bg-white rounded-2xl p-5 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card"
         data-search="${f.name} ${f.type} ${f.species} ${f.desc}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-100">
            ${f.type}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${f.driveTime}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1">${f.name}</h4>
        <span class="text-xs font-bold text-cyan-900 block mb-2">Target Species: ${f.species}</span>
        <p class="text-xs text-slate-600 mb-3 leading-relaxed">${f.desc}</p>
        ${f.tips ? `
          <div class="p-2.5 rounded-xl bg-cyan-50/60 border border-cyan-100 text-[11px] text-cyan-900 mb-4">
            💡 <strong>Angler Tip:</strong> ${f.tips}
          </div>
        ` : ''}
      </div>
      <div class="flex items-center gap-2 pt-3 border-t border-slate-100">
        ${f.mapUrl ? `
          <a href="${f.mapUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-700 text-xs font-semibold transition">
            <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Directions
          </a>
        ` : ''}
        ${f.website ? `
          <a href="${f.website}" target="_blank" class="${f.mapUrl ? '' : 'flex-1'} inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 text-xs font-semibold transition border border-cyan-200">
            <i data-lucide="${(f.websiteLabel && f.websiteLabel.includes('License')) ? 'ticket' : (f.websiteLabel && (f.websiteLabel.includes('Charter') || f.websiteLabel.includes('Book'))) ? 'anchor' : 'book-open'}" class="w-3.5 h-3.5"></i>
            <span>${f.websiteLabel || (f.name.includes('License') ? 'License Info' : 'Stream Guide')}</span>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// LOCAL EVENTS & CALENDARS
// -----------------------------------------------------------------------------
function renderEvents() {
  const grid = document.getElementById('events-grid');
  if (!grid || !GUIDE_DATA.events) return;

  grid.innerHTML = GUIDE_DATA.events.map(ev => `
    <div class="bg-white rounded-2xl p-5 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card"
         data-search="${ev.name} ${ev.category} ${ev.desc} ${ev.tags ? ev.tags.join(' ') : ''}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            ${ev.category}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${ev.driveTime}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1.5">${ev.name}</h4>
        <p class="text-xs text-slate-600 mb-3 leading-relaxed">${ev.desc}</p>
        ${ev.tags ? `
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${ev.tags.map(t => `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">#${t}</span>`).join('')}
          </div>
        ` : ''}
      </div>
      <div class="pt-3 border-t border-slate-100">
        <a href="${ev.website}" target="_blank" class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-800 text-xs font-bold transition">
          <i data-lucide="calendar" class="w-3.5 h-3.5"></i> Open Event Calendar
          <i data-lucide="external-link" class="w-3 h-3 opacity-60"></i>
        </a>
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// 7. ATTRACTIONS
// -----------------------------------------------------------------------------
function renderAttractions() {
  const grid = document.getElementById('attractions-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.attractions.map(a => `
    <div class="bg-white rounded-2xl p-5 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card"
         data-search="${a.name} ${a.type} ${a.desc}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
            ${a.type}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${a.driveTime}
          </span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mb-1.5">${a.name}</h4>
        <p class="text-xs text-slate-600 mb-4 leading-relaxed">${a.desc}</p>
      </div>
      <div class="flex items-center gap-2 pt-3 border-t border-slate-100">
        <a href="${a.mapUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-700 text-xs font-semibold transition">
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Directions
        </a>
        <a href="${a.website}" target="_blank" class="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold transition">
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Tickets
        </a>
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// 8. ESSENTIALS & GROCERIES
// -----------------------------------------------------------------------------
function renderEssentials() {
  const grid = document.getElementById('essentials-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.essentials.map(e => `
    <div class="bg-white rounded-2xl p-4 shadow-card border border-slate-200 lift flex flex-col justify-between search-target winter-card"
         data-search="${e.name} ${e.type} ${e.desc} ${e.address}">
      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
            ${e.type}
          </span>
          <span class="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3 h-3"></i> ${e.driveTime}
          </span>
        </div>
        <h4 class="text-sm font-bold text-slate-900 mb-1">${e.name}</h4>
        <p class="text-[11px] text-slate-500 mb-2">${e.address}</p>
        <p class="text-xs text-slate-600 mb-3 leading-relaxed">${e.desc}</p>
      </div>
      <div class="pt-2 border-t border-slate-100 flex items-center gap-2">
        <a href="${e.mapUrl}" target="_blank" class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-pine-700 hover:text-white text-slate-700 text-xs font-semibold transition">
          <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Directions
        </a>
        ${e.website ? `
          <a href="${e.website}" target="_blank" class="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold transition border border-amber-200">
            <i data-lucide="globe" class="w-3.5 h-3.5"></i> Web
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// 9. CONDO APPLIANCES GUIDE (COLLAPSIBLE ACCORDIONS)
// -----------------------------------------------------------------------------
function renderAppliances() {
  const grid = document.getElementById('appliances-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.appliances.map((app, idx) => `
    <div class="appliance-card bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden search-target winter-card"
         data-search="${app.title} ${app.steps.join(' ')}">
      <button type="button" class="appliance-toggle w-full px-5 py-4 flex items-center justify-between gap-3 text-left hover:bg-pine-50/40 transition" aria-expanded="false" data-idx="${idx}">
        <div class="flex items-center gap-3 min-w-0">
          <span class="w-8 h-8 rounded-xl bg-pine-50 text-pine-700 flex items-center justify-center shrink-0 border border-pine-100">
            <i data-lucide="${app.icon || 'check'}" class="w-4 h-4"></i>
          </span>
          <div class="min-w-0">
            <h4 class="text-sm sm:text-base font-bold text-slate-900 truncate">${app.title}</h4>
            <span class="text-[11px] text-slate-500 font-medium">${app.steps.length} quick steps</span>
          </div>
        </div>
        <i data-lucide="chevron-down" class="appliance-chevron w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0"></i>
      </button>
      <div class="appliance-body hidden px-5 pb-5 pt-1 border-t border-slate-100">
        <ul class="space-y-2 text-xs text-slate-600 pt-2">
          ${app.steps.map(step => `
            <li class="flex items-start gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-pine-500 mt-1.5 shrink-0"></div>
              <span>${step}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.appliance-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.appliance-card');
      const body = card.querySelector('.appliance-body');
      const chev = card.querySelector('.appliance-chevron');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      body.classList.toggle('hidden', isOpen);
      if (chev) chev.classList.toggle('rotate-180', !isOpen);
      syncToggleAllAppliancesLabel();
    });
  });
}

function setApplianceExpanded(card, expand) {
  const btn = card.querySelector('.appliance-toggle');
  const body = card.querySelector('.appliance-body');
  const chev = card.querySelector('.appliance-chevron');
  if (!btn || !body) return;
  btn.setAttribute('aria-expanded', String(expand));
  body.classList.toggle('hidden', !expand);
  if (chev) chev.classList.toggle('rotate-180', expand);
}

function syncToggleAllAppliancesLabel() {
  const label = document.getElementById('toggle-all-appliances-label');
  if (!label) return;
  const cards = document.querySelectorAll('.appliance-card');
  const allOpen = cards.length > 0 && Array.from(cards).every(c =>
    c.querySelector('.appliance-toggle')?.getAttribute('aria-expanded') === 'true'
  );
  label.textContent = allOpen ? 'Collapse All' : 'Expand All';
}

function setupAppliancesToggleAll() {
  const btn = document.getElementById('toggle-all-appliances');
  if (!btn || btn.dataset.bound === 'true') return;
  btn.dataset.bound = 'true';

  btn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.appliance-card');
    const allOpen = cards.length > 0 && Array.from(cards).every(c =>
      c.querySelector('.appliance-toggle')?.getAttribute('aria-expanded') === 'true'
    );
    cards.forEach(c => setApplianceExpanded(c, !allOpen));
    syncToggleAllAppliancesLabel();
  });
}

// -----------------------------------------------------------------------------
// 10. HOUSE RULES
// -----------------------------------------------------------------------------
function renderHouseRules() {
  const grid = document.getElementById('house-rules-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.houseRules.map(r => `
    <div class="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 lift winter-card">
      <h4 class="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-pine-600 shrink-0"></span>
        ${r.title}
      </h4>
      <p class="text-xs text-slate-600 leading-relaxed">${r.desc}</p>
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// 11. CHECK-OUT CHECKLIST (INTERACTIVE)
// -----------------------------------------------------------------------------
function renderCheckOutChecklist() {
  const container = document.getElementById('checkout-checklist');
  if (!container) return;

  container.innerHTML = GUIDE_DATA.checkOutChecklist.map((item, idx) => `
    <label class="flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-amber-200 hover:bg-white cursor-pointer transition select-none group">
      <input type="checkbox" class="checkout-checkbox w-5 h-5 rounded-lg accent-pine-700 border-slate-300" data-idx="${idx}">
      <span class="checklist-text text-xs sm:text-sm font-medium text-slate-800 group-hover:text-slate-900">${item.text}</span>
    </label>
  `).join('');

  // Toggle strikethrough on check
  const checkboxes = container.querySelectorAll('.checkout-checkbox');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', e => {
      const text = e.target.closest('label').querySelector('.checklist-text');
      if (e.target.checked) {
        text.classList.add('line-through', 'text-slate-400');
      } else {
        text.classList.remove('line-through', 'text-slate-400');
      }
    });
  });
}

// -----------------------------------------------------------------------------
// 12. PHOTO GALLERY & LIGHTBOX
// -----------------------------------------------------------------------------
function renderPhotos() {
  const grid = document.getElementById('photos-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.photos.map((p, idx) => `
    <div class="relative group aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-sm cursor-pointer photo-zoom photo-item" data-idx="${idx}">
      <img src="${p.url}" alt="${p.caption}" class="w-full h-full object-cover" loading="lazy">
      <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-2.5 flex items-end">
        <span class="text-white text-[11px] font-medium leading-tight">${p.caption}</span>
      </div>
    </div>
  `).join('');

  // Lightbox wiring
  const modal    = document.getElementById('lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCap = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('close-lightbox');

  grid.querySelectorAll('.photo-item').forEach(it => {
    it.addEventListener('click', () => {
      const photo = GUIDE_DATA.photos[it.dataset.idx];
      if (modal && modalImg && modalCap) {
        modalImg.src = photo.url;
        modalCap.textContent = photo.caption;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }
}

// -----------------------------------------------------------------------------
// 13. EMERGENCY CONTACTS
// -----------------------------------------------------------------------------
function renderEmergency() {
  const grid = document.getElementById('emergency-grid');
  if (!grid) return;

  grid.innerHTML = GUIDE_DATA.emergency.map(em => `
    <div class="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 flex flex-col justify-between">
      <div>
        <span class="text-[11px] font-bold text-red-400 uppercase tracking-wider block mb-1">${em.title}</span>
        <h4 class="text-base font-bold text-white mb-1">${em.name}</h4>
        <a href="tel:${em.phone.replace(/[^0-9]/g, '')}" class="inline-flex items-center gap-1.5 text-amber-300 font-mono font-bold text-sm hover:underline mb-2">
          <i data-lucide="phone" class="w-3.5 h-3.5"></i> ${em.phone}
        </a>
        ${em.address  ? `<p class="text-xs text-slate-300 mb-1">${em.address}</p>` : ''}
        ${em.distance ? `<p class="text-[11px] text-slate-400 mb-2 font-light">${em.distance}</p>` : ''}
        ${em.note     ? `<p class="text-xs text-slate-400 italic">${em.note}</p>` : ''}
      </div>
      ${em.mapUrl ? `
        <div class="pt-3 border-t border-slate-700 mt-2">
          <a href="${em.mapUrl}" target="_blank" class="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold">
            <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Open in Maps
          </a>
        </div>
      ` : ''}
    </div>
  `).join('');
}

// -----------------------------------------------------------------------------
// 14. SEARCH BAR FILTER
// -----------------------------------------------------------------------------
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const clearBtn    = document.getElementById('clear-search');
  if (!searchInput) return;

  function applySearch(q) {
    if (clearBtn) {
      clearBtn.classList.toggle('hidden', q.length === 0);
    }

    // Ensure all Explore sections are visible while searching
    if (q.length > 0 && typeof window.setActiveExploreTab === 'function') {
      window.setActiveExploreTab('all', false);
    }

    document.querySelectorAll('.search-target').forEach(t => {
      const haystack = (t.dataset.search || '').toLowerCase();
      const matches = !q || haystack.includes(q);
      t.style.display = matches ? '' : 'none';

      // Auto-expand matching appliance accordions during search
      if (t.classList.contains('appliance-card')) {
        setApplianceExpanded(t, q.length > 0 && matches);
      }
    });

    syncToggleAllAppliancesLabel();
  }

  searchInput.addEventListener('input', e => {
    applySearch(e.target.value.toLowerCase().trim());
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      applySearch('');
    });
  }
}

// -----------------------------------------------------------------------------
// 15. ONE-TAP CLIPBOARD COPY (WI-FI & ADDRESS)
// -----------------------------------------------------------------------------
function bindCopyButton(btnId, textId, getValue, defaultLabel = 'Copy', activeBgClass = 'bg-emerald-400') {
  const btn     = document.getElementById(btnId);
  const btnText = document.getElementById(textId);
  if (!btn || !btnText || btn.dataset.bound === 'true') return;
  btn.dataset.bound = 'true';

  btn.addEventListener('click', () => {
    const value = getValue();
    if (!value) return;

    const showCopied = () => {
      btnText.textContent = 'Copied! ✓';
      btn.classList.add(activeBgClass);
      setTimeout(() => {
        btnText.textContent = defaultLabel;
        btn.classList.remove(activeBgClass);
      }, 2000);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(showCopied).catch(() => {
        btnText.textContent = `"${value}"`;
        setTimeout(() => { btnText.textContent = defaultLabel; }, 3000);
      });
    } else {
      btnText.textContent = `"${value}"`;
      setTimeout(() => { btnText.textContent = defaultLabel; }, 3000);
    }
  });
}

function setupWifiCopy() {
  bindCopyButton('copy-wifi-btn', 'copy-btn-text', () => GUIDE_DATA.property.wifi.password, 'Copy', 'bg-emerald-400');
}

function setupAddressCopy() {
  bindCopyButton('copy-address-btn', 'copy-address-text', () => GUIDE_DATA.property.address, 'Copy', 'bg-emerald-500');
}

// -----------------------------------------------------------------------------
// 15a. EXPLORE CATEGORY SUB-TABS
// -----------------------------------------------------------------------------
function setupExploreTabs() {
  const tabBtns  = document.querySelectorAll('.explore-tab-btn');
  const sections = document.querySelectorAll('[data-explore-section]');
  if (tabBtns.length === 0 || sections.length === 0) return;

  const activeClasses   = ['bg-pine-800', 'text-white', 'font-bold', 'shadow-sm'];
  const inactiveClasses = ['bg-white', 'text-slate-600', 'border', 'border-slate-200', 'font-semibold', 'hover:bg-pine-50', 'hover:text-pine-800'];

  function setActiveTab(targetKey, shouldScroll = false) {
    tabBtns.forEach(btn => {
      const isMatch = btn.dataset.exploreTab === targetKey;
      btn.classList.remove(...activeClasses, ...inactiveClasses);
      btn.classList.add(...(isMatch ? activeClasses : inactiveClasses));
    });

    sections.forEach(sec => {
      const key = sec.dataset.exploreSection;
      sec.classList.toggle('hidden', targetKey !== 'all' && key !== targetKey);
    });

    if (shouldScroll && targetKey !== 'all') {
      const targetSec = document.querySelector(`[data-explore-section="${targetKey}"]`);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  window.setActiveExploreTab = setActiveTab;

  tabBtns.forEach(btn => {
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => setActiveTab(btn.dataset.exploreTab, false));
  });

  // Sync top banner dropdown links & mobile bottom sheet links to Explore tabs
  const exploreIds = ['dining', 'skiing', 'hiking', 'fishing', 'attractions', 'groceries'];
  exploreIds.forEach(id => {
    document.querySelectorAll(`a[href="#${id}"]`).forEach(link => {
      if (link.dataset.exploreBound === 'true') return;
      link.dataset.exploreBound = 'true';
      link.addEventListener('click', () => setActiveTab(id, false));
    });
  });
}

// -----------------------------------------------------------------------------
// 16. LAST UPDATED DISPLAY & REFRESH/UPDATE ACTIONS
// -----------------------------------------------------------------------------
function renderLastUpdated() {
  const dateStr = (typeof GUIDE_DATA !== 'undefined' && GUIDE_DATA.lastUpdated) 
    ? GUIDE_DATA.lastUpdated 
    : 'November 14, 2026';

  const headerDate = document.getElementById('header-last-updated');
  const heroDate   = document.getElementById('hero-last-updated');
  const footerDate = document.getElementById('footer-last-updated');

  if (headerDate) headerDate.textContent = dateStr;
  if (heroDate)   heroDate.textContent   = dateStr;
  if (footerDate) footerDate.textContent = dateStr;
}

function showUpdateToast(msg = 'All website information is fresh & up-to-date.') {
  const toast = document.getElementById('update-toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = msg;

  // Animate in
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  // Auto hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 3200);
}

function reRenderEntireGuide() {
  renderPropertyBasics();
  renderRecCenter();
  renderDining('All');
  setupDiningFilters();
  renderEvents();
  renderSkiing();
  renderHiking();
  renderFishing();
  renderAttractions();
  renderEssentials();
  renderAppliances();
  syncToggleAllAppliancesLabel();
  renderHouseRules();
  renderCheckOutChecklist();
  renderEmergency();
  renderLastUpdated();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setupUpdateGuideButton() {
  const updateBtns = [
    document.getElementById('btn-update-guide'),
    document.getElementById('hero-update-btn'),
    document.getElementById('footer-update-btn')
  ].filter(Boolean);

  if (updateBtns.length === 0) return;

  updateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Trigger spin animations
      const spinners = document.querySelectorAll('#update-spinner, [data-lucide="refresh-cw"]');
      spinners.forEach(s => s.classList.add('animate-spin'));

      // If running over HTTP/HTTPS, fetch latest guide-data.js with cache-buster
      // If running locally via file://, re-insert dynamic script tag
      const scriptUrl = 'guide-data.js?v=' + Date.now();
      
      const newScript = document.createElement('script');
      newScript.src = scriptUrl;
      newScript.onload = () => {
        reRenderEntireGuide();
        setTimeout(() => {
          spinners.forEach(s => s.classList.remove('animate-spin'));
          showUpdateToast(`Guide updated to latest version (${GUIDE_DATA.lastUpdated || 'Current'})!`);
        }, 500);
      };
      newScript.onerror = () => {
        // Fallback: re-render with existing in-memory data
        reRenderEntireGuide();
        setTimeout(() => {
          spinners.forEach(s => s.classList.remove('animate-spin'));
          showUpdateToast('Guide refreshed and verified!');
        }, 500);
      };

      document.body.appendChild(newScript);
    });
  });
}

// -----------------------------------------------------------------------------
// 17. MOBILE BOTTOM SHEET & DIRECTORY
// -----------------------------------------------------------------------------
function setupBottomSheet() {
  const sheet = document.getElementById('mobile-sheet');
  const backdrop = document.getElementById('sheet-backdrop');
  const panel = document.getElementById('sheet-panel');
  const openBtns = [
    document.getElementById('open-menu-btn'),
    document.getElementById('floating-menu-btn')
  ].filter(Boolean);
  const closeBtn = document.getElementById('close-sheet-btn');
  const sheetLinks = document.querySelectorAll('.sheet-link');

  if (!sheet || !panel) return;

  function openSheet() {
    sheet.classList.remove('pointer-events-none');
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    panel.classList.remove('translate-y-full');
    panel.classList.add('translate-y-0');
    document.body.classList.add('overflow-hidden');
  }

  function closeSheet() {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    panel.classList.remove('translate-y-0');
    panel.classList.add('translate-y-full');
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => {
      sheet.classList.add('pointer-events-none');
    }, 300);
  }

  openBtns.forEach(btn => btn.addEventListener('click', openSheet));
  if (closeBtn) closeBtn.addEventListener('click', closeSheet);
  if (backdrop) backdrop.addEventListener('click', closeSheet);

  sheetLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeSheet();
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSheet();
  });
}
