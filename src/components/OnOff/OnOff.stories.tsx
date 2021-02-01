import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {OnOff, OnOffProps} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,
    argTypes: {},
} as Meta;

const Template: Story<OnOffProps> = (args) => <OnOff {...args} />;

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
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}





