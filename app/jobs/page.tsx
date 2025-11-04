
import JobsListing from "@/components/jobs-list";
import {getJobs} from "@/lib/api";
import {Suspense} from "react";


export default async function Jobs() {
	const jobs = await getJobs();
	if (!jobs) {
		return <div>Error fetching jobs</div>;
	}
	return (
		<div>
			<Suspense fallback={<h1>Loading...</h1>}>
				<JobsListing jobs={jobs} />
			</Suspense>
		</div>
	)
}


