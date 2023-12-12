import { fadeIn } from '@components/utils/motions';
import './vertical-line-element.css';
import { motion } from 'framer-motion';
interface Props {
    children: React.ReactNode,
    contentStyle: React.CSSProperties,
    className?: string,
    contentArrowStyle: React.CSSProperties,
    date: string,
    iconStyle: React.CSSProperties,
    icon: React.ReactNode,
    index: number
}

export const VerticalTimelineElement = ({ children, index, contentStyle, className, contentArrowStyle, date, iconStyle, icon }: Props) => {
    return (
        <motion.div
            variants={
                fadeIn(`${index % 2 === 0 ? 'left' : 'right'}`, 'spring', 0.25 * index, 0.70)
            }
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.25 }}
            className='vertical-element-container relative mb-[2.5em] lg:mb-[4em]'>

            <span className='vertical-timeline-element-icon'>
                {
                    icon
                }
            </span>

            <div className="vertical-line-element-bg ml-[60px] px-4 py-5 relative rounded-[.3em]">
                <span className='vertical-line-element-arrow'></span>
                <span className='px-[.8em] opacity-[.7] inline-block text-[.8125rem]'>{date}</span>
                {children}
            </div>
        </motion.div>
    )
}
