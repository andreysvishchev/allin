export type ArrowButtonType = {
    onClick: () => void
    color: 'dark' | 'light' | 'transparent'
    type: 'prev' | 'next'
    className?: string
}
