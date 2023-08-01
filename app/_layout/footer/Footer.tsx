import Logo from "@/shared/icons/Logo";
import ContactForm from "./ContactForm";

export default function Footer() {
	return (
		<>
			<ContactForm />
			<footer className="w-full bg-black py-12">
				<div className="page-container text-white">
					<div className="flex items-start justify-between">
						<div className="react-svg max-w-[227px]">
							<Logo isWhite />
						</div>
						<div className="flex items-start justify-between gap-24">
							<div>
								<div className="font-bold text-[22px]">Телефон:</div>
								<ul className="text-xl mt-2">
									<li>+7 (3412) 56-12-89</li>
									<li>+7 (912) 856-12-89</li>
									<li>+7 (912) 453-66-99</li>
								</ul>
							</div>
							<div>
								<div className="font-bold text-[22px]">Электронная почта:</div>
								<ul className="text-xl mt-2">
									<li>pochta@mail.ru</li>
								</ul>
							</div>
							<div>
								<div className="font-bold text-[22px]">Адрес:</div>
								<ul className="text-xl mt-2">
									<li>
										г. Ижевск,
										<br /> Редукторный проезд, 13
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
