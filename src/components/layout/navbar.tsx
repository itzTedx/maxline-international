import { NavigationMenu } from '../ui/navigation-menu'
import { NAV_DISTRIBUTIONS, NAV_SERVICES, NAV_TRADINGS } from './constant'
import { MegaMenu } from './mega-menu'
import { MobileNav } from './mobile-nav'

export const Navbar = () => {
  const navItems: NavLinks = {
    distributions: NAV_DISTRIBUTIONS,
    tradings: NAV_TRADINGS,
    services: NAV_SERVICES,
  }

  return (
    <NavigationMenu
      className="group md:-translate-x-1/2 sticky top-0 z-40 md:container max-md:max-w-full md:fixed md:top-4 md:left-1/2 md:mx-auto md:max-w-6xl md:px-0"
      id="main-nav"
      role="navigation"
    >
      <MobileNav className="md:hidden" links={navItems} />

      <MegaMenu className="hidden md:flex" links={navItems} />
    </NavigationMenu>
  )
}
