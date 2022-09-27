import { useState } from "react";
import RouteSuggestion from "./RouteSuggestion";

export default function CustomAutocomplete(props) {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleClick = (route) => {
    setText(route.name);
    props.saveRoute((prevState) => ({
      ...prevState,
      route: route,
    }));
    props.setIsRoute(true);
  };

  const onChangeHandler = (text) => {
    props.setIsRoute(false);
    let matchesStartPoint = [];
    let matchesEndPoint = [];
    let matchesName = [];
    let allMatches = [];
    if (text.length > 0) {
      matchesName = props.routes.filter((route) => {
        const regex = new RegExp(`${text}`, "gi");
        return route.name.match(regex);
      });
      matchesStartPoint = props.routes.filter((route) => {
        const regex = new RegExp(`${text}`, "gi");
        return route.startPlace.match(regex);
      });
      matchesEndPoint = props.routes.filter((route) => {
        const regex = new RegExp(`${text}`, "gi");
        return route.endingPlace.match(regex);
      });
      allMatches = matchesName
        .concat(matchesStartPoint)
        .concat(matchesEndPoint);
      allMatches = [...new Set(allMatches)];
      allMatches.sort(function (a, b) {
        return b.rating - a.rating;
      });
      setSuggestions(allMatches);
    }
    setText(text);
  };

  return (
    <div>
      <input
        className="standard-input"
        onChange={(e) => onChangeHandler(e.target.value)}
        onBlur={() => {
          setTimeout(() => setSuggestions([]), 100);
        }}
        value={text}
      ></input>
      {suggestions.length > 0 && (
        <div className="all-suggestions">
          {suggestions &&
            suggestions.map((suggestion) => {
              return (
                <RouteSuggestion
                  customClickEvent={() => handleClick(suggestion)}
                  key={suggestion.id}
                  route={suggestion}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
