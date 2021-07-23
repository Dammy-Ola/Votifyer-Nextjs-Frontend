import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { voteAction } from '../../actions/voteActions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SingleCategoryPage({ category, nominees }) {
  const [nomineeId, setNomineeId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [organizationId, setOrganizationId] = useState('')
  const [eventId, setEventId] = useState('')

  const dispatch = useDispatch()

  // Bringing our auth user from redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, authUser } = userLogin

  // console.log(authUser.user.id)

  // if(category.votes > 1){
  // }

  const router = useRouter()
  const notAuthredirect = '/account/login'
  const redirect = '/events/esa-knust-dinner-awards-night'

  useEffect(() => {
    if (!authUser) {
      toast.error('You are not logged In')
      router.push(notAuthredirect)
    }
    category.votes.some((vote) => {
      if (vote.user === authUser.user.id) {
        console.log('You have voted')
        toast.error('You have already voted In this category')
        router.push(redirect)
      } else {
        console.log('You have not voted')
      }
    })
    // if (voted) {
    //   toast.success('You have already voted In this category')
    //   router.push(redirect)
    // }
    setCategoryId(category.id)
    setOrganizationId(category.event.id)
    setEventId(category.organization.id)
  }, [category, authUser, notAuthredirect, redirect])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log({ nomineeId, categoryId, organizationId, eventId })
    dispatch(voteAction({ nomineeId, categoryId, organizationId, eventId }))
    toast.success('Your vote In this category has recorderd')
    router.push(redirect)
  }

  return (
    <Layout>
      <div className='container mt-10 mb-60'>
        <ToastContainer />
        <h1 className='text-center font-bold text-2xl text-secondary mb-5'>
          {category.name}
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10'>
          {nominees &&
            nominees.map((nominee) => (
              <div className='' key={nominee.id}>
                {nominee.categories.some(
                  (nomCategory) => nomCategory.id === category.id
                ) && (
                  <div className=''>
                    <div className='h-72 mb-3'>
                      <img
                        src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                        alt=''
                        className='h-full w-9/12 mx-auto rounded-2xl'
                      />
                    </div>
                    <div className=''>
                      <h1
                        key={nominee.id}
                        className='text-center text-secondary text-lg'
                      >
                        {nominee.user.name}
                      </h1>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                      <div className='my-2 flex flex-col'>
                        <label htmlFor='email' className='font-semibold'>
                          {`Please type ${nominee.id} to vote for ${nominee.user.name}`}
                        </label>
                        <input
                          required
                          type='text'
                          placeholder={`Please type ${nominee.id} to vote`}
                          name='nominee'
                          id='nominee'
                          value={nomineeId}
                          onChange={(e) => setNomineeId(e.target.value)}
                          className='p-2 rounded-md text-primary'
                        />
                      </div>

                      <input
                        type='submit'
                        value='Vote'
                        className={`bg-secondary p-3 rounded-2xl text-primary w-full mt-3 cursor-pointer hover:bg-white hover:text-primary ${
                          nominee.id == nomineeId ? `block` : `hidden`
                        } `}
                      />
                      {/* <button type='button' disabled>
                        Vote
                      </button> */}
                    </form>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`)

//   const categories = await res.json()
//   console.log(categories)

//   const paths = categories.map((category) => ({
//     params: { slug: category.slug },
//   }))

//   return {
//     paths,

//     fallback: true, // See the "fallback" section below
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const categoriesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories?slug=${slug}`
//   )
//   const categories = await categoriesRes.json()

//   if (!categories) {
//     return {
//       notFound: true,
//     }
//   }

//   const nomineesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/nominees`
//   )
//   const nominees = await nomineesRes.json()
//   console.log(nominees)

//   return {
//     props: {
//       category: categories[0],
//       nominees,
//     }, // will be passed to the page [component as props
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories?slug=${slug}`
  )
  const categories = await categoriesRes.json()

  const nomineesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/nominees`
  )
  const nominees = await nomineesRes.json()
  // console.log(nominees)

  return {
    props: {
      category: categories[0],
      nominees,
    },
  }
}
