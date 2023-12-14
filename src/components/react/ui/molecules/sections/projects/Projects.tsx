import { itemsMenuIds } from "@components/utils/constant";
import { SectionWrapper } from "../../HOC";
import { motion } from 'framer-motion';
import { Button, Card, CardFooter, Image, Tooltip } from "@nextui-org/react";
import ImageNiftyweb from '@assets/img/imageNiftyweb.webp';
import ImageNiftytab from '@assets/img/imageNifttytab.webp';
import Aphoridte from '@assets/img/aphrodite.webp';
import { GithubSvg } from "@components/react/ui/atoms";

interface itemList {
    item: {
        title: string;
        img: string;
        price: string;
        details: string;
    }
}
const Projects = () => {

    const list = [
        {
            title: "Aphrodite",
            img: Aphoridte.src,
            price: "$5.50",
            details: "App para agenda de citas para cortes de cabello y gestion del negocio."
        },
        {
            title: "Nifty Web",
            img: ImageNiftyweb.src,
            price: "$3.00",
            details: "App promocional de la extension Nifty Tab."
        },
        {
            title: "Nifty Tab",
            img: ImageNiftytab.src,
            price: "$10.00",
            details: "Extension para chrome que permite organizar tabs y mejorar el rendimiento al no tenerlos abiertos."
        }
    ];

    return (
        <div className="pt-[30px] relative">
            <motion.div className="pb-[60px]">
                <div className="relative">
                    <p className={`section-sub-text relative left-[-12px]`}>Mis Trabajos</p>
                    <h2 className={`section-head-text`}>Proyectos 🪄</h2>
                </div>

                <div className="pt-[2.5rem]">

                    <ul className="pt-[1.5rem] flex gap-[70px]">
                        {
                            list.map((item, index) => (
                                <Project key={index} item={item} />
                            ))
                        }
                    </ul>


                </div>


            </motion.div>


        </div>
    )
}


const Project = (data: itemList) => {
    const { item } = data;

    return (
        <li className="py-[30px]">


            <div className="relative">


                <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[300px] shadow-lg">
                    <Image
                        removeWrapper
                        alt={`Screenshot about project ${item.title}`}
                        className="z-0 w-full h-full object-cover"
                        src={item.img}
                    />

                    <CardFooter className="absolute py-[4px] px-[10px] bg-white/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <p className="text-[--title-color] font-[700] text-[1.25rem]">{item.title}</p>

                        <Tooltip content="Ver Proyecto" className="semi-title">
                            <Button aria-label="link to github project" isIconOnly onClick={() => console.log('to github')}>
                                <GithubSvg className="text-[1.5rem] fill-[#000]" />
                            </Button>
                        </Tooltip>
                    </CardFooter>
                </Card>
            </div>
        </li>
    )
}

export const ProjectMotion = SectionWrapper({ Component: Projects, idName: itemsMenuIds.projects });
