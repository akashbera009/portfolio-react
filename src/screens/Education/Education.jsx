import React, { useEffect, useRef, useState } from "react";
import "./education.css";
import {
  educationData,
  educationIcons,
} from "../../assets/Data/Education_Data";

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenSize();

    // Event listener for resizing
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // On mobile, close the popup when the user taps outside the timeline.
  useEffect(() => {
    if (activeId === null) return;
    const handleDocPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };
    document.addEventListener("mousedown", handleDocPointer);
    document.addEventListener("touchstart", handleDocPointer);
    return () => {
      document.removeEventListener("mousedown", handleDocPointer);
      document.removeEventListener("touchstart", handleDocPointer);
    };
  }, [activeId]);

  const getIconHandlers = (id) =>
    isMobile
      ? {
          onClick: (e) => {
            e.stopPropagation();
            setActiveId((cur) => (cur === id ? null : id));
          },
        }
      : {
          onMouseEnter: () => setActiveId(id),
          onMouseLeave: () => setActiveId(null),
        };

  const PopupCard = ({ item }) => (
    <div
      className={`education-popup ${activeId === item.type ? "is-open" : ""}`}
    >
      {item.image && (
        <div className="popup-image">
          <img src={item.image} alt={item.title} />
        </div>
      )}
      <div className="popup-body">
        <h3 className="popup-name">{item.title}</h3>
        {item.info && <p className="popup-info">{item.info}</p>}
        <p className="popup-year">{item.year}</p>
      </div>
      <span className="popup-tip" aria-hidden="true" />
    </div>
  );

  const DesktopVersion = () => (
    <div className="education-container dark-theme">
      {/* <h2>Education Journey</h2> */}
      <div className="timeline-wrapper">
        <svg
          width="100%"
          height="400"
          viewBox="0 0 800 400"
          className="timeline-svg"
        >
          {educationData.map((item, i) => (
            <g
              key={i}
              className="school-item"
              transform={item.position.desktop}
            >
              <foreignObject x="-40" y="-45" width="140" height="140">
                <div
                  className="glass-icon-wrapper"
                  {...getIconHandlers(item.type)}
                >
                  {educationIcons[item.type]}
                </div>
              </foreignObject>

              <text x="0" y="50" className="school-name">
                {item.title}
              </text>

              <text x="0" y="70" className="school-details">
                {item.year}
              </text>
              <foreignObject x="-50" y="100" width="200" height="30">
                <text x="0" y="90" className="badge">
                  {item.marks?.sgpa
                    ? `CGPA: ${(
                        item.marks.sgpa.reduce((a, b) => a + b, 0) /
                        item.marks.sgpa.length.toFixed(2)
                      ).toFixed(2)}`
                    : item.result}
                </text>
              </foreignObject>
            </g>
          ))}

          {/* Curved Arrow from School 1 to School 2 */}
          <path
            d="M140,100 C240,140 320,140 335,180"
            fill="none"
            className="arrow-path"
            markerUnits="strokeWidth"
            markerEnd="url(#arrowhead-60)"
          />

          {/* Curved Arrow from School 2 to School 3 */}
          <path
            d="M445,175 C520,110 610,125 652,92"
            fill="none"
            className="arrow-path"
            markerEnd="url(#arrowhead-default)"
          />

          {/* Arrowhead definitions */}
          <defs>
            <marker
              id="arrowhead-60"
              markerWidth="10"
              markerHeight="7"
              refX="4.8"
              refY="4.5"
              orient="50"
            >
              <path d="M0,0 Q10,3.5 0,7" fill="#bb86fc" className="arrowhead" />
            </marker>

            <marker
              id="arrowhead-default"
              markerWidth="10"
              markerHeight="7"
              refX="5"
              refY="3.5"
              orient="-35"
            >
              <path d="M0,0 Q10,3.5 0,7" fill="#bb86fc" className="arrowhead" />
            </marker>
          </defs>

          {/* Popup pass — drawn last so cards always layer above icons & arrows */}
          {educationData.map((item, i) => (
            <g
              key={`popup-${i}`}
              className="popup-layer"
              transform={item.position.desktop}
            >
              <foreignObject
                x="-110"
                y="-230"
                width="220"
                height="180"
                className="popup-foreign"
              >
                <PopupCard item={item} />
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );

  const MobileVersion = () => (
    <div className="timeline-wrapper-mobile">
      <svg
        width="100%"
        height="550"
        viewBox="0 0 400 550"
        className="mobile-timeline"
      >
        {educationData.map((item, i) => (
          <g key={i} className="school-item" transform={item.position.mobile}>
            <foreignObject x="-40" y="-45" width="120" height="120">
              <div className="outher-glass-effect">
                <div
                  className="glass-icon-wrapper"
                  {...getIconHandlers(item.type)}
                >
                  {educationIcons[item.type]}
                </div>
              </div>
            </foreignObject>

            {item?.mobile_title.map((title, index) => (
              <text x="0" y="50" className="school-name">
                <tspan x="0" dy={index * 20}>
                  {title}
                </tspan>
              </text>
            ))}

            <text x="0" y="90" className="school-name batch-year">
              {item.year}
            </text>

            <foreignObject x="-65" y="100" width="200" height="30">
              <text x="0" y="90" className="badge">
                {item.marks?.sgpa
                  ? `CGPA: ${(
                      item.marks.sgpa.reduce((a, b) => a + b, 0) /
                      item.marks.sgpa.length.toFixed(2)
                    ).toFixed(2)}`
                  : item.result}
              </text>
            </foreignObject>
          </g>
        ))}
        {/* More Dramatically Curved Arrows */}
        {/* Top-left → Middle-right */}
        <path
          d="M100,100 C130,60 220,140 260,155"
          className="mobile-arrow"
          markerEnd="url(#mobile-arrowhead)"
        />

        {/* Middle-right → Bottom-left */}

        <path
          d="M300,330 C320,350 250,380 130,400"
          className="mobile-arrow"
          markerEnd="url(#mobile-arrowhead)"
        />

        <defs>
          <marker
            id="mobile-arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="5"
            refY="3.5"
            orient="auto"
          >
            {/* <polygon points="0 0, 10 3.5, 0 7" className="arrowhead" /> */}
            <path d="M0,0 Q10,3.5 0,7" fill="#bb86fc" className="arrowhead" />
          </marker>
        </defs>

        {/* Popup pass for mobile */}
        {educationData.map((item, i) => (
          <g
            key={`popup-${i}`}
            className="popup-layer"
            transform={item.position.mobile}
          >
            <foreignObject
              x="-90"
              y="-210"
              width="180"
              height="170"
              className="popup-foreign"
            >
              <PopupCard item={item} />
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );

  return (
    <div className="education-container dark-theme" ref={rootRef}>
      <h2>Education Journey</h2>
      <div className="timeline-wrapper">
        {isMobile ? <MobileVersion /> : <DesktopVersion />}
      </div>
    </div>
  );
};
export default Education;
