import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'KalaKriti - ECommerce for Artisans',
  description:
    "कलाkriti is an e-commerce platform that seeks to improve the online market for small-town and rural handicrafts companies. By offering a shared platform for the production, marketing, and sale of high-quality handicrafts and products, this application seeks to promote the Indian handicraft industry globally. India's artisan legacy is both real and intangible, and when combined with its regional distinctiveness, it gives the nation a competitive worldwide advantage. With the correct assistance and a conducive business environment, the Indian craft market has the potential to grow to be a billion-dollar industry. Access to new markets will be increased by creating a systematic strategy that fosters the intrinsic worth of craft skills and creates opportunities for product design and manufacturing. In addition, as the industry develops and receives more traction, leveraging e-commerce for online visibility and operational efficiencies will show to be a crucial success factor.",
  keywords: 'pots, mugs, utensils',
};

export default Meta;
