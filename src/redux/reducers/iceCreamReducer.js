import pic1 from '../../images/ice-cream/2.jpg';
import pic2 from '../../images/Belgian Waffles/3516_0b.jpg';
import pic3 from '../../images/ice-cream/5.webp';
import pic4 from '../../images/Belgian Waffles/קפוצינו-41.jpeg';
import pic5 from '../../images/ice-cream/4.jpg';
import pic6 from '../../images/ice cream cake/5.jpg';
import pic7 from '../../images/ice cream cake/7.jpg';
import pic8 from '../../images/ice cream cake/11.jpg';
import pic9 from '../../images/ice-cream/icecream_recipe.jpg';
import pic10 from '../../images/ice cream cake/10.png';
import pic11 from '../../images/Belgian Waffles/3a2faaa2-2108-11ec-9601-f271353b6c2c__________.webp';
import pic12 from '../../images/Belgian Waffles/FIL_6395722_637484669825365741.jpg';
import pic13 from '../../images/frozen/-q2kun2phyhba494xpb8af8kc6685nbqzx5erg2cbrc (1).jpg';
import pic14 from '../../images/frozen/יוגורט.jpg';
import pic15 from '../../images/frozen/frozen_yogurt_powder-1.jpg';
const iceCreams = [
    {
        id: 1,
        name: 'vanilla ice cream',
        qty: 5,
        image: pic1,
        price: 18,
        description: 'Italian vanilla ice cream in a glass',
    },
    {
        id: 2,
        name: 'Colorful ice cream ',
        qty: 30,
        image: pic9,
        price: 48,
        description: 'Colorful ice cream balls with syrup',
    },
 

    {
        id: 3,
        name: 'Cookies ice cream',
        qty: 26,
        image: pic3,
        price: 25,
        description: 'Maeshmelo ice cream in a glass',
    },
   
    {
        id: 4,
        name: 'Strawberry ice cream',
        qty: 70,
        image: pic5,
        price: 17,
        description: 'Strawberry ice cream in a glass',
    },
    {
        id: 5,
        name: 'Strawberry ice cream',
        qty: 20,
        image: pic6,
        price: 33,
        description: 'Strawberry ice cream with strawberry crackers in a glass',
    },
    {
        id: 6,
        name: 'Mango ice cream',
        qty: 36,
        image: pic7,
        price: 40,
        description: 'Mango ice cream in a glass',
    },
    {
        id: 7,
        name: 'Chocolate ice cream ',
        qty: 20,
        image: pic8,
        price: 25,
        description: 'A scoop of chocolate ice cream with syrup',
    },

    {
        id: 8,
        name: 'Mango ice cream ',
        qty: 36,
        image: pic10,
        price: 32,
        description: 'Mango ice cream scoop',
    },
        {
        id: 9,
        name: 'Soko ice cream',
        qty: 80,
        image: pic2,
        price: 20,
        description: 'Soko ice cream in a glass',
    },
       {
        id:10,
        name: 'Colorful ice cream',
        qty: 50,
        image: pic4,
        price: 60,
        description: 'Colorful ice cream in a glass',
    },
    {
        id: 11,
        name: 'Colorful ice cream',
        qty: 50,
        image: pic11,
        price: 60,
        description: 'Colorful ice cream in a glass',
    },
    {
        id: 12,
        name: 'Colorful ice cream',
        qty: 50,
        image: pic12,
        price: 60,
        description: 'Colorful ice cream in a glass',
    },
    {
        id: 13,
        name: 'Colorful ice cream',
        qty: 50,
        image: pic13,
        price: 60,
        description: 'Colorful ice cream in a glass',
    },
    {
        id: 14,
        name: 'Colorful ice cream',
        qty: 50,
        image: pic14,
        price: 60,
        description: 'Colorful ice cream in a glass',
    },
    {
        id: 15,
        name: 'Colorful ice cream',
        qty: 50,
        image: pic15,
        price: 60,
        description: 'Colorful ice cream in a glass',
    },
]
const iceCreamReducer = (state = iceCreams, action) => {
    switch (action.type) {
        case "ADD_ICE_CREAM_QTY":
            {
                const newIceCreams = [...state]
                newIceCreams[action.product].qty += 1
                return newIceCreams
            }
        case "DECREASE_ICE_CREAM_QTY":
            {
                debugger
                const newIceCreams = [...state]
                if(newIceCreams.find((carriage)=> carriage.id===action.id).qty===0)
                {
                    alert('Out of Stock')
                }
                if(newIceCreams.find((carriage)=> carriage.id===action.id).qty<5)
                {
                    alert('Low in Stock')
                }
                newIceCreams.find((carriage)=> carriage.id===action.id).qty-=1;
                return newIceCreams
            }
        default:
            return state
        

}
}
export default iceCreamReducer

