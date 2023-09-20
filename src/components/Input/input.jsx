// import * as React from 'react';
// import { FormControl, useFormControlContext } from '@mui/base/FormControl';
// import { Input, inputClasses } from '@mui/base/Input';
// import { styled } from '@mui/system';
// import clsx from 'clsx';

// export function BasicFormControl(props) {
//   return (
//     <FormControl defaultValue="" required>
//       <Label>{props.name}</Label>
//       <StyledInput placeholder={props.value}/>
//     </FormControl>
//   );
// }

// const StyledInput = styled(Input)(
//   ({ theme }) => `

//   .${inputClasses.input} {
//     width: 100%;
//     margin: 10px;
//     font-size: 1rem;
//     font-family: IBM Plex Sans, sans-serif;
//     font-weight: 400;
//     line-height: 2;
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//     border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
//     padding: 8px 12px;
//     border-radius: 8px;

//     &:hover {
//       background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
//       border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//     }

//     &:focus {
//       outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
//     }
//   }
// `,
// );

// const Label = styled(({ children, className }) => {
//   const formControlContext = useFormControlContext();
//   const [dirty, setDirty] = React.useState(false);

//   React.useEffect(() => {
//     if (formControlContext?.filled) {
//       setDirty(true);
//     }
//   }, [formControlContext]);

//   if (formControlContext === undefined) {
//     return <p>{children}</p>;
//   }

//   const { error, required, filled } = formControlContext;
//   const showRequiredError = dirty && required && !filled;

//   return (
//     <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
//       {children}
//     </p>
//   );
// })`
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 1.5rem;
//   margin-left: 10px;
//   margin-top: 15px;

// `;



// const blue = {
//   100: '#DAECFF',
//   200: '#80BFFF',
//   400: '#3399FF',
//   600: '#0072E5',
// };

// const grey = {
//   50: '#F3F6F9',
//   100: '#E7EBF0',
//   200: '#E0E3E7',
//   300: '#CDD2D7',
//   400: '#B2BAC2',
//   500: '#A0AAB4',
//   600: '#6F7E8C',
//   700: '#3E5060',
//   800: '#2D3843',
//   900: '#1A2027',
// };




import * as React from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export function MinHeightTextarea(props) {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 95%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const Show = () => {
    return (
     <button>Save</button>
    )
  };

  return (
    <>
      <h1 className='mx-20px'>{props.name}</h1>
      <StyledTextarea onChange={Show}
      aria-label="minimum height"
      minRows={2} 
      maxRows={2}
      placeholder={props.value}
    />
    </>
  );
}