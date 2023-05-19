import {ChangeEvent} from "react";

export type InputType = {
    label: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    placeholder?: string
    type?: string
}