// Product data
const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$49.99",
      description: "Product 1 description",
      rating: 3.5,
    },
    // Add more product objects if needed
  ];
  
  // Cart component
  function Cart({ items, removeItem }) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.name} - {item.price}
            </span>
            <button className="btn btn-danger" onClick={() => removeItem(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  // Product component
  function Product({ product, addToCart, disabled }) {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <h5 className="card-price">{product.price}</h5>
            <p className="card-text">{product.description}</p>
            <div className="rating">{renderStars(product.rating)}</div>
            <button
              className="btn btn-primary btn-block"
              onClick={() => addToCart(product)}
              disabled={disabled}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // App component
  function App() {
    const [cartItems, setCartItems] = React.useState([]);
  
    // Function to add item to the cart
    function addToCart(item) {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  
    // Function to remove item from the cart
    function removeItem(item) {
      setCartItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== item.id)
      );
    }
  
    // Function to render stars based on rating value
    function renderStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars.push(<i key={i} className="fas fa-star"></i>);
        } else {
          stars.push(<i key={i} className="far fa-star"></i>);
        }
      }
      return stars;
    }
  
    return (
      <div className="container">
        <h1>Shop Homepage</h1>
        <div className="row">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
              disabled={cartItems.find((item) => item.id === product.id)}
            />
          ))}
        </div>
        <Cart items={cartItems} removeItem={removeItem} />
      </div>
    );
  }
  
  // Render the App component to the DOM
  ReactDOM.render(<App />, document.getElementById("root"));
  