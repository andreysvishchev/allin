import img_1 from '../../../images/catalog/1.png'
import img_2 from '../../../images/catalog/2.png'
import img from '../../../images/product/foto.png'

export const mockData = {
    intro: {
        images: [img, img, img],
        title: 'Масло каннабиса полного спектра',
        optionsList: [
            {
                title: 'Доступные концентрации',
                items: [
                    { value: '30 мл, 2% CBD, 0.01% THC', label: '30 мл, 2% CBD, 0.01% THC' },
                    { value: '30 мл, 4% CBD, 0.02% THC', label: '30 мл, 4% CBD, 0.02% THC' },
                    { value: '30 мл, 8% CBD, 0.04% THC', label: '30 мл, 8% CBD, 0.04% THC' }
                ]
            },
            {
                title: 'Содержание  CBD',
                items: [
                    { value: ' 2% ', label: '2% ' },
                    { value: ' 4% ', label: '4% ' },
                    { value: ' 8% ', label: '8% ' }
                ]
            },
            {
                title: 'Объём',
                items: [
                    { value: ' 30', label: '30 мл' },
                    { value: ' 60', label: '60 мл' },
                    { value: ' 90', label: '90 мл' }
                ]
            }
        ],
        article: 'Артикул GS-BR-2',
        price: '3 300'
    },
    desc: `
        <strong>
            Масло CBD "Широкий спектр" 600мг 2% (30ml) GoldenSeed.life
        </strong>
        <br/>
        <p>
            Масло CBD (КБД) “Широкого спектра” GoldenSeed.life сохраняет вкус и аромат конопли. Содержит КБД, а также другие полезные для организма каннабиноиды, ароматические терпены, флавоноиды, витамины, минералы. Эти компоненты в сочетании друг с другом увеличивают фармакологическую активность и расширяют клиническое применение CBD масла.
        </p>
        <br/>
        <p>
            В качестве основы используется высококачественное масло семян подсолнечника с большим количеством витаминов и минералов, а также незаменимых жирных кислот омега-3 и омега-6.
        </p>
        <br/>
        <br/>
        <strong>
            Масло “Широкого спектра” GoldenSeed.life с содержанием CBD 2% подходит:
        </strong>
        <br/>
            <ul>
                <li>
                    Для тех, кто только знакомится с действием CBD
                </li>
                <li>
                    Кому рекомендована минимальная дозировка
                    </li>
                <li>
                    Для общей профилактики здоровья организма
                    </li>
            </ul>
            <br/>
            <br/>
            <ul>
                <li>
                    Сертифицировано в РФ
                </li>
                <li>
                    Подходит вегетарианцам• 100% натуральный продукт. Не содержит ГМО
                </li>
                <li>
                    В составе 100% органическая конопля выращенная в Швейцарии
                </li>
                <li>
                    Маслом-основой является премиальное масло семян подсолнечника
                </li>
                <li>
                    Оригинальный аромат и вкус растения
                </li>
                <li>
                    Удобно использовать
                </li>
                <li>
                    Содержание CBD 2%
                </li>
                <li>
                    Не содержит ТГК
                </li>
                <li>
                    Сделано в Швейцарии
                </li>
            </ul>        
    `,
    characteristics: [
        {
            name: 'Ингредиенты:',
            text: `
            <p><strong>Экстракт конопли широкого спектра действия:</strong> КБД 600МГ 2%</p>
            <p><strong>Терпены:</strong> β-мирцен, Линалоол, D-лимонен, α-бисаболол, β-кариофиллен </p>
            <p><strong>Каннабиноиды:</strong> КБД (каннабидиол), КБЦ (каннабициклол), КБГк (каннабигероловая кислота), КБГ (каннабигерол), КБДк (каннабидиоловая кислота), КБХ (каннабихромен). </p>
            <p><strong>Натуральное масло семян подсолнечника. </strong> </p>
            <p><strong>Витамины:</strong>  А, В, С, Е, F, омега-3, омега-6, омега-9. </p>
            <p><strong> Жиры: </strong>насыщенные, мононенасыщенные, полиненасыщенные </p>
        `
        },
        {
            name: 'Срок хранения:',
            text: `
            <p><strong> 12 месяцев</strong> </p>
        `
        },
        {
            name: 'Дозировка:',
            text: `
            <p><strong> 4 капли содержат - 3мг КБД</strong> </p>
        `
        },
        {
            name: 'Условия хранения:',
            text: `
            <p>Хранить в прохладном, темном и сухом месте, избегая попадания прямых солнечных лучей.</p>
        `
        },
        {
            name: 'Объем:',
            text: `
            <p><strong> 30ml</strong> </p>
        `
        }
    ],
    certificates: [
        {
            title: 'Сертификат BIO',
            href: '/'
        },
        {
            title: 'Масло CBD Анализ на ТГК',
            href: '/'
        },
        {
            title: 'Масло CBD Протокол испытаний',
            href: '/'
        },
        {
            title: 'Масло CBD Декларация соответствия',
            href: '/'
        }
    ],
    products: [
        {
            id: '11645623',
            href: '/catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '321236',
            href: '/catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '11645623',
            href: '/catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '321236',
            href: '/catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '11645623',
            href: '/catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '321236',
            href: '/catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '11645623',
            href: '/catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '321236',
            href: '/catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '11645623',
            href: '/catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        },
        {
            id: '321236',
            href: '/catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500',
            cvd: '2%'
        }
    ]
}
