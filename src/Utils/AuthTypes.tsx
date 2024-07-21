export interface SignIn {
  email: string;
  password: string;
}

export type AuthUpdateProps = {
  email: string;
  password: string;
  pseudo: string;
  firstname: string;
  lastname: string;
  address: string;
  phone?: string;
};

export type AuthProps = {
  email: string;
  password: string;
  pseudo: string;
  firstname: string;
  lastname: string;
  address: string;
  phone?: string;
};
