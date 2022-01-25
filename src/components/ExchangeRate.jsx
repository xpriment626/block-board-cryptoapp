const ExchangeRate = ({ exchangeRate, baseCurrency, secondaryCurrency }) => {
    return (
        <div className="exchange-rate">
            <h3>
                Exchange Rate: {baseCurrency} to {secondaryCurrency}
            </h3>
            <h1>{exchangeRate}</h1>
        </div>
    );
};

export default ExchangeRate;
