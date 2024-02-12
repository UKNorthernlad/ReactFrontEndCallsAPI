import { useState } from "react";
//import { MouseEvent } from "react";
import Alert from './Alert'

interface ListGroupProps
{
    items: [], // object array
    heading: string,
    onSelectItem: (item: number) => void
}

interface TrackEntry
{
    name: string;
    password: string;
    profession:  string;
    id:  number;
    chickenFights: boolean;
}

function ListGroup(props: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [fightsChickens, setfightsChickens] = useState(false);

    return (
        <>
        {console.log("Rendering ListGroup")}
        <h2>{props.heading}</h2>

        <ul className="list-group">

        {props.items.map((item: TrackEntry, index) => (
        <li 
            className={selectedIndex === index ? "list-group-item active" :  "list-group-item"}
            key={item.id} 
            onClick={() => {
                                setSelectedIndex(index);
                                props.onSelectItem(index);
                                if (item.chickenFights === true) {
                                    setfightsChickens(true)
                                } else {
                                    setfightsChickens(false)
                                }
                            }
            }>({index}) - Name = {item.name} - ID = {item.id}
        </li>
        ))
        }

        </ul>
        Currently selected index = {selectedIndex}

        {fightsChickens === true &&  
        <Alert>
          <h2>Known to fight chickens</h2>
          <img width="100px" src="https://wallpapercave.com/wp/Nz3QYab.jpg" />
        </Alert> 
      }
        </>
    )
}

export default ListGroup;