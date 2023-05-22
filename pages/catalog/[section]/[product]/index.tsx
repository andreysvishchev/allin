import Layout from "@/components/global/Layout/Layout"
import Product from '@/components/pages/Product/Product'
import { mockData } from '@/components/pages/Product/mockData'

const paths = [
    { title: 'Главная', href: '/' },
    { title: 'Каталог', href: '/catalog' },
    { title: 'Пищевая продукция', href: '/catalog/section' },
    { title: 'Масло каннабиса полного спектра', href: '' },
]

export default function Page() {

    return (
        <Layout breadcrumbs={paths} title={'Продукт'} keywords={'Продукт'} description={'Продукт'}>
            <Product data={mockData} />
        </Layout>
    )
}