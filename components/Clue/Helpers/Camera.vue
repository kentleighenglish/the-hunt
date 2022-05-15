<template>
	<div class="camera">
		<qrcode-reader @decode="onDecode($event)" :track="false">
			<div class="flash" :class="{ flashed: hasScanned }"></div>
		</qrcode-reader>
	</div>
</template>
<script>
import { QrcodeReader } from "vue-qrcode-reader";

export default {
	name: "ClueCamera",
	data: () => ({
		hasScanned: false
	}),
	components: {
		'qrcode-reader': QrcodeReader
	},
	props: {
		data: {}
	},
	methods: {
		onDecode(e) {
			if(e && e.length) {
				this.hasScanned = true;
				navigator.vibrate([100]);
				this.$emit('on-decode', e);
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
		opacity: .2;
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
		background-color: fade-out(white, .2);
		opacity: 0;

		&.flashed {
			animation: flash .5s 1 ease-out;
		}
	}
}
</style>
