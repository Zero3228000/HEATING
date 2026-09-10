import { ServiceItem, BoilerBrand, BoilerPackage, QuoteAddon, LocationArea, BlogPost, Testimonial } from '../types';

export const COMPANY_DETAILS = {
  name: 'Heatwise Heating',
  legalName: 'Heatwise Plumbing Ltd',
  tagline: 'Leeds Premier Gas Safe Heating & Boiler Specialists',
  phoneLandline: '0113 268 8570',
  phoneMobile: '07792 710887',
  email: 'info@heatwiseheating.co.uk',
  address: {
    street: '3 Carr Manor Road',
    city: 'Leeds',
    postcode: 'LS17 5AY',
    region: 'West Yorkshire'
  },
  openingHours: {
    weekdays: 'Monday - Friday: 8:00 AM – 5:00 PM',
    saturday: 'Saturday: 9:00 AM – 1:00 PM (Emergency Callouts)',
    sunday: 'Sunday: Emergency Callouts Only',
    emergencyNotice: '24/7 Rapid Emergency Response across Leeds & surrounding postcodes'
  },
  accreditations: {
    gasSafe: 'Gas Safe Registered Engineers',
    fcaNumber: 'FRN 697812 (TradeHelp Ltd Introducer Appointed Representative)',
    experienceYears: 15,
    worcesterAccredited: 'Worcester Bosch Diamond Accredited Installer',
    guaranteeUpTo: 'Up to 12-Year Manufacturer Guarantees'
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'boiler-installation',
    title: 'New Boiler Installation',
    shortDesc: 'A-rated energy efficient combi, system and regular boilers installed with up to 12 years guarantee.',
    fullDesc: 'We install premium A-rated boilers from Worcester Bosch, Ideal, and Baxi across Leeds. Every installation includes a comprehensive system chemical flush, magnetic filter installation, wireless digital smart programmer, and complete building regulations Gas Safe registration. We provide clear, fixed-price quotes with no hidden extras.',
    icon: 'Flame',
    badge: '12-Yr Guarantee',
    priceFrom: '£1,895',
    features: [
      'Worcester Bosch, Baxi & Ideal accredited installations',
      'Up to 12 years parts & labour manufacturer guarantee',
      'Free magnetic filter & wireless digital thermostat included',
      'Chemical powerflush of existing central heating pipework',
      'Gas Safe notification and building control certification',
      'Safe removal and environmentally conscious recycling of old boiler'
    ],
    benefits: [
      'Slash annual heating bills by up to £540 with 94%+ A-rated efficiency',
      'Whisper-quiet operation and instantaneous hot water delivery',
      'Complete peace of mind with decade-long manufacturer warranty cover'
    ],
    processSteps: [
      { title: 'Free Survey & Quote', desc: 'Choose your preferred package online or book an engineer home survey.' },
      { title: 'Removal & Powerflush', desc: 'We safely drain the system, remove your old boiler and flush out harmful sludge.' },
      { title: 'Precision Installation', desc: 'Our Gas Safe certified engineers fit your new boiler and flue to British Standards.' },
      { title: 'Handover & Gas Safe Sign-off', desc: 'We commission the system, test pressure, and walk you through your new controls.' }
    ],
    faqs: [
      { q: 'How long does a new boiler installation take?', a: 'A direct like-for-like combi replacement takes 1 day (6 to 8 hours). System conversions or relocating a boiler typically take 1.5 to 2 days.' },
      { q: 'Are your quotes really fixed-price?', a: 'Yes! Our quotes include all parts, labour, materials, chemical flush, filter, and Gas Safe registration fees. No surprise extras.' }
    ]
  },
  {
    id: 'boiler-servicing',
    title: 'Boiler Servicing & Safety Checks',
    shortDesc: 'Comprehensive annual boiler servicing to maintain manufacturer warranties and peak efficiency.',
    fullDesc: 'Regular annual boiler servicing is vital to keep your boiler operating safely, reduce energy bills, and maintain your manufacturer warranty validity. Our Leeds Gas Safe engineers carry out rigorous safety checks, burner cleaning, flue gas flue-analyzer testing, and pressure calibrations.',
    icon: 'ShieldCheck',
    badge: 'Only £79 Fixed',
    priceFrom: '£79',
    features: [
      'Full visual inspection for corrosion, leaks, and wear',
      'Flue gas combustion analysis using calibrated digital equipment',
      'Burner, heat exchanger, and condensate trap cleaning',
      'System pressure check and expansion vessel recharging',
      'Safety device verification (flame failure, pressure relief valves)',
      'Digital service record and checklist emailed for your warranty records'
    ],
    benefits: [
      'Keeps manufacturer warranty 100% active and compliant',
      'Detects minor issues before they cause costly winter breakdowns',
      'Guarantees your home is safe from hazardous carbon monoxide leaks'
    ],
    processSteps: [
      { title: 'Booking & Arrival', desc: 'Book online or by phone with a guaranteed 2-hour arrival window.' },
      { title: '30-Point Safety Check', desc: 'Engineers test combustion, burner efficiency, gas pressure, and seals.' },
      { title: 'Clean & Calibrate', desc: 'Component cleaning, condensate trap flush, and sensor optimization.' },
      { title: 'Digital Service Certificate', desc: 'We issue your formal certificate and update your manufacturer warranty portal.' }
    ],
    faqs: [
      { q: 'Why is annual boiler servicing required?', a: 'All major manufacturers (Worcester Bosch, Baxi, Ideal) require documented annual servicing by a Gas Safe engineer to keep their extended 7 to 12-year warranties valid.' }
    ]
  },
  {
    id: 'boiler-repair',
    title: 'Boiler Repairs & Emergency Callouts',
    shortDesc: 'Fast diagnostic and repair service for all boiler brands across Leeds and West Yorkshire.',
    fullDesc: 'No heating or hot water? Banging noises, leaking pipework, or error codes flashing on your boiler? Our responsive Leeds heating engineers carry van stock of genuine Worcester Bosch, Baxi, and Ideal parts for rapid same-day diagnostics and fixes.',
    icon: 'Wrench',
    badge: 'Same Day Leeds',
    priceFrom: '£85 diagnosis',
    features: [
      'Rapid same-day response across Leeds and North Yorkshire',
      'Expert diagnosis on combi, system, and conventional boilers',
      'Stock of genuine manufacturer replacement parts',
      'Clear, honest pricing with repair quotation before starting work',
      'Zero call-out fees during normal working hours if repair approved'
    ],
    benefits: [
      'Restores heating and hot water quickly to keep your family warm',
      'Transparent diagnostic pricing with no hidden hourly inflation',
      'Experienced engineers who prioritize repairs before recommending replacement'
    ],
    processSteps: [
      { title: 'Emergency Call', desc: 'Call 0113 268 8570 or 07792 710887 for priority dispatch.' },
      { title: 'Diagnostic Assessment', desc: 'Engineer identifies root cause using diagnostic multimeter and gas meters.' },
      { title: 'Fixed Quote', desc: 'We explain the issue, provide a fixed quote for parts and labour, and proceed upon your agreement.' },
      { title: 'Testing & Verification', desc: 'We test the system under full load and verify safe carbon monoxide emissions.' }
    ],
    faqs: [
      { q: 'What boiler error codes do you fix?', a: 'We repair all common faults including low pressure (F22, E119), ignition lockouts (EA, F1, 133), fan failure, diverter valve stick, pump failure, and frozen condensate pipes.' }
    ]
  },
  {
    id: 'combi-boilers',
    title: 'Combi Boiler Upgrades & Conversions',
    shortDesc: 'Free up cupboard space and get unlimited instant hot water with modern compact combi systems.',
    fullDesc: 'Combination boilers heat water directly from the cold water mains on demand, eliminating the need for bulky cold water storage tanks in your loft and cumbersome copper hot water cylinders in your airing cupboard. We specialize in seamless conversions from old conventional heating systems.',
    icon: 'Droplets',
    badge: 'Space Saver',
    priceFrom: '£2,150',
    features: [
      'Removal of loft tanks and airing cupboard copper cylinders',
      'Unblocks valuable attic and cupboard storage space',
      'High mains pressure hot water for powerful showers',
      'No waiting for hot water cylinders to reheat',
      'Compact wall-hung dimensions fit standard kitchen cupboards'
    ],
    benefits: [
      'Instant hot water on tap 24 hours a day',
      'Lower gas consumption because you only heat water as you use it',
      'No risk of frozen burst header tanks in cold attics during winter'
    ],
    processSteps: [
      { title: 'Water Flow Test', desc: 'We measure your incoming mains water pressure to verify suitability for high-flow combi.' },
      { title: 'System Decommission', desc: 'Safe draining and removal of old loft header tanks and cylinder.' },
      { title: 'Pipework Upgrades', desc: 'Upgrading gas supply pipe to 22mm to meet modern combi gas input requirements.' },
      { title: 'Commissioning', desc: 'Thorough flow-rate balance across all taps and radiator bleed.' }
    ],
    faqs: [
      { q: 'Is my home suitable for a combi boiler?', a: 'Homes with 1 to 2 bathrooms are ideal for modern combi boilers. If you have 3+ simultaneous high-flow showers, our engineers may recommend a high-output system boiler or storage combi.' }
    ]
  },
  {
    id: 'powerflushing',
    title: 'Powerflushing & MagnaCleanse',
    shortDesc: 'Deep chemical cleansing to clear black sludge, eliminate cold spots, and restore radiator heat.',
    fullDesc: 'Over years of use, central heating water reacts with steel radiators to form black iron oxide sludge (magnetite). This settles in radiators, blocks heat exchangers, and damages circulating pumps. Our high-velocity powerflushing restores full circulation, saving up to 15% on heating costs.',
    icon: 'Sparkles',
    badge: 'Save 15% Fuel',
    priceFrom: '£295',
    features: [
      'High-velocity pumping equipment that forces water in reverse directions',
      'Industrial Adey MagnaCleanse twin magnetic filtration traps',
      'Heavy-duty Cleanser chemicals break down stubborn rust & limescale',
      'Individual radiator vibrational agitation for maximum sludge removal',
      'Long-life corrosion inhibitor chemicals added to protect system for years',
      'Full before-and-after thermal imaging or water clarity report'
    ],
    benefits: [
      'Eliminates annoying cold radiator bottoms and noisy boiler kettling',
      'Boosts radiator heat output, heating rooms in half the time',
      'Protects expensive new boiler heat exchangers from premature failure'
    ],
    processSteps: [
      { title: 'System Connection', desc: 'We connect our powerflush machine to your system via pump or radiator tails.' },
      { title: 'Chemical Circulation', desc: 'Heating system with industrial cleaning chemicals to loosen hardened magnetite.' },
      { title: 'Individual Radiator Flush', desc: 'We isolate and flush each radiator one-by-one until discharge water runs crystal clear.' },
      { title: 'Inhibitor Treatment', desc: 'We inject high-grade chemical inhibitor to prevent future rust build-up.' }
    ],
    faqs: [
      { q: 'How do I know if my heating system needs a powerflush?', a: 'Key signs include radiators cold at the bottom, rusty brown or black water when bleeding radiators, boiler making banging noises, and slow room heat-up.' }
    ]
  },
  {
    id: 'smart-controls',
    title: 'Smart Thermostats & Controls',
    shortDesc: 'Control your heating from your smartphone with Google Nest, Hive, or Worcester Bosch EasyControl.',
    fullDesc: 'Upgrading to a smart thermostat gives you total control of your home temperature from anywhere via your smartphone or tablet. Set automated schedules, enable geofencing so your heating automatically turns down when you leave home, and view energy consumption statistics.',
    icon: 'Cpu',
    badge: 'App Controlled',
    priceFrom: '£189 fitted',
    features: [
      'Google Nest Learning Thermostat 3rd Gen installation',
      'Hive Active Heating with wireless receiver & hub setup',
      'Worcester Bosch EasyControl smart thermostat integration',
      'Weather compensation that adapts boiler output to outside temperature',
      'Individual smart radiator thermostat (eTRVs) zoning',
      'Full Wi-Fi setup and smartphone app configuration with demonstration'
    ],
    benefits: [
      'Cut energy waste by up to 16% through intelligent automated scheduling',
      'Never come back to a freezing house with pre-arrival warm-up',
      'Works with Amazon Alexa, Google Assistant, and Apple HomeKit'
    ],
    processSteps: [
      { title: 'Compatibility Check', desc: 'We confirm wiring and Wi-Fi signal strength at your boiler and wall control.' },
      { title: 'Receiver Wiring', desc: 'Safe installation of the wireless heat link receiver at the boiler.' },
      { title: 'Thermostat Mounting', desc: 'Clean wall mounting or desktop stand placement in your primary living space.' },
      { title: 'App Pairing & Training', desc: 'We download the app to your phone, set up schedules, and show you how to use it.' }
    ],
    faqs: [
      { q: 'Can I install smart controls on an existing older boiler?', a: 'Yes! Almost all gas and combi boilers can be retrofitted with a Nest, Hive, or digital wireless thermostat.' }
    ]
  },
  {
    id: 'landlord-safety',
    title: 'Landlord Gas Safety Certificates (CP12)',
    shortDesc: 'Certified annual gas safety inspections for Leeds landlords, letting agents, and property managers.',
    fullDesc: 'Under UK law, landlords are legally required to have all gas appliances, pipework, and flues inspected annually by a Gas Safe registered engineer and obtain a Landlord Gas Safety Record (CP12). Heatwise Heating provides prompt inspections with digital certificates issued on the day.',
    icon: 'FileText',
    badge: 'Legal Requirement',
    priceFrom: '£65 per property',
    features: [
      'Full inspection of gas boilers, hobs, fires, and meters',
      'Gas tightness test to ensure no leaks in household pipework',
      'Burner pressure and gas rate verification against manufacturer data',
      'Flue flow and spillage tests to ensure safe exhaust of combustion gases',
      'Safety device operation checks and visual condition reporting',
      'Instant digital PDF certificate sent to landlord and tenant'
    ],
    benefits: [
      'Ensures complete compliance with the Gas Safety (Installation and Use) Regulations 1998',
      'Multi-property and combined boiler service + CP12 package discounts',
      'Automated annual reminder service so you never miss a renewal deadline'
    ],
    processSteps: [
      { title: 'Tenant Coordination', desc: 'We can coordinate access directly with your tenants for minimal hassle.' },
      { title: 'Comprehensive Inspection', desc: 'Thorough testing of all gas appliances and supply pipework tightness.' },
      { title: 'Immediate Certification', desc: 'Digital CP12 certificate generated and emailed immediately from site.' },
      { title: 'Remedial Support', desc: 'If any issues are flagged, we provide immediate fixed quotes to rectify defects.' }
    ],
    faqs: [
      { q: 'How quickly can you provide a CP12 certificate?', a: 'We offer same-day and next-day inspection appointments across Leeds, with digital PDF certificates issued immediately upon completion.' }
    ]
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps & Low Carbon Heating',
    shortDesc: 'Expert consultation and installation of air source heat pumps and hybrid heating solutions.',
    fullDesc: 'Looking to future-proof your Leeds home and lower carbon emissions? Heatwise Heating designs and installs modern Air Source Heat Pump (ASHP) systems and hybrid heat pump/boiler solutions eligible for government Boiler Upgrade Scheme (BUS) grants up to £7,500.',
    icon: 'Leaf',
    badge: '£7,500 Grant Eligible',
    priceFrom: 'Survey Required',
    features: [
      'Air source heat pump sizing and heat loss survey for Leeds properties',
      'Guidance and application processing for the £7,500 Boiler Upgrade Scheme grant',
      'Hybrid heating systems pairing a high-efficiency heat pump with a gas boiler',
      'Upgraded low-temperature radiators and hot water cylinder integration',
      'Smart weather-compensating temperature control systems'
    ],
    benefits: [
      'Significantly lowers your household carbon footprint',
      'Eligible for government grant funding covering a huge portion of installation cost',
      'High seasonal efficiency (SCOP 3.5+) for sustained year-round comfort'
    ],
    processSteps: [
      { title: 'Whole-Home Heat Loss Survey', desc: 'We calculate room-by-room heat loss and radiator surface area.' },
      { title: 'System Design & Grant Application', desc: 'We apply for the £7,500 BUS voucher on your behalf.' },
      { title: 'Professional Installation', desc: 'Outdoor unit mounting, cylinder fitting, and hydraulic balancing.' },
      { title: 'MCS Handover', desc: 'Full commissioning, MCS certification, and user guidance.' }
    ],
    faqs: [
      { q: 'Can my Leeds home have a heat pump?', a: 'Most homes with reasonable insulation and outside space for the external fan unit are suitable. A free heat loss survey will confirm the best solution.' }
    ]
  }
];

