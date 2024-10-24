import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import AddButton from './addButton';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/logo.png"
              alt="Task Manager Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              Task Manager
            </Typography>
          </Link>
          <AddButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
