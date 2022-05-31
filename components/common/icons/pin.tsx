import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
	size?: number;
	fill?: string;
};

export const Pin: FC<Props> = ({ size = 24, fill = theme.colors.black, ...rest }) => (
	<svg
		width="48px"
		height="63px"
		viewBox="0 0 48 63"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g id="UI-Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g
				id="1.1-Byrdi---Homepage---Mobile"
				transform="translate(-257.000000, -412.000000)"
			>
				<g id="Group-2-Copy-2" transform="translate(258.000000, 413.000000)">
					<path
						d="M9.8040776,12.6788677 C8.95275677,14.8472595 8.65760849,17.0994322 8.86216944,19.2775113 L8.17871071,56.5308512 L33.9359518,27.8610599 C35.141234,26.5664428 36.1285458,25.0295523 36.8140959,23.2819659 C39.741498,15.8252729 36.0689041,7.40449624 28.6128397,4.47730525 C21.1519179,1.54829274 12.7314797,5.22217481 9.8040776,12.6788677 Z"
						id="Stroke-7-Copy"
						stroke="#FFFFFF"
						strokeWidth="0.946282199"
						transform="translate(22.999885, 30.000247) rotate(-20.000000) translate(-22.999885, -30.000247) "
					></path>
					<ellipse
						id="Oval-Copy-2"
						fill="#D8D8D8"
						cx="19.0106297"
						cy="19.018012"
						rx="5.71381276"
						ry="5.71428571"
					></ellipse>
				</g>
			</g>
		</g>
	</svg>
);

export default Pin;
