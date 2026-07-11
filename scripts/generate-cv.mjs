// Generates public/CV.pdf — a clean, ATS-friendly light resume.
// Content mirrors CV.md. Run: npm run cv  (also runs automatically before build).

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "CV.pdf");
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const INK = "#111318";
const MUTED = "#555b66";
const ACCENT = "#0b7a4f"; // print-safe darker green
const RULE = "#d7dbe0";

const doc = new PDFDocument({ size: "A4", margin: 48 });
doc.pipe(fs.createWriteStream(outPath));

const L = doc.page.margins.left;
const R = doc.page.width - doc.page.margins.right;
const W = R - L;

function rule(y) {
  doc.moveTo(L, y).lineTo(R, y).lineWidth(0.7).strokeColor(RULE).stroke();
}
function heading(text) {
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ACCENT).text(text.toUpperCase(), { characterSpacing: 1 });
  rule(doc.y + 2);
  doc.moveDown(0.4);
}
function bullet(text) {
  doc.font("Helvetica").fontSize(9.5).fillColor(INK);
  doc.text(`•  ${text}`, L + 6, doc.y, { width: W - 6, align: "left", lineGap: 1.5 });
  doc.moveDown(0.15);
}

// ---- Header ----
doc.font("Helvetica-Bold").fontSize(22).fillColor(INK).text("Ramshri Mohapatra");
doc.font("Helvetica").fontSize(10).fillColor(ACCENT).text("Data Analyst & Engineer");
doc.font("Helvetica").fontSize(9).fillColor(MUTED)
  .text("London, UK  |  +44 7833 889303  |  rskissan1729@gmail.com", { lineGap: 1 })
  .text("github.com/Ramshri-Mohapatra  |  linkedin.com/in/ramshri-mohapatra");
doc.moveDown(0.2);

// ---- Summary ----
heading("Professional Summary");
doc.font("Helvetica").fontSize(9.5).fillColor(INK).text(
  "First-class Computer Science graduate from City, University of London, with hands-on experience in data pipeline engineering, database design, and applied statistical and ML methods for drawing conclusions from real-world, noisy data. Built ETL pipelines processing live datasets, deployed multiple production systems independently, and gained hands-on exposure to BI dashboarding and CRM data during a consulting internship. Right to work in the UK.",
  { align: "left", lineGap: 1.5 }
);

// ---- Skills ----
heading("Technical Skills");
const skills = [
  ["Languages", "SQL, Python, C++, Java"],
  ["BI & Reporting", "Excel, Power BI, Tableau, Plotly, Streamlit, Matplotlib"],
  ["Data & Storage", "PostgreSQL, SQLAlchemy ORM, MongoDB, data modelling, ETL pipelines"],
  ["Data & ML", "pandas, NumPy, scikit-learn, HuggingFace Transformers, NLP, TF-IDF, GridSearchCV, statistical analysis, data validation"],
  ["Backend", "FastAPI, RESTful API design, JWT auth, OAuth2, dependency injection, Pydantic"],
  ["Cloud & Infra", "Docker, docker-compose, GitHub Actions CI/CD, Google Cloud VM, Railway, Render, Linux, Git"],
  ["Testing", "pytest, test isolation, fixtures, security & authorization testing"],
];
skills.forEach(([k, v]) => {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(`${k}:  `, { continued: true });
  doc.font("Helvetica").fillColor(MUTED).text(v, { lineGap: 1.5 });
});

