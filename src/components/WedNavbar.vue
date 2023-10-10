<template>
  <nav style="background-color: #010101;">
    <div class="container mx-auto flex justify-between items-center h-16">
      <div class="h-full flex items-center">
        <img
          src="https://media.vov.vn/sites/default/files/styles/large/public/2021-11/2021-mercedes-star-in-ring-100th-anniversary-10.jpg"
          alt="Logo"
          class="h-full max-w-full"
        >
      </div>
      <div class="flex items-center space-x-4 relative">
        <ul class="flex space-x-4">
          <li>
            <a class="text-white hover:no-underline relative" href="#">
              Các dòng xe
              <span class="overlay"></span>
            </a>
          </li>
          <li>
            <a class="text-white hover:no-underline relative" href="#">
              Mua trực tuyến
              <span class="overlay"></span>
            </a>
          </li>
          <li>
            <a class="text-white hover:no-underline relative" href="#">
              Tư vấn mua xe
              <span class="overlay"></span>
            </a>
          </li>
          <li>
            <a class="text-white hover:no-underline relative" href="#">
              Dịch vụ
              <span class="overlay"></span>
            </a>
          </li>
          <li>
            <a class="text-white hover:no-underline relative" href="#">
              Thế giới Mercedes-Benz
              <span class="overlay"></span>
            </a>
          </li>
        </ul>
        <input
          type="text"
          class="border border-gray-300 rounded-md px-2 py-1 transition-all duration-300 focus:w-48 focus:outline-none"
          placeholder="Từ khóa tìm kiếm / OnlineCode mẫu xe"
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'WedNavbar',
}
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

a .overlay {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s;
}

a:hover .overlay {
  width: 100%;
}

nav img {
  max-width: 100%;
  max-height: 100%;
}

input[type="text"] {
  width: 200px;
}

input[type="text"]:focus {
  width: 450px; 
}
</style>
