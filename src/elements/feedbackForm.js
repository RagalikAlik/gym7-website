import '../style/App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export function FeedbackForm(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_od5pbsr', 'template_7za9pun', form.current, 'jjcEyY9hah4U2aWJZ')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <>
            <div class="feedback-form">
                <h2>Обратная связь</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label for="name">Имя:</label>
                    <input type="text" id="name" name="name" required/>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required/>
                    <label for="message">Сообщение:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </>
    );
    
}

export const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iuiqyaq', 'template_7za9pun', form.current, 'jjcEyY9hah4U2aWJZ')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
          });
      };
};
