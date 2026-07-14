import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Check, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Footer() {
    const [showToast, setShowToast] = useState(false);
    const [animate, setAnimate] = useState("");
    const email = "gabriel.17.set.2005@gmail.com";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setShowToast(true);
            setAnimate("animate-fade-in-up")

            setTimeout(() => {
                setAnimate("animate-fade-in-bottom")
            }, 2000)

            setTimeout(() => {
                setShowToast(false);
            }, 2500);
        } catch (err) {
        }
    };
    return (
        <>
            <footer id='contato' className='w-full bg-card flex items-center justify-center flex-col py-6'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.07
                            }
                        }
                    }}
                    className="max-w-6xl mx-auto md:px-6 px-3 w-full flex justify-between flex-col md:flex-row gap-10"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 32 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className='flex flex-col gap-3'
                    >
                        <p className='text-white'><span className='text-accent'>{"<"}</span>Gabriel<span className='text-accent'>{"/>"}</span></p>
                        <p className='text-muted-text text-base leading-relaxed w-90'>Desenvolvedor Full-Stack com forte foco em Backend. Transformo ideias complexas em aplicações completas, unindo sistemas robustos e seguros em Java a interfaces modernas, ágeis e prontas para o mercado.</p>

                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 32 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className='flex flex-col gap-3'
                    >
                        <p className='text-white'>CONTATO</p>
                        <ul className='flex flex-col gap-3'>
                            <li><a href="https://www.linkedin.com/in/gabriel-antonio-742869285/" className='flex gap-2 justify-start items-center text-muted-text hover:text-accent'><FaLinkedin size={18} className='text-accent' />Linkedin</a></li>
                            <li>
                                <a href="https://github.com/GabrielAdosS" className='flex gap-2 justify-start items-center text-muted-text hover:text-accent'><FaGithub size={18} className='text-accent' />Github</a>
                            </li>
                            <li>
                                <button onClick={handleCopyEmail} className='flex gap-2 justify-start items-center text-muted-text hover:text-accent cursor-pointer'>
                                    <Mail size={18} className='text-accent' />
                                    <span>
                                        gabriel.17.set.2005@gmail.com
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 32 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                    >
                        <p className='text-white'>Navegação</p>
                        <ul>
                            <li><a href="#sobre" className='text-muted-text hover:text-accent'>sobre mim</a></li>
                            <li><a href="#tecnologias" className='text-muted-text hover:text-accent'>Tecnologias</a></li>
                            <li><a href="#projetos" className='text-muted-text hover:text-accent'>Projetos</a></li>
                            <li><a href="#contato" className='text-muted-text hover:text-accent'>contato</a></li>
                        </ul>
                    </motion.div>
                </motion.div>

                {showToast && (
                    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-card border border-border-custom px-4 py-2.5 rounded-xl shadow-xl ${animate}`}>
                        <div className="flex items-center justify-center p-1 bg-emerald-500/10 text-emerald-400 rounded-lg">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-white text-xs font-medium tracking-wide">
                            E-mail copiado com sucesso!
                        </span>
                    </div>
                )}
            </footer>

            <div className='w-full bg-card flex items-center justify-center flex-col py-2'>
                <p className='text-muted-text'>©2026 Todos os direitos reservados.</p>
            </div>
        </>
    )
}

export default Footer;