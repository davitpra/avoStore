import React from 'react'
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'
// importamos el tipo de dato desde NEXT.
import { GetStaticPaths, GetStaticProps } from 'next'

// Indicamos a NEXT cuales son las paginas dinamicasque tendremos de antemano x ser Statis
export const getStaticPaths: GetStaticPaths = async () => {
  // hacemos una consulta a la api
  const response = await fetch('https://avo-store-8jq9.vercel.app/api/avo')
  // desestructuramos la data y cambiamos de nombre a productList.
  const { data: productList }: TAPIAvoResponse = await response.json()
//generamos un objeto de tipo {params : {id: ....}} con cada uno de las rutas
  const paths = productList.map((avo) => ({
    params: {
      id: avo.id
    },
  }))

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  }
}

// GetStatictProps recibe como parametro el context
export const getStaticProps: GetStaticProps = async (context) => {
  //desestructuramos los datos de la URL
  const {params} = context
  // hacemos la consulta API x la URL
  const response = await fetch(`https://avo-store-8jq9.vercel.app/api/avo/${params?.id}`)
  const data = await response.json()
  // enviamos como propos la data de cada producto.
  return {
    props: {
      product: data,
    },
  }
}

const ProductPage = ({product}:{product:TProduct}) => {

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
