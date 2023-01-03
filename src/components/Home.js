import { motion } from "framer-motion";
const Home = (props) => {
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
      Home
    </motion.div>
  );
};

export default Home;