export const BOILER_PACKAGES: BoilerPackage[] = [
  {
    id: 'ideal-logic-max-30',
    tier: 'Standard Value',
    brand: 'Ideal',
    model: 'Logic Max Combi C30',
    outputKw: 30,
    flowRateLpm: 12.4,
    warrantyYears: 10,
    efficiencyRating: 'A-Rated (94%)',
    cashPrice: 2095,
    idealFor: '1-3 Bedroom homes with 1 bathroom and shower',
    dimensions: '700mm (H) x 395mm (W) x 278mm (D)',
    badge: 'Great Value Choice',
    features: [
      'Compact cupboard-fit design (fits standard kitchen cabinets)',
      'Ideal System Filter included as standard in the box',
      'Backlit digital LCD display with easy-to-read error diagnostics',
      'Hard-wearing brass water block for long service life',
      'Quiet Mark certified for ultra-quiet home operation'
    ],
    standardInclusions: [
      'Full Gas Safe certified installation & removal of old boiler',
      'Chemical powerflush & Adey magnetic system filter',
      'Digital wireless programmable room thermostat',
      'Horizontal flue kit & plume management if required',
      '10-Year Ideal manufacturer parts & labour warranty',
      'Building regulations compliance certificate & Gas Safe registration'
    ]
  },
  {
    id: 'worcester-4000-30',
    tier: 'Most Popular',
    brand: 'Worcester Bosch',
    model: 'Greenstar 4000 30kW',
    outputKw: 30,
    flowRateLpm: 12.3,
    warrantyYears: 10,
    efficiencyRating: 'A-Rated (94%)',
    cashPrice: 2495,
    idealFor: '2-4 Bedroom homes with 1-2 bathrooms',
    dimensions: '724mm (H) x 400mm (W) x 310mm (D)',
    badge: 'Leeds #1 Best Seller',
    features: [
      'Modern, curved aesthetic with intuitive full-colour text display',
      'Operates down to 1:10 modulation for low gas consumption in summer',
      'QuickTap feature eliminates water wastage while waiting for hot water',
      'Quiet Mark certified whisper-quiet operation',
      'Hydrogen-blend 20% ready for future-proof green gas transition'
    ],
    standardInclusions: [
      'Heatwise Worcester Bosch Diamond Accredited installation',
      '10-Year Worcester Bosch parts & labour guarantee',
      'Adey MagnaClean Professional2 magnetic system filter',
      'High-velocity chemical clean and system inhibitor dosing',
      'Wireless digital room thermostat (upgradeable to Bosch EasyControl)',
      'Gas Safe register documentation & local council sign-off'
    ]
  },
  {
    id: 'worcester-8000-35',
    tier: 'Premium Performance',
    brand: 'Worcester Bosch',
    model: 'Greenstar 8000 Life 35kW',
    outputKw: 35,
    flowRateLpm: 14.3,
    warrantyYears: 12,
    efficiencyRating: 'A-Rated (94%)',
    cashPrice: 2995,
    idealFor: '3-5 Bedroom larger homes with 2+ bathrooms and high hot water demand',
    dimensions: '780mm (H) x 440mm (W) x 365mm (D)',
    badge: '12-Year Guarantee',
    features: [
      'Stunning high-gloss contemporary design with touchscreen display',
      'Massive 14.3 litres per minute hot water delivery for multiple taps',
      'Intelligent Filling System keeps boiler pressure balanced automatically',
      'Increased internal access for effortless ongoing servicing',
      'Longest warranty in the UK market: Full 12-Year guarantee'
    ],
    standardInclusions: [
      'Heatwise Worcester Diamond Accredited 12-Year full warranty',
      'Adey MagnaClean Pro2 filter & advanced electrolytic scale inhibitor',
      'Deep chemical powerflush & thermal imaging scan of all radiators',
      'Smart controls integration with phone app and weather compensation',
      'Gas Safe certificate, building control sign-off & eco disposal'
    ]
  },
  {
    id: 'baxi-800-30',
    tier: 'Standard Value',
    brand: 'Baxi',
    model: 'Baxi 800 Combi 30kW',
    outputKw: 30,
    flowRateLpm: 12.2,
    warrantyYears: 10,
    efficiencyRating: 'A-Rated (93%)',
    cashPrice: 2250,
    idealFor: '2-3 Bedroom family homes wanting British engineering',
    dimensions: '700mm (H) x 390mm (W) x 285mm (D)',
    badge: 'Baxi Magnetic Filter Included',
    features: [
      'Manufactured in the UK with proven brass hydraulics',
      'Comes with Adey Micro2 magnetic system filter in the box',
      'Easy-Fill permanent filling link makes top-ups effortless',
      'Lightweight design fits inside 300mm deep kitchen cupboards'
    ],
    standardInclusions: [
      'Full Gas Safe installation and waste disposal',
      '10-Year Baxi manufacturer parts & labour warranty',
      'Chemical flush and Adey system filter',
      'Digital wireless thermostat & Gas Safe registration'
    ]
  }
];

