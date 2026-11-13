* {
  box-sizing: border-box;
}

:root {
  --bg: #08090b;
  --bg-soft: #121417;
  --panel: rgba(20, 22, 28, 0.88);
  --panel-strong: #171b20;
  --card: #111417;
  --border: rgba(255, 255, 255, 0.08);
  --text: #f7f5f1;
  --muted: #a7acb5;
  --gold: #d7a448;
  --gold-deep: #b57f22;
  --gold-soft: rgba(215, 164, 72, 0.16);
  --white: #ffffff;
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.32);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(215, 164, 72, 0.16), transparent 25%),
    linear-gradient(180deg, #0b0d10 0%, #111418 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(12, 13, 16, 0.82);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--gold), #f4d79d);
  color: #16181a;
  font-weight: 800;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
}

.brand-name {
  display: block;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand small {
  color: var(--muted);
  display: block;
  margin-top: 2px;
  letter-spacing: 0.08em;
  font-size: 0.66rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a:hover {
  color: var(--text);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 700;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold), #f0c56f);
  color: #120d06;
  box-shadow: 0 12px 24px rgba(215, 164, 72, 0.22);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--text);
}

.hero {
  padding: 72px 0 36px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 34px;
  align-items: center;
}

.eyebrow,
.muted-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.96;
  font-weight: 900;
  letter-spacing: -0.065em;
}

.hero-copy p {
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 620px;
  color: var(--muted);
  margin: 20px 0 30px;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.stats-row {
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  gap: 14px;
  max-width: 440px;
}

.stats-row div {
  padding: 18px 16px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.stats-row strong {
  display: block;
  font-size: 1.2rem;
  color: var(--white);
}

.stats-row span {
  color: var(--muted);
  font-size: 0.75rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(100%, 480px);
  background: linear-gradient(180deg, rgba(17, 20, 23, 0.8), rgba(10, 12, 15, 0.9));
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--muted);
}

.live-dot {
  background: rgba(84, 190, 117, 0.12);
  border: 1px solid rgba(84, 190, 117, 0.35);
  color: #7ae29d;
  padding: 6px 8px;
  border-radius: 999px;
}

.feature-badges {
  margin: 20px 0 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-badges span {
  background: var(--gold-soft);
  border: 1px solid rgba(215, 164, 72, 0.25);
  color: var(--gold);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.72rem;
  font-weight: 700;
}

.featured-vehicle {
  padding-top: 6px;
}

.vehicle-visual {
  height: 220px;
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(12, 13, 15, 0.1), rgba(12, 13, 15, 0.4)),
    url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.vehicle-details {
  margin-top: 18px;
}

.tag {
  margin: 0 0 8px;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.7rem;
  font-weight: 700;
}

.vehicle-details h3 {
  margin: 0 0 10px;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--muted);
  font-size: 0.8rem;
}

.meta-row span {
  padding: 7px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
}

.price-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
}

.price-row strong {
  font-size: 1.2rem;
  color: var(--white);
}

.price-row small {
  color: var(--gold);
}

