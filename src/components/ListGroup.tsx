import { useState } from "react";
//import { MouseEvent } from "react";

interface ListGroupProps
{
    items: [], // object array
    heading: string,
    onSelectItem: (item: number) => void
}

interface TrackEntry
{
    albumId: string;
    id: string;
    title:  string;
    url:  string;
    thumbnailUrl:  string;
}

function ListGroup(props: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
        {console.log("Rendering ListGroup")}
        <h2>{props.heading}</h2>

        <ul className="list-group">

        {props.items.map((item: TrackEntry, index) => (
        <li 
            className={selectedIndex === index ? "list-group-item active" :  "list-group-item"}
            key={index} 
            onClick={() => {
                setSelectedIndex(index),
                props.onSelectItem(index)
                }
            }>({index}) - {item.title}
        </li>
        ))
        }

        </ul>
        Currently selected index = {selectedIndex}
        </>
    )
}

export default ListGroup;