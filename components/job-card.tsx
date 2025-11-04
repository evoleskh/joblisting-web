'use client'
import {Job} from '@/lib/types'
import {Card, CardHeader, CardAction, CardContent, CardTitle, CardDescription, CardFooter} from './ui/card'
import Link from "next/link";

interface JobCardProps {
	job: Job;
	onJobSelected?: (job: Job) => void;
}
export default function JobCard({job, onJobSelected}: JobCardProps) {
	return (
		<Card className="w-full max-w-md bg-gray-200 hover:cursor-pointer">
			<div onClick={() => onJobSelected?.(job)}>
				<CardHeader>
					<CardTitle>{job.title}</CardTitle>
					<CardDescription>{job.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<p><strong>Company:</strong> {job.company}</p>
					<p><strong>Location:</strong> {job.location}</p>
					<p><strong>Type:</strong> {job.type}</p>
				</CardContent>
				<CardFooter>
					<p><strong>Date:</strong> {job.date}</p>
				</CardFooter>
			</div>
		</Card>
	)
}