import { OptionType } from '@/components/ui/CusomSelect/types'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import cn from 'classnames'
import { useRef, useState } from 'react'
import classes from './Dropdown.module.scss'

type PropsType = {
    onChange: (value: OptionType) => void
    value: OptionType
    options: OptionType[]
    title: string
}
const Dropdown = ({ onChange, options, value, title }: PropsType) => {

    const ref = useRef() as React.MutableRefObject<HTMLDivElement>
    const [open, setOpen] = useState(false)

    const toggleDropDown = () => {
        const dropdowns = document.querySelectorAll<HTMLElement>(` .${classes.Wrap}`)

        if (open) {
            dropdowns.forEach(el => {
                el.style.opacity = '1'
            })
            setOpen(false)
        }

        if (!open) {
            dropdowns.forEach(el => {
                if (el === ref.current) {
                    ref.current.style.opacity = '1'
                } else {
                    el.style.opacity = '.3'
                }
            })
            setOpen(true)
        }
    }

    const onChangeHandler = (value: OptionType) => {
        onChange(value)
        onClose()
    }

    const onClose = () => {
        const dropdowns = document.querySelectorAll<HTMLElement>(` .${classes.Wrap}`)

        dropdowns.forEach(el => {
            el.style.opacity = '1'
        })

        setOpen(false)
    }

    useOnClickOutside(ref, () => onClose())


    return (
        <div data-dropdown='wrap' ref={ref} className={cn(classes.Wrap, { [classes.Open]: open })}>
            <div onClick={toggleDropDown} className={classes.Top}>
                <div className={classes.Title}>
                    <span>{title}</span>
                </div>
                <div className={classes.CurrnetValue}>{value.label}</div>
            </div>
            <div className={classes.Options}>
                {options && options.length ?
                    options.map((el, i) =>
                        <div key={i}
                            onClick={() => onChangeHandler(el)}
                            className={cn(classes.Option)}>{el.label}</div>)
                    : null
                }
            </div>

        </div>
    )
}

export default Dropdown
