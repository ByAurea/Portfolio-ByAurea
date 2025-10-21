import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import AppRoutes from "./Routes/AppRoutes";
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
          <AppRoutes location={location} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;