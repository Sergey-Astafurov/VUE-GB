<!-- Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails". Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.

Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен иметь свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность продукта).

Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену продукта со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".

В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности.

Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->

<template >
    <div class="product">
        <div class="product__name">{{ product.name }}</div>
        <div class="product__price">{{formattedPrice}}</div>
        <div class="product__avail">{{ product.available ? 'Available' : 'Out of stock' }}</div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            product:

                {
                    name: 'Nike',
                    price: 199.99,
                    available: true

                }

        }
    },
    computed:{
        formattedPrice(){
            return '$'+ this.product.price
        }
    }
}
</script>
<style lang="scss">
    .product{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        font-size: 24px;
        font-family: sans-serif;
        padding: 30px;
        width: 400px;
        height: 300px;
        border: 3px solid skyblue;
        margin: 0 auto;
    }
    .product__avail{
        color: slateblue;
        font-weight: bold;
    }
</style>