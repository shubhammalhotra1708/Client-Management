import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { channel } from "diagnostics_channel";

const ExpandedContent: React.FC<any> = (details) => {
  console.log("hi")
  console.log(details);
  console.log(`client ${details.details.id}`)
  const excludeFields = ['status', 'clientIP', 'id', 'clientPort' , 'clientName', 'clientLab', 'ssidname' , 'bssid'];
  const labelsMapping: { [key: string]: string } = {
    traffic_profile: 'Traffic Profile',
    clientName: 'Client Name',
    clientUsername: 'Username',
    clientPassword: 'Password',
    description: 'Description',
    interface: 'Interface',
    hwaddr: 'MAC Address',
    rssi: 'RSSI',
    txpower: 'TX Power',
    channel: 'Channel',
    channelwidth: 'Channel Width',
    channelband: 'Band',
    security: 'Security',
    phymode: 'PHY Mode',
    phyrate: 'PHY Rate',
    noisemeasurement: 'Noise Measurement',
    
    // Add more mappings as needed
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