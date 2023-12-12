import React from 'react';
import { useForm } from "react-hook-form"
import { Button, Stack, TextField, Typography ,Box, } from '@mui/material'

export default function Connexion() {
  const {handleSubmit, register, formState: { errors }} = useForm();
  const onSubmit = (data) => { 
    if(data.motdepasse ) {alert("les mots de passe ne sont pas identiques")}
  };
  return (
    <Stack>
      <Box>
      <form style={{marginTop:7}}
      onSubmit={handleSubmit(onSubmit)}>

    <TextField id="filled-basic"
       label="Veuillez saisir votre adresse mail"
       variant="outlined"
       fullWidth
       size='small'
       type='email'
       {...register("mail utilisateur", {required : "veuillez saisir votre nom" , minLenght:{
        value:5, message:" veuillez saisir une adresse mail de plus de 5 caracteres"
       }})}
       />

    <TextField id="filled-basic"
       label="Veuillez saisir votre mot de passe"
       variant="outlined"
       fullWidth
       size='small'
       type='password'
       {...register("motdepasse", { required:"veuillez entrer un mot de passe",
       pattern: /^[A-Za-z]+$/i  ,
      minLenght: { value:8, message: "veuillez entrer un mot de passe de minimum 8 caracter"}})}
       
       />
       <Button variant="contained"> connexion </Button>
       <Button href="./inscription"> S INSCRIRE </Button>
          </form>
        </Box>
       </Stack>
    
  )
}

