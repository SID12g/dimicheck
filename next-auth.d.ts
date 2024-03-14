import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    number?: string;
    telephone?: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
