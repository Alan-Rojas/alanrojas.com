const projectsData = [
    {
        title: "Cryptocurrency Price Fluctuation Predictor",
        status: "completed",
        disclaimer: "Data sourced from public APIs. This model is for research and topological exploration, not financial advice.",
        challenge: "Predicting highly volatile crypto markets is difficult; standard time-series analysis often misses the underlying structural and geometric changes in market data before a price shift occurs.",
        approach: "Built a pipeline combining Topological Data Analysis (TDA) with Machine Learning models to map and extract structural signatures from the data prior to significant price fluctuations.",
        insights: "Discovered that distinct topological features act as leading indicators for market volatility, allowing the ML model to recognize pattern shifts earlier than traditional baseline models.",
        conclusions: [
            "TDA provides highly valuable, non-linear supplementary features for financial Machine Learning.",
            "Algorithm successfully identified downward volatility with strong precision.",
            "Pipeline was optimized to handle complex data transformations efficiently."
        ]
    },
    {
        title: "Fraud Detection Pipeline",
        status: "completed",
        disclaimer: "Trained on anonymized synthetic datasets to comply with data privacy standards.",
        challenge: "Fraudulent transactions are rare anomalies disguised within massive volumes of legitimate data, requiring systems that can detect complex patterns without flagging too many false positives.",
        approach: "Developed a robust fraud detection algorithm utilizing anomaly detection techniques and classification models, carefully tuning precision and recall to balance business risk.",
        insights: "The model minimized false positive rates, which directly translates to fewer blocked legitimate customer transactions while effectively catching anomalous behavior.",
        conclusions: [
            "Feature engineering was the most critical step in isolating fraudulent signals.",
            "Achieved a high F1-score, optimizing the trade-off between security and user experience.",
            "Pipeline is modular and ready to be integrated into a live backend."
        ]
    },
    {
        title: "Chess Position Interpreter Chatbot",
        status: "wip",
        disclaimer: "Currently in development. Integrating LLMs with chess engine evaluations.",
        challenge: "Translating complex, mathematical chess engine evaluations into natural language that a human player can easily understand and learn from.",
        approach: "Creating an AI agent that takes board state (FEN) and engine metrics as inputs, and processes them to generate intuitive, conversational explanations of the position's tactical nuances.",
        insights: "Early testing shows that parsing engine lines into strategic concepts (e.g., 'control of the center', 'king safety') vastly improves user comprehension compared to raw numerical scores.",
        conclusions: [
            "Bridging deterministic algorithms with generative AI creates highly effective educational tools.",
            "Prompt engineering is crucial for keeping the chatbot's advice accurate to the engine's evaluation."
        ]
    }
];
