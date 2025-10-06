export function getSavedArticles() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        author: "Emma Roth",
        title:
          "Trump’s solution for high drug prices is a discount portal called TrumpRx",
        description:
          "President Donald Trump is launching a new government-run website that he says will let Americans buy medications at lower prices. The new website, called TrumpRx, is expected to launch in 2026 and will direct consumers to discounts on drugmakers’ online store…",
        url: "https://www.theverge.com/news/790156/trump-healthcare-government-website-trumprx-pfizer",
        urlToImage:
          "https://platform.theverge.com/wp-content/uploads/sites/2/2025/10/gettyimages-2238331327.jpg?quality=90&strip=all&crop=0%2C10.740025178205%2C100%2C78.51994964359&w=1200",
        publishedAt: "2025-10-01T19:45:48Z",
        content:
          "<ul><li></li><li></li><li></li></ul>\r\nThe new website will link Americans to drugmakers websites to buy medications at a discount. \r\nThe new website will link Americans to drugmakers websites to buy … [+2362 chars]",
        source: "The verge",
        keyword: "Politics",
      },
      {
        _id: "66b677b29cf941ce183ad817",
        author: "Jess Weatherbed",
        title: "Japan’s most popular beer is running low after cyberattack",
        description:
          "Japan is facing a potential shortage of Asahi beer after a cyberattack against the beverage maker forced its systems offline. Asahi Group issued a statement on Monday announcing that order, shipment, and call center operations at the company had been suspende…",
        url: "https://www.theverge.com/news/791192/asahi-beer-cyberattack-systems-outage",
        urlToImage:
          "https://platform.theverge.com/wp-content/uploads/sites/2/2025/10/gettyimages-648902788.jpg?quality=90&strip=all&crop=0%2C10.381368942559%2C100%2C79.237262114882&w=1200",
        publishedAt: "2025-10-03T11:28:32Z",
        content:
          "<ul><li></li><li></li><li></li></ul>\r\nAsahi is now manually processing orders five days into an ongoing systems outage.\r\nAsahi is now manually processing orders five days into an ongoing systems outa… [+2218 chars]",
        source: "The Verge",
        keyword: "Nature",
      },
      {
        _id: "66b677c9ad3e7954cea6c687",
        author: "Kevin Lynch",
        title:
          "Premier League Soccer: Stream Newcastle vs. Arsenal Live From Anywhere",
        description:
          "The Gunners look to underline their title credentials against a goal-shy Magpies team.",
        url: "https://www.cnet.com/tech/services-and-software/premier-league-soccer-stream-newcastle-vs-arsenal-live-from-anywhere/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/3cc5b9fb83525c11f4e6d07a8946494692a0f080/hub/2025/09/26/2a86544b-2fbd-421c-bbe9-dd66bfc0b972/gettyimages-2237173524.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2025-09-28T12:30:03Z",
        content:
          "Arguably the pick of this weekend's matches in the English Premier League takes place today at St. James' Park, as midtable Newcastle host an Arsenal team looking to keep pace with league leader Live… [+5029 chars]",
        source: "CNET",
        keyword: "Soccer",
      },
    ]);
  });
}

export function addSavedArticle(newsData, keyword) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      title: newsData.title,
      text: newsData.description,
      publishedAt: newsData.publishedAt,
      source: newsData.source,
      link: newsData.url,
      urlToImage: newsData.urlToImage,
      keyword: keyword,
    });
  });
}

export const removeSavedArticle = () => {
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      status: 200,
      statusText: "OK",
    };
    resolve(response);
  });
};
