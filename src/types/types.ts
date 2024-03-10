export type TClient = {
    id:number,
    clientName: string;
    clientIP: string;
    clientPort: string;
    clientUsername: string;
    clientPassword?: string;
    clientLab: string;
    description: string;
    
};
export type TDataAll = {
    id: number,
    traffic_profile: string,
    created_at: string,
    updated_at: string,
    user: number,
    clientName: string;
    clientIP: string;
    clientPort: string;
    clientUsername: string;
    clientPassword?: string;
    clientLab?: string;
    description?: string;
}

export type TPlanName = "personal" | "vercel" | "annual";
export type TRecordType = "CNAME" | "A" | "TXT";

export type TNewRecord = {
    name: string;
    content: string;
    plan: TPlanName;
    type: TRecordType;
};