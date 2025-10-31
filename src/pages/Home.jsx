import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-700">Menu Kami</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white shadow rounded-lg p-3">
            <img src={p.image_url} alt={p.name} className="rounded-lg mb-2" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>
            <p className="text-orange-600 font-bold mt-2">Rp {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
