import JobsList from "@/components/jobs-list";

export default function Layout({ children,}: Readonly<{ children: React.ReactNode; }>){
	return (
		<div>
			{children}
		</div>
	)
}