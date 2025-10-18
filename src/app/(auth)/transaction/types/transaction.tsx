export interface Transaction {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    UserId: number;
    StatusId: number;
    ServiceCharge: number;
    TaxCharge: number;
    TotalPrice: number;
}
