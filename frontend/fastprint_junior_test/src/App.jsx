import { useState } from 'react';

function App() {

  const [isAdd, setIsAdd] = useState(false);

  return (
    <div className='bg-gray-900 grid grid-cols-12 grid-rows-12 h-screen'>
      <div className="col-span-6 col-start-4 py-4 grid grid-cols-12 gap-10">
        <button type="button" className="border-2 bg-slate-300 rounded text-center text-gray-900 font-semibold py-2 px-2 cursor-pointer col-start-10 col-span-3 hover:bg-slate-900 hover:border-slate-300 hover:text-gray-50" onClick={() => { setIsAdd(!isAdd); }}>{ !isAdd ? "Tambah Produk" : "Batal Tambah Produk" }</button>
        { isAdd && (
          <form method="POST" className='col-span-12'>
            <div className="my-6">
                <h2 className="text-gray-50 text-center font-semibold text-3xl">Tambah Produk</h2>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="nama_produk" className='text-gray-50 col-span-4 font-semibold'>Nama Produk</label>
                  <input type="text" name="nama_produk" id="nama_produk" className='border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12' />
                </div>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="harga_produk" className='text-gray-50 col-span-4 font-semibold'>Harga Produk</label>
                  <input type="text" name="harga_produk" id="harga_produk" className='border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12' />
                </div>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="kategori_produk" className='text-gray-50 col-span-4 font-semibold'>Kategori</label>
                  <select name="kategori_produk" id="kategori_produk" className='border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12'>
                    <option value="1" className='bg-gray-900'>L QUEENLY</option>
                    <option value="2" className='bg-gray-900'>L MTH AKSESORIS (IM)</option>
                    <option value="3" className='bg-gray-900'>L MTH TABUNG (LK)</option>
                  </select>
                </div>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="status_produk" className='text-gray-50 col-span-4 font-semibold'>Status</label>
                  <select name="status_produk" id="status_produk" className='border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12'>
                    <option value="1" className='bg-gray-900'>Bisa Dijual</option>
                    <option value="2" className='bg-gray-900'>Tidak Bisa Dijual</option>
                  </select>
                </div>
                <div className="my-6 grid grid-cols-12 gap-2">
                  <button type="submit" className='border-2 bg-slate-300 rounded text-center text-gray-900 font-semibold col-span-8 col-start-3 py-2 cursor-pointer hover:bg-slate-900 hover:border-slate-300 hover:text-gray-50'>Tambah Produk</button>
                </div>
            </div>
          </form>
        ) }
        { !isAdd && (

          <div className="col-span-12">
            <h2 className='my-12 text-gray-50 text-center font-semibold text-3xl'>Daftar Produk</h2>
            <div className='my-12 w-full text-slate-300 bg-slate-800 rounded-xl overflow-clip border border-slate-800' >
              <table className='w-full text-left table-auto min-w-max'>
                <thead>
                  <tr>
                    <th className='p-4 border-b border-slate-600 bg-slate-950'>
                      <p>Nama Produk</p>
                    </th>
                    <th className='p-4 border-b border-slate-600 bg-slate-950'>
                      <p>Harga</p>
                    </th>
                    <th className='p-4 border-b border-slate-600 bg-slate-950'>
                      <p>Kategori</p>
                    </th>
                    <th className='p-4 border-b border-slate-600 bg-slate-950'>
                      <p>Status</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='even:bg-slate-900 hover:bg-slate-700'>
                    <td className='p-4 border-b border-slate-700'>
                      <p>ALCOHOL GEL POLISH CLEANSER GP-CLN01</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      <p>12500</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      L QUEENLY
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      Bisa Dijual
                    </td>
                  </tr>
                  <tr className='even:bg-slate-900 hover:bg-slate-700'>
                    <td className='p-4 border-b border-slate-700'>
                      <p>ALCOHOL GEL POLISH CLEANSER GP-CLN01</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      <p>12500</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      L QUEENLY
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      Bisa Dijual
                    </td>
                  </tr>
                  <tr className='even:bg-slate-900 hover:bg-slate-700'>
                    <td className='p-4 border-b border-slate-700'>
                      <p>ALCOHOL GEL POLISH CLEANSER GP-CLN01</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      <p>12500</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      L QUEENLY
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      Bisa Dijual
                    </td>
                  </tr>
                  <tr className='even:bg-slate-900 hover:bg-slate-700'>
                    <td className='p-4 border-b border-slate-700'>
                      <p>ALCOHOL GEL POLISH CLEANSER GP-CLN01</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      <p>12500</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      L QUEENLY
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      Bisa Dijual
                    </td>
                  </tr>
                  <tr className='even:bg-slate-900 hover:bg-slate-700'>
                    <td className='p-4 border-slate-700'>
                      <p>ALCOHOL GEL POLISH CLEANSER GP-CLN01</p>
                    </td>
                    <td className='p-4 border-slate-700'>
                      <p>12500</p>
                    </td>
                    <td className='p-4 border-slate-700'>
                      L QUEENLY
                    </td>
                    <td className='p-4 border-slate-700'>
                      Bisa Dijual
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        ) }
      </div>
    </div>
  )
}

export default App
