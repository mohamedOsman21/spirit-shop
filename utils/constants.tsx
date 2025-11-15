import { FlameIcon, SnowflakeIcon, SparkleIcon, ZapIcon } from "lucide-react";

export const MAGICAL_TYPES = [
    {
        id: "fire",
        value: "🔥",
        label: "Fire-type",
        icon: <FlameIcon className="text-element-fire"/>
    },

    {
        id: "ice",
        value: "🧊",
        label: "Ice-type",
        icon: <SnowflakeIcon className="text-element-ice"/>
    },

    {
        id: "electric",
        value: "⚡",
        label: "Electric-type",
        icon: <ZapIcon className="text-element-electric"/>
    },

    {
        id: "all",
        value: "✨",
        label: "all types",
        icon: <SparkleIcon className="text-magic-purple"/>
    },
]

export const numberFormat = (n: number)=> {
    if(n >= 1000000){
        return `${(n / 1000000).toFixed(1)}M`
    }else if(n >= 1000) {
        return `${(n / 1000).toFixed(0)}K`
    }else {
        return n.toString();
    }
}