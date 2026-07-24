const whatsappNumber = "8618307510254";
const logoUrl = "https://sc04.alicdn.com/kf/Had62fc4617194352a0757e2060ebdf51y/230130870/Had62fc4617194352a0757e2060ebdf51y.jpg";

const yogaProducts = [
  { id: "tie-dye-fabric", code: "Y01", name: "Tie Dye Fabric", material: "Nylon/Spandex", weight: "220gsm", width: "140-150cm", stretch: "4-Way Stretch", applications: "Leggings, Activewear, Yoga Wear", batch: "Batch 1" },
  { id: "brushed-fabric", code: "Y02", name: "Brushed Fabric", material: "Nylon/Spandex", weight: "230gsm", width: "140-150cm", stretch: "4-Way Stretch", applications: "Yoga Wear, Sportswear, Winter Activewear", batch: "Batch 2" },
  { id: "matte-fabric", code: "Y03", name: "Matte Fabric", material: "Nylon/Spandex", weight: "230gsm", width: "140-150cm", stretch: "4-Way Stretch", applications: "Yoga Wear, Activewear, Premium Sportswear", batch: "Batch 3" },
  { id: "camouflage-fabric", code: "Y04", name: "Camouflage Fabric", material: "Nylon/Spandex", weight: "230gsm", width: "140-150cm", stretch: "4-Way Stretch", applications: "Sportswear, Outdoor Wear, Tactical Clothing", batch: "Batch 4" },
  { id: "printed-fabric", code: "Y05", name: "Printed Fabric", material: "Nylon/Spandex", weight: "230gsm", width: "140-150cm", stretch: "4-Way Stretch", applications: "Yoga Wear, Activewear, Fashion Sportswear", batch: "Batch 5" },
  { id: "peach-skin-fabric", code: "Y06", name: "Peach Skin Fabric", material: "Nylon/Spandex", weight: "220gsm", width: "140-150cm", stretch: "4-Way Stretch", applications: "Yoga Wear, Activewear, Premium Sportswear", batch: "Batch 6" },
  { id: "ok-style-fabric", code: "Y07", name: "OK Style Fabric", material: "Nylon/Spandex", weight: "350gsm", width: "140cm", stretch: "4-Way Stretch", applications: "Sportswear, Activewear, Support Wear", batch: "Batch 33" },
  { id: "fake-n-cloth", code: "Y08", name: "Fake N Cloth", material: "Polyester", weight: "145gsm", width: "140cm", stretch: "Low Stretch", applications: "Sportswear, Activewear", batch: "Batch 34" },
  { id: "lycra-stripe-fabric", code: "Y09", name: "Lycra Stripe Fabric", material: "Nylon/Spandex", weight: "180gsm", width: "140cm", stretch: "4-Way Stretch", applications: "Compression Wear, Sportswear, Yoga Wear", batch: "Batch 35" },
  { id: "brocade-fabric", code: "Y10", name: "Brocade Fabric", material: "Polyester/Spandex", weight: "170gsm", width: "132cm", stretch: "4-Way Stretch", applications: "Fashion Sportswear, Activewear", batch: "Batch 36" },
  { id: "crystal-soft-fabric", code: "Y11", name: "Crystal Soft Fabric", material: "Polyester", weight: "125gsm", width: "138cm", stretch: "Low Stretch", applications: "Activewear, Sportswear, Base Layer", batch: "Batch 37" },
  { id: "polar-fleece-fabric", code: "Y12", name: "Polar Fleece Fabric", material: "Polyester", weight: "125gsm", width: "138cm", stretch: "Low Stretch", applications: "Winter Wear, Activewear, Warm Base Layer", batch: "Batch 38" },
  { id: "silver-film-fabric", code: "Y13", name: "Silver Film Fabric", material: "Polyester", weight: "180gsm", width: "140cm", stretch: "Low Stretch", applications: "Tech Wear, Sportswear, Protective Clothing", batch: "Batch 39" },
  { id: "high-elastic-fabric", code: "Y14", name: "High Elastic Fabric", material: "Nylon/Spandex", weight: "180gsm", width: "140cm", stretch: "4-Way Stretch", applications: "Leggings, Sportswear, Yoga Wear", batch: "Yoga Series" }
];

const categoryCards = [
  {
    title: "Yoga Fabric",
    href: "yoga-fabric.html",
    label: "14 styles",
    description: "High-stretch knitted fabrics for yoga pants, leggings, sports bras and activewear.",
    tags: ["Nylon/Spandex", "4-Way Stretch", "Custom Color"]
  },
  {
    title: "Neoprene Fabric",
    href: "#neoprene-preview",
    label: "25 styles",
    description: "SBR / CR neoprene sheets, rolls and laminated composite fabrics for bags, shoes and protection gear.",
    tags: ["SBR / CR", "Lamination", "Surface Finish"]
  },
  {
    title: "Finished OEM Products",
    href: "#custom",
    label: "OEM service",
    description: "From fabric to finished yoga wear, protective gear, bags, sleeves and sewn neoprene products.",
    tags: ["Sampling", "Sewing", "Brand Custom"]
  }
];

function logoMarkup() {
  return `<a class="brand" href="index.html"><img src="${logoUrl}" alt="SIYIN Fabric logo"><span>SIYIN Fabric</span></a>`;
}

