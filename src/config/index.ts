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
    gas: {
      value: string;
      unit: string;
      description: string;
      subtitle: string;
    };
    impact: {
      tvl: string;
      addresses: string;
      description: string;
      subtitle: string;
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
      description: "That puts you in the top 15% of builders in Retro Funding: Dev Tooling!",
      subtitle: "These rewards recognize your contribution to the Optimism ecosystem."
    },
    transactions: {
      value: "20,000",
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
    gas: {
      value: "4,002",
      unit: "ETH in Gas",
      description: "That's equivalent to approximately $10,005 in today's value!",
      subtitle: "Your tools are helping developers build efficiently on Optimism."
    },
    impact: {
      tvl: "$24,000",
      addresses: "59",
      description: "Your project has become a critical part of the Optimism ecosystem!",
      subtitle: "Projects deployed on Worldchain may show different address data as the team works with World to analyze address information."
    }
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
    type: 'tokens',
    title: "You've earned a total of",
    mainValue: config.metrics.tokens.value,
    unit: 'OP Tokens',
    description: config.metrics.tokens.description,
    subtitle: config.metrics.tokens.subtitle
  },
  {
    type: 'transactions',
    title: 'Your project facilitated',
    mainValue: config.metrics.transactions.value,
    unit: 'Transactions',
    chartData: config.metrics.transactions.chartData,
    description: config.metrics.transactions.description
  },
  {
    type: 'gas',
    title: 'Builders using your tools consumed',
    mainValue: config.metrics.gas.value,
    unit: config.metrics.gas.unit,
    description: config.metrics.gas.description,
    subtitle: config.metrics.gas.subtitle
  },
  {
    type: 'impact',
    title: 'Your impact across the Superchain',
    metrics: [
      { value: config.metrics.impact.tvl, label: 'Total Value Locked' },
      { value: config.metrics.impact.addresses, label: 'Unique Addresses' }
    ],
    description: config.metrics.impact.description,
    subtitle: config.metrics.impact.subtitle
  },
  {
    type: 'projects',
    title: 'Top Projects Using Your Tools',
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
    type: 'share',
    title: 'Share Your Impact',
    projects: config.projects.featured,
    description: `Your ${config.branding.year} Retro Funding impact`,
    subtitle: 'Screenshot to share!'
  }
];