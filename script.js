// B&amp;B Building and Design — shared site script
// Renders header + footer into placeholders, handles nav state and interactions.

document.documentElement.classList.add('js-on');

// ---------- Shared partials ----------
function renderHeader() {
  const placeholder = document.getElementById('site-header');
  if (!placeholder) return;
  placeholder.outerHTML = `
  <header class="site-header" id="siteHeader">
    <div class="container nav-wrap">
      <a href="index.html" class="brand">
        <span class="brand-mark">B&amp;B</span>
        <span class="brand-sub">Building &amp; Design</span>
      </a>
      <nav class="nav-links" id="navLinks">
        <a href="index.html" data-nav="home">Home</a>
        <a href="about.html" data-nav="about">About</a>
        <a href="services.html" data-nav="services">Services</a>
        <a href="portfolio.html" data-nav="portfolio">Portfolio</a>
        <a href="blog.html" data-nav="blog">Blog</a>
        <a href="contact.html" data-nav="contact">Contact</a>
      </nav>
      <button class="nav-toggle" aria-label="Toggle navigation" id="navToggle">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  // Highlight current page
  const current = document.body.getAttribute('data-page');
  if (current) {
    const link = document.querySelector(`.nav-links a[data-nav="${current}"]`);
    if (link) link.classList.add('active');
  }

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle?.addEventListener('click', () => links.classList.toggle('open'));
  links?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );

  // Scroll state
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function renderFooter() {
  const placeholder = document.getElementById('site-footer');
  if (!placeholder) return;
  placeholder.outerHTML = `
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <a href="index.html" class="brand">
          <span class="brand-mark light">B&amp;B</span>
          <span class="brand-sub light">Building &amp; Design</span>
        </a>
        <p class="footer-tag">Considered. Crafted. Built to last.</p>
      </div>
      <div class="footer-cols">
        <div>
          <h4>Visit</h4>
          <p>12 Ward Street<br/>Concord NSW 2137</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href="mailto:Byngconstruction@gmail.com">Byngconstruction@gmail.com</a><br/>
          <a href="contact.html">Send us a message →</a></p>
        </div>
        <div>
          <h4>Credentials</h4>
          <p>ABN 54 628 111 204<br/>Licence 323679C<br/><span style="opacity:.7">Previously B Yang Construction Pty Ltd</span></p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© ${new Date().getFullYear()} B&amp;B Building and Design Pty Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>`;
}

// ---------- Reveal-on-scroll ----------
function initReveal() {
  const revealEls = document.querySelectorAll(
    '.section-head, .about-copy, .service-card, .t-card, .blog-card, .p-item, .contact-form, .contact-info, .stats, .post-body, .focus-list'
  );
  revealEls.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => io.observe(el));
  // Safety net
  setTimeout(() => revealEls.forEach(el => el.classList.add('in')), 3000);
}

// ---------- Contact form (simple confirmation) ----------
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelector('.form-success').style.display = 'block';
    form.reset();
  });
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initReveal();
  initContactForm();
});
