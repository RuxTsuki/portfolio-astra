import { itemsMenuIds } from "@components/utils/constant";
import { SectionWrapper } from "../../HOC";
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";



export const Projects = () => {

    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];

    return (
        <div className="pt-[30px] relative">
            <motion.div className="pb-[60px]">
                <div className="relative">
                    <p className={`section-sub-text relative left-[-12px]`}>Mis Trabajos</p>
                    <h2 className={`section-head-text`}>Proyectos 🪄</h2>
                </div>

                <div className="pt-[2.5rem]">
                    <Marquee pauseOnHover pauseOnClick>
                        <div>
                            <p className="text-black">HOLA</p>

                            <p className="text-black">me gus</p>

                            <p className="text-black">ta el pan</p>
                            <br />
                            <p className="text-black pl-2">o</p>
                            <br />
                            <p className="text-black">chan</p>
                        </div>
                    </Marquee>


                    <Marquee direction="right" pauseOnHover pauseOnClick>
                        <div className="pt-[2.5rem]">
                            <ul>
                                {
                                    list.map((item, index) => (
                                        <Skill item={item} key={index} />
                                    ))
                                }
                            </ul>
                        </div>
                    </Marquee>

                </div>


            </motion.div>


        </div>
    )
}

const Skill = (item: any) => {
    return (
        <>
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

                <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[140px]"
                            src={item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{item.title}</b>
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}

export const ProjectMotion = SectionWrapper(Projects, itemsMenuIds.skills);