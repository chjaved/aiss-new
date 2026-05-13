import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp, BackToTop } from "@/components/layout/Floaters";
import { site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[120px] font-extrabold leading-none text-[#0049D7]">404</h1>
      <h2 className="mt-2 font-display text-2xl font-bold">Page Not Found</h2>
      <p className="mt-3 max-w-md text-sm text-[#5B6478]">
        Looks like this page got lost in the cloud. Let's get you back to safety.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-[#FFB400] px-6 py-3 font-heading font-bold text-[#FFFFFF] transition hover:brightness-110"
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="rounded-full border border-[#0049D7] px-6 py-3 font-heading font-semibold text-[#0049D7] transition hover:bg-[rgba(0,73,215,0.1)]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-sm text-[#5B6478]">{error.message || "Something went wrong on our end."}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-[#FFB400] px-5 py-2.5 text-sm font-bold text-[#FFFFFF]"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-[#0049D7] px-5 py-2.5 text-sm font-semibold text-[#0049D7]">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AI Software Solution | AI & Software Development Malaysia" },
      {
        name: "description",
        content:
          "AI Software Solutions delivers AI-powered software solutions for government, enterprise, and healthcare in Malaysia. Custom software, automation, SmartForce DMS. Based in Petaling Jaya.",
      },
      { name: "keywords", content: "AI software Malaysia, software development Malaysia, AI company Petaling Jaya, government software Malaysia, healthcare software Malaysia, SmartForce DMS" },
      { name: "author", content: site.name },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_MY" },
      { property: "og:title", content: "AI Software Solution | AI & Software Development Malaysia" },
      { property: "og:description", content: "AI Software Solutions delivers AI-powered software solutions for government, enterprise, and healthcare in Malaysia. Custom software, automation, SmartForce DMS. Based in Petaling Jaya." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#FFFFFF" },
      { name: "twitter:title", content: "AI Software Solution | AI & Software Development Malaysia" },
      { name: "twitter:description", content: "AI Software Solutions delivers AI-powered software solutions for government, enterprise, and healthcare in Malaysia. Custom software, automation, SmartForce DMS." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          url: `https://${site.domain}`,
          email: site.email,
          telephone: "+60330073021",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C-6-25, Centum @ Oasis Corporate Park, No. 2, Jalan PJU 1A/2, Ara Damansara",
            addressLocality: "Petaling Jaya",
            addressRegion: "Selangor",
            postalCode: "47301",
            addressCountry: "MY",
          },
          openingHours: "Mo-Fr 09:00-18:00",
          areaServed: "Malaysia",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main" className="min-h-screen pt-[68px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
      <Toaster theme="dark" position="top-right" richColors />
    </QueryClientProvider>
  );
}
