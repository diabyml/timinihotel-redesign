export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: "Timini Hôtel",
        description: "Hôtel éco-responsable à Ségou offrant une expérience authentique et luxueuse.",
        image: "https://timinihotel.com/images/hero-cinematic.png",
        address: {
            "@type": "PostalAddress",
            streetAddress: "ATT Bougou Sud Extension",
            addressLocality: "Ségou",
            addressRegion: "ATT Bougou Sud Extension",
            postalCode: "+223",
            addressCountry: "ML",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 13.4333,
            longitude: -6.2667,
        },
        url: "https://timinihotel.com",
        telephone: "+223 74 47 40 40",
        priceRange: "35000",
        amenityFeature: [
            {
                "@type": "LocationFeatureSpecification",
                name: "Piscine",
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: "Restaurant",
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: "Salle de Conférence",
                value: true,
            },
            {
                "@type": "LocationFeatureSpecification",
                name: "Wi-Fi Gratuit",
                value: true,
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
