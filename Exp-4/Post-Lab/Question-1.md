Commonly Used Material-UI Components and How to Use Them

1. Button:
   - Use the <Button> component to create buttons.
   - Example:
     ```jsx
     import Button from '@mui/material/Button';

     <Button variant="contained" color="primary">
       Click Me
     </Button>
     ```

2. TextField:
   - The <TextField> component is for text input fields.
   - Example:
     ```jsx
     import TextField from '@mui/material/TextField';

     <TextField label="Username" variant="outlined" />
     ```

3. Typography:
   - <Typography> is used for displaying text with various styles.
   - Example:
     ```jsx
     import Typography from '@mui/material/Typography';

     <Typography variant="h6" color="primary">
       Welcome to Material-UI
     </Typography>
     ```

4. Container:
   - The <Container> component is used for layout and spacing.
   - Example:
     ```jsx
     import Container from '@mui/material/Container';

     <Container maxWidth="md">
       Content goes here
     </Container>
     ```

5. Grid:
   - Use the <Grid> component for grid-based layouts.
   - Example:
     ```jsx
     import Grid from '@mui/material/Grid';

     <Grid container spacing={3}>
       <Grid item xs={12} sm={6}>
         Left Column
       </Grid>
       <Grid item xs={12} sm={6}>
         Right Column
       </Grid>
     </Grid>
     ```

6. AppBar:
   - The <AppBar> component creates a top app bar for navigation.
   - Example:
     ```jsx
     import AppBar from '@mui/material/AppBar';

     <AppBar position="static">
       Navigation Bar
     </AppBar>
     ```

7. Drawer:
   - Use the <Drawer> component for side navigation drawers.
   - Example:
     ```jsx
     import Drawer from '@mui/material/Drawer';

     <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
       Drawer content
     </Drawer>
     ```

These are just a few commonly used Material-UI components. Material-UI offers a wide range of components for building modern, responsive, and attractive user interfaces in React applications.
