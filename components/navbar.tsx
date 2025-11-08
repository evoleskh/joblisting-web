"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className="mr-6 flex items-center space-x-2 text-lg font-bold transition-colors hover:text-primary"
      >
        <BriefcaseBusiness className="h-6 w-6" />
        <span>Jobify</span>
      </Link>
      <Link
        href="/jobs"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/jobs" ? "text-primary" : "text-muted-foreground"
        )}
      >
        Jobs
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "text-primary" : "text-muted-foreground"
        )}
      >
        About
      </Link>
    </nav>
  );
}

export function AuthNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4">
      <Link href="/login" passHref>
        <Button
          variant={pathname === "/login" ? "secondary" : "ghost"}
          className="text-sm font-medium"
        >
          Login
        </Button>
      </Link>
    </nav>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <MainNav />
        <AuthNav />
      </div>
    </header>
  );
}
