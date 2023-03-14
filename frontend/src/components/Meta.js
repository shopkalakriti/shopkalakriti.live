import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Kalakriti',
  description: 'We sell the best artistic handmade products for cheap',
  keywords: 'pots, mugs, utensils',
}

export default Meta
