import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarProductos() {
      try {
        const response = await fetch('/productos.json');
        if (!response.ok) {
          throw new Error(`No se pudieron cargar los productos (${response.status})`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    cargarProductos();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
