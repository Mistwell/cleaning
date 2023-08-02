import About from "./_page/About";
import Deals from "./_page/Deals";
import Main from "./_page/Main";
import Order from "./_page/Order";
import OurWork from "./_page/OurWork";
import Service from "./_page/Service";

export default function Home() {
	return (
		<div className="mb-32">
			<Main />
			<Service />
			<Deals />
			<OurWork />
			<Order />
			<About />
		</div>
	);
}
