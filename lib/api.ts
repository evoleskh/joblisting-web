import { jobs } from "@/lib/mock-data";
import { Job } from "@/lib/types";

const DELAY = 1000;
export async function getJobs() : Promise<Job[]> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (jobs) {
				resolve(jobs);
			} else {
				reject(new Error('Jobs not found'));
			}
		}, DELAY);
	})
}

export async function getJobById(id: string) : Promise<Job> {
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			const job = jobs.find(job => job.id === id);
			if (job) {
				resolve(job);
			} else {
				reject(new Error('Job not found'));
			}
		}, DELAY)
	})
}