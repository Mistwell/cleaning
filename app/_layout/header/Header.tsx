import Button from "@/shared/components/Button";
import LogoLink from "./LogoLink";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
	return (
		<>
			<header className="w-full bg-white bg-opacity-80 fixed top-0 left-0 right-0 py-4 z-[100]">
				<div className="page-container">
					<div className="flex items-center justify-between">
						<LogoLink />
						<Menu />
						<Link href="/">
							<Button>Заказать уборку</Button>
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}
