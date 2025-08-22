import './App.css';
import { useState} from 'react';
import Header from './Components/Header/Header';
import Quotes from "./Components/Quotes/Quotes";
import AddQuote from './Components/ButtonAdd/ButtonAdd';
import Form from './Components/Form/Form';
import FavoritePhrases from './Components/FavoritePhrases/FavoritePhrases';

function App() {
  const [quotes, setQuotes] = useState([]);

const addQuote = (newQuote) => {
  setQuotes([{ ...newQuote, editing: false }, ...quotes]);
};

  const toggleEdit = (index) => {
    const updatedQuotes = quotes.map((quote, i) =>
      i === index ? { ...quote, editing: !quote.editing } : quote
    );
    setQuotes(updatedQuotes);
  };

  const handleEdit = (index, field, value) => {
    const updatedQuotes = [...quotes];
    updatedQuotes[index][field] = value;
    setQuotes(updatedQuotes);
  };

  const saveEdit = (index) => {
    const updatedQuotes = [...quotes];
    if (!updatedQuotes[index].author.trim()) {
      updatedQuotes[index].author = 'Anónimo';
    }
    updatedQuotes[index].editing = false;
    setQuotes(updatedQuotes);
  };

  const handleDelete = (index) => {
    const updatedQuotes = quotes.filter((_, i) => i !== index);
    setQuotes(updatedQuotes);
  };

  return (
    <>
      <Header />
      <Quotes />
      <AddQuote />
      <Form addQuote={addQuote} />
      <FavoritePhrases 
        quotes={quotes} 
        onEdit={toggleEdit} 
        onDelete={handleDelete} 
        onChange={handleEdit} 
        onSave={saveEdit} 
      />
    </>
  );
}

export default App;

