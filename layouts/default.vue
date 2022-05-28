<template>
	<div class="defaultLayout">
		<IntroAnimation v-if="showIntro" @introEnd="hideIntro" />
		<GlobalBanner />
		<div v-if="connected && hasEvents" class="defaultLayout__content">
			<Nuxt />
		</div>
		<GlobalNav />
	</div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
	name: "DefaultLayout",
	data() {
		return {
			showIntro: true
		};
	},
	computed: {
		...mapState({
			connected({ socket: { connected } }) {
				return connected;
			},
			hasEvents({ socket: { events } }) {
				return events && Object.keys(events).length;
			}
		})
	},
	mounted() {
		this.addSocket({ socket: this.$socket });

		const socketIo = this.$socket().connect();

		this.bindEvents(socketIo);

		const skipIntro = localStorage.getItem("skipIntro");

		if (skipIntro) {
			this.hideIntro();
		}
	},
	methods: {
		...mapActions({
			addSocket: "socket/addSocket",
			addEvents: "socket/addEvents",
			updateSocketStatus: "socket/updateSocketStatus",
			fetchStory: "stories/fetch",
			setCurrentStory: "stories/setCurrentStory"
		}),
		hideIntro() {
			this.showIntro = false;
		},
		bindEvents(socketIo) {
			socketIo.on("connect", () => {
				this.updateSocketStatus({ connected: true });
			});
			socketIo.on("connect_error", (error) => {
				this.updateSocketStatus({ connected: false, error });
				this.pushMessage({
					type: "error",
					body: error
				});
			});
			socketIo.on("disconnect", (reason) => {
				this.updateSocketStatus({ connected: false, error: reason });
				this.pushMessage({
					type: "error",
					body: reason
				});
			});
			socketIo.on("connectResponse", ({ events }) => {
				this.addEvents({ events });

				this.initStory();
			});
		},
		initStory() {
			const currentStory = localStorage.getItem("currentStory");

			if (currentStory) {
				this.setCurrentStory({ id: currentStory, router: this.$router });
			}
		}
	}
};
</script>
<style lang="scss">
.defaultLayout {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__content {
		height: 100%;
		display: flex;
		background-color: $bg-accent-dark;
		box-shadow: inset 0px 10px 15px -10px fade-out(black, 0.4);
		overflow: hidden;

		align-items: center;
		justify-content: center;

		&:not(.loaded) {
			.viewport,
			.grid,
			.error {
				display: none;
			}
		}
	}
}
</style>
