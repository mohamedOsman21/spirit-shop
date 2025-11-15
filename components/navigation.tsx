import { SparklesIcon } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
    return(
        <header className=" container w-full flex justify-between py-4 items-center">
            <Link href={'/'} className="flex gap-4 text-magic-purple font-bold text-xl">
                <SparklesIcon />
                spirit shop
            </Link>

            <Link href={'/mystrey potion'} className="px-4 py-2
            rounded-lg bg-secondary text-foreground
            hover:bg-secondary/80 transition-colors">
                mystery potion 🔥
            </Link>
        </header>
    )
}