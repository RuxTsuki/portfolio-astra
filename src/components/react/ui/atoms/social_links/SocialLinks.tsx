import { DiscordNSvg, LinkedinNSvg, WhatsappNSvg } from '@components/react/ui/atoms';
import { Link } from '@nextui-org/react';
import { Tooltip } from "@nextui-org/react";
import { socialLinks } from '@components/utils/constant';

const { discord, linkedin, whatsapp } = socialLinks;

export const SocialLinks = () => {
    return (
        <>
            <Tooltip content='Visita mi Linkedin'>
                <a aria-label='link to my linkedin' href={linkedin} target='_blank'>
                    <LinkedinNSvg className='w-[32px] h-[32px] md:w-[42px] md:h-[42px] fill-[--title-color] hover:fill-[--main-color]' />
                </a>
            </Tooltip>

            <Tooltip content='Encuentrame en Discord'>
                <a aria-label='link to my discord' href={discord} target='_blank'>
                    <DiscordNSvg className='w-[32px] h-[32px] md:w-[42px] md:h-[42px] fill-[--title-color] hover:fill-[--main-color]' />
                </a>

            </Tooltip>

            <Tooltip content='Escribeme por Whatsapp'>
                <button aria-label='link to my whatsapp' onClick={() => window.open(whatsapp, '_blank')}>
                    <WhatsappNSvg className='w-[32px] h-[32px] md:w-[42px] md:h-[42px] fill-[--title-color] hover:fill-[--main-color]' />
                </button>
            </Tooltip>
        </>
    )
}
