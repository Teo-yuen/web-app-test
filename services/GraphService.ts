
import { ClientSecretCredential } from "@azure/identity";
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';
import { User } from "../tying";

let tenantId = "cab92364-8984-4691-aa82-b303293ea8db";
let clientId = "caedd952-cf49-43ca-9655-1ff6a522d6bc";
let clientSecret = "PbA8Q~g39Q-OgMaciJUAT7rPwLYdVtNqZyt8Zcjq";
let scopes = "https://graph.microsoft.com/.default";

const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const authProvider = new TokenCredentialAuthenticationProvider(credential, {
  scopes: [scopes]
});

const client = Client.initWithMiddleware({
  debugLogging: true,
  authProvider
  // Use the authProvider object to create the class.
});

export async function getUsers(): Promise<User[]> {

  // Return the /me API endpoint result as a User object
  const user = await client.api('/users')
    // .select('displayName,mail,mailboxSettings,userPrincipalName')
    .get();

  return user?.value;
}

export async function getUserDetails(userId: string): Promise<User> {

  // Return the /me API endpoint result as a User object
  const user = await client.api(`/users/${userId}`)
    // Only retrieve the specific fields needed
    .select('displayName,userPrincipalName,identities,extension_34d601e710424fb397fc92e019e5ecd4_role,extension_34d601e710424fb397fc92e019e5ecd4_category')
    .get();

  return user;
}