'use client'
import {Job} from '@/lib/types'
import {Card, CardHeader, CardAction, CardContent, CardTitle, CardDescription, CardFooter} from './ui/card'
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {Building2, MapPin, Calendar, Briefcase} from "lucide-react";

interface JobCardProps {
	job: Job;
}
export default function JobCard({job}: JobCardProps) {
	const router = useRouter();
	const handleClick = () => {
		router.push(`/jobs?id=${job.id}`)
	}
	return (
		<Card className="hover:cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-primary/50" onClick={handleClick}>
			<CardHeader className="pb-3">
				<CardTitle className="text-xl font-bold">{job.title}</CardTitle>
				<CardDescription className="line-clamp-2 mt-1.5">{job.description}</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2.5">
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Building2 className="h-4 w-4 flex-shrink-0" />
					<span className="font-medium text-foreground">{job.company}</span>
				</div>
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<MapPin className="h-4 w-4 flex-shrink-0" />
					<span>{job.location}</span>
				</div>
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Briefcase className="h-4 w-4 flex-shrink-0" />
					<span className="capitalize">{job.type}</span>
				</div>
			</CardContent>
			<CardFooter className="pt-3 border-t">
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Calendar className="h-4 w-4 flex-shrink-0" />
					<span>{job.date}</span>
				</div>
			</CardFooter>
		</Card>
	)
}