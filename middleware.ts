import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Omite rutas internas, API y archivos estáticos
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
