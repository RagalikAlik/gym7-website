import '../style/App.css';
import {PriceList} from "../elements/priceList"

const PricePage = () => {
    return(
        <>
        <body>
        <div>
            <h1 class="h1-title">Цены на услуги</h1>
            <h3>Купить абонемент можно отправив заявку на почту office@kbp.by</h3>
            <p class="price-warning">Оплата происходит на входе в зал</p>
            <p class="price-warning">Абонемент активируется при первом посещении</p>
        </div>
        <div className="pricing">
                <PriceList></PriceList>
            </div>
        </body>

        </>
    );
}

export default PricePage;
