---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

**The University of Illinois at Urbana-Champaign** | Champaign, IL  
*MS in Financial Engineering, GPA: 3.76/4.0*  
*May 2024*

**Ramaiah Institute of Technology** | Bangalore, India  
*BE in Mechanical Engineering, GPA: 3.52/4.0*  
*July 2021*

## Skills

- **Programming Languages:** Python, C++, R, SQL, Bash
- **Frameworks:** TensorFlow, PyTorch, QuantLib, Docker, Scikit-learn, SciPy, Rugarch
- **Coursework:** Statistical Modeling, Derivatives Pricing, Time Series Analysis, Portfolio Optimization, Game Theory and Fair Division, Stochastic Calculus, Numerical Methods, Linear Programming, Convex Optimization
- **Trading/Financial Tools/Platforms:** RCMX StrategyStudio, Metatrader4, Kite, Oanda, Bloomberg Terminal
- **ML/AI:** Regression and Classification Models, Ensemble Techniques with Trees, Reinforcement Learning, Deep Learning, Generative AI, Large Language Models

## Professional Experience

### Student Practicum @ bp Trading

*Aug 2023 - Dec 2023*
- Developed a **Forex ladder trading strategy** focusing on grid and lot sizing optimizations to enhance return potential using quantitative methods.
- **Sped up backtest up to 2000x** using **Just-In-Time Compilation** on Tick level data from various major currency pairs.
- **Applied hyperparameter tuning**, trying various automated techniques such as **Optuna, PySwarm, DEAP** (Genetic Algorithms) and utilized strategy validation techniques such as **Walk-Forward Analysis and Monte Carlo simulations**, to refine proprietary trading models.

### Summer Internship @ JIA Finance

*June 2023 - Aug 2023*
- Developed an advanced automated system leveraging the **OpenAI API, LangChain, and FAISS/Chroma DB** for interpreting mortgage guidelines. This system rapidly validates loan requirements using **Retrieval Augmented Generation (RAG)**, enhancing the speed and accuracy of mortgage processing.
- Constructed sophisticated chained prompt pipelines designed to parse PDFs, ensuring meticulous data cleanup and preservation of critical information. This setup also facilitates the creation of a vector store, enabling the chatbot to efficiently retrieve and utilize data.
- Engineered specialized task-specific Q&A chains and refined query processing using a **recursive tree approach** combined with **LLM-based memoization**. This significantly increased the response accuracy for complex mortgage-related inquiries, boosting performance from **55% to 80% accuracy**.

### Student Practicum @ JIA Finance

*Jan 2023 - May 2023*
- Utilized **AWS Sagemaker and Redshift Connector** for EDA on over **100M Fannie Mae mortgage records**, applying data manipulation and visualization tools for insights.
- **Modeled loan survival and default rates curves**, employing the **Cox Proportional Hazard Model and Kaplan Meier Estimator** and assessing the impact of macroeconomic factors.
- Crafted a comprehensive **cash flow model for Mortgage Backed Securities (MBS)** integrating credit default, prepayment, and loss severity with a **Cox Ingersoll Ross (CIR) interest rate model**.


## Relevant Projects

### High Frequency Trading and Market Making

- Built pipelines to procure and parse **Level 2 Order Book and Market By Order (MBO)** data from **IEX, Nasdaq’s ITCH, and CME Globex** datasets and conducted extensive analysis prior to conducting **microsecond-level backtesting on RCM-X’s Studio Studio (SS)** platform.
- Designed and implemented various **mean reverting and trend following market-making strategies** along with replicating **Avallaneda-Stoikov paper on Dynamic programming and Inventory control** for optimal bid-ask placement in C++.
- Built complete backtesting pipelines in bash for streamlining parameter optimization and backtest results processing.

### Reinforcement Learning for High Frequency Trading

- **Development of DQN and DDPG in C++ with Torch Integration:** Engineered a robust Deep Q-Network (DQN) for a market taking agent and a Deep Deterministic Policy Gradient (DDPG) in C++ integrated with the Libtorch API library.
- **Custom Training Loop with Strategy Studio:** Utilized Strategy Studio's High Frequency Trading Backtesting Software to simulate trading environments, facilitating the extensive training of the DQN. The entire training loop, developed in C++, was carefully crafted to leverage the capabilities of Strategy Studio, enhancing the accuracy and performance of the trading strategy.
- **Efficient Data Handling with SQLite:** Implemented SQLite for the efficient storage and retrieval of training experiences. This setup optimized the training process by ensuring quick access and management of large datasets required for effective learning. The database also keeps track of important parameters as the environment resets between episodes.

### Trading Strategy Development, Testing, and Deployment

- Developed sophisticated algorithms within a **centralized strategy engine** tailored for medium frequency trading on **OANDA's V20 platform**, incorporating advanced data scraping technologies for both live and historical data.
- Enhanced the engine's capability to simultaneously operate multiple trading strategies while tracking positions and profits locally. This ensures seamless deployment of multiple instances on the same account without conflict.
- Conducted rigorous **backtesting and subsequent deployment** of trading strategies using OANDA's API, initially on a demo account, before transitioning to live trading environments.
- Engineered a versatile trading module for the Indian Equity, Futures, and Options markets, utilizing the **Kite Connect API**. This module features a **custom strategy management engine** that efficiently handles multiple concurrent trading strategies and distributes websocket streams to appropriate strategies in real-time.
- Streamlined the automation of login processes and token generation for secure strategy execution, coupled with the implementation of robust **safety protocols and kill switches** for enhanced risk management.
- Optimized strategy deployment on **Google Cloud Platform** to leverage its scalability and maximize operational efficiency.
- Achieved exceptional results with Deep Q network-based strategies, delivering **average weekly returns of 100%** with a backtested maximum drawdown of 20% across major **Forex pairs** using 20x leverage. Additionally, these strategies produced an average of **2% daily returns, un-leveraged**, on stocks listed on the NSE, with a maximum drawdown of 0.5%.

### Machine Learning Projects

- **Enhanced Monte Carlo Valuations using GPT Encoder-Decoder Architecture:** Develop a novel application by integrating GPT-style encoder-decoder blocks with custom embeddings tailored for time series financial data, aimed at refining stochastic modeling and improving derivatives valuation accuracy.
- **Dimensionality Reduction of Orderbook Data through VAEs:** Variational Autoencoders for efficient dimensionality reduction of high-dimensional orderbook data, enhancing computational efficiency and predictive accuracy.
- **AI-Driven Stock Signal Extraction Using Langchain and OpenAI API:** Utilize Langchain and OpenAI's API to extract trading signals from news RSS feeds and financial data analysis, synthesizing diverse data streams into predictive models for equity price forecasting.

## Certifications

- **Bloomberg Market Concepts:** Portfolio Management, Equities, Fixed Income, Macro Economics, Terminal Basics.
- **Machine Learning Specialization:** Linear Regression, Logistic Regression, Decision Trees, Random Forests, Adaboost, Support Vector Machines, Recommender Systems, Reinforcement Learning, Q-Learning.
- **Deep Learning Specialization:** Neural Networks, Hyper Parameter Tuning, Regularization and Optimization, Convolutional Neural Networks, Sequence Models.
