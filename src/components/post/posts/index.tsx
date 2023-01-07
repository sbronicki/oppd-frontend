import { List, Typography, Card } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../../../api";
import Error from "../../error";
import Loading from "../../loading";
import Post from "../post";

function Posts() {
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["posts"],
    getPosts,
    { staleTime: 60000 }
  );

  if (isLoading) <Loading />;
  if (isError) <Error />;

  return (
    <div className="posts">
      {data ? (
        <List
          dataSource={data.data}
          renderItem={(postData: postData) => (
            <List.Item>
              {<Post date={postData.createdAt} post={postData.post} />}
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
