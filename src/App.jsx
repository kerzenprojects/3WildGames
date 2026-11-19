import ProductCard from './components/ProductCard';

const productoDePrueba = {
  id: 1,
  nombre: 'The Legend of Zelda: Tears of the Kingdom',
  categoria: 'juego',
  plataforma: 'Nintendo Switch',
  precio: 269900,
  imagen: '/img/juego-01.svg',
  descripcion: 'Aventura de mundo abierto en Hyrule y los cielos.',
};

function App() {
  return (
    <>
      <h1>Hola tienda</h1>
      <ProductCard product={productoDePrueba} />
    </>
  );
}

export default App;
