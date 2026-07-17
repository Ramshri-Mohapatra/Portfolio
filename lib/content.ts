// Single source of truth for all site content.
// Cards, timeline and copy render from this data — no duplicated markup.

// Prefix for files in /public when deployed under a subpath (e.g. a GitHub
// project page at /Portfolio). Next only auto-prefixes its own /_next assets,
// so public-folder references (CV, screenshots) must add this themselves.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Where the site is actually served from. Canonical URL, OG tags and the
// sitemap all derive from this, so they can never drift from reality. It is a
// GitHub project page, hence the origin plus the /Portfolio base path above.
// If a custom domain is ever registered and pointed here, change these two.
const origin = "https://ramshri-mohapatra.github.io";

export const site = {
  name: "Ramshri Mohapatra",
  role: "Data Analyst",
  location: "London, UK",
  email: "rskissan1729@gmail.com",
  github: "https://github.com/Ramshri-Mohapatra",
  linkedin: "https://www.linkedin.com/in/ramshri-mohapatra",
  cv: `${base}/CV.pdf`,
  origin,
  url: `${origin}${base}`,
  // The spine sentence — his own words, lightly trimmed.
  tagline:
    "I turn messy, real-world data into decisions people can act on. I've built the pipelines, dashboards, and models to back that up.",
  heroMicro:
    "First-Class CS grad. Four projects shipped and live. Open to full-time Data Analyst roles.",
};

// Every live demo runs on a free tier that sleeps when idle (Render, Streamlit
// Community Cloud). Said up front so a slow first load reads as free hosting
// rather than a dead link.
export const liveNote =
  "The live apps are on free hosting, so they sleep when nobody's using them. Give the first load up to a minute — it's waking up, not broken.";

export type Stat = { value: string; label: string };

export type Project = {
  id: string;
  index: string;
  name: string;
  path: string; // terminal-style repo path, e.g. ~/fintech-api
  year: string;
  recent?: boolean;
  badge?: string;
  tagline: string; // one human line
  body: string; // why + what, woven together — no marketing
  stats?: Stat[]; // pulled-out real results
  note?: string; // first-person honest aside — rendered as a // comment
  stack: string[];
  live?: string;
  code: string;
  image?: string; // screenshot of the running app, framed as a browser window
};

// Copy sourced from Ramshri's own READMEs — his voice, his numbers.
// Ordered most-recent-first; 2026 work flagged as recent.
export const featuredProjects: Project[] = [
  {
    id: "fintech-api",
    index: "01",
    name: "Fintech API",
    path: "~/fintech-api",
    year: "2026",
    recent: true,
    badge: "Live · CI/CD",
    tagline: "Personal finance, treated as real infrastructure.",
    body: "The backend a proper finance tracker would run on. A production REST API with JWT auth, full transaction CRUD, and per-user isolation enforced at the query level. Dockerised, with a GitHub Actions pipeline that runs the full test suite on every push before anything ships.",
    stats: [
      { value: "12", label: "automated tests" },
      { value: "per-user", label: "isolation at query level" },
    ],
    note: "Built to show I can ship the kind of backend Monzo, Wise or Revolut run on.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "Docker", "CI/CD"],
    live: "https://fintech-api-n3ds.onrender.com/docs",
    code: "https://github.com/Ramshri-Mohapatra/fintech-api",
    image: `${base}/fintechapi.png`,
  },
  {
    id: "trading-system",
    index: "02",
    name: "Algorithmic Trading Backtester",
    path: "~/trading-system",
    year: "2026",
    recent: true,
    badge: "Live demo",
    tagline: "Two strategies, tested properly.",
    body: "Do simple rule-based strategies hold up once you test them properly, with no peeking at the future? This backtester pulls real OHLCV data, calculates SMA, EMA and RSI from scratch, and runs an MA-crossover and an RSI strategy with look-ahead bias designed out from the start. Everything lands in a live Streamlit and Plotly dashboard.",
    stats: [
      { value: "0.73", label: "RSI Sharpe on MSFT (vs 0.50)" },
      { value: "−28%", label: "max drawdown (vs −39%)" },
    ],
    note: "The lesson wasn't which strategy 'won'. It was that raw return is a poor way to judge one; the risk-adjusted numbers tell the real story.",
    stack: ["Python", "pandas", "NumPy", "yfinance", "Plotly", "Streamlit"],
    live: "https://trading-system-fegxbv3zb27sfbncazbvuu.streamlit.app/",
    code: "https://github.com/Ramshri-Mohapatra/trading-system",
    image: `${base}/backtester.png`,
  },
  {
    id: "vigil-ai",
    index: "03",
    name: "VIGIL-AI",
    path: "~/vigil-ai",
    year: "2024–2025",
    badge: "Published research",
    tagline: "My dissertation. Teaching a transformer to read security chatter.",
    body: "Can a fine-tuned model pull the signal (malware names, CVEs, threat actors) out of noisy open-source security text? The pipeline ingests from Reddit, news APIs and RSS feeds, runs it through a fine-tuned DeBERTa v3 NER model, and stores everything in MongoDB with schema validation and audit logging. A Live Insights page streams the feed and tags the cyber entities in each fetched article as they arrive. It scored 66.3% F1 after tuning and graded 80%, First Class.",
    stats: [
      { value: "66.3%", label: "F1 after tuning" },
      { value: "80%", label: "dissertation grade" },
    ],
    note: "Caveat: live collection stopped when my Google Cloud free trial ran out, so the feed streams from stored articles rather than new ones. The paper was accepted at the ICETCS & ITSS-IoE 2025 conference, with a Springer publication still in process.",
    stack: ["Python", "DeBERTa v3", "HuggingFace", "MongoDB", "GCP", "Streamlit"],
    live: "https://ai-powered-osint-tool-ega8iyln9qhy2rapdg6z6k.streamlit.app/",
    code: "https://github.com/Ramshri-Mohapatra/AI-Powered-OSINT-Tool",
    image: `${base}/vigilai.png`,
  },
];

