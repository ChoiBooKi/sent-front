import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleInput } from "./SimpleInput";


export default {
  title: "Simple-Input",
  component: SimpleInput
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: {
    title: '이메일'
  },
  inputValue: {
    inputValue: '이메일 입력해주세요.'
  },
  size: {
    size: 200 //미완;;
  }
};