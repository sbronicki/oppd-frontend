import { Card } from "antd";

function Post({ date, post }: postProps) {
  // need to sanitize posts?
  return (
    <Card size="small" title={date}>
      {post}
    </Card>
  );
}

export default Post;
interface postProps {
  date: string;
  post: string;
}
