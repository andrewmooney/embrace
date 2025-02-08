// Define an interface for the service data
export interface Service {
	title: string;
	description: string;
	items: Array<string>;
	image?: string;
}

const services: Service[] = [
	{
		title: 'INDIVIDUAL PSYCHOLOGY',
		description:
			'We offer individualised therapy tailored to a young person’s individual needs and goals. Our experienced and compassionate team of professional psychologists are trained in a variety of evidence based approaches/ various models of therapy including',
		items: [
			'Cognitive Behavioural Therapy (CBT).',
			'Acceptance and Commitment Therapy (ACT).',
			'Solution Focussed Brief Therapy (SFBT).',
			'Narrative therapy.',
			'Play therapy.',
			'Eye Movement Desensitisation and Reprogramming (EMDR).',
		],
		image: 'https://via.placeholder.com/150',
	},
	{
		title: 'GROUPS',
		description:
			'We offer some group programs which may be suitable to the needs of both children and adults. Our passionate team of trained therapists are specifically trained in the delivery of each of these evidence based group programs. To find out  more information about each group  please contact us',
		items: [
			'Sib works - a program to support siblings',
			'Circle of security – to help parents support and strengthen their relationship with their children.',
			'1,2,3 Magic parenting program. - a parenting program.',
			'Give us a break! – for young people experiencing bereavement, loss or change.',
			'Social connection - various themes to connect with others with similar interests',
		],
		image: 'https://via.placeholder.com/150',
	},
	{
		title: 'ASSESSMENT',
		description:
			'In addition, we will soon be offering a wide range of assessments to provide information on a young person’s abilities, strengths and challenges. Full reports can be provided on completion of assessments. Assessments will include',
		items: [
			'Attention Deficit Hyperactivity Disorder (ADHD).',
			'Autism assessment including ADOS or Migdas.',
			'Specific Learning Disorders (SLD) – including dyslexia, dyscalculia, dysgraphia, and intellectual disability.Cognitive assessment.​',
		],
		image: 'https://via.placeholder.com/150',
	},
];

export default services;
