import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {UncontrolledRating} from "./UncontroledRaiting";
import {action} from "@storybook/addon-actions";
import {RatingPropsType} from "../Rating/Raiting";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    argTypes: {},
} as Meta;

const Template: Story<RatingPropsType> = (args) => <UncontrolledRating {...args} />;

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 0,
    onClick: action("Star")
};
export const Rating2 = Template.bind({});
Rating2.args = {
    value: 1,
    onClick: action('Star clicked')
};
export const Rating3 = Template.bind({});
Rating3.args = {
    value: 2,
    onClick: action('Star clicked')
};
export const Rating4 = Template.bind({});
Rating4.args = {
    value: 3,
    onClick: action('Star clicked')
};
export const Rating5 = Template.bind({});
Rating5.args = {
    value: 4,
    onClick: action('Star clicked')
};
export const Rating6 = Template.bind({});
Rating6.args = {
    value: 5,
    onClick: action('Star clicked')
};




