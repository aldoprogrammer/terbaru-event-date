import data from "@/events-data.json";

export type Event = {
    id: string;
    title: string;
    description: string;
    image: string;
    location: string;
    date: string;
    isFeatured: boolean;
}

export default function allEvents(): Event[] {
    return data;
}

export function featuredEvents(): Event[] {
    // return data.map((event) => {
    //    return event;
    // });

    return data.filter((event) => event.isFeatured)
}