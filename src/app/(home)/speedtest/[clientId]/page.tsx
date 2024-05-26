import React from 'react';
import { getGraphData } from "@/actions/graph/getGraphData";
import { GetGraph } from '@/components/custom/graph/getGraph';
import { Button } from '@/components/ui/button';
import { TbArrowBackUp } from "react-icons/tb";
import Link from 'next/link'

export async function page({ params }: { params: { clientId: number, } }) {
  const data = await getGraphData(params.clientId)
  const dataCus = {
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
      <div className='flex flex-row grid grid-cols-3 align-center'>
        <Link href="/">
          <Button variant="ghost" size ="icon" className='ml-10'>
          <TbArrowBackUp className='h-4 w-4' />
          </Button>
        </Link>
        <h1>Speedtest results for client {params.clientId}</h1>
      </div>
      <GetGraph dataCus={dataCus} />

    </div>
  );
}

export default page;