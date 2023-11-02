import { Button } from "@nextui-org/react";
import { MenuIcon, CloseIcon } from "../../atoms/icons";
import { useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { basePath, itemsMenuIds } from "@components/utils/constant";
import { MagicCard } from "react-magic-motion";

const { about, home, skills, projects, contact } = itemsMenuIds;

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);

    // on render, set listener
    useEffect(() => {

        if (window.scrollY >= 80)
            setSticky(true);

        const isSticky = () => {
            /* Method that will fix header after a specific scrollable */
            const scrollTop = window.scrollY;
            const stickyClass = scrollTop >= 100;
            setSticky(stickyClass);
        };
        window.addEventListener("scroll", isSticky);
        return () => window.removeEventListener("scroll", isSticky);
    }, []);

    const goToSection = (id: string) => {
        setNavbar(false);

        window.location.href = (`${basePath}/#${id}`);
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView();
        }
    }

    const itemsMenu = [
        {
            title: "Inicio",
            id: home
        },
        {
            title: "Sobre mi",
            id: about
        },
        {
            title: "Técnologías",
            id: skills
        },
        {
            title: "Proyectos",
            id: projects
        },
        {
            title: "Contacto",
            id: contact
        }
    ];

    return (
        <div className="relative">
            <nav className={`${sticky ? 'nav-menu ' : ''}w-full fixed z-[15]`}>
                <div className="relative z-20">
                    <div className="container mx-auto relative z-[21] flex justify-between items-center py-3 px-3">
                        <a className="w-[60px] h-[60px]">
                            <img className="w-full" src="" alt="Img not found" />
                        </a>

                        <MagicCard isCardExpanded={true}>
                            <div className={`hidden md:flex`}>
                                <ul className="font-menu-d items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                                    {
                                        itemsMenu.map((item, index) => (
                                            <li key={index} onClick={() => goToSection(item.id)}>
                                                <p className="text-[--title-color] text-[1.25rem] cursor-pointer">
                                                    {item.title}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </MagicCard>

                        <div className="md:hidden" >
                            <Button onClick={() => setNavbar(!navbar)} className="outline-none p-2" isIconOnly size="sm" variant="flat">
                                {
                                    navbar
                                        ? <CloseIcon className="general-icon-color" />
                                        : <MenuIcon className="general-icon-color" />
                                }
                            </Button>
                        </div>
                    </div>

                    <MagicCard isCardExpanded={navbar}>
                        <div className={`${navbar ? "grid" : "hidden"} md:hidden  h-screen animated fixed z-10 top-0 bottom-0 left-0 right-0`}>
                            <div className={`grid items-center bg-[--bg-menu-white] w-full`}>
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                                    {
                                        itemsMenu.map((item, index) => (
                                            <li key={index} onClick={() => goToSection(item.id)}>
                                                <p className="text-[--title-color] text-[1.25rem] cursor-pointer font-[500]">
                                                    {item.title}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </MagicCard>



                </div>

            </nav>



        </div>
    )
}
