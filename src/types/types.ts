export interface GithubUser {
    login: string;
    name: string | null;
    bio: string | null;
    avatar_url: string;
    followers: number;
    following: number;
    location: string | null;
    public_repos: number;
}

export interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    license: { name: string } | null;
    updated_at: string;
    html_url: string;
}
