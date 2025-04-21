export const createMetaConfig = ({
  title,
  description,
  keywords,
  canonical,
  og,
  twitter,
}) => ({
  title,
  description,
  keywords,
  canonical,
  og: {
    siteName: 'FadiLogic',
    locale: 'en_US',
    type: 'website',
    image: 'https://fadilogic.serp24.online/images/FadiLogic.png', // Default image
    imageWidth: '1200',
    imageHeight: '630',
    imageAlt: 'FadiLogic',
    imageType: 'image/png',
    ...og,
  },
  twitter: {
    card: 'summary_large_image',
    image: 'https://fadilogic.serp24.online/images/FadiLogic.png', // Default image
    ...twitter,
  },
});
