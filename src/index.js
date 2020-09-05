import React from "react";
import ReactDOM from "react-dom";
import ApprofalCard from "./components/ApprofalCard";
import CommentDetail from "./components/CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
    <ApprofalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure?
      </div>
    </ApprofalCard>
    <ApprofalCard>
      <div className="ui comments">
          <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          date={faker.date.past().toDateString()}
          text={faker.lorem.sentence()}
          />
        </div>
    </ApprofalCard>
     <ApprofalCard>
      <div className="ui comments">
          <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          date={faker.date.past().toDateString()}
          text={faker.lorem.sentence()}
          />
        </div>
    </ApprofalCard>
     <ApprofalCard>
      <div className="ui comments">
          <CommentDetail
          avatar={faker.image.avatar()}
          name={faker.name.firstName()}
          date={faker.date.past().toDateString()}
          text={faker.lorem.sentence()}
          />
        </div>
    </ApprofalCard>
    </div>
  );
}
ReactDOM.render(<App/>, document.querySelector("#root"));
