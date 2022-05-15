<template>
	<div v-if="audio" class="clueAudio">
		<div class="clueAudio__controls">
			<a v-if="state == 'stopped' || state == 'paused'" @click="play()">
				<CommonIcon>play_arrow</CommonIcon>
			</a>
			<a v-if="state == 'playing'" @click="pause()">
				<CommonIcon>pause</CommonIcon>
			</a>
			<a :class="{ disabled: state == 'stopped' }" @click="stop()">
				<CommonIcon>stop</CommonIcon>
			</a>
		</div>
		<div class="clueAudio__time">
			<span>{{ currentTime }} / {{ duration }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: "ClueAudio",
	props: {
		audio: {
			type: Object,
			default: null
		}
	},
	data: () => ({
		playing: false,
		paused: false,
		state: "stopped",
		media: null,
		duration: null,
		currentTime: null
	}),
	mounted() {
		this.media = new Audio();
		this.media.src = this.audio;

		this.media.addEventListener("loadedmetadata", () => {
			this.duration = this.makeTimeCode(this.media.duration);
			this.currentTime = this.makeTimeCode(this.media.currentTime);
		});

		this.media.addEventListener("ended", () => {
			this.state = "stopped";
			this.media.currentTime = 0;
		});
		this.media.addEventListener("timeupdate", () => {
			this.currentTime = this.makeTimeCode(this.media.currentTime);
		});
	},
	methods: {
		play() {
			if (this.state !== "playing") {
				this.state = "playing";
				this.media.play();
			}
		},
		stop() {
			if (this.state === "playing" || this.state === "paused") {
				this.state = "stopped";
				this.media.pause();
				this.media.currentTime = 0;
			}
		},
		pause() {
			if (this.state === "playing") {
				this.state = "paused";
				this.media.pause();
			}
		},
		makeTimeCode(input) {
			if (input !== undefined) {
				const minutes = Math.floor(input / 60);

				const seconds = Math.floor(input - 60 * minutes);

				return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
			} else {
				return "?:??";
			}
		}
	}
};
</script>
<style lang="scss">
.clueAudio {
	width: 100%;
	height: 100%;
	text-align: center;

	&__controls {
		a span {
			font-size: 60px;
		}
	}
	&__time {
		font-size: $font-lg;
	}
}
</style>
