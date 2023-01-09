import { Card } from "antd";
import { useQuery } from "react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostByID } from "../../../api";
import Error from "../../error";
import Loading from "../../loading";

function Post({ date, post, postID }: postProps) {
  const { postIDFromURL } = useParams();
  const { data, isLoading, error } = useQuery(
    ["posts", postIDFromURL],
    ({ queryKey }) => getPostByID(queryKey[1]),
    { enabled: postID === undefined }
  );
  if (isLoading) <Loading />;
  if (error) <Error />;

  return (
    <Card
      size="small"
      title={
        <PostTitle
          date={date || data?.data.createdAt}
          postID={postID || data?.data._id}
        />
      }
    >
      <div dangerouslySetInnerHTML={{ __html: post || data?.data.post }}></div>
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
