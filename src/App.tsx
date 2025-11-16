import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileHeader from "./components/ProfileHeader";
import RepoList from "./components/RepoList";
import type { GithubRepo, GithubUser } from "./types/types";
import { fetchGithubRepos, fetchGithubUser } from "./services/github";

const App: React.FC = () => {
  const [usernameInput, setUsernameInput] = useState("github");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (inputSearch: string) => {
    setUsernameInput(inputSearch);
    const value = inputSearch;


    setLoading(true);
    setError(null);
    setHasSearched(true);



    try {
      const [userData, reposData] = await Promise.all([
        fetchGithubUser(value),
        fetchGithubRepos(value),
      ]);

      setUser(userData);
      const sortedRepos = [...reposData].sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
      setRepos(sortedRepos);
    } catch (err: any) {
      setUser(null);
      setRepos([]);
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="app">
      <div className="hero">
        <div className="hero__overlay" />
        <div className="container hero__content">
          <SearchBar
            value={usernameInput}
            onChange={handleSearch}
          />

          {user && (
            <div className="preview-card">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="preview-card__avatar"
              />
              <div className="preview-card__text">
                <p className="preview-card__title">{user.name || user.login}</p>
                <p className="preview-card__subtitle">
                  {user.bio || "How people build software."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <main className="main">
        <div className="container">
          {error && (
            <div className="alert">
              <p>{error}</p>
            </div>
          )}

          {!error && !user && hasSearched && !loading && (
            <p className="empty-state">No profile found.</p>
          )}

          {user && (
            <>
              <ProfileHeader user={user} />
              <RepoList repos={repos} username={user.login} />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
