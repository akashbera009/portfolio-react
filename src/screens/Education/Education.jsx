import React, { useEffect, useState } from "react";
import "./education.css";
import {
  educationData,
  educationIcons,
} from "../../assets/Data/Education_Data";

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

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
                <div className="glass-icon-wrapper">
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
                <div className="glass-icon-wrapper">
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
      </svg>
    </div>
  );

  return (
    <div className="education-container dark-theme">
      <h2>Education Journey</h2>
      <div className="timeline-wrapper">
        {isMobile ? <MobileVersion /> : <DesktopVersion />}
      </div>
    </div>
  );
};
export default Education;
