<template>
	<div class="messageItem">
		<slot />
	</div>
</template>
<script>
export default {
	name: "MessageItem"
};
</script>
<style lang="scss">
.message {
	width: 300px;
	background: $bg-accent;
}
</style>
