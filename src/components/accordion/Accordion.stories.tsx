import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {},
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

const callback = action("Accordion mode change event fired")
const onClickCallback = action("Some item was clicked")

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    onChange: callback,
    items: [],

};
export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onChange: callback,
    items: [{title: "Dima", value: 1},
        {title: "Den", value: 2},
        {title: "Alena", value: 3}],

};
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Dima", value: 1},
                          {title: "Den", value: 2},
                          {title: "Alena", value: 3}
                          ]}
                      onClick = {onClickCallback}
    />
}





