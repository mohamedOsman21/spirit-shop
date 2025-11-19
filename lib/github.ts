import { GitHubRepo, MagicalPotions, PotionType } from "@/types/github";
import { MAGICAL_TYPES } from "@/utils/constants";

const GITHUB_API_URL = "https://api.github.com";

const POTION_EFFECTS = [
    "grants the power of rapid development",
    "enhances code clarity and maintanability",
    "boosts performance and efficiency",
    "unlocks the secrets of clean architecture",
]

const transformRepoIntoPotion = (repo: GitHubRepo, index: number) => {
    return {
        ...repo,
        topics: repo.topics.splice(0, 3),
        potionEffect: POTION_EFFECTS[index % POTION_EFFECTS.length],
        magicalPotions: MAGICAL_TYPES[index % MAGICAL_TYPES.length].id,
    }
}

const transformRepoPotion = (repo: GitHubRepo) => {
    return {
        ...repo,
        topics: repo.topics.splice(0, 3),
        potionEffect: POTION_EFFECTS[0],
        magicalPotions: MAGICAL_TYPES[0].id,
    }
}


export async function fetchingRepos() {

    const url = `${GITHUB_API_URL}/search/repositories?q=topic:javascript+stars:>5000&sort=stars&order=desc`;
    const githubToken = process.env.GITHUB_TOKEN;

    const headers = {
        Accept: 'application/vnd.github+json',
        ...(githubToken && {
            Authorization: `Bearer ${githubToken}`
        }),
    }

    try {
        const response = await fetch(url, { headers, cache: 'force-cache' });
        if (!response.ok) {
            throw new Error(`failed to fetch potions`);
        }

        const data = await response.json();
        return data.items.map((repo: GitHubRepo, index: number) => transformRepoIntoPotion(repo, index));
    } catch (error) {
        console.error((error as Error).message);
        return [];
    }
}

export async function fetchingRepo(owner: string , repo: string) {

    const url = `${GITHUB_API_URL}/repos/${owner}/${repo}`;
    const githubToken = process.env.GITHUB_TOKEN;

    const headers = {
        Accept: 'application/vnd.github+json',
        ...(githubToken && {
            Authorization: `Bearer ${githubToken}`
        }),
    }

    try {
        const response = await fetch(url, { headers, next: {revalidate: 3600} });
        if (!response.ok) {
            throw new Error(`failed to fetch potion`);
        }

        const data = await response.json();
        return transformRepoPotion(data);
    } catch (error) {
        console.error((error as Error).message);
        return {};
    }
}