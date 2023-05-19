import Layout from '@/components/global/Layout/Layout'
import Content from '@/components/pages/Catalog/Catalog'
import {mockData} from '@/components/pages/Catalog/mockData'

const paths = [
    {title: 'Главная', href: '/'},
    {title: 'Каталог', href: ''}
]

export default function Page() {
    return (
        <Layout banner={mockData.banner}
                breadcrumbs={paths}
                title={'Каталог'}
                keywords={'Каталог'}
                description={'Каталог'}>
            <Content data={mockData.data}/>
        </Layout>
    )
}
