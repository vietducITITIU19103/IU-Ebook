import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TextLink from '@/sections/auth/components/text-link';
import { useResponsive } from '@/hooks/use-responsive';
import EnhancedTableHead from './cart-table/enhanced-table';
import { useTable } from './cart-table/use-table';
import { Order, Data } from './cart-table/cart-table-type';
import { TabletItemLayout, MobileItemLayout, DiscountChip, TableCellMD } from './cart-table/custom-component';
import { ThemeContext } from '@/theme';
import { useContext } from 'react';


function createData(
  id: number,
  name: string,
  price: number,
  discountRate: number,
  date: string,
): Data {
  return {
    id,
    name,
    price,
    discountRate,
    date,
  };
}

const rows = [
  createData(1, 'Giáo trình Kế toán Tài chính - Phần I ', 70000, 50, "20/10/2024"),
  createData(2, 'Giáo trình Kế toán Tài chính - Phần II ', 60000, 60, "20/10/2024"),
];



export default function CartTable() {
  const {
    dense,
    order,
    orderBy,
    handleSelectAllClick,
    handleRequestSort,
    selected,
    visibleRows,
    isSelected,
    handleClick,
    emptyRows
  } = useTable(rows)
  const mddown = useResponsive("down", "md")
  const { palette: {iub: {text, background, line}} } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        width: '100%',
        // #D8DBDF
        border: { xs: "none", md: `1px solid ${line.default} !important` },
        borderRadius: { xs: "0", md: "12px" },
        backgroundColor: "iub.background.default"
      }}>
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const isItemSelected = isSelected(row.id);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{ cursor: 'pointer', borderBottom: { xs: "2px solid #F5F5FA", md: "none" } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                    sx={{ color: "iub.text.main", fontWeight: 600, display: { xs: "table-cell", sm: "none" }, py: "8px" }}
                  >
                    <MobileItemLayout
                      name={row.name}
                      date={row.date}
                      discountRate={row.discountRate}
                      price={row.price}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                    sx={{ color: "iub.text.main", fontWeight: 600, display: { xs: "none", sm: "table-cell", md: "none" }, py: "8px" }}
                  >
                    <TabletItemLayout
                      name={row.name}
                      date={row.date}
                      discountRate={row.discountRate}
                      price={row.price}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                    sx={{ color: "iub.text.main", fontWeight: 600, display: { xs: "none", md: "table-cell" } }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCellMD align="left">{row.price}đ</TableCellMD>
                  <TableCellMD align="left">
                    <DiscountChip discountRate={row.discountRate} />
                  </TableCellMD>
                  <TableCellMD>{row.date}</TableCellMD>
                  <TableCell align={mddown ? "right" : 'left'} sx={{ color: "iub.text.main" }}><TextLink label='Xoá' href="/" sx={{ color: "#D92D20", textDecoration: "underline", fontWeight: 400 }} /></TableCell>
                </TableRow>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số dòng trên trang"
      /> */}
    </Box>
  );
}