import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

const CurrencyConverter = () => {
    const currencies = [
        "BTC",
        "ETH",
        "USDT",
        "DOT",
        "SOL",
        "MANA",
        "THETA",
        "ADA",
        "UNI",
        "XRP",
        "LUNA",
        "AVAX",
        "MATIC",
        "ENJ",
        "BNB",
    ];
    const [baseCurrency, setBaseCurrency] = useState("BTC");
    const [secondaryCurrency, setSecondaryCurrency] = useState("USDT");
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0);

    const convert = () => {
        const options = {
            method: "GET",
            url: "https://alpha-vantage.p.rapidapi.com/query",
            params: {
                from_currency: baseCurrency,
                function: "CURRENCY_EXCHANGE_RATE",
                to_currency: secondaryCurrency,
            },
            headers: {
                "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
                "x-rapidapi-key":
                    "1b79608f35msh90290f700f4dc9dp147f6cjsnd02c2431307d",
            },
        };

        axios
            .request(options)
            .then((response) => {
                console.log(
                    response.data["Realtime Currency Exchange Rate"][
                        "5. Exchange Rate"
                    ]
                );
                setExchangeRate(
                    response.data["Realtime Currency Exchange Rate"][
                        "5. Exchange Rate"
                    ]
                );
                setResult(
                    response.data["Realtime Currency Exchange Rate"][
                        "5. Exchange Rate"
                    ] * amount
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="converter">
            <h1>Currency Converter</h1>
            <div className="table-wrap">
                <table>
                    <tbody>
                        <tr>
                            <td>Base Currency</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency"
                                    value={amount}
                                    onChange={(event) =>
                                        setAmount(event.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <select
                                    name="currency-1"
                                    value={baseCurrency}
                                    className="currency-options"
                                    onChange={(event) =>
                                        setBaseCurrency(event.target.value)
                                    }
                                >
                                    {currencies.map((currency, _i) => (
                                        <option key={_i}>{currency}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Currency</td>
                            <td>
                                <input
                                    name="currency"
                                    value={result}
                                    disabled={true}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency-1"
                                    value={secondaryCurrency}
                                    className="currency-options"
                                    onChange={(event) =>
                                        setSecondaryCurrency(event.target.value)
                                    }
                                >
                                    {currencies.map((currency, _i) => (
                                        <option key={_i}>{currency}</option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="convert-button" onClick={convert}>
                    Convert
                </button>
            </div>
            <ExchangeRate
                exchangeRate={exchangeRate}
                baseCurrency={baseCurrency}
                secondaryCurrency={secondaryCurrency}
            />
        </div>
    );
};

export default CurrencyConverter;
