//Dashboard SectionOne

//animate hi,im galal
export const animateTitle = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 2,
			when: 'beforeChildren',
		},
	},
};
export const animateChildrenTitle = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		type: 'spring',
		stiffness: 400,
	},
};
//animate List of Titles

export const animateListTitles = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 4,
		},
	},
};

export const animateChildrenListTitle = {
	hidden: {
		y: 50,
	},
	show: {
		y: [0, 0, -50, -50, -100, -100, -150, -150, -100, -100, -50, -50, 0, 0],

		transition: {
			type: 'tween',
			duration: 10,
			repeat: Infinity,
			delay: 6,
		},
	},
};
//contact info
export const ParentContact = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 1,
			when: 'beforeChildren',
			delay: 1,
		},
	},
};
export const AnimateChildContact1 = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 400,
		},
	},
};
export const AnimateChildContact2 = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 400,
		},
	},
};
export const AnimateChildContact3 = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 400,
		},
	},
};
//contact right Side

export const ChildRightAnimated = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween',
			duration: 1,
		},
	},
};
//about
export const ParentAbout = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			delay: 1,
			staggerChildren: 1,
		},
	},
};
export const LeftAboutAnimate = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			bounce: 0.5,
			duration: 1,
		},
	},
};
//Portfollio
export const ParentPortfolio = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			delay: 0.5,
			staggerChildren: 1,
		},
	},
};
export const ChildPortfolio = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	show: {
		opacity: 1,
		scale: [1, 1.1, 1.1, 1],

		transition: {
			type: 'spring',
			stiffness: 400,
			duration: 1,
		},
	},
};
//prtfolio page
export const ParentPortfolioPage = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 1,
			delay: 0.5,
		},
	},
};
export const VideoProfilePage = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 400,
			duration: 1,
		},
	},
};
export const SeconProfilePage = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 400,
			duration: 1,
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};
export const LeftToRightProfilePage = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 400,
			duration: 1,
		},
	},
};
export const bottomToTopProfilePage = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween',
			duration: 1,
		},
	},
};
//NotFound
export const ParentNotFound = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	show: {
		opacity: 1,
		scale: [1, 1.1, 1.1, 1],
		transition: {
			when: 'beforeChildren',
			delay: 1,
		},
	},
};
export const ChildNotFound = {
	hidden: {
		opacity: 1,
	},
	show: {
		opacity: 1,
		scale: [1, 1.1, 1.2, 1.2, 1.1, 1],
		rotate: [0, 35, -35, 35, -35, 0],
		transition: {
			type: 'spring',
			stiffness: 400,
			duration: 3,
			rebeat: 2,
			delay: 1,
		},
	},
};

export const Child2NotFound = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	show: {
		opacity: 1,
		scale: [1, 1.1, 1.1, 1],
		transition: {
			type: 'spring',
			stiffness: 400,

			duration: 1,
		},
	},
};
