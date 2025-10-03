export function getSavedArticles() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        author: "Ashley Belanger",
        title: "All the possible ways to destroy Google’s monopoly in search",
        description:
          "What the future of search could look like as DOJ seeks to end Google's monopoly.",
        url: "https://arstechnica.com/tech-policy/2024/08/all-the-possible-ways-to-destroy-googles-monopoly-in-search/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2024/08/breaking-up-google-760x380.jpg",
        publishedAt: "2024-08-07T18:32:08Z",
        content:
          "13\r\nAfter US District Judge Amit Mehta ruled that Google has a monopoly in two marketsgeneral search services and general text advertisingeverybody is wondering how Google might be forced to change i… [+4487 chars]",
        source: "Ars Technica",
        keyword: "Apple",
      },
      {
        _id: "66b677b29cf941ce183ad817",
        author: "Alex Wilhelm",
        title: "Watch: When did iPads get as expensive as MacBooks?",
        description:
          "Would you switch out your MacBook for an iPad with an M4 chip and OLED display? With the increase in price, Apple seems to be arguing these are comparable but we’re curious to see if consumers will make the change.",
        url: "https://techcrunch.com/2024/05/08/techcrunch-minute-when-did-ipads-get-as-expensive-as-macbooks/",
        urlToImage:
          "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675",
        publishedAt: "2024-05-08T14:52:26Z",
        content:
          "Apple’s iPad event had a lot to like. New iPads with new chips and new sizes, a new Apple Pencil, and even some software updates. If you are a big fan of Apple hardware, well, it was probably a good … [+1385 chars]",
        source: "Tech Crunch",
        keyword: "Tech",
      },
      {
        _id: "66b677c9ad3e7954cea6c687",
        author: "Anne Tergesen and Oyin Adedoyin",
        title:
          "The 401(k) Investors Convinced That Target-Date Funds Miss the Mark",
        description:
          "They are the default choice for millions of retirement savers who are automatically enrolled in 401(k) plans. But some investors are moving out of them.",
        url: "https://www.wsj.com/personal-finance/retirement/401k-savers-target-date-funds-alternatives-6e4e6f75",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/vpX9wLwvLmMrZLSsPX0riA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/200e36a41d4da40ee64854c3bc289a4d",
        publishedAt: "2024-08-04T01:00:00Z",
        content:
          "A group of investors are shunning the most popular retirement investment on Wall Street.\r\nTarget-date funds are a professionally managed portfolio of stocks and bonds that recalibrates the mix as we … [+6270 chars]",
        source: "Wall Street Journal",
        keyword: "Wall Street",
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
