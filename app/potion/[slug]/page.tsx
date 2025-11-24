
import PotionInfo from "@/components/potion/potion-info";
import { fetchingRepo } from "@/lib/github";
import { PotionType } from "@/types/github";
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

  const potion = (await fetchingRepo(owner, repo)) as PotionType;


  return (<PotionInfo potion={potion} />);
};

export default PotionPage;
