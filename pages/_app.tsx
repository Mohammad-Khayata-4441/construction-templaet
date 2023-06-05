import Layout from '@/components/layout'
import {useEffect} from 'react'
import '@/styles/globals.scss'
import '@/styles/shared.scss'
import '@/styles/tailwind.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import mainTheme from '@/plugins/styledComponents/theme'
import "swiper/css";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <ThemeProvider theme={mainTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
