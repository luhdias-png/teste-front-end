export type Product = {
  productName: string;
  photo: string;
  price: number;
  descriptionShort: string;
};

type ModalProps = {
  product: Product;
  quantity: number;
  setQuantity: (qty: number) => void;
  onClose: () => void;
  onAddToCart: () => void;
  formatPrice: (value: number) => string;
};

export function Modal({ product, quantity, setQuantity, onClose, onAddToCart, formatPrice }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-img">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="modal-info">
          <h2>{product.productName}</h2> 
          <div className="price">{formatPrice(product.price * quantity)}</div>
          
          <p className="description">
            {product.descriptionShort || "Many desktop publishing packages and web page editors now many desktop publishing"}
          </p>
          <a className="more-details">Veja mais detalhes do produto &gt;</a>

          <div className="qty-row">
            <div className="qty-picker">
              <button id="qty-back" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn-modal-buy" onClick={onAddToCart}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}