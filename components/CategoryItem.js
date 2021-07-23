import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function CategoryItem({ categories, nominees }) {
  const [nomineeId, setNomineeId] = useState('')
  const [categoryId, setCategoryId] = useState('')

  const router = useRouter()
  const redirect = '/events/esa-knust-dinner-awards-night'

  const onSubmitHandler = (e) => {
    e.preventDefault()

    console.log(nomineeId)
    // router.push(redirect)
  }
  // console.log(categoryId)

  return (
    <div className=''>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16'>
        {categories &&
          categories.map((category) => (
            <div className='' key={category.id}>
              <div className='bg-gray-100'>
                <Link href={`/category/${category.slug}`}>
                  <a>
                    <div className=''>
                      <img
                        src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                        alt=''
                      />
                    </div>
                    <div className='p-3'>
                      <h3 className='font-bold text-2xl text-primary mb-5 text-center lg:inline-block'>
                        {category.name}
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>
              {/* <h1
                key={category.id}
                className='font-bold text-2xl mb-5 text-center lg:inline-block'
              >
                {category.name}
              </h1> */}
              {/* <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16'>
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
                            <form
                              onSubmit={onSubmitHandler}
                              className='flex justify-center'
                            >
                              <input
                                type='text'
                                value={nomineeId}
                                name='nominee'
                                onChange={(e) => setNomineeId(nominee.id)}
                                className='bg-transparent'
                              />
                              <input
                                type='text'
                                name='nominee'
                                id='nominee'
                                value={categoryId}
                                onChange={(e) => setNomineeId(nominee.id)}
                                // // onSubmit={(e) => setNomineeId(e.target.value)}
                                // className='bg-transparent text-transparent'
                              />
                              <input
                                type='submit'
                                value='Vote'
                                className='bg-secondary p-3 rounded-2xl text-primary w-9/12 mt-3 cursor-pointer hover:bg-white hover:text-primary'
                              />
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div> */}
            </div>
          ))}
      </div>
    </div>
  )
}
