import lindsayImage from '../../assets/images/Lindsay-resized-Resize.jpg';
import yanImage from '../../assets/images/yan-resized.jpg';

// Define a TypeScript interface for the team member
interface TeamMember {
	id: number;
	tag: string;
	name: string;
	summary: string;
	image: string;
}

// Example team members data
export const teamMembers: TeamMember[] = [
	{
		id: 1,
		name: 'Lindsay Mooney',
		tag: 'Co founder | Educational and Developmental Psychologist',
		summary: `I am an educational and developmental psychologist and co-founder of Embrace Allied Health. I trained as an educational psychologist in Scotland and have worked in the paediatric field for 15 years.  I enjoy working with children and teens and love helping young people to achieve positive mental health and reach their goals. I have extensive experience working with neurodiverse young people, supporting children with anxiety, low mood and social differences on their journey of discovery.  

I incorporate a range of therapeutic techniques in my practice and adopt a strengths-based approach in the work I undertake with families to support their needs. I am flexible in the models I use and adapt my approach to meet the learning styles of my families. I am so thankful that families allow me to support them through their personal journeys and love seeing the parents and children grow and develop together. Over the years, I have witnessed the benefits of working as part of a multidisciplinary team and have been inspired to start my own practice to ensure this is available to many more families in the future.`,
		image: lindsayImage,
	},
	{
		id: 2,
		name: 'Yan Lam Ng',
		tag: 'Co founder | Educational and Developmental Psychologist',
		summary: `I am an educational and developmental psychologist, and another co-founder of Embrace Allied Health. I have experience working across schools and private practices since 2018. I am experienced in working with young people and their families from neurodiverse, culturally and linguistically diverse (CALD) and trauma backgrounds. Being an immigrant myself, I understand the challenges of being ‘different’. I believe that our greatest weakness can sometimes be our biggest strength, and I would like to support people to discover their inner power. I am passionate in supporting young people and their family through their life journey. 

I work in a collaborative and eclectic approach. I believe that every person can be their own expert and there is no ‘one-size-fit-all’ therapy. In sessions, I draw on evidence-based therapeutic techniques to help people maximize their well-being. I value honest feedback and am willing to adjust when an approach is not working. I am also able to offer a range of parenting programmes.In addition to English, I speak fluent Cantonese and Mandarin (歡迎使用廣東話及國語溝通)`,
		image: yanImage,
	},
	// Add more team members as needed
];
