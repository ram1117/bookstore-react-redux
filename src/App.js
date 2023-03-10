import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <Routes>
      <Route index element={<Navigate to="/books" replace />} />
      <Route path="/books" element={<Books className="books-container" />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
