import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalForm from "./ModalForm";
import { Box, Button } from "@mui/material";
import { RaceBy } from "@uiball/loaders";

export default function TableOp({ infoTable, delTable }) {
  return (
    <Box sx={{ p: 10 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Descripcion</TableCell>
              <TableCell align="center">Monto</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Tipo</TableCell>
              <TableCell align="center">Usuario</TableCell>
              <TableCell align="center">Accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infoTable ? (
              infoTable.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.description}
                  </TableCell>
                  <TableCell align="center">${row.amount}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.types.name}</TableCell>
                  <TableCell align="center">{row.users.name}</TableCell>
                  <TableCell align="center">
                    <Button
                      sx={{ color: "red" }}
                      onClick={() => {
                        delTable(row.id);
                      }}
                    >
                      Eliminar
                    </Button>

                    <ModalForm row={row} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Esperando datos...
                  <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
