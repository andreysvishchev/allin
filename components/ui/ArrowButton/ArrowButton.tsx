import classes from './ArrowButon.module.scss'
import IconArrowRight from "@/components/icons/IconArrowRight"
import IconArrowLeft from "@/components/icons/IconArrowLeft"
import { FC } from "react"
import { ArrowButtonType } from "@/components/ui/ArrowButton/types"
import cn from "classnames"

const ArrowButton: FC<ArrowButtonType> = ({ onClick, type, className, color }) => {
    return (
        <button onClick={onClick}
            className={cn(classes.Item, className,
                { [classes.Dark]: color === 'dark' },
                { [classes.Light]: color === 'light' },
                { [classes.Transparent]: color === 'transparent' },
            )}>
            {type === 'next' && <IconArrowRight />}
            {type === 'prev' && <IconArrowLeft />}
        </button>
    )
}

export default ArrowButton