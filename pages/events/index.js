import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'

const index = () => {
  return (
    <Layout title='Votifyer - Events happening'>
      <div className='container'>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl text-center text-secondary'>
            Events Happening
          </h1>
          <div className='mt-10'>
            {/* Events */}
            <div className='grid grid-cols-4 gap-4 mb-10'>
              <div className='bg-gray-100'>
                <Link href='/events/esaknust'>
                  <a>
                    <div className=''>
                      <img
                        src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                        alt=''
                      />
                    </div>
                    <div className='p-3'>
                      <h3 className='font-semibold text-xl text-primary'>
                        ESA Dinner 2021
                      </h3>
                      <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                    </div>
                  </a>
                </Link>
              </div>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
            </div>
            {/* Events */}
            <div className='grid grid-cols-4 gap-4 mb-5'>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
              <div className='bg-gray-100'>
                <div className=''>
                  <img
                    src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-3'>
                  <h3 className='font-semibold text-xl text-primary'>
                    ESA Dinner 2021
                  </h3>
                  <h5 className='text-sm text-gray-900'>ESA KNUST</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
