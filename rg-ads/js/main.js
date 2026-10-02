const quotes = [
  { text: "Visibility is not luck. It is a system you build every day.", author: "RG Ads" },
  { text: "A genuine brand does not shout. It shows up with proof.", author: "RG Ads" },
  { text: "The random way is not chaos. It is creativity with a target.", author: "RG Ads" },
  { text: "If your offer is strong, ads become a megaphone — not a gamble.", author: "RG Ads" },
  { text: "Thirty seconds of the right story can outperform thirty days of silence.", author: "RG Ads" },
  { text: "Business grows when attention, trust, and action meet.", author: "RG Ads" }
];

const quoteEl = document.getElementById("quote-text");
const authorEl = document.getElementById("quote-author");
let quoteIndex = 0;

function renderQuote(index) {
  const q = quotes[index];
  quoteEl.classList.remove("quote-fade");
  void quoteEl.offsetWidth;
  quoteEl.textContent = `“${q.text}”`;
  authorEl.textContent = q.author;
  quoteEl.classList.add("quote-fade");
  authorEl.classList.add("quote-fade");
}

if (quoteEl && authorEl) {
  renderQuote(0);
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    renderQuote(quoteIndex);
  }, 5200);
}

document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector("button");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

const track = document.getElementById("testimonial-track");
const dots = document.querySelectorAll("[data-slide]");
let slide = 0;
const slideCount = dots.length || 3;

function goToSlide(i) {
  slide = (i + slideCount) % slideCount;
  if (track) track.style.transform = `translateX(-${slide * 100}%)`;
  dots.forEach((dot, idx) => {
    dot.classList.toggle("bg-red-600", idx === slide);
    dot.classList.toggle("bg-white/20", idx !== slide);
  });
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => goToSlide(Number(dot.dataset.slide)));
});

document.getElementById("prev-slide")?.addEventListener("click", () => goToSlide(slide - 1));
document.getElementById("next-slide")?.addEventListener("click", () => goToSlide(slide + 1));

setInterval(() => {
  if (document.hidden) return;
  goToSlide(slide + 1);
}, 7000);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
menuBtn?.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

document.querySelectorAll("#mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.add("hidden"));
});

document.querySelectorAll(".video-tile").forEach((tile) => {
  const video = tile.querySelector("video");
  const overlay = tile.querySelector(".video-overlay");
  overlay?.addEventListener("click", () => {
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
});
