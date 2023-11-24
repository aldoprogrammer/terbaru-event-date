import React from "react";
import classes from "./event-item.module.css";

function EventItem(props: {
  id: string;
  image: string;
  title: string;
  date: string;
  location: string;
}) {
  const { id, image, title, date, location } = props;
  return (
    <li key={id} className={classes.item}>
      <img src={image} alt="" className={classes.itemImg} />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{date}</time>
        </div>
        <div className={classes.address}>
          <address>{location}</address>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
