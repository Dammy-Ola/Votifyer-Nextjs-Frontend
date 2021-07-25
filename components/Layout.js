import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-JGBBPRTPCY'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-JGBBPRTPCY');
 `,
          }}
        />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title:
    'Votifyer | Organize online event election, nominate candidate and vote for your favorite candidates',
  description:
    'Organize election for your events, allow for nomination and voting for deserving candidates',
  keywords:
    'Vote Online, organize events, online event election, free online election',
}
