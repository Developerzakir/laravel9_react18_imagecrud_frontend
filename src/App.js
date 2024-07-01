import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Header from './component/Header';
import Home from './component/Home';
import Addproduct from './component/Addproduct';
import Productlist from './component/Productlist';
import EditProduct from './component/EditProduct';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Router>
            <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/addproduct" element={<Addproduct/>}/>
              <Route exact path="/productlist" element={<Productlist/>}/> 
              <Route path="editproduct/:id/edit" element={<EditProduct />} />
            </Routes>
            <Footer/> 
        </Router>
    </div>
  );
}

export default App;
