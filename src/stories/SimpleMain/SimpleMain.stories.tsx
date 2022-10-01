import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleMain } from "./SimpleMain";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: "SimpleMain",
  component: SimpleMain,
} as ComponentMeta<typeof SimpleMain>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleMain> = (args) => {
  return <SimpleMain {...args} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Find Team",
  imageUrl: "https://cdn.aitimes.com/news/photo/202109/140502_141879_5122.jpg",
  mainValue: "팀관리",
  value: ["메뉴입니다.", "자신의 팀을 관리해보세요."],
};

export const Second = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Second.args = {
  title: "Find Team",
  imageUrl: "http://cdn.edujin.co.kr/news/photo/201907/31389_53590_2422.png",
  mainValue: "팀 찾기",
  value: ["메뉴입니다.", "자신이 들어가고 싶은 팀을 찾아보세요!"],
};

export const Third = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Third.args = {
  title: "Find Team",
  imageUrl:
    "https://www.ulsanpress.net/news/photo/202012/367024_153583_3645.jpg",
  mainValue: "선수 찾기",
  value: ["메뉴입니다.", "자신의 팀에 영입할 선수를 찾아보세요."],
};
