export const serverConfig = {
    cookieName: process.env.AUTH_COOKIE_NAME!,
    cookieSignatureKeys: [process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!, process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!],
    cookieSerializeOptions: {
      path: "/",
      httpOnly: false,
      secure: process.env.USE_SECURE_COOKIES === "true",
      sameSite: "lax" as const,
      maxAge: 60,
    },
    serviceAccount: {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
      clientEmail: process.env.NEXT_PRIVATE_CLIENT_EMAIL!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      privateKey: process.env.NEXT_PRIVATE_FIREBASE_API_KEY?.replace(/\\n/gm, "\n")!,
    }
  };
  
  export const clientConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };