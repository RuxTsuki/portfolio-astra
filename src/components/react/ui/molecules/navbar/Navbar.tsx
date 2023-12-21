import { Button, Image } from "@nextui-org/react";
import { MenuIcon, CloseIcon } from "../../atoms/icons";
import { useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { basePath, itemsMenuIds } from "@components/utils/constant";
import { NavbarMobile } from "./NavbarMobile";
import { useScrollOnTop } from "./useScrollOnTop";
import ImageSvg from '@assets/svg/tsukiilogo48.svg';


const { about, home, skills, projects, contact } = itemsMenuIds;


export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const sticky = useScrollOnTop();

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
                        <a aria-label="link to home" href={"#homeSection"} className="w-[60px] h-[60px]">
                            <Image className="w-full" src={ImageSvg.src} alt="Logo de la marca de TsukiiYamero" />
                        </a>

                        <div className={`hidden md:flex`}>
                            <ul className="font-menu-d items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-center font-medium">
                                {
                                    itemsMenu.map((item, index) => (
                                        <li key={index} onClick={() => goToSection(item.id)}>
                                            <p className="text-[--title-color] text-[1.25rem] hover:text-[--main-color] cursor-pointer">
                                                {item.title}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

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


                    <NavbarMobile itemsMenu={itemsMenu} navbar={navbar} goToSection={goToSection} />


                </div>

            </nav>



        </div>
    )
}
