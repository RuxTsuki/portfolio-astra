import { itemsMenuIds } from "@components/utils/constant";
import { SectionWrapper } from "../../HOC";

import ImgAbout from '/src/assets/img/imgAbout.webp';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <main className="container-about grid pt-[30px] relative">
            <div className="square-custom relative bg-[--secondary-color] w-[94%] md:max-w-[660px] lg:max-w-[930px] left-[-24px] p-[24px] pb-[48px] sm:p-[38px] sm:pb-[84px] md:pt-[40px] md:px-[44px] md:pb-[92px] lg:px-[54px]">
                <motion.div className="max-w-[486px] lg:max-w-[610px]">
                    <div className="relative">
                        <p className={`section-sub-text relative left-[-12px]`}>Introducción</p>
                        <h2 className={`section-head-text`}>Acerca de mi 🙌</h2>
                    </div>

                    <div className="pt-[1.25rem]">
                        <p className="section-text">
                            Soy un apasionado del desarrollo front-end y los videojuegos 🕹️, me encanta trabajar
                            en la creación de aplicaciones web modernas, que combinan funcionalidad y diseño de forma armoniosa.
                        </p>

                        <p className="section-text pt-[1.25rem]">
                            Para mí, cada proyecto representa un desafío emocionante y una oportunidad de aprendizaje
                            constante, ya que siempre busco estar al tanto de las últimas tendencias y tecnologías en el campo del desarrollo web.
                        </p>
                    </div>


                </motion.div>

                <div className="grid justify-end sm:absolute sm:right-[-48px] sm:top-[266px] md:right-[-92px] md:top-[268px] xl:right-[-140px]">
                    <div className="w-[309px] h-[235px] md:w-[360px] md:h-[308px] xl:w-[508px] xl:h-[386px] relative">
                        <img src={ImgAbout.src} alt="Diego Alexander Bello with a laptop coding" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export const AboutMotion = SectionWrapper({ Component: About, idName: itemsMenuIds.about });
