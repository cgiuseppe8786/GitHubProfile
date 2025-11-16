import type { GithubRepo, GithubUser } from "../types/types";

const BASE_URL = "https://api.github.com";

export async function fetchGithubUser(username: string): Promise<GithubUser> {
    const res = await fetch(`${BASE_URL}/users/${username}`);

    if (!res.ok) {
        throw new Error(
            res.status === 404 ? "User not found" : "Error fetching profile"
        );
    }

    return (await res.json()) as GithubUser;
}

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
    const res = await fetch(
        `${BASE_URL}/users/${username}/repos?sort=updated&per_page=100`
    );

    if (!res.ok) {
        throw new Error("Error fetching repositories");
    }

    return (await res.json()) as GithubRepo[];
}
