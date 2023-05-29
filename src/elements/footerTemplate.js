import { Link } from 'react-router-dom'
import footerLogos from '../pictures/footer-logos-1.png'
import '../style/App.css'


export function FooterTemplate(){
    return(
        <footer>
          <div>
              <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/trainers'>Тренеры</Link></li>
                <li><a href="#">Цены</a></li>
                <li><Link to='/contactpage'>Контакты</Link></li>
              </ul>
            <p>&copy; 2023 Sports Gym. Все права защищены.</p>
          </div>
          <div class="footer-info">
            <ul>
              <li>Время работы: круглосуточно</li>
              <li>Ул. Колесникова 3, м. Каменная горка</li>
              <li>тел. +375(17)319-31-31</li>
              <li>email: office@kbp.by</li>
            </ul>
          </div>
          <div class="social-networks">
            <ul>
              <td>Соцсети:</td>
              <li><a href='https://www.instagram.com/kbpminsk/'>instagram</a></li>
              <li><a href='https://vk.com/kbpkbp'>Вконтакте</a></li>
              <li><a href='https://twitter.com/KBiPminsk'>twitter</a></li>
              <li><a href='https://www.facebook.com/kbp.by/'>facebook</a></li>
            </ul>
          </div>
          <div class="images">
            <img src={footerLogos} alt="footerLogos" />
          </div>
      </footer>
    )
}