import { getUserDetails } from "../../../services/GraphService";
import { User } from "../../../tying";
import UserDetails from "./UserDetails";

type PageProps = {
  params: {
    userId: string;
  }
}

async function fetchUserDetails(userId: string) {
  const user: User = await getUserDetails(userId);

  return user;
}

async function UserPage({ params: { userId } }: PageProps) {

  const user = await fetchUserDetails(userId);

  return (
    <>
      <UserDetails user={user} />
    </>
  )

}

export default UserPage

// export async function generateStaticParams() {
//   const users: User[] = await getUsers();

//   return users.map((user) => ({
//     userId: user.id,
//   }));
// }