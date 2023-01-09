import axios from "axios";

export async function getPosts() {
  try {
    const response = await axios.get("http://localhost:4000/api/posts");
    return response;
  } catch (err: any) {
    return (
      err?.response?.data || {
        error: "Could not get posts",
      }
    );
  }
}

export async function createPost(post: string) {
  try {
    const response = await axios.post("http://localhost:4000/api/posts", {
      post,
    });
    return response;
  } catch (err: any) {
    return (
      err?.response?.data || {
        error: "Could not create post",
      }
    );
  }
}

export async function getPostByID(postID?: string) {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/posts/" + postID
    );
    return response;
  } catch (err: any) {
    return (
      err?.response?.data || {
        error: "Could not get post",
      }
    );
  }
}
