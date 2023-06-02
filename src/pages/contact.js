import { AddressMap } from "../elements/AddressMap";
import { FeedbackForm } from "../elements/feedbackForm";
import Slideshow from "../elements/slideShow";
import '../style/App.css';
import Contact_slide1 from "../pictures/Contact_slide1.jpg"
import Contact_slide2 from "../pictures/Contact_slide2.jpg"
import Contact_slide3 from "../pictures/Contact_slide3.jpg"


const ContactPage = () =>{
    const images = [
        Contact_slide1,
        Contact_slide2,
        Contact_slide3
      ];

    return(
        <>
            <body class="contact-body">
                <div>
                    <h1 class="h1-title">Контакты</h1>
                    <h1>Местоположение Gym7</h1>
                    <h3>Ул. Колесникова 3, м. Каменная горка, Минск, +375(17)319-31-31, office@kbp.by</h3>
                    <p class="work-time">Режим работы: круглосуточно</p>
                </div>
            </body>
            <div className="slideShow-container">
                <Slideshow images={images}/>
            </div>
            <FeedbackForm></FeedbackForm>

            <AddressMap />
        </>
    );
}

export default ContactPage