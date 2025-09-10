import { useState } from 'react';
import './FavoritePhrases.css';

function FavoritePhrases({ quotes, onEdit, onDelete, onChange, onSave }) {
  const [showModal, setShowModal] = useState(false);
  const [quoteToDelete, setQuoteToDelete] = useState(null);
  const [deletedMessage, setDeletedMessage] = useState('');
  const [lastEditedId, setLastEditedId] = useState(null);

  const handleDeleteClick = (quote) => {
    setQuoteToDelete(quote);
    setShowModal(true);
    setDeletedMessage('');
    setLastEditedId(null);
  };

  const confirmDelete = () => {
    onDelete(quoteToDelete.id);
    setShowModal(false);
    setDeletedMessage('¡Tu frase ha sido eliminada!');
    setLastEditedId(null);
    setQuoteToDelete(null);
    setTimeout(() => setDeletedMessage(''), 3000);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setQuoteToDelete(null);
  };

  const handleSave = (id) => {
    onSave(id);
    setLastEditedId(id);
    setDeletedMessage('');
    setTimeout(() => setLastEditedId(null), 3000);
  };

  return (
    <section id="misfavoritas" className="favorite-section">
      <h2 className="phrasesh2">Mis Frases con Alma</h2>

      {deletedMessage && <p className="deleted-message">{deletedMessage}</p>}

      {quotes.length === 0 ? (
        <p className="no-quotes">No hay frases aún</p>
      ) : (
        <div className="favorite-container">
          {quotes.map((quote) => (
            <div key={quote.id} className="quote-card">
              {quote.editing ? (
                <>
                  <input
                    type="text"
                    value={quote.text}
                    onChange={(e) => onChange(quote.id, "text", e.target.value)}
                    className="quote-input"
                  />
                  <input
                    type="text"
                    value={quote.author}
                    onChange={(e) => onChange(quote.id, "author", e.target.value)}
                    className="author-input"
                  />
                  <button onClick={() => handleSave(quote.id)} className="save-button">
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <p className="quote-text">"{quote.text}"</p>
                  <p className="author-text">- {quote.author}</p>
                  {quote.image && (
                    <img
                      src={quote.image}
                      alt="Imagen de la frase"
                      className="quote-image"
                    />
                  )}
                  <div className="buttons">
                    <button onClick={() => onEdit(quote.id)} className="edit-button">
                      Editar
                    </button>
                    <button onClick={() => handleDeleteClick(quote)} className="delete-button">
                      Eliminar
                    </button>
                  </div>
                  {lastEditedId === quote.id && (
                    <p className="edited-message">¡Tu frase ha sido editada correctamente! ✅</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>¿Seguro que quieres eliminar esta frase?</p>
            <div className="modal-buttons">
              <button onClick={confirmDelete} className="save-button">Sí, eliminar</button>
              <button onClick={cancelDelete} className="delete-button">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FavoritePhrases;
