"use server"
import { getSession } from '@/actions/auth/loginActions';

const baseUrl = process.env.BASE_URL;
const get_date = new Date();

export async function getGraphData(
  clientID:number, 
){
  const session =  await getSession();
  const bd = {
    "id" : `${clientID}`
  };
  console.log(bd)
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.token}`
    },
    body: JSON.stringify(bd),
  }
  console.log(JSON.stringify(bd));
  try {
    const fetchRes = await fetch(`${baseUrl}/monitor/speedtest/`,settings);
    console.log(`POST ${baseUrl}/monitor/speedtest/`)
    const res = await fetchRes.json(); 
    console.log(fetchRes.ok);
    console.log(fetchRes.status);
 
    const downloadTimestamps = [];
    const downloadSpeeds = [];
    const uploadTimestamps = [];
    const uploadSpeeds = [];

    const normalizeToMbps = (value:any) => {
      const unit = value.slice(-4);
      const number = parseFloat(value);
    
      if (unit === 'Kbps') {
        return (number / 1000).toFixed(2);
      }
    
      return number.toFixed(2);
    }

    // Collect download speeds
    for (const timestamp in res.download_speed) {
        if (res.download_speed.hasOwnProperty(timestamp)) {
            const speed = res.download_speed[timestamp];
            downloadTimestamps.push(timestamp);
            downloadSpeeds.push(speed);
        }
    }
    const normalizedDownload = downloadSpeeds.map(normalizeToMbps);
    console.log(normalizedDownload)


    // Collect upload speeds
    for (const timestamp in res.upload_speed) {
        if (res.upload_speed.hasOwnProperty(timestamp)) {
            const speed = res.upload_speed[timestamp];
            uploadTimestamps.push(timestamp);
            uploadSpeeds.push(speed);
        }
    }
    const normalizedUpload = uploadSpeeds.map(normalizeToMbps);
    console.log(normalizedUpload)

    // Creating labels from timestamps
    const downloadLabels = downloadTimestamps.map(timestamp => new Date(timestamp).toLocaleString());

    return {downloadLabels , normalizedDownload,normalizedUpload }
  }catch(e){
    console.log(e);

  }
}
