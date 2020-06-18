import { NextSeo } from 'next-seo';

const About = () => {
  const SEO = {
    title: 'About page',
    description: 'Just your normla about page',
    
    openGraph: {
      title: 'About page',
      description: 'Just your normla about page',
    }
  };

  return (
    <>
      <NextSeo {...SEO} />
      <h1>I'm about page</h1>
    </>
  );
};

export default About;
