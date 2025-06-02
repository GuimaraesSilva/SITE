"use client"; // Adicione a diretiva use client também na página

// components
import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Services() {
  return (
    <div className="h-full bg-primary/80 py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[50vw] flex-col lg:text-left mb-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">services</span> .
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
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
