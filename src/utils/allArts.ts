import { api } from "../lib/api";

interface Art {
    id: string;
    name: string;
    url: string;
    status: number;
}

export interface Item {
    label: string;
    value: string;
    url: string;
    selected: boolean;
}

export async function allArts() {
    try {
        const { data } = await api.get("/arts");

        const list: Item[]  = [];
        data.forEach((art: Art) => {
            list.push({
                label: art.name,
                value: art.id,
                url: art.url,
                selected: false,
            });
        });
        return list;
    } catch (err) {
        console.error(err);
    }
}