import React from 'react';
import { getGraphData } from "@/components/custom/graph/getGraphData";
import { GetGraph } from '@/components/custom/graph/getGraph';

export async function page ({params}: {params: {clientId : number}}){
  const data = await getGraphData(params.clientId)
  const dataCus  = {
    labels: data?.downloadLabels,
    datasets: [
      {
        label: 'Download',
        data: data?.normalizedDownload,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Upload',
        data: data?.normalizedUpload,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <h1>hii {params.clientId}</h1>
        <GetGraph dataCus = {dataCus} />

    </div>
  );
}

export default page;