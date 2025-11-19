import PotionInfo from "@/components/potion/potion-info";
import { Card, CardHeader } from "@/components/ui/card";
import { fetchingRepo, fetchingRepos } from "@/lib/github";
import { PotionType } from "@/types/github";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const popularRepos = [
    "facebook__react",
    "tailwindlabs__tailwindcss",
    "nodejs__node",
    "vercel__next.js",
    "typescript__TypeScript",
  ];

  return popularRepos.map((repo) => ({
    slug: repo,
  }));
}

const PotionPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const [owner, repo] = slug.split("__");

  if (!owner || !repo) {
    notFound();
  }

  const potion = await fetchingRepo(owner, repo);

  

  return (
    <main>
      <header className="mb-8">
        <h1 className="font-bold text-4xl text-magic-light-purple">
          potion details
        </h1>
        <p className="text-lg text-magic-light-purple/80">
          discover the magical properties of this enchanted brew
        </p>
      </header>
      <PotionInfo potion={potion} />
    </main>
    // <main className=" w-full h-screen ring">
    //   {/* header */}
    //   <header className="mb-8">
    //     <h1 className="font-bold text-4xl text-magic-light-purple">
    //       potion details
    //     </h1>
    //     <p className="text-lg text-magic-light-purple/80">
    //       discover the magical properties of this enchanted brew
    //     </p>
    //   </header>

    //   <div className="flex h-3/4 gap-5">
    //     {/* left section */}
    //     <div
    //       className={`potion-card h-full w-1/3 group cursor-pointer border rounded-2xl
    //         p-4 flex flex-col gap-4
    //       transition-all duration-300 potion-${magicalPotions}  `}
    //     >
    //       <header className="p-6 mb-0">
    //         <div className="flex items-center mb-2">
    //           <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-purple-500/20 mr-2">
    //             <Image
    //               src={avatar_url}
    //               fill
    //               alt={login}
    //               className="object-cover"
    //             />
    //           </div>
    //           <div>
    //             <h3 className="font-bold text-lg">{name}</h3>
    //             <p className="text-xs ">{login}</p>
    //           </div>
    //         </div>
    //       </header>
    //       {/* description cards */}
    //       <div>
    //         {/* effect */}
    //         <div>
    //           <h3>effect</h3>
    //           <p>
    //             {potionEffect}
    //           </p>
    //         </div>
    //         {/* github-status */}
    //         {/* language */}
    //         {/* last update */}
    //       </div>
    //     </div>

    //     {/* right section */}
    //     <section className="flex-1 ring">
    //       {/* top article */}
    //       <article></article>

    //       {/* bottom article */}
    //       <article></article>
    //     </section>
    //   </div>
    // </main>
  );
};

export default PotionPage;
