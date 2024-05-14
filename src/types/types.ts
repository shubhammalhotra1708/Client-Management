export type TDataAll = {
    id: number;
    hostname?: string;
    ethernet_ip: string;
    client_port: number;
    client_username: string;
    client_password: string;
    client_lab: string;
    traffic_profile: string;
    description: string;
    interface_name: string;
    ssid_name: string | null;
    bssid: string | null;
    hwaddr: string | null;
    rssi: number | null;
    txpower: number | null;
    channel: number | null;
    channel_width: string | null;
    channel_band: string | null;
    security: string | null;
    phymode: string | null;
    phyrate: number | null;
    noise_measurement: number | null;
    wifi_status: string;
    ethernet_status: boolean;
    created_at : string;
    updated_at : string;
    user: number;
};

export type TClient = {
    hostname?:string;
    id: number;
    ethernet_ip: string;
    client_port: number;
    client_username: string;
    client_password: string;
    client_lab: string;
    traffic_profile: string;
    description: string;
    interface_name: string;
    ssid_name: string | null;
    bssid: string | null;
    hwaddr: string | null;
    rssi: number | null;
    txpower: number | null;
    channel: number | null;
    channel_width: string | null;
    channel_band: string | null;
    security: string | null;
    phymode: string | null;
    phyrate: number | null;
    noise_measurement: number | null;
    wifi_status: string;
    ethernet_status: boolean;
}
export type BrowsingData = {
    status: string;
    traffictype: string;
    url: string;
    interval: number;
    browser: string;
    browsermode: string;
    actions: {
      action: {
        click: {
          locator: string;
        };
      };
    }[];
    traffic_schedule: {
      traffic_default: boolean;
      weekdays_schedule: {
        [key: string]: {
          [key: string]: boolean;
        };
      };
    };
  };
export type FileOpData = {
    status: string;
    traffictype: string;
    host: string;
    port: string;
    interval: number;
    operation: string;
    mode: string;
    filesize: number;
    packetsize: number;
    username: string;
    password: string;
    traffic_schedule: {
      traffic_default: boolean;
      weekdays_schedule: {
        [key: string]: {
          [key: string]: boolean;
        };
      };
    };
  };