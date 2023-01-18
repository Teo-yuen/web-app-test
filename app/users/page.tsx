import { Suspense } from 'react';
import { getUsers } from '../../services/GraphService';
import { User } from '../../tying';
import UserList from './UserList';

async function fetchUserList() {
  const users: User[] = await getUsers();
  return users;
}

async function Users() {

  const users = await fetchUserList();

  return (
    <div>
      <Suspense fallback={<>loading ..........</>}>
        <UserList userList={users} />
      </Suspense>
    </div>
  )
}

export default Users