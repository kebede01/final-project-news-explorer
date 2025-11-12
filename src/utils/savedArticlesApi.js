import { getToken } from "./token";
import { BASE_URL } from "./constants.js";
// import { APIKey, newsApiBaseUrl, parsePreviousWeek } from "./constants";
export async function getSavedArticle(token) {
  const response = await fetch(`${BASE_URL}/articles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to save article");
  }

  return response.json();
}

export async function addSavedArticle(newsData, keyWord) {
  const token = getToken();
  // Map News API data to your schema format
  const formattedData = {
    author: newsData.author || "Unknown",
    title: newsData.title,
    description: newsData.description,
    url: newsData.url,
    urlToImage: newsData.urlToImage,
    publishedAt: newsData.publishedAt,
    content: newsData.content || newsData.description,
    source: newsData.source["name"],
    keyWord: keyWord,
  };
  const response = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formattedData),
  });
  if (!response.ok) {
    throw new Error("Failed to save article");
  }

  return response.json();
 
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
