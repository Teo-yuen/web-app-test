export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type User = {
  businessPhones: [];
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
  id: string
}