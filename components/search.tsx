'use client';

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react"; // optional: nice icon

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    if (search.trim() === "") return; // Optional: don't search empty
    router.push(`/jobs?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <div className="w-screen">
      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center gap-4 w-full max-w-[1000px] mx-auto py-8 px-4"
      >
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search jobs by title, company, or keyword..."
          className="flex-1"
          autoFocus // Optional: focus on load
        />
        <Button type="submit" variant="default" className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </form>
    </div>
  );
}