import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <div className='hero flex justify-between items-center h-screen'>
          <div className='hero-element '>
            <h1 className='font-bold text-5xl lg:text-6xl'>
              Organizing an event is difficult and stressful, but voting
              shouldn't be...
            </h1>
            <div className='mt-20'>
              <Link href='/account/login'>
                <a className='py-5 px-14 rounded-sm bg-secondary text-primary font-bold text-xl mr-10'>
                  Sign In
                </a>
              </Link>
            </div>
            {/* <div className='mt-20'>
              <Link href='/'>
                <a className='p-5 rounded-sm bg-secondary text-primary font-bold text-xl mr-10'>
                  Organize Voting
                </a>
              </Link>
              <Link href='/'>
                <a className='p-5 rounded-sm border border-secondary text-white font-bold text-xl'>
                  Start Voting
                </a>
              </Link>
            </div> */}
          </div>
          <div className='hidden lg:block hero-element'>
            <img
              src='https://images.unsplash.com/photo-1607062294253-93e9ce166448?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
              alt=''
              className='mx-auto'
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
