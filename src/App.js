import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
      {
          id: 1,
          checked: true,
          item: "Rice"
      },
      {
          id: 2,
          checked: false,
          item: "IceCream"
      },
      {
          id: 3,
          checked: false,
          item: "Ghee"
      }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

  return (
    <div className="App">
      <Header title="Groceries"/>
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;