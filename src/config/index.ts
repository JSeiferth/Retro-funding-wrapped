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
      description: string;
      icon: string;
    }>;
    extended: Array<{
      name: string;
      description: string;
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
      { name: 'Synthetix', description: 'decentralized perp dex', icon: '/AnNwWdzS_400x400.jpg' },
      { name: 'Aerodrome Finance', description: 'decentralized exchange', icon: '/dcd0600f-d9bf-439e-9915-5922ea8e9655.webp' },
      { name: 'Boost', description: 'Reward farming app', icon: '/2586.png' }
    ],
    extended: [
      { name: 'Velodrome', description: 'DeFi' },
      { name: 'Lyra', description: 'DeFi' },
      { name: 'Thales', description: 'DeFi' },
      { name: 'Perpetual Protocol', description: 'DeFi' },
      { name: 'Polynomial', description: 'DeFi' },
      { name: 'Kwenta', description: 'DeFi' },
      { name: 'Stargate Finance', description: 'DeFi' },
      { name: 'Hop Protocol', description: 'Infrastructure' },
      { name: 'Across Protocol', description: 'Infrastructure' },
      { name: 'Chainlink', description: 'Infrastructure' },
      { name: 'Synapse', description: 'Infrastructure' },
      { name: 'Socket', description: 'Infrastructure' },
      { name: 'Superchain Registry', description: 'Infrastructure' },
      { name: 'Aave', description: 'DeFi' },
      { name: 'Curve', description: 'DeFi' },
      { name: 'dForce', description: 'DeFi' },
      { name: 'Granary', description: 'DeFi' },
      { name: 'Hundred Finance', description: 'DeFi' },
      { name: 'Sonne Finance', description: 'DeFi' },
      { name: 'Exactly', description: 'DeFi' },
      { name: 'Rubicon', description: 'DeFi' }
    ]
  },
  branding: {
    title: "Your Retro Funding Wrapped",
    year: "2025",
    hashtags: ["#Optimism"]
  }
};

export const generateSlides = (config: AppConfig = defaultConfig): SlideData[] => [
  {
    type: 'welcome',
    title: config.branding.title,
    subtitle: config.user.description,
    action: 'Swipe to explore your impact'
  },
  {
    type: 'transactions',
    title: "Onchain apps that used Jonas' Project generated",
    mainValue: config.metrics.transactions.value,
    unit: 'Transactions',
    chartData: config.metrics.transactions.chartData,
    description: config.metrics.transactions.description
  },
  {
    type: 'projects',
    title: "Top Projects Using Jonas' Project",
    projects: config.projects.featured,
    description: 'These projects are building on your foundation!',
    subtitle: 'Your tools are empowering a new generation of builders on Optimism.'
  },
  {
    type: 'extended-projects',
    title: 'But there are many more...',
    subtitle: 'Your tools are helping a vast ecosystem of projects build on Optimism',
    extendedProjects: config.projects.extended
  },
  {
    type: 'tokens',
    title: "For your impact to the Optimism Collective, you've been rewarded with",
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
    subtitle: 'Screenshot to share!'
  }
];