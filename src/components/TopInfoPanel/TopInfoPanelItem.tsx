import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TopInfoPanelItemProps {
  icon?: ReactNode;
  title: ReactNode;
  children: ReactNode;
  hideIcon?: boolean;
  variant?: 'light' | 'dark' | undefined; // default dark
}

export const TopInfoPanelItem = ({
  icon,
  title,
  children,
  hideIcon,
  variant = 'dark',
}: TopInfoPanelItemProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {!hideIcon && !icon && (
        <Box
          sx={{
            border: '1px solid rgba(250, 251, 252, 0.12)',
            borderRadius: '12px',
            bgcolor: '#2C2D3F',
            width: 42,
            height: 42,
            mr: 3,
          }}
        />
      )}

      {!hideIcon && icon && (
        <SvgIcon fontSize="medium" sx={{ width: 42, height: 42, mr: 3 }}>
          {icon}
        </SvgIcon>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ color: variant === 'dark' ? '#FFFFFFB2' : '#47617F' }} component="div">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};