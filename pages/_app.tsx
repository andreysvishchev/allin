import type {AppProps} from 'next/app'
import '../css/fonts.css'
import '../css/global.scss'
import '../css/normalize.css'
import 'swiper/css'
import localFont from '@next/font/local'

const noah = localFont({
    src: [
        {
            path: '../fonts/Noah-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../fonts/Noah-Regular.woff2',
            weight: '400',
            style: 'normal'
        }

    ],
    preload: true,
    display: 'swap'
})

export default function App({Component, pageProps}: AppProps) {

    return (
        <div className={noah.className}>
            <Component {...pageProps} />
        </div>

    )
}
