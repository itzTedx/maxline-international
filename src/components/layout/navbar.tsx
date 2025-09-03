import { NavigationMenu } from "../ui/navigation-menu";
import { NAV_DISTRIBUTIONS, NAV_SERVICES, NAV_TRADINGS } from "./constant";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  const navItems: NavLinks = {
    distributions: NAV_DISTRIBUTIONS,
    tradings: NAV_TRADINGS,
    services: NAV_SERVICES,
  };

  return (
    <NavigationMenu
      role="navigation"
      id="main-nav"
      className="group sticky top-0 z-40 md:container max-md:max-w-full md:fixed md:left-1/2 md:top-4 md:mx-auto md:max-w-6xl md:-translate-x-1/2 md:px-0"
    >
      <MobileNav links={navItems} className="md:hidden" />

      <MegaMenu links={navItems} className="hidden md:flex" />
    </NavigationMenu>
  );
};
