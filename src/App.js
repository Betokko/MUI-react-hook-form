import React from 'react';
import './App.css';
import { Controller, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material'

function App() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
  };

 const UITextField = ({ label, name }) => {
   return (
      <Controller
        control={control}
        name={name}
        defaultValue=''
        rules={{ 
          required: 'Обязательное поле', 
          minLength: { value: 2, message: 'Поле должно содержать не менее 2 символов' }, 
          maxLength: { value: 10, message: 'Поле должно содержать не более 10 символов' },
        }}
        render={({ field, fieldState, formState }) => 
          <TextField
            label={label}
            onChange={evt => { field.onChange(evt) }}
            value={field.value}
            error={fieldState.error}
            helperText={formState.errors[name]?.message}
          />
        }
      />
   )
 }
 

  return (
    <div className="App">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <UITextField
            name='firstName'
            label='Имя*'
          />
          <UITextField
            name='lastName'
            label='Фамилия*'
            />
          <Button variant='contained' type='submit' >Отправить</Button>
        </form>
    </div>
  );
}

export default App;
