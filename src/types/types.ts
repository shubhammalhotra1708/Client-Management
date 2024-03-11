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
