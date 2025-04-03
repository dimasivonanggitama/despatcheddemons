import { ReactNode } from "react"

interface Props {
    bgColor?: string
    border?: string
    borderRadius?: string
    height?: string
    children?: ReactNode
    flexDirection?: string
    padding?: string
}

export default function Card({bgColor = "bg-white", border = "border-2", borderRadius = "rounded-lg", children, flexDirection = "flex-row", padding = "p-2", height = "min-h-96"} : Props) {
    return <div className={`
        ${bgColor}
        ${border}
        border-gray-200
        ${borderRadius}
        flex
        ${flexDirection} 
        gap-2
        ${height}
        items-center
        min-w-96
        ${padding}
        shadow-md
        text-black
    `}>{children}</div>
}