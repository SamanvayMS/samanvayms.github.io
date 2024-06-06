---
title: "Guide to Running Projects with Strategy Studio"
excerpt: "This project provides a guide to running projects with Strategy Studio. It is intended for users who want to learn more on how to run projects with Strategy Studio and how to modfiy the code to suit their needs.<br>[Link to the project](https://gitlab.engr.illinois.edu/ie497_ie597_independent_study_spring_2024/ie497_ie597_spring_2024_group_03/group_03_project/-/blob/main/StrategyStudioGuide.md?ref_type=heads#22-makefile-and-command-guide)"
collection: projects
---
[Link to the project](https://gitlab.engr.illinois.edu/ie497_ie597_independent_study_spring_2024/ie497_ie597_spring_2024_group_03/group_03_project/-/blob/main/StrategyStudioGuide.md?ref_type=heads#22-makefile-and-command-guide)

## Overview

**Description:**
This project utilizes Strategy Studio, a high-performance C++ multi-asset class strategy development platform. It focuses on creating, testing, and optimizing algorithmic trading strategies, showcasing efficient handling of complex financial data and backtesting requirements.

**Key Features:**

1. **Multi-Asset Class Support:** Flexibility in developing strategies for various markets.
2. **High Performance:** Quick backtesting and strategy evaluation.
3. **Modular Design:** Easy integration and customization.

## Building and Managing Strategies

**Strategy Directory Structure:**
Organized into directories for provision scripts, strategy code, and result files, ensuring easy access and management of all components.

**Makefile and Command Guide:**
A Makefile compiles the strategy and executes related commands. Key variables like `INSTANCE_NAME`, `STRATEGY_NAME`, `START_DATE`, `END_DATE`, and `SYMBOLS` are configured to tailor the strategy. Commands such as `make_executable`, `delete_instance`, `clean_dlls`, `move_strategy_dll`, and `start_server` manage strategy execution.

## Running Strategies with Python Scripts

**Automated Command Execution Script:**
`make_with_python.py` automates Makefile command execution for managing and running backtests, ensuring clean error handling and structured output.

**Parameter Optimization Script:**
`parameter_optimisation.py` uses the `optuna` library to optimize trading strategy parameters, identifying the best-performing configuration through automated backtesting.

**Use Cases:**

- **Automated Testing:** Executes multiple make commands in sequence.
- **Parameter Tuning:** Identifies optimal trading strategy parameters.

## Provision Scripts

**Start Server Script (`start_server.sh`):**
Automates starting the strategy server, ensuring a clean start.

**Git Pull Script (`git_pull.sh`):**
Automates updating the local repository with the latest changes.

**Create Instance Script (`create_instance.sh`):**
Automates creating strategy instances with specific configurations.

**Delete Instance Script (`delete_instance.py`):**
Facilitates removing strategy instances from the database.

**Run Strategy Script (`run_backtest.sh`):**
Executes backtests over a specified date range.

**Generate Results Script (`generate_results.sh`):**
Runs backtests and exports comprehensive results, generating detailed reports.

**Edit Parameters Script (`edit_parameters.sh`):**
Simplifies modifying strategy settings.

**Get Results Script (`get_results.py`):**
Processes and analyzes backtesting results, calculating performance metrics and generating visual plots.

## Conclusion

This project showcases the comprehensive use of Strategy Studio for developing, testing, and optimizing algorithmic trading strategies. The structured approach to managing strategies, automated command execution, and parameter optimization highlight the platform's efficiency and flexibility, making it an invaluable tool for quantitative traders and financial analysts.
