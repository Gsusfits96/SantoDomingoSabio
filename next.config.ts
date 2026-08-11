import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint se ejecuta manualmente en desarrollo; no bloquea el build
    ignoreDuringBuilds: true,
  },
};

export default withNextIntl(nextConfig);
