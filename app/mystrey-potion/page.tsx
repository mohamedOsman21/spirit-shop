
import PotionInfo from "@/components/potion/potion-info";
import { RandomRepo } from "@/lib/github";
import { PotionType } from "@/types/github";


export const generateMetadata = async () => {
  const potion = (await RandomRepo()) as PotionType;

  return {
    title: `Mystery Potion - ${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/mystrey-potion`,
    },
  };
};

const PotionPage = async () => {

  const potion = (await RandomRepo()) as PotionType;
  
  return (<PotionInfo potion={potion} />);
};

export default PotionPage;
