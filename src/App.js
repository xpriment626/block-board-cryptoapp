import NewsFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CryptoConverter";

function App() {
    return (
        <div className="app">
            <div className="app-wrap">
                <NewsFeed />
                <CurrencyConverter />
            </div>
        </div>
    );
}

export default App;
