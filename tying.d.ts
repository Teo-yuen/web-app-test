export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type User = {
  displayName: string;
  givenName: string;
  mail: string;
  mobilePhone: string;
  surname: string;
  userPrincipalName: string;
  id: string;
  extension_34d601e710424fb397fc92e019e5ecd4_roles: string;
  extension_34d601e710424fb397fc92e019e5ecd4_category:string;
  extension_34d601e710424fb397fc92e019e5ecd4_roles : string;
  identities:{
    signInType: string;
    issuer: string;
    issuerAssignedId: string;

  }
}