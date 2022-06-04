<template>
	<div :class="componentClass">
		<div class="messageItem__inner">
			<slot />
		</div>
	</div>
</template>
<script>
import classModsMixin from "@/mixins/classModsMixin";

export default {
	name: "MessageItem",
	mixins: [classModsMixin],
	classMod: {
		baseClass: "messageItem",
		modifiers: {
			inline: (vm) => vm.inline,
			isPrompt: (vm) => vm.isPrompt
		}
	},
	props: {
		isPrompt: Boolean,
		inline: {
			type: Boolean,
			default: false
		}
	}
};
</script>
<style lang="scss">
.messageItem {
	display: flex;

	&__inner {
		width: 300px;
		background: $bg-accent;

		padding: math.div($gap, 2);
		background: $grey;
		margin-bottom: math.div($gap, 2);
		font-size: 12px;

		@include realShadow();
	}

	&--inline {
		.messageItem__inner {
			background: none;
			box-shadow: none;
		}
	}

	&--isPrompt {
		justify-content: flex-end;

		.messageItem__inner {
			background: lighten($grey, 3%);
		}
	}
}
</style>
