'use client'

import { User } from "../../../tying"

type PageProps = {
  user: User
}

function UserDetails({ user }: PageProps) {
  // function UserDetails({ userId }: PageProps) {

  // const [user, setUser] = useState<User>();

  // const getUserDtails = async () => {
  //   const res = await fetch(`/api/getUserDetails/${userId}`);
  //   const temp: User = await res.json();
  //   console.log(temp);
  //   setUser(temp);
  // }
  // useEffect(() => {
  //   console.log(userId)
  //   getUserDtails();
  // }, [])


  return (
    <div>
      <p>User name: {user?.displayName}</p>
      <p>User category: {user?.extension_34d601e710424fb397fc92e019e5ecd4_category}</p>
      <p>User id: {user?.id}</p>
    </div>

  )
}

export default UserDetails