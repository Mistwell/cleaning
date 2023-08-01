export default function Logo({ isWhite = false }: { isWhite?: boolean }) {
	return (
		<>
			<svg
				width="227"
				height="79"
				viewBox="0 0 227 79"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				className
				<circle
					cx="37"
					cy="42"
					r="36.5"
					className={`${isWhite ? "stroke-white" : "stroke-green"}`}
				/>
				<path
					d="M60.551 59.8889C60.5522 61.4769 60.2105 63.043 59.5535 64.4611C58.8965 65.8791 57.9426 67.1095 56.7685 68.0531C55.5944 68.9966 54.233 69.6271 52.794 69.8936C51.355 70.1601 49.8786 70.0552 48.4837 69.5873C47.0887 69.1195 45.8143 68.3018 44.763 67.2001C43.7117 66.0984 42.913 64.7436 42.4311 63.2446C41.9492 61.7456 41.7976 60.1445 41.9886 58.5702C42.1796 56.9958 42.7078 55.4923 43.5307 54.1807L38.5768 49.056C37.6903 49.8056 36.6607 50.3295 35.5635 50.5891C34.4664 50.8488 33.3297 50.8375 32.2371 50.5562C31.1445 50.275 30.1238 49.7308 29.25 48.9638C28.3762 48.1968 27.6715 47.2264 27.1879 46.1241L21.2874 48.951C21.6404 50.67 21.3878 52.4705 20.5796 53.9967C19.7713 55.5229 18.4661 56.6638 16.9221 57.1937C15.378 57.7237 13.7073 57.6043 12.2403 56.859C10.7733 56.1137 9.61658 54.7969 8.99887 53.1687C8.38116 51.5406 8.34737 49.7196 8.90418 48.0656C9.46098 46.4116 10.5679 45.0451 12.0061 44.236C13.4443 43.427 15.1091 43.2343 16.6716 43.696C18.2341 44.1578 19.5805 45.2404 20.4447 46.7299L26.5846 44.2826C26.3372 43.0772 26.3424 41.8266 26.5999 40.6236C26.8574 39.4207 27.3607 38.2963 28.0722 37.3338C28.7838 36.3714 29.6855 35.5956 30.7104 35.064C31.7352 34.5325 32.8569 34.2588 33.9923 34.2634C34.7806 34.2746 35.5624 34.4211 36.3087 34.6975L39.4121 28.2987C38.2574 27.5954 37.3896 26.4436 36.9822 25.0739C36.5749 23.7043 36.6582 22.2177 37.2153 20.912C37.7725 19.6062 38.7624 18.5776 39.987 18.032C41.2116 17.4864 42.5804 17.4641 43.8194 17.9695C45.0585 18.475 46.0763 19.4709 46.6692 20.758C47.262 22.045 47.3861 23.5281 47.0167 24.9105C46.6472 26.2928 45.8115 27.4723 44.6767 28.2129C43.542 28.9535 42.1919 29.2005 40.8969 28.9044L38.278 35.7192C39.1188 36.3418 39.835 37.143 40.3836 38.0747C40.9322 39.0063 41.3019 40.0491 41.4703 41.1403C41.6386 42.2314 41.6023 43.3484 41.3634 44.4239C41.1245 45.4993 40.688 46.5111 40.0802 47.3982L45.3719 52.0585C46.7323 50.8401 48.3833 50.0682 50.132 49.833C51.8808 49.5979 53.6549 49.9091 55.247 50.7304C56.8391 51.5518 58.1834 52.8492 59.1226 54.471C60.0619 56.0928 60.5573 57.9721 60.551 59.8889Z"
					className={`${isWhite ? "fill-white" : "fill-green"}`}
				/>
				<path
					d="M93.45 23.88V20.79H104.28V23.88H93.45ZM96.18 11.7C97.72 11.7 99.14 11.97 100.44 12.51C101.74 13.03 102.87 13.78 103.83 14.76C104.81 15.72 105.56 16.86 106.08 18.18C106.62 19.5 106.89 20.94 106.89 22.5C106.89 24.06 106.62 25.5 106.08 26.82C105.56 28.14 104.81 29.29 103.83 30.27C102.87 31.23 101.74 31.98 100.44 32.52C99.14 33.04 97.72 33.3 96.18 33.3C94.4 33.3 92.78 33 91.32 32.4C89.88 31.8 88.68 30.93 87.72 29.79L90.18 27.39C90.96 28.23 91.83 28.86 92.79 29.28C93.77 29.68 94.83 29.88 95.97 29.88C96.97 29.88 97.9 29.7 98.76 29.34C99.62 28.96 100.36 28.45 100.98 27.81C101.6 27.15 102.08 26.37 102.42 25.47C102.76 24.57 102.93 23.58 102.93 22.5C102.93 21.42 102.76 20.43 102.42 19.53C102.08 18.63 101.6 17.86 100.98 17.22C100.36 16.56 99.62 16.05 98.76 15.69C97.9 15.31 96.97 15.12 95.97 15.12C94.83 15.12 93.77 15.33 92.79 15.75C91.83 16.15 90.96 16.77 90.18 17.61L87.72 15.21C88.68 14.07 89.88 13.2 91.32 12.6C92.78 12 94.4 11.7 96.18 11.7ZM122.309 33L116.519 25.32L119.579 23.43L126.719 33H122.309ZM110.819 33V16.98H114.569V33H110.819ZM113.459 26.58V23.46H118.889V26.58H113.459ZM119.939 25.44L116.429 25.02L122.309 16.98H126.329L119.939 25.44ZM136.126 33.21C134.446 33.21 132.946 32.86 131.626 32.16C130.326 31.44 129.306 30.46 128.566 29.22C127.826 27.98 127.456 26.57 127.456 24.99C127.456 23.39 127.826 21.98 128.566 20.76C129.306 19.52 130.326 18.55 131.626 17.85C132.946 17.15 134.446 16.8 136.126 16.8C137.686 16.8 139.056 17.12 140.236 17.76C141.436 18.38 142.346 19.3 142.966 20.52L140.086 22.2C139.606 21.44 139.016 20.88 138.316 20.52C137.636 20.16 136.896 19.98 136.096 19.98C135.176 19.98 134.346 20.18 133.606 20.58C132.866 20.98 132.286 21.56 131.866 22.32C131.446 23.06 131.236 23.95 131.236 24.99C131.236 26.03 131.446 26.93 131.866 27.69C132.286 28.43 132.866 29 133.606 29.4C134.346 29.8 135.176 30 136.096 30C136.896 30 137.636 29.82 138.316 29.46C139.016 29.1 139.606 28.54 140.086 27.78L142.966 29.46C142.346 30.66 141.436 31.59 140.236 32.25C139.056 32.89 137.686 33.21 136.126 33.21ZM146.268 33V16.98H161.628V33H157.908V19.29L158.778 20.16H149.148L150.018 19.29V33H146.268ZM174.158 33.21C172.378 33.21 170.818 32.86 169.478 32.16C168.158 31.44 167.128 30.46 166.388 29.22C165.668 27.98 165.308 26.57 165.308 24.99C165.308 23.39 165.658 21.98 166.358 20.76C167.078 19.52 168.058 18.55 169.298 17.85C170.558 17.15 171.988 16.8 173.588 16.8C175.148 16.8 176.538 17.14 177.758 17.82C178.978 18.5 179.938 19.46 180.638 20.7C181.338 21.94 181.688 23.4 181.688 25.08C181.688 25.24 181.678 25.42 181.658 25.62C181.658 25.82 181.648 26.01 181.628 26.19H168.278V23.7H179.648L178.178 24.48C178.198 23.56 178.008 22.75 177.608 22.05C177.208 21.35 176.658 20.8 175.958 20.4C175.278 20 174.488 19.8 173.588 19.8C172.668 19.8 171.858 20 171.158 20.4C170.478 20.8 169.938 21.36 169.538 22.08C169.158 22.78 168.968 23.61 168.968 24.57V25.17C168.968 26.13 169.188 26.98 169.628 27.72C170.068 28.46 170.688 29.03 171.488 29.43C172.288 29.83 173.208 30.03 174.248 30.03C175.148 30.03 175.958 29.89 176.678 29.61C177.398 29.33 178.038 28.89 178.598 28.29L180.608 30.6C179.888 31.44 178.978 32.09 177.878 32.55C176.798 32.99 175.558 33.21 174.158 33.21ZM194.67 33.21C193.37 33.21 192.18 32.91 191.1 32.31C190.04 31.71 189.19 30.81 188.55 29.61C187.93 28.39 187.62 26.85 187.62 24.99C187.62 23.11 187.92 21.57 188.52 20.37C189.14 19.17 189.98 18.28 191.04 17.7C192.1 17.1 193.31 16.8 194.67 16.8C196.25 16.8 197.64 17.14 198.84 17.82C200.06 18.5 201.02 19.45 201.72 20.67C202.44 21.89 202.8 23.33 202.8 24.99C202.8 26.65 202.44 28.1 201.72 29.34C201.02 30.56 200.06 31.51 198.84 32.19C197.64 32.87 196.25 33.21 194.67 33.21ZM185.79 38.82V16.98H189.36V20.76L189.24 25.02L189.54 29.28V38.82H185.79ZM194.25 30C195.15 30 195.95 29.8 196.65 29.4C197.37 29 197.94 28.42 198.36 27.66C198.78 26.9 198.99 26.01 198.99 24.99C198.99 23.95 198.78 23.06 198.36 22.32C197.94 21.56 197.37 20.98 196.65 20.58C195.95 20.18 195.15 19.98 194.25 19.98C193.35 19.98 192.54 20.18 191.82 20.58C191.1 20.98 190.53 21.56 190.11 22.32C189.69 23.06 189.48 23.95 189.48 24.99C189.48 26.01 189.69 26.9 190.11 27.66C190.53 28.42 191.1 29 191.82 29.4C192.54 29.8 193.35 30 194.25 30ZM209.276 33V19.26L210.146 20.16H203.636V16.98H218.636V20.16H212.156L213.026 19.26V33H209.276ZM103.05 63.84C101.95 64.3 100.88 64.64 99.84 64.86C98.8 65.08 97.79 65.19 96.81 65.19C94.13 65.19 92.06 64.55 90.6 63.27C89.16 61.97 88.44 60.11 88.44 57.69V51H92.31V57.27C92.31 58.75 92.74 59.88 93.6 60.66C94.46 61.44 95.69 61.83 97.29 61.83C98.25 61.83 99.21 61.72 100.17 61.5C101.15 61.28 102.09 60.94 102.99 60.48L103.05 63.84ZM102.45 72V51H106.32V72H102.45ZM111.786 72V55.98H115.536V66.54L124.386 55.98H127.806V72H124.056V61.44L115.236 72H111.786ZM140.14 72.21C138.46 72.21 136.96 71.86 135.64 71.16C134.34 70.44 133.32 69.46 132.58 68.22C131.84 66.98 131.47 65.57 131.47 63.99C131.47 62.39 131.84 60.98 132.58 59.76C133.32 58.52 134.34 57.55 135.64 56.85C136.96 56.15 138.46 55.8 140.14 55.8C141.7 55.8 143.07 56.12 144.25 56.76C145.45 57.38 146.36 58.3 146.98 59.52L144.1 61.2C143.62 60.44 143.03 59.88 142.33 59.52C141.65 59.16 140.91 58.98 140.11 58.98C139.19 58.98 138.36 59.18 137.62 59.58C136.88 59.98 136.3 60.56 135.88 61.32C135.46 62.06 135.25 62.95 135.25 63.99C135.25 65.03 135.46 65.93 135.88 66.69C136.3 67.43 136.88 68 137.62 68.4C138.36 68.8 139.19 69 140.11 69C140.91 69 141.65 68.82 142.33 68.46C143.03 68.1 143.62 67.54 144.1 66.78L146.98 68.46C146.36 69.66 145.45 70.59 144.25 71.25C143.07 71.89 141.7 72.21 140.14 72.21ZM153.495 72V58.26L154.365 59.16H147.855V55.98H162.855V59.16H156.375L157.245 58.26V72H153.495ZM172.012 72.21C170.372 72.21 168.912 71.86 167.632 71.16C166.352 70.44 165.342 69.46 164.602 68.22C163.862 66.98 163.492 65.57 163.492 63.99C163.492 62.39 163.862 60.98 164.602 59.76C165.342 58.52 166.352 57.55 167.632 56.85C168.912 56.15 170.372 55.8 172.012 55.8C173.672 55.8 175.142 56.15 176.422 56.85C177.722 57.55 178.732 58.51 179.452 59.73C180.192 60.95 180.562 62.37 180.562 63.99C180.562 65.57 180.192 66.98 179.452 68.22C178.732 69.46 177.722 70.44 176.422 71.16C175.142 71.86 173.672 72.21 172.012 72.21ZM172.012 69C172.932 69 173.752 68.8 174.472 68.4C175.192 68 175.752 67.42 176.152 66.66C176.572 65.9 176.782 65.01 176.782 63.99C176.782 62.95 176.572 62.06 176.152 61.32C175.752 60.56 175.192 59.98 174.472 59.58C173.752 59.18 172.942 58.98 172.042 58.98C171.122 58.98 170.302 59.18 169.582 59.58C168.882 59.98 168.322 60.56 167.902 61.32C167.482 62.06 167.272 62.95 167.272 63.99C167.272 65.01 167.482 65.9 167.902 66.66C168.322 67.42 168.882 68 169.582 68.4C170.302 68.8 171.112 69 172.012 69ZM187.01 72V58.26L187.88 59.16H181.37V55.98H196.37V59.16H189.89L190.76 58.26V72H187.01ZM215.26 72V55.98H219.01V72H215.26ZM206.89 61.26C208.95 61.26 210.51 61.72 211.57 62.64C212.65 63.56 213.19 64.86 213.19 66.54C213.19 68.28 212.59 69.64 211.39 70.62C210.21 71.58 208.53 72.05 206.35 72.03L199.09 72V55.98H202.84V61.23L206.89 61.26ZM206.02 69.27C207.12 69.29 207.96 69.06 208.54 68.58C209.12 68.1 209.41 67.4 209.41 66.48C209.41 65.56 209.12 64.9 208.54 64.5C207.98 64.08 207.14 63.86 206.02 63.84L202.84 63.81V69.24L206.02 69.27Z"
					className={`${isWhite ? "fill-white" : "fill-green"}`}
				/>
			</svg>
		</>
	);
}
