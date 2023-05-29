import '../style/App.css';
import Promo_image1 from "../pictures/promo_image1.jpg"
import Promo_image2 from "../pictures/promo_image2.jpg"
import Promo_image3 from "../pictures/promo_image3.jpg"
import Promo_image4 from "../pictures/promo_image4.jpg"
import Promo_image5 from "../pictures/promo_image5.jpg"
import Promo_image6 from "../pictures/promo_image6.jpg"

export function SpecialsPage(){
    return(
        <>
            <div className='container'>
                <h1 class="h1-title">Акции</h1>
                <div class="promo-container">
                        <div class="promotion-card">
                            <img src={Promo_image1} alt="Promotion Image" class="promotion-image"/>
                            <h3 class="promotion-title">Скидка 35%</h3>
                            <p class="promotion-description">Приведи друга и получи скидку 35% на месячный абонемент</p>
                            <button class="promotion-button">Узнать подробности</button>
                        </div>
                        <div class="promotion-card">
                            <img src={Promo_image2} alt="Promotion Image" class="promotion-image"/>
                            <h3 class="promotion-title">Бесплатное занятие</h3>
                            <p class="promotion-description">Получите бесплатное занятие на выбор при покупке абонемента на 3 месяца.</p>
                            <button class="promotion-button">Узнать подробности</button>
                        </div>
                        <div class="promotion-card">
                            <img src={Promo_image3} alt="Promotion Image" class="promotion-image"/>
                            <h3 class="promotion-title">Утренняя тренировка</h3>
                            <p class="promotion-description">Получите скидку 30% на все утренние тренировки, проводимые до 10:00 утра.</p>
                            <button class="promotion-button">Узнать подробности</button>
                        </div>                  
                </div>
                <div class="promo-container">
                    
                    <div class="promotion-card">
                                <img src={Promo_image4} alt="Promotion Image" class="promotion-image"/>
                                <h3 class="promotion-title">Партнерские скидки</h3>
                                <p class="promotion-description">При предъявлении членской карты нашего спортзала получите скидку 10% на покупку абонемента</p>
                                <button class="promotion-button">Узнать подробности</button>
                        </div> 
                    <div class="promotion-card">
                                <img src={Promo_image5} alt="Promotion Image" class="promotion-image"/>
                                <h3 class="promotion-title">Скидки пенсионерам</h3>
                                <p class="promotion-description">При предъявлении пенсионного удостоверения получите скидку 25%</p>
                                <button class="promotion-button">Узнать подробности</button>
                    </div>
                    <div class="promotion-card">
                            <img src={Promo_image6} alt="Promotion Image" class="promotion-image"/>
                            <h3 class="promotion-title">1% = 2 отжимания</h3>
                            <p class="promotion-description">Отжимания / 2 = скидка на покупку 3-х месячного абонемента в нашем спортзале</p>
                            <button class="promotion-button">Узнать подробности</button>
                    </div>  
                </div> 
                <div className='promo-container'>
                <p class="gym-info">Наша команда идет в ногу со временем и адаптируется под сверхскоростной режим современной жизни вместе в вами! Мы всегда рады помочь нашим посетителям изменить себя в лучшую сторону! А чтобы поддержать вашу мотивацию на должном уровне, мы создаем для вас уникальные специальные предложения и акции!</p>
                </div>
            </div>
        </>
    )

}

export default SpecialsPage