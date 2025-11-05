'use client'
import { Badge} from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building2, MapPin, Calendar, Briefcase, ExternalLink, DollarSign, Gift } from "lucide-react";
import Link from "next/link";
import {Job} from "@/lib/types";
import Image from "next/image";

export default function JobDetails({ job }: { job: Job}) {
	return (
		<div className="bg-background sticky top-0 h-screen overflow-y-auto">
			<div className="p-8 space-y-6">
				{/* Company Header */}
				<section className="space-y-4">
					<div className="flex items-start gap-6">
						<Image
							src={job.logo}
							alt={job.company}
							width={80}
							height={80}
							className="object-cover rounded-lg border-2 border-border shadow-sm"
						/>
						<div className="flex-1 space-y-2">
							<h1 className="text-3xl font-bold tracking-tight">{job.title}</h1>
							<div className="flex items-center gap-2 text-lg text-muted-foreground">
								<Building2 className="h-5 w-5" />
								<span className="font-semibold text-foreground">{job.company}</span>
							</div>
						</div>
					</div>

					{/* Job Meta Info */}
					<div className="flex flex-wrap gap-4 pt-2">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin className="h-4 w-4" />
							<span>{job.location}</span>
						</div>
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Calendar className="h-4 w-4" />
							<span>{job.date}</span>
						</div>
						<div className="flex items-center gap-2">
							<Briefcase className="h-4 w-4 text-muted-foreground" />
							<Badge variant="secondary" className="font-medium">
								{job.type}
							</Badge>
						</div>
					</div>

					{/* Salary Range - Prominent placement */}
					{job.salaryRange && (
						<div className="flex items-center gap-2 pt-2">
							<DollarSign className="h-5 w-5 text-green-600 dark:text-green-500" />
							<span className="text-lg font-semibold text-foreground">
								{job.salaryRange}
							</span>
						</div>
					)}
				</section>

				<Separator className="my-6" />

				{/* Description Section */}
				<section className="space-y-4">
					<h2 className="text-2xl font-bold">Job Description</h2>
					<p className="text-muted-foreground leading-relaxed whitespace-pre-line">
						{job.description}
					</p>
				</section>

				<Separator className="my-6" />

				{/*Job Requirements*/}
				<section className="space-y-4">
					<h2 className="text-2xl font-bold">Requirements</h2>
					<ul className="list-disc list-inside space-y-2">
						{job.requirements.map((requirement, index) => (
							<li key={index} className="text-muted-foreground leading-relaxed">
								{requirement}
							</li>
						))}
					</ul>
				</section>

				<Separator className="my-6" />

				{/*Job Responsibilities*/}
				<section className="space-y-4">
					<h2 className="text-2xl font-bold">Responsibilities</h2>
					<ul className="list-disc list-inside space-y-2">
						{job.responsibilities.map((responsibility, index) => (
							<li key={index} className="text-muted-foreground leading-relaxed">
								{responsibility}
							</li>
						))}
					</ul>
				</section>

				<Separator className="my-6" />

				{/*Skills*/}
				<section className="space-y-4">
					<h2 className="text-2xl font-bold">Required Skills</h2>
					<div className="flex flex-wrap gap-2">
						{job.skills.map((skill, index) => (
							<Badge key={index} variant="secondary" className="font-medium">
								{skill}
							</Badge>
						))}
					</div>
				</section>

				{/* Benefits Section */}
				{job.benefits && job.benefits.length > 0 && (
					<>
						<Separator className="my-6" />
						<section className="space-y-4">
							<div className="flex items-center gap-2">
								<Gift className="h-6 w-6 text-primary" />
								<h2 className="text-2xl font-bold">Benefits & Perks</h2>
							</div>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								{job.benefits.map((benefit, index) => (
									<li key={index} className="flex items-start gap-2 text-muted-foreground">
										<span className="text-primary mt-1">✓</span>
										<span>{benefit}</span>
									</li>
								))}
							</ul>
						</section>
					</>
				)}

				<Separator className="my-6" />

				{/* Apply Button */}
				<section className="pt-4 pb-8">
					<Button asChild size="lg" className="w-full sm:w-auto">
						<Link 
							href={job.applyLink} 
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							Apply Now
							<ExternalLink className="h-4 w-4" />
						</Link>
					</Button>
				</section>
			</div>
		</div>
	)
}