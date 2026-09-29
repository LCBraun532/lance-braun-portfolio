export const companies = [
  "FICO",
  "Fiserv",
  "Quad Graphics",
  "Kenall Lighting",
  "GE Healthcare",
  "Ellsworth Adhesives",
];

export const heroStats = [
  { value: "15", label: "Years in Content Strategy" },
  { value: "1,500+", label: "Podcast Subscribers in 90 Days (FICO)" },
  { value: "37.5x", label: "Revenue Growth Driven (Ellsworth)" },
];

export const philosophyCards = [
  {
    title: "Complex-Domain Translation",
    body: "Risk, identity, compliance, analytics, enterprise workflows — I turn dense, technical subject matter into narratives that decision-makers and practitioners actually want to read.",
  },
  {
    title: "Built to Cross Functions",
    body: "I don't write in a vacuum. Product Marketing, Sales, Demand Gen, Legal, Compliance, and partner teams shape the brief; I make sure the content actually moves their number.",
  },
  {
    title: "AI-Enabled, Not AI-Replaced",
    body: "I build the editorial systems — transcription, repurposing, QA, governance — that let AI accelerate production while a human still owns accuracy, nuance, and voice.",
  },
  {
    title: "Comfortable From Zero",
    body: "Blank page or existing asset in need of a rewrite — I operate confidently either way, and I know how to make a good asset work harder across more channels.",
  },
];

export const byTheNumbers = [
  { value: "1,500+", label: "Podcast Subscribers in 90 Days (FICO)" },
  { value: "85%", label: "SQL Volume Increase (Quad Graphics)" },
  { value: "$3.75M", label: "Annual Online Sales, from $100K (Ellsworth)" },
  { value: "88%", label: "Sales Lift After CMS Migration (Ellsworth)" },
  { value: "65%", label: "Faster Content Development (GE Healthcare)" },
  { value: "45%", label: "Email Open Rate Increase (Quad Graphics)" },
  { value: "35%", label: "Faster Project Turnaround (Fiserv)" },
  { value: "94%", label: "Twitter Follower Growth in 2 Yrs (Ellsworth)" },
];

export const competencies = [
  {
    title: "Complex-Domain Translation",
    body: "Converting risk, identity, compliance, and analytics concepts into clear, persuasive content for enterprise buyers and practitioners.",
  },
  {
    title: "Partner & Channel-Aligned Content",
    body: "Co-marketing, comarketing, and partner-ecosystem content that supports recruitment, onboarding, and activation.",
  },
  {
    title: "Solution Briefs & Sales Enablement",
    body: "Field-ready assets that give sales teams language that actually closes — built from real SME and customer input.",
  },
  {
    title: "Integrated Campaigns",
    body: "Landing pages, email sequences, webinars, and blogs built to work together across a single campaign arc.",
  },
  {
    title: "Podcast & Audio Content",
    body: "End-to-end production — scripting, guest sourcing, hosting, and multi-channel distribution across Apple, Spotify, YouTube, iHeart, Pandora, and Amazon Music.",
  },
  {
    title: "SME & Customer Interviews",
    body: "Extracting technical insight from subject-matter experts and turning it into accessible, accurate storytelling.",
  },
  {
    title: "Paid Media & PPC",
    body: "Search, display, remarketing, and social ad campaigns built on keyword research, multivariate testing, and disciplined budget management.",
  },
  {
    title: "SEO, AEO & GEO",
    body: "Traditional search-aware content strategy plus Answer Engine and Generative Engine Optimization — structuring content and vertical messaging so it surfaces in AI-generated answers across ChatGPT, Claude, Gemini, and Perplexity, not just SERPs.",
  },
  {
    title: "AI-Assisted Drafting & Repurposing",
    body: "Transcription, repurposing, and editorial QA workflows that accelerate production without sacrificing accuracy.",
  },
  {
    title: "Editorial Calendars & Governance",
    body: "Scalable systems — calendars, gap analysis, reusable asset frameworks — that keep large content operations coherent.",
  },
];

export const techStack = [
  "Copilot",
  "ChatGPT",
  "Claude",
  "Perplexity",
  "Writer",
  "Wondercraft.ai",
  "Adobe Creative Suite",
  "Descript",
  "Asana",
  "Salesforce",
  "Salesforce Marketing Cloud",
  "Pardot",
  "Sitecore",
  "WordPress",
  "SEMRush",
  "SearchMetrics",
  "GA4",
  "Google Ads",
  "Google Tag Manager",
  "SharePoint",
  "Hootsuite",
  "Podcastle.ai",
  "Cartesia.ai",
];

