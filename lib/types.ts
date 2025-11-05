export interface Job {
	id: string;
	title: string;
	company: string;
	location: string;
	type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
	date: string; // e.g. "May 2023 - Present" or ISO "2025-11-05"
	description: string;
	requirements: string[]; // list of required skills or experience
	responsibilities: string[]; // list of main duties
	skills: string[]; // list of key skills or tech stack
	experienceLevel: "Junior" | "Mid" | "Senior" | "Lead";
	salaryRange?: string; // e.g. "$90,000 - $120,000 / year"
	applyLink: string;
	remote: boolean;
	benefits?: string[]; // optional, e.g. ["Health insurance", "401k"]
	companyWebsite?: string;
	logo: string;
}
