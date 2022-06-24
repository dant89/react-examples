import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                author={faker.name.firstName()}
                timeAgo="Today at 4:45pm"
                comment={faker.random.words()}
                avatar={faker.image.avatar()}
            />
        </ApprovalCard>
        <CommentDetail
            author={faker.name.firstName()}
            timeAgo="Today at 2:00m"
            comment={faker.random.words()}
            avatar={faker.image.avatar()}
        />
        <CommentDetail
            author={faker.name.firstName()}
            timeAgo="Yesterday at 7:00am"
            comment={faker.random.words()}
            avatar={faker.image.avatar()}
        />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
