declare namespace Models {
  interface UserBase {
    id?: number;
    user_name: string;
    full_name: string;
    email: string;
    phone?: string;
    gender?: Enum.UserGender;
    birthday?: string;
    avatar?: string;
    address?: string;
    status?: Enum.UserStatus;
    expired_status?: string;
  }

  interface User extends UserBase {
    password: string;
    movieToUsers?: MovieToUsers[];
  }

  interface UserAuth extends UserBase {
    token: string;
  }

  interface LoginPayload {
    email: string;
    password: string;
  }
}
