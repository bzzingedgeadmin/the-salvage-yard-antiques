import React, { useState } from 'react';

const CATEGORIES = ["All Items", "Furniture", "Architectural Salvage", "Vintage Signs", "Collectibles", "Glassware & Lighting"];

const INVENTORY = [
  {
    id: 1,
    category: "Furniture",
    title: "1890s Solid Oak Apothecary Cabinet",
    era: "Victorian Era (c. 1890)",
    price: "$680",
    desc: "Original brass hardware, 18 dovetailed drawers, restored oil rubbed finish.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    category: "Architectural Salvage",
    title: "Reclaimed Michigan Barn Wood Beams & Mantels",
    era: "Early 1900s Local Salvage",
    price: "$240 - $450",
    desc: "Hand-hewn virgin timber beams salvaged from historic Eaton County farmsteads.",
    img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    category: "Vintage Signs",
    title: "Embossed Porcelain General Store Sign",
    era: "Mid-Century America (c. 1950)",
    price: "$320",
    desc: "Authentic double-sided heavy porcelain enamel sign with vibrant original graphics.",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    category: "Glassware & Lighting",
    title: "Industrial Brass Cage Pendant Lamp",
    era: "c. 1930 Factory Salvage",
    price: "$195",
    desc: "Rewired and safety-tested heavy cast brass explosion-proof industrial ceiling pendant.",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    category: "Collectibles",
    title: "1920s Antique Brass Mantle Clock",
    era: "Roaring Twenties (c. 1924)",
    price: "$275",
    desc: "Key-wind mechanical movement with soothing dual-chime mechanism.",
    img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    category: "Glassware & Lighting",
    title: "Mid-Century Amber Glass Decanter Set",
    era: "1960s Handblown Glass",
    price: "$145",
    desc: "Set of 6 gold-rimmed matching glasses with stopper, mint vintage condition.",
    img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80"
  }
];

