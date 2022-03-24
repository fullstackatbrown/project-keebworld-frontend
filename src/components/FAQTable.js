import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(question, answer) {
  return {
    question,
    answer,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      {/* <TableRow sx={{ "& > *": { borderBottom: "unset" } }}> */}
      <TableRow>
        <TableCell component="th" scope="row">
          {row.question}
        </TableCell>
        <TableCell>
          <IconButton
            // aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={1}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <p>{row.answer}</p>
              {/* <Typography gutterBottom component="div">
                History
              </Typography> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData(
    "What IS a mechanical keyboard?",
    "Mechanical keyboards use tiny mechanical devices containing sliders and spring mechanisms, called switches, beneath each key to provide the typist with palpable feedback. The sensation is similar to electrical typewriters of the 90’s and can differ depending on the type of switch used. Cheap, or off-the-mill keyboards often use rubber domes to provide some sort of feedback. "
  ),
  createData("Why should I get a mechanical keyboard?", ""),
  createData("Why should I use KeebWorld?", ""),
  createData(
    "I’ve never built a mechanical keyboard before. How do I get started?",
    ""
  ),
  createData("How does KeebWorld’s compatibility checker work?", ""),
  createData("How often does KeebWorld update its products and prices?", ""),
  createData("I think I found an issue with KeebWorld. How can I help?", ""),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.question} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
