export type GitHubRepo = {
 id: number,
 name: string, 
 description: string,
 stargazers_count: number,
 forks_count: number,
 topics: string[],
 owner: {
    login: string,
    avatar_url: string
 },
 language: string,
 updated_at: string,
}

export type MagicalPotions = 'fire' | 'ice' | 'electric' | 'all';


export interface PotionType extends GitHubRepo {
   potionEffect: string;
   magicalPotions:  MagicalPotions;
}