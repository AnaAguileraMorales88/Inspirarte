import './FavoritePhrases.css';

function FavoritePhrases({ quotes, onEdit, onDelete, onChange, onSave }) {
  return (
    <section id="misfavoritas" className="favorite-section">
      <h2 className="phrasesh2">
        Mis Frases Favoritas
      </h2>
      <div className="favorite-container">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-card">
            {quote.editing ? (
              <>
                <input
                  type="text"
                  value={quote.text}
                  onChange={(e) => onChange(index, "text", e.target.value)}
                  className="quote-input"
                />
                <input
                  type="text"
                  value={quote.author}
                  onChange={(e) => onChange(index, "author", e.target.value)}
                  className="author-input"
                />
                <button onClick={() => onSave(index)} className="save-button">
                  Guardar
                </button>
              </>
            ) : (
              <>
                <p className="quote-text">"{quote.text}"</p>
                <p className="author-text">- {quote.author}</p>
                <button onClick={() => onEdit(index)} className="edit-button">
                  Editar
                </button>
                <button onClick={() => onDelete(index)} className="delete-button">
                  Eliminar
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FavoritePhrases;
