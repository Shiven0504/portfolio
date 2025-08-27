import * as Sentry from "@sentry/nextjs";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "",
  debug: process.env.NODE_ENV !== "production",

  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,

  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: process.env.NODE_ENV === "production" ? 0.01 : 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
    }),
    new BrowserTracing(),
  ],
});

