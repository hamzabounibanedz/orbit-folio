import Head from "next/head";

export default function PageHead(props) {
  const {
    title = "Orbit Folio - connect to your audience with a single link",
    description = "Showcase the content you create and your projects in one place. Make it easier for people to find, follow and subscribe.",
    ogTitle = "Orbit Folio - connect to your audience with a single link",
    ogDescription = "Showcase the content you create and your projects in one place. Make it easier for people to find, follow and subscribe.",
    ogUrl = process.env.NEXT_PUBLIC_BASE_URL || "/",
    ogImage = "/brand-mark.svg",
    ogType = "image/png",
  } = props;

  const children = props.children;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/brand-mark.svg" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <link rel="manifest" href="/manifest.json" />

      {children}
    </Head>
  );
}
