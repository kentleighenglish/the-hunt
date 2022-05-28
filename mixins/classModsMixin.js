export const makeClassMods = (baseClass, modifiers, component) =>
	Object.keys(modifiers)
		.reduce(
			(arr, key) => {
				const modifier = modifiers[key];

				const result = modifier(component);

				if (typeof result === "string") {
					return [...arr, `${baseClass}--${result}`];
				}

				if (result) {
					return [...arr, `${baseClass}--${key}`];
				} else {
					return arr;
				}
			},
			[baseClass]
		)
		.join(" ");

export default {
	computed: {
		componentClass() {
			if (this.$options.classMod) {
				const { baseClass = "", modifiers = {} } = this.$options.classMod;

				return makeClassMods(baseClass, modifiers, this);
			}

			return "";
		}
	}
};
