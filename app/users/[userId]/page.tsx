import { getUserDetails, getUsers } from "../../../services/GraphService";
import { User } from "../../../tying";

type PageProps = {
  params: {
    userId: string;
  }
}

async function fetchUserDetails(userId: string) {
  const user: User = await getUserDetails(userId);
  // console.log(user);

  return user;
}

async function UserPage({params: {userId}}: PageProps) {
  
  const user = await fetchUserDetails(userId);

  if(!user) {
    return (
      <>
        loading
      </>
      );
  } else {
    return (
      <div>
        <p>User name: {user.displayName}</p>
        <p>User category: {user.extension_34d601e710424fb397fc92e019e5ecd4_category}</p>
      </div>
    )
  }


}

export default UserPage

export async function generateStaticParams() {
  const users: User[] = await getUsers();

  return users.map((user) => ({
    userId: user.id,
  }));
}