import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import { Rating } from "react-simple-star-rating";
import grouphero from "../images/group-hero.jpg";
import Image from "react-bootstrap/Image";

export default function GroupImportantInfo(props) {
  const dayMonthYear = GetDayMonthYear(props.group.creationDate);

  return (
    <div className="group-page-header">
      <Image className="group-page-header-photo" src={grouphero} />
      <div className="group-page-info">
        <p className="group-page-info-name">{props.group.name}</p>
        {props.group.isPrivate ? (
          <p className="group-page-info-privacy">Prywatna</p>
        ) : (
          <p className="group-page-info-privacy">Publiczna</p>
        )}
        <p className="group-page-info-owner">
          <i className="bi bi-person-circle"></i> {props.group.owner.userName}
        </p>
        <p className="group-page-info-created">
          <i className="bi bi-calendar-check"></i> {dayMonthYear}
        </p>
        <p className="group-page-info-rating">
          <Rating initialValue={props.group.rating} readonly={true} size="15" />
        </p>
      </div>
    </div>
  );
}
