import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { hostname } from "os";

const ExpandedContent: React.FC<any> = (details) => {
  // console.log("hi")
  // console.log(details);
  // console.log(`client ${details.details.id}`)
  const excludeFields = ['status','wifi_ip', 'id', 'client_port' , 'client_lab', 'ssid_name' , 'bssid'];

  const labelsMapping: { [key: string]: string } = {
    // Map the field to the label which is displayed in the ui
    traffic_profile: 'Traffic Profile',
    ethernet_ip: 'Ethernet IP',
    ethernet_status: 'Ethernet Status',
    client_username: 'Username',
    client_password: 'Password',
    description: 'Description',
    interface_name: 'Interface',
    hwaddr: 'MAC Address',
    rssi: 'RSSI',
    txpower: 'TX Power',
    channel: 'Channel',
    channel_width: 'Channel Width',
    channel_band: 'Band',
    security: 'Security',
    phymode: 'PHY Mode',
    phyrate: 'PHY Rate',
    noise_measurement: 'Noise Measurement',
    wifi_status: 'Wifi Status',
    wifi_ip: 'Wifi IP',
    operating_system: 'Operating System',
    transmit_rate: 'Transmit Rate',
    receive_rate: 'Receive Rate',
    signal_quality: 'Signal Quality',
    hostname: 'Hostname',
    ipv6_address: 'IPv6 Address',
  };
  
  return (
    <>
      <TableRow>
        <TableCell style={{alignItems:"center"}} colSpan={8}>
          <div style={{display:'grid', gridTemplateColumns:'auto auto auto auto auto ', padding:'10px',rowGap:'20px'}}>
            {Object.entries(details.details).map(([key, value]) => (
              // Check if the field is not in the exclude list
              excludeFields.includes(key) ? null : (
              
              <div style={{width:'150px' , height: '60px'}} key={key}>
                <div style={{whiteSpace: 'balance'}}><strong>{labelsMapping[key] ?? key}:</strong></div>
                <div>
                {!value ? '' : (value as string).toString()}
                </div>
              </div>
              )))}
        </div>
        </TableCell>
      </TableRow>
    </>

  );
};

export default ExpandedContent;