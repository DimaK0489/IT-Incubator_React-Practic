import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Rating, RatingPropsType} from "./Raiting";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating stories',
    component: Rating,
    argTypes: {},
} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const RatingZeroStarExample = Template.bind({});
RatingZeroStarExample.args = {
   value: 0
};
export const RatingOneStarExample = Template.bind({});
RatingOneStarExample.args = {
    value: 1,
    onClick: action('Star clicked')
};
export const RatingTwoStarExample = Template.bind({});
RatingTwoStarExample.args = {
    value: 2,
    onClick: action('Star clicked')
};
export const RatingThreeStarExample = Template.bind({});
RatingThreeStarExample.args = {
    value: 3,
    onClick: action('Star clicked')
};
export const RatingFourStarExample = Template.bind({});
RatingFourStarExample.args = {
    value: 4,
    onClick: action('Star clicked')
};
export const RatingFiveStarExample = Template.bind({});
RatingFiveStarExample.args = {
    value: 5,
    onClick: action('Star clicked')
};
/*export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingPropsType>(4);
    return <Rating value={rating} onClick={setRating} />
};*/



