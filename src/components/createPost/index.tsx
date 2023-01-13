import { useState } from "react";
import { useMutation } from "react-query";
import { Form, Input, Button } from "antd";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { createPost } from "../../api";
import Loading from "../loading";
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
  const { data, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: onSuccess,
  });
  const [form] = Form.useForm();

  function onFinish(values: any) {
    mutate(values.Post);
  }
  function onSuccess(e: any) {
    onAddNewPostAdded();
    form.resetFields();
  }

  if (data?.error) {
    // posting while count down active should be handled here via custom error
    return <Error data={data} />;
  }

  return (
    <Form name="editor-form" form={form} onFinish={onFinish}>
      <Form.Item name="Post" rules={[{ required: true }]}>
        <ReactQuill
          modules={{
            toolbar: TOOLBAR_OPTIONS,
          }}
          className="quill-editor"
          theme="snow"
        />
      </Form.Item>
      {data?.data?.post ? (
        <Form.Item label="Congrats" {...tailFormItemLayout}>
          Post Success!
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
