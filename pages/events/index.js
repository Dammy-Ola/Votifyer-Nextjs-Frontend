import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import EventItem from '../../components/EventItem'

export default function EventsPage({ events }) {
  return (
    <Layout title='Votifyer - Events happening'>
      <div className='container'>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl text-center text-secondary'>
            Events Happening...
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

export async function getServerSideProps({ req }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/events`)
  const events = await res.json()
  console.log(req.headers.cookie)

  if (!events) {
    return {
      notFound: true,
    }
  }

  return {
    props: { events }, // will be passed to the page component as props
    // revalidate: 1,
  }
}
