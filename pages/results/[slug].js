import Link from 'next/link'
import Layout from '../../components/Layout'

// export default function ResultCategoryPage({ category, nominees }) {
export default function ResultCategoryPage() {
  return (
    <Layout>
      <div className='container mt-10'>
        {/* <h1 className='font-bold text-3xl text-center text-secondary'>
          {category.name} ({category.votes.length} votes)
        </h1>

        <div>
          {nominees.map((nominee) => (
            <div
              className='flex justify-between hover:bg-green-600'
              key={nominee.id}
            >
              <div className='mt-5'>{nominee.user.name}</div>
              <div className=''>{nominee.votes.length} Votes</div>
            </div>
          ))}
        </div> */}
        <div>
          <Link href='/results'>
            <a className='text-center block'>Go Back</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

// export async function getServerSideProps({ query: { slug } }) {
//   const nomineesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/nominees?categories.slug=${slug}`
//   )
//   const nominees = await nomineesRes.json()

//   const categoriesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories?slug=${slug}`
//   )
//   const categories = await categoriesRes.json()

//   // const nomineesRes = await fetch(
//   //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/nominees`
//   // )
//   // const nominees = await nomineesRes.json()
//   // console.log(nominees)

//   return {
//     props: {
//       // event: events[0],
//       category: categories[0],
//       nominees,
//     },
//   }
// }
