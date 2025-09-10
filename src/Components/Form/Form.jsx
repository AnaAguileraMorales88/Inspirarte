import "./Form.css";
import { useState } from "react";

function Form({ addQuote }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false); 

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError("Por favor completa todos los campos");
      setShowErrorModal(true); 
      return;
    }

    const newQuote = {
      id: Date.now(),
      text: text.trim(),
      author: author.trim() || "Anónimo",
      image: image || null,
      editing: false,
    };

    addQuote(newQuote);

    setText("");
    setAuthor("");
    setImage(null);
    setError("");
    setShowErrorModal(false);

    document
      .getElementById("misfavoritas")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setError("");
  };

  return (
    <section id="añadir" className="FormSection">
      <h2 className="Formh2">Convierte tus ideas en frases únicas</h2>
      <form onSubmit={handleSubmit} className="formContainer">
        <label htmlFor="frase">FRASE :</label>
        <input
          type="text"
          id="frase"
          placeholder="Escribe tu frase aquí..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="inputText"
        />

        <label htmlFor="author">AUTOR :</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="inputText"
        />

        <label htmlFor="image">SUBIR IMAGEN :</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImage}
          className="inputFile"
        />

        {image && (
          <div className="imagePreview">
            <img src={image} alt="Vista previa" className="image" />
          </div>
        )}

        <button type="submit" className="saveButton">
          Guardar
        </button>
      </form>

      {showErrorModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{error}</p>
            <div className="modal-buttons">
              <button onClick={closeErrorModal} className="delete-button">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Form;
