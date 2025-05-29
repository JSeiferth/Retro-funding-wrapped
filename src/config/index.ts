import { SlideData } from '../types';

export interface AppConfig {
  user: {
    name: string;
    project: string;
    profileImage: string;
    description: string;
  };
  metrics: {
    tokens: {
      value: string;
      description: string;
      subtitle: string;
    };
    transactions: {
      value: string;
      chartData: Array<{ month: string; value: number }>;
      description: string;
    };
  };
  projects: {
    featured: Array<{
      name: string;
      icon: string;
    }>;
    extended: Array<{
      name: string;
    }>;
  };
  branding: {
    title: string;
    year: string;
    hashtags: string[];
  };
}

export const defaultConfig: AppConfig = {
  user: {
    name: "Jonas' Project",
    project: "Solidity library",
    profileImage: "/jonas.jpeg",
    description: "Hey Jonas' Project, let's look back at your Retro Funding journey over the past 6 months!"
  },
  metrics: {
    tokens: {
      value: "1,264",
      description: " ",
      subtitle: "These rewards recognize your contribution to the Optimism ecosystem."
    },
    transactions: {
      value: "20,000+",
      chartData: [
        { month: 'Jan', value: 280 },
        { month: 'Feb', value: 220 },
        { month: 'Mar', value: 350 },
        { month: 'Apr', value: 290 },
        { month: 'May', value: 1040 },
        { month: 'Jun', value: 440 },
        { month: 'Jul', value: 180 }
      ],
      description: "Your peak month was June with 1040 transactions!"
    },
  },
  projects: {
    featured: [
      { name: 'Synthetix', icon: '/AnNwWdzS_400x400.jpg' },
      { name: 'Aerodrome Finance', icon: '/dcd0600f-d9bf-439e-9915-5922ea8e9655.webp' },
      { name: 'Boost', icon: '/2586.png' }
    ],
    extended: [
      { name: 'Velodrome' },
      { name: 'Lyra' },
      { name: 'Thales' },
      { name: 'Perpetual Protocol' },
      { name: 'Polynomial' },
      { name: 'Kwenta' },
      { name: 'Stargate Finance' },
      { name: 'Hop Protocol' },
      { name: 'Across Protocol' },
      { name: 'Chainlink' },
      { name: 'Synapse' },
      { name: 'Socket' },
      { name: 'Superchain Registry' },
      { name: 'Aave' },
      { name: 'Curve' },
      { name: 'dForce' },
      { name: 'Granary' },
      { name: 'Hundred Finance' },
      { name: 'Sonne Finance' },
      { name: 'Exactly' },
      { name: 'Rubicon' }
    ]
  },
  branding: {
    title: "Your Retro Funding Wrapped",
    year: "2025",
    hashtags: ["#Optimism"]
  }
};

// Generate slides with extra details passed along for the Share slide
export const generateSlides = (config: AppConfig = defaultConfig, projectId: string = ''): SlideData[] => [
  {
    type: 'welcome',
    title: config.branding.title,
    subtitle: config.user.description,
    action: 'Swipe to explore your impact',
    profileImage: config.user.profileImage
  },
  {
    type: 'transactions',
    title: `Onchain apps that used ${config.user.name} generated`,
    mainValue: config.metrics.transactions.value,
    unit: 'Transactions',
    chartData: config.metrics.transactions.chartData,
    description: config.metrics.transactions.description
  },
  {
    type: 'projects',
    title: `Top Onchain apps Using ${config.user.name}`,
    projects: config.projects.featured,
    description: 'These applications are building on your foundation!',
  },
  {
    type: 'extended-projects',
    title: 'But there are many more...',
    subtitle: 'Your tools are empowering a new generation of builders on Optimism.',
    extendedProjects: config.projects.extended
  },
  {
    type: 'tokens',
    title: `For your impact to the Optimism Collective, you've been rewarded with`,
    mainValue: config.metrics.tokens.value,
    unit: 'OP Tokens',
    description: config.metrics.tokens.description,
    subtitle: config.metrics.tokens.subtitle
  },
  {
    type: 'share',
    title: 'Share Your Impact',
    projects: config.projects.featured,
    description: `Your ${config.branding.year} Retro Funding impact`,
    subtitle: 'Screenshot to share!',
    shareUrl: projectId ? `https://retro-funding-wrapped.vercel.app/${projectId}` : '',
    profileImage: config.user.profileImage,
    userName: config.user.name,
    userProject: config.user.project,
    transactionsValue: config.metrics.transactions.value,
    tokensValue: config.metrics.tokens.value,
    extendedProjects: config.projects.extended
  }
];
