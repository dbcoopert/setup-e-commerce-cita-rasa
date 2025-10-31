function Navbar() {
  return (
    <nav className="bg-orange-600 text-white p-4 shadow-md flex justify-between">
      <h1 className="font-bold text-lg">PT. Cita Rasa Nusantara</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-200">
          Produk
        </a>
        <a href="#" className="hover:text-gray-200">
          Keranjang
        </a>
        <a href="#" className="hover:text-gray-200">
          Admin
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
