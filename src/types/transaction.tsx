import { User } from "./user";

export interface Transaction {
    ID: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    UniqueId: string;
    Title: string;
    UserId: number;
    StatusId: number;
    ServiceCharge: number;
    TaxCharge: number;
    TotalPrice: number;
    TransactionItems: TransactionItem[];
}

export interface TransactionItem {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    TransactionId: number;
    ItemName: string;
    Price: number;
    TransactionItemAddOns: TransactionItemAddOn[];
    TransactionItemUsers: TransactionItemUser[];
}

export interface TransactionItemAddOn {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    TransactionItemId: number;
    ItemName: string;
    Price: number;
}

export interface TransactionItemUser {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    TransactionItemId: number;
    UserId: number;
    AlternativeCustomerName: string | null;
    User: User;
}