export const BOILER_BRANDS: BoilerBrand[] = [
  {
    id: 'worcester-bosch',
    name: 'Worcester Bosch',
    logo: 'Worcester Bosch Accredited Installer',
    tagline: 'The UK’s Most Trusted Heating Brand & Which? Best Buy',
    description: 'Heatwise Heating is an accredited Worcester Bosch Diamond Installer in Leeds. We can offer exclusive extended guarantees of up to 12 years that non-accredited plumbers cannot provide. Worcester Bosch has won the prestigious Which? Best Buy award for over 14 consecutive years.',
    guaranteeYears: 12,
    accreditationLevel: 'Diamond Accredited Partner',
    highlights: [
      'Which? Best Buy award winner for 14+ years',
      'Up to 12-year non-quibble manufacturer guarantee on Greenstar 8000',
      'Hydrogen-blend 20% certified for future green gas networks',
      'British manufacturing excellence based in Worcester, UK'
    ],
    popularModels: [
      {
        model: 'Greenstar 4000 Combi',
        kw: '25kW, 30kW',
        flowRate: '10.2 - 12.3 L/min',
        warranty: '10 Years',
        bestFor: 'Medium 2-3 bed homes',
        keyFeature: 'Quiet Mark & QuickTap water saver',
        approxPrice: '£2,495'
      },
      {
        model: 'Greenstar 8000 Life',
        kw: '30kW, 35kW, 40kW',
        flowRate: '12.3 - 16.4 L/min',
        warranty: '12 Years',
        bestFor: 'Large 4-5 bed homes with multiple showers',
        keyFeature: 'Auto pressure top-up & modern touch screen',
        approxPrice: '£2,995'
      },
      {
        model: 'Greenstar 2000 Combi',
        kw: '25kW, 30kW',
        flowRate: '9.0 - 10.8 L/min',
        warranty: '8 Years',
        bestFor: 'Flats, apartments and smaller properties',
        keyFeature: 'Ultra compact kitchen cupboard dimensions',
        approxPrice: '£2,195'
      }
    ]
  },
  {
    id: 'ideal-boilers',
    name: 'Ideal Heating',
    logo: 'Ideal Heating Certified Specialist',
    tagline: 'Proudly British Heating Innovation Since 1906',
    description: 'Manufactured in Hull, East Yorkshire, Ideal Heating boilers are engineered specifically for British homes and water systems. Heatwise Heating installs the complete Ideal Logic and Vogue range, offering up to 10-12 year warranties and rapid spare parts availability.',
    guaranteeYears: 10,
    accreditationLevel: 'Ideal Heating Approved Installer',
    highlights: [
      'Engineered and built in Yorkshire (Hull factory)',
      'Queen’s Award for Enterprise in Innovation winner',
      'Logic Max series includes custom matching magnetic system filter',
      'User-friendly digital display with clear plain-English fault alerts'
    ],
    popularModels: [
      {
        model: 'Logic Max Combi C30',
        kw: '30kW',
        flowRate: '12.4 L/min',
        warranty: '10 Years',
        bestFor: 'Family homes seeking reliability on a budget',
        keyFeature: 'Ideal System Filter & brass hydraulics',
        approxPrice: '£2,095'
      },
      {
        model: 'Vogue Max Combi C32',
        kw: '32kW',
        flowRate: '13.1 L/min',
        warranty: '12 Years',
        bestFor: 'High-demand homes seeking premium tech',
        keyFeature: 'Stainless steel heat exchanger & color screen',
        approxPrice: '£2,650'
      }
    ]
  },
  {
    id: 'baxi',
    name: 'Baxi',
    logo: 'Baxi Approved Heating Engineer',
    tagline: 'Rugged British Reliability & High-Efficiency Performance',
    description: 'Baxi boilers are renowned for their rugged all-brass components and straightforward maintenance. Engineered in Preston, Lancashire, the Baxi 800 and 600 ranges feature Adey magnetic filters and proven long-term durability.',
    guaranteeYears: 10,
    accreditationLevel: 'Baxi Approved Partner',
    highlights: [
      '100% brass components for superior resistance to corrosion',
      'Adey Micro2 magnetic system filter included in box',
      'Easy-Fill permanent filling loop for stress-free pressure top-ups',
      'Compact dimensions for easy kitchen cabinet installation'
    ],
    popularModels: [
      {
        model: 'Baxi 830 Combi',
        kw: '30kW',
        flowRate: '12.2 L/min',
        warranty: '10 Years',
        bestFor: 'Medium homes wanting all-brass longevity',
        keyFeature: 'Adey filter & Easy-Fill built-in',
        approxPrice: '£2,250'
      },
      {
        model: 'Baxi 630 Compact',
        kw: '30kW',
        flowRate: '12.2 L/min',
        warranty: '7 Years',
        bestFor: 'Budget-conscious homeowner or landlords',
        keyFeature: 'Super compact 285mm depth',
        approxPrice: '£1,995'
      }
    ]
  }
];

