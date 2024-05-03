import { Link } from 'react-router-dom'

function UserItem({user:{login,avatar_url}}) {
  return (
    <div className="card shadow-md bg-base-100 compact side">
        <div className="flex-row items-center card-body space-x-4 ">
            <div>
                <div className="avatar ">
                    <div className="rounded-full shadow w-14 h-14">
                    {/* <img src={avatar_url} className="rounded-full" alt=""  /> */}
                    <img src={avatar_url}  alt="Profile"  />

                    </div>
                </div>
            </div>
            <div >
                <h3 className="card-title">{login}</h3>
                <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>Visit Profile</Link>


            </div>
        </div>
    </div>
  )
}

export default UserItem