import { calculatePrice } from "./calculatePrice.js";
import { getData } from "./fetchData.js";
import { normalizeData } from "./normalizeData.js";
import { posts } from "./postsData.js";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments?_limit=5";

interface IComment {
  ID: number;
  Email: string;
}

const price = calculatePrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price);

const normalizePosts = normalizeData(posts);
console.log(normalizePosts);

getData(COMMENTS_URL)
  .then((res): Promise<any> => res.json())
  .then((data) => {
    const comments: Array<Partial<IComment>> = [];
    if (Array.isArray(data)) {
      data.forEach((item) => {
        const comment: Partial<IComment> = {};
        if (item.id) {
          comment.ID = item.id;
        }
        if (item.id) {
          comment.Email = item.email;
        }
        comments.push(comment);
      });
    }
    console.log(comments);
  })
  .catch((e) => {
    console.log("Error with data fetching", e);
  });
