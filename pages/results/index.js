import Link from 'next/link'
import Layout from '../../components/Layout'

// export default function ResultsPage({ categories, votes }) {
export default function ResultsPage() {
  return (
    <Layout>
      <div className='container mt-10'>
        {/* <h1 className='font-bold text-3xl text-center text-secondary'>
          This is the results page ({votes} votes)
        </h1>

        <div>
          {categories.map((category) => (
            <div className='flex justify-between hover:bg-green-600'>
              <div className='mt-5' key={category.id}>
                <Link href={`results/${category.slug}`}>{category.name}</Link>
              </div>
              <div className='text-secondary'>
                {category.votes.length} votes
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   const CategoriesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories?_sort=name:ASC`
//   )
//   const categories = await CategoriesRes.json()

//   const votesRes = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/votes/count`
//   )
//   const votes = await votesRes.json()
//   console.log(votes)

//   if (!categories) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { categories, votes }, // will be passed to the page component as props
//     // revalidate: 1,
//   }
// }