export const moreProjects: Project[] = [
  {
    id: "containerised-api",
    index: "04",
    name: "Containerised REST API",
    path: "~/containerised-api",
    year: "2026",
    recent: true,
    tagline: "Drilling the full delivery loop.",
    body: "A task API built to practise shipping the whole way. Dockerised, image published to Docker Hub, 8 tests, and a GitHub Actions pipeline that runs the suite and deploys to Render on every push.",
    stack: ["FastAPI", "Docker", "pytest", "GitHub Actions", "Render"],
    live: "https://task-api-latest-ljxo.onrender.com/docs",
    code: "https://github.com/Ramshri-Mohapatra/Containerised-API-Deployment-Project",
  },
  {
    id: "stock-sentiment",
    index: "05",
    name: "Stock Sentiment Analysis",
    path: "~/stock-sentiment",
    year: "2025–2026",
    recent: true,
    tagline: "Can headlines predict the market? A split bug said yes; the honest number says no.",
    body: "Three NLP classifiers — bigram bag-of-words with Random Forest, TF-IDF plus sentiment with a tuned Logistic Regression, and a hard-voting ensemble — predicting daily stock direction from 4,101 days of news headlines, with GridSearchCV tuning and strictly chronological splits to rule out lookahead. Revisiting it in 2026 turned up a silent bug: an unparsed date column made a date filter run as a string comparison, shrinking the test set from 378 days to 126 and inflating accuracy to 56.3%. Fixed, the real figure is 51.6% — a permutation test showed the original claim falls well within the range reachable by chance (p = 0.14).",
    stats: [
      { value: "51.6%", label: "corrected directional accuracy" },
      { value: "p = 0.14", label: "permutation test on the original 56.3% claim" },
    ],
    note: "A positive control — the identical pipeline scoring 81.3% on a corpus with known sentiment signal — ruled out a broken pipeline as the cause. None of the three models beat a majority-class baseline once the split was fixed.",
    stack: ["Python", "scikit-learn", "pandas", "NLTK", "TextBlob", "SciPy"],
    code: "https://github.com/Ramshri-Mohapatra/Stock-Sentiment-Analysis",
  },
  {
    id: "spam-classifier",
    index: "06",
    name: "Email Spam Classification",
    path: "~/spam-classifier",
    year: "2026",
    recent: true,
    tagline: "Audited my own group's coursework and found the labels were fake.",
    body: "A spam classifier over 33.7k labelled Enron emails — TF-IDF into a decision tree, a linear SVM and a PyTorch MLP — with the linear SVM reaching 98.7% accuracy and 0.987 F1. It started as an audit of my university group's original coursework: its labels were keyword-matched from the same text fed to the model, so it was learning to reproduce a regular expression, not detect spam. Replaced the corpus, fixed three separate sources of train/test leakage, then tested against an independent human-labelled mailbox: recall fell from 0.99 to 0.64 on real mail, every miss a newsletter or stock alert absent from the honeypot-derived training spam.",
    stats: [
      { value: "98.7%", label: "accuracy / 0.987 F1 (test set)" },
      { value: "0.64", label: "recall on independent real mail (from 0.99)" },
    ],
    note: "The gap on real mail is the training distribution, not the model — no amount of tuning on the training corpus would close it. Five defects fixed in total, each pinned shut by a regression test.",
    stack: ["Python", "scikit-learn", "PyTorch", "imbalanced-learn", "pandas"],
    code: "https://github.com/Ramshri-Mohapatra/enron-spam-classification",
  },
];

