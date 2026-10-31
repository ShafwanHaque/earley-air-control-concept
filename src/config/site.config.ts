export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Earley Air Control, Inc.",
    shortName: "Earley Air Control",
    logo: "/brand/earley-wordmark.svg",
    logoLight: "/brand/earley-wordmark.svg",
    region: "Mobile · Baldwin County, Alabama"
  },

  theme: {
    style: "technical",
    colors: {
      brandPrimary: "#155A88",
      brandSecondary: "#E67835",
      brandAccent: "#4FB6C7",
      page: "#101B24",
      surfaceDark: "#0A141C",
      surfaceDarkAlt: "#132633",
      surfaceElevated: "#1C3542",
      surfaceSoft: "#F3F6F4",
      textPrimary: "#F8FAF9",
      textSecondary: "#DAE3E4",
      textMuted: "#93A7AA",
      textOnBrand: "#FFFFFF",
      borderSubtle: "#31454C",
      borderStrong: "#567079",
      glowPrimary: "#155A88",
      glowSecondary: "#E67835",
      networkLine: "#4FB6C7",
      success: "#70A982",
      service1: "#155A88",
      service2: "#4FB6C7",
      service3: "#E67835",
      service4: "#17404C",
      service5: "#24535C"
    }
  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call (251) 649-1026",
    ctaLabel: "Request service",
    mobileEyebrow: "MOBILE · BALDWIN COUNTY, ALABAMA",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "MOBILE · BALDWIN COUNTY, ALABAMA",
    line1: "Comfort when",
    line2: "you need it.",
    detail: "Earley Air Control, Inc. · Mobile · Baldwin County, Alabama",
    location: "24/7 on-call service · Office hours Mon–Fri, 8–5",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "MOBILE · BALDWIN COUNTY, ALABAMA",
    headlineLine1: "Comfort when",
    headlineLine2: "you need it.",
    description: "Heating and cooling for homes and businesses across Mobile and Baldwin County, plus backup generators and ductless systems.",
    primaryCta: "Request service",
    secondaryCta: "Call Earley Air Control",
    locationLabel: "MOBILE · BALDWIN COUNTY, ALABAMA",
    locationValue: "Mobile · Baldwin County, Alabama",
    edgeLabel: "Plan Earley for your comfort.",
    bottomStatement: "HEATING · COOLING · STANDBY GENERATORS",
    sillLabel: "24/7 on-call service · Office hours Mon–Fri, 8–5",
    serviceLabels: [
      "Air conditioning",
      "Heating",
      "Standby generators"
    ],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {
      primarySrc: "/hero/earley-service-van.jpg",
      primaryAlt: "Earley Air Control service van showing the company name and phone number.",
      primaryPosition: "center center",
      fit: "contain",
      backdrop: "matte",
      aspectRatio: "47 / 27"
    }
  },

  seo: {
    title: "Earley Air Control | HVAC in Mobile & Baldwin County",
    description: "Residential and commercial heating, cooling, standby generators, and ductless systems in Mobile and Baldwin County. Call (251) 649-1026."
  },

  contact: {
    phoneDisplay: "(251) 649-1026",
    phoneHref: "tel:+12516491026",
    email: "",
    address: "8042 Wards Lane, Semmes, AL 36575",
    contactUrl: "#contact",
    servicesUrl: "#services"
  },

  brandStandard: {
    eyebrow: "24/7 ON-CALL SERVICE",
    titleLine1: "Comfort, backed by experience.",
    titleLine2: "Plan Earley for your comfort.",
    bodyTitle: "Local heating, cooling, and generator support.",
    body: "Earley Air Control, Inc. serves Mobile and Baldwin County with residential and commercial heating and cooling. The company also installs and services standby generators and ductless Mitsubishi systems.",
    callLabel: "Call now",
    availabilityLabel: "Mobile · Baldwin County, Alabama",
    panelEyebrow: "EARLEY AIR CONTROL",
    panelTitle: "Heating, cooling, and standby generator service across Mobile and Baldwin County.",
    panelFooter: "Mobile · Baldwin County, Alabama",
    handoff: "Explore Earley Air Control services.",
    items: [
      {
        icon: "cooling",
        label: "Air conditioning",
        detail: "AC repairs, new installations, and service for all brands."
      },
      {
        icon: "heating",
        label: "Heating",
        detail: "Heating system service to keep Mobile-area homes comfortable."
      },
      {
        icon: "maintenance",
        label: "Commercial & residential service",
        detail: "HVAC solutions for residential and commercial properties."
      }
    ]
  },

  services: {
    eyebrow: "EARLEY AIR CONTROL · SERVICES",
    introLine1: "Your local",
    introLine2: "comfort partner.",
    summaryEyebrow: "MOBILE · BALDWIN COUNTY",
    summaryTitle: "Heating, cooling, commercial service, standby generators, and ductless systems for Mobile and Baldwin County.",
    summaryBody: "Earley Air Control, Inc. serves Mobile and Baldwin County with residential and commercial heating and cooling. The company also installs and services standby generators and ductless Mitsubishi systems.",
    summaryCta: "Talk to the team",
    items: [
      {
        name: "Air conditioning",
        shortName: "Cooling",
        image: "/services/01.svg",
        description: "AC repairs, new installations, and service for all brands."
      },
      {
        name: "Heating",
        shortName: "Heating",
        image: "/services/02.svg",
        description: "Heating system service to keep Mobile-area homes comfortable."
      },
      {
        name: "Commercial & residential service",
        shortName: "Service",
        image: "/services/03.svg",
        description: "HVAC solutions for residential and commercial properties."
      },
      {
        name: "Standby generators",
        shortName: "Generators",
        image: "/services/04.svg",
        description: "Home standby generator installation and service."
      },
      {
        name: "Ductless & air quality",
        shortName: "Air quality",
        image: "/services/05.svg",
        description: "Mitsubishi ductless heat pumps, duct cleaning, insulation, and moisture control."
      }
    ]
  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort on",
    titleLine2: "the Gulf Coast.",
    description: "Mobile, AL · Baldwin County, AL.",
    featuredLocation: "Mobile, AL",
    locationDetail: "Proud to serve Mobile and Baldwin County.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Mobile · Baldwin County, Alabama",
    metrics: [
      {
        value: "2 service regions",
        label: "Coverage shown"
      },
      {
        value: "24/7 on-call service",
        label: "Local commitment"
      },
      {
        value: "Local team",
        label: "Mobile · Baldwin County, Alabama"
      }
    ],
    locations: [
      {
        name: "Mobile, AL",
        kind: "city",
        lat: 30.6954,
        lng: -88.0399,
        hub: true
      },
      {
        name: "Baldwin County, AL",
        kind: "county",
        lat: 30.6011,
        lng: -87.7763,
        hub: false
      }
    ]
  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Earley Air Control about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Earley Air Control",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call (251) 649-1026 to contact Earley Air Control."
  }
};
