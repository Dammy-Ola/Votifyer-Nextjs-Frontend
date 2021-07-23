import Link from 'next/link'
export default function Footer() {
  return (
    <div className='my-10 text-center font-bold'>
      Votifyer From{' '}
      <Link href='https:techbiznez.com/' passHref={true}>
        <a target='__blank' className='text-secondary'>
          TechBiznez
        </a>
      </Link>
    </div>
  )
}