export const certifications = [
  "AI for Product Marketers — Pragmatic Institute",
  "Google Analytics",
  "Google Ads Display",
  "Google Ads Paid Search",
  "Google Ads Fundamentals",
  "LinkedIn Learning SEO",
  "HubSpot Content Marketing",
];

export const currentCoursework = [
  {
    name: "Highspot",
    focus: "Sales Enablement Content Management",
  },
  {
    name: "Jasper",
    focus: "AI Content Generation & On-Brand Voice at Scale",
  },
  {
    name: "AirOps",
    focus:
      "Rapid On-Brand Content Deployment, Brand Consistency & Marketing Workflow Automation",
  },
];

export type CaseStudy = {
  number: string;
  company: string;
  title: string;
  tags: string[];
  role: string;
  challenge: string;
  built: string[];
  did: string;
  results: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    company: "Fair Isaac Corporation (FICO)",
    title: "Full-Funnel Content Strategy for Scores B2B & Software",
    tags: ["Jan 2022 – Nov 2025", "Enterprise SaaS", "Risk & Compliance"],
    role: "Senior Manager, Brand & Integrated Content Strategy",
    challenge:
      "FICO needed enterprise audiences — risk officers, compliance leaders, lenders, analysts — to engage with dense, regulated subject matter (credit scoring, fraud, identity, analytics) without diluting technical accuracy. Content had to serve both practitioners and decision-makers, and align with Product Marketing, Sales, Digital, Legal, Compliance, and Demand Gen on every launch.",
    built: [
      "Landing pages, webinars, customer stories, and solution briefs for enterprise and industry-specific campaigns",
      "The FICO Score Industry Insights podcast — scripted, hosted, and produced end-to-end across Apple, Spotify, YouTube, Pandora, iHeart Radio, and Amazon Music",
      "AI-enabled audio blogs syndicated across Software and Scores segments",
      "SEO audits, quarterly content-asset audits, and Google Analytics dashboards tracking engagement and pipeline influence",
    ],
    did: "I owned full-funnel content strategy across the Scores B2B and Software portfolios, interviewing SMEs across risk, fraud, identity, and analytics to keep every asset technically accurate. I partnered directly with Product Marketing, Demand Gen, Digital, Legal, and Compliance to keep messaging accurate, regulation-aligned, and consistent across launches.",
    results: [
      { value: "1,500+", label: "Podcast subscribers in first 90 days" },
      { value: "12%", label: "Growth in qualified lead generation" },
      { value: "5% / 10%", label: "Unique visitor lift / engagement duration lift" },
    ],
  },
  {
    number: "02",
    company: "Fiserv",
    title: "Content Strategy for Banking, Lending & Financial Services",
    tags: ["Nov 2019 – Oct 2021", "Fintech", "Field Enablement"],
    role: "Digital Content Strategist",
    challenge:
      "Fiserv's Account Processing and Bank Solutions business lines needed integrated content that supported both demand generation and field sales, with strict adherence to corporate branding, legal, and AP guidelines — while a large share of existing content on Fiserv.com was already out of date.",
    built: [
      "Landing pages, blogs, case studies, sales collateral, email campaigns, and video scripts mapped to demand stages",
      "A podcast content series spotlighting thought leadership across multiple business lines, distributed via Fiserv.com, iTunes, GooglePlay, and Spotify",
      "A SharePoint-based digital asset management system built with IT",
      "Analytics dashboards defining KPIs and surfacing content in need of updates",
    ],
    did: "I researched, interviewed, wrote, and edited content across the funnel, then used analytics to find that 42% of Account Processing content on Fiserv.com needed updating — prioritizing fixes that improved accuracy and compliance. I also helped integrate SharePoint as the department's DAM system, and wrote, hosted, and produced every episode of the business-line podcast series myself.",
    results: [
      { value: "45%", label: "Page traffic increase from podcast series" },
      { value: "35%", label: "Faster project turnaround via SharePoint DAM" },
      { value: "42%", label: "Of legacy content flagged for update" },
    ],
  },
  {
    number: "03",
    company: "Quad Graphics",
    title: "The BetterWays Thought-Leadership Platform",
    tags: ["Mar 2017 – Mar 2019", "High-Volume Content", "PPC & Narrative"],
    role: "Digital Marketing & Social Media Specialist",
    challenge:
      "Quad needed a high-volume content operation that could support integrated campaigns across enterprise and industry-specific audiences, plus a thought-leadership platform with real editorial identity — and paid search and email programs that were underperforming relative to spend.",
    built: [
      "The BetterWays thought-leadership platform, with editorial franchises and narrative frameworks built alongside SMEs",
      "National and regional PPC, social, retargeting, and display campaigns with A/B and multivariate testing",
      "A redesigned Pardot email program with new segmentation and creative",
      "Internal sales case-study podcasts distributed via ShowPad",
    ],
    did: "I built the BetterWays platform from the ground up, established recurring editorial franchises, and ran national/regional PPC campaigns that converted directly into sales-qualified pipeline. I also rebuilt the Pardot email program's targeting and creative to lift open and conversion rates.",
    results: [
      { value: "85%", label: "Sales-qualified lead increase" },
      { value: "$3.5M", label: "SQL-sourced pipeline within 6 months" },
      { value: "45% / 50%", label: "Email open rate / conversion rate increase" },
    ],
  },
  {
    number: "04",
    company: "Kenall Lighting",
    title: "Product Launch Content & Website Redesign",
    tags: ["Aug 2015 – Aug 2016", "B2B Manufacturing", "UX & SEO"],
    role: "Digital Marketing Manager",
    challenge:
      "Kenall needed a strategic digital marketing plan supporting $84MM of core business across kenall.com and indigo-clean.com — spanning SEO, SEM, email, social, webinars, CRM growth, and a responsive redesign — with a three-person team to execute it.",
    built: [
      "Webinars, whitepapers, case studies, and educational content for product launches",
      "A responsive website redesign improving UX and SEO across both properties",
      "A proactive, recurring SEO audit program",
      "A work-trafficking system to keep every digital marketing project on schedule",
    ],
    did: "I directed the responsive redesign of the site's content architecture for clarity and SEO, managed a team of three across CRM, content, and design, and ran recurring SEO audits that steadily moved search rankings up.",
    results: [
      { value: "$84MM", label: "Core business supported" },
      { value: "+4", label: "Average SEO position improvement per audit cycle" },
      { value: "3", label: "Team members managed" },
    ],
  },
  {
    number: "05",
    company: "GE Healthcare",
    title: "Biomedical Education Content Platform",
    tags: ["Aug 2014 – Jul 2015", "Contract", "Clinical & Technical"],
    role: "Educational Content Manager (Contract)",
    challenge:
      "GE Healthcare needed clarity-driven educational video content for a new biomedical engineering community web portal, working across modality advisory boards, legal, field and online engineers, and SMEs — with zero room for regulatory or technical error and an offshore development team to guide.",
    built: [
      "Educational video content for the biomedical community portal",
      "Page prototyping and design workflows for offshore development",
      "Process documentation to guide the offshore team to strict legal, regulatory, and branding standards",
      "In-house audio podcasts produced directly with SMEs",
    ],
    did: "I managed acquisition, production, and development of the content end-to-end, wrote process documentation that kept an offshore team aligned to compliance standards, and produced SME podcasts in-house to cut both cost and turnaround time.",
    results: [
      { value: "65%", label: "Reduction in development time" },
      { value: "32%", label: "Fewer workflow errors" },
      { value: "$1,700", label: "Saved per episode via in-house production" },
    ],
  },
  {
    number: "06",
    company: "Ellsworth Adhesives",
    title: "Global Web Content Operations, 22 Sites",
    tags: ["Oct 2009 – May 2014", "Global B2B", "Distributor Network"],
    role: "Manager, Global Web Services",
    challenge:
      "Ellsworth's online sales were sitting near $100K annually, with content operations fragmented across 22 global sites serving distributors, industry groups, and technology alliances — no unified governance, lifecycle process, or social presence behind any of it.",
    built: [
      "Partner-aligned content supporting distributors, industry groups, and technology alliances",
      "Editorial governance, QA systems, and content lifecycle processes across all 22 global sites",
      "Social media programs across LinkedIn, Facebook, Twitter, YouTube, Pinterest, and iTunes",
      "A CMS and hosting migration spanning requirements, taxonomy, design, testing, and deployment",
      "Google AdWords, remarketing, and abandoned-cart recovery programs",
    ],
    did: "I owned content operations across all 22 global sites, led the corporate site's full CMS and hosting migration from requirements through deployment, and built the social, paid, and lifecycle-marketing programs that turned a fragmented multi-market footprint into one coherent, revenue-driving system.",
    results: [
      { value: "37.5x", label: "Online sales growth: $100K → $3.75M/yr" },
      { value: "88%", label: "Sales increase after CMS/hosting migration" },
      { value: "94% / 90% / 90% / 86%", label: "Twitter / podcast / Facebook / YouTube growth (2 yrs)" },
    ],
  },
  {
    number: "07",
    company: "Ellsworth Adhesives",
    title: "Enterprise Website Migration: Northwoods Titan to Ektron",
    tags: ["CMS Migration", "Vendor & Hosting Selection", "SEO Architecture"],
    role: "Project Lead, Manager — Global Web Services",
    challenge:
      "Ellsworth's corporate site was outgrowing its Northwoods Titan CMS. The migration to Ektron 400 carried four goals at once: port every piece of existing content without loss, redesign the site's look and functionality, expand the product catalog, and improve site search and product filtering — all without disrupting a live, revenue-generating storefront.",
    built: [
      "Formal functional specifications developed from stakeholder-meeting input and vendor coordination, presented to management for approval",
      "A hosting-provider due-diligence process evaluating six firms, narrowed to three finalists with annual budget comparisons for management sign-off",
      "A revised site architecture on Ektron built to improve SEO structure and Google Merchant Services visibility",
      "A structured defect-management process with Ektron and internal stakeholders through post-launch stabilization",
    ],
    did: "I ran point on the entire migration: coordinating stakeholder meetings to shape functional specifications, then owning the schedule of deliverables and milestones against our vendor from kickoff through launch. I led user-acceptance testing with stakeholders to confirm every piece of approved functionality shipped as specified, evaluated and narrowed six hosting firms down to a final recommendation, and worked directly with Ektron and internal IT to migrate both development and production environments. Once live, I stayed accountable for defect management, resolving functionality issues in partnership with Ektron and our internal teams.",
    results: [
      { value: "Titan → Ektron", label: "Full CMS platform migration, zero content lost" },
      { value: "6 → 3", label: "Hosting vendors evaluated down to finalists" },
      { value: "Dev + Prod", label: "Both environments migrated to new hosting provider" },
    ],
  },
];

