export interface DataContextType {
	user: UserDataType | null;
	portfolios: ProjectsDataType[];
	isLoading: boolean;
	getAllData: () => Promise<void>;
}

export interface UserDataType {
	name: String;
	img: string;
	coverPhoto: string;
	description: string;
	createdAt: Date;
}

export interface ProjectsDataType {
	_id: string;
	videoPreview: string;
	youtubeEmbad: string;
	thumbnail: string;
	title: string;
	description: string;
	technology: {
		frontend: [string];
		backend: [string];
	};
	resource: {
		youtube: string;
		github: string;
	};
	createdAt: Date;
}
