/* export type Invoice = {
        ifu: String,
        type: String,
        items: [
            {
                name: String,
                price: Number,
                quantity: Number,
                taxGroup: String
            },
            {
                name: String,
                price: Number,
                quantity: Number,
                taxGroup: String
            }
        ],
        client: {
            contact: String,
            ifu: String,
            name: String,
            address:String
        },
        operator: {
            id: String,
            name: String
        },
        payment: [
            {
                name: String,
                amount: Number
            }
        ]
    
} */


// InvoiceModel.ts

interface InvoiceItem {
    name: string;
    price: number;
    quantity: number;
    taxGroup: string;
  }
  
  interface Client {
    contact: string;
    ifu: string;
    name: string;
    address: string;
  }
  
  interface Operator {
    id: string;
    name: string;
  }
  
  interface Payment {
    name: string;
    amount: number;
  }
  
  interface InvoiceData {
    ifu: string;
    type: string;
    items: InvoiceItem[];
    client: Client;
    operator?: Operator;
    payment: Payment[];
  }
  
  export type { InvoiceData, InvoiceItem, Client, Operator, Payment };
  