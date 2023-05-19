import {ChangeEvent} from "react";

export type TextAreaType = {
    placeholder: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    className?: string
    name?: string
}