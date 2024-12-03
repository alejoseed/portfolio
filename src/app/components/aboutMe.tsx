import Image from "next/image";

export default function AboutMe() {
	return (
		<div
			className="grid text-center self-center mx-auto
                    w-3/4"
		>
			<h1>Alejandro Palmar</h1>
			<h2>Software Developer</h2>
			<p>
				Hey there, my name is Alejandro Palmar. I'm a Software Developer based in Orlando,
				Florida, I am passionate about DevOps and Backend Development, and I currently work
				as a Full Stack Developer. I love working out and cooking, driving and fixing
				electronics.
			</p>

			<p>Socials:</p>
			<ul className="flex gap-4 mx-auto">
				<li>Twitter</li>
				<li>GitHub</li>
				<li>LinkedIn</li>
			</ul>
		</div>
	);
}
