import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Quotes from "./Components/Quotes/Quotes";
import AddQuote from "./Components/ButtonAdd/ButtonAdd";
import Form from "./Components/Form/Form";
import FavoritePhrases from "./Components/FavoritePhrases/FavoritePhrases";

function App() {
  const [quotes, setQuotes] = useState([]);
  const generateId = () => "_" + Math.random().toString(36).substr(2, 9);

  const addQuote = (newQuote) => {
    setQuotes((prevQuotes) => [
      { ...newQuote, id: generateId(), editing: false },
      ...prevQuotes,
    ]);
  };

  const onEdit = (id) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, editing: true } : quote
      )
    );
  };

  const onChange = (id, field, value) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, [field]: value } : quote
      )
    );
  };

  const onSave = (id) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id
          ? {
            ...quote,
            editing: false,
            author: quote.author.trim() || "Anónimo",
          }
          : quote
      )
    );
  };

  const onDelete = (id) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  return (
    <>
      <Header />
      <Quotes />
      <AddQuote />
      <Form addQuote={addQuote} />
      <FavoritePhrases
        quotes={quotes}
        onEdit={onEdit}
        onDelete={onDelete}
        onChange={onChange}
        onSave={onSave}
      />
    </>
  );
}

export default App;