const SHOWCASE_GALLERY = [
  { url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80", title: "Main Showroom Floor" },
  { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80", title: "Antique Oak Furniture" },
  { url: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=600&q=80", title: "Vintage Timepieces & Brass" },
  { url: "https://images.unsplash.com/photo-1505682634934-f3a0a1631b78?auto=format&fit=crop&w=600&q=80", title: "Historic Typewriters & Books" },
  { url: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80", title: "Rustic Home Decor" },
  { url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80", title: "Architectural Wood Salvage" }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inquiryItem, setInquiryItem] = useState("General Inventory Inquiry");
  const [toastMessage, setToastMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", type: "Item Purchase Inquiry" });

  const filteredItems = INVENTORY.filter(item => {
    const matchesCategory = selectedCategory === "All Items" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenInquiry = (itemTitle = "General Inventory Inquiry") => {
    setInquiryItem(itemTitle);
    setIsModalOpen(true);
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setToastMessage(`Inquiry submitted! Thank you ${formData.name}. We will get back to you regarding "${inquiryItem}" right away.`);
    setFormData({ name: "", email: "", phone: "", message: "", type: "Item Purchase Inquiry" });
    setTimeout(() => setToastMessage(""), 5000);
  };

  return (
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex-between">
          <div>📍 208 S Bridge St, Grand Ledge, MI 48837</div>
          <div>📞 Store: (517) 622-2001 | Tue - Sun: 10 AM - 5 PM</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container flex-between">
          <a href="#" className="brand">
            <span>🏺</span>
            <span>THE SALVAGE YARD ANTIQUES</span>
          </a>
          <div className="nav-links">
            <a href="#inventory">Browse Inventory</a>
            <a href="#gallery">Showroom Tour</a>
            <a href="#consign">Appraisals & Consign</a>
            <a href="#hours">Store Hours & Map</a>
            <button className="btn btn-amber" onClick={() => handleOpenInquiry()}>Inquire / Sell Item</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>DISCOVER UNIQUE VINTAGE & ARCHITECTURAL TREASURES</h1>
          <p>
            Grand Ledge's premier destination for rare antique furniture, reclaimed barn wood, vintage signs, industrial salvage, and timeless home curiosities.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#inventory" className="btn btn-amber" style={{ padding: '12px 30px', fontSize: '1.05rem' }}>
              Explore Collection
            </a>
            <button className="btn btn-outline" style={{ padding: '12px 30px', fontSize: '1.05rem' }} onClick={() => handleOpenInquiry('Item Appraisal')}>
              Have Items to Sell?
            </button>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section id="inventory" className="section">
        <div className="container">
          <div className="section-header">
            <h2>CURATED ANTIQUE INVENTORY</h2>
            <p>New architectural salvage and vintage arrivals added weekly</p>
          </div>

          <div className="filter-bar">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search items, styles, eras..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="category-chips">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="inventory-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="item-card">
                <img src={item.img} alt={item.title} className="item-img" />
                <div className="item-body">
                  <h3 className="item-title">{item.title}</h3>
                  <span className="item-era">⏳ {item.era}</span>
                  <p className="item-desc">{item.desc}</p>
                  <div className="item-price-row">
                    <span className="item-price">{item.price}</span>
                    <button className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.85rem' }} onClick={() => handleOpenInquiry(item.title)}>
                      Inquire / Hold
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Tour */}
      <section id="gallery" className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2>INSIDE OUR SHOWROOM</h2>
            <p>Over 5,000 sq ft of vintage, antique, and rustic architectural exhibits</p>
          </div>
          <div className="showcase-grid">
            {SHOWCASE_GALLERY.map((g, idx) => (
              <div key={idx} className="showcase-item">
                <img src={g.url} alt={g.title} />
                <div className="showcase-title">{g.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consign & Vendor Section */}
      <section id="consign" className="section">
        <div className="container">
          <div className="info-card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-amber)', fontSize: '2.2rem', marginBottom: '16px' }}>
              WE BUY & CONSIGN ANTIQUES & SALVAGE
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.1rem' }}>
              Have old estate items, vintage signs, industrial lighting, or barn salvage? We offer fair cash appraisals and vendor booth spaces for experienced dealers.
            </p>
            <button className="btn btn-amber" style={{ padding: '12px 30px' }} onClick={() => handleOpenInquiry('Consignment / Estate Appraisal')}>
              Contact Consignment Team
            </button>
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section id="hours" className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2>VISIT THE SALVAGE YARD</h2>
            <p>Located on S Bridge St in the heart of historic Grand Ledge</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>STORE LOCATION</h3>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>The Salvage Yard Antiques</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>📍 208 S Bridge St, Grand Ledge, MI 48837</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>📞 Phone: <a href="tel:5176222001" style={{ color: 'var(--primary-amber)' }}>(517) 622-2001</a></p>
              <button className="btn btn-amber" onClick={() => handleOpenInquiry('Directions Inquiry')}>Get Directions</button>
            </div>

            <div className="info-card">
              <h3>STORE HOURS</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed var(--border-color)' }}>
                  <span>Tuesday - Saturday</span> <strong>10:00 AM - 5:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px dashed var(--border-color)' }}>
                  <span>Sunday</span> <strong>10:00 AM - 4:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                  <span>Monday</span> <strong style={{ color: '#E53E3E' }}>Closed</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 The Salvage Yard Antiques. 208 S Bridge St, Grand Ledge, MI 48837 | (517) 622-2001</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-amber)', marginBottom: '16px' }}>
              INQUIRE ABOUT ITEM / CONSIGNMENT
            </h2>
            <form onSubmit={handleSubmitInquiry}>
              <div className="form-group">
                <label>Inquiry Regarding</label>
                <input type="text" className="form-control" value={inquiryItem} readOnly style={{ background: '#120F0D', color: 'var(--primary-amber)' }} />
              </div>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Robert Taylor"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  className="form-control"
                  placeholder="(517) 555-0199"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select
                  className="form-control"
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value })}
                >
                  <option value="Item Purchase Inquiry">Item Hold / Purchase Inquiry</option>
                  <option value="Sell / Consign Antique">Sell / Consign Antique Item</option>
                  <option value="Vendor Booth Rental">Vendor Dealer Space Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message Details</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Let us know any questions or description of your item..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-amber" style={{ width: '100%', padding: '12px' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}
