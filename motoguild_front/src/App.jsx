import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";


function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([
    {
      Id: 1,
      Author: {
        UserName:"Zenek Martyniuk"
      },
      CreateTime: "12.05.2022",
      Content: "Kto jest chetny na jazdę nocną?",
      Comments: [{
        Id: 1,
        User: {
          UserName:"Sławomir"
        },
        CreateTime: "12.05.2022",
        Content: "Gdziś daleko?",
      },
      {
        Id: 2,
        User: {
          UserName:"Zenek Martyniuk"
        },
        CreateTime: "12.05.2022",
        Content: "Nie tak tu po okolicy.",
      }
      ]
    },
    {
      Id: 1,
      Author: {
        UserName:"Piotrek"
      },
      CreateTime: "12.05.2022",
      Content: "Bedzie ktoś w nastepnym tygodniu w Warszawie",
      Comments: [{
        Id: 1,
        User: {
          UserName:"Ignacy"
        },
        CreateTime: "12.05.2022",
        Content: "Możlewe, a co potrzebujesz?",
      },
      ]
    }
  ])

  const [routes, setRoutes] = useState([
    {
      Id: 1,
      Name: 'Beskid Wyspowy',
      Description: 'Przejazd widokowy',
      Owner: {
        Id: 1,
        UserName: 'Grzegorz Wikar',
        Email: 'grzegorzwikar938@gmail.com',
        PhoneNumber: 796848811,
        Rating: 4.5
      },
      Stops: [
        {
          Id:1,
          Name: "LDK",
          Place: "12365456234",
          Description: "Miesce zbiurki"
        },
        {
          Id:2,
          Name: "Kościuł Stara Wieś",
          Place: "12365456234",
          Description: "Prosta droga do sprawdzenia sprzętu"
        },
        {
          Id:3,
          Name: "Leśniczówka",
          Place: "12365456234",
          Description: "Miesce na grilla"
        }
      ],
      StartPlace: "Parking koło szpitala",
      EndingPlace: "Słopnice",
      Posts:[],
      Rating: 3.0
    },
  ])

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("https://localhost:3333/api/user");
        const data = await res.json();
        setAllUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Homepage posts={posts} />
    </div>
  );
}

export default App;
