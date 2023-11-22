import './Header.css';

export const Header = props => {
    return (
        <header id="welcome-section">
            <div className="forest" />
            <div className="silhouette" />
            <div className="moon" />
            <div className="container">
                <h1>
                    <span className="line">Creamos</span>
                    <span className="line">Código</span>
                </h1>
                <div className="buttons">
                    <a href="#projects">Nuestro Portafolio</a>
                    <a href="#contact" className="cta">
                        Contacto
                    </a>
                </div>
            </div>
        </header>
    );
};