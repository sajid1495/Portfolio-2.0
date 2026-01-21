'use client'

import { useState, useEffect } from 'react'
import AnimatedSection from '../AnimatedSection'
import { Github, GitFork, Star, Users, BookOpen, ExternalLink, Loader2 } from 'lucide-react'

// Your GitHub username - change this to your actual username
const GITHUB_USERNAME = 'sajid1495'

interface GitHubUser {
  login: string
  avatar_url: string
  public_repos: number
  followers: number
  following: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
}

// Language colors mapping
const languageColors: { [key: string]: string } = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Jupyter: '#DA5B0B',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
}

export default function GitHub() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [totalStars, setTotalStars] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true)
        
        // Fetch user data and repos in parallel
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
        ])

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('Failed to fetch GitHub data')
        }

        const userData: GitHubUser = await userResponse.json()
        const reposData: GitHubRepo[] = await reposResponse.json()

        // Calculate total stars across all repos
        const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)

        // Sort repos by stars and get top 6
        const topRepos = reposData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)

        setUser(userData)
        setRepos(topRepos)
        setTotalStars(stars)
        setError(null)
      } catch (err) {
        setError('Failed to load GitHub data')
        console.error('GitHub API Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <section id="github">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">GitHub Activity</h2>
          </AnimatedSection>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
            <span className="ml-3 text-gray-600 dark:text-gray-400">Loading GitHub data...</span>
          </div>
        </div>
      </section>
    )
  }

  if (error || !user) {
    return (
      <section id="github">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">GitHub Activity</h2>
          </AnimatedSection>
          <div className="text-center py-10">
            <p className="text-red-500 mb-4">{error || 'Unable to load data'}</p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Check out my open-source contributions and projects on GitHub
          </p>
        </AnimatedSection>

        {/* GitHub Stats */}
        <AnimatedSection delay={0.2}>
          <div className="card mb-12 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Info */}
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 h-20 rounded-full border-4 border-primary-500/20"
                />
                <div>
                  <h3 className="text-xl font-bold">@{user.login}</h3>
                  <a
                    href={`https://github.com/${user.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                  >
                    View Profile <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm">Repositories</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {user.public_repos}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Followers</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {user.followers}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Total Stars</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {totalStars}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Following</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {user.following}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* GitHub Stats Cards using github-readme-stats */}
        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Stats Card */}
            <div className="card p-4 flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=ec4899&icon_color=ec4899&text_color=64748b`}
                alt="GitHub Stats"
                className="w-full dark:hidden"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=ec4899&icon_color=ec4899&text_color=94a3b8`}
                alt="GitHub Stats"
                className="w-full hidden dark:block"
              />
            </div>
            {/* Streak Stats */}
            <div className="card p-4 flex items-center justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=ec4899&fire=ec4899&currStreakLabel=ec4899`}
                alt="GitHub Streak"
                className="w-full"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Contribution Graph */}
        <AnimatedSection delay={0.4}>
          <div className="card mb-12 p-6 overflow-hidden">
            <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
            <div className="overflow-x-auto">
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true&bg_color=transparent&color=ec4899&line=ec4899&point=ffffff`}
                alt="Contribution Graph"
                className="w-full min-w-[700px]"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Top Repositories */}
        <AnimatedSection delay={0.5}>
          <h3 className="text-2xl font-bold text-center mb-8">Top Repositories</h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <AnimatedSection key={repo.id} delay={0.6 + index * 0.1}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card block h-full hover:border-primary-500 dark:hover:border-primary-400 border-2 border-transparent transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate">
                    {repo.name}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] || '#6b7280' }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Repos Button */}
        <AnimatedSection delay={0.9}>
          <div className="text-center mt-10">
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Repositories
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
