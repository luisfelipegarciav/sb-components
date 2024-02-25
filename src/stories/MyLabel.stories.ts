import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
	title: 'UI/Labels/MyLabel',
	component: MyLabel,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		size: {
			'control': 'select'
		},
		allCaps: {
			'control': 'boolean'
		},
		fontColor: {
			'control': 'color'
		},
	}
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
	args: {
		label: 'Basic Label',
		allCaps: false,
	}
}

export const AllCaps: Story = {
	args: {
		label: 'All Caps Label',
		allCaps: true,
	}
}

export const Secondary: Story = {
	args: {
		label: 'Secondary Label',
		color: 'text-secondary',
		allCaps: false,
	}
}

export const CustomColor: Story = {
	args: {
		label: 'Custom Color Label',
		fontColor: 'red',
		allCaps: false,
	}
}

export const CustomBackgroundColor: Story = {
	args: {
		label: 'Custom Background Color',
		fontColor: '#ffffff',
		backgroundColor: '#000000'
	}
}