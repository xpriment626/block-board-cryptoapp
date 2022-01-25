import { useState, useEffect } from "react";
import axios from "axios";

const NewsFeed = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const options = {
            method: "GET",
            url: "https://crypto-news-live3.p.rapidapi.com/news",
            headers: {
                "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
                "x-rapidapi-key":
                    "1b79608f35msh90290f700f4dc9dp147f6cjsnd02c2431307d",
            },
        };

        axios
            .request(options)
            .then((response) => {
                console.log(response.data);
                setArticles(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const topStories = articles?.slice(0, 10);

    return (
        <div className="feed">
            <div className="title-wrap">
                <h1>Newsfeed</h1>
            </div>
            {topStories?.map((stories, _i) => (
                <div key={_i}>
                    <a href={stories.url}>
                        <ul>
                            <li>{stories.title}</li>
                        </ul>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;