export const QUOTE_ADDONS: QuoteAddon[] = [
  {
    id: 'nest-thermostat',
    name: 'Google Nest Learning Thermostat 3rd Gen',
    description: 'Smart learning thermostat that programs itself, saves energy, and allows remote phone control.',
    price: 199,
    category: 'controls',
    recommendedFor: 'Homeowners wanting effortless smart scheduling'
  },
  {
    id: 'hive-active',
    name: 'Hive Active Heating v3 with Hub',
    description: 'Control your heating from the Hive smartphone app, set schedules, and activate holiday mode.',
    price: 179,
    category: 'controls',
    recommendedFor: 'Existing Hive smart home ecosystem owners'
  },
  {
    id: 'bosch-easycontrol',
    name: 'Worcester Bosch EasyControl Smart Thermostat',
    description: 'Official Worcester Bosch smart control with weather compensation and room-by-room zoning capability.',
    price: 220,
    category: 'controls',
    recommendedFor: 'Worcester Bosch boiler buyers wanting optimal efficiency'
  },
  {
    id: 'scale-reducer',
    name: 'Electrolytic Hard Water Scale Reducer',
    description: 'Inline magnetic/electrolytic limescale inhibitor protecting the secondary heat exchanger in hard water zones.',
    price: 55,
    category: 'protection',
    recommendedFor: 'Areas with moderate to hard water mineral content'
  },
  {
    id: 'radiator-trvs',
    name: 'Pack of 5 Thermostatic Radiator Valves (TRVs)',
    description: 'Replace stiff, old valves with modern high-precision chrome/white thermostatic controls on every radiator.',
    price: 150,
    category: 'efficiency',
    recommendedFor: 'Older radiator setups with manual turn wheel valves'
  },
  {
    id: 'magna-powerflush',
    name: 'Full Chemical MagnaCleanse Deep Powerflush',
    description: 'Intensive high-pressure flush using dual neodymium magnets to eliminate stubborn magnetite sludge.',
    price: 295,
    category: 'protection',
    recommendedFor: 'Systems with older radiators or cold bottom patches'
  }
];

