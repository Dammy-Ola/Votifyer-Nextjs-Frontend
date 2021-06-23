import Layout from '../components/Layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <div className='container flex justify-center items-center h-screen'>
        <div className=''>
          <h1 className='font-bold text-5xl mb-20'>You Are Lost</h1>
          <div className='mx-auto w-full'>
            <Link href='/'>
              <a className='p-5 rounded-sm bg-secondary text-primary font-bold text-xl'>
                Go Back Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
