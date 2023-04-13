import './App.css';
import { Navbar } from './components/Navbar';
import { Categories } from './components/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginAndSignup } from './components/LoginAndSignup';
import { GetCategories } from './components/GetCategories';
import { Products } from './components/Products';
import { Getproducts } from './components/Getproducts';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Navbar />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/loginAndSignup' element={<LoginAndSignup />}></Route>
          <Route path='/getCategories' element={<GetCategories />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/getProducts' element={<Getproducts />}></Route>


        </Routes>
      </Router>

    </>
  );
}

export default App;
