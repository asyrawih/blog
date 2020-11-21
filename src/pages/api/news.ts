export default async (req, res) => {
    const request = await fetch("http://newsapi.org/v2/everything?q=apple&from=2020-11-19&to=2020-11-19&sortBy=popularity&apiKey=" + process.env.API_KEY)
    const result = await request.json()
    return res.json(result);
}