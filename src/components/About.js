import { motion } from "framer-motion";
const About = (props) => {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      animate={{
        width: "100%",
      }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 1 },
      }}
      className="container"
    >
      About
    </motion.div>
  );
};

export default About;
