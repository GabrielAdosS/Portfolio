import { useEffect, useState } from "react";
import { SquareArrowOutUpRight, Globe } from "lucide-react"
import { motion } from 'framer-motion';

interface cleanProject {
    name: string;
    topics: string[];
    pushed_at: string;
    description: string;
    html_url: string;
    homepage: string
}

interface StackProps {
    name: string;
}

function Stack({ name }: StackProps) {
    const stylesMap: { [key: string]: string } = {
        "frontend": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
        "mobile": "text-sky-400 bg-sky-400/10 border-sky-400/30",
        "backend": "text-violet-400 bg-violet-400/10 border-violet-400/30",
        "devops": "text-amber-400 bg-amber-400/10 border-amber-400/30",
        "banco-de-dados": "text-rose-400 bg-rose-400/10 border-rose-400/30"
    };

    const currentStyle = stylesMap[name.toLowerCase()] || "text-rose-400 bg-rose-400/10 border-rose-400/30";

    return (
        <span className={`rounded px-2 py-0.5 text-xs font-medium border capitalize ${currentStyle}`}>
            {name.replace(/-/g, ' ')}
        </span>
    );
}

function Card({ data: cleanProject }: { data: cleanProject }) {
    const year = cleanProject.pushed_at ? cleanProject.pushed_at.substring(0, 4) : "";

    const stackKeyWords = [
        "mobile",
        "backend",
        "devops",
        "frontend",
        "banco-de-dados"
    ]

    const stackList = cleanProject.topics
        .filter(repo => stackKeyWords.includes(repo.toLowerCase()))
        .sort((a, b) => stackKeyWords.indexOf(a.toLowerCase()) - stackKeyWords.indexOf(b.toLowerCase()));

    const firstStack: { [key: string]: string } = {
        "frontend": "border-l-4 border-l-emerald-400",
        "mobile": "border-l-4 border-l-sky-400",
        "backend": "border-l-4 border-l-violet-400",
        "devops": "border-l-4 border-l-amber-400",
        "banco-de-dados": "border-l-4 border-l-rose-400"
    };

    const styleBorder = stackList[0] ? firstStack[stackList[0].toLowerCase()] : "";
    const topicsClean = cleanProject.topics.filter(repo => !stackKeyWords.includes(repo) && repo !== "freelance");

    return (
        <>
            <div className={`relative overflow-hidden bg-card rounded-xl border border-border-custom ${styleBorder} w-120 p-6 flex flex-col gap-2 h-[18rem] justify-between`}>
                <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col gap-1.5 flex-1">
                            <div className="flex flex-wrap gap-1.5">
                                {stackList.map((name, index) => (
                                    <Stack key={index} name={name} />
                                ))}
                            </div>
                            <span className="text-muted-text text-xs font-mono pt-0.5">{year}</span>
                        </div>
                        {cleanProject.topics.includes("freelance") ? (
                            <div className="flex gap-2">
                                <a href={cleanProject.homepage} target="_blank" rel="noreferrer" className="text-muted-text hover:text-white transition-colors pt-1 shrink-0">
                                    <Globe size={15} />
                                </a>
                                <a href={cleanProject.html_url} target="_blank" rel="noreferrer" className="text-muted-text hover:text-white transition-colors pt-1 shrink-0">
                                    <SquareArrowOutUpRight size={15} />
                                </a>
                            </div>
                        ) : (
                            <a href={cleanProject.html_url} target="_blank" rel="noreferrer" className="text-muted-text hover:text-white transition-colors pt-1 shrink-0">
                                <SquareArrowOutUpRight size={15} />
                            </a>
                        )}
                    </div>
                    <p className="text-white text-lg font-bold tracking-wide capitalize">
                        {cleanProject.name.replace(/-/g, ' ')}
                    </p>
                    <p className="text-xs text-muted-text leading-relaxed line-clamp-auto">
                        {cleanProject.description || "Sem descrição informada no repositório."}
                    </p>
                </div>
                <span className="flex flex-wrap gap-1.5 pt-2 mt-auto">
                    {topicsClean.map((topic, index) => (
                        <span key={index} className="text-[10px] px-2 py-0.5 bg-[#1c1d24] text-muted-text/80 rounded text-center border border-border-custom/30">
                            {topic}
                        </span>
                    ))}
                </span>
            </div>
        </>
    );
}

function Projects() {
    const [projects, setProjects] = useState<cleanProject[]>([]);
    const [projectsFreelance, setProjectsFreelance] = useState<cleanProject[]>([]);

    const blackList = [
        "qualidade_software",
        "desafio-workshop-apple",
        "GabrielAdosS",
        "Portfolio",
        "LojaDeSurf",
        "sistema-de-biblioteca"
    ]

    useEffect(() => {
        fetch('https://api.github.com/users/GabrielAdosS/repos')
            .then((response) => response.json())
            .then((data: cleanProject[]) => {
                const projectsFilter = data.filter(repo => !blackList.includes(repo.name));

                const freelance = projectsFilter.filter(repo => repo.topics.includes("freelance"));
                const projectsFilterFreelance = projectsFilter.filter(repo => !repo.topics.includes("freelance"));

                console.log(freelance)

                const projectsOrbder = projectsFilterFreelance.sort((a, b) => {
                    const yearA = a.pushed_at ? a.pushed_at.substring(0, 4) : "";
                    const yearB = b.pushed_at ? b.pushed_at.substring(0, 4) : "";
                    return yearB.localeCompare(yearA);
                });

                setProjectsFreelance(freelance);
                setProjects(projectsOrbder);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
            });
    }, []);

    useEffect
    return (
       <>
    <section id="projetos" className="w-full bg-background border-b border-muted-text/20 py-16 flex">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
                <motion.p 
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-accent text-xs font-medium uppercase"
                >
                    Portfólio acadêmico & pessoal
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white text-4xl md:text-5xl font-bold"
                >
                    Projetos Próprios
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-muted-text text-sm leading-relaxed"
                >
                    Uma seleção de sistemas, aplicações e APIs desenvolvidos para consolidar conceitos de engenharia de software, design de código e boas práticas de arquitetura. Cada repositório reflete uma etapa da minha evolução técnica na construção de soluções eficientes, escaláveis e integradas de ponta a ponta.
                </motion.p>
            </div>
            
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="flex flex-wrap gap-5 justify-center"
            >
                {projects.map((pro, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 32 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                    >
                        <Card data={pro} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>

    <section className="w-full bg-background border-b border-muted-text/20 py-16 flex">
        <div className="max-w-6xl w-full mx-auto px-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
                <motion.p 
                    initial={{ opacity: 0, x: -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-accent text-xs font-medium uppercase"
                >
                    Trabalhos comerciais
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-white text-4xl md:text-5xl font-bold"
                >
                    Projetos de Clientes
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-muted-text text-sm leading-relaxed"
                >
                    Soluções entregues para empresas e empreendedores, do MVP ao sistema em produção — foco em prazo, qualidade e resultado.
                </motion.p>
            </div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="flex flex-wrap gap-5 justify-center"
            >
                {projectsFreelance.map((pro, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 32 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                        }}
                    >
                        <Card data={pro} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
</>
    )
}

export default Projects;