import classes from "./event-list.module.css";
import EventItem from "./EventItem";

function EventList(props: { items: Event[] }) {
   return (
    <>
        <ul className={classes.list}>
            {props.items.map((event) => (
               <EventItem 
                    id={event.id}
                    title={event.title}
                    image={event.image}
                    date={event.date}
                    location={event.location}
               />     
            ))}
        </ul>
    </>
   ) 
   
}

export default EventList;