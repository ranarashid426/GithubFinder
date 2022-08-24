import { Link } from 'react-router-dom'

function UserItem({user:{login,avatar_url}}) {
  return (
    <div className="card shadow bg-base-100 compact ">
        <div className="flex-row item-center card-body  ">
            <div>
                <div className="avatar  w-14 h-14">
                    <img src={avatar_url} className="rounded-full" alt=""  />
                </div>
            </div>
            <div className='flex-col'>
                <h3 className="text-white card-title">{login}</h3>
                <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>Visit Profile</Link>


            </div>
        </div>
    </div>
  )
}

export default UserItem