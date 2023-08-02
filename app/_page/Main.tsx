import Image from "next/image";
import main from "@/public/img/bg.jpg";
import Link from "next/link";
import Button from "@/shared/components/Button";

export default function Main() {
	return (
		<>
			<div className="h-[800px] 4k:h-[1000px] w-full overflow-hidden relative flex items-center justify-center">
				<Image
					src={main}
					alt="bg"
					fill
					priority
					style={{ objectFit: "cover", objectPosition: "center center" }}
				/>
				<div className="px-12">
					<div className="rounded-[5px] bg-white bg-opacity-50 p-20 relative z-[2] translate-y-12 backdrop-blur-lg border-[2px] border-green">
						<h1 className="font-title font-semibold text-5xl text-black text-center">
							Клининг <span className="text-green">любой сложности</span>{" "}
							в&nbsp;Ижевске
						</h1>
						<div className="font-title font-medium text-2xl text-black mt-6 text-center">
							При заключении договора действует система скидок и&nbsp;акций
						</div>
						<div className="flex items-center justify-center gap-8 mt-10">
							<Link href="/">
								<Button isAlternative>Заказать уборку</Button>
							</Link>
							<Link href="/">
								<Button>Узнать больше</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
