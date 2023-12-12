
import './vertical-line.css';

export const VerticalTimeLine = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='vertical-timeline-container overflow-hidden'>
            {children}
        </div >
    )
}
