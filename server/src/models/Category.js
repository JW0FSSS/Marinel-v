import { Category } from "../schemas/category.js"


export async function CategoryCreateModel({name}) {
    try {
            const category = await Category.findOne({name})

            if (category) return {error:'categoria existente'}

            const newCategory= new Category({
                name
            })

            await newCategory.save()
            return {newCategory}
    } catch (error) {
        return {error:`error: ${error}`}
    }
    
}

export async function CategoryGetModel({limit}) {
    try {  
            const category = await Category.find({}).limit(limit)
            
            return {category}
    } catch (error) {
        return {error:`error: ${error}`}
    }
    
}

export async function CategoryUpdateModel({id,name}) {
    try {
            const category = await Category.findById({_id:id})

            if (!category) return {error:'categoria no existe'}

            category.name=name

            await category.save()

            return {category}
    } catch (error) {
        return {error:`error: ${error}`}
    }
    
}

