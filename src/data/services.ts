export interface ServiceItem {
  name: string;
  path: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'website',
    title: 'Website Development',
    description: 'Responsive, scalable, and high-performance web solutions for modern businesses.',
    icon: 'Globe',
    gradient: 'from-cyan-500 to-blue-600',
    services: [
      { name: 'Website Development', path: 'web-development-company' },
      { name: 'Static Website', path: 'static-website-development-services' },
      { name: 'Dynamic Website', path: 'dynamic-website-services' },
      { name: 'E-Commerce Website Single & Multi Wendor', path: 'ecommerce-website-development-services' },
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom enterprise software tailored to streamline operations and drive growth.',
    icon: 'Code2',
    gradient: 'from-violet-500 to-purple-600',
    services: [
      { name: 'Software Development', path: '/software-development-services' },
      { name: 'ERP Software', path: 'erp-software-development-company' },
      { name: 'SAAS Software', path: '/SAASSoftware' },
      { name: 'Warehouse Managment Software', path: '/WarehouseManagmentSoftware' },
      { name: 'HRMS Software', path: '/HRMSSoftware' },
      { name: 'Inventory Managment Software', path: '/InventoryManagmentSoftware' },
      { name: 'Accounting & Billing Software', path: '/AccountingBillingSoftware' },
      { name: 'POS System Software', path: '/POSSystemSoftware' },
      { name: 'Employee Tracking Software', path: '/EmployeeTrackingSoftware' },
      { name: 'Attendance System Software', path: '/AttendanceSystemSoftware' },
      { name: 'Library Managment System', path: '/LibraryManagmentSystem' },
      { name: 'LMS With Live Class Software', path: 'top-lms-Software-companies-jaipur' },
      { name: 'University Managment  Software', path: '/UniversityManagmentSoftware' },
      { name: 'Quiz System Software', path: '/QuizSystemSoftware' },
      { name: 'Astrology Software', path: '/AstrologySoftware' },
      { name: 'Travel Booking Software', path: 'travel-software-development-company' },
      { name: 'Matrimonial Software', path: '/MatrimonialSoftware' },
      { name: 'Restaurant Managment System Software', path: 'custom-restaurant-software-development' },
      { name: 'Hotel Managment Software', path: '/HotelManagmentSoftware' },
      { name: 'Event management Software', path: '/EventmanagementSoftware' },
      { name: 'Hospital Managment System Software', path: '/HospitalManagementSoftware' },
      { name: 'Real state Software', path: '/RealstateSoftware' },
      { name: 'Clinic Managment System Software', path: '/ClinicManagmentSoftware' },
      { name: 'Trading Software', path: '/TradingSoftware' },
      { name: 'Job Portal Software', path: '/JobPortalSoftware' },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'Secure, transparent blockchain solutions including smart contracts, DAOs, and dApps.',
    icon: 'Blocks',
    gradient: 'from-emerald-500 to-teal-600',
    services: [
      { name: 'Blockchain Development', path: './blockchaindevelopment' },
      { name: 'Smart Contract Developemnt', path: '/SmartContractDevelopemnt' },
      { name: 'Private / Public Blockchain Development', path: '/Private/PublicBlockchainDevelopment' },
      { name: 'DAO Blockchain Developmnent', path: '/DAOBlockchainDevelopmnent' },
      { name: 'Blockchain in SupplyChain', path: '/BlockchainSupply' },
      { name: 'Blockchain in Voting ', path: '/BlockchainVoting' },
      { name: 'Blockchain in Live Aution', path: '/BlockchainLiveAution' },
      { name: 'Blockchain in Document Verifiction', path: '/BlockchainDocument' },
      { name: 'Blockchain in  Identity Verifiction', path: '/BlockchainIdentityVerifiction' },
    ],
  },
  {
    id: 'nft',
    title: 'NFT Development',
    description: 'End-to-end NFT platforms, marketplaces, and token solutions for the Web3 economy.',
    icon: 'Image',
    gradient: 'from-pink-500 to-rose-600',
    services: [
      { name: 'NFT Token Development', path: '/NFTToken' },
      { name: 'NFT Marketplace Development', path: '/NFTMarketplace' },
      { name: 'NFT Crosschain Platfrom Development', path: '/NFTCrosschainPlatfromDevelopment' },
      { name: 'NFT Minting Development', path: '/NFTMintingDevelopment' },
      { name: 'NFT Art Marketplace Development', path: '/NFTArtMarketplaceDevelopment' },
      { name: 'NFT Music Marketplace Development', path: '/NFTMusicMarketplaceDevelopment' },
      { name: 'NFT Fantasy Sports Platform Development', path: '/NFTFantasySportsPlatformDevelopment' },
      { name: 'NFT Lending Platform Development', path: '/NFTLendingPlatform' },
      { name: 'Binance NFT Marketplace Development', path: '/BinanceNFT' },
    ],
  },
  {
    id: 'defi',
    title: 'DeFi Development',
    description: 'Decentralized finance platforms with staking, wallets, and smart contract infrastructure.',
    icon: 'TrendingUp',
    gradient: 'from-amber-500 to-orange-600',
    services: [
      { name: 'DeFi Staking Platform Development', path: '/DefiStaking' },
      { name: 'DeFi Token Development', path: '/DeFiTokenDevelopment' },
      { name: 'DeFI Wallet Development', path: '/DeFiWalletDevelopment' },
      { name: 'DeFi Smart Contract Development', path: '/DeFiSmartContractDevelopment' },
      { name: 'DeFi DApps Development', path: '/DeFiDAppsDevelopment' },
      { name: 'DeFi Insurance Development', path: '/DeFiInsuranceDevelopment' },
    ],
  },
  {
    id: 'dex',
    title: 'DEX Development',
    description: 'Decentralized exchange clones and white-label trading platforms.',
    icon: 'ArrowLeftRight',
    gradient: 'from-sky-500 to-indigo-600',
    services: [
      { name: 'Pancakeswap Exchange Clone Development', path: '/PancakeswapExchange' },
      { name: 'Uniswap Exchange Clone Developemnt', path: '/UniswapExchange' },
      { name: 'SushiSwap Exchange Clone Developement', path: '/SushiSwapExchange' },
      { name: 'White Label Exchange Development', path: '/WhiteLabelexchangedevelopment' },
    ],
  },
  {
    id: 'token',
    title: 'Token Development',
    description: 'Custom token creation on Ethereum, BSC, and multi-chain ecosystems.',
    icon: 'Coins',
    gradient: 'from-yellow-500 to-amber-600',
    services: [
      { name: 'Semi -Fungible Token Development', path: '/SemiFungibleTokenDevelopment' },
      { name: 'Binanace Smart Chain BEP20 Token Development', path: '/BinanaceSmartChainBEP20TokenDevelopment' },
      { name: 'Ethereum Token Development', path: '/EthereumTokenDevelopment' },
    ],
  },
  {
    id: 'wallet',
    title: 'Wallet Development',
    description: 'Secure crypto wallet solutions with Web3 connectivity and whitepaper services.',
    icon: 'Wallet',
    gradient: 'from-lime-500 to-green-600',
    services: [
      { name: 'Trust Wallet Clone Development', path: '/TrustWalletCloneDevelopment' },
      { name: 'Wallet Connect Clone', path: '/WalletConnectClone' },
      { name: 'WhitePaper Writting Services', path: '/WhitePaperWrittingServices' },
    ],
  },
  {
    id: 'launchpad',
    title: 'Launchpad Development',
    description: 'GameFi and token launchpad platforms for Web3 project fundraising.',
    icon: 'Rocket',
    gradient: 'from-fuchsia-500 to-purple-600',
    services: [
      { name: 'GameFi Launchapd Developemnt', path: '/GameFiLaunchapd' },
      { name: 'Lunchpad Development', path: '/LunchpadDevelopment' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for every industry vertical.',
    icon: 'Smartphone',
    gradient: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Mobile Development', path: './mobile-app-development-services' },
      { name: 'Cab Booking Apps', path: '/taxi-booking-app-development-company' },
      { name: 'Grocery Apps', path: '/grocery-app-development-company' },
      { name: 'Travelling Apps', path: '/travel-app-development-company' },
      { name: 'Chatting Apps', path: '/chat-app-development-company' },
      { name: 'Fitness Apps', path: '/FitnessApps' },
      { name: 'Rental Apps', path: '/RentalApps' },
      { name: 'Dating Apps', path: '/DatingApps' },
      { name: 'Astrology Apps', path: '/AstrologyApps' },
      { name: 'Food delivery Apps', path: '/food-delivery-app-development-services' },
      { name: 'Social Media Apps', path: '/SocialMediaApps' },
      { name: 'Learning Managment Apps', path: '/LearningManagmentApps' },
      { name: 'Ecommerce Apps', path: '/EcommerceApps' },
      { name: 'Multivendor Home Service Apps', path: '/MultivendorHomeServiceApps' },
    ],
  },
  {
    id: 'metaverse',
    title: 'Metaverse Development',
    description: 'Immersive virtual worlds, showrooms, and social platforms for the metaverse era.',
    icon: 'Box',
    gradient: 'from-indigo-500 to-violet-600',
    services: [
      { name: 'Metaverse Development', path: '/MetaverseDevelopment' },
      { name: 'Metaverse Game Development', path: '/MetaverseGameDevelopment' },
      { name: 'Metaverse NFT Marketplace Development', path: '/MetaverseNFTMarketplaceDevelopment' },
      { name: 'Metaverse Virtual Showroom  Development', path: '/MetaverseVirtualShowroomDevelopment' },
      { name: 'Metaverse Event Platform Development', path: '/MetaverseEventPlatformDevelopment' },
      { name: 'Metaverse Avatar Development', path: '/MetaverseAvatarDevelopment' },
      { name: 'Metaverse Social Media Platform Development', path: '/MetaverseSocialMediaPlatformDevelopment' },
      { name: 'Metaverse Real Estate Development', path: '/MetaverseRealEstateDevelopment' },
      { name: 'Metaverse Virtual Land Development', path: '/MetaverseVirtualLandDevelopment' },
      { name: 'Metaverse Launchpad Development', path: '/MetaverseLaunchpadDevelopment' },
    ],
  },
  {
    id: 'game',
    title: 'Game Development',
    description: 'Skill-based games, fantasy sports, and metaverse gaming experiences.',
    icon: 'Gamepad2',
    gradient: 'from-red-500 to-orange-600',
    services: [
      { name: 'Game Development', path: '/GameDevelopment' },
      { name: 'Metaverse Games Development', path: '/MetaverseGamesDevelopment' },
      { name: 'Ludo Game Development', path: '/LudoGameDevelopment' },
      { name: 'Rummy Game Development', path: '/RummyGameDevelopment' },
      { name: 'Teenpatti Game Development', path: '/TeenpattiGameDevelopment' },
      { name: 'Poker Game Development', path: '/PokerGameDevelopment' },
      { name: 'Tournament Development', path: '/TournamentDevelopment' },
      { name: 'Fantasy Cricket Game Development', path: '/FantasyCricketGameDevelopment' },
    ],
  },
  {
    id: 'ai',
    title: 'AI Development',
    description: 'Cutting-edge AI solutions including generative AI, chatbots, and trading bots.',
    icon: 'Brain',
    gradient: 'from-teal-500 to-emerald-600',
    services: [
      { name: 'AI Development', path: '/ai-development-company' },
      { name: 'Generative AI Development', path: '/generative-ai-development-company' },
      { name: 'AI NFT Generator Development', path: '/ai-nft-image-generator-development' },
      { name: 'AI Crypto Trading Bot Development', path: '/ai-crypto-trading-bot-development' },
      { name: 'AI Chatbot Development', path: '/ai-chatbot-development' },
      { name: 'Custom ChatGPT APP', path: '/custom-chatgpt-app' },
    ],
  },
];

export const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Expert Developers' },
  { value: '4.9', label: 'Client Rating' },
];

export const features = [
  {
    title: 'Personalized Solutions',
    description: 'Every project is tailored to your unique business requirements and goals.',
  },
  {
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with infrastructure that grows with your business.',
  },
  {
    title: 'Customer Focus',
    description: 'Dedicated support and transparent communication throughout the development lifecycle.',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality standards ensure flawless delivery every time.',
  },
];

export const techStack = [
  'React', 'Node.js', 'Solidity', 'Ethereum', 'Polygon', 'AWS',
  'Flutter', 'React Native', 'Python', 'TensorFlow', 'Web3.js', 'Rust',
];
