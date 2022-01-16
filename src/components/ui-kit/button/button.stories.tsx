import { Meta, Story } from "@storybook/react";
import React from "react";

import { Button, PropsButton } from "./button";

export default {
  title: "Button",
  components: Button
} as Meta;

const Template: Story<PropsButton> = (arg: Partial<PropsButton>) => <Button {...arg} />;

export const Blue = Template.bind({});

Blue.args = {
  children: "Click me",
  theme: "blue"
};

export const Transparent = Template.bind({});

Transparent.args = {
  children: "Click me",
  theme: "transparent"
};
