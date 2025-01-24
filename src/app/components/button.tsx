interface Props {
    bgColor: string
    borderColor?: string
    text: string
    textColor?: string
}

export default function Button({bgColor, borderColor, text, textColor = "text-black"} : Props) {
    let activeBgColor = ""
    let hoverBgColor = ""
    switch(bgColor) {
        case "bg-blue-500":
            activeBgColor = "active:bg-blue-900"
            hoverBgColor = "hover:bg-blue-700"
            break
        case "bg-green-500":
            activeBgColor = "active:bg-green-900"
            hoverBgColor = "hover:bg-green-700"
            break
        case "bg-red-500":
            activeBgColor = "active:bg-red-900"
            hoverBgColor = "hover:bg-red-700"
            break
        default:
    }
    return <button className={`
        active:scale-95
        ${activeBgColor}
        ${bgColor}
        ${hoverBgColor}
        border-2
        border-gray-300
        ${borderColor}
        p-2
        rounded-md
        shadow-md
        transition-all
        duration-300
        ${textColor}
        w-1/2
    `}>
        <b>{text}</b>
    </button>
}