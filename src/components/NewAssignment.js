import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";


class NewAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assignment: {
                assignmentName: null,
                dueDate: null,
                courseTitle: null
            },
            dialog: false,
        };
    };

    handleAssignmentNameChange = (event) => {
        this.setState({
            assignment: {
                assignmentName: event.target.value,
                dueDate: this.state.assignment.dueDate,
                courseTitle: this.state.assignment.courseTitle
            }
        })
    }

    handleDueDateChange = (event) => {
        this.setState({
            assignment: {
                assignmentName: this.state.assignmentName,
                dueDate: event.target.value,
                courseTitle: this.state.assignment.courseTitle
            }
        })
    }

    handleCourseTitleChange = (event) => {
        this.setState({
            assignment: {
                assignmentName: this.state.assignmentName,
                dueDate: this.state.assignment.dueDate,
                courseTitle: event.target.value
            }
        })
    }

    handleClickOpen = () => {
        this.setState({dialog: true})
    }

    handleClickClose = () => {
        this.setState({dialog: false})
    }

    handleAddAssignment = () => {
        this.props.newAssignment(this.state.assignment);
        this.handleClickClose();
        this.setState({assignment: {}})
    }


    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
                    Add New Assignment
                </Button>
                <Dialog open={this.state.dialog}>
                    <DialogTitle>
                        New Assignment
                    </DialogTitle>
                    <DialogContent>
                        <TextField label="Assignment Name"
                                   onChange={this.handleAssignmentNameChange}
                                   variant="outlined" sx={{marginBottom: '10px', marginTop: '10px'}} fullWidth/>
                        <TextField label="Due Date" type='date'
                                   onChange={this.handleDueDateChange}
                                   variant="outlined" sx={{marginBottom: '10px'}} InputLabelProps={{shrink: true}}
                                   fullWidth/>
                        <TextField label="Course Title"
                                   onChange={this.handleCourseTitleChange}
                                   variant="outlined" sx={{marginBottom: '10px'}} fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="secondary" type="button"
                                onClick={this.handleClickClose}>Close</Button>
                        <Button variant="contained" color="primary" type="submit"
                                onClick={this.handleAddAssignment}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default NewAssignment;