export const LEEDS_AREAS: LocationArea[] = [
  {
    name: 'Moortown & Alwoodley',
    postcode: 'LS17',
    description: 'Our home base! We provide rapid 30-minute boiler breakdown assistance and scheduled installations across Moortown, Alwoodley, Shadwell, and Slaid Hill.',
    responseTime: 'Within 30–45 mins',
    popularServices: ['Worcester Bosch Combi Installs', 'Annual Boiler Servicing', 'Powerflushing']
  },
  {
    name: 'Roundhay & Chapel Allerton',
    postcode: 'LS8 & LS7',
    description: 'Serving residential homes around Roundhay Park, Street Lane, and vibrant Chapel Allerton with energy-efficient combi conversions and landlord CP12 certificates.',
    responseTime: 'Within 45 mins',
    popularServices: ['Combi Conversions', 'Smart Thermostat Fitting', 'Landlord CP12 Safety Checks']
  },
  {
    name: 'Meanwood & Headingley',
    postcode: 'LS6',
    description: 'Fast response heating care for family homes, student lets, and professionals in Meanwood, Headingley, and Hyde Park.',
    responseTime: 'Within 45 mins',
    popularServices: ['Landlord Gas Certificates', 'Boiler Repairs', 'Emergency Callouts']
  },
  {
    name: 'Bramhope, Adel & Cookridge',
    postcode: 'LS16',
    description: 'Specializing in high-output Worcester 8000 systems and large detached home heating solutions in North Leeds.',
    responseTime: 'Within 45 mins',
    popularServices: ['High-Output Boilers', 'System Boiler Upgrades', '12-Year Warranty Installs']
  },
  {
    name: 'Horsforth, Rawdon & Guiseley',
    postcode: 'LS18 & LS20',
    description: 'Providing trusted heating engineer services across Horsforth, Rawdon, and Aireborough, from annual servicing to full central heating replacements.',
    responseTime: 'Within 60 mins',
    popularServices: ['Boiler Replacements', 'Radiator Upgrades', 'System Cleanses']
  },
  {
    name: 'Wetherby, Boston Spa & Scarcroft',
    postcode: 'LS22 & LS23',
    description: 'Covering the Golden Triangle with premium boiler installations, oil-to-gas conversions, and LPG services.',
    responseTime: 'Within 60 mins',
    popularServices: ['Worcester Bosch Life Installations', 'Powerflushing', 'Servicing']
  },
  {
    name: 'Leeds City Centre & South Leeds',
    postcode: 'LS1, LS2, LS10, LS11',
    description: 'Apartment electric and gas combi installations, landlord portfolios, and rapid commercial heating support.',
    responseTime: 'Within 60 mins',
    popularServices: ['Compact Cupboard Combi Installs', 'Landlord Inspections', 'Emergency Repairs']
  },
  {
    name: 'Pudsey, Farsley & West Leeds',
    postcode: 'LS28',
    description: 'Serving Pudsey, Farsley, Calverley, and Stanningley with reliable, affordable heating installations and fixed-price servicing.',
    responseTime: 'Within 60 mins',
    popularServices: ['Ideal Logic Installs', 'Boiler Breakdown Repairs', 'Annual Servicing']
  }
];

