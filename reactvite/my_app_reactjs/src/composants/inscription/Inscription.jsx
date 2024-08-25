import { Button, Stack, TextField, Typography ,Box, } from '@mui/material'
import React from 'react'
import './inscription.css'
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast'
import axios  from 'axios'
import { useNavigate} from "react-router-dom";


export default function Inscription() {
  const navigate =useNavigate();
  const {handleSubmit, register, formState: { errors },} = useForm();
  const onSubmit = (data) => { 
    if(data.motdepasse !== data.confirationdumotdepasse ) {toast.error("les mots de passe ne sont pas identiques");
  } else { axios.post("http://localhost:5173/utilisateurs",data).then((res) => {
    console.log(res);
    toast.success("inscription reussie.");})
    .catch((err) => {
      console.log(err);
      toast.error("une erreur est survenue");
  })}};
  return (
    <Stack>
      <Box>
      <Typography
      variant="h6">Inscription</Typography>

      <form style={{marginTop:7}}
      onSubmit={handleSubmit(onSubmit)}>
      
        <Stack direction={"column"}
        gap={2}>
      <TextField id="filled-basic"
       label="Veuillez saisir votre nom et prenom"
       variant="outlined"
       fullWidth
       size='small'
       {...register("nom utilisateur", {required : "veuillez saisir votre nom" , minLenght:{
        value:2, message:" veuillez saisir un nom de plus de 2 caracteres"
       }})}
       
       />
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

       <TextField id="filled-basic"
       label="Veuillez confirmer votre mot de passe"
       variant="outlined"
       fullWidth
       size='small'
       type='password'
       {...register("confirationdumotdepasse", { required:"veuillez confirmer votre mot de passe",pattern: /^[A-Za-z]+$/i  ,
      minLenght: { value:8, message: "veuillez entrer un mot de passe de minimum 8 caracter"}})}
       
       
       />
       
       </Stack>

       <Button variant="contained" type="submit" > Inscription</Button>
      
       <Button href="./connexion"> SE CONNECTER </Button>
      
      
      </form>
      </Box>
     
      
    </Stack>
   
    
      
  )
}


