class Product{
    constructor(productId,name,price){
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
    totalPrice(quantity){
        return this.price * quantity;
    }
}
class PersonalCareProduct extends Product {
    constructor(productId,name,price,warrantyPeriod){
        super(productId,name,price);
        this.warrantyPeriod = warrantyPeriod;
    }
    totalPrice(quantity){
        const totalPrice = super.totalPrice(quantity)
        return totalPrice + this.warrantyPeriod;
    }

}
const personalCareProduct = new PersonalCareProduct (1, 'shoe',1000,3);
const totalPrice = personalCareProduct.totalPrice(4);

console.log(`Total price : ${totalPrice}`);