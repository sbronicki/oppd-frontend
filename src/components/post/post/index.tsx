import { Card } from "antd";

function Post({ date, post }: postProps) {
  return (
    <Card size="small" title={date}>
      <div dangerouslySetInnerHTML={{ __html: post }}></div>
    </Card>
  );
}

export default Post;
interface postProps {
  date: string;
  post: string;
}
