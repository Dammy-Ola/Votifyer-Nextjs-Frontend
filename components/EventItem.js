import Link from 'next/link'

export default function EventItem({ event }) {
  return (
    <div className='bg-gray-100'>
      <Link href={`/events/${event.slug}`}>
        <a>
          <div className=''>
            <img
              src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
              alt=''
            />
          </div>
          <div className='p-3'>
            <h3 className='font-semibold text-xl text-primary mb-2'>
              {event.name}
            </h3>
            <h5 className='text-sm text-gray-900'>
              By {event.organization.name}
            </h5>
          </div>
        </a>
      </Link>
    </div>
  )
}
