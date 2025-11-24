
import PotionInfo from "@/components/potion/potion-info";
import { RandomRepo } from "@/lib/github";
import { PotionType } from "@/types/github";



const PotionPage = async () => {

  const potion = (await RandomRepo()) as PotionType;
  
  return (<PotionInfo potion={potion} />);
};

export default PotionPage;
