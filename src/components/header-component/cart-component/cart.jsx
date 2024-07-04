import './style-cart.css'
function Cart({cantItem}) {  // desestructuro el objeto
  return (
    <div className="cart-container">
      <a className="cart" href="#">
        <i className="fas fa-shopping-cart" />
      </a>
      <span className="text-cart">{cantItem}</span>
    </div>
  )
}

export default Cart