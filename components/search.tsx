'use client'
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter();
    
    function submitHandler(){
        router.push(`/jobs?search=${search}`)
    }
    return (
        <div>
            <Input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
            <Button type="submit" variant="outline" onClick={submitHandler}>Search</Button>
            <h1>{search}</h1>
        </div>
    )
}