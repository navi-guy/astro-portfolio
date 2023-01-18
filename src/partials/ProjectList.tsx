import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Tec Scraper"
        description="A web scraping automation framework for crawling digital products like laptops 
        and cellphones. Also it supports automation, manage proxies, headless, and more."
        link="/"
        img={{
          src: '/assets/images/digital.png',
          alt: 'Project technology products scraper',
        }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Java</Tags>
            <Tags color={ColorTags.ORANGE}>Jsoup</Tags>
            <Tags color={ColorTags.EMERALD}>Selenium</Tags>
            <Tags color={ColorTags.LIME}>Spring</Tags>
          </>
        }
      />
      <Project
        name="Kaify - Price comparator"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/balance3.png',
          alt: 'Project Price Comparator',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.YELLOW}>Java</Tags>
            <Tags color={ColorTags.LIME}>Spring</Tags>
            <Tags color={ColorTags.CYAN}>TailwindCSS</Tags>
          </>
        }
      />
      <Project
        name="DFinder - Metasearch Engine"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/finder.png', alt: 'Project Metasearch' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>BeautifulSoap</Tags>
            <Tags color={ColorTags.AMBER}>scikit-learn</Tags>
            {/* <Tags color={ColorTags.NEUTRAL}>Pandas</Tags> */}
            <Tags color={ColorTags.ROSE}>TensorFlow</Tags>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.SLATE}>Flask</Tags>
          </>
        }
        // chatbot
        // ecommerce using laravel?
        // metabus
        // virtual assitant
        // payment system cryptos blockchain
        // Task tracker activities
      />
    </div>
  </Section>
);

export { ProjectList };
