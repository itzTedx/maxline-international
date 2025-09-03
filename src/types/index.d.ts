declare global {
  interface Base {
    title: string;
    href: string;
  }

  interface Distribution extends Base {
    brands: string[];
    title: string;
    href: string;
    image: string;
  }
  interface Trading {
    logo: string;
    label: string;
    href: string;
  }
  interface Service {
    title: string;
    href: string;
  }

  interface Distributions extends Base {
    categories: Distribution[];
  }

  interface Tradings extends Base {
    brands: Trading[];
  }
  interface Services extends Base {
    services: Service[];
  }

  type NavLinks = {
    distributions: Distributions;
    tradings: Tradings;
    services: Services;
  };

  interface CoreValue {
    title: string;
    description: string;
  }

  type CoreValues = CoreValue[];

  interface Banner {
    title: string;
    description: string;
    image: string;
  }

  interface Header {
    heading: string;
    title: string;
    description: string;
    image: string;
  }

  interface Item {
    icon: string;
    title: string;
    description: string;
    image: string;
  }

  type Items = Item[];

  type Brands = {
    banner: Banner;
    header: Header;
  };

  type Services = {
    banner: Banner;
    service: Items;
  };

  interface CardContent {
    logo: string;
    label: string;
    description: string;
    image: string;
  }

  interface DistributionCard {
    category: string;
    title: string;
    description: string;
    brands: CardContent[];
  }
}

// This export is needed to make the file a module
export {};
