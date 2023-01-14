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
            <p>User id: ${user.id}</p>
            <p>User name: ${user.displayName}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Users