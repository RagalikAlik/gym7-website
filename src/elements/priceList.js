
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export function PriceList (){
    return(
        <>
    <div id="pricing-list">
        <div class="pricing-item">
            <div className="pricing-item-content">
                <h3>Первое занятие</h3>
                <p class="price">0 руб.</p>
                <button class="buy-btn"><Link to="/request">Купить</Link></button>
            </div>
        </div>
        <div class="pricing-item">
            <div className="pricing-item-content">
                <h3>Одноразовое посещение</h3>
                <p class="price">10 руб.</p>
                <button class="buy-btn" ><Link to="/request">Купить</Link></button>
            </div>
        </div>
        <div class="pricing-item">
            <div className="pricing-item-content">
                <h3>Месячный абонемент</h3>
                <p class="price">60 руб.</p>
                <button class="buy-btn"><Link to="/request">Купить</Link></button>
            </div>
        </div>
        <div class="pricing-item"><div className="pricing-item-content">
            <h3>3-месячный абонемент</h3>
            <p class="price">140 руб.</p>
            <button class="buy-btn" ><Link to="/request">Купить</Link></button>
        </div>
        </div>
        <div class="pricing-item">
            <div className="pricing-item-content">
                <h3>Годовой абонемент</h3>
                <p class="price">400 руб.</p>
                <button class="buy-btn" ><Link to="/request">Купить</Link></button>
            </div>
        </div>
        <div class="pricing-item">
            <div className="pricing-item-content">
                <h3>Групповые тренировки (10 занятий)</h3>
                <p class="price">80 руб.</p>
                <button class="buy-btn" ><Link to="/request">Купить</Link></button>
            </div>
        </div>
    </div>
        </>
    )
}

export default PriceList