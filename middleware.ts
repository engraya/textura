import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // An array of public routes that don't require authentication.
  // @ts-ignore
  publicRoutes: [
    '/',
    "/api/webhook/clerk",
    '/api/uploadthing'
  ],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: [
    "/api/webhook/clerk",
    '/api/uploadthing'
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};