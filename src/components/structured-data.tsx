export default function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dilmurod Yusupov',
        jobTitle: 'AI Specialist & Digital Producer',
        description: 'AI Specialist, Prompt Engineer, and Digital Media Producer specializing in AgroTech startups and AI solutions',
        url: 'https://dilmurod-yusupov.vercel.app',
        image: 'https://dilmurod-yusupov.vercel.app/assets/images/profile-photo-new.png',
        sameAs: [
            // Add your social media URLs here when available
            // 'https://linkedin.com/in/dilmurod-yusupov',
            // 'https://github.com/dilmurod-yusupov',
        ],
        alumniOf: [
            {
                '@type': 'EducationalOrganization',
                name: 'International Agriculture University',
            },
            {
                '@type': 'EducationalOrganization',
                name: 'Najot Ta\'lim IT Academy',
            },
            {
                '@type': 'EducationalOrganization',
                name: 'JDPI Akademik Litseyi',
            },
        ],
        knowsAbout: [
            'Artificial Intelligence',
            'Prompt Engineering',
            'Generative AI',
            'Digital Media Production',
            'AgroTech',
            'Machine Learning',
            'AI Bots Development',
        ],
        award: [
            'AI500! Hackathon - Stage 1',
            'Five Million Prompters Initiative',
            'Introduction to Generative AI - Google Cloud',
            'Angel Pitch Day',
            'Startup Ambassador Camp',
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