export const faqs = [
  {
    q: "What does Lance specialize in?",
    a: "Content strategy for complex, regulated, and technical domains — risk, identity, compliance, analytics, and enterprise workflows — turned into content that works for Product Marketing, Sales, and Demand Gen at the same time. Landing pages, webinars, customer stories, podcasts, solution briefs, and sales enablement, built from real SME and customer interviews.",
  },
  {
    q: "What industries has Lance worked in?",
    a: "15 years across SaaS, fintech, financial services, enterprise B2B technology, healthcare/clinical education, industrial manufacturing, and global distribution — including four years at FICO and two at Fiserv on regulated financial-services content.",
  },
  {
    q: "What results has Lance delivered?",
    a: "1,500+ podcast subscribers in 90 days at FICO. An 85% SQL increase and $3.5M in sales-qualified pipeline within six months at Quad Graphics. Online sales growth from $100K to $3.75M annually — plus an 88% sales lift after a full CMS migration — at Ellsworth Adhesives. A 65% reduction in development time and 32% fewer workflow errors at GE Healthcare.",
  },
  {
    q: "How does Lance approach AI in content production?",
    a: "As an accelerant, not a replacement. He builds AI-enabled workflows for transcription, repurposing, and editorial QA that speed up production, while keeping a human editorial owner accountable for accuracy, nuance, and voice — especially in regulated environments where that distinction matters.",
  },
  {
    q: "What formats does Lance work in?",
    a: "Landing pages, email campaigns, webinars, customer stories, solution briefs, sales collateral, blogs, podcasts and video scripts, paid media, and multimedia educational content — plus the editorial calendars, governance models, and repurposing frameworks that keep all of it scalable.",
  },
];

export const contact = {
  email: "lancebraun@gmail.com",
  phone: "414 803 0364",
  location: "Wauwatosa, WI",
  linkedin: "https://www.linkedin.com/in/lcbraun/",
  portfolio: "https://lancebraun.com",
};
