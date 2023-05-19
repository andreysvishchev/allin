export type ArrowButtonType = {
    onClick: () => void
    color: 'dark' | 'light'
    type: 'prev' | 'next'
    className?: string
}