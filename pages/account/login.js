import Layout from '../../components/Layout'
import Link from 'next/link'

export default function login() {
  return (
    <Layout title='Votifyer - Sign Up Today and start organizing online event election for free, nominate and vote for your favorite candidate'>
      <div className='container my-10'>
        <div className='flex justify-center'>
          <div className='bg-secondary p-5 text-primary w-6/12 rounded-md'>
            <div className=''>
              <div className='text-center mb-5 mt-10'>
                <h1 className='font-bold text-2xl pb-3'>Sign In Today</h1>
                <p className='text-primary'>
                  Start organizing online event election for free, nominate and
                  vote for your favorite candidate
                </p>
              </div>

              <form>
                <div className='my-2 flex flex-col'>
                  <label htmlFor='email' className='font-semibold'>
                    Email
                  </label>
                  <input
                    type='email'
                    name=''
                    id='email'
                    className='p-2 rounded-md'
                  />
                </div>
                <div className='my-2 flex flex-col'>
                  <label htmlFor='' className='font-semibold'>
                    Password
                  </label>
                  <input
                    type='password'
                    name=''
                    id=''
                    className='p-2 rounded-md'
                  />
                </div>
                <div className='my-5 flex justify-center'>
                  <button
                    type='submit'
                    className='px-20 py-5 rounded-md bg-primary text-white font-bold'
                  >
                    Sign In
                  </button>
                </div>
                <p className='text-center mb-10'>
                  Don't have an account?
                  <Link href='/register'>
                    <a className='underline'> Sign Up</a>
                  </Link>{' '}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
