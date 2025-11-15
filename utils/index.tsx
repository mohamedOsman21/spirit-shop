
import { MAGICAL_TYPES } from '@/utils/constants';

export default function getMagicalIcon (magicalPotions: string) {
        return MAGICAL_TYPES.filter((type)=> magicalPotions === type.id)[0].icon
}