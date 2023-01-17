import Link from 'next/link';
import { getUsers } from '../../services/GraphService';
import { User } from '../../tying';

async function fetchUserList() {
  const users: User[] = await getUsers();
  return users;
}

async function Users() {

  const users = await fetchUserList();

  return (
    <div>
      {
        users?.map((user: User) => (
          <div key={user.id}>
            <p>user name : {user.displayName}</p>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>user: ${user.id}</Link>
            </p>
          </div>
        ))
      }
    </div>
  )
}

export default Users