import { useState, useEffect } from 'react'
import './index.css'
import productosData from './productos.json'
import { track } from '@vercel/analytics'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [activeGender, setActiveGender] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedPerfume, setSelectedPerfume] = useState(null)

  // Animated splash screen on initial catalog visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll when a modal is open
  useEffect(() => {
    if (selectedPerfume || isCartOpen) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [selectedPerfume, isCartOpen])

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPerfume(null)
        setIsCartOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Extraer categorías únicas
  const categories = ['Todas', ...new Set(productosData.map(p => p.category))]
  const genders = ['Todos', 'Damas', 'Caballeros']

  // Filtrar productos
  const filteredProducts = productosData.filter(p => {
    const matchCategory = activeCategory === 'Todas' || p.category === activeCategory
    const matchGender = activeGender === 'Todos' || p.subcategory === activeGender || p.subcategory === null
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    return matchCategory && matchGender && matchSearch
  })

  const handleSearchBlur = () => {
    if (searchQuery.trim().length > 2) {
      try {
        track('Search', { query: searchQuery.trim() })
      } catch (e) {
        // ignore in local
      }
    }
  }

  // Manejar adición al carrito
  const addToCart = (product, selectedOption) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === selectedOption.size)
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.variant === selectedOption.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image,
        variant: selectedOption.size,
        price: selectedOption.price,
        quantity: 1
      }]
    })
  }

  const removeFromCart = (id, variant) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.variant === variant)))
  }

  const sendWhatsApp = () => {
    const phoneNumber = "50231158711"
    let text = "¡Hola! Me interesan estos perfumes del catálogo de World Fragance / World of MIA:%0A%0A"
    
    cart.forEach(item => {
      const priceText = item.price === 'Cotizar en tienda' ? '(Cotizar)' : `(Q${item.price})`
      text += `- ${item.quantity}x ${item.name} | ${item.variant} ${priceText}%0A`
    })
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank")
  }

  return (
    <div className="app-container">
      {/* Animated Splash Screen */}
      <div 
        className={`splash-screen ${showSplash ? 'active' : 'hidden'}`}
        onClick={() => setShowSplash(false)}
      >
        <div className="splash-logo-wrapper">
          <img src="/logo.jpg" alt="World Fragance Logo" className="splash-logo-img" />
          <h1 className="splash-title">World Fragance</h1>
          <p className="splash-subtitle">Lujo que se lleva en la piel</p>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="brand-section" onClick={() => { setActiveCategory('Todas'); setActiveGender('Todos'); setSearchQuery(''); }}>
          <img src="/logo.jpg" alt="Logo WF" className="header-logo-img" />
          <div className="brand-info">
            <span className="logo-text">World Fragance</span>
            <span className="logo-tagline">World of MIA</span>
          </div>
        </div>

        {/* Social Links Directos */}
        <div className="header-actions">
          <div className="social-links">
            <a 
              href="https://www.tiktok.com/@worldofmia0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="Síguenos en TikTok"
              aria-label="TikTok"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.91a8.4 8.4 0 0 1-.39 2.53 8.35 8.35 0 0 1-5.69 5.8 8.46 8.46 0 0 1-8.22-1.91 8.37 8.37 0 0 1-2.3-5.91 8.35 8.35 0 0 1 5.97-8.13c.69-.21 1.41-.33 2.13-.35v4.06c-.84.09-1.68.45-2.27 1.07-.63.66-.96 1.56-.93 2.47.03.92.42 1.81 1.09 2.43.68.62 1.61.94 2.53.88 1.1-.06 2.1-.64 2.67-1.57.34-.56.51-1.22.5-1.89V.02z"/>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/people/World-of-MIA/61574806692728/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="Síguenos en Facebook"
              aria-label="Facebook"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/world_ofmia__/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              title="Síguenos en Instagram"
              aria-label="Instagram"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-minimal">
          <h2 className="hero-title">Colección Exclusiva</h2>
          <p className="hero-subtitle">Descubre la pirámide olfativa y notas de cada perfume</p>
        </div>

        {/* Search Bar Minimalist */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Buscar por nombre (ej. Hawas, Sauvage, Yara, Khamrah)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={handleSearchBlur}
              className="search-input"
            />
            {searchQuery && (
              <button 
                className="search-clear-btn" 
                onClick={() => setSearchQuery('')}
                title="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filters Minimalist */}
        <div className="filters-wrapper">
          <div className="categories-filter">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="gender-filter-group">
            <span className="gender-label">Para:</span>
            {genders.map(gen => (
              <button 
                key={gen}
                className={`gender-btn ${activeGender === gen ? 'active' : ''}`}
                onClick={() => setActiveGender(gen)}
              >
                {gen}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="products-counter">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'perfume disponible' : 'perfumes disponibles'} • Toca cualquier perfume para ver sus notas
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="empty-results">
            <p>No se encontraron perfumes con el nombre "{searchQuery}".</p>
            <button 
              className="category-btn" 
              onClick={() => { setSearchQuery(''); setActiveCategory('Todas'); setActiveGender('Todos'); }}
            >
              Ver todos los perfumes
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={addToCart}
                onSelectPerfume={setSelectedPerfume}
              />
            ))}
          </div>
        )}
      </main>

      {/* Floating Cart Button */}
      <button 
        className="floating-cart" 
        onClick={() => setIsCartOpen(true)}
        aria-label="Ver pedido"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {cart.length > 0 && (
          <span className="cart-badge">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* ==============================================================
          PERFUME DETAIL MODAL (Fragrantica Style) "Pestaña sin cambiar"
          ============================================================== */}
      {selectedPerfume && (
        <PerfumeDetailModal 
          product={selectedPerfume}
          onClose={() => setSelectedPerfume(null)}
          onAdd={addToCart}
        />
      )}

      {/* Cart Modal */}
      <div className={`modal-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
        <div className="cart-modal" onClick={e => e.stopPropagation()}>
          <div className="cart-header">
            <h2 className="cart-title">Tu Pedido</h2>
            <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">Aún no has agregado perfumes al pedido.</div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name} <span style={{fontSize: '0.78rem', color: '#a1a1aa'}}>x{item.quantity}</span></div>
                    <div className="cart-item-variant">{item.variant}</div>
                    <div className="cart-item-price">
                      {item.price === 'Cotizar en tienda' ? 'Cotizar en tienda' : `Q${item.price}`}
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id, item.variant)}
                    title="Eliminar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="cart-footer">
            <button 
              className="whatsapp-btn" 
              onClick={sendWhatsApp}
              disabled={cart.length === 0}
              style={{ opacity: cart.length === 0 ? 0.45 : 1, cursor: cart.length === 0 ? 'not-allowed' : 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Enviar Pedido por WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Footer Minimalist */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.jpg" alt="Logo WF" className="footer-logo-img" />
            <span className="footer-brand-title">World Fragance</span>
          </div>

          <div className="footer-social-wrapper">
            <span className="footer-social-title">Síguenos en Redes Sociales</span>
            <div className="footer-social-links">
              <a 
                href="https://www.tiktok.com/@worldofmia0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.91a8.4 8.4 0 0 1-.39 2.53 8.35 8.35 0 0 1-5.69 5.8 8.46 8.46 0 0 1-8.22-1.91 8.37 8.37 0 0 1-2.3-5.91 8.35 8.35 0 0 1 5.97-8.13c.69-.21 1.41-.33 2.13-.35v4.06c-.84.09-1.68.45-2.27 1.07-.63.66-.96 1.56-.93 2.47.03.92.42 1.81 1.09 2.43.68.62 1.61.94 2.53.88 1.1-.06 2.1-.64 2.67-1.57.34-.56.51-1.22.5-1.89V.02z"/>
                </svg>
                <span>TikTok</span>
              </a>

              <a 
                href="https://www.facebook.com/people/World-of-MIA/61574806692728/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              <a 
                href="https://www.instagram.com/world_ofmia__/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <a 
            href="https://wa.me/50231158711" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-whatsapp-badge"
          >
            WhatsApp directo: +502 3115-8711
          </a>

          <p className="footer-copyright">
            © {new Date().getFullYear()} World Fragance • World of MIA. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <Analytics />
    </div>
  )
}

function ProductCard({ product, onAdd, onSelectPerfume }) {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)
  const [isAddedFeedback, setIsAddedFeedback] = useState(false)
  const selectedOption = product.options[selectedOptionIdx]

  const handleAdd = (e) => {
    e.stopPropagation()
    onAdd(product, selectedOption)
    setIsAddedFeedback(true)
    setTimeout(() => setIsAddedFeedback(false), 1200)
  }

  return (
    <div className="product-card">
      <div 
        className="product-card-clickable"
        onClick={() => onSelectPerfume(product)}
        title="Toca para ver notas olfativas y clima recomendado"
      >
        <div className="product-image-container">
          <div className="product-badge-group">
            <span className="product-badge">{product.category}</span>
          </div>
          <span className="detail-hint-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Ver Notas
          </span>
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        </div>

        <div className="product-info">
          <div className="product-category-text">
            {product.subcategory ? `${product.subcategory}` : product.category}
          </div>
          <h3 className="product-name">{product.name}</h3>

          {/* Mini preview of main accords */}
          {product.accords && product.accords.length > 0 && (
            <div className="product-accords-preview">
              {product.accords.slice(0, 3).map((accord, i) => (
                <span key={i} className="accord-pill-mini">{accord}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="product-options" style={{ padding: '0 1.35rem 1.35rem' }}>
        <select 
          className="option-select"
          value={selectedOptionIdx}
          onChange={(e) => setSelectedOptionIdx(Number(e.target.value))}
        >
          {product.options.map((opt, idx) => (
            <option key={idx} value={idx}>
              {opt.size} - {opt.price === 'Cotizar en tienda' ? 'Cotizar en tienda' : `Q${opt.price}`}
            </option>
          ))}
        </select>
        <button 
          className={`add-to-cart-btn ${isAddedFeedback ? 'added' : ''}`}
          onClick={handleAdd}
        >
          {isAddedFeedback ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              ¡Agregado!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Agregar al Pedido
            </>
          )}
        </button>
      </div>
    </div>
  )
}

function PerfumeDetailModal({ product, onClose, onAdd }) {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)
  const [isAddedFeedback, setIsAddedFeedback] = useState(false)
  const selectedOption = product.options[selectedOptionIdx]

  const handleAddModal = () => {
    onAdd(product, selectedOption)
    setIsAddedFeedback(true)
    setTimeout(() => setIsAddedFeedback(false), 1400)
  }

  // Pre-formatted direct WhatsApp inquiry for this specific perfume
  const directWhatsAppUrl = () => {
    const phone = "50231158711"
    const priceText = selectedOption.price === 'Cotizar en tienda' ? 'Cotizar en tienda' : `Q${selectedOption.price}`
    const text = `¡Hola! Me interesa cotizar/pedir este perfume del catálogo:%0A%0A*${product.name}*%0A- Presentación: ${selectedOption.size} (${priceText})%0A- Categoría: ${product.category} ${product.subcategory || ''}%0A%0A¿Tienen disponibilidad?`
    return `https://wa.me/${phone}?text=${text}`
  }

  const allSeasons = ["Primavera", "Verano", "Otoño", "Invierno"]
  const recommendedSeasons = product.climate?.seasons || []
  const isRecommended = (s) => recommendedSeasons.includes(s) || recommendedSeasons.includes("Todas las estaciones")

  return (
    <div className="perfume-modal-overlay open" onClick={onClose}>
      <div className="perfume-modal" onClick={e => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="modal-header-bar">
          <div className="modal-header-info">
            <span className="modal-header-category">
              {product.category} {product.subcategory ? `• ${product.subcategory}` : ''}
            </span>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="Cerrar detalles">✕</button>
        </div>

        {/* Modal Content Grid */}
        <div className="modal-content-scroll">
          {/* Left Column: Image, Specs & Order */}
          <div className="modal-left-column">
            <div className="modal-image-box">
              <img src={product.image} alt={product.name} className="modal-perfume-img" />
            </div>

            {/* Quick Specs Cards */}
            <div className="modal-specs-grid">
              <div className="spec-card">
                <span className="spec-label">Duración</span>
                <span className="spec-value">8 - 12+ Horas</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Estela</span>
                <span className="spec-value">Mod. a Intensa</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Género</span>
                <span className="spec-value">{product.subcategory || 'Unisex'}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">Concentración</span>
                <span className="spec-value">Eau De Parfum</span>
              </div>
            </div>

            {/* Purchase Options */}
            <div className="modal-purchase-box">
              <span className="purchase-box-title">Seleccionar Presentación</span>
              <select 
                className="option-select"
                value={selectedOptionIdx}
                onChange={(e) => setSelectedOptionIdx(Number(e.target.value))}
              >
                {product.options.map((opt, idx) => (
                  <option key={idx} value={idx}>
                    {opt.size} - {opt.price === 'Cotizar en tienda' ? 'Cotizar en tienda' : `Q${opt.price}`}
                  </option>
                ))}
              </select>

              <button 
                className={`add-to-cart-btn ${isAddedFeedback ? 'added' : ''}`}
                onClick={handleAddModal}
              >
                {isAddedFeedback ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    ¡Agregado a tu pedido!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Agregar al Pedido
                  </>
                )}
              </button>

              <a 
                href={directWhatsAppUrl()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-whatsapp-direct-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Pedir directo por WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Fragrantica Notes & Climate */}
          <div className="modal-right-column">
            {/* Title & Description */}
            <div className="detail-title-section">
              <h2 className="detail-perfume-title">{product.name}</h2>
              <p className="detail-perfume-desc">{product.description}</p>
            </div>

            {/* Acordes Principales (como Fragrantica) */}
            {product.accords && product.accords.length > 0 && (
              <div>
                <h4 className="fragrantica-section-title">
                  <span>✦</span> Acordes Principales
                </h4>
                <div className="accords-tags-list">
                  {product.accords.map((accord, idx) => (
                    <span key={idx} className="accord-tag">{accord}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Pirámide Olfativa */}
            {product.notes && (
              <div>
                <h4 className="fragrantica-section-title">
                  <span>▲</span> Pirámide Olfativa
                </h4>
                <div className="pyramid-box">
                  {/* Salida */}
                  {product.notes.top && product.notes.top.length > 0 && (
                    <div className="pyramid-tier">
                      <div className="pyramid-tier-header">
                        <span>🍋 Notas de Salida</span>
                        <span className="tier-timing">(Primeros 15-30 min)</span>
                      </div>
                      <div className="notes-chips-list">
                        {product.notes.top.map((note, idx) => (
                          <span key={idx} className="note-chip">{note}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Corazón */}
                  {product.notes.heart && product.notes.heart.length > 0 && (
                    <div className="pyramid-tier">
                      <div className="pyramid-tier-header">
                        <span>🌸 Notas de Corazón</span>
                        <span className="tier-timing">(El alma de la fragancia)</span>
                      </div>
                      <div className="notes-chips-list">
                        {product.notes.heart.map((note, idx) => (
                          <span key={idx} className="note-chip">{note}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fondo */}
                  {product.notes.base && product.notes.base.length > 0 && (
                    <div className="pyramid-tier">
                      <div className="pyramid-tier-header">
                        <span>🪵 Notas de Fondo</span>
                        <span className="tier-timing">(Fijación duradera 8h+)</span>
                      </div>
                      <div className="notes-chips-list">
                        {product.notes.base.map((note, idx) => (
                          <span key={idx} className="note-chip">{note}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Clima y Ocasión Ideal (Fragrantica Rating) */}
            {product.climate && (
              <div>
                <h4 className="fragrantica-section-title">
                  <span>☀️</span> Clima y Ocasión Ideal
                </h4>
                <div className="climate-box">
                  <div className="climate-groups">
                    {/* Estaciones */}
                    <div className="climate-subgroup">
                      <span className="climate-subgroup-title">Estaciones Recomendadas</span>
                      <div className="season-badges-list">
                        {allSeasons.map((season, idx) => (
                          <span 
                            key={idx} 
                            className={`season-badge ${isRecommended(season) ? 'recommended' : ''}`}
                          >
                            {season === 'Verano' && '☀️'}
                            {season === 'Primavera' && '🌸'}
                            {season === 'Otoño' && '🍂'}
                            {season === 'Invierno' && '❄️'}
                            {' '}{season}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Momento del Día */}
                    <div className="climate-subgroup">
                      <span className="climate-subgroup-title">Momento del Día</span>
                      <div className="season-badges-list">
                        {product.climate.time && product.climate.time.map((time, idx) => (
                          <span key={idx} className="season-badge recommended">
                            {time === 'Día' ? '☀️ Día' : time === 'Noche' ? '🌙 Noche' : `✨ ${time}`}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ocasión */}
                  {product.climate.occasion && (
                    <div className="occasion-text-box">
                      <strong>Recomendación de uso:</strong> {product.climate.occasion}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
