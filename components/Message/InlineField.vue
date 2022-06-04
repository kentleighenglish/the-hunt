<template>
	<span ref="field" class="inlineField">
		<div class="inlineField__input">
			<label v-show="editing" ref="label" :for="name" :style="labelStyle">
				{{ label }}
			</label>
			<input
				v-model="model"
				autocomplete="off"
				:name="name"
				:type="type"
				:size="size"
				required
				@blur="setEditing(false)"
				@focus="setEditing(true)"
				@input="updateValue($event.target.value)"
			/>
		</div>
	</span>
</template>
<script>
export default {
	name: "MessageInlineField",
	props: {
		value: {
			type: String,
			default: null
		},
		name: {
			type: String,
			default: null
		},
		placeholder: {
			type: String,
			default: null
		},
		type: {
			type: String,
			default: "text"
		},
		label: {
			type: String,
			default: null
		},
		active: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		labelStyle: {},
		editing: false,
		model: null
	}),
	computed: {
		size() {
			let size = 2;
			if (this.model) {
				size = (this.model.length || 0) * 0.8;
			}
			return size > 2 ? size : 2;
		}
	},
	watch: {
		value(v) {
			this.model = v;
		}
	},
	created() {
		this.model = this.value;
	},
	mounted() {
		this.model = this.value;

		document.addEventListener("resize", () => this.updateLabelStyle());

		this.updateLabelStyle();
	},
	methods: {
		calculateMargin() {
			const { field, label } = this.$refs;
			const width = document.body.clientWidth;

			if ((field, label)) {
				const leftPos = field.offsetLeft;
				const elWidth = label.clientWidth;
				const margin = width - (leftPos + elWidth);

				return margin < 0 ? margin : 0;
			}

			return 0;
		},
		updateLabelStyle() {
			const width = document.body.clientWidth;
			const margin = this.calculateMargin();

			this.labelStyle = {
				marginLeft: `${margin}px`,
				maxWidth: `${width}px`
			};
		},
		setEditing(val) {
			this.$emit("editing", { name: this.name, value: val });
			this.editing = !!val;
		},
		updateValue(value) {
			this.$emit("input", { name: this.name, value });
		}
	}
};
</script>
<style lang="scss">
.inlineField {
	&.active {
		position: relative;
		z-index: 5;

		.inlineField__text:not(.hide) {
			opacity: 0.5;
		}

		input:not(:focus) {
			opacity: 0.4;
		}
	}

	&__input {
		display: inherit;
		position: relative;

		input {
			display: inline-block;
			padding: 4px;
			font-size: 14px;
			width: initial;
			height: 24px;
			margin: -2px 0 0;
			min-width: 40px;
			vertical-align: middle;
			background-color: $bg-accent;
			border: none;

			&:focus {
				outline: none;
			}
		}

		label {
			bottom: 100%;
			position: absolute;
			color: white;
			left: 0;
			font-family: sans-serif;
			width: 350px;

			&[type="number"] {
				width: 0;
				min-width: 60px;
			}
		}
	}
}
</style>
<!-- app.directive('inlineField', function() {
	return {
		controller: ['$element', '$rootScope', '$sce', function($element, $rootScope, $sce) {
			$rootScope.$on('editing', function($event, data) {
				if (data.name === this.name && data.value === true) {
					this.active = true;
				} else {
					this.active = false;
				}
			}.bind(this));

			this.update = function() {
				this.ngModelCtrl.$setViewValue(this.ngModel);
			}

		}]
	}
}); -->
