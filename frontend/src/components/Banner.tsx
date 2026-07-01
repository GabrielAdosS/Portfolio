import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Download, MoveDown, Check, X, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

function Banner() {
    const [showToast, setShowToast] = useState(false);
    const [modal, setModal] = useState(false);
    const [animate, setAnimate] = useState("");
    const email = "gabriel.17.set.2005@gmail.com";

    const toggleModal = () => {
        setModal(prev => !prev);
    };

    useEffect(() => {
        if (modal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [modal]);

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
            console.error("Erro ao copiar o e-mail: ", err);
        }
    }

    return (
        <>
            <section className="w-full h-screen bg-background flex items-center justify-center relative" id='sobre'>
                <div className="max-w-6xl w-full mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col gap-y-4 max-w-xl">
                        <p className="text-accent text-xs font-medium uppercase">OLÁ, ME CHAMO</p>
                        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
                            Gabriel <span className="text-accent">Antonio</span>
                        </h1>
                        <p className="text-muted-text text-base leading-relaxed">
                            Desenvolvedor Full-Stack focado em Backend e no ecossistema Java. Apaixonado por construir arquiteturas sólidas, eficientes e seguras, além de criar interfaces fluidas e integradas para entregar soluções completas de ponta a ponta.
                        </p>
                        <span className="flex gap-4 mt-2">
                            <button onClick={toggleModal} className="bg-accent rounded-md text-center text-sm font-semibold text-black px-5 py-2.5 transition-all hover:opacity-90 hover:cursor-pointer">
                                Fale comigo
                            </button>
                            <button className="flex gap-2 px-5 py-2.5 rounded-md text-sm font-medium border border-border-custom text-white bg-[#13141a]/40 transition-all hover:text-accent hover:border-accent hover:cursor-pointer">
                                <Download size={18} />
                                Currículo
                            </button>
                        </span>
                        <span className="flex gap-4 mt-2">
                            <a href="https://github.com/GabrielAdosS" target="_blank" rel="noreferrer" className="text-muted-text hover:text-accent transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-antonio-742869285/" target="_blank" rel="noreferrer" className="text-muted-text hover:text-accent transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <button onClick={handleCopyEmail} className="text-muted-text hover:text-accent transition-colors cursor-pointer">
                                <Mail size={20} />
                            </button>
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="src/assets/hero.png"
                            alt="Perfil do Gabriel"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-accent/30 object-cover shadow-2xl"
                        />
                    </div>

                </div>
                <span className="bg-[#13141a]/40 border border-border-custom p-2 rounded-full absolute bottom-7 animate-bounce flex items-center justify-center">
                    <MoveDown size={24} className="text-white" />
                </span>
                {showToast && (
                    <div className={`fixed bottom-6 right-6 z-70 flex items-center gap-2.5 bg-card border border-border-custom px-4 py-2.5 rounded-xl shadow-xl ${animate}`}>
                        <div className="flex items-center justify-center p-1 bg-emerald-500/10 text-emerald-400 rounded-lg">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-white text-xs font-medium tracking-wide">
                            E-mail copiado com sucesso!
                        </span>
                    </div>
                )}
                {modal && (
                    <div className='w-full h-[100vh] fixed backdrop-blur-sm z-60 flex justify-center items-center flex-col gap-4'>
                        <div className='min-w-md bg-background border border-border-custom rounded-md p-5 flex flex-col justify-center gap-5'>
                            <p className='font-semibold text-white text-2xl text-center'>Me mande uma mensagem!</p>
                            <form action="" className='flex gap-4 flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-white text-bold'>Seu nome:</label>
                                    <input type="text" className='bg-card border border-border-custom rounded-md text-muted-text px-1 py-1.5' placeholder='Digite aqui' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-white text-bold'>Seu e-mail:</label>
                                    <input type="email" className='bg-card border border-border-custom rounded-md text-muted-text px-1 py-1.5' placeholder='exemplo@email.com' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-white text-bold'>Mensagem:</label>
                                    <textarea name="" id="" placeholder='Sua mensagem aqui!' className='bg-card border border-border-custom rounded-md text-muted-text px-1 py-1.5 resize-none' rows={5}>
                                    </textarea>
                                </div>
                                <button className='bg-accent rounded-md text-black font-semibold p-2 cursor-pointer'>Enviar mensagem</button>
                                <div>
                                    <ul className='flex flex-col gap-3'>
                                        <li>
                                            <a href="https://github.com/GabrielAdosS" target="_blank" rel="noreferrer" className="flex gap-2 justify-start items-center text-muted-text hover:text-accent">
                                                <FaGithub size={18} className='text-accent' />
                                                github
                                                <ExternalLink size={18} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/gabriel-antonio-742869285/" className='flex gap-2 justify-start items-center text-muted-text hover:text-accent'>
                                                <FaLinkedin size={18} className='text-accent' />
                                                Linkedin
                                                <ExternalLink size={18} />
                                            </a>
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
                                </div>
                            </form>
                        </div>
                        <button className='cursor-pointer w-10 h-10 rounded-full bg-card border border-border-custom flex justify-center items-center self-center' onClick={toggleModal}>
                            <X size={18} className='text-white' />
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}

export default Banner;