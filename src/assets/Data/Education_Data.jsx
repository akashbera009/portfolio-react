export const educationData = [
    {
        title: "Kismat Dirghagram High School",
        mobile_title: ["Kismat Dirghagram", "High School"],
        year: "2014-2020",
        result: "Marks : 93.2%",
        type: "school",
        position: { desktop: "translate(100, 100)", mobile: "translate(70, 80)" }
    },
    {
        title: "Kharar Sri Aurobindo High School",
        mobile_title: ["Kharar Sri Aurobindo", "High School"],
        year: "2020-2022",
        result: "Marks : 91.2%",
        type: "high_school",
        position: { desktop: "translate(400, 150)", mobile: "translate(315, 200)" }
    },
    {
        title: "University of Engineering & Management, Jaipur",
        mobile_title: ["University of Engineering ", "& Management, Jaipur"],
        year: "2022-2026",
        result: "CGPA :",
        type: "college",
        position: { desktop: "translate(700, 100)", mobile: "translate(80, 375)" },
        marks:{
            "sgpa":[8.29 , 7.95 , 8.93 , 9.29, 9.52, 9.37, 9.50]
        }
    }
]

const SchoolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"> <g fill="none" stroke=" #665af0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M14 22v-4a2 2 0 1 0-4 0v4" /> <path d="m18 10l3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10m12-5v17M4 6l7.106-3.553a2 2 0 0 1 1.788 0L20 6M6 5v17" /> <circle cx="12" cy="9" r="2" /> </g> </svg>
)
const HighSchoolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"> <path fill=" #665af0" d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1m-7 8v-4h-4v4H7V4h10v14z" /> <path fill="#4493f8" d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z" /> </svg>
)
const CollegeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15"> <path fill=" #665af0" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3z" /> </svg>
)

export const educationIcons = {
    school: <SchoolIcon />,
    high_school: <HighSchoolIcon />,
    college: <CollegeIcon />
}