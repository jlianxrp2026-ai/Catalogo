import { useState } from 'react'
import './index.css'
import productosData from './productos.json'

function App() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Extraer categorías únicas
  const categories = ['Todas', ...new Set(productosData.map(p => p.category))]

  // Filtrar productos
  const filteredProducts = activeCategory === 'Todas' 
    ? productosData 
    : productosData.filter(p => p.category === activeCategory)

  // Manejar adición al carrito
  const addToCart = (product, selectedOption) => {
    setCart(prev => {
      // Ver si ya existe el mismo producto con la misma variante
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
    let text = "¡Hola! Me interesan estos perfumes del catálogo de World Fragance:%0A%0A"
    
    cart.forEach(item => {
      const priceText = item.price === 'Cotizar en tienda' ? '(Cotizar)' : `(Q${item.price})`
      text += `- ${item.quantity}x ${item.name} | ${item.variant} ${priceText}%0A`
    })
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank")
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">World Fragance</div>
      </header>

      <main className="main-content">
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

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      </main>

      {/* Botón flotante del carrito */}
      <div className="floating-cart" onClick={() => setIsCartOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        {cart.length > 0 && (
          <span className="cart-badge">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </div>

      {/* Modal del carrito */}
      <div className={`modal-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
        <div className="cart-modal" onClick={e => e.stopPropagation()}>
          <div className="cart-header">
            <h2 className="cart-title">Tu Pedido</h2>
            <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <div className="cart-empty">Aún no has agregado perfumes.</div>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name} <span style={{fontSize: '0.8rem', color: '#9ca3af'}}>x{item.quantity}</span></div>
                    <div className="cart-item-variant">{item.variant}</div>
                    <div className="cart-item-price">
                      {item.price === 'Cotizar en tienda' ? 'Cotizar' : `Q${item.price}`}
                    </div>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id, item.variant)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
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
              style={{ opacity: cart.length === 0 ? 0.5 : 1, cursor: cart.length === 0 ? 'not-allowed' : 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Enviar Pedido por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, onAdd }) {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0)
  
  const selectedOption = product.options[selectedOptionIdx]

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
      </div>
      <div className="product-info">
        <div className="product-category">{product.category} {product.subcategory ? `- ${product.subcategory}` : ''}</div>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-options">
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
            className="add-to-cart-btn"
            onClick={() => onAdd(product, selectedOption)}
          >
            Agregar al Pedido
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
