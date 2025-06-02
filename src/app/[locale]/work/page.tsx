//components
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Work() {
  return (
    <div className="h-full bg-primary/80 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:flex-row gap-x-8">
          {/* text */}
          <div
            className="text-center flex flex-col lg:text-left mb-4
        "
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Work</span> .
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[500px] mx-auto lg:mx-0"
            >
              lorem ipsun dolor sit, amet consecteur adipisicing elit. A eveniet
              dignissimos distinctio tempore harum laudantium.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
