# Retro Funding Wrapped

A beautiful, interactive Spotify Wrapped-style experience showcasing builder impact in the Optimism ecosystem. This React application creates an engaging presentation of Retro Funding metrics, transactions, and project relationships.

## 🎯 Features

- **8 Interactive Slides**: From welcome to shareable summary
- **Touch/Swipe Support**: Mobile-first navigation experience
- **Keyboard Navigation**: Arrow keys and spacebar support
- **Smooth Animations**: Staggered entrances and floating effects
- **Responsive Design**: Optimized for mobile and desktop
- **Configurable Data**: Easy customization through configuration system
- **Shareable Graphics**: Instagram/Twitter-ready summary card

## 🏗️ Architecture

### Core Components

```
src/
├── components/
│   ├── RetroFundingWrapped.tsx    # Main container component
│   └── slides/                    # Individual slide components
│       ├── WelcomeSlide.tsx       # Profile introduction
│       ├── TokensSlide.tsx        # OP token rewards
│       ├── TransactionsSlide.tsx  # Transaction metrics with chart
│       ├── GasSlide.tsx           # Gas consumption metrics
│       ├── ImpactSlide.tsx        # TVL and address metrics
│       ├── TopProjectsSlide.tsx   # Featured projects using tools
│       ├── ExtendedProjectsSlide.tsx # Grid of all projects
│       └── ShareSlide.tsx         # Shareable summary card
├── config/
│   └── index.ts                   # Configuration system
├── types/
│   └── index.ts                   # TypeScript interfaces
└── styles/
    └── index.css                  # Global styles and animations
```

### Configuration System

The app uses a centralized configuration system for easy customization:

```typescript
interface AppConfig {
  user: {
    name: string;
    project: string;
    profileImage: string;
    description: string;
  };
  metrics: {
    tokens: { value: string; description: string; subtitle: string; };
    transactions: { value: string; chartData: Array<>; description: string; };
    gas: { value: string; unit: string; description: string; subtitle: string; };
    impact: { tvl: string; addresses: string; description: string; subtitle: string; };
  };
  projects: {
    featured: Array<{ name: string; description: string; icon: string; }>;
    extended: Array<{ name: string; description: string; }>;
  };
  branding: {
    title: string;
    year: string;
    hashtags: string[];
  };
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd retro-funding-wrapped
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your images**
   Place your images in the `public/` folder:
   - Profile image (e.g., `jonas.jpeg`)
   - Project icons (e.g., `project1.png`, `project2.jpg`)
   - Sunny mascot SVG (`sunny 2026.svg`)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### Basic Customization

Edit `src/config/index.ts` to customize your data:

```typescript
export const myConfig: AppConfig = {
  user: {
    name: "Your Project Name",
    project: "Your Category",
    profileImage: "/your-profile.jpg",
    description: "Your custom description..."
  },
  metrics: {
    tokens: {
      value: "2,500",
      description: "Your custom achievement...",
      subtitle: "Your custom subtitle..."
    },
    // ... other metrics
  },
  // ... rest of config
};
```

### Using Custom Configuration

```typescript
import { myConfig } from './path/to/your/config';

