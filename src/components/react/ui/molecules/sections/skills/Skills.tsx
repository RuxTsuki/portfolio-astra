import { itemsMenuIds } from "@components/utils/constant";
import { SectionWrapper } from "../../HOC";
import { motion } from 'framer-motion';
import { CommonCard } from "@components/react/ui/atoms/cards";
import { AngularSvg, CssSvg, GithubSvg, GraphqlSvg, HtmlSvg, JavascriptSvg, ReactSvg, TestingTubeSvg, TypescriptSvg } from "@components/react/ui/atoms/icons";

const Skills = () => {


    const techSkills = [
        {
            title: "Angular",
            subtitle: 'Intermedio',
            icon: AngularSvg,
            lvl: 2,
        },
        {
            title: "React",
            subtitle: 'Intermedio',
            icon: ReactSvg,
            lvl: 3,
        }, {
            title: "Html5",
            subtitle: 'Avanzado',
            icon: HtmlSvg,
            lvl: 3,
        }, {
            title: "Css3",
            subtitle: 'Intermedio',
            icon: CssSvg,
            lvl: 2,
        },
        {
            title: "Javascript",
            subtitle: 'Intermedio',
            icon: JavascriptSvg,
            lvl: 2,
        },
        {
            title: "Typescript",
            subtitle: 'Intermedio',
            icon: TypescriptSvg,
            lvl: 2,
        }, {
            title: "Github",
            subtitle: 'Intermedio',
            icon: GithubSvg,
            lvl: 2,
        }, {
            title: "Graphql",
            subtitle: 'Intermedio',
            icon: GraphqlSvg,
            lvl: 2,
        }, {
            title: "Testing",
            subtitle: 'Basic',
            icon: TestingTubeSvg,
            lvl: 1
        }
    ];

    return (
        <div className="pt-[30px] relative">
            <motion.div className="pb-[60px]">
                <div className="relative">
                    <p className={`section-sub-text relative left-[-12px]`}>Mi Stack</p>
                    <h2 className={`section-head-text`}>Tecnologías 🪄</h2>
                </div>

                <ul className="pt-[2.5rem] cards-skill-container justify-center gap-7">

                    {techSkills.map((service, index) => (
                        <CommonCard
                            key={service.title}
                            index={index}
                            lvl={service.lvl}
                            subtitle={service.subtitle}
                            title={service.title}
                            Icon={service.icon} />
                    ))}
                </ul>


            </motion.div>


        </div>
    )
}

export const SkillsMotion = SectionWrapper({ Component: Skills, idName: itemsMenuIds.skills });
