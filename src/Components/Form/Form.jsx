import "./Form.css";
import { useState } from "react";

function Form({ addQuote }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

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

    document
      .getElementById("misfavoritas")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="añadir" className="FormSection">
      <h2 className="Formh2">Dale forma a tu inspiración</h2>
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
        {error && <p className="errorText">{error}</p>}

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
    </section>
  );
}

export default Form;
