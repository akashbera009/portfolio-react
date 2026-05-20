export const Technical_Domain_Card = ({ heading, starting, elements, ending, icon, item }) => {
    const data = item || { heading, starting, elements, ending, icon };
    return (<div className="skill-card">
        <div className="skill-icon-container">
            <p>{data.icon}</p>
        </div>
        <h6 className="skill-heading">{data.heading}</h6>
        <div className="skill-description">
            {data.starting}
            {data.elements && data.elements.map((element, index) => (
                <span key={index}>
                    {element.prefix}
                    <p style={{ fontWeight: '700', color: element.color, display: ' inline' }}>{element.name}</p>
                    {element.suffix}
                </span>
            ))}
            {data.ending}
        </div>
    </div>
    )
}