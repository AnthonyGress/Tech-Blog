const user_id = document.cookie;
console.log(user_id);
const commentForm = document.querySelector(".comment-form");
const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector("#leave-comment").value.trim();
  const post_id = window.location.href.toString().split("/").pop();
  if (comment && user_id) {
    const response = await fetch("/api/comment", {
      method: "POST",
      post_id: JSON.stringify(post_id),
      user_id: JSON.stringify(user_id),
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("all good");
      // document.location.replace(`/api/post/${post_id}`);
    } else {
      alert("Failed to leave a comment.");
    }
  }
};

commentForm.addEventListener("submit", commentFormHandler);
