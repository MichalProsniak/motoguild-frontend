import GetDayMonthYear from "../helpnigFunctions/GetDayMonthYear";
import { Rating } from "react-simple-star-rating";
import grouphero from "../images/group-hero.jpg";
import Image from "react-bootstrap/Image";

export default function GroupImportantInfo(props) {
  const dayMonthYear = GetDayMonthYear(props.group.creationDate);

  return (
    <div>
    <div className="group-page-header">
      <Image className="group-page-header-photo" src={grouphero} />
      <div className="group-page-info">
        <div>
          <p className="group-page-info-name">{props.group.name}</p>
          
            {props.group.isPrivate ? (
              <p className="group-page-info-privacy"><i>Prywatna</i></p>
            ) : (
              <p className="group-page-info-privacy"><i>Publiczna</i></p>
          )}
          <p className="group-page-info-rating">
            <Rating initialValue={props.group.rating} readonly={true} size="25" emptyColor="darkgrey" />
          </p>
        </div>
        <div className="group-page-info-important" >
          <br></br>
          <p className="group-page-info-owner">
            <i className="bi bi-person-circle"></i> {props.group.owner.userName}
          </p>
          
          <p className="group-page-info-owner">
            <i className="bi bi-calendar-check"></i> {dayMonthYear}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
