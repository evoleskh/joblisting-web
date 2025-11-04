import { Job } from '@/lib/types'
// mock data for job list

export const jobs: Job[] = [
	{
		id: '1',
		title: 'Software Engineer',
		company: 'Google',
		location: 'Mountain View, CA',
		type: 'Full-time',
		date: 'May 2023 - Present',
		description: 'Work on the Google Maps platform.',
		applyLink: 'https://google.com',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png'
	},
	{
		id: '2',
		title: 'Frontend Developer',
		company: 'Facebook',
		location: 'Menlo Park, CA',
		type: 'Full-time',
		date: 'May 2022 - May 2023',
		description: 'Work on the Facebook platform.',
		applyLink: 'https://facebook.com',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
	},
	{
		id: '3',
		title: 'Backend Developer',
		company: 'Amazon',
		location: 'Seattle, WA',
		type: 'Full-time',
		date: 'May 2021 - May 2022',
		description: 'Work on the Amazon platform.',
		applyLink: 'https://amazon.com',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
	},
	{
		id: '4',
		title: 'Data Scientist',
		company: 'Microsoft',
		location: 'Redmond, WA',
		type: 'Full-time',
		date: 'May 2020 - May 2021',
		description: 'Work on the Microsoft platform.',
		applyLink: 'https://microsoft.com',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
	}
]