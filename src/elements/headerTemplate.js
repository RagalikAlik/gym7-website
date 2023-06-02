import '../style/App.css';
import { PricePage } from '../pages/PricePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const options = [
    {
        value: 'акции',
        label: 'Акции'
    },
    {
        value: 'абонемент',
        label: 'абонемент'
    }
]

export function HeaderTemplate() {
    return (
      <>
        <nav className="header">
          <div className="nav-items">
            <h1><Link to="/">amogus</Link></h1>
            <div className="nav-buttons">
              <div className="dropdown">
                <Link to="/specials" className="dropbtn">Акции</Link>
              </div>
              <div className="dropdown">
                <Link to="/pricepage" className="dropbtn">Стоимость</Link>
              </div>
              <div className="dropdown">
                <Link to="/trainers" className="dropbtn">Тренеры</Link>
              </div>
              <div className="dropdown">
                <button type="button" className="dropbtn">Оплата</button>
              </div>
              <div className="dropdown">
                <Link to="/contactpage" className="dropbtn">Контакты</Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }