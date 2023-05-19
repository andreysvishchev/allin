import img_1 from '../../../images/catalog/1.png'
import img_2 from '../../../images/catalog/2.png'

export const mockData = {
    catalogLinks: [
        {
            title: 'ПИЩЕВАЯ ПРОДУКЦИЯ',
            links: [
                {title: 'Растительные пищевые масла', href: ''},
                {title: 'Изолят CBD для приёма внутрь', href: ''},
                {title: 'Уникальная питьевая CBD ВОДА', href: ''},
                {title: 'Десерты с CBD', href: ''},
                {title: 'Лакомства для домашних животных “ALLNIMAL CBD”', href: ''}
            ]
        },
        {
            title: 'КОСМЕТИЧЕСКАЯ ПРОДУКЦИЯ',
            links: [
                {title: 'Уход за кожей', href: ''},
                {title: 'Средства для ванной', href: ''},
                {title: 'Интимная гигиена', href: ''}
            ]
        }
    ],
    filters: {
        price: {
            minPrice: 100,
            maxPrice: 10000,
            minValue: 1000,
            maxValue: 7000
        },
        params: {
            contents: {
                title: 'Содержание CBD в мг',
                values: [
                    {value: '500', title: '500 мг', quantity: '4', active: true},
                    {value: '600', title: '600 мг', quantity: '3', active: false},
                    {value: '1000', title: '1 000 мг', quantity: '6', active: false},
                    {value: '1500', title: '1 500 мг', quantity: '3', active: false},
                    {value: '1800', title: '1 800 мг', quantity: '4', active: false},
                    {value: '3000', title: '3 000 мг', quantity: '2', active: false},
                    {value: '6000', title: '6 000 мг', quantity: '1', active: false}
                ]
            },
            concentration: {
                title: 'Концентрация CBD в %',
                values: [
                    {value: '2', title: '2%', quantity: '4', active: true},
                    {value: '5', title: '5%', quantity: '8', active: false},
                    {value: '6', title: '6%', quantity: '2', active: false},
                    {value: '10', title: '10%', quantity: '3', active: false},
                    {value: '15', title: '15%', quantity: '3', active: false},
                    {value: '20', title: '20%', quantity: '3', active: false}
                ]
            },
            size: {
                title: 'Объем в мл',
                values: [
                    {value: '2', title: '2%', quantity: '4', active: true},
                    {value: '5', title: '5%', quantity: '8', active: false},
                    {value: '6', title: '6%', quantity: '2', active: false},
                    {value: '10', title: '10%', quantity: '3', active: false},
                    {value: '15', title: '15%', quantity: '3', active: false},
                    {value: '20', title: '20%', quantity: '3', active: false}
                ]
            }
        }
    },
    sort: {},
    products: [
        {
            id: '12123',
            href: 'catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '3251',
            href: 'catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '1143223',
            href: 'catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '3255321',
            href: 'catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '112673',
            href: 'catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '324561',
            href: 'catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '117523',
            href: 'catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '3223451',
            href: 'catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '11645623',
            href: 'catalog/section/product',
            title: 'Масло каннабиса полного спектра',
            image: img_1,
            weight: '3 000',
            price: '2500'
        },
        {
            id: '321236',
            href: 'catalog/section/product',
            title: 'Растительное масло с изолятом CBD',
            image: img_2,
            weight: '3 000',
            price: '2500'
        }
    ]
}
