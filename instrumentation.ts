// instrumentation.ts
import * as Sentry from "@sentry/nextjs";

export function register() {
  Sentry.init({
    dsn: "https://f83389bf1a254f1e85fafc770787075a@o4507287584047104.ingest.us.sentry.io/4507287589027840",
    tracesSampleRate: 1.0,
    debug: false,
    // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: process.env.NODE_ENV === 'development',
  });
}
