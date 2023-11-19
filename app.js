fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => getComments(data));

function getComments(comments) {
  const contentSection = document.getElementById("content-container");
  for (const comment of comments) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post-div");
            postDiv.innerHTML = `
                <h3 class="font-bold">Name : ${comment.name}</h3>
                <p class="italic">Email : ${comment.email}</p>
                <p>${comment.body}</p>
            `;
            contentSection.appendChild(postDiv);
    }
}