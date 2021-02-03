import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {},
} as Meta;

const Template: Story<SelectPropsType> = (args) => <Select {...args} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 1,
    onChange: action("Value changed"),
    items:[
        {value: 1, title: "Minsk"},
        {value: 2, title: "Moscow"},
        {value: 3, title: "Kiev"},
    ]
};
export const EmptyRating1 = Template.bind({});
EmptyRating1.args = {
    value: 3,
    onChange: action("Value changed"),
    items:[
        {value: 1, title: "Minsk"},
        {value: 2, title: "Moscow"},
        {value: 3, title: "Kiev"},
    ]
};