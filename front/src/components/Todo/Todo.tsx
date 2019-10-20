import React, { FC } from "react";
import "./Todo.scss";

interface TodoInterface {
    todos: TodoResponseData[];
}

export interface TodoResponseData {
    id: number;
    content: string;
    user_id: number;
    progress: number;
    created_at: string;
    updated_at: string;
}


const Todo: FC<TodoInterface> = props => {
    return (
        <div className="Todo">
            <ul className="Todo__list">
                {(() => {
                    if (props.todos.length === 0) {
                        return (
                            <li className="Todo__item">
                                <div className="Todo__box">
                                    <div className="Todo__boxInner">
                                        <p className="Todo__text">「+」ボタンから<br />タスクを追加してみよう！</p>
                                    </div>
                                </div>
                            </li>
                        )
                    } else {
                        return (
                            props.todos.map((item, i) => (
                                <li className="Todo__item" key={i}>
                                    <div className="Todo__box">
                                        <div className="Todo__boxInner">
                                            <div className="Todo__bgBar">
                                                <span
                                                    className="Todo__bar"
                                                    style={{ width: `${item.progress}%` }}
                                                />
                                            </div>
                                            <p className="Todo__text">{item.content}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        )
                    }
                })()}
            </ul>
        </div>
    )
}

export default Todo;