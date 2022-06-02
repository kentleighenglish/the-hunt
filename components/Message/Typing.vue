<template>
	<div class="typing">
		<span />
		<span />
		<span />
	</div>
</template>
<script>
export default {
	name: "MessageTyping"
};
</script>
<style lang="scss">
@keyframes typingAnim {
	0% {
		opacity: 0.3;
	}
	20% {
		opacity: 0.3;
	}
	40% {
		opacity: 1;
	}
	50% {
		opacity: 1;
	}
	60% {
		opacity: 0.3;
	}
	100% {
		opacity: 0.3;
	}
}

.typing {
	> span {
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 100%;

		background: $grey-light;

		animation: typingAnim 1s ease-in-out infinite;

		&:nth-child(2) {
			animation-delay: 0.25s;
		}
		&:nth-child(3) {
			animation-delay: 0.5s;
		}
	}
}
</style>
