import intro_img_1 from '../../../images/main/intro/1.png'
import intro_img_2 from '../../../images/main/intro/2.png'

import catalog_img_1 from '../../../images/main/catalog/1.jpg'
import catalog_img_2 from '../../../images/main/catalog/2.jpg'
import catalog_img_3 from '../../../images/main/catalog/3.jpg'
import catalog_img_4 from '../../../images/main/catalog/4.jpg'
import catalog_img_5 from '../../../images/main/catalog/5.jpg'
import catalog_img_6 from '../../../images/main/catalog/6.jpg'
import catalog_img_7 from '../../../images/main/catalog/7.jpg'
import catalog_img_8 from '../../../images/main/catalog/8.jpg'

import help_img_1 from '../../../images/main/help/1.jpg'
import help_img_2 from '../../../images/main/help/2.jpg'
import help_img_3 from '../../../images/main/help/3.jpg'
import help_img_4 from '../../../images/main/help/4.jpg'
import help_img_5 from '../../../images/main/help/5.jpg'
import help_img_6 from '../../../images/main/help/6.jpg'
import help_img_7 from '../../../images/main/help/7.jpg'
import help_img_8 from '../../../images/main/help/8.jpg'

import benefit_icon_1 from '../../../images/icons/main/benefits/benefits-1.svg'
import benefit_icon_2 from '../../../images/icons/main/benefits/benefits-2.svg'
import benefit_icon_3 from '../../../images/icons/main/benefits/benefits-3.svg'
import benefit_icon_4 from '../../../images/icons/main/benefits/benefits-4.svg'

import map from '../../../images/main/location/map.jpg'
import license from '../../../images/main/location/1.jpg'

import base_image_1 from '../../../images/main/base/1.jpg'
import base_image_2 from '../../../images/main/base/2.jpg'
import base_image_3 from '../../../images/main/base/3.jpg'

