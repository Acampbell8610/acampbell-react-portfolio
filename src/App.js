import React,{useState}from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav'

function App() {
  const [contactSelected, setContactSelected] = useState(false)
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Projects I have completed',
    },
    { name: 'Resume', description: 'My Resume' },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
           <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          ></Nav>
          <main>
      <About/>
      </main>
    </div>
  );
}

export default App;
