'use client'
import {Job} from '@/lib/types'
import JobCard from "@/components/job-card";
import {useState} from "react";
import JobDetails from "@/components/job-details";
import Link from "next/link";

interface JobProps {
	jobs: Job[];
}
export default function JobsList({ jobs }: JobProps) {
	return (
		<div className='w-full h-screen overflow-y-auto'>
			<div className="p-6 space-y-4">
				<div className="mb-6">
					<h2 className="text-2xl font-bold tracking-tight">
						All Jobs
						<span className="ml-3 text-lg font-normal text-muted-foreground">
							({jobs.length} {jobs.length === 1 ? 'position' : 'positions'})
						</span>
					</h2>
				</div>
				<div className="space-y-4">
					{jobs.length > 0 ? (
						jobs.map((job) => (
							<JobCard key={job.id} job={job}/>
						))
					) : (
						<div className="flex flex-col items-center justify-center py-12 text-center">
							<p className="text-lg text-muted-foreground">No jobs found</p>
							<p className="text-sm text-muted-foreground mt-2">
								Try adjusting your search or filters
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
