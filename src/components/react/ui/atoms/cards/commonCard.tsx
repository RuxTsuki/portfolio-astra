import { fadeIn } from '@components/utils/motions';
import { motion } from 'framer-motion';
import { BarsUnfilledSvg, BarsFilledSvg } from '@components/react/ui/atoms/icons';
/* import { Tilt } from 'react-tilt'; */

interface CommonCard {
    index: number
    title: string
    subtitle: string
    Icon: ({ className }: { className: string }) => JSX.Element,
    lvl: number
}

export const CommonCard = ({ index = 0, title = '', subtitle = '', Icon, lvl }: CommonCard) => {
    return (
        <li className="sm:w-[160px] w-full">
            <motion.div variants={
                fadeIn('right', 'spring', 0.25 * index, 0.70)
            }
                className='w-full green-pink-gradient p-[1px] rounded-[1.25rem] shadow-lg'
            >
                <div
                    /* options={{
                      max: 45,
                      scale: 1,
                      speed: 450
                    }} */
                    className='bg-tertiary rounded-[1.25rem] py-4 px-7 min-h-[180px] flex justify-evenly items-center flex-col'
                >
                    <Icon className={'icon-card'} />
                    {/* <img src={icon} alt={title} className='w-16 h-16 object-contain' /> */}
                    <div className="grid col-auto items-center">
                        {
                            lvl > 2
                                ? <BarsFilledSvg className="col-span-1 icon-small justify-self-center" />
                                : <BarsUnfilledSvg className="col-span-1 icon-small justify-self-center" />
                        }

                        <h3 className='pl-2 col-span-1 semi-title text-center'>{title}</h3>

                        <p className="col-span-2 small-text-helper text-center">
                            {subtitle}
                        </p>
                    </div>

                </div>
            </motion.div>
        </li>
    )
}