// ---- Projects ----
heading("Projects");
const projects = [
  {
    t: "Fintech Backend API",
    m: "2026  |  Live + GitHub",
    b: [
      "Production-grade personal finance REST API with JWT auth (bcrypt, python-jose) and full CRUD with strict per-user data isolation enforced at the query level.",
      "Relational schema in SQLAlchemy over PostgreSQL; 12 pytest tests against an isolated SQLite DB covering auth, authorization failures and cross-user isolation.",
      "Containerised with Docker; GitHub Actions CI runs the full suite on every push; deployed to Railway with environment-based secrets.",
    ],
  },
  {
    t: "Algorithmic Trading Backtester",
    m: "2026  |  Live + GitHub",
    b: [
      "End-to-end trading system: pipeline fetching real OHLCV data with retry logic, indicators from scratch (SMA, EMA, RSI), two strategies backtested with look-ahead bias prevention.",
      "RSI outperformed MA Crossover on MSFT (Sharpe 0.73 vs 0.50, drawdown -28% vs -39%). Deployed a live Streamlit + Plotly dashboard.",
    ],
  },
  {
    t: "VIGIL-AI: Cloud Data Pipeline  —  Dissertation (80%, First Class)",
    m: "2024–2025  |  GitHub",
    b: [
      "Long-running ETL pipeline on Google Cloud VM: automated ingestion, transformation, deduplication and MongoDB storage with schema validation and audit logging.",
      "Fine-tuned DeBERTa v3 for NER on cybersecurity text, F1 66.3% after systematic hyperparameter tuning. Accepted at ICETCS and ITSS-IoE 2025; pending Springer Nature publication.",
    ],
  },
  {
    t: "Stock Sentiment Analysis",
    m: "2024  |  GitHub",
    b: [
      "Processed 16 years of financial news with TF-IDF and sentiment features; compared Logistic Regression, Random Forest and SVM with GridSearchCV, reaching 56.3% directional accuracy.",
    ],
  },
];
projects.forEach((p) => {
  doc.font("Helvetica-Bold").fontSize(10).fillColor(INK).text(p.t, { continued: false });
  doc.font("Helvetica-Oblique").fontSize(8.5).fillColor(MUTED).text(p.m);
  doc.moveDown(0.1);
  p.b.forEach(bullet);
  doc.moveDown(0.2);
});

// ---- Experience ----
heading("Experience");
const exp = [
  { t: "Bartender (Part-Time), Stonegate Group", m: "Aug 2024 – Present", b: [] },
  { t: "Student Ambassador, Unitemps", m: "Dec 2022 – Apr 2025", b: [
    "Delivered talks, workshops and one-to-one guidance across 50+ higher-education fairs (audiences of 50–200), translating university processes into accessible guidance for non-specialists.",
  ] },
  { t: "Unity 3D Developer Intern, Constituents AI and Technology", m: "Apr – Sep 2024", b: [
    "Led end-to-end delivery of client-facing VR education packages in a structured GitHub workflow; progressed to leading a team of 3 interns within 3 months.",
    "Reduced load times by 40% through data-driven profiling; communicated findings to non-technical stakeholders.",
  ] },
  { t: "Summer Intern, GoldenPegasus IT Consulting", m: "Jun – Sep 2023", b: [
    "Built Power BI dashboards and used Excel for ad hoc analysis of Salesforce CRM data in a client-facing consulting environment.",
  ] },
];
exp.forEach((e) => {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text(e.t, { continued: true });
  doc.font("Helvetica-Oblique").fillColor(MUTED).text(`    ${e.m}`);
  e.b.forEach(bullet);
  doc.moveDown(0.15);
});

// ---- Education ----
heading("Education");
doc.font("Helvetica-Bold").fontSize(9.5).fillColor(INK).text("BSc (Hons) Computer Science, First Class — City, University of London", { continued: true });
doc.font("Helvetica-Oblique").fillColor(MUTED).text("    2022–2025");
bullet("Dissertation: VIGIL-AI (80%). Accepted at ICETCS and ITSS-IoE 2025, pending Springer Nature publication.");
bullet("President's International Scholarship Awardee (2022–2023).");
bullet("Key modules: Algorithms & Data Structures, Distributed Systems, Statistics, Databases (SQL), AI, NLP, Software Engineering.");

doc.end();
console.log("Generated", path.relative(process.cwd(), outPath));
