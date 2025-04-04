import { Checkbox, Typography } from '@mui/material';
import Link from 'next/link';

interface CheckboxProps {
  name: string;
  color?: string;
  [key: string]: any;
}

export const ElCheckbox: React.FC<CheckboxProps> = ({
  name,
  color,
  fontSize,
  ...props
}) => {
  return (
    <Checkbox
      name={name}
      data-testid="ele-checkbox"
      sx={{
        color: color,
        m: 0,
        px: 0,
        '&.Mui-checked': {
          color: color
        },
        '& .MuiSvgIcon-root': { fontSize: fontSize }
      }}
    />
  );
};
