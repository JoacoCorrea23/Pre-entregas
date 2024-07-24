const [productos, setProductos] = useState(null);
// cambiar esto(useState(productosIniciales)) por un (useState([])) por un use efect que al renderizar la app por primera vez haga el set producto con el array que usamos de ejemplo
const [carrito, setCarrito] = useState([]);

//agrega un producto al carrito
const agregarProducto = (nuevoProducto) => {
	setCarrito([...carrito, nuevoProducto]);
};

// elimina el producto que quiero del carrito
const eliminarProducto = (nombreProducto) => {
	setCarrito(carrito.filter((producto) => producto.nombre !== nombreProducto));
};
