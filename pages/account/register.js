import Link from 'next/link'
import Layout from '../components/Layout'

export default function RegisterPage() {
  return (
    <Layout title='Votifyer - Sign Up Today and start organizing online event election for free, nominate and vote for your favorite candidate'>
      <div className='container my-10'>
        <div className='flex justify-center'>
          <div className='bg-secondary p-5 text-primary w-6/12 rounded-md'>
            <div className=''>
              <div className='text-center mb-5'>
                <h1 className='font-bold text-2xl pb-3'>Sign Up Today</h1>
                <p className='text-primary'>
                  Start organizing online event election for free, nominate and
                  vote for your favorite candidate
                </p>
              </div>

              <form>
                <div className='my-2 flex flex-col'>
                  <label htmlFor='name' className='font-semibold'>
                    Name
                  </label>
                  <input
                    type='text'
                    name=''
                    id='name'
                    className='p-2 rounded-md'
                  />
                </div>
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
                  <label htmlFor='phone_number' className='font-semibold'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name=''
                    id='phone_number'
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
                <div className='my-2 flex flex-col'>
                  <label htmlFor='' className='font-semibold'>
                    Confirm Password
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
                    className='px-20 py-5 rounded-md bg-primary text-white font-bold w-full'
                  >
                    Sign Up
                  </button>
                </div>
                <p className='text-center'>
                  Already have an account,{' '}
                  <Link href='/login'>
                    <a className='underline'>Login</a>
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
