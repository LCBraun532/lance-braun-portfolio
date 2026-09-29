export type WorkSample = {
  category: string;
  company: string;
  companyLogo: string;
  title: string;
  role: string;
  bullets: string[];
  links: { label: string; href: string }[];
  audioSamples?: { label: string; url: string; duration: string }[];
};

export const workSamples: WorkSample[] = [
  {
    category: "Case Study",
    company: "Fiserv",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/ba2418b2251340ad85c089ac14646200.png",
    title: "PeoplesBank: Propels Growth With Access to Market Insights",
    role: "Content Strategist & Copywriter",
    bullets: [
      "Developed a full B2B case study on how PeoplesBank (York, PA) used Fiserv's BankAnalyst® Market platform to identify high-growth branch locations and expand its footprint",
      "Conducted stakeholder interviews with the VP of Marketing and SVP of Retail; translated concrete outcomes — branch expansion, new account growth — into a compelling narrative arc",
      "Positioned Fiserv as a strategic consulting partner rather than a technology vendor, reinforcing a key differentiator in the enterprise sales cycle",
    ],
    links: [
      {
        label: "View Case Study",
        href: "https://www.fiserv.com/content/dam/fiserv-ent/final-files/marketing-collateral/case-studies/peoples-bank-case-study.pdf",
      },
    ],
  },
  {
    category: "Point of View",
    company: "Fiserv",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/ba2418b2251340ad85c089ac14646200.png",
    title: "The Growth of Digital Banking",
    role: "Author & Designer",
    bullets: [
      "Authored and designed a thought leadership POV paper synthesizing Fiserv proprietary research, Plancomm & Accenture survey data, and pandemic-era consumer behavioral shifts",
      "Argued a clear strategic framework — Engagement, Efficiency, Insights — to help financial institutions rethink and elevate their digital strategies",
      "Positioned Fiserv as a category authority on digital transformation, supporting demand generation campaigns and complex financial institution sales",
    ],
    links: [
      {
        label: "Read POV Paper",
        href: "https://www.fiserv.com/content/dam/fiserv-ent/final-files/marketing-collateral/point-of-view-papers/The_Growth_of_Digital_Banking_POV_Paper_0121.pdf",
      },
    ],
  },
  {
    category: "Podcast Series",
    company: "Fiserv",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/ba2418b2251340ad85c089ac14646200.png",
    title: "Branch Evolution — A Fiserv Podcast",
    role: "Host, Producer & Scriptwriter",
    bullets: [
      "Scripted, hosted, and engineered a branded podcast series exploring branch innovation, consumer banking trends, and financial technology strategy",
      "Managed director-level SME interviews and collaborated with Legal and GMG teams to navigate enterprise approval workflows in a highly regulated environment",
      "Distributed across YouTube, Apple Podcasts, and Spotify — a thought leadership channel reaching Fiserv clients, prospects, and industry analysts",
    ],
    links: [
      {
        label: "Listen to Episodes",
        href: "https://www.fiserv.com/en/lp/branch-evolution-podcast.html",
      },
    ],
  },
  {
    category: "Infographic",
    company: "Fiserv",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/ba2418b2251340ad85c089ac14646200.png",
    title: "Next Generation Digital Banking",
    role: "Content Strategist & Copywriter",
    bullets: [
      "Distilled Fiserv's enterprise digital banking platform into a visually scannable one-pager targeting community bank and credit union decision-makers",
      "Translated cloud architecture, data insights dashboards, and P2P payments into clear, benefit-driven language aligned to audience pain points",
      "Front-line sales enablement asset distributed nationally to Fiserv's client-facing teams at a major product launch",
    ],
    links: [
      {
        label: "View Infographic",
        href: "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/966a65919a3f417e90dc26288e36d23e.pdf",
      },
    ],
  },
  {
    category: "Podcast Series",
    company: "FICO",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/09fdc7d55937430fb4b340f6165e03dc.png",
    title: "FICO® Score Industry Insights",
    role: "Host & Moderator",
    bullets: [
      "Created and hosted FICO-branded thought leadership covering credit scoring, lending economics, and consumer financial trends",
      "Produced both video vodcasts and audio-only episodes distributed across YouTube, Apple Podcasts, Spotify, iHeart, and other podcast platforms to maximize reach across the credit industry",
      "Grew to 1,500+ subscribers within the first 90 days of launch",
    ],
    links: [
      {
        label: "Watch Vodcast Series",
        href: "https://www.youtube.com/watch?v=g0O-5F2GS9c&list=PLS5N4W1Ufcu9oczSpFcbKs0fvXMI0M7QZ",
      },
      {
        label: "Listen on Apple Podcasts",
        href: "https://podcasts.apple.com/us/podcast/fico-score-industry-insights/id1707436796",
      },
    ],
  },
  {
    category: "Podcast Series",
    company: "FICO",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/09fdc7d55937430fb4b340f6165e03dc.png",
    title: "FICO Score 10T: Early Adoption Benefits and Strategies",
    role: "Script Developer, Guest Prep & Producer",
    bullets: [
      "Developed and wrote the episode script and guest prep materials for a roundtable discussion featuring Michael Crockett (Xactus), Amber Christman, Alyson Finn, and Lance Braun (FICO)",
      "Panel covers the pathway to FICO Score 10T migration and the benefits lenders and portfolio managers realize by leveraging trended data in FICO's most predictive score",
      "Responsible for full production cycle: script development, guest preparation, recording, and post-production",
    ],
    links: [
      {
        label: "Listen to Episode",
        href: "https://www.fico.com/en/latest-thinking/podcast/fico-score-10t-early-adoption-benefits-and-strategies",
      },
    ],
  },
  {
    category: "Audio Blog Series",
    company: "FICO",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/09fdc7d55937430fb4b340f6165e03dc.png",
    title: "FICO Industry Insights Thought Leadership Audio Blog Series",
    role: "Producer & AI Content Strategist",
    bullets: [
      "Scripted and produced AI-assisted audio blog content extending the FICO® Score Industry Insights franchise to new channels and formats",
      "Applied SME voice cloning to maintain subject matter authenticity while dramatically compressing production timelines",
      "Demonstrated how AI-integrated workflows can scale editorial output without sacrificing quality or compliance standards",
    ],
    links: [],
    audioSamples: [
      {
        label: "Financial Literacy — Janelle",
        url: "https://g.tlcdn.com/view/b141e01127ff4a4e899d2e44b2794718.mp3",
        duration: "7:26",
      },
      {
        label: "Industry Insights — Aninda",
        url: "https://g.tlcdn.com/view/d4f55a81be51476b9e5a50d9dcad8fba.mp3",
        duration: "12:06",
      },
    ],
  },
  {
    category: "Video Content",
    company: "Ellsworth Adhesives",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/7e6a63b76fa140ea86e23bbba9bf6c1d.png",
    title: "Ask the Glue Doctor & Fisnar Instructional Video Series",
    role: "Producer & Scriptwriter",
    bullets: [
      "Scripted, produced, and distributed the 'Ask the Glue Doctor' branded video series, reaching engineering and procurement audiences on YouTube and corporate websites",
      "Produced Fisnar instructional video content — scripting demonstrations, directing SMEs on camera, and building and narrating videos that serve both sales enablement and client education goals",
      "Coordinated with supplier partners including 3M, Henkel, and Dow Corning to develop technically accurate content aligned to specific product lines",
    ],
    links: [
      {
        label: "Watch on YouTube",
        href: "https://www.youtube.com/watch?v=ao4YxkG3ybo&list=PLS5N4W1Ufcu-IgjRAlrmGLfPGnnNDTgEb",
      },
    ],
  },
  {
    category: "LinkedIn Featured",
    company: "LinkedIn Featured Section",
    companyLogo:
      "https://galaxy-prod.tlcdn.com/view/user_31pwIcYr2gZbOf4vg7NTzlabdJX/cb5a3afe198a4cbc864c224fa0cd433f.png",
    title: "Additional Work Samples",
    role: "Content Strategist",
    bullets: [
      "Curated writing samples, campaigns, and content strategy work published on Lance's LinkedIn Featured section",
      "Includes examples spanning fintech, industrial B2B, and consumer financial content — demonstrating full breadth of channels and industries",
      "Updated regularly to reflect current projects and new client engagements",
    ],
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/lcbraun/details/featured/",
      },
    ],
  },
];

export const workSampleCategories = [
  "All",
  ...Array.from(new Set(workSamples.map((w) => w.category))),
];
