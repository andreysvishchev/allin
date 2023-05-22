export type CustomSelectType = {
    onChange: (value: OptionType) => void
    value: OptionType
    options: OptionType[]
    className?: string
}

export type OptionType = {
    value: string
    label: string
}

export type CurrentValueType = OptionType & {
    active: boolean
}
