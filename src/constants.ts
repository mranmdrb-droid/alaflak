import { Project, Service } from './types';
import smartCityImg from './assets/images/Smart & Sustainable Cities.png';
import residentialImg from './assets/images/Modern Residential Complexes.png';
import hospitalityImg from './assets/images/Luxury Hospitality.png';
import commercialImg from './assets/images/Commercial Towers.png';
import urbanImg from './assets/images/Urban Communities.png';

export const PROJECTS: Project[] = [
  {
    id: 'smart-cities',
    title: 'Smart & Sustainable Cities',
    titleAr: 'مدن ذكية ومستدامة',
    description: 'Developing urban environments that leverage IoT and renewable energy for a smarter future.',
    descriptionAr: 'مدن ذكية ومستدامة تعتمد على تقنيات إنترنت الأشياء (IoT) والطاقة المتجددة.',
    category: 'Commercial',
    location: 'Riyadh, KSA',
    locationAr: 'الرياض، المملكة العربية السعودية',
    image: smartCityImg
  },
  {
    id: 'res-complex',
    title: 'Modern Residential Complexes',
    titleAr: 'مجمعات سكنية عصرية',
    description: 'Premium housing designed for Saudi families with vast green spaces and modern aesthetics.',
    descriptionAr: 'مجمعات سكنية عصرية تلبي احتياجات العائلات السعودية بتصاميم حديثة ومساحات خضراء واسعة.',
    category: 'Residential',
    location: 'Jeddah, KSA',
    locationAr: 'جدة، المملكة العربية السعودية',
    image: residentialImg
  },
  {
    id: 'hospitality',
    title: 'Luxury Hospitality',
    titleAr: 'مشاريع الضيافة والسياحة',
    description: 'Exquisite hotels and resorts supporting the flourishing Saudi tourism sector.',
    descriptionAr: 'مشاريع الضيافة والسياحة التي تدعم قطاع السياحة المزدهر، مثل الفنادق والمنتجعات الفاخرة.',
    category: 'Hospitality',
    location: 'Al-Ula, KSA',
    locationAr: 'العلا، المملكة العربية السعودية',
    image: hospitalityImg
  },
  {
    id: 'commercial-towers',
    title: 'Commercial Towers',
    titleAr: 'أبراج ومجمعات تجارية',
    description: 'Advanced business environments equipped with the latest technologies.',
    descriptionAr: 'أبراج ومجمعات تجارية متطورة مجهزة بأحدث التقنيات لتوفير بيئات أعمال مثالية.',
    category: 'Commercial',
    location: 'Riyadh, KSA',
    locationAr: 'الرياض، المملكة العربية السعودية',
    image: commercialImg
  },
  {
    id: 'urban-communities',
    title: 'Urban Communities',
    titleAr: 'مجتمعات عمرانية متكاملة',
    description: 'Integrated life experiences combining living, working, and entertainment.',
    descriptionAr: 'مجتمعات عمرانية متكاملة توفر تجربة حياة متكاملة تجمع بين السكن، العمل، والترفيه.',
    category: 'Residential',
    location: 'Dammam, KSA',
    locationAr: 'الدمام، المملكة العربية السعودية',
    image: urbanImg
  }
];

export const SERVICES: Service[] = [
  {
    id: 'dev',
    title: 'Real Estate Development',
    titleAr: 'التطوير العقاري',
    description: 'We develop modern projects that meet the highest standards of design and sustainability.',
    descriptionAr: 'نطور مشاريع سكنية وتجارية حديثة تلبي أعلى معايير التصميم والاستدامة، بما يضمن تجربة متميزة للعملاء والمستثمرين.',
    icon: 'Building2'
  },
  {
    id: 'buy-sell',
    title: 'Buy & Sell Real Estate',
    titleAr: 'بيع وشراء العقارات',
    description: 'Providing unique investment opportunities with expert consultation for maximum returns.',
    descriptionAr: 'نوفر فرصاً استثمارية مميزة من خلال بيع وشراء العقارات الجاهزة وتلك التي ما زالت قيد التطوير، مع تقديم استشارات متخصصة.',
    icon: 'Compass'
  },
  {
    id: 'off-plan',
    title: 'Off-Plan Sales',
    titleAr: 'البيع على الخارطة',
    description: 'Opportunities to purchase early-stage properties with flexible payment plans.',
    descriptionAr: 'نمنح عملاءنا فرصة شراء العقارات في مراحلها الأولى بأسعار تنافسية، مع خطط سداد مرنة تناسب احتياجاتهم.',
    icon: 'MapPin'
  }
];
