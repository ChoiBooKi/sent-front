import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleInput } from "./SimpleInput";
import { platform } from 'os';

export default {
  title: "SimpleInput",
  component: SimpleInput
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

export const Basic1 = Template.bind({});
Basic1.args = {
  title: "이메일",
  placeHolder: "이메일을 입력해주세요."
};

export const Basic2 = Template.bind({});
Basic2.args = {
  title: "인증번호",
  placeHolder: "인증번호를 입력해주세요.",
  inputButton: true,
  buttonName: "인증확인"
};

export const Basic3 = Template.bind({});
Basic3.args = {
  title: "인증번호",
  placeHolder: "인증번호를 입력해주세요.",
  warning: true,
  warningM: "인증 번호를 바르게 입력해주세요."
};
