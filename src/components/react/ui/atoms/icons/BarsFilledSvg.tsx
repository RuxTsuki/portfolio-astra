import type { SVGProps } from "react"


export const BarsFilledSvg = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} stroke="currentColor"
            fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="6.5" y="27.5" width="7" height="14" rx="1.5" fill="black" stroke="black" />
            <rect x="20.5" y="17.5" width="7" height="24" rx="1.5" fill="black" stroke="black" />
            <rect x="34.5" y="6.5" width="7" height="35" rx="1.5" fill="black" stroke="black" />
        </svg>

    )
}
