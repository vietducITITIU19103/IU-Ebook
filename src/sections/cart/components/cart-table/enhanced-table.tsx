import * as React from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import DeleteIcon from '@/assets/icons/table/delete-icon';
import { useResponsive } from '@/hooks/use-responsive';
import { Order, Data } from './cart-table-type';
import { ThemeContext } from '@/theme';
import { useContext } from 'react';

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export default function EnhancedTableHead({ onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }: EnhancedTableProps ) {
    const { palette: { iub: { text, background } } } = useContext(ThemeContext);
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };
    const mddown = useResponsive("down", "md")
    const headCells: readonly HeadCell[] = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: `Tất cả (${rowCount} sản phẩm)`,
        },
        {
            id: 'price',
            numeric: false,
            disablePadding: false,
            label: 'Đơn giá',
        },
        {
            id: 'discountRate',
            numeric: false,
            disablePadding: false,
            label: 'Khuyến mãi',
        },
        {
            id: 'date',
            numeric: false,
            disablePadding: false,
            label: 'Ngày',
        },
    
    ];
    
    const headCellsMobile: readonly HeadCell[] = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: `Tất cả (${rowCount} sản phẩm)`,
        },
    
    ];
    const data = mddown ? headCellsMobile : headCells
    return (
        <TableHead>
            <TableRow sx={{ borderBottom: { xs: `8px solid ${background.body}`, md: "none" } }}>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {data.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ color: text.table_title, fontWeight: 600 }}
                    >


                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>


                    </TableCell>

                ))}
                <TableCell align={mddown ? "right" : 'left'}>
                    <DeleteIcon />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}