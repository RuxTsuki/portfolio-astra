import { SectionWrapper } from '@components/react/ui/molecules/HOC';
import { motion } from 'framer-motion';
import ImageHero from '/src/assets/img/imgHero.webp';
import { itemsMenuIds, socialLinks } from '@components/utils/constant';
import { DiscordNSvg, LinkedinNSvg, WhatsappNSvg } from '@components/react/ui/atoms';
import { Link } from '@nextui-org/react';
import { Tooltip } from "@nextui-org/react";

const { discord, linkedin, whatsapp } = socialLinks;

export const Hero = () => {
    return (
        <div className='relative w-full mx-auto grid pt-[60px] md:pt-[60px]'>

            <div className='lg:flex'>
                <div className="flex flex-row relative">
                    <div className='flex flex-col items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[--main-color]'></div>
                        <div className='w-1 sm:h-48 h-40 bg-gradient-custom-1'></div>
                    </div>

                    <div className='pl-[22px] max-w-[610px]'>
                        <h1 className={`font-black text-[--title-color] text-[32px] lg:text-[70px] xl:text-[80px] sm:text-[46px] xs:text-[38px] lg:leading-[98px] mt-2`}>
                            Hola, Soy <span className='text-[--main-color] whitespace-nowrap'>Diego Bello👋</span>
                        </h1>

                        <p className={`text-[#3C4859] lg:text-[1.5rem] font-[700] xs:text-[1.125rem] md:text-[26px] text-[1.125rem] lg:leading-[40px] mt-6`}>
                            <span className='text-[--main-color]'>Front-end</span> Developer
                        </p>

                        <div className='flex gap-[0.75rem] mt-[1rem] md:gap-[1rem]'>
                            <Tooltip content='Visita mi Linkedin'>
                                <Link aria-label='link to my linkedin' href={linkedin} target='_blank'>
                                    <LinkedinNSvg className='w-[32px] h-[32px] md:w-[42px] md:h-[42px] fill-[--title-color] hover:fill-[--main-color]' />
                                </Link>
                            </Tooltip>

                            <Tooltip content='Encuentrame en Discord'>
                                <Link aria-label='link to my discord' href={discord} target='_blank'>
                                    <DiscordNSvg className='w-[32px] h-[32px] md:w-[42px] md:h-[42px] fill-[--title-color] hover:fill-[--main-color]' />
                                </Link>

                            </Tooltip>

                            <Tooltip content='Escribeme por Whatsapp'>
                                <button aria-label='link to my whatsapp' onClick={() => window.open(whatsapp, '_blank')}>
                                    <WhatsappNSvg className='w-[32px] h-[32px] md:w-[42px] md:h-[42px] fill-[--title-color] hover:fill-[--main-color]' />
                                </button>
                            </Tooltip>



                        </div>
                    </div>

                </div>

                <div className="grid place-items-center mx-auto mt-6 rounded-full border-[1px] border-[#00AEB9] border-solid w-[280px] xl:w-[340px] h-[280px] xl:h-[340px]">
                    <div className="rounded-full bg-[#BCE4E7] w-[80%] h-[80%] relative grid place-content-center">
                        <div className="w-[260px] xl:w-[360px] absolute bottom-[22px]">
                            <img src={ImageHero.src} alt={"Person coding"} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative pt-[7.5rem] lg:pt-[12.5rem] gotodown w-full flex justify-center items-center'>
                <a aria-label="link to dynamic section" href={`#${itemsMenuIds.about}`}>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div animate={{
                            y: [0, 24, 0]
                        }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className='w-3 h-3 rounded-full bg-[--main-color] mb-1'
                        />
                    </div>
                </a>
            </div>

        </div>
    )
}

export const HeroMotion = SectionWrapper({ Component: Hero, idName: itemsMenuIds.home })
