const projectsData = [
    {
        id: "crypto-tda",
        title: "Cryptocurrency Price Fluctuation Predictor",
        status: "Completed",
        image: "img/CryptoPred.jpeg", 
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
        id: "fraud-pipeline",
        title: "Fraud Detection Pipeline",
        status: "Completed",
        image: "img/Fraud_Detect.jpeg",
        disclaimer: "Trained on anonymized synthetic datasets to comply with data privacy standards.",
        challenge: "Fraudulent transactions are rare anomalies disguised within massive volumes of legitimate data, requiring systems that can detect complex patterns without flagging too many false positives.",
        approach: "Developed a robust fraud detection algorithm utilizing anomaly detection techniques and classification models, carefully tuning precision and recall to balance business risk.",
        insights: "The model minimized false positive rates, which directly translates to fewer blocked legitimate customer transactions while catching anomalous behavior.",
        conclusions: [
            "Feature engineering was the critical step in isolating fraudulent signals.",
            "Achieved a high F1-score, optimizing the trade-off between security and user experience.",
            "Pipeline is modular and ready for live backend integration."
        ]
    },
    {
        id: "chess-chatbot",
        title: "Chess Position Interpreter Chatbot",
        status: "In Progress",
        image: "img/ChessBot.jpeg",
        disclaimer: "Currently in development. Integrating LLMs with chess engine evaluations.",
        challenge: "Translating complex, mathematical chess engine evaluations into natural language that a human player can easily understand and learn from.",
        approach: "Creating an AI agent that takes board state (FEN) and engine metrics as inputs, generating intuitive, conversational explanations of the position's tactical nuances.",
        insights: "Early testing shows that parsing engine lines into strategic concepts vastly improves user comprehension compared to raw numerical scores.",
        conclusions: [
            "Bridging deterministic algorithms with generative AI creates highly effective educational tools.",
            "Prompt engineering is crucial for keeping the chatbot's advice accurate to the engine's evaluation."
        ]
    },
        {
        id: "product-analysis",
        title: "Product & Client Analysis",
        status: "Completed",
        image: "img/ProdClient_Val.webp",
        disclaimer: "Data was anonymized and standarized to keep NDA constraints.",
        challenge: "A pharmaceutical company was struggling with client retention and inconsistent product sales.\n Many products had long periods without being sold, which not only reduced revenue but also made the company overly dependent on a small group of recurring buyers.\n This lack of diversification put the company's long-term growth at risk.",
        approach: "Using a sales transactions database, my team and I applied Markov Chains to model product and client behaviors.\nThis probabilistic approach allowed me to:\n\t- Estimate the likelihood (s) of a product being sold in the next month versus remaining unsold (1-s).\n\t- Model client behavior similarly, calculating the probability (b) of a customer making a purchase versus not returning (1-b).",
        insights: "By leveraging this approach, we uncovered key trends in buying patterns, enabling data-driven strategic decisions for product positioning and customer engagement.",
        conclusions: [
            "- Identified Customer Value and Product Life Cycle for over 5,000 customers and products.",
            "- Developed a user-friendly API delivering clear, actionable insights for each product and customer.",
            "- Enhanced sales strategy and client retention through tailored recommendations and strategic action plans."
        ]
    },
        {
        id: "berries-forecast",
        title: "Berries Price Prediction",
        status: "Completed",
        image: "img/BerriesForecast.jpeg",
        disclaimer: "Trained on anonymized synthetic datasets to comply with data privacy standards.",
        challenge: "A berries supplier business was having trouble estimating the price for their products: as strawberries and most berries are a periodic product, the forecasting of price relies on seasonality, product offer and demand.\nLast months’ predictions had been off by a considerable margin, resulting in heavy losses for the business.\nAs the high demand season approached, the opportunity was to be taken: a proper forecasting had to be made.",
        approach: "The used database for this analysis was a monthly-taken historical price record since 2010.\nHaving almost 15 years of historical price records can enhance the use of powerful pattern-detection mathematical tools such as TDA (Topological Data Analysis) and TSA (Time Series Analysis), which leverage from large sets of data.",
        insights: "Since these two are powerful tools, it was a good idea to compare results from both approaches.\nFrom one side, Time Series Analysis would give an estimation of the price, while TDA would look at drastic changes in the price, meaning it could predict if the market was to change from a buyer’s market to a seller’s market or viceversa.\nTo make estimations more concise, the TDA approach was met with Markov Chains.\nThis would mean our approach would give insights on how the price would change, and how likely it was to happen.",
        conclusions: [
            "- Unsealed price patterns in seasonality with two models with over 83% accuracy each.",
            "- Developed a user-friendly API delivering clear patterns and forecast for each berry.",
            "- Reduced the monetary impact on the business by 27%, saving over $100,000 for the business."
        ]
    },
        {
        id: "production-analysis",
        title: "Defective Batch Analysis",
        status: "Completed",
        image: "img/Production_Analysis.jpeg",
        disclaimer: "Due to confidentiality agreements, I cannot disclose the company name, raw data, or specific statistical findings from this project.",
        challenge: "A pharmaceutical company was experiencing a rising number of defective pill batches, but the root cause was unknown. This issue not only slowed production but also threatened the company’s ability to meet demand, putting revenue at risk.\nTo solve the problem, the company needed to:\n- Identify the key factors causing defective batches.\n- Find quantifiable solutions to optimize production and reduce waste.",
        approach: "To tackle this, my team applied Machine Learning techniques to analyze production data and detect patterns in defect occurrences.\n\t- Trained Convolutional Neural Networks (CNNs), Decision Trees, and Extreme Gradient Boosting (XG-Boost) to predict defective batches.\n\t- Analyzed models to determine which variables and their values had the strongest influence on defects.",
        insights: "Three key variables (V1, V2, V3) were identified as the main drivers of defective batches.\nMachine Learning provided actionable insights by revealing feature importance and impact, allowing for targeted process optimizations.",
        conclusions: ["Defective batches were reduced from 17% to 5%, leading to $300,000 in monthly savings."]
    },
        {
        id: "supply-chain-opt",
        title: "Supply-Chain Route Optimization",
        status: "Completed",
        image: "img/Supply_Chain.jpeg",
        disclaimer: "Due to confidentiality agreements, I cannot disclose the company name, raw data, or specific statistical findings from this project.",
        challenge: "This project tackled a big operational headache: a green snacks company was relying on a team of promoters to visit over 300 stores across Mexico City.\nTheir job? Make sure the products were always well placed — visible, stocked (no run-outs or leftovers), and looking sharp on the shelves.\nBut Mexico City isn’t exactly a smooth ride. It's chaotic, distances are long, and traffic is brutal.\nOn top of that, each store required a different number of visits per month, based on demand.\nThe company was struggling to manage it all — promoters had disorganized schedules, inconsistent routes, and overall, the system wasn’t cost-effective.\nThey knew they were burning time, money, and potential.\nSomething had to change.",
        approach: "To tackle this challenge, my team and I built a custom solution using a smart, heuristic-based approach — specifically, a hybrid genetic algorithm combined with clustering logic (K-Means).\nThe goal was simple: create efficient, cost-effective routes for each promotor, while meeting store demand and staying within reasonable daily work shifts.",
        insights: "Here’s how it worked: using store coordinates, I grouped nearby stores into geographic clusters.\nEach promotor was then assigned to one cluster — this way, they’d only work within a defined area, reducing travel complexity.\nFrom there, the algorithm kicked in. It generated monthly routes by optimizing store visit sequences to minimize distance, hit the right number of visits per store (based on demand), and stay within the ideal number of visits per day.\nThe result? Clean, smart schedules that made sense on paper and on the streets of Mexico City.",
        conclusions: [
            "- Reduced promoter headcount from 11 to 7, thanks to optimized and balanced routing.",
            "- Saved over $80,000 per month in labor costs — a 36% cut in spending on promoters.",
            "- Generated repeatable, optimized routes that can be saved and reused, improving operational consistency.",
            "- Built a scalable, interactive route API, making day-to-day logistics easy to visualize and manage.",
            "- Improved delivery efficiency and in-store execution, enhancing product visibility and reducing losses from out-of-stock or overstock situations."
        ]
    },

];