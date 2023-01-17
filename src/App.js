import './App.css';
import Area from './pages/area';
import Categories from './pages/categories';
import Home from './pages/home';
import Ingredients from './pages/ingredients';
import Random from './pages/random';
import Dish from './pages/dish';
import Header from './components/header';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  document.title = "What To Eat";

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/area' element={<Area />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/ingredients' element={<Ingredients />} />
        <Route path='/random' element={<Random />} />
        <Route path='/dish/:id' element={<Dish />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
