import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: number;
    name: string;
    email: string;
    created_at: string;
}


type UsersResponse = {
    totalCount: number;
    users: User[];
}

async function getUsers(page: number): Promise<UsersResponse> {
    const {data, headers} = await api.get('users', {
        params: {
            page
        }
    })

    const totalCount = Number(headers['x-total-count']);

    console.log('eu',data)

    
    const users = data.users.map((user: User) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })


    return {
        users,
        totalCount
    };
}

export function useUsers(page: number) {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 5 //5s
    });
}