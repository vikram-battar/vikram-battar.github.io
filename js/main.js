// portfolio interactions: scroll reveals, animated counters, nav state, hero parallax
(function () {
    // scroll reveal
    var revealEls = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    // animated counters
    var counters = document.querySelectorAll('[data-count]');
    var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            cio.unobserve(e.target);
            var target = parseInt(e.target.getAttribute('data-count'), 10);
            var start = null, dur = 1400;
            function tick(t) {
                if (!start) start = t;
                var p = Math.min((t - start) / dur, 1);
                var eased = 1 - Math.pow(1 - p, 3);
                e.target.textContent = Math.round(target * eased);
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });

    // nav border on scroll + subtle hero parallax
    var nav = document.getElementById('nav');
    var heroContent = document.querySelector('.hero-content');
    var ticking = false;
    function onScroll() {
        var y = window.scrollY;
        nav.classList.toggle('scrolled', y > 24);
        if (heroContent && y < window.innerHeight) {
            heroContent.style.transform = 'translateY(' + y * 0.18 + 'px)';
            heroContent.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.85));
        }
        ticking = false;
    }
    window.addEventListener('scroll', function () {
        if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
})();
