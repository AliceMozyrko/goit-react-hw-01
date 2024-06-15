import css from './Profile.module.css';


export default function Profile({name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
     <div>
      <img
          src={image}
          alt="User avatar"
          className={css.avatarImg}
      />
      <p className={css.name}>{name}</p>
      <p className={css.lightText}>@{tag}</p>
      <p className={css.lightText}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsEl} >
          <span className={css.statsText}>Followers </span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li className={css.statsEl}>
          <span className={css.statsText}>Views </span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li className={css.statsElLast}>
          <span className={css.statsText}>Likes </span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
  
}
