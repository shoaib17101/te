import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CheckoutPage() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart') || '[]') } catch { return [] }
  })
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' })
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const updateQty = (handleId, qty) => {
    setCart(prev => prev.map(p => p.handleId === handleId ? { ...p, quantity: Math.max(1, qty) } : p))
  }

  const removeItem = (handleId) => setCart(prev => prev.filter(p => p.handleId !== handleId))
  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const getItemPrice = (item) => {
    // try numeric price, fallback to parse from string
    const p = typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0
    return p
  }

  const subtotal = cart.reduce((s, it) => s + getItemPrice(it) * (it.quantity || 1), 0)
  const shipping = subtotal > 0 ? 5.0 : 0
  const total = subtotal + shipping

  const placeOrder = (e) => {
    e.preventDefault()
    if (!customer.name || !customer.email || !customer.address) {
      return alert('Please fill name, email and address.')
    }
    if (cart.length === 0) return alert('Cart is empty.')
    // simulate order
    const order = {
      id: `ORD-${Date.now()}`,
      customer,
      items: cart,
      total,
      createdAt: new Date().toISOString()
    }
    // in real app send "order" to backend here
    console.log('Order created', order)
    clearCart()
    alert('Order placed. Thank you!')
    navigate('/') // or to an order-success page if you add one
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Your items</h2>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.handleId} className="flex flex-col md:flex-row items-center gap-4 p-3 border rounded">
                <img src={"https://static.wixstatic.com/media/" + item.productImageUrl} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                  <p className="text-blue-600 font-medium">{getItemPrice(item).toFixed(2)} $</p>
                </div>

                <div className="flex items-center gap-2">
                  <button className="btn btn-ghost" onClick={() => updateQty(item.handleId, (item.quantity || 1) - 1)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button className="btn btn-ghost" onClick={() => updateQty(item.handleId, (item.quantity || 1) + 1)}>+</button>
                  <button className="btn btn-error btn-sm ml-2" onClick={() => removeItem(item.handleId)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="btn btn-outline mr-2" onClick={() => { if (confirm('Clear cart?')) clearCart() }}>Clear Cart</button>
            <Link to="/" className="btn">Continue shopping</Link>
          </div>
        </div>

        <aside className="p-4 border rounded">
          <h2 className="font-semibold mb-2">Order summary</h2>
          <div className="flex justify-between"><span>Subtotal</span><span>{subtotal.toFixed(2)} $</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{shipping.toFixed(2)} $</span></div>
          <div className="flex justify-between font-bold mt-2"><span>Total</span><span>{total.toFixed(2)} $</span></div>

          <form onSubmit={placeOrder} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm">Name</label>
              <input value={customer.name} onChange={e => setCustomer(c => ({ ...c, name: e.target.value }))} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input type="email" value={customer.email} onChange={e => setCustomer(c => ({ ...c, email: e.target.value }))} className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-sm">Address</label>
              <textarea value={customer.address} onChange={e => setCustomer(c => ({ ...c, address: e.target.value }))} className="textarea textarea-bordered w-full" />
            </div>

            <button type="submit" className="btn btn-primary w-full">Place Order</button>
          </form>
        </aside>
      </div>
    </div>
  )
}
