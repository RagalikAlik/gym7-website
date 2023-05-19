import { AddressMap } from "../elements/AddressMap";
function Home() {
    return (
        <>
            <div class="App">

            </div>
            <div class="video-fragment">
                <iframe
                    width="900"
                    height="500"
                    src="https://www.youtube.com/embed/TQkpWSpVaKQ?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameborder="0"
                    allowfullscreen></iframe>
            </div>

            <div id="pricing">
                <div>
                    <h2>Цены и абонементы</h2>
                    <div class="pricing-item">
                        <h3>Одноразовое посещение</h3>
                        <p class="price">$10</p>
                        <button class="buy-btn" onclick="buyPackage('Одноразовое посещение')">Купить</button>
                    </div>
                    <div class="pricing-item">
                        <h3>Месячный абонемент</h3>
                        <p class="price">$50</p>
                        <button class="buy-btn" onclick="buyPackage('Месячный абонемент')">Купить</button>
                    </div>
                    <div class="pricing-item">
                        <h3>3-месячный абонемент</h3>
                        <p class="price">$120</p>
                        <button class="buy-btn" onclick="buyPackage('3-месячный абонемент')">Купить</button>
                    </div>
                    <div class="pricing-item">
                        <h3>Годовой абонемент</h3>
                        <p class="price">$400</p>
                        <button class="buy-btn" onclick="buyPackage('Годовой абонемент')">Купить</button>
                    </div>
                    <div class="pricing-item">
                        <h3>Групповые тренировки (10 занятий)</h3>
                        <p class="price">$80</p>
                        <button class="buy-btn" onclick="buyPackage('Групповые тренировки')">Купить</button>
                    </div>
                </div>
            </div>

            <div>
                <div class="gym-description">
                    <h2>GYM7 – второй автономный круглосуточный тренажерный зал в Минске</h2>
                    <p class="gym-info">GYM7 – это автономный круглосуточный тренажерный зал, предлагающий всем желающим тренировки в удобном для них формате за минимальную стоимость. Наша цель – сделать спорт доступным для каждого.</p>
                    <p class="gym-info">Невысокие цены – результат правильных управленческих решений и отсутствия ненужных дополнительных услуг, а не экономии на посетителях – все установленное в зале оборудование профессионального уровня (Life Fitness, Technogym, Hummer Strength).</p>
                    <p class="gym-info">Наша философия – полная самостоятельность и независимость клиента. Покупка абонемента не потребует даже посещения зала – он приобретается через интернет, а в личном кабинете можно отслеживать оставшееся время и продлевать его.</p>
                    <p class="gym-info">Мы предлагаем больше, чем просто фитнес-клуб – мы предлагаем свободу тренировок без ограничений.</p>
                    <ul class="gym-features">
                        <li>Более 90 профессиональных тренажеров (новейшие «Life fitness, Hammer strength, Technogym»)</li>
                        <li>Фитнес клуб в Минске открыт круглосуточно</li>
                        <li>Биометрическая система обслуживания по фото</li>
                        <li>Бесплатная фильтрованная, кипяченая и охлажденная питьевая вода</li>
                        <li>Без ограничения посещений и времени</li>
                        <li>Продажа абонементов через интернет или терминалы, которые установлены в фитнес центре</li>
                        <li>Рядом бесплатный паркинг</li>
                    </ul>
                    <p class="gym-info">Подтягивайся в наш круглосуточный тренажерный зал GYM7 в Минске и займись своим телом и здоровьем – сейчас самое время начать!</p>
                </div>
            </div><AddressMap /></>)
};
export default Home;