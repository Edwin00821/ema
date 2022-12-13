import { Box } from '@mui/material';
import { useEffect, useRef, useCallback, FC } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Button } from './';

interface Props {
	controls?: boolean;
	autoplay?: boolean;
	velocity?: number;
	interval?: number;
	children: React.ReactNode;
}
const Slider: FC<Props> = ({
	controls = false,
	autoplay = false,
	velocity = 500,
	interval = 5000,
	children,
}) => {
	const slideShow = useRef<HTMLDivElement>(null);
	const intervallideshow = useRef<any>(null);

	const next = useCallback(() => {
		if (slideShow.current) {
			const slideChildren = slideShow.current
				.children as HTMLCollectionOf<HTMLElement>;
			const slideStyle = slideShow.current.style;

			if (slideChildren.length > 0) {
				const firstChildren = slideChildren[0];
				slideStyle.transition = `${velocity}ms ease-out all`;
				const widthSlide = slideChildren[0].offsetWidth;

				slideStyle.transform = `translateX(-${widthSlide}px)`;

				const transicion = (): void => {
					if (slideShow.current) {
						slideStyle.transition = 'none';
						slideStyle.transform = `translateX(0)`;
						slideShow.current.appendChild(firstChildren);
						slideShow.current.removeEventListener('transitionend', transicion);
					}
				};
				slideShow.current.addEventListener('transitionend', transicion);
			}
		}
	}, [velocity]);

	const previous = (): void => {
		if (slideShow.current) {
			const slideChildren = slideShow?.current
				.children as HTMLCollectionOf<HTMLElement>;

			if (slideChildren.length > 0) {
				const index = slideChildren.length - 1;
				const lastElement = slideChildren[index];
				slideShow?.current.insertBefore(
					lastElement,
					slideShow?.current.firstChild
				);

				slideShow.current.style.transition = 'none';

				const widthSlide = slideChildren[0].offsetWidth;

				slideShow.current.style.transform = `translateX(-${widthSlide}px)`;

				setTimeout(() => {
					if (slideShow.current) {
						slideShow.current.style.transition = `${velocity}ms ease-out all`;
						slideShow.current.style.transform = `translateX(0)`;
					}
				}, 30);
			}
		}
	};

	useEffect(() => {
		if (autoplay) {
			intervallideshow.current = setInterval(() => {
				next();
			}, interval);

			// Eliminamos los intervalos
			if (slideShow.current) {
				slideShow.current.addEventListener('mouseenter', () => {
					clearInterval(intervallideshow.current);
				});
				slideShow.current.addEventListener('mouseleave', () => {
					intervallideshow.current = setInterval(() => {
						next();
					}, interval);
				});
			}
		}
	}, [autoplay, interval, next]);

	return (
		<Box className='relative overflow-hidden'>
			<Box className=' lex-nowrap flex h-full w-full' ref={slideShow}>
				{children}
			</Box>
			{controls && (
				<Box className='pointer-events-none absolute top-0 z-20 h-full w-full'>
					<Button>
						<AiOutlineArrowLeft
							className='h-full w-full fill-current font-bold dark:text-white'
							onClick={previous}
						/>
					</Button>
					<Button right>
						<AiOutlineArrowRight
							className='h-full w-full fill-current font-bold dark:text-white'
							onClick={next}
						/>
					</Button>
				</Box>
			)}
		</Box>
	);
};

export default Slider;
