import CV from '../app/Resources/CV.pdf';
import { Document } from 'react-pdf';
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillFilePdf,
    AiFillMail,
    AiFillSetting,
  } from "react-icons/ai";
const Sidebar = () => {
 return (<div className="fixed top-0 left-0 h-screen w-16 flex flex-col ">
    
    <a href="https://www.linkedin.com/in/hisham-haque-794062258/"> <SidebarIcon icon = {<AiFillLinkedin size="38"/>} text="LinkedIn"/> </a>
    <a href="https://github.com/HishamHXS"><SidebarIcon icon = {<AiFillGithub size="38"/>} text="Github"/></a>
    <a href="mailto:hishamhaque11@gmail.com"><SidebarIcon icon = {<AiFillMail size="38"/>} text="Email"/></a>
    <a className='bottom-0' href=""><SidebarIcon icon = {<AiFillSetting size="38"/>} text="Settings"/></a>
    {/* <a href= {CV} target="blank"><SidebarIcon icon = {<AiFillFilePdf size="38"/>} text="Cv"/></a> */}
 </div>
 
);
};
const SidebarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
  

export default Sidebar;