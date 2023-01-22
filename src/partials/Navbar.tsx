import { Logo } from '@/components/Logo';
import { NavbarTwoColumns } from '@/components/NavbarTwoColumns';
import { NavMenu } from '@/components/NavMenu';
import { Section } from '@/components/Section';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              width={50}
              height={50}
              src="/assets/images/logo.png"
              style={{ marginRight: '10px' }}
              alt="Logo"
            />
          }
          name="HAV"
        />
      </a>

      <NavMenu>
        {/* <NavMenuItem href="/posts">Posts</NavMenuItem> */}
        {/* <NavMenuItem href="/#">Contact</NavMenuItem> */}
        {/* <NavMenuItem href="https://github.com/navi-guy">GitHub</NavMenuItem> */}
        {/* <NavMenuItem href="/">Twitter</NavMenuItem> */}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
