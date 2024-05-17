import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		// eslint-disable-next-line no-undef
		VANTA.BIRDS({
			el: "#birds",
			mouseControls: true,
			touchControls: false,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			backgroundColor: 0x3,
			color1: 0xff6800,
			color2: 0x96ff,
			birdSize: 1.0,
			wingSpan: 17.0,
			speedLimit: 2.0,
			separation: 70.0,
			alignment: 30.0,
			cohesion: 20.0,
			quantity: 3.0,
		});
		// eslint-disable-next-line no-undef
		ScrollReveal().reveal(".scroll", { delay: 500 });
	});
	return (
		<div>
			<div
				id="birds"
				className="min-h-screen text-white select-none flex flex-col justify-center pt-40"
			>
				<div className="w-2/3 container mx-auto scroll">
					<div className="space-x-2 md:space-x-4">
						<span className="font-bold text-3xl sm:text-5xl md:text-7xl font-Caveat">
							Designing
						</span>{" "}
						<span className="font-light font-mono text-lg sm:text-2xl md:text-4xl">
							a Better
						</span>
						<br />
						<span className="font-bold text-3xl sm:text-5xl md:text-7xl font-Caveat !ml-0">
							world
						</span>{" "}
						<span className="font-light font-mono text-lg sm:text-2xl md:text-4xl">
							Today
						</span>
					</div>
					<p className="my-10 sm:w-2/3 text-gray-600 scroll">
						Welcome to our world of endless imagination and boundless
						creativity. Together, lets embark on a remarkable journey where
						dreams become tangible realities.
					</p>
					<div className="flex flex-col md:flex-row scroll">
						<div className="h-16 w-52 rounded-[40px] bg-[#FF9800] hover:opacity-50 text-black font-mono font-medium mr-10 flex justify-center items-center">
							<span className="">What we do ?</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</div>
						<div className="h-16 w-52 rounded-[40px] text-white hover:opacity-50 font-mono font-medium flex justify-center items-center">
							<span className="">View works</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 ml-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
