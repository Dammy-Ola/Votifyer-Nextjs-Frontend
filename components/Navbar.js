import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className='bg-primary p-3'>
        <div className='container flex items-center flex-wrap'>
          <Link href='/'>
            <a className='inline-flex items-center p-2 mr-4 '>
              <span className='text-white font-bold capitalize tracking-wide'>
                Votifyer From TechBiznez
              </span>
            </a>
          </Link>
          <button
            className=' inline-flex p-3 hover:bg-secondary rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${
              active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-secondary hover:text-primary '>
                  Home
                </a>
              </Link>
              <Link href='/organizations'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-secondary hover:text-primary'>
                  Organizations
                </a>
              </Link>
              <Link href='/events'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-secondary hover:text-primary'>
                  Events
                </a>
              </Link>
              <Link href='/account/login'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-secondary hover:text-primary'>
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
