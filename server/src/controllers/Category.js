import { CategoryCreateModel,CategoryGetModel,CategoryUpdateModel } from "../models/Category.js"



export async function CategoryCreateController (req, res) {
    try {
      const {name}= req.body
  
      const {newCategory} = await CategoryCreateModel({name})
  
      res.json({ newCategory })
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }
export async function CategoryGetController (req, res) {
    try {
      let limit=req.query?.limit
      limit=(limit==undefined)?0:limit
      const {category} = await CategoryGetModel({limit})
  
      res.json({ category })
    } catch (error) {
      res.status(301).json({error:'error'})
    }
  }

export async function CategoryUpdateController (req, res) {
    try {
      const {id,name}= req.body
  
      const {category} = await CategoryUpdateModel({id,name})
  
      res.json({ category })
    } catch (error) {
      res.status(300).send('ERROR')
    }
  }