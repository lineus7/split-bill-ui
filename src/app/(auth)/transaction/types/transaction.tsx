export interface Transaction {
    ID: number;
    Title: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    UserId: number;
    StatusId: number;
    ServiceCharge: number;
    TaxCharge: number;
    TotalPrice: number;
}
