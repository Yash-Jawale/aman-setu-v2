barba.init({
	debug: true,
	logLevel: "debug",
	transitions: [
		{
			name: "opacity-transition",
			leave(data) {
				return gsap.to(data.current.container, {
					opacity: 0,
					duration: 1.5
				});
			},
			enter(data) {
				return gsap.from(data.next.container, {
					opacity: 0,
					duration: 1.5
				});
			}
		}
	]
});
