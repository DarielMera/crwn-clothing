import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../../product-card/product-card.component"

import { CategoriesContext } from "../../../context/categories.context"

import {CategoryContainer, CategoryTitle} from "./category.styles"

const Category = () => {
	const { category } = useParams()
	const { categoriesMap } = useContext(CategoriesContext)
	const [products, setProducts] = useState(categoriesMap[category])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap])

	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>

			<CategoryContainer>
				{products && products.map(product => <ProductCard key={product.id} product={product} />)}
			</CategoryContainer>
		</Fragment>
	)
}

export default Category
