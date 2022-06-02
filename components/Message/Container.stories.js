import Container from "./Container";

export default {
	component: Container,
	title: "MessageContainer",
	argTypes: {
		isTyping: {
			control: { type: "boolean" }
		}
	},
	args: {
		isTyping: false
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Container },
	template: "<Container v-bind='$props' />"
});

export const Default = Template.bind({});
Default.args = {
	messages: [{ body: "Hello There" }]
};
