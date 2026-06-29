import { Monitor, Smartphone, Settings, Cloud, Database } from 'lucide-react';
import { useState } from 'react';

function Stacks({ data }: { data: { color: string; stacks: string[] } }) {
    const bgGradients: Record<string, string> = {
        emerald: "bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent border border-emerald-500/30",
        sky: "bg-gradient-to-br from-sky-500/10 via-transparent to-transparent border border-sky-500/30",
        rose: "bg-gradient-to-br from-rose-500/10 via-transparent to-transparent border border-rose-500/30",
        amber: "bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border border-amber-500/30",
        violet: "bg-gradient-to-br from-violet-500/10 via-transparent to-transparent border border-violet-500/30"
    };

    const borderHover: Record<string, string> = {
        emerald: "text-white text-sm font-semibold rounded-md border border-border-custom/40 w-40 h-9 flex items-center pl-3 bg-[#13141a]/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-500",
        sky: "text-white text-sm font-semibold rounded-md border border-border-custom/40 w-40 h-9 flex items-center pl-3 bg-[#13141a]/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-500",
        rose: "text-white text-sm font-semibold rounded-md border border-border-custom/40 w-40 h-9 flex items-center pl-3 bg-[#13141a]/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-rose-500",
        amber: "text-white text-sm font-semibold rounded-md border border-border-custom/40 w-40 h-9 flex items-center pl-3 bg-[#13141a]/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-amber-500",
        violet: "text-white text-sm font-semibold rounded-md border border-border-custom/40 w-40 h-9 flex items-center pl-3 bg-[#13141a]/40 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-violet-500"
    }

    const currentBg = bgGradients[data.color] || "";
    const currentBr = borderHover[data.color] || "";
    const style = `${currentBg} flex flex-wrap gap-4 rounded-xl p-6 w-full`;

    return (
        <div className={style}>
            {data.stacks.map((tech, index) => (
                <span
                    key={index}
                    className={currentBr}
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}

function TechSkills() {
    const [categories, setCategories] = useState({
        color: "emerald",
        stacks: ["React", "Angular", "typeScript", "JavaScript", "Tailwind CSS"]
    });

    const stacks = ["React", "Angular", "typeScript", "JavaScript", "Tailwind CSS", "React Native", "Expo", "Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "PHP", "MySQL", "MongoDB", "PL/SQL", "Docker", "Github Actions", "Sonar Cloud"];

    const choice = (ch: string) => {
        switch (ch) {
            case "Frontend":
                setCategories({
                    color: "emerald",
                    stacks: ["React", "Angular", "typeScript", "JavaScript", "Tailwind CSS"]
                });
                break;
            case "Mobile":
                setCategories({
                    color: "sky",
                    stacks: ["React Native", "Expo"]
                });
                break;
            case "Backend":
                setCategories({
                    color: "violet",
                    stacks: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "PHP"]
                });
                break;
            case "Dados":
                setCategories({
                    color: "rose",
                    stacks: ["MySQL", "MongoDB", "PL/SQL"]
                });
                break;
            case "Dev":
                setCategories({
                    color: "amber",
                    stacks: ["Docker", "Github Actions", "Sonar Cloud"]
                });
                break;
            default:
                setCategories({
                    color: "emerald",
                    stacks: ["React", "Angular", "typeScript", "JavaScript", "Tailwind CSS"]
                });
                break;
        }
    };

    return (
        <>
            <section className="w-full bg-background border-y border-muted-text/20 py-16 flex flex-col gap-y-10" id='tecnologias'>
                <div className="max-w-6xl w-full mx-auto px-6 flex flex-col gap-y-10">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <p className="text-accent text-xs font-medium uppercase">Principais Stacks Técnicas</p>
                        <h2 className="text-white text-4xl md:text-5xl font-bold">Tecnologias</h2>
                        <p className="text-muted-text text-sm leading-relaxed">
                            Ferramentas e linguagens que uso no dia a dia para construir produtos robustos, do protótipo ao deploy em produção.
                        </p>
                    </div>
                    <nav className="flex flex-wrap gap-4">
                        <button
                            onClick={() => choice("Frontend")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:cursor-pointer ${categories.stacks.includes("Tailwind CSS")
                                    ? "bg-[#00c896] text-black font-bold"
                                    : "border border-border-custom text-white bg-[#13141a]/40 hover:border-[#00c896] hover:text-[#00c896]"
                                }`}
                        >
                            <Monitor size={18} /> Frontend
                        </button>

                        <button
                            onClick={() => choice("Mobile")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:cursor-pointer ${categories.stacks.includes("Expo")
                                    ? "bg-[#0ea5e9] text-black font-bold"
                                    : "border border-border-custom text-white bg-[#13141a]/40 hover:border-[#0ea5e9] hover:text-[#0ea5e9]"
                                }`}
                        >
                            <Smartphone size={18} /> Mobile
                        </button>

                        <button
                            onClick={() => choice("Backend")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:cursor-pointer ${categories.stacks.includes("Java")
                                    ? "bg-[#8b5cf6] text-black font-bold"
                                    : "border border-border-custom text-white bg-[#13141a]/40 hover:border-[#8b5cf6] hover:text-[#8b5cf6]"
                                }`}
                        >
                            <Settings size={18} /> Backend
                        </button>

                        <button
                            onClick={() => choice("Dados")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:cursor-pointer ${categories.stacks.includes("MySQL")
                                    ? "bg-[#f43f5e] text-black font-bold"
                                    : "border border-border-custom text-white bg-[#13141a]/40 hover:border-[#f43f5e] hover:text-[#f43f5e]"
                                }`}
                        >
                            <Database size={18} /> Banco de Dados
                        </button>

                        <button
                            onClick={() => choice("Dev")}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:cursor-pointer ${categories.stacks.includes("Docker")
                                    ? "bg-[#f59e0b] text-black font-bold"
                                    : "border border-border-custom text-white bg-[#13141a]/40 hover:border-[#f59e0b] hover:text-[#f59e0b]"
                                }`}
                        >
                            <Cloud size={18} /> DevOps & Cloud
                        </button>
                    </nav>
                    <Stacks data={categories} />
                    <div className="flex flex-col gap-y-4 pt-4">
                        <p className="text-muted-text text-sm font-semibold">Todas as Tecnologias</p>
                        <div className="flex flex-wrap gap-2">
                            {stacks.map((name, index) => (
                                <span
                                    key={index}
                                    className="text-muted-text bg-[#13141a]/20 border border-border-custom/30 px-3 py-1 rounded-full text-xs hover:text-accent hover:border-accent"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default TechSkills;