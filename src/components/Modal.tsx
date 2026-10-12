import { useEffect, useRef } from "react";

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
  detailsUrl?: string;
};

export function Modal({
  product,
  quantity,
  setQuantity,
  onClose,
  onAddToCart,
  formatPrice,
  detailsUrl,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement;

    closeButtonRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'button:not(:disabled), a[href], input:not(:disabled), [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === lastElement
    ) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  const description = product.descriptionShort?.trim();
  const safeQuantity = Number.isFinite(quantity)
    ? Math.max(1, Math.floor(quantity))
    : 1;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <div className="modal-img">
          <img src={product.photo} alt={product.productName}/>
        </div>

        <div className="modal-info">
          <h2 id="modal-title">{product.productName}</h2>

          <div className="price">
            {formatPrice(product.price * safeQuantity)}
          </div>

          {description && (
            <p id="modal-description" className="description">
              {description}
            </p>
          )}

          {detailsUrl ? (
            <a className="more-details" href={detailsUrl}>
              Veja mais detalhes do produto &gt;
            </a>
          ) : (
            <span className="more-details">
              Veja mais detalhes do produto &gt;
            </span>
          )}

          <div className="qty-row">
            <div className="qty-picker">
              <button
                id="qty-back"
                type="button"
                aria-label="Diminuir quantidade"
                disabled={safeQuantity <= 1}
                onClick={() => setQuantity(safeQuantity - 1)}
              >
                -
              </button>

              <span aria-live="polite">
                {String(safeQuantity).padStart(2, "0")}
              </span>

              <button
                type="button"
                aria-label="Aumentar quantidade"
                onClick={() => setQuantity(safeQuantity + 1)}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="btn-modal-buy"
              onClick={onAddToCart}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}