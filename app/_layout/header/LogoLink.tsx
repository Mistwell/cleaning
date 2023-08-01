import Logo from "@/shared/icons/Logo";
import Link from "next/link";

export default function LogoLink() {
	return (
		<>
			<Link href="/" className="react-svg max-w-[227px]">
				<Logo />
			</Link>
		</>
	);
}
