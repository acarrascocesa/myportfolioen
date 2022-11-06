import "./skills.css"
import {motion} from "framer-motion"

const Skills = () => {
  const transition = {duration: 1, type: "spring"}
  return (
    <div className='skills' id="Skills">
        <div className='awesome'>
            <span>My Awesome</span>
            <span> Skills</span>
            <span>I can build great Apps with...</span>
        </div>
        <motion.div 
        whileInView={{left: "25rem"}}
        initial={{left: "25%"}}
        transition={transition}
        className='cards'>
        <i class="html fa-brands fa-html5"></i>
        <i class="css fa-brands fa-css3"></i>
        <i class="javascript fa-brands fa-js"></i>
        <i class="react fa-brands fa-react"></i>
        <i class="python fa-brands fa-python"></i>
        </motion.div>
    </div>
  )
}

export default Skills