import './FavoritePhrases.css';

function FavoritePhrases({ quotes, onEdit, onDelete, onChange, onSave }) {
  return (
    <section id="misfavoritas" className="favorite-section">
      <h2 className="phrasesh2">
        Mis Frases Favoritas
      </h2>

      {quotes.length === 0 ? (
        <p className="no-quotes">No hay frases aún</p>
      ) : (
        <div className="favorite-container">
          {quotes.map((quote) => (
            <div key={quote.id} className="quote-card"> {/* 👈 aquí usamos quote.id */}
              {quote.editing ? (
                <>
                  <input
                    type="text"
                    value={quote.text}
                    onChange={(e) => onChange(quote.id, "text", e.target.value)} // pasar id en lugar de index
                    className="quote-input"
                  />
                  <input
                    type="text"
                    value={quote.author}
                    onChange={(e) => onChange(quote.id, "author", e.target.value)} // pasar id
                    className="author-input"
                  />
                  <button onClick={() => onSave(quote.id)} className="save-button">
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
                    <button onClick={() => onDelete(quote.id)} className="delete-button">
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritePhrases;


