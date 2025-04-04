import { Typography } from '@mui/material';

interface TypographyProps {
  name?: string;
  variant: string;
  color?: string;
  content: string;
  fontWeight?: string;
  [key: string]: any;
}

export const ElTypography: React.FC<TypographyProps> = ({
  name,
  variant,
  color,
  content,
  fontWeight,
  ...props
}: any) => {
  return (
    <Typography
      name={name}
      variant={variant}
      sx={{ color: color, align: 'center', fontWeight: fontWeight }}
      {...props}
    >
      {content}
    </Typography>
  );
};
