import { FC } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import BeatLoader from 'react-spinners/BeatLoader';
interface Props {
	dark: boolean | null;
	size: number;
	where: string;
}

const Loading: FC<Props> = ({ dark, size, where }) => {
	return (
		<>
			{where === 'home' && (
				<HashLoader
					color={dark && dark === true ? '#ffffff' : '#4a113f'}
					size={size}
				/>
			)}
			{where === 'contact' && (
				<BeatLoader
					color={dark && dark === true ? '#ffffff' : '#4a113f'}
					size={size}
				/>
			)}
		</>
	);
};
/*#746b6b */

export default Loading;
