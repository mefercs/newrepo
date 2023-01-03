import { motion } from "framer-motion";
const Contact = (props) => {
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
      Contact
    </motion.div>
  )};

export default Contact;
