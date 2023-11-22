import SocialLinks from '../SocialLinks';
import './Footer.css';

export const Footer = props => {
    return (
        <footer>
            <div className="wrapper">
                <h3>Gracias por Visitarnos</h3>
                <p>© {new Date().getFullYear()} ByteGenius.</p>
                <SocialLinks />
            </div>
        </footer>
    );
};