'use client'
import {Job} from '@/lib/types'
import JobCard from "@/components/job-card";
import {useState} from "react";
import JobDetails from "@/components/job-details";

interface JobProps {
	jobs: Job[];
}
export default function JobsList({ jobs }: JobProps) {
	const [selectedJob, setSelectedJob] = useState<Job | null>(null);
	return (
		<div className='w-full'>
			<div className='grid grid-cols-2'>
				<div>
					{jobs.map((job) => (
						<div key={job.id}>
							<JobCard key={job.id} job={job}  onJobSelected={(job) => setSelectedJob(job)} />
						</div>
					))}
				</div>
				<div>
					{!selectedJob ? <h1>Select a job to view details</h1> : <JobDetails job={selectedJob} />}
				</div>
			</div>
		</div>
	)
}
