import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Download, MoveDown, Check, X, ExternalLink, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foto from '../assets/me.png';

function Banner() {
    const API_BASE = "/api";
    const email = "gabriel.17.set.2005@gmail.com";

    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [toastType, setToastType] = useState<"success" | "error">("success");
    const [animate, setAnimate] = useState("");

    const [modal, setModal] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        emailInput: "",
        message: ""
    });

    const triggerToast = (message: string, type: "success" | "error" = "success") => {
        setToastMessage(message);
        setToastType(type);
        setAnimate("animate-fade-in-up");

        setTimeout(() => {
            setAnimate("animate-fade-in-bottom");
        }, 2000);

        setTimeout(() => {
            setToastMessage(null);
        }, 2500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const payload = {
            name: formData.name,
            email: formData.emailInput,
            subject: "Contato via Portfólio",
            message: formData.message
        };

        try {
            const response = await fetch(`${API_BASE}/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Erro inesperado no servidor.');
            }

            setFormData({ name: "", emailInput: "", message: "" });
            setModal(false);
            triggerToast("Mensagem enviada com sucesso!", "success");

        } catch (error: any) {
            triggerToast("Erro ao enviar a mensagem.", "error");
        } finally {
            setIsSending(false);
        }
    };

    const toggleModal = () => setModal(prev => !prev);

    useEffect(() => {
        if (modal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [modal]);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            triggerToast("E-mail copiado com sucesso!", "success");
        } catch (err) {
            triggerToast("Não foi possível copiar o e-mail.", "error");
        }
    };

    return (
        <>
            <section className="w-full min-h-screen bg-background flex flex-col md:flex-row items-center justify-center relative px-6 pt-24 pb-12 md:py-0 overflow-hidden" id='sobre'>
                <div className="max-w-6xl w-full mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="flex flex-col gap-y-4 max-w-xl"
                    >
                        <motion.p variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-accent text-xs font-medium uppercase">
                            OLÁ, ME CHAMO
                        </motion.p>

                        <motion.h1 variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-white text-5xl md:text-7xl font-bold tracking-tight">
                            Gabriel <span className="text-accent">Antonio</span>
                        </motion.h1>

                        <motion.p variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-muted-text text-base leading-relaxed">
                            Desenvolvedor Full-Stack focado em Backend e no ecossistema Java. Apaixonado por construir arquiteturas sólidas, eficientes e seguras, além de criar interfaces fluidas e integradas para entregar soluções completas de ponta a ponta.
                        </motion.p>

                        <motion.span variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex gap-4 mt-2">
                            <button onClick={toggleModal} className="bg-accent rounded-md text-center text-sm font-semibold text-black px-5 py-2.5 transition-all hover:opacity-90 hover:cursor-pointer">
                                Fale comigo
                            </button>
                            <a
                                href="/Gabriel Antonio dos Santos.pdf"
                                download="Gabriel Antonio dos Santos.pdf"
                                onClick={() => {
                                    fetch(`${API_BASE}/cv-download`, { method: "POST" }).catch(() => triggerToast("erro ao tentar baixar currículo", "error"));
                                }}
                                className="flex gap-2 px-5 py-2.5 rounded-md text-sm font-medium border border-border-custom text-white bg-[#13141a]/40 transition-all hover:text-accent hover:border-accent hover:cursor-pointer"
                            >
                                <Download size={18} />
                                Currículo
                            </a>
                        </motion.span>

                        <motion.span variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex gap-4 mt-2">
                            <a href="https://github.com/GabrielAdosS" target="_blank" rel="noreferrer" className="text-muted-text hover:text-accent transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-antonio-742869285/" target="_blank" rel="noreferrer" className="text-muted-text hover:text-accent transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <button onClick={handleCopyEmail} className="text-muted-text hover:text-accent transition-colors cursor-pointer">
                                <Mail size={20} />
                            </button>
                        </motion.span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex justify-center">
                        <img src={foto} alt="Perfil do Gabriel" className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-accent/30 object-cover object-top shadow-2xl" />
                    </motion.div>
                </div>

                <motion.span initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: [0, -12, 0] }} transition={{ opacity: { duration: 0.65, delay: 1.2 }, y: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.2 } }} className="bg-[#13141a]/40 border border-border-custom p-2 rounded-full absolute bottom-7 flex items-center justify-center hidden md:block">
                    <MoveDown size={24} className="text-white" />
                </motion.span>

                {toastMessage && (
                    <div className={`fixed bottom-6 right-6 z-70 flex items-center gap-2.5 bg-card border border-border-custom px-4 py-2.5 rounded-xl shadow-xl ${animate}`}>
                        <div className={`flex items-center justify-center p-1 rounded-lg ${toastType === "success" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
                            }`}>
                            {toastType === "success" ? (
                                <Check size={14} strokeWidth={3} />
                            ) : (
                                <AlertCircle size={14} strokeWidth={3} />
                            )}
                        </div>
                        <span className="text-white text-xs font-medium tracking-wide">
                            {toastMessage}
                        </span>
                    </div>
                )}

                <AnimatePresence>
                    {modal && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed inset-0 backdrop-blur-sm z-60 flex flex-col items-center justify-start sm:justify-center gap-4 px-4 py-8 overflow-y-auto bg-black/40'>
                            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.95 }} transition={{ type: "spring", duration: 0.4 }} className='w-full max-w-[90vw] sm:max-w-md bg-background border border-border-custom rounded-md p-5 flex flex-col justify-center gap-5'>
                                <p className='font-semibold text-white text-2xl text-center'>Me mande uma mensagem!</p>

                                <form onSubmit={handleFormSubmit} className='flex gap-4 flex-col'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-white font-bold'>Seu nome:</label>
                                        <input name="name" type="text" value={formData.name} onChange={handleInputChange} className='bg-card border border-border-custom rounded-md text-muted-text px-3 py-1.5 text-sm' placeholder='Digite aqui' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label className='text-white font-bold'>Seu e-mail:</label>
                                        <input name="emailInput" type="email" value={formData.emailInput} onChange={handleInputChange} className='bg-card border border-border-custom rounded-md text-muted-text px-3 py-1.5 text-sm' placeholder='exemplo@email.com' />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label className='text-white font-bold'>Mensagem:</label>
                                        <textarea name="message" placeholder='Sua mensagem aqui!' value={formData.message} onChange={handleInputChange} className='bg-card border border-border-custom rounded-md text-muted-text px-3 py-1.5 text-sm resize-none' rows={4}></textarea>
                                    </div>

                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isSending} className='bg-accent rounded-md text-black font-semibold p-2.5 cursor-pointer disabled:opacity-50 text-sm mt-1'>
                                        {isSending ? "Enviando..." : "Enviar mensagem"}
                                    </motion.button>

                                    <div>
                                        <ul className='flex flex-col gap-3'>
                                            <li>
                                                <a href="https://github.com/GabrielAdosS" target="_blank" rel="noreferrer" className="flex gap-2 justify-start items-center text-muted-text hover:text-accent text-sm break-all">
                                                    <FaGithub size={18} className='text-accent flex-shrink-0' />
                                                    <span>github</span> <ExternalLink size={14} className="flex-shrink-0" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/gabriel-antonio-742869285/" target="_blank" rel="noreferrer" className='flex gap-2 justify-start items-center text-muted-text hover:text-accent text-sm break-all'>
                                                    <FaLinkedin size={18} className='text-accent flex-shrink-0' />
                                                    <span>Linkedin</span> <ExternalLink size={14} className="flex-shrink-0" />
                                                </a>
                                            </li>
                                            <li>
                                                <button type="button" onClick={handleCopyEmail} className='flex gap-2 justify-start items-center text-muted-text hover:text-accent cursor-pointer text-xs sm:text-sm text-left break-all'>
                                                    <Mail size={18} className='text-accent flex-shrink-0' />
                                                    <span className="truncate">gabriel.17.set.2005@gmail.com</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                type="button"
                                className='cursor-pointer w-10 h-10 aspect-square rounded-full bg-background border border-border-custom flex justify-center items-center mb-auto sm:mb-0 flex-shrink-0'
                                onClick={toggleModal}
                            >
                                <X size={18} className='text-white' />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
}

export default Banner;