import React from 'react'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps = async () => {
	const response = await fetch('https://avo-store-8jq9.vercel.app/api/avo')
  console.log(response)
  const { data }: TAPIAvoResponse = await response.json()
	// Devuelve un objecto el cual luego se pasara como prop
	// en el componente

  return {
    props: {
      productList: data,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
