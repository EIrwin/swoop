import { Flex } from 'rebass/styled-components';
import { Circles } from '../common/circles';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { Background } from './background';
import { Foreground } from './foreground';

export const MAX_CONTAINER_WIDTH = 700;
export const MOBILE_HEADER_HEIGHT = 110;
export const CustomImage = styled('img')`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: 100%;
`;
const observeWidth = (ref, cb, maxWidth) => () => {
	if (ref.offsetWidth <= maxWidth || (ref.offsetWidth && !maxWidth)) {
		cb(ref.offsetWidth);
	}
};
export const useWidthObserver = (maxWidth?) => {
	const boxRef = useRef<HTMLDivElement>();
	const [width, setWidth] = useState(null);

	useEffect(() => {
		const box = boxRef?.current;
		if (box) {
			const observer = new ResizeObserver(observeWidth(box, setWidth, maxWidth));
			observer.observe(box);
		}
	}, [boxRef]);
	return [boxRef, width];
};

function arrayEquals(a, b) {
	return (
		Array.isArray(a) &&
		Array.isArray(b) &&
		a.length === b.length &&
		a.every((val, index) => val === b[index])
	);
}
type Container = {
	height?: string | any[];
	minHeight?: string | any[];
};
export const KeepPlayingHero = ({
	subtext = '',
	title = 'Keep Playing',
	subtitle = '',
	hasIcons = true,
	hasCircles = true,
	bgImage = '',
	titleMaxWidth = null,
	contentJustify = null,
	imgMaxWidth = null,
	mobileHeaderPadding = true,
	minHeight = ['95vh'],
	...rest
}) => {
	const IS_STRING = typeof minHeight === 'string';
	const IS_DEFAULT = IS_STRING ? false : arrayEquals(minHeight, ['95vh']);
	const CONTAINER_PROPS: Container = {};
	IS_DEFAULT
		? (CONTAINER_PROPS.height = minHeight)
		: (CONTAINER_PROPS.minHeight = minHeight);
	return (
		<Flex position="relative" {...rest}>
			<Flex position="relative" {...CONTAINER_PROPS} width="100%">
				<Flex position="relative" flexDirection={['column', 'column', 'row']}>
					{hasCircles && <Circles />}
					<Background
						headerPadding={mobileHeaderPadding}
						src={bgImage}
						maxWidth={imgMaxWidth}
						zIndex={1}
					/>
					<Foreground
						headerPadding={mobileHeaderPadding}
						subtext={subtext}
						title={title}
						subtitle={subtitle}
						hasIcons={hasIcons}
						zIndex={2}
						titleMaxWidth={titleMaxWidth}
						contentJustify={contentJustify}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};