export const FAQS_DATA = [
  {
    category: 'Installation & Quotes',
    items: [
      {
        q: 'How does your online boiler quote tool work?',
        a: 'Our interactive tool guides you through 6 simple questions about your home (property size, bedrooms, current boiler type, and fuel). It instantly calculates your household heating demands and recommends the best Worcester Bosch, Ideal, and Baxi packages with fixed cash prices and monthly finance options.'
      },
      {
        q: 'How long does it take to fit a new boiler?',
        a: 'A straight combi-to-combi swap typically takes just 1 day (around 6 to 8 hours). If you are converting from a traditional system with water tanks in the loft to a combi boiler, or moving your boiler to a different room, it takes between 1.5 to 2 days. We always ensure you have heating restored as quickly as possible.'
      },
      {
        q: 'What is included in the fixed price quote?',
        a: 'Every Heatwise quote includes the boiler, flue kit, Gas Safe registered installation labour, chemical powerflush/clean, Adey magnetic system filter, digital wireless thermostat, removal and eco-disposal of your old boiler, building regulations sign-off, and registration of your extended manufacturer warranty (up to 12 years).'
      },
      {
        q: 'Do you charge for a home survey in Leeds?',
        a: 'No, our home surveys across Leeds and West Yorkshire are 100% free with absolutely no obligation. If you prefer, an engineer can visit your home, inspect your pipework and water pressure, and provide written advice.'
      }
    ]
  },
  {
    category: 'Finance & Payments',
    items: [
      {
        q: 'What boiler finance options do you offer?',
        a: 'Through our partner TradeHelp Ltd and Novuna Personal Finance, we offer two primary options: 0% Interest Free Credit spread over 12 or 24 months (with £0 deposit available), or low-rate 7.9% APR spread across 3 to 10 years (36 to 120 months) to keep monthly payments as low as possible (from ~£19/month).'
      },
      {
        q: 'Who is eligible for boiler finance?',
        a: 'Applicants must be at least 18 years of age, UK residents for a minimum of 3 years, homeowners/owner-occupiers, and have regular income with a UK bank account. Finance is subject to status and a soft/hard credit assessment.'
      },
      {
        q: 'Can I pay off my finance agreement early?',
        a: 'Yes, both the 0% interest-free and 7.9% APR agreements allow early repayments or full settlement at any time without punitive penalty fees.'
      }
    ]
  },
  {
    category: 'Guarantees & Warranties',
    items: [
      {
        q: 'Why do Heatwise guarantees reach up to 12 years?',
        a: 'Because Heatwise Heating is an accredited Worcester Bosch Diamond Installer, the manufacturer grants us access to their maximum guarantee tiers (e.g. 10 years on Worcester 4000 and 12 years on Worcester 8000 when fitted with an approved system filter). Standard non-accredited installers can only offer 5 to 7 years.'
      },
      {
        q: 'What does the manufacturer guarantee cover?',
        a: 'The guarantee covers all internal parts and manufacturer call-out labour. If a covered component fails within the warranty period, Worcester Bosch, Ideal, or Baxi send an engineer to replace it at zero cost to you, provided you have had the boiler serviced annually by a Gas Safe engineer.'
      }
    ]
  },
  {
    category: 'Repairs & Servicing',
    items: [
      {
        q: 'How much is an annual boiler service in Leeds?',
        a: 'Our comprehensive boiler service is a fixed price of £79 inc. VAT for domestic gas combi, system, and conventional boilers. We also offer landlord CP12 certificates for £65 (or £99 when booked together with a boiler service).'
      },
      {
        q: 'What should I do if my boiler stops working in freezing weather?',
        a: 'First, check your boiler pressure gauge—if it is below 1 bar, it may just need topping up using the filling loop. Second, check if the external plastic condensate pipe has frozen; pouring warm (not boiling) water over the pipe often clears the blockage. If the problem persists, call our Leeds emergency line on 0113 268 8570 or 07792 710887.'
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'lower-heating-bills-leeds',
    title: 'How to Lower Your Heating Bills in Leeds: 7 Practical Engineer Tips',
    slug: 'how-to-lower-heating-bills-leeds',
    excerpt: 'Rising energy costs are a major concern for West Yorkshire homeowners. Our Gas Safe engineers share proven methods to trim up to £540 from your annual gas bill.',
    category: 'Energy Saving',
    readTime: '5 min read',
    date: '14 Oct 2025',
    author: 'Heatwise Engineering Team',
    content: [
      'With energy tariffs fluctuating, heating efficiency has never been more critical. Upgrading from an old G-rated boiler (over 12-15 years old) to an A-rated condensing boiler instantly boosts efficiency from ~60% to over 94%. That means for every £1 spent on gas, 94p goes directly into heating your radiators rather than escaping up the chimney.',
      'Another simple tweak is lowering your boiler flow temperature. Many combi boilers are factory set to 75°C or 80°C. By lowering your heating flow temperature to 60°C or 65°C, your boiler enters true condensing mode more frequently, reducing gas burn without compromising comfort.',
      'Installing smart heating controls like Google Nest or Worcester Bosch EasyControl with weather compensation automatically lowers output on milder days. When paired with thermostatic radiator valves (TRVs) in unused spare bedrooms, you avoid heating rooms you rarely occupy.',
      'Finally, an annual boiler service and chemical system cleanse ensure that heat exchangers remain free of insulating limescale and black magnetite sludge. Clean water heats up much faster, requiring your boiler to run for shorter periods.'
    ],
    keyTakeaways: [
      'Modern A-rated boilers operate at 94%+ efficiency compared to 60-70% for old appliances.',
      'Turn boiler flow temperature down to 60°C-65°C to activate full condensing efficiency.',
      'Fit TRVs on all radiators to stop heating unoccupied rooms.',
      'A chemical powerflush can reclaim up to 15% of lost radiator heat output.'
    ]
  },
  {
    id: 'signs-need-new-boiler',
    title: '5 Warning Signs Your Boiler Needs Replacing Before Winter',
    slug: 'signs-you-need-a-new-boiler',
    excerpt: 'Is your boiler making strange noises, losing pressure constantly, or failing to heat your water properly? Here are the critical signs it is time for a replacement.',
    category: 'Boiler Advice',
    readTime: '4 min read',
    date: '02 Sep 2025',
    author: 'Mark Harrison, Senior Gas Safe Engineer',
    content: [
      'No one wants to wake up on a freezing December morning in Leeds to an icy shower and stone-cold radiators. Catching boiler degradation early prevents emergency stress and costly multiple repairs.',
      '1. Frequent Breakdowns and Rising Repair Bills: If you are calling an engineer every few months to replace diverter valves, pumps, or printed circuit boards (PCBs), the cumulative repair costs quickly exceed the price of a modern boiler with a 10-12 year guarantee.',
      '2. Strange Clunking, Whistling, or Kettling Noises: Banging noises often signify severe limescale accumulation on the primary heat exchanger, causing localized boiling ("kettling"). On older boilers, this stress can cause catastrophic heat exchanger rupture.',
      '3. Inconsistent Heating and Luke-Warm Showers: If your hot water temperature fluctuates wildly when someone turns on a tap downstairs, your boiler’s plate heat exchanger or modulation circuit is wearing out.',
      '4. Leaking Around the Base or Pressure Constantly Dropping: Water dripping from the casing usually indicates degraded internal seals, corroded pump casings, or a failed expansion vessel.',
      '5. Obsolete Spare Parts: If your boiler is over 12-15 years old, manufacturers often stop producing critical safety components. When key parts are no longer obtainable, replacement is the only safe option.'
    ],
    keyTakeaways: [
      'If your boiler is over 12 years old, parts availability and efficiency drop significantly.',
      'Repeated breakdowns cost more than financing a new boiler with 0% interest.',
      'Kettling and persistent pressure loss are early indicators of major component failure.'
    ]
  },
  {
    id: 'combi-vs-system-boilers',
    title: 'Combi vs System Boiler: Which is Right for Your Leeds Property?',
    slug: 'combi-vs-system-boiler-guide',
    excerpt: 'Confused between a combi boiler and a system boiler with an unvented cylinder? We break down the pros, cons, and property suitability.',
    category: 'Buying Guides',
    readTime: '6 min read',
    date: '18 Aug 2025',
    author: 'Heatwise Technical Team',
    content: [
      'Choosing the right boiler type depends entirely on your home size, the number of bathrooms, your water pressure, and how your family uses hot water.',
      'Combination (Combi) Boilers: The combi is the UK’s most popular boiler. It heats cold mains water instantaneously as you open a tap. There are no tanks in the loft and no cylinder in the airing cupboard. It is ideal for 1-3 bedroom homes with 1 or 2 bathrooms. However, if two powerful showers run simultaneously, the flow rate will be split between them.',
      'System Boilers: A system boiler works alongside a separate hot water storage cylinder (usually an unvented stainless steel cylinder). It can deliver huge volumes of hot water to multiple bathrooms simultaneously without any drop in pressure. It is the premier choice for 4-6 bedroom homes in areas like Alwoodley, Bramhope, or Scarcroft with three or more active bathrooms.',
      'Regular (Conventional) Boilers: These traditional systems have cold water storage tanks in the loft and a feed and expansion tank. While many homeowners choose to convert these to modern combis or unvented system setups, keeping a regular boiler can make sense if your home has older, low-pressure pipework that cannot withstand mains water pressure.'
    ],
    keyTakeaways: [
      'Combi boilers are best for 1-2 bathroom properties seeking maximum cupboard space.',
      'System boilers with cylinders are best for larger homes running 2+ showers simultaneously.',
      'Heatwise provides free site surveys to measure your incoming water flow and advise.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David & Sarah M.',
    location: 'Alwoodley, Leeds (LS17)',
    rating: 5,
    date: 'February 2026',
    verified: true,
    service: 'Worcester Bosch 8000 Installation',
    comment: 'Outstanding service from start to finish. Our 18-year-old boiler packed in during a cold snap. Heatwise gave us a competitive fixed quote, arrived punctually at 8am, laid protective dust sheets everywhere, and finished the installation and powerflush by 4pm. Having the 12-year Worcester guarantee gives complete peace of mind. Highly recommended!'
  },
  {
    id: '2',
    name: 'Rebecca T.',
    location: 'Roundhay, Leeds (LS8)',
    rating: 5,
    date: 'January 2026',
    verified: true,
    service: 'Combi Conversion & 0% Finance',
    comment: 'Converted from an old conventional tank system to a Worcester 4000 combi. We got rid of the massive cold tank in the attic and freed up our airing cupboard. The 0% finance option through TradeHelp was approved in minutes with no hassle. Clean, polite, and very knowledgeable engineers.'
  },
  {
    id: '3',
    name: 'Graham P.',
    location: 'Moortown, Leeds (LS17)',
    rating: 5,
    date: 'November 2025',
    verified: true,
    service: 'Annual Boiler Service & Powerflush',
    comment: 'Heatwise have serviced our boiler for the last 5 years. This year they also carried out a MagnaCleanse powerflush as two of our downstairs radiators were stone cold at the bottom. The difference is night and day—the whole house heats up in 20 minutes now.'
  },
  {
    id: '4',
    name: 'Fiona C.',
    location: 'Chapel Allerton, Leeds (LS7)',
    rating: 5,
    date: 'October 2025',
    verified: true,
    service: 'Landlord CP12 & Boiler Repair',
    comment: 'I manage several rental flats in North Leeds. Heatwise are my go-to heating engineers. They are Gas Safe, reliable, communicate directly with tenants for access, and issue digital CP12 certificates on the spot.'
  },
  {
    id: '5',
    name: 'James K.',
    location: 'Bramhope, Leeds (LS16)',
    rating: 5,
    date: 'September 2025',
    verified: true,
    service: 'Ideal Logic Max Installation',
    comment: 'The online quote tool was spot-on with the exact price we paid. No pushy salesmen, just honest trade advice. The engineer explained the digital thermostat clearly and left the kitchen spotless.'
  }
];
