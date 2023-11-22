const SocialLinks = props => {
    return (
        <div className="social">
            <a
                href="https://github.com/doclaag"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                {' '}
                <i className="fab fa-github" />
            </a>
            <a
                id="profile-link"
                href="https://github.com/dani9873"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                {' '}
                <i className="fab fa-github" />
            </a>
            <a
                id="profile-link"
                href="https://github.com/FranciscoJavi90"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                {' '}
                <i className="fab fa-github" />
            </a>
        </div>
    );
};

export default SocialLinks;