export const mockData = {
    intro: [
        {
            title: `<strong>ALLIN Co LTD</strong> фармацевтическая компания`,
            text: 'специализирующаяся на производстве пищевых и косметических средств на базе фитоканабиноидов, в частности CBD (каннабидиол)',
            link: {
                title: 'Подробнее о компании',
                href: '/about'
            },
            image: intro_img_1

        },
        {
            text: 'При разработке состава своих продуктов мы использовали традиционные средства и рецепты Тайланда, а также современные технологии и новейшие результаты исследований эндоканнабиноидной системы человека.',
            link: {
                title: 'Подробнее о продукции',
                href: '/catalog'
            },
            image: intro_img_2
        }
    ],
    catalog: {
        title: 'Каталог',
        items: [
            {
                title: 'Пищевая продукция',
                items: [
                    {
                        title: 'Растительные пищевые масла с&nbsp;содержанием&nbsp;CBD&nbsp;для&nbsp;приёма внутрь',
                        href: '/catalog',
                        image: catalog_img_1
                    },
                    {
                        title: 'Изолят CBD для приёма внутрь',
                        href: '/catalog',
                        image: catalog_img_2
                    },
                    {
                        title: 'Уникальная питьевая КБДВОДА',
                        href: '/catalog',
                        image: catalog_img_3
                    },
                    {
                        title: 'Лакомства для домашних животных “ALLNIMAL&nbsp;CBD”',
                        href: '/catalog',
                        image: catalog_img_4
                    },
                    {
                        title: 'Десерты с CBD (Шоколад, кексы, конфеты)',
                        href: '/catalog',
                        image: catalog_img_5
                    }
                ]
            },
            {
                title: 'Косметическая продукция',
                items: [
                    {
                        title: 'Уход за кожей',
                        href: '/catalog',
                        image: catalog_img_6
                    },
                    {
                        title: 'Средства для ванной',
                        href: '/catalog',
                        image: catalog_img_7
                    },
                    {
                        title: 'Интимная гигиена',
                        href: '/catalog',
                        image: catalog_img_8
                    }
                ]
            }
        ]
    },
    help: {
        title: 'Состояния при которых помогает CBD',
        items: [
            {
                title: 'Любые боли',
                image: help_img_1
            },
            {
                title: 'Депрессия и стресс',
                image: help_img_2
            },
            {
                title: 'Невроз и эмоциональная нестабильность',
                image: help_img_3
            },
            {
                title: 'Расстройства пищевого поведения',
                image: help_img_4
            },
            {
                title: 'Расстройства сна',
                image: help_img_5
            },
            {
                title: 'Воспаления и опухоли любого рода',
                image: help_img_6
            },
            {
                title: 'Пониженный иммунитет',
                image: help_img_7
            },
            {
                title: 'Нейродегенеративные заболевания',
                image: help_img_8
            }
        ]
    },
    benefits: {
        title: 'Преимущества CBD',
        items: [
            {
                title: 'Каннабидиол (CBD) — это растительный каннабиноид (фитоканнабиноид), молекулярно схожий с нейромедиаторами, вырабатываемыми организмом человека',
                num: '01',
                text: 'При нехватке эдоканнабиноидов нарушаются обменные процессы в организме. CBD может восполнять нехватку естественных каннабиноидов (эндоканнабиноидов), тем самым создавая благоприятную среду для протекания обменных процессов.',
                icon: benefit_icon_1
            },
            {
                title: 'Принимая CBD для коррекции конкретного симптома, пациент получает комплексный оздоровительный эффект',
                num: '02',
                text: 'Он выражается в том, что достаточный уровень каннабиноидов в организме создаёт благоприятную среду для правильного протекания обменных процессов. Поэтому после курса приёма пациент чувствует облегчение или полное исчезновение беспокоящих симптомов, а также улучшение общего самочувствия как физического, так и ментального.',
                icon: benefit_icon_2
            },
            {
                title: 'Приём фитоканнабиноидов не вызывает физической или психической зависимости',
                num: '03',
                text: 'Каннабидиол не имеет синдрома отмены и отрицательных побочных эффектов, а, напротив, имеет оздоровительный эффект для тела и психики. Ведь механизм выработки каннабиноидов и их взаимодействия с рецепторами заложен в химию нашего тела. Таким образом принимая фитоканнабиноиды мы помогаем организму правильно функционировать.',
                icon: benefit_icon_3
            },
            {
                title: 'Само вещество CBD добывается нашей компанией из органического сырья',
                num: '04',
                text: 'Выращенного на собственной ферме в Тайланде по европейским технологиям без пестицидов и усилителей роста. Процесс экстракции CBD из растения происходит экологически чистым способом при помощи углекислого газа. Продукция проходит 3 этапа контроля качества в процессе производства: контроль качества сырья, контроль качества изолята, контроль качества продукции.',
                icon: benefit_icon_4
            }
        ]
    },
    location: {
        title: 'Где находится производство продукции',
        map: map,
        address: `ALLIN SIAM CO., LTD <br> Тайланд, Паттая, 90 Джомтьен роуд, этаж 3, офис 3`,
        phone: '+66814232106',
        email: 'INFO@ALLIN.INFO',
        items: [license, license, license, license],
        link: {
            title: 'Подробнее о компании',
            href: '/about'
        }
    },
    base: {
        title: 'База знаний',
        items: [
            {
                title: 'Как каннабиноиды действуют на организм человека?',
                text: `
                        <p>Исследования последних 20 лет показали высокую эффективность приёма фитоканабиноидов - каннабиноидов, содержащихся в растениях, для коррекции нарушений выработки естественных эндоканабиноидов в организме человека. </p>
                        <p>Наиболее используемый и изученный фитоканабиноид - Канабидиол (CBD), который добывается из соцветий специально выведенных медицинских сортов конопли, в которой не содержится...</p>
                `,
                link: {
                    title: 'Прочитать больше',
                    href: '/'
                },
                image: base_image_1
            },
            {
                title: 'Что такое CBD?',
                text: `
                        <p>Исследования последних 20 лет показали высокую эффективность приёма фитоканабиноидов - каннабиноидов, содержащихся в растениях, для коррекции нарушений выработки естественных эндоканабиноидов в организме человека. </p>
                        <p>Наиболее используемый и изученный фитоканабиноид - Канабидиол (CBD), который добывается из соцветий специально выведенных медицинских сортов конопли, в которой не содержится...</p>
                `,
                link: {
                    title: 'Прочитать больше',
                    href: '/'
                },
                image: base_image_2
            },
            {
                title: 'Как работает CBD?',
                text: `
                        <p>Исследования последних 20 лет показали высокую эффективность приёма фитоканабиноидов - каннабиноидов, содержащихся в растениях, для коррекции нарушений выработки естественных эндоканабиноидов в организме человека. </p>
                        <p>Наиболее используемый и изученный фитоканабиноид - Канабидиол (CBD), который добывается из соцветий специально выведенных медицинских сортов конопли, в которой не содержится...</p>
                `,
                link: {
                    title: 'Прочитать больше',
                    href: '/'
                },
                image: base_image_3
            }
        ],
        link: {
            title: 'Узнать больше',
            href: '/'
        }
    }
}











