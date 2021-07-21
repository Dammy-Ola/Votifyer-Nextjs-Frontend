import Link from 'next/link'

export default function CategoryItem({ categories, nominees }) {
  return (
    <div className=''>
      <div className=''>
        {categories &&
          categories.map((category) => (
            <div className=''>
              <h1
                key={category.id}
                className='font-bold text-2xl mb-5 text-center lg:inline-block'
              >
                {category.name}
              </h1>
              <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16'>
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
                            <form className='flex justify-center'>
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
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
