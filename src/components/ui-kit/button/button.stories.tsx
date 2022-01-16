import { ComponentMeta, ComponentStory, Story } from "@storybook/react";
import React from "react";

import { Button, PropsButton } from "./button";

export default {
  title: "Button",
  components: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Blue = Template.bind({});

Blue.args = {
  theme: "blue",
  children: "Click me"
};

export const Transparent = Template.bind({});

Transparent.args = {
  theme: "transparent",
  children: "Click me"
};
