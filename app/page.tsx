
import {fetchingRepos} from "@/lib/github";
import PotionGrid from "@/components/potion/potion-grid";

export default async function Home() {
  const potion = await fetchingRepos();
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

      <div>
        <PotionGrid potion={potion}/>
      </div>
    </main>
  );
}
