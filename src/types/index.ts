export interface ChartData {
    month: string;
    value: number;
  }
  
  export interface Metric {
    value: string;
    label: string;
  }

  export interface Project {
    name: string;
    description: string;
    icon?: string;
  }
  
  export interface SlideData {
    type: 'welcome' | 'tokens' | 'transactions' | 'gas' | 'impact' | 'projects' | 'extended-projects' | 'share';
    title: string;
    subtitle?: string;
    action?: string;
    mainValue?: string;
    unit?: string;
    description?: string;
    chartData?: ChartData[];
    metrics?: Metric[];
    projects?: Project[];
    extendedProjects?: Project[];
  }
  
  export interface SlideProps {
    slide: SlideData;
  }