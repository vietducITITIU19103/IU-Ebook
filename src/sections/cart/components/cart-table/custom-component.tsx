import { styled } from '@mui/material/styles';
import LoginBg from '@/assets/icons/login-bg';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { typography } from '@/theme/typography';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { DateText, SubtitleText, SubDesText, NameText } from "../../_common/custom-typo"

const TableCellMD = styled(TableCell)<TypographyProps>(({ theme }) => ({
    color: "iub.text.main",
    display: "table-cell",
    [theme.breakpoints.down("md")]: {
    display: "none"
}
}));

const DiscountChip = ({ discountRate }: { discountRate: number }) => (
    <Chip
        size="small"
        sx={{
            borderRadius: "8px",
            border: "1px solid #039855",
            background: "#D6FFEC",
            color: "#039855",
            padding: "3px !important",
            fontWeight: 600
        }}
        label={`${discountRate}%`} />
)

const MobileItemLayout = ({ name, discountRate, date, price }: { price: number, date: string, discountRate: number, name: string; }) => (
    <Stack>
        <Stack spacing="8px">
            <NameText>{name}</NameText>
        </Stack>
        <Stack direction="row" spacing="8px">
            <SubtitleText sx={{color: "iub.text.table_text"}}>Đơn giá</SubtitleText>
            <SubDesText sx={{color: "iub.text.light"}}>{price}đ</SubDesText>
        </Stack>
        <Stack direction="row" spacing="8px">
            <SubtitleText sx={{color: "iub.text.table_text"}}>Khuyến mãi</SubtitleText>
            <SubDesText>
                <DiscountChip discountRate={discountRate} />
            </SubDesText>
        </Stack>
        <DateText>{date}</DateText>
    </Stack>
)

const TabletItemLayout = ({ name, discountRate, date, price }: { price: number, date: string, discountRate: number, name: string; }) => (
    <Stack direction="row" justifyContent="space-between">
        <Stack spacing="8px">
            <NameText>{name}</NameText>
            <DateText>{date}</DateText>
        </Stack>
        <Stack spacing="8px">
            <SubtitleText sx={{color: "iub.text.table_text"}}>Đơn giá</SubtitleText>
            <SubDesText>{price}đ</SubDesText>
        </Stack>
        <Stack spacing="8px">
            <SubtitleText sx={{color: "iub.text.table_text"}}>Khuyến mãi</SubtitleText>
            <SubDesText>
                <DiscountChip discountRate={discountRate} />
            </SubDesText>
        </Stack>
    </Stack>
)

export { TabletItemLayout, MobileItemLayout, DiscountChip, TableCellMD }