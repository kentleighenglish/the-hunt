<template>
	<div class="messageItem">
		<div class="messageItem__inner">
			<slot />
		</div>
	</div>
</template>
<script>
export default {
	name: "MessageItem"
};
</script>
<style lang="scss">
.messageItem {
	&__inner {
		width: 300px;
		background: $bg-accent;

		padding: math.div($gap, 2);
		background: $grey;
		margin-bottom: math.div($gap, 2);

		@include realShadow();
	}
}
</style>
