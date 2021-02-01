import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {UncontroledOnOff} from "./UncontroledOnOff";
import {action} from "@storybook/addon-actions";
import {OnOffProps} from "../OnOff/OnOff";


export default {
    title: 'UncontroledOnOff',
    component: UncontroledOnOff,
    argTypes: {},
} as Meta;

const Template: Story<OnOffProps> = (args) => <UncontroledOnOff {...args} />;

const callback = action("On or Off clicked")

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onChange: callback
};
export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onChange: callback
};






