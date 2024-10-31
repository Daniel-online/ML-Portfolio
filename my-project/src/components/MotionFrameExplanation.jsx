import { motion } from "framer-motion";
const MotionFrameExplanation = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };
    
  return (
    <div 
      >
            <motion.line className="stroke-1 stroke-green-600 hover:stroke-lime-600"
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
    </div>
  )
}

export default MotionFrameExplanation
