import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleInput } from "./SimpleInput";

export default {
  title: "SimpleInput",
  component: SimpleInput,
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => {
  return <SimpleInput {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: "이메일",
  placeHolder: "이메일을 입력해주세요.",
};

export const Button = Template.bind({});
Button.args = {
  title: "인증번호",
  placeHolder: "인증번호를 입력해주세요.",
  buttonName: "인증 확인",
};

export const Warning = Template.bind({});
Warning.args = {
  title: "이메일",
  placeHolder: "이메일을 입력해주세요.",
  warningMessage: "중복된 이메일입니다.",
};
