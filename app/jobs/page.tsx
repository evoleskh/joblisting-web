import JobsListing from "@/components/jobs-list";
import {Suspense} from "react";
import {Job} from "@/lib/types";
import JobDetails from "@/components/job-details";
import { Briefcase } from "lucide-react";
import SearchBox from "@/components/search";

export default async function Jobs({searchParams}: {
	searchParams: Promise<{ id: string, search: string }> }) {
	const { id, search } = await searchParams;
	console.log(search);
	const response = await fetch(`${process.env.API_URL}/jobs`)
	if (!response.ok) {
		throw new Error('Failed to fetch jobs');
	}
	const jobs: Job[] = await response.json();
	if (!jobs) {
		return <div>Error fetching jobs</div>;
	}
	const selectedJob = jobs.find(job => job.id === id);
	return (
		<div className="min-h-screen bg-background">
			<Suspense fallback={
				<div className="flex items-center justify-center min-h-screen">
					<div className="text-center space-y-4">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
						<p className="text-muted-foreground">Loading jobs...</p>
					</div>
				</div>
			}>	
				<SearchBox />
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen'>
					{/* Jobs List Panel */}
					<div className="border-r border-border bg-muted/30">
						<JobsListing jobs={jobs} />
					</div>
					
					{/* Job Details Panel */}
					<div className="bg-background">
						{!selectedJob ? (
							<div className="flex flex-col items-center justify-center h-screen p-8 text-center">
								<div className="rounded-full bg-muted p-6 mb-4">
									<Briefcase className="h-12 w-12 text-muted-foreground" />
								</div>
								<h2 className="text-2xl font-semibold mb-2">Select a job</h2>
								<p className="text-muted-foreground max-w-sm">
									Click on any job listing to view its details and apply
								</p>
							</div>
						) : (
							<JobDetails job={selectedJob} />
						)}
					</div>
				</div>
			</Suspense>
		</div>
	)
}

