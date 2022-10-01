import React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleTest } from "./SimpleTest";

export default {
  title: "SimpleTest",
  component: SimpleTest
} as ComponentMeta<typeof SimpleTest>;

const Template: ComponentStory<typeof SimpleTest> = (args) => <SimpleTest {...args} />;

export const Basic1 = Template.bind({});
Basic1.args = {
  title: "Team Manage",
  imageUrl:
    "https://www.kukinews.com/data/kuk/image/2022/08/04/kuk202208040265.680x.0.jpg",
  value: ["팀 관리 메뉴 입니다.", "자신의 팀을 관리해보세요."]
};



export const Basic2 = Template.bind({});
Basic2.args = {
  title: "Find Team",
  imageUrl:
    "https://src.hidoc.co.kr/image/lib/2019/6/21/20190621171642596_0.jpg",
  value: ["팀 찾기 메뉴 입니다.", "자신이 들어가고 싶은 팀을 찾아보세요."]
};

export const Basic3 = Template.bind({});
Basic3.args = {
  title: "Find Player",
  imageUrl:
    "https://jmagazine.joins.com/_data/photo/2019/04/2949993301_Q2FAB7XE_1.jpg",
  value: ["선수 찾기 메뉴 입니다.", "자신이 팀에 영입할 선수를 찾아보세요."]
};
