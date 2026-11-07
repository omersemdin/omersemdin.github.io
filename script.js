// Yıl
document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));

// Kaydırınca navigasyona çizgi ekle
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

const CATS = { gezi: "🧭 Gezi", spor: "🏃 Spor" };
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
  if (latest) latest.innerHTML = sorted.slice(0, 3).map(postCard).join("");

  // Blog sayfası: liste + tek yazı görünümü (#yazi-id)
  const grid = document.getElementById("post-grid");
  if (grid) {
    grid.innerHTML = sorted.map(postCard).join("");
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

// Uygulama ekran görüntüsü galerisi
document.querySelectorAll(".gallery").forEach((g) => {
  const imgs = g.querySelectorAll(".gallery-frame img");
  const dots = g.querySelectorAll(".gallery-dots button");
  let i = 0, timer;
  const show = (n) => {
    i = (n + imgs.length) % imgs.length;
    imgs.forEach((im, k) => im.classList.toggle("active", k === i));
    dots.forEach((d, k) => d.classList.toggle("active", k === i));
  };
  const start = () => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timer);
    timer = setInterval(() => show(i + 1), 3500);
  };
  dots.forEach((d, k) => d.addEventListener("click", () => { show(k); start(); }));
  g.querySelector(".gallery-frame").addEventListener("click", () => { show(i + 1); start(); });
  start();
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
