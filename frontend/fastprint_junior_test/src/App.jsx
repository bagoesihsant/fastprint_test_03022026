import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function App() {

  const [isAdd, setIsAdd] = useState(false);
  const [produk, setProduk] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [status, setStatus] = useState([]);
  const { register, handleSubmit, reset, formState: { errors, } } = useForm({mode: 'onChange'});

  useEffect(() => {
    const produkController = new AbortController();
    const produkSignal = produkController.signal;

    const kategoriController = new AbortController();
    const kategoriSignal = kategoriController.signal;

    const statusController = new AbortController();
    const statusSignal = statusController.signal;

    (async () => {
      
      try {
        const response = await fetch("http://localhost:8080/produk", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
          produkSignal
        });

        if (response.ok){
          const result = await response.json();
          setProduk(result.output.output);
        }
      } catch (error)
      {

      }

    })();

    (async () => {

      try {
        const response = await fetch("http://localhost:8080/produk/kategori", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
          kategoriSignal
        });

        if (response.ok){
          const result = await response.json();
          setKategori(result.output.output);
        }
      } catch (error)
      {

      }

    })();

    (async () => {

      try {
        const response = await fetch("http://localhost:8080/produk/status", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          },
          statusSignal
        });

        if (response.ok){
          const result = await response.json();
          setStatus(result.output.output);
        }
      } catch (error)
      {

      } 

    })();

    return () => { produkController.abort(); kategoriController.abort(); statusController.abort();  }

  }, []);

  async function fetchData(){
    const response = await fetch("http://localhost:8080/produk", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok){
      const result = await response.json();
      setProduk(result.output.output);
    }
  }

  async function addForm(data){

    try {

      const response = await fetch('http://localhost:8080/produk/', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        const result = await response.json();
        alert(result.message);
      }

    } catch (error) {
      console.error(error);
    }

    reset();
    fetchData();
    setIsAdd(!isAdd);

  }

  return (
    <div className='bg-gray-900 grid grid-cols-12 h-dvh'>
      <div className="col-span-6 col-start-4 py-4 grid grid-cols-12 grid-rows-12 gap-10 h-dvh">
        <button type="button" className="border-2 bg-slate-300 rounded text-center text-gray-900 font-semibold py-2 px-2 cursor-pointer col-start-10 col-span-3 row-start-1 row-end-2 flex self-center justify-center hover:bg-slate-900 hover:border-slate-300 hover:text-gray-50" onClick={() => { setIsAdd(!isAdd); }}>{ !isAdd ? "Tambah Produk" : "Batal Tambah Produk" }</button>
        { isAdd && (
          <form method="POST" className='col-span-12' onSubmit={handleSubmit(addForm)}>
            <div className="my-6">
                <h2 className="text-gray-50 text-center font-semibold text-3xl">Tambah Produk</h2>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="nama_produk" className='text-gray-50 col-span-4 font-semibold'>Nama Produk</label>
                  <input type="text" name="nama_produk" id="nama_produk" className={`border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12 ${ errors['nama_produk'] ? "hover:border-red-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-400" : "hover:border-cyan-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-300" }`} { ...register("nama_produk", { required: { value: true, message: 'Nama Produk tidak boleh kosong.' } }) }/>
                  { errors['nama_produk'] && (<p className="text-red-400 text-sm col-span-12">{ errors['nama_produk'].message }</p>) }
                </div>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="harga_produk" className='text-gray-50 col-span-4 font-semibold'>Harga Produk</label>
                  <input type="text" name="harga_produk" id="harga_produk" className={`border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12 ${ errors['harga_produk'] ? "hover:border-red-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-400" : "hover:border-cyan-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-300" }`} { ...register("harga_produk", { required: { value: true, message: 'Harga Produk tidak boleh kosong.' }, pattern: { value: /^\d+$/, message: 'Harga hanya boleh terdiri dari angka' } }) }/>
                  { errors['harga_produk'] && (<p className="text-red-400 text-sm col-span-12">{ errors['harga_produk'].message }</p>) }
                </div>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="kategori_produk" className='text-gray-50 col-span-4 font-semibold'>Kategori</label>
                  <select name="kategori_produk" id="kategori_produk" className='border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12' { ...register("kategori_produk") }>
                    {
                      kategori.map((kategori) => (
                        <option key={ kategori.id_kategori } value={ kategori.id_kategori } className='bg-gray-900'>{ kategori.nama_kategori }</option>
                      ))
                    }
                  </select>
                </div>
                <div className="my-4 grid grid-cols-12 gap-2">
                  <label htmlFor="status_produk" className='text-gray-50 col-span-4 font-semibold'>Status</label>
                  <select name="status_produk" id="status_produk" className='border-2 border-gray-400 py-1 indent-2 rounded text-gray-50 col-span-12 capitalize' { ...register("status_produk") }>
                    {
                      status.map((status) => (
                        <option key={ status.id_status } value={ status.id_status } className='bg-gray-900 capitalize'>{ status.nama_status }</option>
                      ))
                    }
                  </select>
                </div>
                <div className="my-6 grid grid-cols-12 gap-2">
                  <button type="submit" className='border-2 bg-slate-300 rounded text-center text-gray-900 font-semibold col-span-8 col-start-3 py-2 cursor-pointer hover:bg-slate-900 hover:border-slate-300 hover:text-gray-50'>Tambah Produk</button>
                </div>
            </div>
          </form>
        ) }
        { !isAdd && (

          <div className="col-span-12 row-span-12 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <h2 className='mb-12 text-gray-50 text-center font-semibold text-3xl'>Daftar Produk</h2>
            <div className='w-full text-slate-300 bg-slate-800 rounded-xl border border-slate-800 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-slate-800 [&::-webkit-scrollbar]:rounded-b [&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-thumb]:rounded-b' >
              <table className='w-full text-left min-w-max'>
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
                  { 
                    produk.map((produk) => (
                      <tr key={produk.id_produk} className='even:bg-slate-900 hover:bg-slate-700'>
                        <td className='p-4 border border-slate-700'>
                          <p> { produk.nama_produk } </p>
                        </td>
                        <td className='p-4 border border-slate-700'>
                          <p> { produk.harga } </p>
                        </td>
                        <td className='p-4 border border-slate-700'>
                          <p> { produk.nama_kategori } </p>
                        </td>
                        <td className='p-4 border border-slate-700'>
                          <p> { produk.nama_status } </p>
                        </td>
                      </tr>
                    )) 
                  }
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