.category-strip {
  padding: 8px 0 24px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-btn,
.mini-chip {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.category-btn.active,
.mini-chip:hover,
.category-btn:hover {
  background: var(--gold-soft);
  border-color: rgba(215, 164, 72, 0.35);
  color: var(--gold);
}

.marketplace {
  padding: 24px 0 52px;
}

.market-grid {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 28px;
}

.filter-panel,
.admin-card,
.dealer-card,
.submit-copy,
.listing-form,
.roadmap-cards article,
.trust-grid article {
  background: rgba(17, 19, 22, 0.92);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.filter-panel {
  padding: 22px;
  align-self: start;
  position: sticky;
  top: 92px;
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.filter-header h2 {
  margin: 0;
  font-size: 1.4rem;
}

.link-btn {
  border: none;
  background: transparent;
  color: var(--gold);
  cursor: pointer;
  font-weight: 700;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
  color: var(--muted);
  font-size: 0.86rem;
}

.field input,
.field select,
.listing-form input,
.listing-form select,
.listing-form textarea {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 12px 14px;
  min-height: 46px;
}

.field input:focus,
.field select:focus,
.listing-form input:focus,
.listing-form select:focus,
.listing-form textarea:focus {
  border-color: rgba(215, 164, 72, 0.5);
  outline: none;
  box-shadow: 0 0 0 3px rgba(215, 164, 72, 0.14);
}

.filter-card {
  margin-top: 10px;
  border-top: 1px solid var(--border);
  padding-top: 18px;
}

.filter-card h3 {
  margin: 0 0 12px;
  font-size: 1rem;
}

.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.inventory-panel {
  min-width: 0;
}

.inventory-toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.inventory-toolbar h2 {
  margin: 0;
  font-size: clamp(1.7rem, 2vw, 2.4rem);
}

.summary-tag {
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--gold-soft);
  color: var(--gold);
  border: 1px solid rgba(215, 164, 72, 0.3);
  font-weight: 700;
  font-size: 0.82rem;
}

.listing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.listing-card {
  display: flex;
  flex-direction: column;
  background: rgba(17, 19, 22, 0.96);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
}

.listing-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.listing-image::before {
  content: attr(data-demo);
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(10, 10, 10, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--gold);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.card-body {
  padding: 16px 16px 18px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 6px 9px;
  color: var(--muted);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.price {
  color: var(--gold);
  font-weight: 800;
  font-size: 1.2rem;
}

.card-body h3 {
  margin: 0 0 10px;
  font-size: 1.25rem;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--muted);
  font-size: 0.78rem;
  margin-bottom: 12px;
}

.card-meta span {
  padding: 6px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
}

.dealer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.dealer-row strong {
  display: block;
  font-size: 0.82rem;
  color: var(--text);
}

.dealer-row small {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}

.contact-btn {
  background: rgba(215, 164, 72, 0.08);
  color: var(--gold);
  border: 1px solid rgba(215, 164, 72, 0.28);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.75rem;
  font-weight: 700;
}

.empty-state {
  grid-column: 1 / -1;
  padding: 26px 18px;
  border: 1px dashed rgba(255, 255, 255, 0.16);
  border-radius: 18px;
  text-align: center;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.01);
}

.trust-band {
  padding: 18px 0 64px;
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.trust-grid article {
  padding: 26px 22px;
}

.trust-grid h3 {
  margin: 14px 0 10px;
  font-size: 1.2rem;
}

.trust-grid p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.trust-icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--gold-soft);
  color: var(--gold);
  font-weight: 800;
}

.dealers-section,
.submit-section,
.admin-panel,
.roadmap {
  padding: 28px 0 72px;
}

.section-head {
  margin-bottom: 20px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.dealer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.dealer-card {
  padding: 22px;
}

.dealer-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.dealer-card > div:nth-child(2) {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dealer-avatar {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  border: 1px solid var(--border);
  font-weight: 800;
}

.dealer-avatar.gold {
  background: linear-gradient(135deg, rgba(215,164,72,0.3), rgba(255,255,255,0.08));
  color: var(--gold);
}

.dealer-card h3 {
  margin: 0;
  font-size: 1.15rem;
}

.muted {
  color: var(--muted);
}

.dealer-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.dealer-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(215,164,72,0.14), rgba(255,255,255,0.02));
  border: 1px solid rgba(215,164,72,0.25);
  color: var(--gold);
  font-weight: 700;
}

.submit-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 26px;
  align-items: stretch;
}

.submit-copy,
.listing-form {
  padding: 26px;
}

.submit-copy h2 {
  margin: 0 0 16px;
  font-size: clamp(2.1rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.submit-copy p {
  color: var(--muted);
  line-height: 1.8;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 12px;
  color: var(--text);
}

.check-list li {
  position: relative;
  padding-left: 28px;
  color: var(--muted);
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: -1px;
  color: var(--gold);
  font-weight: 900;
}

.listing-form {
  display: grid;
  gap: 18px;
}

.form-row {
  display: grid;
  gap: 18px;
}

.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.listing-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.84rem;
}

.listing-form textarea {
  resize: vertical;
  min-height: 110px;
}

.submit-btn {
  width: fit-content;
  min-width: 220px;
}

.form-note {
  margin: 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.admin-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
}

.admin-card {
  padding: 24px;
}

.admin-card h3 {
  margin-top: 0;
  margin-bottom: 16px;
}

.queue-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.queue-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 14px;
}

.queue-copy {
  flex: 1;
}

.queue-copy strong {
  display: block;
  margin-bottom: 4px;
}

.queue-copy small {
  color: var(--muted);
}

.queue-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.action-btn {
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  border-radius: 999px;
  height: 34px;
  padding: 0 12px;
  cursor: pointer;
}

.action-btn.accept {
  color: #83e6a1;
  border-color: rgba(131, 230, 161, 0.3);
}

.action-btn.reject {
  color: #ff9d9d;
  border-color: rgba(255, 157, 157, 0.3);
}

.feature-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.compact-list {
  gap: 16px;
}

.roadmap-grid {
  display: grid;
  gap: 24px;
}

.roadmap-grid > div:first-child h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.roadmap-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.roadmap-cards article {
  padding: 22px;
}

.roadmap-cards span {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--gold-soft);
  color: var(--gold);
  font-weight: 800;
  margin-bottom: 16px;
}

.roadmap-cards h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.roadmap-cards p {
  color: var(--muted);
  line-height: 1.8;
  margin: 0;
}

.site-footer {
  border-top: 1px solid var(--border);
  background: rgba(6, 8, 10, 0.8);
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 26px 0;
}

.footer-brand {
  margin-bottom: 6px;
}

.site-footer p {
  margin: 0;
  color: var(--muted);
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 0.82rem;
}

.footer-meta span {
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--border);
}

@media (max-width: 980px) {
  .hero-grid,
  .market-grid,
  .submit-grid,
  .admin-grid,
  .dealer-grid,
  .trust-grid,
  .roadmap-cards {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .filter-panel {
    position: static;
  }
}

@media (max-width: 640px) {
  .nav-wrap {
    min-height: 66px;
  }

  .nav-cta {
    display: none;
  }

  .hero {
    padding-top: 50px;
  }

  .hero-copy p {
    font-size: 1rem;
  }

  .stats-row,
  .two-up {
    grid-template-columns: 1fr;
  }

  .inventory-toolbar,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .listing-grid {
    grid-template-columns: 1fr;
  }

  .dealer-card,
  .submit-copy,
  .listing-form,
  .admin-card,
  .filter-panel,
  .trust-grid article,
  .roadmap-cards article {
    border-radius: 18px;
  }
}
