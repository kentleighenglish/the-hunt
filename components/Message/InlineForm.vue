<script>
export default {
	name: "MessageInlineForm",
	props: {
		form: {
			type: String,
			default: ""
		},
		data: {
			type: Object,
			default: () => ({})
		}
	},
	data: () => ({
		editMode: false
	}),
	computed: {
		fields() {
			const matches = this.form.match(/\{\{([^{}]+)\}\}/g);
			return matches.reduce((arr, string) => {
				const param = string.replace(/(\{|\})/g, "");
				const paramSplit = param.split("|");

				const name = paramSplit[0];
				const label = paramSplit[1] || null;

				arr.push({
					name,
					type: "text",
					label: label ? this.replaceVars(label) : null,
					placeholder: this.toTitleCase(name)
				});
				return arr;
			}, []);
		},
		body() {
			return this.removeFields(this.form);
		}
	},
	methods: {
		replaceVars(input) {
			const vars = {
				date: () => {
					const d = new Date();
					return `${String(d.getDate()).padStart(2, "0")}/${String(
						d.getMonth() + 1
					).padStart(2, "0")}/${d.getFullYear()}`;
				}
			};

			return input.replace(/:([a-z0-9\-_]+)/g, (m, key) => vars[key]);
		},
		toTitleCase(string) {
			return string
				.replace("_", " ")
				.replace(/(^.|\s.)/g, (m) => m.toUpperCase());
		},
		removeFields(input) {
			return input.replace(
				/\{\{([a-z0-9_]+)(\|[^}{]+)?\}\}/g,
				(m, name, type) => m.replace(type, "")
			);
		},
		interpolateFields(input, cb) {
			const parsed = this.removeFields(input);

			return parsed.replace(/\{\{([^{}]+)\}\}/g, (m, name) => cb(name));
		},
		onUpdate() {
			this.$emit("update", { form: this.form });
		}
	},
	render(h) {
		const splitBody = this.interpolateFields(
			this.body,
			(name) => `%%%{{${name}}}%%%`
		).split("%%%");

		const body = splitBody.map((section) => {
			if (section.includes("{{")) {
				const name = section.replace(/\{\{([^{}]+)\}\}/g, (m, name) => name);
				const field = this.fields.find((f) => f.name === name);

				if (field) {
					return h(
						"MessageInlineField",
						{
							props: {
								name,
								type: field.type,
								placeholder: field.placeholder,
								label: field.label,
								required: true,
								value: this.data[name]
							},
							on: {
								editing: (editing) => {
									this.$emit("editing", editing);
								},
								input: ({ name, value }) => {
									this.$emit("input", { ...this.data, [name]: value });
								}
							}
						},
						[]
					);
				}
			}

			return h("span", {}, section);
		});

		return h("div", { class: "inlineForm" }, body);
	}
};
</script>
