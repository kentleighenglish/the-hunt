<template>
	<div class="messageContainer">
		<div class="messageContainer__banner" />
		<div class="messageContainer__messages">
			<MessageItem
				v-for="message in messages"
				:key="message.id"
				v-bind="message"
			>
				{{ message.body }}
			</MessageItem>
			<MessageItem v-if="isTyping" inline>
				<MessageTyping />
			</MessageItem>
		</div>
	</div>
</template>
<script>
export default {
	name: "MessageContainer",
	props: {
		isTyping: {
			type: Boolean,
			default: false
		},
		messages: {
			type: Array,
			default: () => []
		}
	}
};
</script>
<style lang="scss">
.messageContainer {
	height: 300px;
	width: 100%;
	background: $bg;

	@include texturedBg($bg-accent, "zebra");

	&__messages {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}
}
</style>
