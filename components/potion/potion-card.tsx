import { PotionType } from "@/types/github";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import getMagicalIcon from "@/utils";
import { SparkleIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { PotionHeader, PotionStats } from '@/components/potion/potion-common';


type PotionCardProps = PotionType & {
  index: number
}

export const PotionCard = (
  {
    name,
    full_name,
    description,
    topics,
    owner,
    magicalPotions,
    forks_count,
    stargazers_count,
    potionEffect,
    index
  }: PotionCardProps,
) => {
  return (
    <Link href={`/potion/${full_name.replace('/', '__')}`}>
      <Card
        key={`${name}-${index}`}
        className={`potion-card relative group cursor-pointer 
          transition-all duration-300 h-full potion-${magicalPotions}`}
      >
        <div className="absolute right-4 top-4 z-10">
          {getMagicalIcon(magicalPotions)}
        </div>

        <CardHeader className="p-6 mb-0">
          <PotionHeader name={name} owner={owner} />
        </CardHeader>

        <CardContent className="p-6 pt-3">
          {/* description */}
          <p className="text-sm text-foreground/70 mt-3 mb-4 line-clamp-3 h-15 overflow-hidden text-ellipsis">
            {description}
          </p>

          {/* effects */}
          <p className="flex items-center mb-1 gap-1.5 text-magic-light-purple">
            <span>
              <SparkleIcon />
            </span>
            Effect: {potionEffect}
          </p>

          {/* repo numbers */}
          <PotionStats stargazersCount={stargazers_count} forksCount={forks_count}/>

          {/* badges */}
          <div className="flex items-center gap-2">
            {topics.map((topic, index) => (
              <Badge
                key={index}
                className="text-xs px-2 
                  py-1 bg-magic-purple/15 text-white/80 hover:bg-magic-purple/25"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
