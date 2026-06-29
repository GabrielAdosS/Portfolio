function Header() {
    return (
        <>
            <header className="w-full h-16 bg-background/90 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-muted-text/10 flex items-center">
                <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
                    <span>
                        <span className="text-accent font-bold">{"<"}</span>
                        <span className="text-white font-bold">Dev</span>
                        <span className="text-accent font-bold">{"/>"}</span>
                    </span>
                    <nav>
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

                </div>
            </header>
        </>
    );
}

export default Header;