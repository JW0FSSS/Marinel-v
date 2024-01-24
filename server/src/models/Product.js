import { Product } from "../schemas/product.js";


    export async function ProducIdModel({id}) {
        try {
            const product = await Product.findById({_id:id})
            return {product}
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }

    export async function ProducNameModel({name}) {
        try {
            const product = await Product.findOne({name})
            return {product}
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }
    export async function ProducAllModel({limit}) {
        try {
            const product = await Product.find({}).limit(limit).populate('category')
            return {product}
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }
    export async function ProducCreateModel({name,description,quantity,price,image,category}) {
        try {
            console.log(name)
            const product = await Product.findOne({name}) 

            if (product) return {error:'Producto existente'}

            const newProduct= new Product({
                name,
                description,
                category,
                image,
                quantity,
                price,
            })
            console.log(newProduct);
            await newProduct.save()
            return {newProduct}
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }

    export async function ProducUpdateModel({id,name,description,quantity,price,image,category}) {
        try {
            const product = await Product.findById({_id:id}) 

            if (!product) return {error:'producto no encontrado'}
            
            const newQuantity=quantity+product.quantity

            product.name=name 
            product.description=description 
            product.category=category 
            product.image=image 
            product.quantity=newQuantity 
            product.price=price 

            await product.save()
            return {product}
        } catch (error) {
            return {error:`error: ${error}`}
        }
        
    }
    

     



