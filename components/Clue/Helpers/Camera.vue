<template>
	<div class="camera">
		<QrcodeReader :track="false" @decode="onDecode($event)">
			<div class="flash" :class="{ flashed: hasScanned }"></div>
		</QrcodeReader>
	</div>
</template>
<script>
import { QrcodeReader } from "vue-qrcode-reader";

export default {
	name: "ClueCamera",
	components: {
		QrcodeReader
	},
	data: () => ({
		hasScanned: false
	}),
	methods: {
		onDecode(e) {
			if (e && e.length) {
				this.hasScanned = true;
				navigator.vibrate([100]);
				this.$emit("on-decode", e);
			}
		}
	}
};
</script>
<style lang="scss">
@keyframes flash {
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}
	100% {
		opacity: 0;
	}
}
.camera {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;

	.flash {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;

		width: 100%;
		height: 100%;
		background-color: fade-out(white, 0.2);
		opacity: 0;

		&.flashed {
			animation: flash 0.5s 1 ease-out;
		}
	}
}
</style>
