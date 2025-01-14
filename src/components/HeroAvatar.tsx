import type { ReactNode } from 'react';

type IHeroAvatarProps = {
  title: ReactNode;
  description: ReactNode;
  avatar: ReactNode;
  languages: ReactNode;
  frameworks: ReactNode;
  socialButtons: ReactNode;
};

const HeroAvatar = (props: IHeroAvatarProps) => (
  <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
    <div>
      <h1 className="text-3xl font-bold">{props.title}</h1>

      <p className="mt-6 text-xl leading-9">{props.description}</p>
      <p className="mt-3 text-xl">
        <b>Languages:</b> {props.languages} <br></br>
        <b>Frameworks:</b> {props.frameworks} <br></br>
      </p>
      <div className="mt-3 flex gap-4">{props.socialButtons}</div>
    </div>

    <div className="shrink-0">{props.avatar}</div>
  </div>
);

export { HeroAvatar };
