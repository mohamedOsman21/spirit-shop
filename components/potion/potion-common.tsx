import { cn } from "@/lib/utils";
import { numberFormat } from "@/utils/constants";
import { PackageIcon, StarIcon } from "lucide-react";
import Image from "next/image";

interface PotionHeaderProps {
  name: string;
  owner: { login: string; avatar_url: string };
  size?: "small" | "medium";
}

export const PotionHeader = ({
  name,
  owner: { login, avatar_url },
  size = "small",
}: PotionHeaderProps) => {
  return (
    <div
      className={cn("flex items-center", size === "medium" ? "mb-6" : "mb-2")}
    >
      <div
        className={cn(
          "rounded-full bg-secondary/50 flex items-center justify-center",
          size === "medium" ? "w-12 h-12 mr-4" : "w-10 h-10  mr-3 "
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-full ring-2 ring-purple-500/20",
            size === "medium" ? "h-12 w-12" : "h-10 w-10"
          )}
        >
          <Image src={avatar_url} fill className="object-cover" alt={login} />
        </div>
      </div>
      <div>
        <h3
          className={cn(
            "font-bold",
            size === "medium" ? "text-xl" : "text-base"
          )}
        >
          {name}
        </h3>
        <p className="text-muted-foreground text-sm">{login}</p>
      </div>
    </div>
  );
};

interface PotionInfoCardProps {
  title: string;
  children?: React.ReactNode;
}

export const PotionInfoCard = ({ title, children }: PotionInfoCardProps) => {
  return (
    <div className="p-4 rounded-lg bg-background/40 border border-magic-purple/10 ">
      <h4 className="mb-2 text-sm font-medium text-magic-light-purple">
        {title}
      </h4>
      {children}
    </div>
  );
};

interface PotionStatsProps {
  stargazersCount: number;
  forksCount: number;
}

export const PotionStats = ({
  stargazersCount,
  forksCount,
}: PotionStatsProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
        <p>{numberFormat(stargazersCount)}</p>
      </div>

      <div className="flex items-center gap-2">
        <PackageIcon className="w-3.5 h-3.5 text-blue-400" />
        <p>{numberFormat(forksCount)}</p>
      </div>
    </div>
  );
};
