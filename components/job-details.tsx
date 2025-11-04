'use client'
import { Badge} from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {Job} from "@/lib/types";

export default function JobDetails({ job } : { job: Job}) {
	return (
		<div className="min-h-screen bg-gray-200">
			<div className="container mx-auto p-4">
				<div className="flex flex-col gap-4">
					<section>

						<h1 className="text-3xl font-bold">{job.company}</h1>
						<h2 className="text-2xl">{job.title}</h2>
						<p className="text-gray-600">{job.location}</p>
						<Badge variant="default">{job.type}</Badge>
						{/*<p className="text-gray-600">{job.salary}</p>*/}
					</section>
					<Separator />
					<section>
						<h2 className="text-2xl font-bold">Description</h2>
						<p className="text-gray-600">{job.description}</p>
						<Link href={job.applyLink} target="_blank" rel="noopener noreferrer">
							Apply Now
						</Link>
					</section>
				</div>
			</div>
		</div>
	)

}