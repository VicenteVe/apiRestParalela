import db from "../database"
import vote from "../models/votes"


export const votar = (req,res) =>{
    console.log(req.body)
    res.json("Ruta de votacion")
}

export const getCourses = (req,res) =>{
    res.json('Ver todos los cursos')
}
export const getResults = (req,res) =>{
    res.json('Ver votacion de todas las secciones')
}

export const getResultsById = (req,res) =>{
    res.json('Ver votacion de una seccion por token')
}