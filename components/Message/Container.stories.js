import Container from "./Container";

export default {
	component: Container,
	title: "MessageContainer"
};

const Template = (args, { argTypes }) => ({
	components: { Container },
	props: Object.keys(argTypes),
	template: `<Container v-bind="$props" />`
});
export const Default = Template.bind({});
Default.args = {
	src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=600&q=80",
	width: 400
};
