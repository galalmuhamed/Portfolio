import { createContext, FC, useState } from 'react';
import { DataContextType, UserDataType, ProjectsDataType } from './types/types';
import { api } from './api/api';

interface Props {
	children: JSX.Element | null;
}

export const DataContext = createContext<DataContextType | null>(null);

const DataProvider: FC<Props> = ({ children }) => {
	const [user, setUser] = useState<UserDataType | null>(null);
	const [portfolios, setPortfolios] = useState<ProjectsDataType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const getAllData = async () => {
		try {
			const id = '62ec7e63a594f2be9c66616d';
			setIsLoading(true);
			return Promise.all([api.get(`/user/${id}`), api.get('/portfolio')]).then(
				([user, portfolios]) => {
					setUser(user.data.data);
					setPortfolios(portfolios.data.data);
					setIsLoading(false);
				}
			);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<DataContext.Provider value={{ user, portfolios, isLoading, getAllData }}>
			{children}
		</DataContext.Provider>
	);
};
export default DataProvider;
