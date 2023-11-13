import { v4 as uuidv4 } from 'uuid';

export default function seed(store) {
  console.log("Insert to do");
  const firstListId = uuidv4();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "To Do" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: uuidv4(),
      cardText: "Setup Redux Toolkit"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: uuidv4(),
      cardText: "Implement Landing Page"
    }
  });

  console.log("Insert second list");
  const secondListId = uuidv4();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "Doing" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: uuidv4(),
      cardText: "Setup Material UI"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: uuidv4(),
      cardText: "nitialize React Project"
    }
  });
};
