import { Suspense } from 'react';
import { User } from '../../tying';
import UserClient from './Users';

async function fetchUserList() {
  const result = await fetch("/api/getUser");
  const users : User[]= await result.json();
  return users;
}

async function Users() {

  // const users = await fetchUserList();

  return (
    <div>
      <Suspense fallback={<>loading ..........</>}>
        <UserClient />
      </Suspense>
    </div>
  )
}

export default Users