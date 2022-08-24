
import RepoItem from './RepoItem'



function RepoList({repos}) {
  // const {getRepos,repos} = useContext(GithubContext)
  return (
    <div className="rounded-lg shadow-bg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo)=>{
          return <RepoItem key={repo.id} repo={repo}/>
        })}
      </div>
    </div>
  )
}

export default RepoList