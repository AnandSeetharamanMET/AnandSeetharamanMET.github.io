/* Portfolio behaviour: config wiring, project rendering, modal, lightbox, nav. */
(function () {
  'use strict';

  var CFG = window.SITE_CONFIG || {};
  var PROJECTS = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function has(a) { return Array.isArray(a) && a.length > 0; }
  function statusClass(s) {
    var k = String(s || '').toLowerCase();
    if (k.indexOf('progress') > -1) return 'status-progress';
    if (k.indexOf('plan') > -1) return 'status-planned';
    return 'status-done';
  }
  function safeUrl(u) {
    // block script/data URLs; allow http(s), mailto and relative paths
    var s = String(u || '').trim();
    return /^(javascript|data|vbscript):/i.test(s) || !s ? '#' : s;
  }

  /* ---------- config wiring ---------- */
  if (CFG.EMAIL) {
    $all('.js-email').forEach(function (a) { a.href = 'mailto:' + CFG.EMAIL; });
    $all('.js-email-text').forEach(function (a) { a.textContent = CFG.EMAIL; });
  }
  if (CFG.RESUME_URL) {
    $all('.js-resume').forEach(function (a) { a.href = CFG.RESUME_URL; });
  }
  var li = String(CFG.LINKEDIN_URL || '').trim();
  if (li) {
    $all('.js-linkedin').forEach(function (a) { a.href = li; a.hidden = false; });
    $all('.js-linkedin-row').forEach(function (r) { r.hidden = false; });
    $all('.js-linkedin-text').forEach(function (a) { a.textContent = li.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''); });
  } else {
    $all('.js-linkedin, .js-linkedin-row').forEach(function (el) { el.hidden = true; });
  }

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  var toggle = $('.nav-toggle');
  var nav = $('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });
    $all('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }

  /* ---------- project cards ---------- */
  var grid = $('#project-grid');
  function cardHTML(p, i) {
    var img = has(p.images) ? p.images[0] : null;
    var media = img
      ? '<div class="card-media"><img src="' + esc(img.thumb || img.src) + '" alt="' + esc(img.alt) + '" loading="lazy" decoding="async"></div>'
      : '<div class="card-media card-media-empty" aria-hidden="true"><span>' + esc((p.title || '?').charAt(0)) + '</span></div>';
    var tools = has(p.tools)
      ? '<ul class="chips chips-sm" aria-label="Tools">' + p.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'
      : '';
    var meta = [p.date, p.org].filter(Boolean).map(esc).join(' · ');
    return (
      '<article class="project-card' + (i === 0 ? ' featured' : '') + '" id="project-' + esc(p.slug) + '">' +
        media +
        '<div class="card-body">' +
          '<div class="card-top">' +
            (p.status ? '<span class="status ' + statusClass(p.status) + '">' + esc(p.status) + '</span>' : '') +
            (meta ? '<span class="card-meta">' + meta + '</span>' : '') +
          '</div>' +
          '<h3 class="card-title">' + esc(p.title) + '</h3>' +
          (p.subtitle ? '<p class="card-subtitle">' + esc(p.subtitle) + '</p>' : '') +
          '<p class="card-summary">' + esc(p.summary) + '</p>' +
          tools +
          '<button type="button" class="btn btn-primary btn-sm js-open-project" data-slug="' + esc(p.slug) + '" aria-haspopup="dialog">' +
            'View details<span class="sr-only">: ' + esc(p.title) + '</span>' +
          '</button>' +
        '</div>' +
      '</article>'
    );
  }

  if (grid) {
    if (PROJECTS.length) {
      grid.innerHTML = PROJECTS.map(cardHTML).join('');
    } else {
      grid.innerHTML = '<p class="empty">Projects coming soon.</p>';
    }
    grid.addEventListener('click', function (e) {
      var btn = e.target.closest('.js-open-project');
      if (btn) { openProject(btn.getAttribute('data-slug'), btn); return; }
      var media = e.target.closest('.card-media img');
      if (media) {
        var card = media.closest('.project-card');
        var b = card && card.querySelector('.js-open-project');
        if (b) openProject(b.getAttribute('data-slug'), b);
      }
    });
  }

  /* ---------- project modal ---------- */
  var modal = $('#project-modal');
  var modalBody = $('#modal-body');
  var lastTrigger = null;

  function section(title, inner) {
    return inner ? '<section class="m-section"><h3>' + esc(title) + '</h3>' + inner + '</section>' : '';
  }
  function list(arr, cls) {
    return has(arr) ? '<ul class="' + (cls || 'm-list') + '">' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '';
  }

  function modalHTML(p) {
    var gallery = has(p.images)
      ? '<div class="m-gallery">' + p.images.map(function (im, i) {
          return '<figure><button type="button" class="m-thumb js-lightbox" data-index="' + i + '" aria-label="Enlarge image ' + (i + 1) + ' of ' + p.images.length + (im.caption ? ': ' + esc(im.caption) : '') + '">' +
            '<img src="' + esc(im.thumb || im.src) + '" alt="' + esc(im.alt) + '" loading="lazy" decoding="async">' +
            '<span class="zoom-hint" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></span>' +
            '</button>' + (im.caption ? '<figcaption>' + esc(im.caption) + '</figcaption>' : '') + '</figure>';
        }).join('') + '</div>'
      : '';
    var results = has(p.results)
      ? '<ul class="m-results">' + p.results.map(function (r) {
          return '<li><span class="r-value">' + esc(r.value) + '</span><span class="r-label">' + esc(r.label) + '</span></li>';
        }).join('') + '</ul>'
      : '';
    var team = has(p.team) ? '<p class="m-team"><strong>Team:</strong> ' + p.team.map(esc).join(', ') + '</p>' : '';
    var links = has(p.links)
      ? '<div class="btn-row">' + p.links.map(function (l) {
          return '<a class="btn btn-secondary btn-sm" href="' + esc(safeUrl(l.url)) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + '</a>';
        }).join('') + '</div>'
      : '';
    var meta = [p.date, p.org].filter(Boolean).map(esc).join(' · ');

    return (
      '<header class="m-header">' +
        '<div class="card-top">' +
          (p.status ? '<span class="status ' + statusClass(p.status) + '">' + esc(p.status) + '</span>' : '') +
          (meta ? '<span class="card-meta">' + meta + '</span>' : '') +
        '</div>' +
        '<h2 id="modal-title">' + esc(p.title) + '</h2>' +
        (p.subtitle ? '<p class="card-subtitle">' + esc(p.subtitle) + '</p>' : '') +
      '</header>' +
      gallery +
      section('Overview', '<p>' + esc(p.overview || p.summary) + '</p>') +
      section('My role & team', (p.role ? '<p>' + esc(p.role) + '</p>' : '') + team) +
      section('Highlights', list(p.highlights)) +
      section('Tools', has(p.tools) ? list(p.tools, 'chips') : '') +
      section('Results', results) +
      section('Next steps: what I\u2019d improve', list(p.nextSteps)) +
      (links ? section('Links', links) : '')
    );
  }

  var currentProject = null;
  function openProject(slug, trigger) {
    var p = PROJECTS.filter(function (x) { return x.slug === slug; })[0];
    if (!p || !modal) return;
    currentProject = p;
    lastTrigger = trigger || null;
    modalBody.innerHTML = modalHTML(p);
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    document.body.classList.add('no-scroll');
    modal.querySelector('.modal-inner').scrollTop = 0;
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    if (history.replaceState) history.replaceState(null, '', '#project-' + slug);
  }
  function closeDialog(d) {
    if (!d) return;
    if (typeof d.close === 'function') d.close(); else d.removeAttribute('open');
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.closest('[data-close]')) { closeDialog(modal); return; }
      var t = e.target.closest('.js-lightbox');
      if (t && currentProject) openLightbox(currentProject.images, parseInt(t.getAttribute('data-index'), 10) || 0, t);
    });
    modal.addEventListener('close', function () {
      document.body.classList.remove('no-scroll');
      if (history.replaceState) history.replaceState(null, '', location.pathname + location.search + '#projects');
      if (lastTrigger) lastTrigger.focus();
    });
  }

  /* ---------- lightbox ---------- */
  var lb = $('#lightbox');
  var lbImg = $('#lb-img');
  var lbCap = $('#lb-caption');
  var lbCount = $('#lb-count');
  var lbImages = [];
  var lbIndex = 0;
  var lbTrigger = null;

  function showLb(i) {
    if (!lbImages.length) return;
    lbIndex = (i + lbImages.length) % lbImages.length;
    var im = lbImages[lbIndex];
    lbImg.src = im.src;
    lbImg.alt = im.alt || '';
    lbCap.textContent = im.caption || '';
    lbCount.textContent = lbImages.length > 1 ? (lbIndex + 1) + ' / ' + lbImages.length : '';
    lb.classList.toggle('single', lbImages.length < 2);
  }
  function openLightbox(images, i, trigger) {
    if (!lb || !has(images)) return;
    lbImages = images;
    lbTrigger = trigger || null;
    showLb(i);
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
    var c = lb.querySelector('.lb-close');
    if (c) c.focus();
  }
  if (lb) {
    lb.addEventListener('click', function (e) {
      if (e.target.closest('.lb-prev')) { showLb(lbIndex - 1); return; }
      if (e.target.closest('.lb-next')) { showLb(lbIndex + 1); return; }
      if (e.target.closest('[data-close]') || e.target === lb || e.target.classList.contains('lb-figure')) closeDialog(lb);
    });
    lb.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); showLb(lbIndex - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); showLb(lbIndex + 1); }
    });
    lb.addEventListener('close', function () { if (lbTrigger) lbTrigger.focus(); });
  }

  /* ---------- deep link: #project-<slug> opens that project ---------- */
  var m = /^#project-(.+)$/.exec(location.hash);
  if (m) {
    var target = document.getElementById('project-' + m[1]);
    var btn = target && target.querySelector('.js-open-project');
    if (btn) { target.scrollIntoView(); openProject(m[1], btn); }
  }
})();
