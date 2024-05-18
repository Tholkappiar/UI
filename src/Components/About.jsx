import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		// eslint-disable-next-line no-undef
		ScrollReveal().reveal(".scroll", { delay: 500 });
	});
	return (
		<div className="container mx-auto p-10" id="values">
			<img
				src="/group_image.avif"
				className="rounded-lg sm:h-[300px] lg:h-[400px] w-full object-cover scroll"
			></img>
			<div>
				<p className="text-4xl font-bold font-sans mt-6 scroll">Our values</p>
				<p className="text-lg font-light mt-6 md:w-[60%] scroll">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
					voluptatum cupiditate veritatis in accusamus quisquam.
				</p>
			</div>
			<div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<div className="bg-gray-100 rounded-lg p-4 scroll">
					<p className="font-medium">Be world-class</p>
					<p className="mt-4 font-light w-[90%] leading-7">
						Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint
						et magnam exercitationem quia. Ullam voluptas nihil vitae dicta
						molestiae et. Aliquid velit porro vero.
					</p>
				</div>
				<div className="bg-gray-100 rounded-lg p-4 scroll">
					<p className="font-medium">Share everything you know</p>
					<p className="mt-4 font-light w-[90%] leading-7">
						Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime
						adipisci illo id molestiae. Cumque cum ut minus rerum architecto
						magnam consequatur. Quia quaerat minima.
					</p>
				</div>
				<div className="bg-gray-100 rounded-lg p-4 scroll">
					<p className="font-medium">Always learning</p>
					<p className="mt-4 font-light w-[90%] leading-7">
						Aut repellendus et officiis dolor possimus. Deserunt velit quasi
						sunt fuga error labore quia ipsum. Commodi autem voluptatem nam.
						Quos voluptatem totam.
					</p>
				</div>
				<div className="bg-gray-100 rounded-lg p-4 scroll">
					<p className="font-medium">Be supportive</p>
					<p className="mt-4 font-light w-[90%] leading-7">
						Magnam provident veritatis odit. Vitae eligendi repellat non. Eum
						fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi.
						Praesentium rerum error deserunt harum.
					</p>
				</div>
				<div className="bg-gray-100 rounded-lg p-4 scroll">
					<p className="font-medium">Take responsibility</p>
					<p className="mt-4 font-light w-[90%] leading-7">
						Sit minus expedita quam in ullam molestiae dignissimos in harum.
						Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus
						laboriosam voluptas perspiciatis error.
					</p>
				</div>
				<div className="bg-gray-100 rounded-lg p-4 scroll">
					<p className="font-medium">Enjoy downtime</p>
					<p className="mt-4 font-light w-[90%] leading-7">
						Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum
						dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est
						velit consequatur distinctio.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
