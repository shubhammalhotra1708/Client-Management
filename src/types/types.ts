// export type TClient = {
//     id:number,
//     clientName: string;
//     clientIP: string;
//     clientPort: string;
//     clientUsername: string;
//     clientPassword?: string;
//     clientLab: string;
//     description: string;
    
// };
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
};

export type TClient = {
    id: number;
    clientName: string;
    clientIP: string;
    clientPort: number;
    clientUsername: string;
    clientPassword: string;
    clientLab: string;
    traffic_profile: string;
    description: string;
    interface: string;
    ssidname: string | null;
    bssid: string | null;
    hwaddr: string | null;
    rssi: number | null;
    txpower: number | null;
    channel: number | null;
    channelwidth: string | null;
    channelband: string | null;
    security: string | null;
    phymode: string | null;
    phyrate: number | null;
    noisemeasurement: number | null;
    status: boolean;
}