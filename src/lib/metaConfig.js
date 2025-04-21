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
    ...og,
  },
  twitter: {
    card: 'summary_large_image',
    ...twitter,
  },
});
