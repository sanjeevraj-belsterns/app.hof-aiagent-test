'use client';

import Loading from '@/app/frontend/components/loading/loading';
import { Button, CircularProgress } from '@mui/material';

interface ButtonProps {
  name: string;
  variant: string;
  color?: string;
  content: string;
  disabledCondition?: boolean;
  isLoading?: boolean;
  [key: string]: any;
}

export const ElButton: React.FC<ButtonProps> = ({
  name,
  variant,
  disabledCondition,
  content,
  isLoading,
  ...props
}: any) => {
  return (
    <Button
      fullWidth
      name={name}
      variant={variant}
      disabled={disabledCondition}
      sx={{
        backgroundColor: disabledCondition
          ? 'rgba(0, 0, 0, 0.12) !important'
          : 'lime !important',
        textTransform: 'uppercase',
        borderRadius: '1vh',
        my: 2
      }}
      {...props}
    >
      {isLoading ? <Loading /> : content}
    </Button>
  );
};
