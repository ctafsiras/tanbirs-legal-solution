import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Global/Footer';
import Header from './components/Global/Header';
import NotFound from './components/Global/NotFound';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/checkout' element={<Checkout></Checkout>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
