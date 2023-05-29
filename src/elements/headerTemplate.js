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
            <nav class="header">
                <div class="nav-items">
                    <h1><Link to='/'>amogus</Link></h1>
                    <div class="nav-buttons">
                        <div class="dropdown">
                            <Link to='/specials' class="dropbtn" >Акции</Link>
                        </div>
                        {/* <div class="dropdown">
                            <button class="dropbtn">Акции</button>
                            <div class="dropdown-content">
                                <a href="#">Акции</a>
                                <a href="#">абонемент с тренером - 100 руб.</a>
                            </div>
                        </div> */}
                        <div class="dropdown">
                            <Link to='/pricepage' class="dropbtn" >Стоимость</Link>
                        </div>
                        <div class="dropdown">
                            <Link to='/trainers' class="dropbtn">Тренеры</Link>
                        </div>
                        <div class="dropdown">
                            <button type="button" class="dropbtn">Оплата</button>
                        </div>
                        <div class="dropdown">
                            <Link to='/contactpage' class="dropbtn">Контакты</Link>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}