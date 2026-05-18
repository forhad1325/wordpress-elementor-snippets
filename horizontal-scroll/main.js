document.addEventListener("DOMContentLoaded", function () {
  const scrollWrapper = document.querySelector(".horizontalScrollWrapper");
  const scrollTranslate = document.querySelector(".horizontalScrollTranslate");
  if (!scrollWrapper || !scrollTranslate) { console.warn("Scroll elements not found."); return; }
  const scrollStart = scrollWrapper.offsetTop;
  function updateScroll() {
    const scrollHeight = scrollWrapper.offsetHeight;
    const totalScrollDistance = scrollHeight - window.innerHeight;
    const horizontalScrollWidth = scrollTranslate.scrollWidth - window.innerWidth;
    const scrollY = window.scrollY;
    if (scrollY >= scrollStart && scrollY <= scrollStart + totalScrollDistance) {
      const scrollProgress = (scrollY - scrollStart) / totalScrollDistance;
      scrollTranslate.style.transform = `translateX(${-scrollProgress * horizontalScrollWidth}px)`;
    }
  }
  window.addEventListener("scroll", updateScroll);
  window.addEventListener("resize", updateScroll);
});
