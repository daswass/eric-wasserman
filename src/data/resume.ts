// Resume data structured for the personal website
export interface ResumeData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  experience: Experience[];
  sideProjects: Experience[];
  additionalExperience: AdditionalExperience[];
  education: Education[];
  skills: SkillCategory[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface AdditionalExperience {
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  gradYear: string;
  description: string;
  gpa?: string;
  majorGpa?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Eric J. Wasserman',
    title: 'Lead Trading Systems Engineer',
    location: 'Lido Beach, NY',
    phone: '516-855-8386',
    email: 'Wasserman.E@gmail.com',
    linkedin: 'linkedin.com/in/wassermane',
  },
  professionalSummary: 'Seasoned software engineer and certified Heroic Coach with 15+ years of experience designing and leading the development of high-performance trading platforms for global financial institutions and tech startups. Proven leader with a passion for mentoring teams, fostering collaboration, and driving innovation in complex, fast-paced environments. Adept at bridging technical and business needs to deliver scalable, efficient solutions that achieve measurable results.',
  experience: [
    {
      company: 'Citadel, EQR',
      position: 'Lead Trading Systems Engineer',
      location: 'New York, NY',
      period: 'August 2023 to Present',
      description: 'Leading development of next-generation trading platforms and systems',
      achievements: [
        'Spearheaded the design and development of a next-gen C++ trading platform to be deployed across the hedge fund and replace legacy systems achieving risk reduction and improved time to market.',
        'Ran a cross-regional team of C++, q, and UI developers responsible for designing the next-gen full-stack architecture for trading and research.',
        'Built and deployed the first three applications using the new platform - mentored developers at all levels and developed critical components in C++',
        'A PM order management system abstracting EMS from OMS and improving workflow efficiency',
        'The EMS, complete with internal strategies providing liquidity to PMs, a central limit order book, and tight integration with Trader GUI',
        'A reference data stream powering GUIs and research data requirements'
      ],
      technologies: ['C++', 'q', 'Trading Systems', 'OMS/EMS', 'GUI Development']
    },
    {
      company: 'Morgan Stanley, ATS',
      position: 'Vice President / Executive Director',
      location: 'New York, NY',
      period: 'June 2017 to May 2023',
      description: 'Led development of trading algorithms and platforms',
      achievements: [
        'Ran and managed the D1 team globally, responsible for building and improving a custom Java, graph-based algo platform for Strats, capable of real time trading and powerful, large scale distributed backtests.',
        'Designed and developed a greenfield, language-agnostic, Sequencer-based, low-latency, cross-asset, enterprise e-trading platform',
        'Sequencer and core infra written in Java; component actors could be written in Java or C++',
        'Partnered with BXS and Basket Trading teams to leverage existing and new technology and improve the execution strategy offering.'
      ],
      technologies: ['Java', 'C++', 'Sequencer-based Architecture', 'Low-latency Systems', 'Distributed Systems']
    },
    {
      company: 'REDI Global Technologies',
      position: 'Lead Software Engineer',
      location: 'New York, NY',
      period: 'April 2014 to May 2017',
      description: 'Led development of trading algorithms and position management systems',
      achievements: [
        'Designed, created requirements for, and developed the new REDI Spread Trader, a highly customizable equity spread trading algorithm with various strategies meant to achieve a desired spread over a period of time.',
        'Acts as lead algo developer and runs a cross-regional team to develop a microservice-based Java application as a proof-of-concept for a newly developed platform designed to provide a reliable multicast stream.',
        'Proprietary, generated messaging domain-layer, Guice integration and build/deployment using Gradle.',
        'Worked on the Position Server as part of middle office software, and specifically architected an event based system written in C++ for integrating FX rates into existing rollups.',
        'Written in C++11 using the STL and multiple features of the Boost library.',
        'Built a custom Gradle plugin for building and publishing native libraries which became the standard REDI C++ build tool'
      ],
      technologies: ['Java', 'C++', 'Microservices', 'Guice', 'Gradle', 'STL', 'Boost']
    },
    {
      company: 'Citibank N.A.',
      position: 'Front Office Trading Technology Officer',
      location: 'New York, NY',
      period: 'June 2012 to April 2014',
      description: 'Developed trading tools and risk infrastructure',
      achievements: [
        'Collaborated to write the Correlation desk front office Calibration Tool used to calibrate and price credit index tranches for intraday and end-of-day batches. Also used by financial controllers for monthly Markit calibrations.',
        'Multithreaded C# frontend utilizing DevExpress UI controls and implementing user-centric business logic around the maintenance and calibration of tranches.',
        'Two Spring-based Java backend servers to interact with Citi real time analytics packages, JAXB, a Sybase database, and Gemfire cache for speed and scalability across the New York and London regions.',
        'Use JMS messaging to hit Clojure scripts within an internal framework to manage big data across Hadoop DFS and firm wide Gemfire cache.',
        'Numerous Clojure scripts to assist support teams in managing real time Calibration data and both desk-defined and standard market tranches',
        'Developed a highly-critical Credit CVA/DVA pricing and risk infrastructure, worked directly with the Managing Director, desk lead and Quants, to accomplish everything from the actual daily pricing and risk calculation to risk-based PAA and CCAR risk reporting.'
      ],
      technologies: ['C#', 'Java', 'Spring', 'Clojure', 'Hadoop', 'Gemfire', 'JMS', 'Sybase']
    },
    {
      company: 'Morgan Stanley',
      position: 'Technology Associate',
      location: 'New York, NY',
      period: 'December 2010 to June 2012',
      description: 'Developed risk and data processing systems',
      achievements: [
        'Managed risk of retail bank lending products via a Perl-based risk infrastructure designed to integrate with Strats\' and Quants\' risk models, performed data post-processing, and fed data to firm risk systems.',
        'Regularly interacted with bankers, traders, Strats, and Quants to validate and certify risk models.',
        'OO Perl based Available For Sale portfolio amortization calculator designed to ensure correct amortization and cash-flow projections for our AFS portfolio position by interfacing with Intex and other proprietary cashflow engines using various C++ APIs, Perl XS, and SWIG, moving small amounts of money between accounts daily, and generating reports for Financial Controllers.',
        'Supported the mortgage lending business as an integral piece of downstream data processing and data enhancement requirements using Perl scripts and multiple Java SOAP servers to apply dings to daily rate sheets and make decisions on rates.'
      ],
      technologies: ['Perl', 'Java', 'SOAP', 'C++', 'Perl XS', 'SWIG']
    },
    {
      company: 'Morgan Stanley',
      position: 'Technology Analyst',
      location: 'New York, NY',
      period: 'August 2010 to December 2010',
      description: 'Technical training and project development',
      achievements: [
        'Four-month technology analyst program consisting of technology and data training, Morgan Stanley centric firm orientation, an overview of the securities industry, senior management presentations, and team-based professional skills workshops.',
        'Responsible for completing a project sponsored by the Global Capital Markets team',
        'Custom-query generation tool used by GCM Coverage Officers for quickly generating reports.',
        'Adobe Flex frontend using the AMF protocol, JAX-RS to implement a RESTful Java web service utilizing Spring and Hibernate, and a Sybase database at the back.'
      ],
      technologies: ['Adobe Flex', 'Java', 'JAX-RS', 'Spring', 'Hibernate', 'Sybase']
    }
  ],
  sideProjects: [
    {
      company: 'Sserman LLC',
      position: 'Founder',
      location: '[Personal Side-Project]',
      period: 'March 2020 to Present',
      description: 'Developed SaaS Property Management platform',
      achievements: [
        'Designed and built a SaaS Property Management platform simplifying the management of buildings, tenants, vendors, and accounts for Property Management business owners and their staff.',
        'Developed an Angular client and Java backend running in Google Cloud Platform.',
        'Supports and improves all day-to-day requirements of the Property Management business, including check issuance, tenant billing and payments, bank reconciliation, work orders, communication, reporting, and more',
        'Integrates with both vendor and proprietary systems including ClickPay, CheckAlt, Plaid, Moov, Stripe, PostGrid, custom sFTP bank connections for BAI files'
      ],
      technologies: ['Angular', 'Java', 'GCP', 'RESTful APIs', 'Stripe', 'Plaid', 'Moov', 'sFTP']
    },
    {
      company: 'BioTrak Therapeutics',
      position: 'Technical Lead',
      location: '[Personal Side-Project]',
      period: 'June 2016 to 2020',
      description: 'Developed therapeutic application for headaches and migraines',
      achievements: [
        'Worked with founders, researchers, and scientists to develop a scientifically proven, app-based, therapeutic approach to headaches and migraines. The app was called Ease.',
        'Designed and developed a treatment and learning suggestion engine in Java using early machine learning approaches to app-recorded heart rate and HRV data and user-provided subjective data.',
        'Transformed a poorly designed and costly AWS setup to a clean, efficient GCP AppEngine backend.'
      ],
      technologies: ['Java', 'Machine Learning', 'AWS', 'GCP', 'AppEngine']
    },
    {
      company: 'Group ServUs LLC',
      position: 'Partner',
      location: 'New York, NY [Personal Side-Project]',
      period: 'June 2014 to 2017',
      description: 'Co-founded company for group meetup organization',
      achievements: [
        'Co-founded a company aimed at simplifying organizing group meetups with friends.',
        'Partnered with bars, clubs, and restaurants willing to create pricing schedules',
        'Created a user experience where someone inputs parameters to "create a deal" and invite friends.',
        'Designed and developed a Objective-C and then Swift iOS app and a Google Cloud Platform Java backend to support the platform for both users and partners.',
        'Raised 80k in seed money and signed on and ran a team of Polish developers to speed up app and website development'
      ],
      technologies: ['Objective-C', 'Swift', 'iOS', 'Java', 'GCP']
    }
  ],
  additionalExperience: [
    {
      title: 'Heroic Coach Certification',
      organization: 'heroic.us',
      period: 'December 2022 to Present',
      description: 'Certified to guide individuals in personal growth, leadership, and building habits for optimal performance. Designed frameworks to inspire resilience and accountability within teams. Incorporated coaching principles into workplace settings, enhancing team collaboration and motivation.'
    },
    {
      title: 'Instructor',
      organization: 'Krav Maga Institute NYC',
      period: '2012 to 2021',
      description: 'Train civilians in Krav Maga, a self defense system used heavily by special forces around the world. Design classes, seminars, and private lessons to stimulate students and to prepare them for real-life threats.'
    },
    {
      title: 'Magician/President & Founder',
      organization: 'Magical Solutions',
      period: '2004 to Present',
      description: 'Perform at Parties and Business Functions and Events. Entertain people in impromptu walk-around situations.'
    }
  ],
  education: [
    {
      institution: 'Lehigh University',
      degree: 'B.S. in Computer Science, minor in Design Arts with a Digital Animation focus',
      gradYear: '2010',
      description: 'Coursework includes: Structured Programming and Data Structures, Software Engineering, Computer Architecture, Design & Analysis of Algorithms, Operating System Design, Programming Languages, Automata & Formal Grammars, Computers Internet and Society, Systems Software, Computer Graphics, Computer Imaging I.',
      gpa: '3.24',
      majorGpa: '3.45'
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      skills: ['Java', 'C++', 'TypeScript', 'q', 'C#', 'Clojure', 'Perl', 'Python', 'SQL']
    },
    {
      category: 'Database Management Systems',
      skills: ['Sybase', 'DB2', 'SQL Server', 'IBM Netezza', 'Apache Hadoop/Hive', 'Cloudera Impala']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Spring', 'Hibernate', 'Angular', 'Guice', 'Boost', 'JAX-RS']
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['Google Cloud Platform', 'AWS', 'AppEngine', 'Microservices']
    },
    {
      category: 'Development Tools',
      skills: ['Gradle', 'Bazel', 'Git', 'CI/CD', 'Agile Methodologies']
    }
  ]
};

export default resumeData;