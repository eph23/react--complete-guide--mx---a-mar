import { calculateInvestmentResults } from "../util/investment";

function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);

    return (
        <div>
            <h1>Results</h1>
        </div>
    );
}

export default Results;
