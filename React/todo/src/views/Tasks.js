import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import styles from "../assets/jss/tasksStyle";

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const [tasks, setTasks] = useState(() => {
    if (window.localStorage.getItem("tasks")) {
      return JSON.parse(window.localStorage.getItem("tasks"));
    } else {
      return [];
    }
  });
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [tasksIndexes, setTaskIndexes] = useState(
    () => JSON.parse(window.localStorage.getItem("tasksIndexes")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("tasksIndexes", JSON.stringify(tasksIndexes));
  }, [tasksIndexes]);

  const [checkedIndexes] = useState(
    () => JSON.parse(window.localStorage.getItem("checkedIndexes")) || []
  );

  const [taskInput, setTaskInput] = useState("");
  const classes = useStyles();
  const [checked, setChecked] = useState([...checkedIndexes]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    window.localStorage.setItem("checkedIndexes", JSON.stringify(newChecked));
  };

  const handleRemove = (value) => {
    const currentTask = tasks.indexOf(value);
    const newTasks = [...tasks];
    if (currentTask !== -1) {
      newTasks.splice(currentTask, 1);
      setTasks([...newTasks]);
    }
    const currentTasksIndex = tasksIndexes.indexOf(value);
    const newTasksIndexes = [...tasksIndexes];
    if (currentTasksIndex !== -1) {
      newTasksIndexes.splice(currentTasksIndex, 1);
      setTaskIndexes([...newTasksIndexes]);
    }
    const currentCheckedIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentCheckedIndex !== -1) {
      newChecked.splice(currentCheckedIndex, 1);
      setChecked(newChecked);
    }
  };
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const addTask = () => {
    const len = tasks.length;
    tasksIndexes.push(len);
    setTaskIndexes([...tasksIndexes]);
    tasks.push(taskInput);
    setTasks([...tasks]);
    setTaskInput("");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    return taskInput.length > 0 ? addTask() : false;
  };
  const { rtlActive } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });

  return (
    <>
      <form onSubmit={handleAdd}>
        <div className="form-row row-cols-1 justify-content-center align-items-center">
          <div className="col-xl-7 pl-1 pr-1">
            <input
              type="text"
              className="form-control form-control"
              onChange={handleTaskInput}
              value={taskInput}
            />
            <button
              className="btn-sm btn-primary m-2"
              type="button"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </form>
      <Table className={classes.table}>
        <TableBody>
          {tasksIndexes.map((value) => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  onClick={() => handleToggle(value)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.root,
                  }}
                />
              </TableCell>
              <TableCell className={tableCellClasses}>{tasks[value]}</TableCell>
              <TableCell className={classes.tableActions}>
                <IconButton className={classes.tableActionButton} title="Edit">
                  <Edit
                    className={
                      classes.tableActionButtonIcon + " " + classes.edit + " "
                    }
                  />
                </IconButton>
                <IconButton
                  className={classes.tableActionButton}
                  title="Remove"
                  onClick={() => handleRemove(value)}
                >
                  <Close
                    className={
                      classes.tableActionButtonIcon + " " + classes.close
                    }
                  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
