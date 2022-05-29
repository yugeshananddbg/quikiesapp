import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import googleImg from "../assets/GOOGL.png";
import fbImg from "../assets/FB.png";
import amzImg from "../assets/AMZN.svg";
import "./HeroCard.css";

const data = [
  {
    id: "item-1",
    title: "GOOGLE",
    img: googleImg,
    value: 1515,
  },
  {
    id: "item-2",
    title: "FACEBOOK",
    img: fbImg,
    value: 1515,
  },
  {
    id: "item-3",
    title: "AMAZON",
    img: amzImg,
    value: 1515,
  },
];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const HeroCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    console.log({ reorderedItems });
    setItems(reorderedItems);
  };

  return (
    <div className="main_content">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              className="cardBox"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <div className="heroCompany">
                          <h4>{item.title}</h4>
                          <img src={item.img} alt="img" className="heroImg" />
                        </div>

                        <h1 className="value">{item.value} USD</h1>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default HeroCard;
