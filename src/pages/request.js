import '../style/App.css';
import { FeedbackForm } from "../elements/feedbackForm";

const Request = () => {
    return(
        <>
        <body>
            <h3 class="request-text">Здесь вы можете купить абонемент, отправив заявку на наш электронный адрес или по телефону +375(44)541-09-78</h3>
            <FeedbackForm></FeedbackForm>
        </body>

        </>
    );
}

export default Request;
