
export const Tool_Language_Card = ({ name, working, icon }) => {
    return (
        <div className="language-skills-container">
            <label className="language-skill-card-label">
                <input type="checkbox" className="language-skill-checkbox" />
                <div className="language-skill-card">
                    <div className="language-skill-icon-container">

                        <div className="language-skill-icon">
                            {icon}
                        </div>

                        <div className="language-status-indicator"></div>
                    </div>

                    <div className="language-skill-text">
                        <p className="language-skill-name">{name}</p>
                        <p className="language-skill-category">{working}</p>
                    </div>

                    <div className="language-skill-progress"></div>
                </div>
            </label>
        </div>
    );
};