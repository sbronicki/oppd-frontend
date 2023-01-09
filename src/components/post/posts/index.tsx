import { List, Typography, Card } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../../api";
import Error from "../../error";
import Loading from "../../loading";
import Post from "../post";

function Posts() {
  const { isLoading, data, error } = useQuery(["posts"], getPosts);

  if (isLoading) <Loading />;
  if (error) <Error />;

  return (
    <div className="posts">
      {data ? (
        <List
          dataSource={data.data}
          renderItem={(postData: postData) => (
            <List.Item>
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
