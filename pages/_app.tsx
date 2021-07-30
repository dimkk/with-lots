import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
