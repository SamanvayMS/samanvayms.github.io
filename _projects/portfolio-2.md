---
title: "Backtesting Pipelines for Strategy Studio"
excerpt: "Architected Backtesting Pipelines incorporating Bash scripts, Python automation , C++ Strategy Scripts and Makefile commands for Strategy Studio. Simplified Strategy Management and Parameter Optimization to be run entirely with a single command and parameter files. Also Documented the scripts and instructions for future reference and other students.<br>[Link to the project](https://gitlab.engr.illinois.edu/ie497_ie597_independent_study_spring_2024/ie497_ie597_spring_2024_group_03/group_03_project/-/blob/main/StrategyStudioGuide.md?ref_type=heads)"
collection: projects
---
[Link to the project](https://gitlab.engr.illinois.edu/ie497_ie597_independent_study_spring_2024/ie497_ie597_spring_2024_group_03/group_03_project/-/blob/main/StrategyStudioGuide.md?ref_type=heads)

In this project, I focused on the implementation, testing, and deployment of algorithmic trading strategies using the Strategy Studio platform. The work involved creating a comprehensive guide to building and running strategies with Strategy Studio, emphasizing the use of automated scripts to streamline various processes.

Key tasks included:

1. **Strategy Development and Directory Structure**: Organized the project directory with necessary scripts and strategy files, ensuring a clear and efficient workflow.
  
2. **Makefile Configuration**: Created and modified Makefiles to compile strategies, set up necessary parameters, and execute strategy-related commands seamlessly.

3. **Automated Scripts**: Developed Python and Bash scripts to automate the execution of Makefile commands, parameter optimization using the `optuna` library, server management, and backtest execution. Key scripts include:
   - `make_with_python.py`: Automates Makefile command execution with error handling.
   - `parameter_optimisation.py`: Optimizes strategy parameters through multiple backtests.
   - Provision scripts for server management, instance creation, and result generation.

4. **Backtesting and Results Analysis**: Ran extensive backtests, generated results, and analyzed performance metrics using custom scripts, ensuring detailed reporting and visualization of strategy performance.

This project streamlined the development and testing of trading strategies, enhancing efficiency and accuracy in the deployment of algorithmic trading solutions.