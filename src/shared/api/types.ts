export namespace Request {
  export interface Login {
    email: string;
    password: string;
  }

  export interface Register {
    email: string;
    username: string;
    password: string;
  }
}

export namespace Response {
  export interface Refresh {
    accessToken: string;
    refreshToken: string;
  }

  export interface Register {
    status: string;
  }

  export interface Login {
    accessToken: string;
    refreshToken: string;
    user: {
      username: string;
      email: string;
      role: "USER" | "ADMIN";
      is_enabled: boolean;
    };
  }

  export interface YoursSpaces {
    spaces: {
      space_id: number;
      name: string;
      is_public: boolean;
      username: string;
    }[];
  }

  export interface RecentSpaces {
    spaces: {
      space_id: number;
      name: string;
      is_public: boolean;
      username: string;
    }[];
  }

  export interface PermittedSpaces {
    spaces: {
      space_id: number;
      name: string;
      is_public: boolean;
      username: string;
    }[];
  }
}
