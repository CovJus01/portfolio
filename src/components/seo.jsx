import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEO = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content="https://justincovach.netlify.app" />
      <meta property="og:description" content={seo.description} />
      {children}
    </>
  );
};