function App() {
  return <RetroFundingWrapped config={myConfig} />;
}
```

### Adding New Projects

```typescript
projects: {
  featured: [
    { 
      name: 'Your Project', 
      description: 'Project Category', 
      icon: '/your-project-icon.png' 
    },
    // ... more featured projects
  ],
  extended: [
    { name: 'Extended Project 1', description: 'DeFi' },
    { name: 'Extended Project 2', description: 'Infrastructure' },
    // ... up to 30+ projects
  ]
}
```

### Updating Metrics

```typescript
metrics: {
  transactions: {
    value: "50,000",
    chartData: [
      { month: 'Jan', value: 1200 },
      { month: 'Feb', value: 1800 },
      { month: 'Mar', value: 2200 },
      // ... 7 months of data
    ],
    description: "Your peak month was March with 2,200 transactions!"
  }
}
```

## 🎨 Styling

### Color Scheme

The app uses Optimism's signature red gradient:

```css
.op-gradient {
  background: linear-gradient(135deg, #ff0420 0%, #ff2030 25%, #ff4050 50%, #ff1525 75%, #ff0420 100%);
}
```

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Text Gradients**: Available via `.text-gradient` class

### Animations

Built-in animation classes:
- `.animate-slide-in-up` - Slide up entrance
- `.animate-scale-in` - Scale in entrance  
- `.animate-float` - Floating effect
- `.animate-pulse-slow` - Slow pulsing
- `.metric-glow` - Subtle glow effect

## 📱 Navigation

### Touch/Swipe
- **Swipe Left**: Next slide
- **Swipe Right**: Previous slide
- **Minimum Distance**: 50px for gesture recognition

### Keyboard
- **Arrow Right / Spacebar**: Next slide
- **Arrow Left**: Previous slide

### Mouse
- **Navigation Dots**: Click to jump to specific slide
- **Arrow Buttons**: Previous/next navigation

## 🔧 Development

### Adding New Slides

1. **Create slide component**
   ```typescript
   // src/components/slides/NewSlide.tsx
   import React from 'react';
   import { SlideProps } from '../../types';
   
   const NewSlide: React.FC<SlideProps> = ({ slide }) => {
     return (
       <div className="flex flex-col items-center justify-center h-full">
         {/* Your slide content */}
       </div>
     );
   };
   
   export default NewSlide;
   ```

2. **Update types**
   ```typescript
   // src/types/index.ts
   export interface SlideData {
     type: 'welcome' | 'tokens' | /* ... */ | 'your-new-slide';
     // ... other properties
   }
   ```

3. **Add to renderer**
   ```typescript
   // src/components/RetroFundingWrapped.tsx
   const renderSlide = (slide: SlideData) => {
     switch (slide.type) {
       // ... existing cases
       case 'your-new-slide':
         return <NewSlide slide={slide} />;
     }
   };
   ```

4. **Update configuration**
   ```typescript
   // src/config/index.ts
   export const generateSlides = (config: AppConfig): SlideData[] => [
     // ... existing slides
     {
       type: 'your-new-slide',
       title: 'Your New Slide',
       // ... slide data
     }
   ];
   ```

### Performance Optimization

- **Animation Delays**: Use staggered delays for smooth entrances
- **Image Optimization**: Compress images before adding to `/public`
- **Lazy Loading**: Components render only when active
- **Bundle Size**: Current build ~50KB gzipped

### Testing

```bash
# Run linting
npm run lint

# Build and test
npm run build

# Preview production build  
npm run preview
```

## 📊 Slide Types

### 1. Welcome Slide (`welcome`)
- Profile image display
- Personalized greeting
- Call-to-action

### 2. Tokens Slide (`tokens`) 
- OP token rewards
- Achievement percentage
- Celebration animation

### 3. Transactions Slide (`transactions`)
- Monthly transaction chart
- Peak month highlighting
- Interactive bar visualization

### 4. Gas Slide (`gas`)
- ETH gas consumption
- USD value conversion
- Impact description

### 5. Impact Slide (`impact`)
- TVL metrics
- Unique addresses
- Ecosystem contribution

### 6. Top Projects Slide (`projects`)
- 3 featured projects
- Project icons
- Enrollment status

### 7. Extended Projects Slide (`extended-projects`)
- 27+ project grid
- Category classification
- Comprehensive ecosystem view

### 8. Share Slide (`share`)
- Shareable summary card
- Key metrics overview
- Social media hashtags

## 🎯 Customization Examples

### Brand Customization

```typescript
const customBrandConfig: AppConfig = {
  branding: {
    title: "Your Custom Wrapped",
    year: "2024",
    hashtags: ["#YourHashtag", "#CustomBranding"]
  },
  // ... rest of config
};
```

### Metric Customization

```typescript
const customMetrics = {
  tokens: {
    value: "5,000",
    description: "You're in the top 5% of builders!",
    subtitle: "Outstanding contribution to the ecosystem."
  },
  gas: {
    value: "10,000", 
    unit: "ETH in Gas",
    description: "Equivalent to $25,000 in value!",
    subtitle: "Your tools are highly utilized."
  }
};
```

## 🚨 Troubleshooting

### Common Issues

**Images not loading**
- Verify images are in `/public` folder
- Check file paths in configuration
- Ensure image formats are supported (jpg, png, svg, webp)

**Build errors**
- Run `npm run lint` to check for TypeScript errors
- Verify all imports are correct
- Check that all slide types are handled in switch statement

**Animation performance**
- Reduce number of simultaneous animations
- Check for CSS conflicts
- Ensure `animationFillMode: 'both'` is set

### Browser Support

- **Chrome**: Full support
- **Safari**: Full support
- **Firefox**: Full support
- **Mobile**: Optimized for iOS Safari and Chrome Mobile

## 📄 License

MIT License - feel free to customize and use for your own Retro Funding presentations!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🎉 Credits

- **Design Inspiration**: Spotify Wrapped
- **UI Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Mascot**: Sunny (Optimism)
- **Brand Colors**: Optimism Foundation