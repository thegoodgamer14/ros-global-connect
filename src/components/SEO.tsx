import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    path?: string;
    image?: string;
}

const SITE_URL = 'https://rosglobal.com';
const DEFAULT_IMAGE = '/og-image.png';

export const SEO = ({
    title,
    description,
    keywords,
    path = '',
    image = DEFAULT_IMAGE,
}: SEOProps) => {
    const fullUrl = `${SITE_URL}${path}`;
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ROS Global Solutions FZE',
        url: SITE_URL,
        logo: `${SITE_URL}/og-image.png`,
        description: 'Total engineering solutions provider specializing in Oil & Gas, HVAC, Data Center, and Rhamnolipids products.',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+971-6-704-1447',
            email: 'inquiry@rosglobal.com',
            contactType: 'customer service',
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'UAE',
        },
        sameAs: [
            'https://www.linkedin.com/company/ros-global-solutions',
        ],
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="ROS Global Solutions" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
