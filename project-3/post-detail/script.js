const searchParams = new URLSearchParams(window.location.search);
const postId = searchParams.get("id");
console.log(postId); // Output: "456"

// https://jsonplaceholder.typicode.com/posts/4
const imageUrl = `https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg`;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    console.log("Post data:", post);
    const mainDiv = document.querySelector("main");
    mainDiv.innerHTML = `
      <h2>ID: ${post.id} - ${post.title}</h2>
          <img src="${imageUrl}" alt="Post Image">
      <p>${post.body}</p>
    `;

    // Fetch author details
    // Fetch comment list
  })
  .catch((error) => console.error("Error fetching post:", error));
