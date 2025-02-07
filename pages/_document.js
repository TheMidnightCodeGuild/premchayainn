import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Welcome to Hotel Prem Chaya Inn in Ujjain - Your perfect spiritual stay near Mahakaleshwar Temple. Experience comfortable accommodation with modern amenities and traditional hospitality. Ideal location for temple visits and pilgrimages."
        />
        <meta
          name="keywords"
          content="Hotel Prem Chaya Inn, hotels in Ujjain, Ujjain hotels, Mahakaleshwar temple accommodation, luxury hotel Ujjain, best hotel near Mahakaleshwar temple, hotel booking Ujjain"
        />
        <meta
          property="og:title"
          content="Hotel Prem Chaya Inn - Luxury Stay Near Mahakaleshwar Temple, Ujjain"
        />
        <meta
          property="og:description"
          content="Experience divine hospitality at Hotel Prem Chaya Inn, located steps away from Mahakaleshwar Temple. Modern amenities with traditional charm for a comfortable spiritual stay."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Hotel Prem Chaya Inn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
