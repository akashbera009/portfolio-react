export const ToolTip_Mini_Card = ({ item, index }) => (

    <div className="tooltip-container" key={index}>

        <a className="tooltip" href={item.url} target='_blank'>
            <div className="tooltip-profile">
                <div className="tooltip-user">
                    <div className="tooltip-img">
                        <img
                            className='tooltip-img'
                            src={item.tool_tip_image}
                            alt=""
                        />
                    </div>

                    <div className="tooltip-details">
                        <div className="tooltip-name">{item.toolTip_name}</div>
                        <div className="tooltip-username">{item.username}</div>
                    </div>
                </div>

                <div className="tooltip-about">{item.meta}</div>
            </div>
        </a>

        <div className="tooltip-text">
            <a href={item.url} className="tooltip-icon">
                <div className="layer">
                    <span></span><span></span><span></span><span></span>
                    <span class="fab fa-discord">{item.deskTop_Icon}</span>
                </div>
                <div className="tooltip-text">{item.platform_name}</div>
            </a>
        </div>
    </div>
)