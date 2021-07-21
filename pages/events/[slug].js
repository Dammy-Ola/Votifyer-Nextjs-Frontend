import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'
import Layout from '../../components/Layout'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SingleEventPage({ event, categories, nominees }) {
  const dispatch = useDispatch()
  // Bringing our auth user from redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, authUser } = userLogin

  const router = useRouter()

  const notAuthredirect = '/account/login'

  useEffect(() => {
    if (!authUser) {
      error && toast.error(error)
      router.push(notAuthredirect)
    } else {
    }
  }, [router, authUser, notAuthredirect])

  return (
    <Layout>
      <div className='container mt-10'>
        <h1 className='font-bold text-4xl text-center text-secondary'>
          Awards Categories
        </h1>
        <div className='mt-10'>
          <div className=''>
            {event && (
              <CategoryItem categories={categories} nominees={nominees} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events`)

  const events = await res.json()

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }))

  return {
    paths,

    fallback: true, // See the "fallback" section below
  }
}

export async function getStaticProps({ params: { slug } }) {
  const eventsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/events?slug=${slug}`
  )
  const events = await eventsRes.json()
  // console.log(events)

  if (!events) {
    return {
      notFound: true,
    }
  }

  const categoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories?event.slug=${slug}`
  )
  const categories = await categoriesRes.json()

  const nomineesRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/nominees`
  )
  const nominees = await nomineesRes.json()
  console.log(nominees)

  return {
    props: {
      event: events[0],
      categories,
      nominees,
    }, // will be passed to the page component as props
    revalidate: 1,
  }
}
