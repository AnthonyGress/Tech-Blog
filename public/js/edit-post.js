const editForm = document.querySelector(".edit-post-form");

const getUid = async () => {
  const response = await fetch("/api/user/uid");
  const uid = await response.json();
  return uid;
};

const editPostHandler = async (event) => {
  event.preventDefault();
  const user_id = await getUid();
  const title = document.querySelector("#title-input").value.trim();
  const body = document.querySelector("#body-input").value.trim();
  const post_id = window.location.href.toString().split("/").pop();
  if ((title || body) && user_id) {
    const response = await fetch(`/api/post/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, body, user_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("New Post Submitted Successfully");
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post.");
    }
  }
};

editForm.addEventListener("submit", editPostHandler);
