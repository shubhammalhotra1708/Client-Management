"use server"
import { TClient, TDataAll } from '@/types/types';

const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;

export async function getClientData(): Promise<TClient[]> {
    let filteredData: TClient[] = [];

    try {
        const response = await fetch(`${baseUrl}/manage/clients`, {
            cache: 'no-store' ,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        // console.log(`${baseUrl}/manage/clients`)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: TDataAll[] = await response.json();
        // console.log(data);

        filteredData = data.map((user: TDataAll) => {
            const filteredUser = Object.fromEntries(
                Object.entries(user)
                    .filter(([key]) => key !== 'user' && key !== 'created_at' && key !== 'updated_at')
            ) as TClient;
            return filteredUser;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return filteredData;
}
