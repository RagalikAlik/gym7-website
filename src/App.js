//import './style/App.css';
import { HeaderTemplate } from './elements/headerTemplate';
import { FooterTemplate } from './elements/footerTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricePage from './pages/PricePage';
import Home from './pages/home';
import ContactPage from './pages/contact';

function App() {
  return (
    <>
      <Router>
        <HeaderTemplate />
        <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/pricepage' element={<PricePage />} />
          <Route exact path='/contactpage' element={<ContactPage />} />
        </Routes>
        <FooterTemplate />
      </Router>
    </>
  );
}

export default App;