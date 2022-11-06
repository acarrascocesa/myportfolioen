import "./intro.css";
import vector1 from "./vector1.png";
import vector2 from "./vector2.png";
import develo from "../../assets/codificacion.png";
import me from "../../assets/me.png";
import glasses from "../../assets/glasses.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from "framer-motion"

const Intro = () => {

  const transition = {duration: 2, type: "spring"}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I'm</span>
          <span>Angel Carrasco</span>
          <span>
            Frontend Developer with high skills in web designing and
            development, building great Apps and more...
          </span>
        </div>
        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/acarrascocesa" target="_blank">
            <i class="i-icon fa-brands fa-github"></i>
          </a>

          <a href="http://www.linkedin.com/in/angel-carrasco24" target="_blank">
            <i class="i-icon fa-brands fa-linkedin"></i>
          </a>

          <a href="https://www.instagram.com/josecesa25/" target="_blank">
            <i class="i-icon fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img className="me" src={me} alt="" />
        <motion.img 
        className="floating-div"
        initial={{left: "-36%"}}
        whileInView={{left: "-24%"}}
        transition={transition}
        src={glasses} alt="" />
        <motion.div 
        className="floating-div "
        initial={{top: "-4", left: "74%"}}
        whileInView={{left: "68%"}}
        transition={transition}
        style={{ top: "-4%", left: "70%" }}>
          <FloatingDiv image={develo} txt1="React" txt2="Developer" />
        </motion.div>
        
        <div className="blur" style={{background: "rgb(35, 148, 186)"}}></div>
        <div className="blur" style={{background: "#c1f5ff", top: "17rem", width: "21rem", height: "11rem", left: "-9rem"}}></div>
      </div>
    </div>
  );
};

export default Intro;
