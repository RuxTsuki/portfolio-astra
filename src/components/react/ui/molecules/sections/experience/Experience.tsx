
import { motion } from 'framer-motion';
import { SectionWrapper } from '../../HOC';
import { itemsMenuIds } from '@components/utils/constant';
import { VerticalTimeLine, VerticalTimelineElement } from '@components/react/ui/atoms/timeline';
import { Image } from '@nextui-org/react';
import ImageSalomon from '@assets/img/salomon.jpg';
import Java from '@assets/img/java.jpg';

const Experience = () => {

    const experiences = [
        {
            title: "Frontend Developer",
            company_name: "Salomon Software",
            icon: ImageSalomon.src,
            iconBg: "#383E56",
            date: "Jul 2019 - May 2022",
            points: [
                "Participación en el diseño de nuevas funcionalidades.",
                "Estructuración de componentes reutilizables en angular.",
                "Consumo de Apis en Rest y Graphql",
                "Identificar y dar solución a los problemas asegurando la calidad del código y las buenas prácticas.",
            ],
        },
        {
            title: "Junior Java Developer",
            company_name: "RednaJava",
            icon: Java.src,
            iconBg: "#000",
            date: "Mar 2016 - Nov 2016",
            points: [
                "Desarrollo de features para apps en java.",
                "Creación de apps para escritorio.",
                "Participación en competiciones de programación",
            ],
        }
    ];

    return (
        <div className="pt-[30px] relative">
            <motion.div className="pb-[60px]">
                <div className="relative">
                    <p className={`section-sub-text relative left-[-12px]`}>Donde eh trabajado?</p>
                    <h2 className={`section-head-text`}>Experiencia 💼</h2>
                </div>

                <VerticalTimeLine>
                    {
                        experiences.map((experience, index) => (
                            <ExperienceItem key={index} index={index} experience={experience}></ExperienceItem>
                        ))
                    }
                </VerticalTimeLine>


            </motion.div>


        </div>
    )
}

const ExperienceItem = ({ experience, index }: { experience: any, index: number }) => {
    return (
        <>
            <VerticalTimelineElement index={index} contentStyle={{ background: '#1d1836', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #232631' }}
                date={experience.date}
                iconStyle={{ background: experience.icon }}
                icon={
                    <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden'>
                        <Image
                            src={experience.icon}
                            alt={experience.company_name}
                            className="object-contain" />
                    </div>
                }
            >
                <div>
                    <h3 className='text-white text-[24px] font-bold'>
                        {experience.title}
                    </h3>

                    <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                        {
                            experience.company_name
                        }
                    </p>
                </div>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {
                        experience.points.map((point: number, index: number) => (
                            <li
                                key={`experience-point-${index}`}
                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                            >
                                {
                                    point
                                }
                            </li>
                        ))
                    }
                </ul>

            </VerticalTimelineElement>
        </>
    )
}


export const ExperienceMotion = SectionWrapper(Experience, itemsMenuIds.experience);