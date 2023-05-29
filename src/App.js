//import './style/App.css';
import { HeaderTemplate } from './elements/headerTemplate';
import { FooterTemplate } from './elements/footerTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricePage from './pages/PricePage';
import Home from './pages/home';
import ContactPage from './pages/contact';
import Trainers from './pages/trainers';
import Specials from './pages/specials';

function App() {
  return (
    <>
    
      <Router>
      <HeaderTemplate />
        
        <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/pricepage' element={<PricePage />} />
          <Route exact path='/contactpage' element={<ContactPage />} />
          <Route exact path='/trainers' element={<Trainers />} />
          <Route exact path='/specials' element={<Specials />} />
        </Routes>
        <FooterTemplate />
      </Router>
      
    </>
  );
}

export default App;