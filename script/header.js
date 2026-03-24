window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const topBanner = document.querySelector('.top_banner');
    const bannerHeight = topBanner.offsetHeight;

    if (window.scrollY > bannerHeight) {
        header.classList.add('scrolled');
        header.style.top = "0";
    } else {
        header.classList.remove('scrolled');
        header.style.top = bannerHeight - window.scrollY + "px";
    }
});
