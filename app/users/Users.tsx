'use client'

import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
import { User } from "../../tying";

function UserClient() {

  const [users, setUsers] = useState<User[]>([]);

  async function fetchUserList() {
    const result = await fetch("/api/getUsers");
    const users : User[]= await result.json();
    return users;
  }

  const getResult = async () => {
    const data = await fetchUserList();
    setUsers(data);
  }

  useEffect(() => {
    getResult();
  },[])
  

  return (
    <div>
      {
        users?.map((user) => (
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

export default UserClient