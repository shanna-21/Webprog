import { Box, BoxProps } from '@mui/material';
import { Icon, IconProps } from '@iconify/react';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

interface IconifyProps extends BoxProps {
  icon: IconProps['icon'];
}

const IconifyIcon = ({ icon, ...rest }: IconifyProps) => {
  return <Box component={Icon} icon={icon} {...rest} />;
};

export default IconifyIcon;
