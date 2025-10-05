export type User = {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    Name: string;
    Username: string;
    Email: string;
    RoleID: number;
    IsActive: boolean;
    Role: {
        ID: number;
        RoleName: string;
    };
};
