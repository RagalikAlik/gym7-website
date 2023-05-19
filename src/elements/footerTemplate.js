import footerLogos from '../pictures/footer-logos-1.png'
import '../style/App.css'


export function FooterTemplate(){
    return(
        <footer>
          <div>
              <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Расписание</a></li>
                <li><a href="#">Цены</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            <p>&copy; 2023 Sports Gym. Все права защищены.</p>
          </div>
          <div class="images">
            <img src={footerLogos} alt="footerLogos" />
          </div>
      </footer>
    )
}