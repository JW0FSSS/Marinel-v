import { ProducAllModel, ProducCreateModel, ProducIdModel, ProducNameModel, ProducUpdateModel } from "../models/Product.js"


export async function ProductIdController (req, res) {
  try {
    const {id}= req.body

    const {product} = await ProducIdModel({id})

    res.json({ product })
  } catch (error) {
    res.status(300).send('ERROR')
  }
}

export async function ProductNameController (req, res) {
  try {
    const {name}= req.body

    const {product} = await ProducNameModel({name})

    res.json({ product })
  } catch (error) {
    res.status(300).send('ERROR')
  }
}

export async function ProductAllController (req, res) {
  try {
    let limit=req.query?.limit
    limit=(limit==undefined)?0:limit
    const {product} = await ProducAllModel({limit})

    res.json({ product })
  } catch (error) {
    res.status(300).send('ERROR')
  }
}

export async function ProductCreateController (req, res) {
  console.log('dasdsadasd');
  try {
  
    const {name,description,quantity,price,image,category}= req.body
    
    const {product} = await ProducCreateModel({name,description,quantity,price,image,category})

    res.json({ product })
  } catch (error) {
    res.status(300).send('ERROR')
  }
}

export async function ProductUpdateController (req, res) {
  try {
    const {id,name,description,quantity,price,image,category}= req.body

    const {product} = await ProducUpdateModel({id,name,description,quantity,price,image,category})

    res.json({ product })
  } catch (error) {
    res.status(300).send('ERROR')
  }
}