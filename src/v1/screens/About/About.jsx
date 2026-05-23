import React, { useContext, useState, useEffect } from 'react'
import './about.css'
import { ThemeContext } from '../../assets/ThemeContext';
import { about_section_introduction, gmailInfo, socialLinks } from '../../../shared/assets/Data/About_Section_Data';


function About() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  const DesktopVersion = ({ isDarkMode }) => (
    <div className='about-main' >
      <div className="grid"></div>

      <div class="about-container">
        <div class="left-side">
          <div className="hi-there">
            {about_section_introduction?.hi}
          </div>
          <div className="intro-name-desk">
            <div className="name-desk">I'm </div>
            {about_section_introduction?.name_image ?
              <img className='intro-img-desk' height={'40px'} src={about_section_introduction?.name_image} alt={about_section_introduction?.name} />
              :
              <div className="big_name">
                {about_section_introduction?.name}
              </div>
            }
          </div>

          <div className="intro-desk">
            {about_section_introduction?.subHeader}
          </div>
          <div className="descrip-desk">
            {about_section_introduction?.description}
          </div>

          <div className="button-container">

            {socialLinks
              .filter(item => item?.isActive)
              .sort((a, b) => a.order - b.order)
              .map((item, index) => (
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
              ))}

            <a href={`mailto:${gmailInfo.gmail}`} target="_blank" rel="noopener noreferrer">
              <button className="gmail-Btn about-blob2">
                <span class="gmail-svgContainer"> {gmailInfo.Icon}</span>
                <span class="gmail-BG"></span>
              </button>
            </a>
          </div>

        </div>
        <div class="right-side">
          <img src={about_section_introduction.big_image} alt={about_section_introduction?.name} className="profile-image" loading='eager' />
        </div>
      </div>

    </div>
  )

  const MobileVersion = ({ isDarkMode }) => {

    const [animateGreeting, setAnimateGreeting] = useState(false);
    const [showIntroName, setShowIntroName] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setAnimateGreeting(true);
      }, 300); // Delay to allow image or layout to load a bit
      return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowIntroName(true);
      }, 500); // delay to make it look polished after greeting
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="profile-container mobile-grid">
        <div className="greeting">Hi there</div>

        <div className="profile-image-wrapper">
          <img
            src="https://i.ibb.co/9YQFc2M/Picsart-24-12-28-14-15-11-867.png"
            alt="Akash Bera"
            className="profile-image"
          />
        </div>


        <div className="intro-name">
          <h1 className="name">I'm </h1>
          <img
            className="intro-img"
            height="40px"
            src="https://i.ibb.co/jmT4TwM/Akash-Bera-6-8-2025.png"
            alt="Akash Bera"
          />
        </div>



        <p className="intro">
          Full Stack Developer & Problem Solver
        </p>
        <p className="desc">
          Specializing in building responsive web applications with modern technologies
        </p>

        <div className="mobile-about-btn-grp">
          {socialLinks
            .filter(item => item?.isActive && item?.show_mobile)
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="mobile-about-button">
                  <div class="mobile-about-blob1"></div>
                  <div class="mobile-about-inner">
                    {item.mobile_Icon}
                    <p>{item.platform_name}</p>
                  </div>
                </button>
              </a>
            ))}


          <a href={`mailto:${gmailInfo.gmail}`} target="_blank" rel="noopener noreferrer">
            <button class="gmail-Btn mobile-about-blob1 ">
              <span class="gmail-svgContainer ">
                {gmailInfo?.mobile_Icon}
              </span>
              <span class="gmail-BG"></span>
            </button></a>

        </div>


        <div className="mobile-about-btn-grp1">
          <a
            href="https://drive.google.com/file/d/1EZizpa3drJaEfgDvpqUNJt_oJ49KowZI/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="Download-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M9 9l1 0" />
                <path d="M9 13l6 0" />
                <path d="M9 17l6 0" />
              </svg>
              View Resume
            </button>
          </a>
        </div>
      </div>
    );
  };



  return (
    <div className="about-main">
      {isMobile ? (
        <MobileVersion isDarkMode={isDarkMode} />
      ) : (
        <DesktopVersion isDarkMode={isDarkMode} />
      )}
    </div>
  );

}

export default About