import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type ModalType = {
    status: boolean
    name: string
    openModal: (name: string) => void
    closeModal: () => void
}

export const useModal = create<ModalType>()(
    immer(set => ({
        status: false,
        name: '',
        openModal: (name: string) => set((state) => {
            state.status = true, state.name = name
        }),
        closeModal: () => set(state => {
            state.status = false, state.name = ''
        })
    }))
)
