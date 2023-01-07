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

  console.log(createPostMutation);

  const onFinish = (values: any) => {
    // sanitize post ??
    createPostMutation.mutate(values.Post);
  };

  return (
    <Form name="form" form={form} onFinish={onFinish}>
      <Form.Item name="Post" rules={[{ required: true }]}>
        <ReactQuill className="quill-editor" theme="snow" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
