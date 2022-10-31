import axios from "axios"
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL


const github = axios.create({
    baseURL:"https://api.github.com",
    headers:{ Authorization:"token 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" } 
})

// SearchUsers function
export const searchUsers = async (text)=>{

    const params = new URLSearchParams({
        q:text
    })
    const response = await github.get(`/search/users?${params}`)
    
    return response.data.items
}


 
export const getUserandRepos = async (login)=>{
    const [user,repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])
    return {user:user.data,repos:repos.data}
}
