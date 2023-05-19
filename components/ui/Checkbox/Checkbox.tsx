import classes from './Checkbox.module.scss'
import IconCheckbox from '@/components/icons/IconCheckbox'
import {ChangeEvent, FC, PropsWithChildren} from 'react'
import cn from 'classnames'
import {CheckboxType} from "@/components/ui/Checkbox/types";

const Checkbox: FC<CheckboxType> = ({
                                        checked,
                                        name,
                                        className,
                                        onChange,
                                        type,
                                        ...rest
                                    }) => {

    return (
        <label className={cn(
            classes.Wrap,
            className,
            {[classes.Checked]: checked},
            {[classes.Square]: type === 'square'},
            {[classes.Circle]: type === 'circle'}
        )}>
            <input name={name} checked={checked} onChange={onChange} type={'checkbox'}/>
            <span className={classes.Icon}>
                    <IconCheckbox/>
                </span>
        </label>
    )
}

export default Checkbox