import Paper from "@material-ui/Paper";

import Image from "./images/book.jpg"; // Import using relative path

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

export default function ImageAppBar() {
  return (
    <Paper style={styles.paperContainer}>
      Some text to fill the Paper Component
    </Paper>
  );
}
