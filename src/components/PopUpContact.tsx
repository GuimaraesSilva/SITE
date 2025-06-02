import { motion } from "framer-motion";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function PopupContact({ isVisible, message, onClose }) {
  if (!isVisible) return null; // Não renderiza nada se o pop-up não estiver visível

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white/10 p-8 rounded-lg border border-white/35 shadow-lg text-center relative backdrop-blur-sm w-[400px]">
        <button
          className="absolute top-2 right-4 text-xl text-white/60 hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex justify-center mb-4">
          <DotLottieReact
            src="https://lottie.host/2f78269c-ca35-4b2e-a71b-aee3abe96bbd/zoEWNA5QWf.lottie"
            loop
            autoplay
            style={{ opacity: 0.4 }}
          />
        </div>
        <h3 className="text-accent text-lg font-bold mb-4">
          Mensagem enviada com sucesso!
        </h3>
        <p>
          Obrigado por entrar em contacto. Recebemos a sua mensagem e iremos
          responder o mais breve possível.
        </p>
        <p className="text-lg font-bold mb-4">Agradecemos pelo seu contato!</p>
      </div>
    </motion.div>
  );
}
