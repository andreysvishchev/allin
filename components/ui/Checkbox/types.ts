import {ChangeEvent} from "react";

export type CheckboxType = {
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type: 'circle' | 'square',
    name?: string
    className?: string
}