// Personality, not résumé — surfaced honestly as play.
export const funProjects = [
  {
    name: "Realm Runner: The Epic Tale of the PurpleBoy",
    blurb: "A 2D game built in Java.",
    code: "https://github.com/Ramshri-Mohapatra/Realm-Runner-The-Epic-Tale-of-the-PurpleBoy",
  },
  {
    name: "Porky the Saviour",
    blurb: "A short boss-fight game for younger players.",
    code: "https://github.com/Ramshri-Mohapatra/Porky-The-Saviour",
  },
  {
    name: "Solar System Animation",
    blurb: "A simulation of the solar system in Processing.",
    code: "https://github.com/Ramshri-Mohapatra/Solar-System-Animation",
  },
  {
    name: "CS:GO SQL Database",
    blurb: "An ER-modelled database for an esports match scenario.",
    code: "https://github.com/Ramshri-Mohapatra/CSGO_SQL_DATABASE",
  },
];

export const story = [
  "I like data most when it's still a mess, before it's clean and before anyone's sure what it means. Plenty of people want to skip straight to the model or the dashboard. I'm happier in the middle of the pipeline, in the gap between “we have data” and “we know what to do with it.” Cleaning it, checking it's telling the truth, querying it, then explaining what I found to someone who wants the answer, not the code.",
  "I chose data over pure software development, and over the last year I've built and shipped four projects end to end. All of them are live, and all of them are something you can click into and poke at. If I'm going to claim I can do something, I'd rather show you the running version.",
  "Away from the screen I play guitar and listen to pretty much everything, I'm in the gym most days, and I still build small video games for fun. That's where the stray game repos come from. I'm a problem-solver by temperament; the moment everyone else says “this can't be done” is my favourite part. Right now most of that energy is pointed at finding the right data role.",
];

export const storyStats = [
  { value: "First Class", label: "BSc Computer Science" },
  { value: "4", label: "projects shipped" },
  { value: "1", label: "conference paper accepted" },
  { value: "1", label: "Springer publication (in process)" },
];

export const opinion = {
  lead: "Look-ahead bias quietly ruins most backtests.",
  body: "If your strategy can see the future during testing, it's not a strategy, it's a fantasy. I build the guardrails in first, then let the numbers be boring and honest.",
};

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  note: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "Apr – Sep 2024",
    role: "Unity Developer (Intern → led a team of 3)",
    org: "Constituents AI & Technology",
    note: "Delivered client-facing VR education software end to end. Cut load times 40% through data-driven profiling, and went from individual contributor to leading three interns within three months.",
  },
  {
    period: "Jun – Sep 2023",
    role: "Summer Intern",
    org: "GoldenPegasus IT Consulting",
    note: "Built Power BI dashboards from Salesforce CRM data in a client-facing consulting environment. My first real taste of BI and data work.",
  },
  {
    period: "Dec 2022 – Apr 2025",
    role: "Student Ambassador",
    org: "Unitemps",
    note: "Talks and one-to-one guidance across 50+ higher-education fairs, to audiences of 50 to 200, turning complex processes into plain language for non-specialists. The exact skill a data analyst lives on.",
  },
  {
    period: "Aug 2024 – Present",
    role: "Bartender (part-time)",
    org: "Stonegate Group",
    note: "A real job with real pressure: reading a room, moving fast, keeping people happy on a busy night. Good for the soft skills no lecture teaches.",
  },
];

export const education = {
  degree: "BSc (Hons) Computer Science, First Class",
  school: "City, University of London",
  period: "2022–2025",
  highlights: [
    "Dissertation: VIGIL-AI (80%), accepted at the ICETCS & ITSS-IoE 2025 conference; Springer Nature publication in process",
    "President's International Scholarship Awardee (2022–2023)",
    "Key modules: Algorithms & Data Structures, Distributed Systems, Statistics, Databases (SQL), AI, NLP, Software Engineering",
  ],
};

export const contact = {
  headline:
    "Open to full-time Data Analyst roles.",
  body:
    "Right to work, no restrictions, available immediately. If your team's problems line up with what I've built, let's talk.",
};

export const nav = [
  { href: "#work", label: "work" },
  { href: "#story", label: "story" },
  { href: "#path", label: "path" },
  { href: "#contact", label: "contact" },
];
