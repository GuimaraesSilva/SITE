"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import PopUpContact from "@/components/PopUpContact"; // Importa o componente Popup

export default function Contact() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão de submissão

    const formData = { name, email, message };

    console.log("Dados enviados:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Resposta da API:", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro da API:", errorData);
        throw new Error(
          errorData.error || "Ocorreu um erro ao enviar a mensagem."
        );
      }

      setIsPopupVisible(true); // Mostra o pop-up
      setErrorMessage(""); // Reseta erros anteriores
      setName("");
      setEmail("");
      setMessage("");

      // Esconde o pop-up após 3 segundos
      setTimeout(() => setIsPopupVisible(false), 3000);
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar a mensagem.";
      console.error("Erro ao enviar a mensagem:", errorMsg);
      setErrorMessage(errorMsg); // Exibe uma mensagem de erro
    }
  };

  return (
    <div className="h-full bg-primary/80">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect</span>.
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input bg-white/40 border border-white/80"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="input bg-white/40 border border-white/80"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <textarea
              placeholder="Message"
              className="textarea bg-white/40 border border-white/80 rounded-lg scrollbar:w-3 scrollbar-thumb:rounded-lg scrollbar-thumb:bg-yellow-600/70"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-lg bg-white/50 border border-white/80 max-w-[200px] 
              px-8 transition-all duration-300 flex items-center justify-center 
              overflow-hidden hover:border-accent hover:bg-accent/80 group"
            >
              <span
                className="text-lg group-hover:translate-x-[-120%] group-hover:opacity-0 
                transition-all duration-200"
              >
                Let's talk
              </span>
              <FaPaperPlane
                className="translate-x-[-12%] opacity-0 
                group-hover:translate-y-0 group-hover:opacity-90 transition-all 
                duration-300 absolute text-white text-3xl"
              />
            </button>
          </motion.form>
          {errorMessage && (
            <p className="text-red-500 mt-4">Ocorreu um erro: {errorMessage}</p>
          )}
          <PopUpContact
            isVisible={isPopupVisible}
            message="Mensagem enviada com sucesso!"
            onClose={() => setIsPopupVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}
