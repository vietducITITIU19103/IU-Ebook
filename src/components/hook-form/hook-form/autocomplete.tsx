import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses, AutocompleteProps } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import Typography from '@mui/material/Typography';
import { useFormContext, Controller } from 'react-hook-form';
import { countries } from '@/assets/data/countries';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FlagCdn from '../flag/flag-cdn';

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };
  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle} key={index}>
      {`${dataSet[1]}`}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: number) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData: React.ReactElement[] = [];
  (children as React.ReactElement[]).forEach((item: React.ReactElement & { children?: React.ReactElement[] }) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactElement) => {
    if (child.hasOwnProperty('group')) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index: number) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

const TextFieldStyle = {
  '& .MuiInputBase-input': {
    paddingTop: '8px',
    paddingBottom: '8px',
    height: '29px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '6px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRight: 'none',
  },
  '& .MuiOutlinedInput-root': {
    paddingTop: 0,
    paddingBottom: 0,
    '& fieldset': {
      borderColor: '#D0D5DD',
    },
    '&:hover fieldset': {
      borderColor: '#006B5B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#006B5B',
      boxShadow: "0 0 2px 2px rgba(0, 107, 91, 0.3)"
    },
  },
};

type Props = {
  name: string;
};

export default function AutoComplete({ name }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          sx={{ width: 180 }}
          options={countries}
          getOptionLabel={(option) => {
            return option.phone;
          }}
          renderOption={(props, option) => {
            return (
              <Stack direction="row" alignItems="center" gap="8px" component="li" {...props}>
                <FlagCdn _width="18px" country_code={option.code} />
                {option.phone}
              </Stack>
            );
          }}
          defaultValue={countries[0]}
          renderInput={(params) => <TextField {...params} sx={{ ...TextFieldStyle }} />}
          onChange={(e, value) => field.onChange(value?.phone)}
        />
      )}
    />
  );
}
