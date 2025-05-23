window.onload = () => {
  const marketplaceData = [
    {
      sellerId: "s001",
      sellerName: "TechZone",
      orders: [
        {
          orderId: "o1001",
          customer: { id: "c001", name: "Alice" },
          items: [
            {
              productId: "p100",
              title: "Laptop Pro",
              variant: { sku: "LP-13-8GB", price: 1500 },
              quantity: 1
            },
            {
              productId: "p101",
              title: "Mouse Pad",
              variant: { sku: "MP-XL", price: 20 },
              quantity: 2
            }
          ]
        }
      ]
    }
  ];

  // Mostrar dataset original
  document.getElementById("dataset").textContent = JSON.stringify(marketplaceData, null, 2);

  // Ejercicio pendiente por resolver: resultado vacío
const result = marketplaceData.map(seller => ({
    ...seller,
    orders: seller.orders.map(order =>({
      ...order,
      items: order.items.map(item => ({
        ...item,
        variant: {
          ...item.variant,
          //price: "$" + item.variant.price
          price: `$${item.variant.price}`,        
        },
        subtotal: `$${item.variant.price * item.quantity}`,
      }))
    }))
  }));

  // Mostrar resultado
  document.getElementById("output").textContent = JSON.stringify(result, null, 2);
};