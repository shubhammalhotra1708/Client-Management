import axios from 'axios'

const baseUrl = process.env.BASE_URL;
const token = process.env.TOKEN;
axios.defaults.headers.common = {
    'Authorization': `Bearer ${token}`
};
import { TClient,TDataAll} from '@/types/types';
export async function getClientData() : Promise<TClient[]> {
    let filteredData: TClient[] = []; // Declare the filteredData variable

    try {
        const response = await axios.get(baseUrl+'/manage/clients');
        
        filteredData = response.data.map((user: TDataAll) => { // Add type annotation to 'user' parameter
            const filteredUser = Object.fromEntries(
                Object.entries(user)
                    .filter(([key]) => key !== 'user' && key !== 'created_at' && key !== 'updated_at')
            );
            return filteredUser;
        });

        // console.log(filteredData); // For checking the filtered data
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return filteredData;

}