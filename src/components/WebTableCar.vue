<template>
  <div style="background-color: #010101;">
    <h1 class="text-4xl font-bold mb-4 text-white mx-16 my-28 p-20">Các mẫu xe hiện có </h1>



    <a @click="showSedanCars"  class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold group  " >
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[0%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-22 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Xe Sedan</span>
    </a>


    <a @click="showCoupeCars" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-22 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Xe Coupé</span>
    </a>


    <a @click="showSuvCars" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-22 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Xe SUV</span>
    </a>


    <a @click="showAllCars"  class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold group">
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-22 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Hiển thị tất cả xe</span>
    </a>



    <!-- Bảng ô tô Sedan -->
    <div style="width: 1100px; margin-top: 100px;" class="mb-6 mx-auto my-auto" v-if="showSedan">
      <h2 class="text-4xl font-semibold mb-8 text-white">Sedan</h2>
      <div class="w-300 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div v-for="car in sedanCars" :key="car.id" class="w-300 bg-white shadow-lg rounded-lg overflow-hidden relative">
            <h3 class="text-xl font-semibold text-gray-800 leading-tight whitespace-normal text-center m-10">{{ car.name }}</h3>
            <img v-if="currentImageIndex1 === 0" :src="car.imageUrl1" alt="" class="w-full h-48 object-cover object-center">
            <img v-if="currentImageIndex1 === 1" :src="car.imageUrl2" alt="" class="w-full h-48 object-cover object-center">
            <div class="p-4">
              <p class="mt-2 mb-4 text-gray-600 overflow-auto whitespace-normal">Giá chỉ từ: {{ car.price }}</p>
              <button class="absolute bottom-4 right-4 bg-black hover:bg-black text-white font-semibold py-2 px-4 rounded-full">
                Đặt nhận xe
              </button>
            </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Bảng ô tô Coupé -->
    <div style="width: 1100px; margin-top: 100px;" class="mb-6 mx-auto my-auto" v-if="showCoupe">
      <h2 class="text-4xl font-semibold mb-8 text-white">Coupé</h2>
      <div class="w-300 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div v-for="car in coupeCars" :key="car.id" class="w-300 bg-white shadow-lg rounded-lg overflow-hidden relative">
            <h3 class="text-xl font-semibold text-gray-800 leading-tight whitespace-normal text-center m-10">{{ car.name }}</h3>
            <img v-if="currentImageIndex1 === 0" :src="car.imageUrl1" alt="" class="w-full h-48 object-cover object-center">
            <img v-if="currentImageIndex1 === 1" :src="car.imageUrl2" alt="" class="w-full h-48 object-cover object-center">
            <div class="p-4">
              <p class="mt-2 mb-4 text-gray-600 overflow-auto whitespace-normal">Giá chỉ từ: {{ car.price }}</p>
              <button class="absolute bottom-4 right-4 bg-black hover:bg-black text-white font-semibold py-2 px-4 rounded-full">
                Đặt nhận xe
              </button>
            </div>
           </div>
        </div>
      </div>
    </div>

    <!-- Bảng ô tô Đa dụng -->
    <div style="width: 1100px; margin-top: 100px;" class="mb-6 mx-auto my-auto" v-if="showSuv">
      <h2 class="text-4xl font-semibold mb-8 text-white">SUV</h2>
      <div class="w-300 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <div v-for="car in suvCars" :key="car.id" class="w-300 bg-white shadow-lg rounded-lg overflow-hidden relative">
            <h3 class="text-xl font-semibold text-gray-800 leading-tight whitespace-normal text-center m-10">{{ car.name }}</h3>
            <img v-if="currentImageIndex1 === 0" :src="car.imageUrl1" alt="" class="w-full h-48 object-cover object-center">
            <img v-if="currentImageIndex1 === 1" :src="car.imageUrl2" alt="" class="w-full h-48 object-cover object-center">
            <div class="p-4">
              <p class="mt-2 mb-4 text-gray-600 overflow-auto whitespace-normal">Giá chỉ từ: {{ car.price }}</p>
              <button class="absolute bottom-4 right-4 bg-black hover:bg-black text-white font-semibold py-2 px-4 rounded-full">
                Đặt nhận xe
              </button>
            </div>
           </div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
export default {
  name: 'WebTableCar',
  data() {
    return {
      currentImageIndex1: 0, // Chỉ mục ảnh thứ nhất
      currentImageIndex2: 1, // Chỉ mục ảnh thứ hai
      sedanCars: [
          {
            id : 1,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hdqtyO67PobzIr3eWsrrCsdRRzwQZv9IZbMw3SGtGyMtsd2vtcUfp8cXGEuiRJ0l34AOB2NQnbApj7bI5ux52QC31vTkzNBTnm7jA6IhKV5Kh%25vqCBlyLRznyYax7oxrH1KMun8wsOcoiZU7pM4FGTJTg906V6PDBGlSeWAhItsd5kdcUfSA1XGEvTSJ0lL6qOB2abRbApHYpI5usoJQC3UC1kzNGtNm7j0O3hKVB%25t%25vqA8TyLRiO6Yax4JOroYhfldsbbAp7oMIkb1ECQmIFUrkzNUU6m7jscWhKVzsM%25vq7UcyLRKOyYaxvODrH1peKn8wiA2oiZ45gM4zuA1YtEWpTuP6CPDAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hdqtyO67PobzIr3eWsrrCsdRRzwQZv9IZbMw3SGtGyMtsd2vtcUfp8cXGEuiRJ0l34AOB2NQnbApj7bI5ux52QC31vTkzNBTnm7jA6IhKV5Kh%25vqCBlyLRznyYax7oxrH1KMun8wsOcoiZU7pM4FGTJTg906V6PDBGlSeWAhItsd5kdcUfSA1XGEvTSJ0lL6qOB2abRbApHYpI5usoJQC3UC1kzNGtNm7j0O3hKVB%25t%25vqA8TyLRiO6Yax4JOroYhfldsbbAp7oMIkb1ECQmIFUrkzNUU6m7jscWhKVzsM%25vq7UcyLRKOyYaxvODrH1peKn8wiA2oiZ45gM4zuA1YtEWpTuP6CPDAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
             name : 'EQS Sedan',
            price : '4.839.000.000'
          },
          {
            id : 2,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
             name : 'A-Class Sedan',
            price : '5.039.000.000'
          },
          {
            id : 3,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZUkRZbMw3SGtlaWtsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApjI9I5uxoNQC31C1kzNwzkm7jZ73hKV5Kh%25vqCuqyLRgcDYaxPXSrH1eMdn8wsofoiZUMNM4FAmjTg95hp6PDCroSeWHmMtsd8s3cUfiFWXGE4JmJ0lgOrOB2Pz2bApe79I5uKMTQmIJwF1H66PDGmhSc63ZstXSV8TcUf8FfXGEHnxJ0lUHrOB2Gg%25bApFfLI5uC4JQC3zgFkzN7PKm7jKeShKVv0V%25vGdeNQnF1Wydaj%25XxcqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZUkRZbMw3SGtlaWtsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApjI9I5uxoNQC31C1kzNwzkm7jZ73hKV5Kh%25vqCuqyLRgcDYaxPXSrH1eMdn8wsofoiZUMNM4FAmjTg95hp6PDCroSeWHmMtsd8s3cUfiFWXGE4JmJ0lgOrOB2Pz2bApe79I5uKMTQmIJwF1H66PDGmhSc63ZstXSV8TcUf8FfXGEHnxJ0lUHrOB2Gg%25bApFfLI5uC4JQC3zgFkzN7PKm7jKeShKVv0V%25vGdeNQnF1Wydaj%25XxcqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
             name : 'C-Class Sedan',
            price : '1.599.000.000'
          },
          {
            id : 4,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrSFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaWtsd2HVcUfpOyXGEuTRJ0l3OZOB2qrnbApRn3I5ux5IQC30CQkzNBlkm7j86ZhKViSM%25vq4r9yLRgY6Yax%250qrH1yM%25n8w0z4oiZB7NM4FAyrTg95Ye6PDakbSeWHeutsd8ZDcUfiXkXGE4JYJ0lgChOB2PzFbAp7dbI5uKMTQmIJwF1H66PDGmhSc63ZstXSV8tcUfarRXGEsaYJ0lU4hOB2GQnbApF0MI5uCoMQC3zgFkzN7PKm7jKhIhKUWP3IrZxD%25WLkDcVjVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrSFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaWtsd2HVcUfpOyXGEuTRJ0l3OZOB2qrnbApRn3I5ux5IQC30CQkzNBlkm7j86ZhKViSM%25vq4r9yLRgY6Yax%250qrH1yM%25n8w0z4oiZB7NM4FAyrTg95Ye6PDakbSeWHeutsd8ZDcUfiXkXGE4JYJ0lgChOB2PzFbAp7dbI5uKMTQmIJwF1H66PDGmhSc63ZstXSV8tcUfarRXGEsaYJ0lU4hOB2GQnbApF0MI5uCoMQC3zgFkzN7PKm7jKhIhKUWP3IrZxD%25WLkDcVjVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
             name : 'E-Class Sedan',
            price : '2.129.000.000'
          },
          {
            id : 5,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtxX2tsd1ZpcUfwMuXGEuaXJ0l34JOB2Ng1bApjkbI5uVmMQC3qXFkzNRJKm7jxaIhKV1Hh%25vqw8lyLRDcmYaxW0hrH1dBrn8wvOcoiZLbYM4FaIPTg9HgT6PD87bSeWia9tsd4H%25cUfgO1XGEPnSJ0leoJOB2sS1bApvnyI5uLeuQC3ah1kzNH%25km7j82ohKVipQ%25vq4yTyLRgYmYaxPrprH1egin8wYOSoiZridM4FnCwTg9otn6PDC7sSeWzK3tsd7HVcUfKMjXGE4ySJ0lg0VOB2PQqbApeTpI5usf2QC3UXrkzNGJum7j0hohKVB%25h%25vqAylyLR5YXYaxC4SrH1zgun8w7PxoiZxbYM4F1IMTg9UQ36PDGmhSc6o3ju5%25%25vq8cXyr%25WNaYnyEChrH1Cmln8w5AEoiZHbNM4F8IQTg9iz26PD47bSeWgaWtsdPJtcUfeO1XGEs9EJ0lBHxOB2Ag1bAp5TlI5gZ8lXhRjwQZznwzKUuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtxX2tsd1ZpcUfwMuXGEuaXJ0l34JOB2Ng1bApjkbI5uVmMQC3qXFkzNRJKm7jxaIhKV1Hh%25vqw8lyLRDcmYaxW0hrH1dBrn8wvOcoiZLbYM4FaIPTg9HgT6PD87bSeWia9tsd4H%25cUfgO1XGEPnSJ0leoJOB2sS1bApvnyI5uLeuQC3ah1kzNH%25km7j82ohKVipQ%25vq4yTyLRgYmYaxPrprH1egin8wYOSoiZridM4FnCwTg9otn6PDC7sSeWzK3tsd7HVcUfKMjXGE4ySJ0lg0VOB2PQqbApeTpI5usf2QC3UXrkzNGJum7j0hohKVB%25h%25vqAylyLR5YXYaxC4SrH1zgun8w7PxoiZxbYM4F1IMTg9UQ36PDGmhSc6o3ju5%25%25vq8cXyr%25WNaYnyEChrH1Cmln8w5AEoiZHbNM4F8IQTg9iz26PD47bSeWgaWtsdPJtcUfeO1XGEs9EJ0lBHxOB2Ag1bAp5TlI5gZ8lXhRjwQZznwzKUuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
             name : 'S-Class Sedan Long',
            price : '5.039.000.000'
          },
          {
            id : 6,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSeqtyO67PobzIr3eWsrrCsdRRzwQZhkHZbMw3SGtGyMtsd2vtcUfpLfXGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSQ%25vq9tayLRDcVYaxWaqrH1dBtn8wfAyoiZLbXM4FaIrTg9HQe6PD8P6SeWiaMtsd4HDcUfg8yXGEPbXJ0leIZOB2sQnbApUTyI5uG6JQC30SQkzNHTnm7j8yZhKViYh%25vq4uTyLRg3mYaxPrhrH1enun8wY8WoiZrMlM4FAIcTg95zp6PDCLNSeWzn3tsd8hTcUfiUkXGE4bjJ0lgolOB2PWEbApetpI5usc2QC3UkrkzNGmbm7j0hShKVBHM%25vqA8jyLRjcHYaxVXprH1qM%25n8wPO2oiZeIQM6oY2ul0kkzNL6Sm%25kFpKhymWBM%25vqBBjyLR0GWYaxv0SrH1LIrn8wiO3oiZ4iZM4FgCuTg9Pv36PKNCZnX2f3SNsQ3BxNDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSeqtyO67PobzIr3eWsrrCsdRRzwQZhkHZbMw3SGtGyMtsd2vtcUfpLfXGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSQ%25vq9tayLRDcVYaxWaqrH1dBtn8wfAyoiZLbXM4FaIrTg9HQe6PD8P6SeWiaMtsd4HDcUfg8yXGEPbXJ0leIZOB2sQnbApUTyI5uG6JQC30SQkzNHTnm7j8yZhKViYh%25vq4uTyLRg3mYaxPrhrH1enun8wY8WoiZrMlM4FAIcTg95zp6PDCLNSeWzn3tsd8hTcUfiUkXGE4bjJ0lgolOB2PWEbApetpI5usc2QC3UkrkzNGmbm7j0hShKVBHM%25vqA8jyLRjcHYaxVXprH1qM%25n8wPO2oiZeIQM6oY2ul0kkzNL6Sm%25kFpKhymWBM%25vqBBjyLR0GWYaxv0SrH1LIrn8wiO3oiZ4iZM4FgCuTg9Pv36PKNCZnX2f3SNsQ3BxNDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
             name : ' Mercedes-Maybach S-Class Sedan',
            price : '8.199.000.000'
          },
         
      ],
      coupeCars: [
          {
            id : 1,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqN8FqtyO67PobzIr3eWsrrCsdRRzwQZvVIZbMw3SGtGyItsd2JdcUfpAyXGEjymJ0leIAOB2sSnbApvPyI5uOo2QC3bsOkzNGTnm7j07ZhKVBYF%25vq8cXyr%25kWfDPJJ0lCrnOIJRdAbQOznRI5ue4YQC3PExkzN5%256m7jCtEhKVfj9%25vqLU9yLRaGfYaxHoWrH18jOn8wioxoiZ4egM4zuA1YtEWpTuz6ULquFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqN8FqtyO67PobzIr3eWsrrCsdRRzwQZvVIZbMw3SGtGyItsd2JdcUfpAyXGEjymJ0leIAOB2sSnbApvPyI5uOo2QC3bsOkzNGTnm7j07ZhKVBYF%25vq8cXyr%25kWfDPJJ0lCrnOIJRdAbQOznRI5ue4YQC3PExkzN5%256m7jCtEhKVfj9%25vqLU9yLRaGfYaxHoWrH18jOn8wioxoiZ4egM4zuA1YtEWpTuz6ULquFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'Mercedes-AMG GP Coupé',
            price : '11.590.000.000'
          },
          {
            id : 2,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUVvZbMw3SGtGyMtsd2J%25cUfpMqXGEjy2J0lV0VOB2qBcbApUApI5uGmzQC30EQkzNHTwm7j86ohKViKw%25vq4r%25yLRg3VYaxPrSrH1enRn8w0QfoiZKbYM4Fv4lTg9LxZ6PDar6SeWHthtsd8B3cUfiAkXGE5YrJbXSqxVKnn8wPbIoTnlR4M6ouvrTg9vvn6PDK1RSeWgKItsdPJ%25cUfxCMXGE0GRJ0lBHAOB2AQ1bAp5tRI5uCQ2QC3SMFkze94pOy1qFm9KhapL1NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUVvZbMw3SGtGyMtsd2J%25cUfpMqXGEjy2J0lV0VOB2qBcbApUApI5uGmzQC30EQkzNHTwm7j86ohKViKw%25vq4r%25yLRg3VYaxPrSrH1enRn8w0QfoiZKbYM4Fv4lTg9LxZ6PDar6SeWHthtsd8B3cUfiAkXGE5YrJbXSqxVKnn8wPbIoTnlR4M6ouvrTg9vvn6PDK1RSeWgKItsdPJ%25cUfxCMXGE0GRJ0lBHAOB2AQ1bAp5tRI5uCQ2QC3SMFkze94pOy1qFm9KhapL1NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'Mercedes-AMG GP 4Door Coupé',
            price : '6.719.000.000'
          }
      ],
      suvCars: [
          {
            id : 1,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HVcUfpO6XGEuTRJ0lV0VOB2qg%25bApUTlI5uLoxQC3aCRkzNH%25um7j8yuhKVi%25M%25vqmtjyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIFTg9LtV6PDa%256SeWHyhtsd8oxcUfiXyXGE45jJ0ldItOB2fMqbAp7oMIkbX1ZxaTTg9Ukm6tTuweSc6jHItsdLYqcUfeOfXGEsbYJ0lw9YOB2A8cbAp5iCI5uCmZQC3zSTkzN7lbm7sDgubYwR9hDvd9u9wj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HVcUfpO6XGEuTRJ0lV0VOB2qg%25bApUTlI5uLoxQC3aCRkzNH%25um7j8yuhKVi%25M%25vqmtjyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIFTg9LtV6PDa%256SeWHyhtsd8oxcUfiXyXGE45jJ0ldItOB2fMqbAp7oMIkbX1ZxaTTg9Ukm6tTuweSc6jHItsdLYqcUfeOfXGEsbYJ0lw9YOB2A8cbAp5iCI5uCmZQC3zSTkzN7lbm7sDgubYwR9hDvd9u9wj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'EQB',
            price : '2.289.000.000'
          },
          {
            id : 2,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WdqtyO67PobzIr3eWsrrCsdRRzwQZ69RZbMw3SGtlaStsd2JQcUfpOcXGEunSJ0l36xOB2qBEbApUnyI5uG5IQC30h3kzNBlNm7j86ohKViKw%25vq4yTyLRgX6YaxPtxrH1yBRn8wYVcoiZB5oM4FAC2Tg9LQ96PDaPpSeWHXutsd8ZDcUfiMWXGE4JYJ0lgCVOB2Pz%25bApe79I5ulf%25QC3vSrkzNL6Sm%25kbFDZittsdB%25ycJtj9GXOcR4mJ0l4YfOB2igSbAp0iyI5uC5JQC3zgFkze94pOy1qFm9Kh5pQ2NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WdqtyO67PobzIr3eWsrrCsdRRzwQZ69RZbMw3SGtlaStsd2JQcUfpOcXGEunSJ0l36xOB2qBEbApUnyI5uG5IQC30h3kzNBlNm7j86ohKViKw%25vq4yTyLRgX6YaxPtxrH1yBRn8wYVcoiZB5oM4FAC2Tg9LQ96PDaPpSeWHXutsd8ZDcUfiMWXGE4JYJ0lgCVOB2Pz%25bApe79I5ulf%25QC3vSrkzNL6Sm%25kbFDZittsdB%25ycJtj9GXOcR4mJ0l4YfOB2igSbAp0iyI5uC5JQC3zgFkze94pOy1qFm9Kh5pQ2NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'EQE SUV',
            price : '3.999.000.000'
          },
          {
            id : 3,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2HtcUfpr6XGEu5XJ0lVYrOB2qznbApUnyI5uG5IQC30s7kzNHTnm7j871hKVi0W%25vq4ulyLRgY6YaxPrhrH1eOtn8wsXwoiZB5oM4FAyrTg956O6PDCIoSeWHmStsd8s3cUfiONXGE4bBJ0lgIZOB2PM2bApetlI5usQMQC3Uv1kzNLtnm7jaSthymI9WF4ccUfAyYXOcVD0JbXxghOB2g8qbAp4TZI5uB4YQC3AgTkzN5S1m7jd88hKVvsL%25vGdeNQnF1WydaY%25NYeqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2HtcUfpr6XGEu5XJ0lVYrOB2qznbApUnyI5uG5IQC30s7kzNHTnm7j871hKVi0W%25vq4ulyLRgY6YaxPrhrH1eOtn8wsXwoiZB5oM4FAyrTg956O6PDCIoSeWHmStsd8s3cUfiONXGE4bBJ0lgIZOB2PM2bApetlI5usQMQC3Uv1kzNLtnm7jaSthymI9WF4ccUfAyYXOcVD0JbXxghOB2g8qbAp4TZI5uB4YQC3AgTkzN5S1m7jd88hKVvsL%25vGdeNQnF1WydaY%25NYeqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : ' EQS SUV ',
            price : '4.999.000.000'
          },
          {
            id : 4,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxe4ZbMw3SGtGyMtsd2sDcUfp8qXGEubSJ0l3IrOB2NS1bApRARI5uxeMQC30CQkzNBPKm7jAyvhKV5XN%25vqCJcyLRgcDYaxPa9rH1eMOn8wsV3oiZUMXM4FnCwTg9otn6PDC7NSeWza3tsd7oTcUfKmfXGE4ySJ0lg0VOB2PQqbApeToI5uscDQC3UkTkzNGLwm7j0afhKVHKh%25vq8JcyLRiXJYnymdEWeOOB2znobQOxf5IkbZsYQC3sEOkzNelfm7jCyShKVfi5%25vqLUkyLRaGHYaxHoErH18IOn8wiVyoiZ4%25EM4FgTwTg735wrcldu63ejznj59Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxe4ZbMw3SGtGyMtsd2sDcUfp8qXGEubSJ0l3IrOB2NS1bApRARI5uxeMQC30CQkzNBPKm7jAyvhKV5XN%25vqCJcyLRgcDYaxPa9rH1eMOn8wsV3oiZUMXM4FnCwTg9otn6PDC7NSeWza3tsd7oTcUfKmfXGE4ySJ0lg0VOB2PQqbApeToI5uscDQC3UkTkzNGLwm7j0afhKVHKh%25vq8JcyLRiXJYnymdEWeOOB2znobQOxf5IkbZsYQC3sEOkzNelfm7jCyShKVfi5%25vqLUkyLRaGHYaxHoErH18IOn8wiVyoiZ4%25EM4FgTwTg735wrcldu63ejznj59Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : ' GLA ',
            price : '3.430.000.000'
          },
          {
            id : 5,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HVcUfpO6XGEubYJ0l36xOB2qBqbApUioI5uGmzQC30SpkzNHTwm7j871hKViYN%25vq4yTyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIlTg9LtV6PDa%25mSeWHnRtsd8B3cUfDrNXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3Ln6PDL1oSeWvyVtsdPJ%25cUfxZ%25XGE0aSJ0lBHAOB2AMnbAp5dXI5gZ8lXhRjwQZz94luCuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HVcUfpO6XGEubYJ0l36xOB2qBqbApUioI5uGmzQC30SpkzNHTwm7j871hKViYN%25vq4yTyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIlTg9LtV6PDa%25mSeWHnRtsd8B3cUfDrNXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3Ln6PDL1oSeWvyVtsdPJ%25cUfxZ%25XGE0aSJ0lBHAOB2AMnbAp5dXI5gZ8lXhRjwQZz94luCuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : ' GLB ',
            price : '2.089.000.000'
          },
          {
            id : 6,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9nh39Q6FjcBXwOuXGEZn3J0lFDNOB29SjbApjAlI5uVeZQC3qhOkzNR%256m7jxOZhKV1bW%25vqw8qyLRZS6YaxWXSrH1dJOn8wfOFoiZE6pM4Fa4MTg9HzO6PD87FSeWiXutsd4Y%25cUfgM1XGEzyjJ0l70NOB2K8cbApvIRI5uO5YQC3bhOkzN4Pkm7jgeDhKVPbQ%25vqAt9yLR5LDYaxCaqrH1zMdn8w7T4oiZK%25oM4FvyPTg9LYV6PDaSmSeWH0Stsd8kGcUfD%25NXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSMsQO6PDLLbSeWvantsdPvTcUfe8kXGEsbEJ0lUIrOB2ZDVbAp5noI5uC5JQC3zgOkze94pOy1qFm9KjFHN4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9nh39Q6FjcBXwOuXGEZn3J0lFDNOB29SjbApjAlI5uVeZQC3qhOkzNR%256m7jxOZhKV1bW%25vqw8qyLRZS6YaxWXSrH1dJOn8wfOFoiZE6pM4Fa4MTg9HzO6PD87FSeWiXutsd4Y%25cUfgM1XGEzyjJ0l70NOB2K8cbApvIRI5uO5YQC3bhOkzN4Pkm7jgeDhKVPbQ%25vqAt9yLR5LDYaxCaqrH1zMdn8w7T4oiZK%25oM4FvyPTg9LYV6PDaSmSeWH0Stsd8kGcUfD%25NXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSMsQO6PDLLbSeWvantsdPvTcUfe8kXGEsbEJ0lUIrOB2ZDVbAp5noI5uC5JQC3zgOkze94pOy1qFm9KjFHN4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLC',
            price : '1.909.000.000'
          },
          {
            id : 6,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9nh39Q6FjcBXwOuXGEZn3J0lFDNOB29SjbApjAlI5uVeZQC3qhOkzNR%256m7jxOZhKV1bW%25vqw8qyLRZS6YaxWXSrH1dJOn8wfOFoiZE6pM4Fa4MTg9HzO6PD87FSeWiXutsd4Y%25cUfgM1XGEzyjJ0l70NOB2K8cbApvIRI5uO5YQC3bhOkzN4Pkm7jgeDhKVPbQ%25vqAt9yLR5LDYaxCaqrH1zMdn8w7T4oiZK%25oM4FvyPTg9LYV6PDaSmSeWH0Stsd8kGcUfD%25NXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSMsQO6PDLLbSeWvantsdPvTcUfe8kXGEsbEJ0lUIrOB2ZDVbAp5noI5uC5JQC3zgOkze94pOy1qFm9KjFHN4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9nh39Q6FjcBXwOuXGEZn3J0lFDNOB29SjbApjAlI5uVeZQC3qhOkzNR%256m7jxOZhKV1bW%25vqw8qyLRZS6YaxWXSrH1dJOn8wfOFoiZE6pM4Fa4MTg9HzO6PD87FSeWiXutsd4Y%25cUfgM1XGEzyjJ0l70NOB2K8cbApvIRI5uO5YQC3bhOkzN4Pkm7jgeDhKVPbQ%25vqAt9yLR5LDYaxCaqrH1zMdn8w7T4oiZK%25oM4FvyPTg9LYV6PDaSmSeWH0Stsd8kGcUfD%25NXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSMsQO6PDLLbSeWvantsdPvTcUfe8kXGEsbEJ0lUIrOB2ZDVbAp5noI5uC5JQC3zgOkze94pOy1qFm9KjFHN4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLC',
            price : '1.909.000.000'
          },
          {
            id : 7,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0SFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaStsd2JQcUfpO6XGEuTRJ0l3CrOB2qBEbApUAbI5uGfuQC3aMrkzNHzxm7jgeDhKVPX9%25vqeIkyLR5cyYaxCaWrH1zMdn8w7T4oiZKq1M4FvyMTg9L6k6PDaGDSeWH0RtsdB%25ycJtTjqNzYYax4JOroYfV8nMr27coiZ7qZM4Fzm3Tg9izk6PDV8lSeWsKjtsdUvGcUfGLyXGE0iEJ08xLdSQjuROxA2UdpBlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0SFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaStsd2JQcUfpO6XGEuTRJ0l3CrOB2qBEbApUAbI5uGfuQC3aMrkzNHzxm7jgeDhKVPX9%25vqeIkyLR5cyYaxCaWrH1zMdn8w7T4oiZKq1M4FvyMTg9L6k6PDaGDSeWH0RtsdB%25ycJtTjqNzYYax4JOroYfV8nMr27coiZ7qZM4Fzm3Tg9izk6PDV8lSeWsKjtsdUvGcUfGLyXGE0iEJ08xLdSQjuROxA2UdpBlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLC',
            price : '2.299.000.000'
          },
          {
            id : 8,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXBrNXGEuiRJ0l3ItOB2NMEbApjtwI5uVc%25QC3qv3kzNwTnm7jZ6qhKVFYW%25vq9JdyLRDO2Yax7axrH1KBtn8wvAxoiZL61M4FayjTg9H6e6PDBkbSeWAKMtsd5c3cUfSLWXGEtbSJ0lcDfOB2PrqbApekRI5usmzQC3UX7kzNGJdm7j0aZhKVBHh%25vqNvayLRiXJYnymdEWeOOB2znobQOxf5Ikb7oYQC3sg3kzN5Pbm7jCyjhKVzYt%25vq7IayLRl3HYaxHXJrH18H%25n8520R%256d9lo24ZlKw0wOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXBrNXGEuiRJ0l3ItOB2NMEbApjtwI5uVc%25QC3qv3kzNwTnm7jZ6qhKVFYW%25vq9JdyLRDO2Yax7axrH1KBtn8wvAxoiZL61M4FayjTg9H6e6PDBkbSeWAKMtsd5c3cUfSLWXGEtbSJ0lcDfOB2PrqbApekRI5usmzQC3UX7kzNGJdm7j0aZhKVBHh%25vqNvayLRiXJYnymdEWeOOB2znobQOxf5Ikb7oYQC3sg3kzN5Pbm7jCyjhKVzYt%25vq7IayLRl3HYaxHXJrH18H%25n8520R%256d9lo24ZlKw0wOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLC Coupé',
            price : '3.129.000.000'
          },
          {
            id : 9,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXBrNXGEZb3J0l30fOB2Ng1bApjkXI5uVmMQC3qXFkzNRLNm7jZcDhKVFpW%25vqCUTyLRzQ2Yax7rSrH1Kgtn8wsOfoiZU6IM4FGRjTg90626PDBSqSeWTXMtsd7vtcUfKLjXGEvTSJ0lgYVOB2PBqbApekCI5usmDQC3UEpkzNGJnm7j0OvhKVB%25h%25vqAycyLR5iDYaxVXSrH1qHln8wPbIoTnylpEGQQC3vT6khQZ27m%25kL6ZhKV00M%25vqGBDyLRKL2Yaxv0hrH1LCtn8waTboiZHqZM4FNIJTg9jxe6PDVscSeWsmhtsdUs3cUfGU6XGE0aSJ08xLdSQjuROx84HAwxlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXBrNXGEZb3J0l30fOB2Ng1bApjkXI5uVmMQC3qXFkzNRLNm7jZcDhKVFpW%25vqCUTyLRzQ2Yax7rSrH1Kgtn8wsOfoiZU6IM4FGRjTg90626PDBSqSeWTXMtsd7vtcUfKLjXGEvTSJ0lgYVOB2PBqbApekCI5usmDQC3UEpkzNGJnm7j0OvhKVB%25h%25vqAycyLR5iDYaxVXSrH1qHln8wPbIoTnylpEGQQC3vT6khQZ27m%25kL6ZhKV00M%25vqGBDyLRKL2Yaxv0hrH1LCtn8waTboiZHqZM4FNIJTg9jxe6PDVscSeWsmhtsdUs3cUfGU6XGE0aSJ08xLdSQjuROx84HAwxlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLE',
            price : '4.619.000.000'
          },
          {
            id : 10,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyItsd2HVcUfpO6XGEubYJ0l36xOB2sr%25bApUAbI5uGQMQC3aM1kzNHTnm7j8hohKVi%25E%25vqmUjyLRhnmYaxU0drH1Gm%25n8w7OcoiZKiEM4FvSlTg9Lte6PDarsSeWHthtsd8B3cUfD%25kXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIlTg9vx96PDK1RSeWgeRtsdPvQcUfeFfXGE1zrJ0lBYrOB2A85bAp5tlI5uCQ2QCPFi2J%25xVZkFPsgGvx3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyItsd2HVcUfpO6XGEubYJ0l36xOB2sr%25bApUAbI5uGQMQC3aM1kzNHTnm7j8hohKVi%25E%25vqmUjyLRhnmYaxU0drH1Gm%25n8w7OcoiZKiEM4FvSlTg9Lte6PDarsSeWHthtsd8B3cUfD%25kXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIlTg9vx96PDK1RSeWgeRtsdPvQcUfeFfXGE1zrJ0lBYrOB2A85bAp5tlI5uCQ2QCPFi2J%25xVZkFPsgGvx3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLE Coupé ',
            price : '4.919.000.000'
          },
          {
            id : 11,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKUtsd2JTcUfpMqXGEu5wJ0le0JOB2sbnbApvnyI5uLmIQC3akrkzNHmbm7j8hfhKVksN%25vqmrkyLRsGyYaxUkhrH1zJtn8w78foiZK6pM4FvSPTg9Lxe6PDarsSeWHthtsd8B3cUfiA1XGEWymJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3LO6PDLLbSeWva%25tsdPsxcUfeL6XGEsimJ0lUDlOB2ZKrbAp5noI5uC4zQCPFi2J%25xVZkFPsgaDF3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKUtsd2JTcUfpMqXGEu5wJ0le0JOB2sbnbApvnyI5uLmIQC3akrkzNHmbm7j8hfhKVksN%25vqmrkyLRsGyYaxUkhrH1zJtn8w78foiZK6pM4FvSPTg9Lxe6PDarsSeWHthtsd8B3cUfiA1XGEWymJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3LO6PDLLbSeWva%25tsdPsxcUfeL6XGEsimJ0lUDlOB2ZKrbAp5noI5uC4zQCPFi2J%25xVZkFPsgaDF3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'GLS',
            price : '5.309.000.000'
          },
          {
            id : 12,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUZpZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPbIoTnlR4M6ouvrTg9U1n6PDAGoSeWf%25MtsdE1tcUflwfXGE2hEJ0lp%25fOB2u5EbAp3CoI5uE5ZQC3lXFkzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FzRRTg9itZ6PD4%25DSeWgnRtsdPyDcUfeT6XGEsFmJ0lh4VOB2ZnnbApFrpI5ubvxQC3IAOkzN7mum7jDcfhKVjbQ%25vqYUTyLR3tmYaBEUVmMDZfrEQ5fA3JxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUZpZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPbIoTnlR4M6ouvrTg9U1n6PDAGoSeWf%25MtsdE1tcUflwfXGE2hEJ0lp%25fOB2u5EbAp3CoI5uE5ZQC3lXFkzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FzRRTg9itZ6PD4%25DSeWgnRtsdPyDcUfeT6XGEsFmJ0lh4VOB2ZnnbApFrpI5ubvxQC3IAOkzN7mum7jDcfhKVjbQ%25vqYUTyLR3tmYaBEUVmMDZfrEQ5fA3JxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'G-Class SUV',
            price : '11.750.000.000'
          },
          {
            id : 13,
            imageUrl1: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKWtsd2HtcUfp8qXGEui2J0l3ItOB2NQnbApjtwI5uVKDQC31MrkzNwTdm7jZ63hKVFKM%25vq98cyLRzc6Yax7XhrH1KHrn8wvz4oiZL6NM4FaSQTg9Hhn6PD8%256SeWiwStsd4c%25cUfgANXGEzyjJ0l7YhOB2KQObApvIyI5uLQJQC3akWkzNIPum7jQyIhKVP0W%25vqeJZyLR5c6YaxCaSrH1zMdn8w7VwoiZKqgM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1H66PDGmhSc63ZstXS0hQcUf88fXGEHirJ0lU0ZOB2G8%25bAp0dpI5u9fZQC3zMrkzN7zNm7jKG3hKVvpM%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=350',
            imageUrl2: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKWtsd2HtcUfp8qXGEui2J0l3ItOB2NQnbApjtwI5uVKDQC31MrkzNwTdm7jZ63hKVFKM%25vq98cyLRzc6Yax7XhrH1KHrn8wvz4oiZL6NM4FaSQTg9Hhn6PD8%256SeWiwStsd4c%25cUfgANXGEzyjJ0l7YhOB2KQObApvIyI5uLQJQC3akWkzNIPum7jQyIhKVP0W%25vqeJZyLR5c6YaxCaSrH1zMdn8w7VwoiZKqgM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1H66PDGmhSc63ZstXS0hQcUf88fXGEHirJ0lU0ZOB2G8%25bAp0dpI5u9fZQC3zMrkzN7zNm7jKG3hKVvpM%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300',
            name : 'Mercedes-Maybach GLS',
            price : '8.679.000.000'
          }
      ],
      showSedan: true,
      showCoupe: false,
      showSuv: false,
    };
  },
  methods: {
    showSedanCars() {
      this.showSedan = true;
      this.showCoupe = false;
      this.showSuv = false;
    },
    showCoupeCars() {
      this.showSedan = false;
      this.showCoupe = true;
      this.showSuv = false;
    },
    showSuvCars() {
      this.showSedan = false;
      this.showCoupe = false;
      this.showSuv = true;
    },
    showAllCars() {
      this.showSedan = true;
      this.showCoupe = true;
      this.showSuv = true;
    },
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex1 = (this.currentImageIndex1 + 1) % 2;
      this.currentImageIndex2 = (this.currentImageIndex2 + 1) % 2;
    }, 2000); 
}
};
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';


</style>
