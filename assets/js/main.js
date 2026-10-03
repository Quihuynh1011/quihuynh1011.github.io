/* Portfolio — render nội dung từ data/content.js, đổi ngôn ngữ, hiệu ứng.
 * Không cần sửa file này khi cập nhật nội dung. */
(function () {
  "use strict";

  var DATA = window.PORTFOLIO;
  if (!DATA) { document.body.insertAdjacentHTML("afterbegin", '<p class="noscript">Không tìm thấy data/content.js</p>'); return; }

  var STORAGE_KEY = "portfolio-lang";
  var lang = "vi";
  var projectFilter = null;

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function get(obj, path) { return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, obj); }
  function store(key, val) { try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; } }
  function email() { return DATA.contact.emailUser + "@" + DATA.contact.emailDomain; }
  function fmt(n) { return Number(n).toLocaleString(lang === "vi" ? "vi-VN" : "en-US"); }

  var ICON_PATHS = {
    optimize: '<path d="M4 19h16M7 16V9m5 7V5m5 11v-4"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    growth: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    report: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    invest: '<circle cx="12" cy="12" r="9"/><path d="M12 12V3a9 9 0 019 9h-9z"/>',
    bank: '<path d="M3 10l9-6 9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18"/>',
    legal: '<path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 006 0L7 7zm10 0l-3 7a3 3 0 006 0l-3-7zM8 21h8"/>',
    strategy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    team: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a5 5 0 016 4.8"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    chat: '<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"/>',
    download: '<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/>',
    print: '<path d="M7 9V3h10v6M7 17H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-2"/><rect x="7" y="14" width="10" height="7"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    arrow: '<path d="M5 12h14m-6-6l6 6-6 6"/>'
  };
  function icon(name, size) {
    size = size || 22;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON_PATHS[name] || "") + "</svg>";
  }
  function head(eyebrow, title, sub) {
    return '<div class="section-head reveal"><span class="eyebrow">' + esc(eyebrow) + "</span><h2>" + esc(title) + "</h2>" +
      (sub ? '<p class="section-sub">' + esc(sub) + "</p>" : "") + "</div>";
  }

  /* ---------- Section renderers ---------- */
  function renderHero(t) {
    var h = t.hero;
    $("#hero").innerHTML =
      '<div class="container hero-inner">' +
        "<div>" +
          '<span class="eyebrow">' + esc(h.eyebrow) + "</span>" +
          "<h1>" + esc(DATA.name) + "</h1>" +
          '<p class="hero-role">' + esc(h.role) + "</p>" +
          '<p class="hero-tagline">' + esc(h.tagline) + "</p>" +
          '<div class="hero-meta">' +
            "<span>" + icon("cap", 18) + esc(h.degree) + "</span>" +
            "<span>" + icon("pin", 18) + esc(h.location) + "</span>" +
          "</div>" +
          '<div class="hero-ctas">' +
            '<a class="btn btn-gold" href="#contact">' + icon("arrow", 18) + esc(h.ctaContact) + "</a>" +
            '<a class="btn btn-ghost" href="' + esc(DATA.cvFile) + '" download>' + icon("download", 18) + esc(h.ctaCv) + "</a>" +
            '<a class="btn btn-ghost" href="' + esc(DATA.contact.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icon("linkedin", 18) + "LinkedIn</a>" +
          "</div>" +
        "</div>" +
        '<div class="hero-photo">' +
          '<img src="' + esc(DATA.photo) + '" alt="' + esc(h.photoAlt) + '" width="500" height="500" fetchpriority="high">' +
          '<div class="hero-badge"><strong>15</strong><span>' + esc(h.years) + "</span></div>" +
        "</div>" +
      "</div>";
  }

  function renderStats(t) {
    $("#stats").innerHTML = '<div class="container"><div class="stats-grid">' +
      t.stats.map(function (s) {
        return '<div class="stat"><div class="stat-value">' + esc(s.prefix) +
          '<span class="count" data-target="' + s.value + '">' + fmt(s.value) + "</span>" +
          '<span class="suffix">' + esc(s.suffix) + "</span></div>" +
          '<div class="stat-label">' + esc(s.label) + "</div></div>";
      }).join("") + "</div></div>";
  }

  function renderAbout(t) {
    var a = t.about;
    $("#about").innerHTML = '<div class="container">' + head(t.nav.about, a.title) +
      '<div class="about-grid">' +
        '<div class="reveal"><p class="about-lead">' + esc(a.lead) + '</p><p class="about-body">' + esc(a.body) + "</p>" +
          '<blockquote class="quote">' + esc(a.quote) + "</blockquote></div>" +
        '<div class="reveal"><p class="values-title">' + esc(a.valuesTitle) + '</p><ul class="values">' +
          a.values.map(function (v) {
            return '<li class="value"><span class="icon-box">' + icon(v.icon) + "</span><div><h3>" + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></div></li>";
          }).join("") +
        "</ul></div>" +
      "</div></div>";
  }

  function renderSkills(t) {
    var s = t.skills;
    $("#skills").innerHTML = '<div class="container">' + head(t.nav.skills, s.title, s.subtitle) +
      '<div class="skills-grid">' +
        s.items.map(function (it) {
          return '<article class="skill reveal"><span class="icon-box">' + icon(it.icon) + "</span><h3>" + esc(it.title) + "</h3><p>" + esc(it.text) + "</p></article>";
        }).join("") +
      "</div>" +
      '<div class="tags-row reveal"><span class="label">' + esc(s.tagsTitle) + ":</span>" +
        s.tags.map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("") +
        '<span class="tag tag-lang">' + esc(s.language) + "</span>" +
      "</div></div>";
  }

  function renderExperience(t) {
    var e = t.experience;
    $("#experience").innerHTML = '<div class="container">' + head(t.nav.experience, e.title, e.subtitle) +
      '<ol class="timeline">' +
        e.items.map(function (it, i) {
          var hasDetails = it.details && it.details.length;
          return '<li class="tl-item reveal">' +
            '<div class="tl-period">' + esc(it.period) + "</div>" +
            '<div class="tl-card">' +
              "<h3>" + esc(it.role) + "</h3>" +
              '<p class="tl-company">' + esc(it.company) + "</p>" +
              '<p class="tl-sector">' + esc(it.sector) + "</p>" +
              '<ul class="tl-highlights">' + it.highlights.map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("") + "</ul>" +
              (hasDetails
                ? '<button type="button" class="tl-toggle" aria-expanded="false" aria-controls="tl-d' + i + '">' +
                    '<span>' + esc(e.showMore) + "</span>" + icon("chevron", 18) + "</button>" +
                  '<ul class="tl-details" id="tl-d' + i + '" hidden>' + it.details.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>"
                : "") +
            "</div></li>";
        }).join("") +
      "</ol></div>";

    $all(".tl-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        document.getElementById(btn.getAttribute("aria-controls")).hidden = open;
        btn.querySelector("span").textContent = open ? e.showMore : e.showLess;
      });
    });
  }

  function renderProjects(t) {
    var p = t.projects;
    var regions = [];
    p.items.forEach(function (it) { if (regions.indexOf(it.region) < 0) regions.push(it.region); });
    var max = Math.max.apply(null, p.items.map(function (it) { return it.area; }));
    projectFilter = null;

    $("#projects").innerHTML = '<div class="container">' + head(t.nav.projects, p.title, p.subtitle) +
      '<div class="proj-toolbar reveal"><div class="filters" role="group">' +
        '<button type="button" class="filter" data-region="" aria-pressed="true">' + esc(p.all) + "</button>" +
        regions.map(function (r) { return '<button type="button" class="filter" data-region="' + esc(r) + '" aria-pressed="false">' + esc(r) + "</button>"; }).join("") +
      '</div><p class="proj-total" aria-live="polite">' + esc(p.total) + ':<strong id="proj-total"></strong></p></div>' +
      '<div class="proj-grid">' +
        p.items.map(function (it) {
          return '<article class="proj reveal" data-region="' + esc(it.region) + '" data-area="' + it.area + '">' +
            '<div class="proj-top"><span class="proj-type">' + esc(it.type) + '</span><span class="proj-area">' + fmt(it.area) + "<small>" + esc(p.unit) + "</small></span></div>" +
            "<h3>" + esc(it.name) + "</h3>" +
            '<p class="proj-place">' + icon("pin", 16) + esc(it.place) + " · " + esc(it.region) + "</p>" +
            '<div class="proj-bar" aria-hidden="true"><span style="width:' + Math.max(4, (it.area / max) * 100) + '%"></span></div>' +
          "</article>";
        }).join("") +
      '</div><p class="proj-role">' + esc(p.role) + "</p></div>";

    function apply() {
      var total = 0;
      $all(".proj").forEach(function (card) {
        var show = !projectFilter || card.getAttribute("data-region") === projectFilter;
        card.hidden = !show;
        if (show) total += parseFloat(card.getAttribute("data-area"));
      });
      $("#proj-total").textContent = fmt(total) + " " + p.unit;
      $all(".filter").forEach(function (b) { b.setAttribute("aria-pressed", String((b.getAttribute("data-region") || null) === projectFilter)); });
    }
    $all(".filter").forEach(function (b) {
      b.addEventListener("click", function () { projectFilter = b.getAttribute("data-region") || null; apply(); });
    });
    apply();
  }

  function renderTeaching(t) {
    var s = t.teaching;
    $("#teaching").innerHTML = '<div class="container">' + head(t.nav.teaching, s.title, s.subtitle) +
      '<div class="teach-grid">' +
        s.items.map(function (it) {
          return '<article class="teach reveal"><span class="icon-box">' + icon("cap", 26) + "</span><div>" +
            '<p class="teach-period">' + esc(it.period) + "</p><h3>" + esc(it.org) + "</h3>" +
            '<p class="teach-role">' + esc(it.role) + '</p><p class="teach-unit">' + esc(it.unit) + "</p></div></article>";
        }).join("") +
      "</div></div>";
  }

  function renderEducation(t) {
    var e = t.education;
    $("#education").innerHTML = '<div class="container">' + head(t.nav.education, e.title) +
      '<div class="edu-grid">' +
        '<div class="edu-col reveal"><h3 class="col-title">' + esc(e.degreesTitle) + "</h3>" +
          e.degrees.map(function (d) {
            return '<div class="degree"><p class="period">' + esc(d.period) + "</p><h4>" + esc(d.title) + '</h4><p class="org">' + esc(d.org) + "</p>" +
              (d.note ? '<span class="note">' + esc(d.note) + "</span>" : "") + "</div>";
          }).join("") +
        "</div>" +
        '<div class="edu-col reveal"><h3 class="col-title">' + esc(e.certsTitle) + '</h3><ul class="certs">' +
          e.certs.map(function (c) {
            return '<li class="cert"><span class="icon-box">' + icon("award", 20) + "</span><div><h4>" + esc(c.title) + "</h4><p>" + esc(c.org) + "</p></div></li>";
          }).join("") +
        "</ul></div>" +
      "</div></div>";
  }

  function renderContact(t) {
    var c = t.contact, k = DATA.contact, mail = email();
    function channel(ic, label, valueHtml, actionHtml) {
      return '<li class="channel"><span class="icon-box">' + icon(ic) + '</span><div><div class="channel-label">' + esc(label) + "</div>" + valueHtml + "</div>" + (actionHtml || "") + "</li>";
    }
    $("#contact").innerHTML = '<div class="container contact-grid">' +
      '<div class="reveal"><span class="eyebrow">' + esc(t.nav.contact) + "</span><h2>" + esc(c.title) + '</h2><p class="contact-text">' + esc(c.text) + "</p>" +
        '<div class="contact-actions">' +
          '<a class="btn btn-gold" href="' + esc(DATA.cvFile) + '" download>' + icon("download", 18) + esc(c.cv) + "</a>" +
          '<button type="button" class="btn btn-ghost" id="print-btn">' + icon("print", 18) + esc(c.print) + "</button>" +
          '<a class="btn btn-ghost" href="#register">' + icon("briefcase", 18) + esc(c.register) + "</a>" +
        "</div></div>" +
      '<ul class="channels reveal">' +
        channel("mail", c.email, '<a class="channel-value" href="mailto:' + esc(mail) + '">' + esc(mail) + "</a>",
          '<button type="button" class="channel-btn" id="copy-email">' + esc(c.copy) + "</button>") +
        channel("phone", c.phone, '<a class="channel-value" href="tel:' + esc(k.phone) + '">' + esc(k.phoneDisplay) + "</a>") +
        channel("chat", c.zalo, '<span class="channel-value">' + esc(k.phoneDisplay) + "</span>",
          '<a class="channel-btn" href="' + esc(k.zalo) + '" target="_blank" rel="noopener">' + esc(c.zaloAction) + "</a>") +
        channel("linkedin", c.linkedin, '<a class="channel-value" href="' + esc(k.linkedin) + '" target="_blank" rel="noopener">Huỳnh Văn Quí</a>',
          '<a class="channel-btn" href="' + esc(k.linkedin) + '" target="_blank" rel="noopener">' + esc(c.linkedinAction) + "</a>") +
      "</ul></div>";

    $("#print-btn").addEventListener("click", function () { window.print(); });
    $("#copy-email").addEventListener("click", function () {
      var btn = this;
      function done() { btn.textContent = c.copied; setTimeout(function () { btn.textContent = c.copy; }, 1800); }
      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = mail; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (e) { /* bỏ qua */ }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(mail).then(done, fallback);
      else fallback();
    });
  }

  /* ---------- Nhà tuyển dụng đăng ký ---------- */
  var REG_KEY = "portfolio-registrations";

  function loadRegs() {
    try { var v = JSON.parse(localStorage.getItem(REG_KEY) || "[]"); return Array.isArray(v) ? v : []; }
    catch (e) { return []; }
  }
  function saveRegs(list) {
    try { localStorage.setItem(REG_KEY, JSON.stringify(list)); return true; } catch (e) { return false; }
  }
  // Chuẩn hoá số VN về dạng 0xxxxxxxxx; trả về null nếu không hợp lệ
  function normalizePhone(raw) {
    var d = String(raw).replace(/[\s.\-()]/g, "");
    if (/^\+84/.test(d)) d = "0" + d.slice(3);
    else if (/^84\d{9}$/.test(d)) d = "0" + d.slice(2);
    return /^0\d{9}$/.test(d) ? d : null;
  }
  function fmtPhone(p) { return p.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3"); }
  function fmtTime(iso) {
    try { return new Date(iso).toLocaleString(lang === "vi" ? "vi-VN" : "en-GB", { dateStyle: "short", timeStyle: "short" }); }
    catch (e) { return iso; }
  }

  function renderRegister(t) {
    var r = t.register;
    $("#register").innerHTML = '<div class="container reg-grid">' +
      '<div class="reveal"><span class="eyebrow">' + esc(r.eyebrow) + "</span><h2>" + esc(r.title) + '</h2><p class="section-sub">' + esc(r.text) + "</p>" +
        '<p class="reg-privacy">' + icon("shield", 18) + esc(r.privacy) + "</p></div>" +
      '<form class="reg-form reveal" id="reg-form" novalidate>' +
        '<div class="field"><label for="reg-company">' + esc(r.company) + ' <span aria-hidden="true">*</span></label>' +
          '<input id="reg-company" name="company" type="text" required minlength="2" maxlength="120" autocomplete="organization" placeholder="' + esc(r.companyPh) + '" aria-describedby="reg-company-err">' +
          '<p class="field-err" id="reg-company-err" aria-live="polite"></p></div>' +
        '<div class="field"><label for="reg-phone">' + esc(r.phone) + ' <span aria-hidden="true">*</span></label>' +
          '<input id="reg-phone" name="phone" type="tel" required maxlength="20" inputmode="tel" autocomplete="tel" placeholder="' + esc(r.phonePh) + '" aria-describedby="reg-phone-err">' +
          '<p class="field-err" id="reg-phone-err" aria-live="polite"></p></div>' +
        // Trường ẩn chống bot spam: người thật không thấy, bot tự điền sẽ bị bỏ qua
        '<div class="hp" aria-hidden="true"><label>Website<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>' +
        '<button type="submit" class="btn btn-gold reg-submit">' + icon("arrow", 18) + "<span>" + esc(r.submit) + "</span></button>" +
        '<p class="reg-status" id="reg-status" role="status" aria-live="polite"></p>' +
      "</form>" +
      '<div class="reg-admin" id="reg-admin" hidden></div>' +
      "</div>";

    var form = $("#reg-form");
    var company = $("#reg-company"), phone = $("#reg-phone");
    var status = $("#reg-status"), btn = form.querySelector(".reg-submit");

    function setErr(input, msg) {
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      document.getElementById(input.id + "-err").textContent = msg || "";
    }
    function setStatus(msg, kind) { status.textContent = msg; status.className = "reg-status" + (kind ? " " + kind : ""); }
    company.addEventListener("input", function () { setErr(company, ""); });
    phone.addEventListener("input", function () { setErr(phone, ""); });

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      setStatus(""); setErr(company, ""); setErr(phone, "");
      if (form.website.value) return; // bot

      var name = company.value.replace(/\s+/g, " ").trim();
      var ph = normalizePhone(phone.value);
      var ok = true;
      if (name.length < 2) { setErr(company, r.required); ok = false; }
      if (!ph) { setErr(phone, r.invalidPhone); ok = false; }
      if (!ok) { (name.length < 2 ? company : phone).focus(); return; }

      var list = loadRegs();
      if (list.some(function (x) { return x.phone === ph; })) { setStatus(r.duplicate, "ok"); form.reset(); return; }

      var entry = { id: Date.now().toString(36), company: name, phone: ph, createdAt: new Date().toISOString() };
      list.push(entry);
      saveRegs(list);

      var endpoint = DATA.registration && DATA.registration.endpoint;
      if (!endpoint) { setStatus(r.success, "ok"); form.reset(); renderAdmin(t); return; }

      btn.disabled = true; btn.querySelector("span").textContent = r.sending;
      var request;
      if (/script\.google(usercontent)?\.com/.test(endpoint)) {
        // Google Sheets (Apps Script): gửi dạng form đơn giản; Google không trả CORS nên không đọc được phản hồi,
        // chỉ báo lỗi khi mất mạng.
        request = fetch(endpoint, {
          method: "POST", mode: "no-cors",
          body: new URLSearchParams({ company: entry.company, phone: fmtPhone(entry.phone), createdAt: entry.createdAt, lang: lang })
        }).then(function () { return { ok: true }; });
      } else {
        // Formspree hoặc dịch vụ nhận JSON tương tự
        request = fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({ "Tên công ty": entry.company, "Số điện thoại": fmtPhone(entry.phone), "Thời gian": fmtTime(entry.createdAt), _subject: "Nhà tuyển dụng đăng ký: " + entry.company })
        });
      }
      request.then(function (res) {
        setStatus(res.ok ? r.success : r.sendFail, res.ok ? "ok" : "warn");
      }, function () {
        setStatus(r.sendFail, "warn");
      }).then(function () {
        btn.disabled = false; btn.querySelector("span").textContent = r.submit;
        form.reset(); renderAdmin(t);
      });
    });

    renderAdmin(t);
  }

  // Danh sách đăng ký: chỉ hiện khi mở index.html#admin
  function renderAdmin(t) {
    var box = $("#reg-admin");
    if (!box) return;
    if (location.hash !== "#admin") { box.hidden = true; box.innerHTML = ""; return; }
    var r = t.register, list = loadRegs().slice().reverse();
    box.hidden = false;
    box.innerHTML = '<div class="reg-admin-head"><h3>' + esc(r.adminTitle) + " (" + list.length + ")</h3>" +
        (list.length ? '<div class="reg-admin-actions"><button type="button" class="btn btn-outline" id="reg-export">' + icon("download", 18) + esc(r.exportCsv) + "</button>" +
          '<button type="button" class="btn-link danger" id="reg-clear">' + esc(r.removeAll) + "</button></div>" : "") +
      "</div>" +
      (list.length
        ? '<div class="table-wrap"><table><thead><tr><th>#</th><th>' + esc(r.colTime) + "</th><th>" + esc(r.colCompany) + "</th><th>" + esc(r.colPhone) + "</th><th></th></tr></thead><tbody>" +
            list.map(function (x, i) {
              return "<tr><td>" + (list.length - i) + "</td><td>" + esc(fmtTime(x.createdAt)) + "</td><td>" + esc(x.company) + '</td><td><a href="tel:' + esc(x.phone) + '">' + esc(fmtPhone(x.phone)) + "</a></td>" +
                '<td><button type="button" class="btn-link danger" data-del="' + esc(x.id) + '">' + esc(r.remove) + "</button></td></tr>";
            }).join("") + "</tbody></table></div>"
        : '<p class="reg-empty">' + esc(r.adminEmpty) + "</p>") +
      '<p class="reg-admin-note">' + esc(r.adminNote) + "</p>";

    var exp = $("#reg-export");
    if (exp) exp.addEventListener("click", function () {
      var rows = [[r.colTime, r.colCompany, r.colPhone]].concat(loadRegs().map(function (x) { return [fmtTime(x.createdAt), x.company, fmtPhone(x.phone)]; }));
      var csv = rows.map(function (row) { return row.map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; }).join(","); }).join("\r\n");
      var blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }); // BOM để Excel hiển thị đúng tiếng Việt
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "dang-ky-nha-tuyen-dung-" + new Date().toISOString().slice(0, 10) + ".csv";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    var clr = $("#reg-clear");
    if (clr) clr.addEventListener("click", function () {
      if (confirm(r.confirmRemoveAll)) { saveRegs([]); renderAdmin(t); }
    });
    $all("[data-del]", box).forEach(function (b) {
      b.addEventListener("click", function () {
        if (!confirm(r.confirmRemove)) return;
        var id = b.getAttribute("data-del");
        saveRegs(loadRegs().filter(function (x) { return x.id !== id; }));
        renderAdmin(t);
      });
    });
  }

  function renderFooter(t) {
    $("#footer").innerHTML = '<div class="footer-row"><span>' + esc(t.footer) + '</span><a href="' + esc(DATA.contact.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a></div>';
  }

  /* ---------- Static text (nav, meta) ---------- */
  function applyStatic(t) {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", t.meta.description);
    $all("[data-i18n]").forEach(function (el) { var v = get(t, el.getAttribute("data-i18n")); if (v) el.textContent = v; });
    $all("[data-i18n-attr]").forEach(function (el) {
      var parts = el.getAttribute("data-i18n-attr").split(":");
      var v = get(t, parts[1]); if (v) el.setAttribute(parts[0], v);
    });
    $all(".lang-switch button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
  }

  /* ---------- Effects ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    if (reduceMotion) { el.textContent = fmt(target); return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = fmt(0);
    requestAnimationFrame(step);
  }

  function setupObservers() {
    if (!("IntersectionObserver" in window)) {
      $all(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $all(".reveal").forEach(function (el) { revealObs.observe(el); });

    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { animateCount(en.target); countObs.unobserve(en.target); } });
    }, { threshold: 0.6 });
    $all(".count").forEach(function (el) { countObs.observe(el); });
  }

  // Highlight mục đang xem trên menu
  var navObs;
  function setupActiveNav() {
    if (!("IntersectionObserver" in window)) return;
    if (navObs) navObs.disconnect();
    var links = $all('.nav-links a[href^="#"]');
    navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (a) { var s = $(a.getAttribute("href")); if (s) navObs.observe(s); });
  }

  /* ---------- Render all ---------- */
  function render() {
    var t = DATA[lang];
    applyStatic(t);
    renderHero(t); renderStats(t); renderAbout(t); renderSkills(t); renderExperience(t);
    renderProjects(t); renderTeaching(t); renderEducation(t); renderContact(t); renderRegister(t); renderFooter(t);
    setupObservers();
    setupActiveNav();
  }

  function setLang(next) {
    if (!DATA[next] || next === lang) return;
    lang = next;
    store(STORAGE_KEY, next);
    render();
  }

  /* ---------- Init ---------- */
  var saved = store(STORAGE_KEY);
  if (saved && DATA[saved]) lang = saved;

  $all(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  var toggle = $(".nav-toggle"), links = $("#nav-links");
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.classList.toggle("open", !open);
  });
  links.addEventListener("click", function (ev) {
    if (ev.target.closest("a")) { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("open"); }
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && links.classList.contains("open")) { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("open"); toggle.focus(); }
  });

  var toTop = $(".to-top");
  window.addEventListener("scroll", function () { toTop.classList.toggle("show", window.scrollY > 600); }, { passive: true });

  // In: hiện đầy đủ nội dung
  window.addEventListener("beforeprint", function () { $all(".reveal").forEach(function (el) { el.classList.add("in"); }); });

  window.addEventListener("hashchange", function () {
    renderAdmin(DATA[lang]);
    if (location.hash === "#admin") $("#register").scrollIntoView();
  });

  render();
  if (location.hash === "#admin") $("#register").scrollIntoView();
})();
