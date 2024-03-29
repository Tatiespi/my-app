import { useState } from 'react'
import { AddCategory} from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Zodiac'])

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }
        return (
            <>
                <h1>GifExpert</h1>
                <AddCategory onAddCategory={onAddCategory} />
                {
                    categories.map(
                        (category, key) => {
                            return <GifGrid category={category} key={key} />
                        }
                    )
                }
            </>
        )
    }