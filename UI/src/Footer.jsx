const Footer = () => {
	return (
		<footer
			className="bg-black text-white flex flex-col space-y-2 sm:space-x-0 p-2 sm:flex-row justify-evenly items-center container rounded-lg mx-auto m-2"
			id="me"
		>
			<img src="/tree_logo.png" alt="logo" className="h-10 w-auto" />
			<a href="https://github.com/tholkappiar" className="!m-0">
				{" "}
				❤️ by Tholkappiar
			</a>
			<p className="font-semibold text-sm !m-0">© 2024 | All Rights Reserved</p>
		</footer>
	);
};

export default Footer;
