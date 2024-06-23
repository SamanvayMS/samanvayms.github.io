---
title: "Custom Trading Engine for Day Trading Forex and Equity products"
excerpt: "This project utilises various Broker APIs to develop a custom trading engine for day trading Forex, Crypto and Equity products. The engine is capable of handling multiple strategies and deploying them in real-time. It also features a robust backtesting module and cloud deployment capabilities for live trading"

collection: projects
---
Repository link unavailabe due to proprietary nature of the project. Please contact me for more information.

This project entails the comprehensive development, testing, and deployment of sophisticated trading algorithms designed for medium frequency trading. Utilizing OANDA's V20 platform for Forex, Binance REST APIs and Websockets for Crypto and Kite Connect API for Indian Equities, the project features advanced data scraping technologies, robust backtesting procedures, and efficient deployment strategies. The implementation spans across Forex CFDs, Crypto Spot and Perpetuals and Indian Equity Cash, Futures and Options Markets, leveraging cloud infrastructure for scalability and performance.

## Key Components

### Centralized Strategy Engine on OANDA's V20 Platform

- **Algorithm Development**: Created sophisticated algorithms tailored for medium frequency trading.
- **Data Scraping**: Incorporated advanced data scraping technologies for both live and historical data.
- **Multi-Strategy Operation**: Enhanced engine's capability to simultaneously operate multiple trading strategies while tracking positions and profits locally, allowing seamless deployment of multiple instances on the same account without conflict.

### Structure

- **Adapters for Multiple Brokers**: Developed adapters for OANDA, Binance and Kite Connect APIs to facilitate data streaming and trading across Forex, Crypto and Equity markets.
- **Data Handling**: Implemented robust data handling mechanisms for efficient data processing and analysis. uses a combination of websockets and REST APIs for real-time data streaming and tick and orderbook management.
- **Centralized Strategy Engine**: Centralized strategy engine for efficient trading strategy management, risk management and deployment across multiple markets.
- **Strategy Traders**: Developed individual strategy traders with unique strategies and instruments that can be deployed on the centralized engine independently and with their own risk management parameters and position tracking.

### Cloud Deployment

- **Google Cloud Platform**: Optimized strategy deployment on Google Cloud Platform to leverage its scalability and maximize operational efficiency. Deployed using Google's compute instances using secrets manager for secure API key storage.

## Conclusion

This project demonstrates the successful integration of advanced algorithmic trading techniques, robust data handling, and strategic deployment in diverse market conditions. By leveraging cloud infrastructure and state-of-the-art AI strategies, the project achieves significant returns while maintaining rigorous risk management practices.
