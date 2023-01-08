import { useState } from "react";
import { useMutation } from "react-query";
import { Form, Input, Button } from "antd";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { createPost } from "../../api";

const tailFormItemLayout = {
  wrapperCol: {
    xs: {},
  },
};

export default function CreatePost() {
  const createPostMutation = useMutation(createPost);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    createPostMutation.mutate(values.Post);
  };

  return (
    <Form name="form" form={form} onFinish={onFinish}>
      <Form.Item name="Post" rules={[{ required: true }]}>
        <ReactQuill
          modules={{
            toolbar: TOOLBAR_OPTIONS,
          }}
          className="quill-editor"
          theme="snow"
        />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
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
  ["clean"],
];
