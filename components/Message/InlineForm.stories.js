import InlineForm from "./InlineForm";

export default {
	component: InlineForm,
	title: "InlineForm",
	argTypes: {
		form: {
			control: { type: "text" }
		}
	},
	args: {
		form: "This is a form {{field}} and second one {{field2|label}}",
		data: {}
	}
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { InlineForm },
	template: "<InlineForm v-bind='$props' />"
});

export const Default = Template.bind({});
Default.args = {};
