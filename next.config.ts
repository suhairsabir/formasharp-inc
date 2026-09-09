import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/mechanical-design-services-toronto",
        destination: "/ProductDesign",
        permanent: true,
      },
      {
        source: "/product-design-portfolio-with-cases/cabinet-basket-organizer-design",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/product-design-portfolio-with-cases/adapter-bracket",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/product-design-portfolio-with-cases/:slug*",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/digital-reconstruction",
        destination: "/ReverseEngineering",
        permanent: true,
      },
      {
        source: "/blog/blog-post-title-one-9bmb7",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/bento/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
