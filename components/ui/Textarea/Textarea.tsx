import classes from './Textarea.module.scss'
import cn from "classnames";
import {ChangeEvent, FC} from "react";
import {TextAreaType} from "@/components/ui/Textarea/types";

const Textarea: FC<TextAreaType> = ({value, onChange, name, className, placeholder}) => {
    return (
        <div className={cn(classes.Wrap, className)}>
            <textarea name={name}
                      id={name}
                      value={value}
                      onChange={onChange}
                      className={classes.Field}/>
            <label htmlFor={name} className={classes.Placeholder}>{placeholder}</label>
        </div>
    );
};

export default Textarea;