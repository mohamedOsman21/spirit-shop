import { PotionType } from "@/types/github";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import getMagicalIcon from "@/utils";
import { PackageIcon, SparkleIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { numberFormat } from "@/utils/constants";
import Link from "next/link";


type PotionCardProps = PotionType & {
  index: number
}

export const PotionCard = (
  {
    name,
    full_name,
    description,
    topics,
    owner: { login, avatar_url },
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
          <div className="flex items-center mb-2">
            <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-purple-500/20 mr-2">
              <Image
                src={avatar_url}
                fill
                alt={login}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-xs ">{login}</p>
            </div>
          </div>
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
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
              <p>{numberFormat(stargazers_count)}</p>
            </div>

            <div className="flex items-center gap-2">
              <PackageIcon className="w-3.5 h-3.5 text-blue-400" />
              <p>{numberFormat(forks_count)}</p>
            </div>
          </div>

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
