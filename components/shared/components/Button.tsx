export default function Button({
	children,
	isAlternative = false,
}: {
	children: React.ReactNode;
	isAlternative?: boolean;
}) {
	return (
		<>
			<button
				className={`${
					isAlternative
						? "text-white bg-green  hover:bg-white hover:text-black"
						: "text-black bg-white  hover:bg-green hover:text-white"
				}  text-xl py-2 px-6 border-[2px] border-green duration-300 rounded-[5px]`}
			>
				{children}
			</button>
		</>
	);
}
