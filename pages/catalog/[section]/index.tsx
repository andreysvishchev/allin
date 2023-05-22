import Layout from '@/components/global/Layout/Layout'
import Section from '@/components/pages/Section/Section'
import { mockData } from '@/components/pages/Section/mockData'
import { useSection } from "@/components/pages/Section/store"
import { useEffect } from "react"

const paths = [
    { title: 'Главная', href: '/' },
    { title: 'Каталог', href: '/catalog' },
    { title: 'Пищевая продукция', href: '' },
]

export default function Page() {
    const initState = useSection(state => state.initState)

    useEffect(() => {
        initState(mockData)
    }, [])

    return (
        <Layout breadcrumbs={paths}
            title={'Секция'}
            keywords={'Секция'}
            description={'Секция'}>
            <Section />
        </Layout>
    )
}
