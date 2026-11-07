// Yıl
document.getElementById("year").textContent = new Date().getFullYear();

// Kaydırınca navigasyona çizgi ekle
const nav = document.querySelector(".nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

// Otomasyon filtreleri
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".auto").forEach((card) => {
      card.classList.toggle("hidden", f !== "all" && card.dataset.cat !== f);
    });
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
