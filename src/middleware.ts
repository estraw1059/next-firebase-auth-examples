import { NextRequest, NextResponse } from "next/server";
import { authMiddleware, redirectToHome, redirectToLogin } from "next-firebase-auth-edge";
import { clientConfig, serverConfig } from "@/util/config";

const PUBLIC_PATHS = ['/register', '/login'];

export async function middleware(request: NextRequest) {
  return await authMiddleware(request, {
    loginPath: "/api/login",
    logoutPath: "/api/logout",
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
    handleValidToken: async ({}, headers) => {
      if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
        return redirectToHome(request);
      }
      return NextResponse.next({
        request: {
          headers
        }
      });
    },
    handleInvalidToken: async (reason) => {
      console.info("Missing or malformed credentials", {reason});
      
      return redirectToLogin(request,{
        path: '/login',
        publicPaths: PUBLIC_PATHS
      });
    },
    handleError: async (error) => {
      console.error("An error occurred", {error});

      return redirectToLogin(request, {
        path: '/login',
        publicPaths: PUBLIC_PATHS
      });
    }
  });
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|api|.*\\.).*)",
    "/api/login",
    "/api/logout",
  ],
};