import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    path?: string;
    image?: string;
    pageType?: 'home' | 'product' | 'contact' | 'service';
    breadcrumbs?: Array<{ name: string; url: string }>;
}

const SITE_URL = 'https://rosglobal.com';
const DEFAULT_IMAGE = '/og-image.png';
const COMPANY_NAME = 'ROS Global Solutions FZE';

export const SEO = ({
    title,
    description,
    keywords,
    path = '',
    image = DEFAULT_IMAGE,
    pageType = 'home',
    breadcrumbs,
}: SEOProps) => {
    const fullUrl = `${SITE_URL}${path}`;
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    // Organization Schema (on all pages)
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: COMPANY_NAME,
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/og-image.png`,
        },
        description: 'Total engineering solutions provider specializing in Oil & Gas, HVAC, Data Center, and Rhamnolipids products.',
        email: 'inquiry@rosglobal.com',
        telephone: '+971-6-704-1447',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '16G-01, Hamriya Free Zone',
            addressLocality: 'Sharjah',
            postalCode: '52319',
            addressCountry: 'AE',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+971-6-704-1447',
                contactType: 'customer service',
                email: 'inquiry@rosglobal.com',
                availableLanguage: ['English', 'Arabic'],
            },
            {
                '@type': 'ContactPoint',
                telephone: '+971-54-791-7288',
                contactType: 'sales',
                email: 'sales@rosglobal.com',
            },
        ],
        sameAs: [
            'https://www.linkedin.com/company/ros-global-solutions',
        ],
    };

    // WebSite Schema (on home page)
    const webSiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: COMPANY_NAME,
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/?s={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    // WebPage Schema (on all pages)
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${fullUrl}/#webpage`,
        url: fullUrl,
        name: title,
        description: description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        dateModified: new Date().toISOString().split('T')[0],
    };

    // LocalBusiness Schema (enhanced for local SEO)
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: COMPANY_NAME,
        image: `${SITE_URL}/og-image.png`,
        url: SITE_URL,
        telephone: '+971-6-704-1447',
        email: 'inquiry@rosglobal.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '16G-01, Hamriya Free Zone',
            addressLocality: 'Sharjah',
            addressRegion: 'Sharjah',
            postalCode: '52319',
            addressCountry: 'AE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.505,
            longitude: 55.593,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
        },
        priceRange: '$$',
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`,
        })),
    } : null;

    // Combine schemas
    const schemas: Record<string, unknown>[] = [
        organizationSchema,
        webPageSchema,
    ];

    if (pageType === 'home') {
        schemas.push(webSiteSchema);
        schemas.push(localBusinessSchema);
    }

    if (breadcrumbSchema) {
        schemas.push(breadcrumbSchema);
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="ROS Global Solutions" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Additional SEO Meta */}
            <meta name="author" content="ROS Global Solutions FZE" />
            <meta name="geo.region" content="AE-SH" />
            <meta name="geo.placename" content="Sharjah" />

            {/* JSON-LD Structured Data */}
            {schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
