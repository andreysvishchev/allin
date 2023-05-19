import classes from './Input.module.scss'
import {FC} from "react";
import cn from "classnames";
import {InputType} from "@/components/ui/Input/types";



const Input: FC<InputType> = ({value, onChange, name, className, label, placeholder = '', type = ''}) => {
    const onFocusHandler = () => {

    }

    const onBlurHandler = () => {

    }

    return (
        <div className={cn(classes.Wrap, className)}>
            <input type={type}
                   name={name}
                   id={name}
                   className={classes.Field}
                   placeholder={placeholder}
                   value={value}
                   onChange={onChange}

            />
            <label htmlFor={name} className={classes.Placeholder}>{label}</label>
        </div>
    );
};

export default Input;