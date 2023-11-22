import SocialLinks from '../SocialLinks';
import './Contact.css';

export const Contact = props => {
    return (
        <section id="contact">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="heading">
                        <p className="title">
                            ¿Cómo <br />
                            contactarnos?
                        </p>
                        <p className="separator" />
                        <p className="subtitle">
                            Por favor, enviarnos un mensaje a nuestro {''}
                            <span className="mail">
                                WhatsApp
                            </span>
                            :
                        </p>
                    </div>
                    <SocialLinks />
                </div>
                <a
                    id="profile-link"
                    href="https://api.whatsapp.com/send/?phone=50256244220&text=Hola+%22Byte+Genius%22%2C+me+gustar%C3%ADa+hablarles+de+un+proyecto:+&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Link to the author's WhatsApp"
                >
                    +502 5624 4220{' '}
                    <i className="fab fa-whatsapp" />
                </a>
                <br />
                <a
                    id="profile-link"
                    href="https://api.whatsapp.com/send/?phone=50259404873&text=Hola+%22Byte+Genius%22%2C+me+gustar%C3%ADa+hablarles+de+un+proyecto:+&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Link to the author's WhatsApp"
                >
                    +502 5940 4873{' '}
                    <i className="fab fa-whatsapp" />
                </a>
                <br />
                <a
                    id="profile-link"
                    href="https://api.whatsapp.com/send/?phone=50259404873&text=Hola+%22Byte+Genius%22%2C+me+gustar%C3%ADa+hablarles+de+un+proyecto:+&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Link to the author's WhatsApp"
                >
                    +502 3673 0429{' '}
                    <i className="fab fa-whatsapp" />
                </a>
            </div>
        </section>
    );
};