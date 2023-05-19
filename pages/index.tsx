import Layout from '@/components/global/Layout/Layout'
import Intro from '@/components/pages/Main/Intro/Intro'
import {mockData} from '@/components/pages/Main/mockData'
import Catalog from '@/components/pages/Main/Catalog/Catalog'
import Help from '@/components/pages/Main/Help/Help'
import Benefits from '@/components/pages/Main/Benefits/Benefits'
import Location from '@/components/pages/Main/Location/Location'
import Base from '@/components/pages/Main/Base/Base'

export default function Page() {
    return (
        <Layout title={'Главная'}
                description={'Главная'}
                keywords={'Главная'}>
            <Intro data={mockData.intro}/>
            <Catalog data={mockData.catalog}/>
            <Help data={mockData.help}/>
            <Benefits data={mockData.benefits}/>
            <Location data={mockData.location}/>
            <Base data={mockData.base}/>
        </Layout>
    )
}
