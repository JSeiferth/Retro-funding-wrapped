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
  icon?: string;
  id?: string; // add this if you want Atlas links like /project/[id]
}

export interface SlideData {
  type:
    | 'welcome'
    | 'tokens'
    | 'transactions'
    | 'projects'
    | 'extended-projects'
    | 'share';

  title: string;
  subtitle?: string;
  action?: string;

  // Metrics and values
  mainValue?: string;
  unit?: string;
  description?: string;
  chartData?: ChartData[];
  metrics?: Metric[];

  // Project lists
  projects?: Project[];
  extendedProjects?: Project[];

  // NEW FIELDS for user context (used e.g., on ShareSlide)
  profileImage?: string;
  userName?: string;
  userProject?: string;
  transactionsValue?: string;
  tokensValue?: string;
  shareUrl?: string;
}

export interface SlideProps {
  slide: SlideData;
}
