import Link from 'next/link'
import Layout from '../../components/Layout'
import OrganizationItem from '../../components/OrganizationItem'

export default function OrganizationsPage({ organizations }) {
  console.log(organizations)
  return (
    <Layout title='Votifyer - Events happening'>
      <div className='container'>
        <div className='mt-10'>
          <h1 className='font-bold text-4xl text-center text-secondary'>
            Organizations
          </h1>
          <div className='mt-10'>
            {/* Organizations */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10'>
              {organizations &&
                organizations.map((organization) => (
                  <OrganizationItem
                    key={organization.id}
                    organization={organization}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/organizations`
  )
  const organizations = await res.json()
  console.log(organizations)

  if (!organizations) {
    return {
      notFound: true,
    }
  }

  return {
    props: { organizations }, // will be passed to the page component as props
    revalidate: 1,
  }
}
