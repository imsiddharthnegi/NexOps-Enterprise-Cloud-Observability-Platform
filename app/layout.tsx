import "styles/tailwind.css"

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexOps - Enterprise Cloud Observability Platform',
  description: 'A comprehensive platform for enterprise cloud observability, providing insights into API requests, server load, and recent alerts.',
  openGraph: {
    title: 'NexOps - Enterprise Cloud Observability Platform',
    description: 'A comprehensive platform for enterprise cloud observability, providing insights into API requests, server load, and recent alerts.',
    url: 'https://next-enterprise.vercel.app/', // Replace with your actual deployment URL
    images: [
      {
        url: 'https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'NexOps Platform Screenshot',
      },
    ],
    siteName: 'NexOps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexOps - Enterprise Cloud Observability Platform',
    description: 'A comprehensive platform for enterprise cloud observability, providing insights into API requests, server load, and recent alerts.',
    images: ['https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png'], // Replace with your actual image URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
