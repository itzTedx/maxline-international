interface Base {
  title: string;
  href: string;
}

interface Trading {
  logo: string;
  label: string;
  href: string;
}

interface Distribution extends Base {
  image: string;
  brands: string[];
}

interface Service extends Base {
  description?: string;
}

interface NavLinks {
  services: {
    title: string;
    href: string;
    services: Service[];
  };
  distributions: {
    title: string;
    href: string;
    categories: Distribution[];
  };
  tradings: {
    title: string;
    href: string;
    brands: Trading[];
  };
}
