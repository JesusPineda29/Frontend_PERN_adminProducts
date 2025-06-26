import { safeParse, number, parse, string, transform, pipe } from "valibot";
import { DraftProductSchema, ProductSchema, ProductsSchema, type Product } from "../types"
import axios from "axios";
import { toBoolean } from "../utils";



type ProductData = {
    [k: string]: FormDataEntryValue;
}


export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/products`;
            await axios.post(url, { name: result.output.name, price: result.output.price, availability: true });
        } else {
            throw new Error('Datos no válidos')
        }
    } catch (error) {
        console.log(error)
    }
}


export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductsSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Hubo un error...');
        }
    } catch (error) {
        console.log(error);
    }
}


export async function getProductsById(id: Product['id']) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error('Hubo un error...');
        }
    } catch (error) {
        console.log(error);
    }
}


export async function updateProduct(data: ProductData, id: Product['id']) {
    try {
        //Este es el schema ya listo
        const NumberSchema = pipe(string(), transform(Number), number());
        const result = safeParse(ProductSchema, {
            id,
            name: data.name,
            price: parse(NumberSchema, data.price),
            availability: toBoolean(data.availability.toString())
        })
    } catch (error) {
        console.log(error);
    }
}