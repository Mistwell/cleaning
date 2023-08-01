import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex flex-col w-full min-h-screen">
				<Header />
				<div className={"flex-grow"}>{children}</div>
				<Footer />
			</div>
		</>
	);
}
