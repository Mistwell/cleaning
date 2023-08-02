import AboutSlider from "./AboutSlider";

export default function About() {
	return (
		<>
			<div className="mt-32">
				<div className="page-container">
					<h2 className="h2">О нас говорят</h2>
					<div className="mt-16">
						<AboutSlider />
					</div>
				</div>
			</div>
		</>
	);
}
