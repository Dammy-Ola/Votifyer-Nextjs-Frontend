import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { signup } from '../../actions/authActions'
import Layout from '../../components/Layout'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RegisterPage() {
  const [name, setName] = useState('')
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
    console.log({ name, email, password })
    dispatch(signup({ name, email, password }))
    error && toast.error(error)
    authUser && router.push(redirect)
  }

  return (
    <Layout title='Votifyer - Sign Up Today and start organizing online event election for free, nominate and vote for your favorite candidate'>
      <div className='container my-10'>
        <ToastContainer />
        <div className='flex justify-center'>
          <div className='bg-secondary p-5 text-primary lg:w-6/12 rounded-md'>
            <div className=''>
              <div className='text-center mb-5'>
                <h1 className='font-bold text-2xl pb-3'>Sign Up Today</h1>
                <p className='text-primary'>
                  Start organizing online event election for free, nominate and
                  vote for your favorite candidate
                </p>
              </div>

              <form onSubmit={onSubmitHandler}>
                <div className='my-2 flex flex-col'>
                  <label htmlFor='name' className='font-semibold'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='p-2 rounded-md'
                  />
                </div>
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
                    required
                    className='p-2 rounded-md'
                  />
                </div>
                {/* <div className='my-2 flex flex-col'>
                  <label htmlFor='phone_number' className='font-semibold'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name=''
                    id='phone_number'
                    className='p-2 rounded-md'
                  />
                </div> */}
                <div className='my-2 flex flex-col'>
                  <label htmlFor='password' className='font-semibold'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)}
                    required
                    className='p-2 rounded-md'
                  />
                </div>
                {/* <div className='my-2 flex flex-col'>
                  <label htmlFor='' className='font-semibold'>
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name=''
                    id=''
                    className='p-2 rounded-md'
                  />
                </div> */}
                <div className='my-5 flex justify-center'>
                  <input
                    type='submit'
                    value='Sign Up'
                    className='px-20 py-5 rounded-md bg-primary text-white hover:bg-white hover:text-primary font-bold cursor-pointer'
                  />
                </div>
                <p className='text-center'>
                  Already have an account,{' '}
                  <Link href='/account/login'>
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
