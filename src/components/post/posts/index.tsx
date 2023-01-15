import { List, Typography, Card } from "antd";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../../api";
import Error from "../../error";
import Loading from "../../loading";
import Post from "../post";

function Posts({ newPostAdded }: newPostAdded) {
  const { isLoading, data, refetch } = useQuery(["posts"], getPosts);

  useEffect(() => {
    if (newPostAdded) refetch();
  }, [newPostAdded]);

  if (isLoading) {
    return <Loading />;
  }
  if (data?.error) {
    return <Error error={data.error} />;
  }

  return (
    <div className="posts-container">
      {data ? (
        <List
          dataSource={data.data}
          renderItem={(postData: postData) => (
            <List.Item style={{ border: "none" }}>
              {
                <Post
                  postID={postData._id}
                  date={postData.createdAt}
                  post={postData.post}
                />
              }
            </List.Item>
          )}
        />
      ) : null}
    </div>
  );
}

export default Posts;

interface postData {
  _id: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface newPostAdded {
  newPostAdded?: boolean;
}
