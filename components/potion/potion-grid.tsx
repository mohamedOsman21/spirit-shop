import { PotionType } from "@/types/github";
import {PotionCard} from "@/components/potion/potion-card";

interface potionProps {
  potion: PotionType[];
}

export default function PotionGrid({ potion }: potionProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {potion.map(
        (potion, index) => (
          <PotionCard {...potion} index={index} key={`${index}-${potion.name}`}/>
        )
      )}
    </div>
  );
}
