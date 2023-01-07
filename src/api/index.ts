import axios from "axios";

export async function getPosts() {
  const response = await axios.get("http://localhost:4000/api/posts");
  return response;
}

export async function createPost(post: string) {
  const response = await axios.post("http://localhost:4000/api/posts", {
    post,
  });
  return response;
}
