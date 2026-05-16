import type { NextConfig } from "next";

// basePath solo cuando se sirve desde subdirectorio de GitHub Pages
// Una vez que neurokinesiaim.com.ar esté activo, eliminar basePath y assetPrefix
const isProd = process.env.NODE_ENV === "production";
const useSubpath = process.env.USE_SUBPATH === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProd && useSubpath
    ? {
        basePath: "/neurokinesia-im",
        assetPrefix: "/neurokinesia-im/",
      }
    : {}),
};

export default nextConfig;
