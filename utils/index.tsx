
import { MAGICAL_TYPES } from '@/utils/constants';

export function getMagicalIcon (magicalPotions: string) {
        return MAGICAL_TYPES.filter((type)=> magicalPotions === type.id)[0].icon
}


export function getTypesColor(id: string) {
        return id === "fire"
                ? "from-element-fire/20"
                : id === "ice"
                ? "from-element-ice/20"
                : id === "electric"
                ? "from-element-electric/20"
                : "from-magic-purple/20"
        
}