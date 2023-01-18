import { GradientText } from '@/components/GradientText';
import { HeroAvatar } from '@/components/HeroAvatar';
import { HeroSocial } from '@/components/HeroSocial';
import { Section } from '@/components/Section';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Henry</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a{' '}
          <b>
            <GradientText>developer</GradientText>
          </b>{' '}
          based in Lima, Peru. I enjoy automating tasks, creating digital
          products like web or desktop desktop applications, developing scraping
          bots and more.
        </>
      }
      languages="Java, Python, PHP, Javascript."
      frameworks="Spring, Flask, Laravel, Angular, NextJs, Tailwind CSS."
      avatar={
        <img
          className="h-60 w-60"
          src="\assets\images\carita.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/navichicken">
            <HeroSocial src="/assets/images/twitter.png" alt="Twitter icon" />
          </a>
          <a href="https://www.linkedin.com/in/henry-aliaga/">
            <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
          </a>
          <a href="https://github.com/navi-guy">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <a href="mailto:henry.aliaga@outlook.es">
            <HeroSocial src="/assets/images/correo.png" alt="Email icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