function navMarkup() {
  return `
    <div class="topbar">
      <div class="container">
        <span>Yoga & Neoprene Functional Fabric Manufacturer</span>
        <span>WhatsApp: +86 18307510254</span>
      </div>
    </div>
    <header class="header">
      <div class="container nav">
        ${logoMarkup()}
        <nav class="menu">
          <a href="index.html">Home</a>
          <div class="menu-item">
            <a href="yoga-fabric.html">Products</a>
            <div class="mega">
              <div class="mega-grid">
                ${categoryCards.map(card => `
                  <a class="mega-card" href="${card.href}">
                    <strong>${card.title}</strong>
                    <p>${card.description}</p>
                  </a>
                `).join("")}
              </div>
            </div>
          </div>
          <a href="index.html#custom">Custom Solutions</a>
          <a href="index.html#factory">Factory & Quality</a>
          <a href="index.html#about">About</a>
          <a href="index.html#contact">Contact</a>
        </nav>
        <select class="language" aria-label="Language">
          <option>EN</option>
          <option>ID</option>
          <option>VI</option>
        </select>
      </div>
    </header>
  `;
}

function footerMarkup() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <h3>SIYIN Fabric</h3>
          <p>High-stretch yoga fabrics and functional neoprene composite fabrics for apparel, bags, protection gear, shoes and outdoor products.</p>
        </div>
        <div>
          <h3>Products</h3>
          <p><a href="yoga-fabric.html">Yoga Fabric</a><br><a href="index.html#neoprene-preview">Neoprene Fabric</a><br><a href="index.html#custom">OEM Finished Products</a></p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>WhatsApp: +86 18307510254<br><a href="${waLink("Hello SIYIN Fabric, I want to know more about your fabrics.")}">Chat on WhatsApp</a></p>
        </div>
      </div>
    </footer>
  `;
}

function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function placeholder(label) {
  return `<div class="product-image">${label}<br><span style="font-size:12px;font-weight:700;color:#7d8d88;margin-top:6px;">Replace with product photo</span></div>`;
}

function productCard(product) {
  return `
    <a class="product-card" href="product.html?id=${product.id}">
      ${placeholder(product.name)}
      <div class="product-body">
        <h3>${product.name}</h3>
        <div class="product-meta">
          ${product.material} · ${product.weight}<br>
          ${product.width} · ${product.stretch}
        </div>
        <div class="tag-row">
          <span class="tag">Customizable</span>
          <span class="tag">${product.code}</span>
        </div>
      </div>
    </a>
  `;
}

function renderShared() {
  const nav = document.querySelector("[data-nav]");
  const footer = document.querySelector("[data-footer]");
  if (nav) nav.innerHTML = navMarkup();
  if (footer) footer.innerHTML = footerMarkup();
}

function renderHome() {
  const categories = document.querySelector("[data-categories]");
  if (categories) {
    categories.innerHTML = categoryCards.map(card => `
      <a class="category-card" href="${card.href}">
        <div class="category-image">${card.title}<br><span style="font-size:12px;color:#7d8d88;">Add category photo</span></div>
        <div class="category-body">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <div class="tag-row">${card.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        </div>
      </a>
    `).join("");
  }

  const featured = document.querySelector("[data-featured-yoga]");
  if (featured) {
    featured.innerHTML = yogaProducts.slice(0, 4).map(productCard).join("");
  }
}

function renderYogaPage() {
  const grid = document.querySelector("[data-yoga-grid]");
  if (grid) grid.innerHTML = yogaProducts.map(productCard).join("");
}

function renderProductPage() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;

  const id = new URLSearchParams(window.location.search).get("id") || yogaProducts[0].id;
  const product = yogaProducts.find(item => item.id === id) || yogaProducts[0];
  const message = `Hello SIYIN Fabric, I am interested in ${product.name}. Please send more details, sample cost and quotation.`;

  document.title = `${product.name} | SIYIN Fabric`;
  root.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a> / <a href="yoga-fabric.html">Yoga Fabric</a> / ${product.name}</div>
    <section class="section">
      <div class="detail-grid">
        <div class="detail-image">${product.name}<br><span style="font-size:13px;color:#7d8d88;">Replace with product photos</span></div>
        <div>
          <div class="eyebrow">${product.code} · Yoga Fabric</div>
          <h1 style="font-size:44px;margin-top:10px;">${product.name}</h1>
          <p style="font-size:17px;line-height:1.7;color:#53616b;">Customizable ${product.material} fabric for ${product.applications.toLowerCase()}. Suitable for buyers who need stable stretch, soft hand feel and flexible color or finish development.</p>
          <table class="spec-table">
            <tr><td>Material</td><td>${product.material}</td></tr>
            <tr><td>Weight</td><td>${product.weight}</td></tr>
            <tr><td>Width</td><td>${product.width}</td></tr>
            <tr><td>Stretch</td><td>${product.stretch}</td></tr>
            <tr><td>Applications</td><td>${product.applications}</td></tr>
            <tr><td>Customization</td><td>Color, printing, surface finish, lamination and finished OEM products supported.</td></tr>
          </table>
          <div class="hero-actions">
            <a class="btn" href="${waLink(message)}">Ask on WhatsApp</a>
            <a class="btn secondary" href="yoga-fabric.html">Back to Yoga Fabric</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section soft">
      <div class="section-head">
        <div class="title-block">
          <h2>Related Yoga Fabrics</h2>
          <p>Compare similar fabrics by material, weight, width and stretch.</p>
        </div>
      </div>
      <div class="product-grid">
        ${yogaProducts.filter(item => item.id !== product.id).slice(0, 4).map(productCard).join("")}
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderShared();
  renderHome();
  renderYogaPage();
  renderProductPage();
});
