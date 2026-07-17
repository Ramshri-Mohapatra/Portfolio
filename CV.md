# Ramshri Mohapatra

London, UK | +44 7833 889303 | rskissan1729@gmail.com | github.com/Ramshri-Mohapatra | linkedin.com/in/ramshri-mohapatra

---

## Professional Summary

First-class Computer Science graduate from City, University of London, with hands-on experience in data pipeline engineering, database design, and applied statistical and ML methods for drawing conclusions from real-world, noisy data. Built ETL pipelines processing live datasets, deployed multiple production systems independently, and gained hands-on exposure to BI dashboarding and CRM data during a consulting internship. Right to work in the UK.

---

## Technical Skills

- **Languages:** SQL, Python, C++, Java
- **BI and Reporting:** Microsoft Excel, Power BI, Tableau, Plotly, Streamlit, Matplotlib
- **Data and Storage:** PostgreSQL, SQLAlchemy ORM, MongoDB, database modelling, ETL pipelines
- **Data and ML:** pandas, NumPy, Scikit-learn, HuggingFace Transformers, NLP, TF-IDF, hyperparameter tuning (GridSearchCV), statistical analysis, data validation and cleaning
- **Backend:** FastAPI, RESTful API design, JWT authentication, OAuth2, dependency injection, object-oriented design, Pydantic
- **Cloud and Infra:** Docker, docker-compose, GitHub Actions CI/CD, Google Cloud VM, Railway, Render, Linux, Git
- **Testing:** pytest, test isolation, fixtures, security and authorization testing

---

## Projects

### Fintech Backend API | Live: https://fintech-api-n3ds.onrender.com/docs | GitHub: https://github.com/Ramshri-Mohapatra/fintech-api
*2026*

- Built a production-grade personal finance tracker REST API with JWT authentication (bcrypt password hashing, python-jose token generation/verification) and full CRUD for transactions with strict per-user data isolation enforced at the query level.
- Designed relational schema with SQLAlchemy ORM over PostgreSQL; wrote 12 automated tests using pytest against an isolated SQLite test database with conftest.py fixtures, covering auth, authorization failures, and cross-user data isolation.
- Containerised with Docker and docker-compose; built a GitHub Actions CI pipeline running the full test suite on every push; deployed with environment-based secret management — initially on Railway, then redeployed to Render.

### Containerised REST API | Live: https://task-api-latest-ljxo.onrender.com/docs | GitHub: https://github.com/Ramshri-Mohapatra/Containerised-API-Deployment-Project
*2026*

- Built a task management FastAPI service with Docker containerisation, image published to Docker Hub, 8 automated tests with pytest, and a GitHub Actions CI/CD pipeline running tests and handling deployment automatically.

### Algorithmic Trading Backtester | Live: https://trading-system-fegxbv3zb27sfbncazbvuu.streamlit.app/ | GitHub: https://github.com/Ramshri-Mohapatra/trading-system
*2026*

- Built an end-to-end trading system: data pipeline fetching real OHLCV data (AAPL, MSFT, TSLA) with retry logic, technical indicators calculated from scratch (SMA, EMA, RSI), two strategies backtested with look-ahead bias prevention.
- RSI outperformed MA Crossover on MSFT (Sharpe 0.73 vs 0.50, drawdown -28% vs -39%), demonstrating strategy performance depends on market regime. Deployed a live Streamlit and Plotly dashboard.

### VIGIL-AI: Cloud Data Pipeline | GitHub: https://github.com/Ramshri-Mohapatra/AI-Powered-OSINT-Tool | Dissertation (80%, First Class)
*2024–2025*

- Deployed a long-running ETL pipeline on Google Cloud VM: automated ingestion, transformation, deduplication, and MongoDB storage with schema validation and audit logging.
- Fine-tuned DeBERTa v3 (HuggingFace Transformers) for Named Entity Recognition on cybersecurity text, achieving F1-score of 66.3% after systematic hyperparameter tuning on a held-out test set. Research accepted at ICETCS and ITSS-IoE 2025; pending Springer Nature publication.

### Stock Sentiment Analysis | GitHub: https://github.com/Ramshri-Mohapatra/Stock-Sentiment-Analysis
*2025–2026*

- Built and compared three NLP classifiers (bigram BoW + Random Forest, TF-IDF + sentiment + tuned Logistic Regression, hard-voting LR/RF/SVM ensemble) predicting daily stock direction from 4,101 days of headlines, with GridSearchCV tuning and strictly chronological train/test splits.
- Found and fixed a silent train/test split defect: an unparsed date column made a date filter run as a string comparison, shrinking the test set from 378 to 126 days and inflating reported accuracy to 56.3% against a corrected 51.6%.
- Ran a permutation test and a positive control to rule out a broken pipeline: the identical pipeline scored 81.3% on a corpus with known sentiment signal, and the original 56.3% claim fell within the range reachable by chance (p = 0.14).

### Email Spam Classification | GitHub: https://github.com/Ramshri-Mohapatra/enron-spam-classification
*2026*

- Built an end-to-end spam-detection pipeline over 33.7k labelled Enron emails (TF-IDF into a decision tree, a linear SVM, and a PyTorch MLP); best model reached 98.7% accuracy, 0.987 F1, 0.999 ROC-AUC on a held-out test set.
- Audited my university group's original coursework implementation and found its labels were keyword-matched from the same text fed to the model, so it was learning to reproduce a regular expression rather than detect spam; replaced it with a properly labelled corpus and fixed three independent sources of train/test leakage.
- Validated against an independent human-labelled mailbox: recall fell from 0.99 to 0.64 on unseen real mail, every miss a newsletter or stock alert absent from the honeypot-derived training spam.

---

## Experience

### Bartender (Part-Time) | Stonegate Group
*Aug 2024 – Present*

### Student Ambassador | Unitemps
*Dec 2022 – Apr 2025*

- Delivered talks, workshops, and one-to-one guidance to prospective students across 50+ higher education fairs and events, with individual audiences ranging from 50 to 200 attendees, translating university processes into clear, accessible guidance for a non-specialist audience.

### Unity 3D Developer Intern | Constituents AI and Technology
*Apr – Sep 2024*

- Led end-to-end delivery of client-facing VR education packages within a structured GitHub-based engineering workflow, managing version control, code reviews, and release cycles independently.
- Progressed from individual contributor to leading a team of 3 interns within 3 months - owning task allocation, quality review, and stakeholder reporting to the line manager.
- Diagnosed and resolved system performance bottlenecks through data-driven profiling, reducing load times by 40% — communicated findings and recommendations clearly to non-technical stakeholders.

### Summer Intern | GoldenPegasus IT Consulting
*Jun – Sep 2023*

- Built Power BI dashboards and used Microsoft Excel for ad hoc analysis of Salesforce CRM data, as part of a structured internship training program in a client-facing consulting environment.

---

## Education

### BSc (Hons) Computer Science, First Class | City, University of London
*2022–2025*

- Dissertation: VIGIL-AI (80%) | Accepted at ICETCS and ITSS-IoE 2025, pending Springer Nature publication
- Key Modules: Algorithms and Data Structures, Distributed Systems, Statistics, Databases (SQL), Artificial Intelligence, NLP, Software Engineering
- President's International Scholarship Awardee (2022–2023)