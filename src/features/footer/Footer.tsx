import React from 'react';
import {
  Unstable_Grid2 as Grid,
  Typography,
  ThemeProvider,
  createTheme,
  useTheme
} from '@mui/material';

import Links from './Links';
import Logos from './Logos';
import SignUp from './SignUp';

const Footer: React.FC = () => {
  const theme = createTheme(useTheme(), {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            color: 'white'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ bgcolor: theme.palette.primary.main }}
        padding={3}
        spacing={1}
      >
        <Grid xs={12} sm={8} xl={6} xlOffset={1} order={{ xs: 1 }}>
          <Links />
        </Grid>
        <Grid xs={12} sm={4} xl={3} order={{ xs: 3, sm: 2 }}>
          <Logos />
        </Grid>
        <Grid xs={12} sm={8} xl={6} xlOffset={1} order={{ xs: 2, sm: 3 }}>
          <SignUp />
        </Grid>
        <Grid xs={12} order={{ xs: 4 }} className='flex-center'>
          <Typography marginTop={3}>
            © Ocado Group {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Footer;
