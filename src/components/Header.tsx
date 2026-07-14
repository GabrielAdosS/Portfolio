import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="w-full h-16 bg-background/90 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-muted-text/10 flex flex-col justify-center"
            >
                <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
                    <span>
                        <span className="text-accent font-bold">{"<"}</span>
                        <span className="text-white font-bold">Dev</span>
                        <span className="text-accent font-bold">{"/>"}</span>
                    </span>

                    <nav className="hidden md:block">
                        <ul className="flex gap-x-7">
                            <li className="text-muted-text hover:text-white transition-colors">
                                <a href="#sobre">Sobre</a>
                            </li>
                            <li className="text-muted-text hover:text-white transition-colors">
                                <a href="#tecnologias">Tecnologias</a>
                            </li>
                            <li className="text-muted-text hover:text-white transition-colors">
                                <a href="#projetos">Projetos</a>
                            </li>
                            <li className="text-muted-text hover:text-white transition-colors">
                                <a href="#contato">Contato</a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-muted-text hover:text-white transition-colors focus:outline-none z-50"
                        aria-label="Abrir menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                closed: {
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        duration: 0.25,
                                        ease: "easeInOut"
                                    }
                                },
                                open: {
                                    opacity: 1,
                                    height: "auto",
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }
                                }
                            }}
                            className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-muted-text/10 md:hidden overflow-hidden"
                        >
                            <nav className="px-6 py-6">
                                <ul className="flex flex-col gap-y-5">
                                    <li className="text-muted-text hover:text-white text-lg transition-colors">
                                        <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
                                    </li>
                                    <li className="text-muted-text hover:text-white text-lg transition-colors">
                                        <a href="#tecnologias" onClick={() => setIsOpen(false)}>Tecnologias</a>
                                    </li>
                                    <li className="text-muted-text hover:text-white text-lg transition-colors">
                                        <a href="#projetos" onClick={() => setIsOpen(false)}>Projetos</a>
                                    </li>
                                    <li className="text-muted-text hover:text-white text-lg transition-colors">
                                        <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
                                    </li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
}

export default Header;