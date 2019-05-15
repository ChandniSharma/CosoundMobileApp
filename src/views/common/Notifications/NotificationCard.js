import React from "react";

import {
  getNotificationTitle,
  getThumbnail,
  refactorCarbonDate
} from "../../utils";

import NotificationDescription from "./NotificationDescription";

const NotificationCard = ({ item, markAsRead }) => (
  <div className="ntf__card">
    <div className="avatar avatar--shad">
      <img src={getThumbnail(item.activities[0].user)} alt="avatar" />
    </div>
    <div className="ntf__card-contents">
      <div
        className={`ntf__card-title ${item.is_read ? "c-aqua" : "c-violet"}`}
      >
        {getNotificationTitle(item.verb).title}
      </div>
      <div className="ntf__card-date">
        {refactorCarbonDate({ date: item.updated_at })}
      </div>
      <div className="ntf__card-text">
        <NotificationDescription item={item} markAsRead={markAsRead} />
      </div>
    </div>
  </div>
);

export default NotificationCard;
