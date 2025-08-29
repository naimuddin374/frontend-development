/**
 * In javascript many ways to fetch data from api
 * 1. Fetch API
 * 2. Axios
 * 3. XMLHttpRequest
 *
 * First fetch data from jsonplaceholder.typicode.com
 * Then display the posts on the page
 * Add pagination logic over here (optional)
 */
// "https://jsonplaceholder.typicode.com/posts"

const imageUrl = `https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg`;

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log("Posts data:", data);
    const mainDiv = document.querySelector("main");
    data.forEach((post) => {
      const postWrapper = document.createElement("div");
      postWrapper.classList.add("post-wrapper");
      postWrapper.innerHTML = `
          <h2>ID: ${post.id} - ${post.title}</h2>
          <img src="${imageUrl}" alt="Post Image">
          <p>${post.body}</p>
          <a href="./post-detail/index.html?id=${post.id}">Read More...</a>
        `;
      mainDiv.appendChild(postWrapper);
    });
  })
  .catch((error) => console.error("Error fetching posts:", error));
