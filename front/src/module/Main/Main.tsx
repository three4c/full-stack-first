import React, { FC, useEffect } from "react";
import AddTodoContainer from "../../redux/container/addTodoContainer";
import List from "../List/List";
import PlusButton from "../../components/Button/PlusButton";
import Profile from "../../components/Profile/Profile";
import Total from "../../components/Total/Total";
import TodoContainer from "../../redux/container/todoContainer";
import Toggle from "../../components/Toggle/Toggle";
import TransformButton from "../../components/Button/TransformButton";
import { MainState } from "../../redux/states/mainState";
import { MainAction } from "../../redux/container/mainContainer";
import { useTransition, animated } from "react-spring";
import store from "../../redux/store";
import "./Main.scss";

type MainProps = MainState & MainAction;

const Main: FC<MainProps> = (props: MainProps) => {
  const { data, toggle } = props;
  const transitionList = useTransition(props.doList || props.doneList, null, {
    from: { left: "100%" },
    enter: { left: "0%" },
    leave: { left: "100%" }
  });
  const transitionAddTodo = useTransition(props.puls, null, {
    from: { bottom: "100%" },
    enter: { bottom: "0%" },
    leave: { bottom: "100%" }
  });

  useEffect(() => {
    props.getTodo();
  }, [props.updateDataFlag]);

  return (
    <React.Fragment>
      <div className="Main">
        <div className="Main__bg">
          <div className="Main__bgInner" />
        </div>
        <div className="Main__topInner">
          <div className="Main__topArea">
            <Profile name={store.getState().user.results.data.user.name} />
            <TransformButton
              onClick={
                props.toggle ? props.pushDoListButton : props.pushDoneListButton
              }
              listFlag={
                props.doList || props.doneList || props.puls ? true : false
              }
            />
          </div>
          <div className="Main__totalMargin">
            <Total
              title={props.toggle ? "Do" : "Done"}
              todos={
                props.toggle
                  ? props.data.filter(item => item.progress !== 100).length
                  : props.data.filter(item => item.progress === 100).length
              }
            />
          </div>
        </div>
        <div className="Main__bottomInner">
          <div className="Main__toggleMargin">
            <Toggle onChange={props.slideToggleButton} />
          </div>
          <div className="Main__todoMargin">
            <TodoContainer todos={props.data} toggle={props.toggle} />
          </div>
          <div className="Main__plusButtonCenter">
            <PlusButton onClick={props.pushPlusButton} />
          </div>
        </div>
      </div>
      {transitionAddTodo.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className="AddTodo" key={key} style={props}>
              <AddTodoContainer />
            </animated.div>
          )
      )}
      {transitionList.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className="List" key={key} style={props}>
              <List todos={data} toggle={toggle} />
            </animated.div>
          )
      )}
    </React.Fragment>
  );
};

export default Main;
