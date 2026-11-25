import './ProductCard.css';

const formatoCOP = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

const BADGE_CLASS = {
  juego: 'badge badge--juego',
  accesorio: 'badge badge--accesorio',
};

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <span className={BADGE_CLASS[product.categoria]}>{product.categoria}</span>
      <img
        className="product-card__image"
        src={product.imagen}
        alt={`${product.nombre} para ${product.plataforma}`}
      />
      <div className="product-card__body">
        <h3 className="product-card__name">{product.nombre}</h3>
        <p className="product-card__platform">{product.plataforma}</p>
        <p className="product-card__price">{formatoCOP.format(product.precio)}</p>
      </div>
    </article>
  );
}

export default ProductCard;
