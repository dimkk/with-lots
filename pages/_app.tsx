import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import PlausibleProvider from 'next-plausible'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <PlausibleProvider domain={process.env.NEXT_PUBLIC_DOMAIN}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}
