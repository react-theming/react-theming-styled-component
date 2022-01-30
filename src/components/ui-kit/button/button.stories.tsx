import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import React from "react";

import { Button } from "./button";

export default {
  title: "Button",
  components: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: "Click me"
};
