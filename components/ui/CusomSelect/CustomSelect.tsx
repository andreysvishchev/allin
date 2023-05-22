import IconSortMax from '@/components/icons/IconSortMax'
import IconSortMin from '@/components/icons/IconSortMin'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import cn from 'classnames'
import { FC, useRef, useState } from 'react'
import classes from './CustomSelect.module.scss'
import { CurrentValueType, CustomSelectType, OptionType } from './types'

const CustomSelect: FC<CustomSelectType> = ({ onChange, options, value, className }) => {
    const wrapRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState<CurrentValueType>({
        label: value.label,
        value: value.value,
        active: false,
    })

    const toggleSelect = () => {
        setOpen(!open)
    }

    const onChangeHandler = (value: OptionType) => {
        onChange(value)
        setCurrentValue({
            label: value.label,
            value: value.value,
            active: true
        })
        toggleSelect()
    }

    const closeSelect = () => {
        setOpen(false)
    }

    useOnClickOutside(wrapRef, () => closeSelect())

    return (
        <div ref={wrapRef}
            className={cn(classes.Wrap, className)}>

            <div className={cn(classes.Inner, { [classes.Open]: open })}>
                <div onClick={toggleSelect}
                    className={cn(classes.CurrentValue,
                        { [classes.Open]: open },

                    )}>
                    <span>
                        {currentValue?.label}
                    </span>
                    {currentValue.value === 'max' && <IconSortMax />}
                    {currentValue.value === 'min' && <IconSortMin />}

                </div>

                <div className={cn(classes.Options, { [classes.Open]: open })}>
                    {options.map((el, i) =>
                        el.value !== ''
                            ? <div key={i} onClick={() => onChangeHandler(el)} className={classes.Option}>
                                <span>{el.label}</span>
                                {el.value === 'max' && <IconSortMax />}
                                {el.value === 'min' && <IconSortMin />}
                            </div>
                            : null
                    )}
                </div>
            </div>

        </div>
    )
}

export default CustomSelect
