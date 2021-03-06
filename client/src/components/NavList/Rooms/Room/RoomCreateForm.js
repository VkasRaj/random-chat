import React, { Component } from "react";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
	TextField
} from "@material-ui/core";
import { Form, Field, reduxForm, reset } from "redux-form";

class RoomCreate extends Component {
	inputField = field => {
		return <TextField {...field.input} {...field} />;
	};

	render() {
		const { inputField } = this;
		const { handleSubmit, handleClose, pristine, open } = this.props;
		return (
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle
					id="form-dialog-title"
					style={{ paddingBottom: "0" }}
				>
					Create Chat Room
				</DialogTitle>
				<Form onSubmit={handleSubmit} noValidate autoComplete="off">
					<DialogContent>
						<DialogContentText>
							# You will be disconnected from current room. <br />#
							And automatically connected to your created room.
						</DialogContentText>
						<Field
							autoFocus
							margin="normal"
							placeholder="Enter room name to create..."
							label="Room Name"
							type="text"
							name="room"
							component={inputField}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={handleClose}
							color="primary"
							type="reset"
						>
							Cancel
						</Button>
						<Button
							variant="raised"
							onClick={handleClose}
							color="primary"
							type="submit"
							disabled={pristine}
						>
							Create
						</Button>
					</DialogActions>
				</Form>
			</Dialog>
		);
	}
}

RoomCreate = reduxForm({
	form: "room",
	onSubmitSuccess: (result, dispatch) => {
		dispatch(reset("room"));
	}
})(RoomCreate);

export default RoomCreate;
