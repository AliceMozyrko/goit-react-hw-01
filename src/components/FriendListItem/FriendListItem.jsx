import clsx from "clsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClasses = clsx(css.status, isOnline ? css.isOnline : css.isOffline)
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" className={css.image} />
      <p className={css.txtName}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
