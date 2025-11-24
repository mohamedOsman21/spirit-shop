import { cn } from "@/lib/utils";
import { getTypesColor } from "@/utils";
import { MAGICAL_TYPES } from "@/utils/constants";
import Link from "next/link";

export default function PotionTypesBar ()  {

    return (
        <div className="flex gap-8">
            {MAGICAL_TYPES.map(({id, label, icon})=> {
                return (
                    <Link href={id === "all" ? "/" : `?type=${id}`} key={id} className={cn(`filter-pill flex items-center gap-2 
                    bg-gradient-to-br `, getTypesColor(id))} >
                        <span>{icon}</span>
                        {label}
                    </Link>
                )
            })}
        </div>
    )
}