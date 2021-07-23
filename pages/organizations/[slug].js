import EventItem from '../../components/EventItem'
import Layout from '../../components/Layout'

export default function OrganizationSinglePage({ events }) {
  return (
    <Layout>
      <div className='container mt-10'>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl text-center text-secondary'>
            Awards Organize by ESA {events[0].organization.name}
          </h1>
          <div className='mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10'>
              {events &&
                events.map((event) => (
                  <EventItem key={event.id} event={event} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events`)

//   const events = await res.json()

//   const paths = events.map((event) => ({
//     params: { slug: event.slug },
//   }))

//   return {
//     paths,

//     fallback: true, // See the "fallback" section below
//   }
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/events?organization.slug=${slug}`
//   )
//   const events = await res.json()
//   console.log(events)

//   if (!events) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { events }, // will be passed to the page component as props
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/events?organization.slug=${slug}`
  )
  const events = await res.json()

  return {
    props: {
      events,
    },
  }
}
