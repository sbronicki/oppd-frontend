import { Button, Form } from "antd";
import { useState } from "react";
import { useMutation } from "react-query";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../../api";
import Error from "../error";

const tailFormItemLayout = {
  labelCol: {
    span: 12,
    offset: 0,
    xs: { span: 12, offset: 0 },
  },
  wrapperCol: {
    span: 12,
    offset: 0,
    xs: { span: 12, offset: 0 },
  },
};

export default function CreatePost({ onAddNewPostAdded }: any) {
  const [placeholder, setPlaceholder] = useState<string>(
    "Create your awesome post here!"
  );

  const { data, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: onSuccess,
  });
  const [form] = Form.useForm();

  function onFinish(values: any) {
    mutate(values.Post);
  }
  function onSuccess(e: any) {
    if (!e.error) {
      form.resetFields();
      onAddNewPostAdded();
      setPlaceholder("");
    }
  }

  return (
    <Form name="editor-form" form={form} onFinish={onFinish}>
      <Form.Item name="Post" rules={[{ required: true }]}>
        <ReactQuill
          placeholder={placeholder}
          modules={{
            toolbar: TOOLBAR_OPTIONS,
          }}
          className="quill-editor"
          theme="snow"
        />
      </Form.Item>
      {data?.error ? (
        <Form.Item style={{ textAlign: "center" }}>
          <Error error={data.error} />
        </Form.Item>
      ) : null}
      {data?.data?.success ? (
        <Form.Item style={{ textAlign: "center" }}>
          Post was successful!
        </Form.Item>
      ) : (
        <Form.Item label="Submit Your Post" {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      )}
    </Form>
  );
}

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  // ["clean"],
];
