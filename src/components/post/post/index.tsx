import { Card } from "antd";
import { useQuery } from "react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostByID } from "../../../api";
import Error from "../../error";
import Loading from "../../loading";

function Post({ date, post, postID }: postProps) {
  const { postIDFromURL } = useParams();
  const { data, isLoading } = useQuery(
    ["posts", postIDFromURL],
    ({ queryKey }) => getPostByID(queryKey[1]),
    { enabled: postID === undefined }
  );

  if (isLoading) {
    return <Loading />;
  }
  if (data?.error) {
    return <Error error={data.error} />;
  }

  return (
    <Card
      className="post-card"
      title={
        <PostTitle
          date={date || data?.data.createdAt}
          postID={postID || data?.data._id}
        />
      }
    >
      <div
        className="post-container"
        dangerouslySetInnerHTML={{ __html: post || data?.data.post }}
      ></div>
    </Card>
  );
}

export default Post;

function PostTitle({ date, postID }: PostTitleProps) {
  return (
    <Link key={date} to={"/posts/" + postID} title={date}>
      {formatDate(date)}
    </Link>
  );
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formatedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formatedDate;
}
interface postProps {
  date?: string;
  post?: string;
  postID?: string;
}
interface PostTitleProps {
  date: string;
  postID: string;
}

interface dataQuery {
  _id: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
