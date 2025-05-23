import styled from "styled-components"

export const CartCheckOutItemContainer = styled.div`
	width: 100%;
	height: 80px;
	margin-bottom: 95px;
	margin-top: 10px;
	border-top: 1px solid black;
`
export const CartCheckOutItemDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	place-items: center;
	padding: 10px 20px;
`

export const CartCheckOutItemImg = styled.img`
	width: 100px;
`

export const CartCheckOutName = styled.span`
	font-size: 16px;
`

export const CartCheckOutQuantityContainer = styled.span``
export const CartCheckOutQuantity = styled.span`
	margin: 8px;
`
export const CartCheckOutItemChevronButton = styled.button`
	cursor: pointer;
	border: none;
	background-color: transparent;
`
export const CartCheckOutRemoveButton = styled.button`
	cursor: pointer;
	border: none;
	background-color: transparent;
`
