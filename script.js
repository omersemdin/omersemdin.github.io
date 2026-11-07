// Yıl
document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));

// Kaydırınca navigasyona çizgi ekle
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

const CATS = { gezi: "🧭 Gezi", spor: "🏟️ Spor", oyun: "🎮 Oyun" };
const fmtDate = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

// Blog kartı HTML'i
function postCard(p) {
  return `
    <a class="card auto post-card" data-cat="${p.kategori}" href="blog.html#${p.id}">
      <div class="post-thumb" style="--c1:${p.kapak[0]};--c2:${p.kapak[1]}"><span>${p.emoji}</span></div>
      <div class="auto-top"><span class="status mono">${CATS[p.kategori] || p.kategori}</span><span class="mono muted small">${fmtDate(p.tarih)}</span></div>
      <h3>${p.baslik}</h3>
      <p>${p.ozet}</p>
      <p class="impact mono">devamını oku →</p>
    </a>`;
}

if (typeof POSTS !== "undefined") {
  const sorted = [...POSTS].sort((a, b) => b.tarih.localeCompare(a.tarih));

  // Ana sayfa: son 3 yazı
  const latest = document.getElementById("latest-posts");
  const empty = `
    <div class="card empty-blog">
      <span class="icon">✍️</span>
      <div>
        <h3>İlk yazılar yolda</h3>
        <p class="muted">Gezi notları, maç yorumları ve oyun incelemeleri çok yakında burada. İlki Ghost of Tsushima üzerine.</p>
      </div>
    </div>`;
  const allBtn = document.getElementById("all-posts-btn");
  if (allBtn && !sorted.length) allBtn.hidden = true;
  if (latest) latest.innerHTML = sorted.length ? sorted.slice(0, 3).map(postCard).join("") : empty;

  // Blog sayfası: liste + tek yazı görünümü (#yazi-id)
  const grid = document.getElementById("post-grid");
  if (grid) {
    grid.innerHTML = sorted.length ? sorted.map(postCard).join("") : empty;
    if (!sorted.length) document.querySelector('[data-target="#post-grid"]').hidden = true;
    const listView = document.getElementById("list-view");
    const postView = document.getElementById("post-view");
    const route = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const p = POSTS.find((x) => x.id === id);
      listView.hidden = !!p;
      postView.hidden = !p;
      if (p) {
        document.getElementById("post-title").textContent = p.baslik;
        document.getElementById("post-meta").textContent = `${CATS[p.kategori] || p.kategori} · ${fmtDate(p.tarih)}`;
        document.getElementById("post-body").innerHTML = p.icerik;
        const cover = document.getElementById("post-cover");
        cover.style.setProperty("--c1", p.kapak[0]);
        cover.style.setProperty("--c2", p.kapak[1]);
        cover.innerHTML = `<span>${p.emoji}</span>`;
        document.title = `${p.baslik} — Ömer Buğra Şemdin`;
      } else {
        document.title = "Blog — Ömer Buğra Şemdin";
      }
      scrollTo(0, 0);
    };
    document.getElementById("back-link").addEventListener("click", (e) => {
      e.preventDefault();
      history.pushState(null, "", location.pathname);
      route();
    });
    addEventListener("hashchange", route);
    route();
  }
}

// Filtreler (her filtre grubu kendi listesini yönetir)
document.querySelectorAll(".filters").forEach((group) => {
  const target = document.querySelector(group.dataset.target);
  group.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      group.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      target.querySelectorAll("[data-cat]").forEach((card) => {
        card.classList.toggle("hidden", f !== "all" && card.dataset.cat !== f);
      });
    });
  });
});

// Uygulama ekran görüntüsü galerisi (kaydırmalı şerit + büyük görüntü)
document.querySelectorAll(".gallery").forEach((g) => {
  const track = g.querySelector(".gallery-track");
  const imgs = [...track.querySelectorAll("img")];
  const dots = g.querySelectorAll(".gallery-dots button");
  const prev = g.querySelector(".gal-arrow.prev"), next = g.querySelector(".gal-arrow.next");

  const current = () => {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    imgs.forEach((im, k) => {
      const d = Math.abs(im.offsetLeft - track.offsetLeft + im.clientWidth / 2 - mid);
      if (d < dist) { dist = d; best = k; }
    });
    return best;
  };
  const go = (k) => {
    k = Math.max(0, Math.min(imgs.length - 1, k));
    const im = imgs[k];
    track.scrollTo({ left: im.offsetLeft - track.offsetLeft - (track.clientWidth - im.clientWidth) / 2 });
  };
  const update = () => {
    const i = current();
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
    if (prev) prev.disabled = i === 0;
    if (next) next.disabled = i === imgs.length - 1;
  };
  track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  prev && prev.addEventListener("click", () => go(current() - 1));
  next && next.addEventListener("click", () => go(current() + 1));
  dots.forEach((d, k) => d.addEventListener("click", () => go(k)));
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(current() + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(current() - 1); }
  });
  update();

  // Büyük görüntü
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  const lbImg = lb.querySelector("img");
  let li = 0;
  const show = (k) => { li = (k + imgs.length) % imgs.length; lbImg.src = imgs[li].src; lbImg.alt = imgs[li].alt; };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; go(li); };
  imgs.forEach((im, k) => im.addEventListener("click", () => {
    show(k); lb.hidden = false; document.body.style.overflow = "hidden";
  }));
  lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(li - 1); });
  lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(li + 1); });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") show(li + 1);
    if (e.key === "ArrowLeft") show(li - 1);
  });
  // Telefonda büyük görüntüde parmakla kaydırma
  let sx = null;
  lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) show(li + (dx < 0 ? 1 : -1));
  });
});

// Tıklanabilir kartlar → detay penceresi
(() => {
  const modal = document.getElementById("modal");
  if (!modal) return;
  const head = modal.querySelector(".modal-head"), body = modal.querySelector(".modal-body");
  let lastCard = null;
  const open = (card) => {
    lastCard = card;
    head.innerHTML = card.querySelector(".icon").outerHTML + `<h3>${card.querySelector("h3").textContent}</h3>`;
    body.innerHTML = card.querySelector(".auto-detail").innerHTML + card.querySelector(".chips").outerHTML;
    modal.hidden = false; document.body.style.overflow = "hidden";
    modal.querySelector(".lb-close").focus();
  };
  const close = () => { modal.hidden = true; document.body.style.overflow = ""; lastCard && lastCard.focus(); };
  document.querySelectorAll(".auto.clickable").forEach((card) => {
    card.addEventListener("click", () => open(card));
    card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(card); } });
  });
  modal.querySelector(".lb-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
})();

// Kartı olmayan filtre butonlarını gizle
document.querySelectorAll(".filters").forEach((group) => {
  const target = document.querySelector(group.dataset.target);
  if (!target) return;
  group.querySelectorAll(".filter").forEach((btn) => {
    const f = btn.dataset.filter;
    if (f !== "all" && !target.querySelector(`[data-cat="${f}"]`)) btn.hidden = true;
  });
});

// Kaydırınca yumuşakça beliren kartlar
const revealEls = document.querySelectorAll(".section-head, .card");
revealEls.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

// Sayaç animasyonu
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.querySelectorAll("[data-count]").forEach((el) => {
  const target = +el.dataset.count, suffix = el.dataset.suffix || "";
  if (reduce) { el.textContent = target + suffix; return; }
  const start = performance.now(), dur = 1400;
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});
