import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import { loginAction } from '../../actions/authActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function login() {
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')

  const dispatch = useDispatch()

  // Bringing our auth user from redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, authUser } = userLogin

  const router = useRouter()

  const notAuthredirect = '/account/login'
  const redirect = '/events/esa-knust-dinner-awards-night'

  useEffect(() => {
    if (authUser) {
      authUser && toast.success('You are logged In')
      router.push(redirect)
    } else {
      error && toast.error(error)
    }
  }, [router, authUser, notAuthredirect, error, redirect])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(loginAction({ email, password }))
  }

  return (
    <Layout title='Votifyer - Sign Up Today and start organizing online event election for free, nominate and vote for your favorite candidate'>
      <div className='container my-10'>
        <ToastContainer />
        <div className='flex justify-center'>
          <div className='bg-secondary p-5 text-primary lg:w-6/12 rounded-md'>
            <div className=''>
              <div className='text-center mb-5 mt-10'>
                <h1 className='font-bold text-2xl pb-3'>Sign In Today</h1>
                <p className='text-primary'>
                  Start organizing online event election for free, nominate and
                  vote for your favorite candidate
                </p>
              </div>

              <form onSubmit={onSubmitHandler}>
                <div className='my-2 flex flex-col'>
                  <label htmlFor='email' className='font-semibold'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-2 rounded-md'
                  />
                </div>
                <div className='my-2 flex flex-col'>
                  <label htmlFor='' className='font-semibold'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)}
                    className='p-2 rounded-md'
                  />
                </div>
                <div className='my-5 flex justify-center'>
                  <input
                    type='submit'
                    value='Login'
                    className='px-20 py-5 rounded-md bg-primary text-white hover:bg-white hover:text-primary font-bold cursor-pointer'
                  />
                </div>
                <p className='text-center mb-10'>
                  Don't have an account?
                  <Link href='/account/register'>
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
