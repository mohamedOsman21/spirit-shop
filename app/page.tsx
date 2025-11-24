
import {fetchingRepos} from "@/lib/github";
import PotionGrid from "@/components/potion/potion-grid";
import PotionTypesBar from "@/components/potion/potion-types";
import { PotionType } from "@/types/github";

type TypeParams = {
  searchParams: Promise <{
    type: string;
  }>;
}
export default async function Home({searchParams}: TypeParams) {

  const potions = await fetchingRepos();
  const {type} = await searchParams;

  const filteredPotions = type ? potions.filter((potion: PotionType) => potion.magicalPotions === type) : potions;

  return (
    <main className=" container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1
          className="text-4xl md:text-5xl  font-bold mb-4 text-transparent
        bg-clip-text bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink"
        >
          open source spirit shop
        </h1>
        <p className="text-lg text-foreground/80">
          discover magical potions brewed from the powers of popular open-source
          tools
        </p>
      </div>

      <div className="flex justify-center items-center mb-12">
        <PotionTypesBar />
      </div>

      <div>
        <PotionGrid potion={filteredPotions}/>
      </div>
    </main>
  );
}
