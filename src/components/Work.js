import { motion } from "framer-motion";
const Work = (props) => {
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
      Work
    </motion.div>
  )};

export default Work;
