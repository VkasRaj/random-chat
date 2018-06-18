import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => {
	return {
		messageColor: {
			color: theme.palette.primary.contrastText,
			display: "inline-block",
			padding: ".25rem 1rem"
		},
		currentMsgColor: {
			background: theme.palette.primary.main
		},
		otherMsgColor: {
			background: theme.palette.secondary.main
		}
	};
};

const Message = props => {
	const {
		msg: {
			text,
			createdAt,
			user: { name },
			type
		},
		classes: { otherMsgColor, currentMsgColor, messageColor },
		currentUser
	} = props;

	let msgColor = otherMsgColor;
	if (currentUser) {
		msgColor = currentMsgColor;

		if (type === "join" || type === "leave") {
			return null;
		}
	} else {
		if (type === "join" || type === "leave") {
			return (
				<Typography
					variant="caption"
					color="secondary"
					align="center"
					paragraph
				>
					{text}
				</Typography>
			);
		}
	}

	return (
		<Paper
			square
			className="mb-3"
			elevation={0}
			style={{
				textAlign: currentUser ? "right" : "left"
			}}
		>
			<Typography
				classes={{ root: [messageColor, msgColor].join(" ") }}
				gutterBottom
			>
				{text}
			</Typography>
			<Typography variant="caption">
				{name} @ {createdAt}
			</Typography>
		</Paper>
	);
};

export default withStyles(styles)(Message);
