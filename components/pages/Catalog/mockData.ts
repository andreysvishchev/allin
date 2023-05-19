import img_1 from '../../../images/catalog/1.png'
import img_10 from '../../../images/catalog/10.png'
import img_11 from '../../../images/catalog/11.png'
import img_12 from '../../../images/catalog/12.png'
import img_13 from '../../../images/catalog/13.png'
import img_14 from '../../../images/catalog/14.png'
import img_15 from '../../../images/catalog/15.png'
import img_16 from '../../../images/catalog/16.png'
import img_2 from '../../../images/catalog/2.png'
import img_3 from '../../../images/catalog/3.png'
import img_4 from '../../../images/catalog/4.png'
import img_5 from '../../../images/catalog/5.png'
import img_6 from '../../../images/catalog/6.png'
import img_7 from '../../../images/catalog/7.png'
import img_8 from '../../../images/catalog/8.png'
import img_9 from '../../../images/catalog/9.png'

import banner from '../../../images/catalog/banner.jpg'

export const mockData = {
    banner: {
        type: 'small',
        data: {
            title: 'Каталог',
            image: banner
        }
    },
    data: [
        {
            title: 'Пищевая продукция',
            items: [
                {
                    title: 'Растительные пищевые масла с содержанием CBD для приёма внутрь',
                    href: 'catalog/section',
                    desc: 'Масла с содержанием CBD являются натуральными продуктами и не содержат психоактивных веществ, поэтому они безопасны для употребления и не вызывают привыкания. Они могут использоваться для улучшения общего состояния организма, снятия стресса и тревожности, улучшения сна, уменьшения болевых ощущений и многих других целей.',
                    items: [
                        {
                            id: '1123',
                            href: 'catalog/section/product',
                            title: 'Масло каннабиса полного спектра',
                            image: img_1,
                            weight: '3 000',
                            price: '2500'
                        },
                        {
                            id: '321',
                            href: 'catalog/section/product',
                            title: 'Растительное масло с изолятом CBD',
                            image: img_2,
                            weight: '3 000',
                            price: '2500'
                        }
                    ]
                },
                {
                    title: 'Изолят CBD для приёма внутрь',
                    desc: 'Это безопасная натуральная альтернатива антидепрессантам, транквилизаторам, снотворным препаратам, нестероидным противовоспалительным и противосудорожным средствам. Отсутствие формирования физиологической толерантности и зависимости позволяет использовать их более длительное время. Вся продукция не содержит ТГК и сертифицирована в РФ',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '12465',
                            href: 'catalog/section/product',
                            title: 'Капсулы для приёма внутрь изолят CBD',
                            image: img_3,
                            weight: '20 мг',
                            price: '2500'
                        },
                        {
                            id: '4352',
                            href: 'catalog/section/product',
                            title: 'Изолят CBD',
                            image: img_4,
                            weight: '300',
                            price: '2500'
                        }
                    ]
                },
                {
                    title: 'Уникальная питьевая CBD ВОДА',
                    desc: 'Тут Вы найдёте ассортимент высококачественной воды, которая содержит каннабидиол (CBD) - один из основных активных компонентов конопли. Эта вода предназначена для употребления внутрь и может быть использована как дополнительный источник питательных и биологически активных веществ.',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '4524',
                            href: 'catalog/section/product',
                            title: '“Cocowater CBD”',
                            image: img_5,
                            weight: '150',
                            price: '2500'
                        },
                        {
                            id: '4351314',
                            href: 'catalog/section/product',
                            title: '“Sportwater CBD”',
                            image: img_6,
                            weight: '150',
                            price: '2500'
                        }
                    ]
                },
                {
                    title: 'Десерты с CBD',
                    desc: 'Тут Вы найдёте ассортимент высококачественной воды, которая содержит каннабидиол (CBD) - один из основных активных компонентов конопли. Эта вода предназначена для употребления внутрь и может быть использована как дополнительный источник питательных и биологически активных веществ.',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '3241134',
                            href: 'catalog/section/product',
                            title: '“Cocowater CBD”',
                            image: img_7,
                            weight: '150',
                            price: '2500'
                        },
                        {
                            id: '534521234',
                            href: 'catalog/section/product',
                            title: '“Sportwater CBD”',
                            image: img_8,
                            weight: '150',
                            price: '2500'
                        }
                    ]
                },
                {
                    title: 'Лакомства для домашних животных “ALLNIMAL CBD”',
                    desc: 'Тут Вы найдёте ассортимент высококачественной воды, которая содержит каннабидиол (CBD) - один из основных активных компонентов конопли. Эта вода предназначена для употребления внутрь и может быть использована как дополнительный источник питательных и биологически активных веществ.',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '43534',
                            href: 'catalog/section/product',
                            title: '“Cocowater CBD”',
                            image: img_9,
                            weight: '150',
                            price: '2500'
                        },
                        {
                            id: '456543',
                            href: 'catalog/section/product',
                            title: '“Sportwater CBD”',
                            image: img_10,
                            weight: '150',
                            price: '2500'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Косметическая продукция',
            items: [
                {
                    title: 'Уход за кожей',
                    desc: 'В разделе представлены различные виды косметических средств, такие как кремы, лосьоны, масла, маски и другие. Каждое средство имеет свой уникальный состав и свойства, что позволяет выбрать оптимальный вариант для конкретной цели.',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '65234',
                            href: 'catalog/section/product',
                            title: 'Универсальный унисекс крем для лица и тела “Алоэ и CBD”',
                            image: img_11,
                            weight: '50',
                            price: '2500'
                        },
                        {
                            id: '345775',
                            href: 'catalog/section/product',
                            title: 'Косметическое масло для наружного применения для массажа или ежедневного нанесения.',
                            image: img_12,
                            weight: '100',
                            price: '2500'
                        }
                    ]
                },
                {
                    title: 'Средства для ванной',
                    desc: 'В этом разделе каталога представлен широкий выбор продуктов, которые отличаются по составу, концентрации CBD и цене. Каждое средство имеет подробное описание, что позволяет выбрать оптимальный вариант для конкретных потребностей и предпочтений.',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '43534',
                            href: 'catalog/section/product',
                            title: 'Гель для душа “Алоэ и CBD”',
                            image: img_13,
                            weight: '100',
                            price: '2500'
                        },
                        {
                            id: '23412',
                            href: 'catalog/section/product',
                            title: 'Пена для ванны с терпенами каннабиса',
                            image: img_14,
                            weight: '150',
                            price: '2500'
                        }
                    ]
                },
                {
                    title: 'Интимная гигиена',
                    desc: 'В этом разделе каталога представлен широкий выбор продуктов, которые отличаются по составу, концентрации CBD и цене. Каждое средство имеет подробное описание, что позволяет выбрать оптимальный вариант для конкретных потребностей и предпочтений.',
                    href: 'catalog/section',
                    items: [
                        {
                            id: '097832',
                            href: 'catalog/section/product',
                            title: 'Гель для душа “Алоэ и CBD”',
                            image: img_15,
                            weight: '100',
                            price: '2500'
                        },
                        {
                            id: '9823423',
                            href: 'catalog/section/product',
                            title: 'Пена для ванны с терпенами каннабиса',
                            image: img_16,
                            weight: '250',
                            price: '2500'
                        }
                    ]
                }
            ]
        }
    ]
}
