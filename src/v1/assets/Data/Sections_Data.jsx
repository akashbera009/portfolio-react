
import Skills from '../../screens/Skills/Skills';
import About from '../../screens/About/About';
import Projects from '../../screens/Projects/Projects';
import Experience from '../../screens/Experience/Experience';
import Contact from '../../screens/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Achievements from '../../screens/Achievements/Achievements';
import Hobbies from '../../screens/Hobbies/Hobbies';
import Education from '../../screens/Education/Education'

export const sections = [
    { id: "about", order: 1, isActive: true, component: About },
    { id: "education", order: 2, isActive: true, component: Education },
    { id: "skills", order: 3, isActive: true, component: Skills },
    { id: "projects", order: 4, isActive: true, component: Projects },
    { id: "experience", order: 5, isActive: true, component: Experience },
    { id: "achievements", order: 6, isActive: true, component: Achievements },
    { id: "hobbies", order: 7, isActive: false, component: Hobbies },
    { id: "contact", order: 8, isActive: true, component: Contact },
    { id: "footer", order: 9, isActive: false, component: Footer }
];