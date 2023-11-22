import './About.css';

export const About = props => {
    return (
        <section id="about">
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>¿Quienes somos?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc full">
                        <h4 className="subtitle">Somos ByteGenius</h4>
                        <p>
                            Somos desarrolladores web de Quetzaltenango, Guatemala.
                        </p>
                        <p>
                            Realmente disfrutamos resolviendo problemas y haciendo las cosas bonitas y fáciles de usar. No podemos dejar de aprender cosas nuevas; mientras más, mejor.
                        </p>
                    </div>
                    <div className="title">
                        <h3>¿Qué hacemos?</h3>
                        <p className="separator" />
                    </div>
                    <div className="desc">
                        <h4 className="subtitle">Somos Programadores</h4>
                        <p>
                            Para el front-end solemos trabajar con Javascript, ya sea de forma independiente o incluyendo frameworks populares como ReactJS y VueJS. También hago la web bonita usando CSS, Bootstrap o TailwindCSS.
                        </p>
                        <p>
                            Para el back-end también trabajo con Javascript (NodeJS, Express, MongoDB, etc). Pero, por supuesto, siempre que el proyecto requiere PHP, también uso PHP (Wordpress, Laravel, etc).
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};