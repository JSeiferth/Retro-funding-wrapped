/**
 * Utilities for loading and parsing CSV data
 */

export interface ProjectData {
    projectId: string;
    name: string;
    description?: string;
    totalRewards: number;
    transactions: number;
    gasConsumed: number;
    tvl: number;
    uniqueAddresses: number;
    firstContributionDate: string;
    avatarUrl?: string;
    coverImageUrl?: string;
    category?: string;
    topProjects?: {
      name: string;
      avatar: string;
    }[];
  }
  
  /**
   * Parse CSV string into an array of ProjectData objects
   */
  export const parseCSV = (csvString: string): ProjectData[] => {
    const lines = csvString.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',').map(header => header.trim());
  
    const projects: ProjectData[] = [];
  
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(value => value.trim());
      const project: Record<string, any> = {};
  
      headers.forEach((header, index) => {
        const value = values[index];
  
        if (['totalRewards', 'transactions', 'gasConsumed', 'tvl', 'uniqueAddresses'].includes(header)) {
          project[header] = parseFloat(value) || 0;
        } else if (header === 'topProjects') {
          try {
            project[header] = value ? JSON.parse(value) : [];
          } catch (err) {
            console.warn(`Failed to parse topProjects for line ${i + 1}:`, err);
            project[header] = [];
          }
        } else {
          project[header] = value || '';
        }
      });
  
      projects.push(project as ProjectData);
    }
  
    return projects;
  };
  
  /**
   * Load CSV data from a file or URL
   */
  export const loadCSVData = async (path: string): Promise<ProjectData[]> => {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load CSV: ${response.status}`);
      }
      const csvText = await response.text();
      return parseCSV(csvText);
    } catch (error) {
      console.error('Error loading CSV data:', error);
      return [];
    }
  };
  
  /**
   * Get a project by ID
   */
  export const getProjectById = (projects: ProjectData[], projectId: string): ProjectData | undefined => {
    return projects.find(project => project.projectId === projectId);
  };
  
  /**
   * Get sample projects for demo/development
   */
  export const getSampleProjects = (): ProjectData[] => {
    return [
      {
        projectId: "synthetix",
        name: "Synthetix",
        description: "Decentralized synthetic asset protocol",
        totalRewards: 1264,
        transactions: 1350,
        gasConsumed: 4.002,
        tvl: 24000,
        uniqueAddresses: 59,
        firstContributionDate: "November 2024",
        avatarUrl: "/public/optimism-logo.svg",
        coverImageUrl: "/public/optimism-logo.svg",
        category: "DeFi",
        topProjects: [
          { name: "Synthetix", avatar: "/public/optimism-logo.svg" },
          { name: "Aerodrome Finance", avatar: "/public/optimism-logo.svg" },
          { name: "Boost", avatar: "/public/optimism-logo.svg" }
        ]
      },
      {
        projectId: "aerodrome",
        name: "Aerodrome Finance",
        description: "Decentralized exchange on Optimism",
        totalRewards: 987,
        transactions: 876,
        gasConsumed: 2.345,
        tvl: 18500,
        uniqueAddresses: 42,
        firstContributionDate: "December 2024",
        avatarUrl: "/public/optimism-logo.svg",
        coverImageUrl: "/public/optimism-logo.svg",
        category: "DeFi",
        topProjects: [
          { name: "Aerodrome Finance", avatar: "/public/optimism-logo.svg" },
          { name: "Synthetix", avatar: "/public/optimism-logo.svg" },
          { name: "Lyra", avatar: "/public/optimism-logo.svg" }
        ]
      }
    ];
  };
  