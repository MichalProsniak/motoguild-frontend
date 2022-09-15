import { Rating } from "react-simple-star-rating";

export default function RouteSuggestion(props)
{
    return (
        <div className="suggestion" onClick={props.customClickEvent}>
            <div >
                <p>{props.route.name} 
                    <Rating
                        initialValue={props.route.rating}
                        readonly={true}
                        size={20}
                    />
                </p>
                <p>{props.route.startPlace} <i className="bi bi-caret-right-fill"></i> {props.route.endingPlace}</p>
            </div>
        </div>
    )
}