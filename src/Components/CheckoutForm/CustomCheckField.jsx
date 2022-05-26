import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6} className="input">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField fullWidth label={label} required={required} />
        )}
      />
    </Grid>
  );
}

export default FormInput;

// Update as of 4/26/2021: Controller now requires a render prop for react-hook-form.
// update your controller in the CustomTextField.jsx to:

// import React from "react";
// import { TextField, Grid } from "@material-ui/core";
// import { useFormContext, Controller } from "react-hook-form";
// const FormInput = ({ name, label, required }) => {
//   const { control } = useFormContext();
//   return (
//     <Grid item xs={12} sm={6}>
//       <Controller
//         control={control}
//         name={name}
//         render={({ field }) => (
//           <TextField fullWidth label={label} required={required} />
//         )}
//       />
//     </Grid>
//   );
// };
