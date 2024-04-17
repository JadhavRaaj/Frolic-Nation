export const load = async ({ fetch }) => {
    const newsfetch = async () => {
        const res = await fetch('https://newsapi.org/v2/everything?q=Kabaddi&from=${formattedDate}&to=${formattedDate}&apiKey=13f23194feb84c84a8bda04e8b19d347', {
            method: 'GET'
        });
        const today = new Date();
        const formattedDate = today.toISOString().slice(0, 10);
        const data = await res.json();
        const top10News = data.articles.slice(0, 20);
        return top10News;
    };

    return {
        news: await newsfetch()
    };
};
