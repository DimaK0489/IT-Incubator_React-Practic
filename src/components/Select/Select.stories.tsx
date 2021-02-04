import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";

export default {
    title: 'Select',
    component: Select,
    argTypes: {},
} as Meta;

const Sss = () => {
    const items = [
        {value: 1, title: "Minsk"},
        {value: 2, title: "Moscow"},
        {value: 3, title: "Kiev"},
    ]
    const [val, setVal] = useState(1)
    const onChangeval = (val: number) => {
        setVal(val)
    }
    return (
        <Select value={val} onChange={onChangeval} items={items}/>
    )
}

const Template: Story = (args) => <Sss/>;

export const EmptyRating = Template.bind({});

EmptyRating.args = {};

