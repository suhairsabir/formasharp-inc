import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/mechanical-design-services-toronto",
        destination: "/product-design",
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
        destination: "/reverse-engineering",
        permanent: true,
      },
      {
        source: "/blog/blog-post-title-one-9bmb7",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/ProductDesign",
        destination: "/product-design",
        permanent: true,
      },
      {
        source: "/productdesign",
        destination: "/product-design",
        permanent: true,
      },
      {
        source: "/IndustrialDesign",
        destination: "/industrial-design",
        permanent: true,
      },
      {
        source: "/industrialdesign",
        destination: "/industrial-design",
        permanent: true,
      },
      {
        source: "/DesignForManufacturing",
        destination: "/design-for-manufacturing",
        permanent: true,
      },
      {
        source: "/designformanufacturing",
        destination: "/design-for-manufacturing",
        permanent: true,
      },
      {
        source: "/CADServices",
        destination: "/cad-services",
        permanent: true,
      },
      {
        source: "/cadservices",
        destination: "/cad-services",
        permanent: true,
      },
      {
        source: "/ReverseEngineering",
        destination: "/reverse-engineering",
        permanent: true,
      },
      {
        source: "/reverseengineering",
        destination: "/reverse-engineering",
        permanent: true,
      },
      {
        source: "/3dprinting",
        destination: "/3d-printing",
        permanent: true,
      },
      {
        source: "/3Dprinting",
        destination: "/3d-printing",
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
