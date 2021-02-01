import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import {UncontrolledAccordion} from "./UncontroledAccordion";
import {action} from "@storybook/addon-actions";
import {AccordionPropsType} from "../accordion/Accordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
    argTypes: {},
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args} />;

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue="Users" />
}





