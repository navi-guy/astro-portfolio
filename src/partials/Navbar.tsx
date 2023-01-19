import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

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
        {/* <NavMenuItem href="/posts">Blogs</NavMenuItem> */}
        <NavMenuItem href="/#">Contact</NavMenuItem>
        {/* <NavMenuItem href="https://github.com/navi-guy">GitHub</NavMenuItem> */}
        {/* <NavMenuItem href="/">Twitter</NavMenuItem> */}
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
