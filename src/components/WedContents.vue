<template>
    <div>
      <div class="w-full">
        <img class="w-full" src="https://media.auto5.vn/files/brand/2023/04/17/screenshot_5-162006.png" alt="">
      </div>
      <h2 class="mb-2 mt-50 text-6xl font-medium leading-tight text-primary text-blue-600 m-20">
        Tìm hiểu thêm
      </h2>
      <div class="w-full overflow-x-scroll whitespace-nowrap">
        <div class="flex p-4 space-x-4">
          <div v-for="card in cards" :key="card.id" class="w-72 bg-white shadow-lg rounded-lg overflow-hidden relative">
            <img :src="card.imageUrl" alt="" class="w-full h-48 object-cover object-center">
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800 leading-tight whitespace-normal">{{ card.title }}</h3>
              <p class="mt-2 mb-10 text-gray-600 overflow-auto whitespace-normal">{{ card.description }}</p>
              <button class="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full ">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WedContents',
    data() {
      return {
        cards: [
          {
            id: 1,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1880698007.component.damq6.3382764017350.jpg/simple-teaser-item-thumbnail-offers-campaign.jpg',
            title: 'Khám phá các ưu đãi hiện có',
            description: 'Tận hưởng những ưu đãi đặc quyền từ Mercedes-Benz, áp dụng cho hầu hết các dòng sản phẩm.'
          },
          {
            id: 2,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1_1922196540.component.damq6.3392789634519.jpg/mercedes-benz-vito-tourer-pi-pages-overview-VANS506370_3840x1707-01-2023.jpg',
            title: 'Vito Tourer',
            description: 'Khởi đầu những hành trình mới trên Vito Tourer – luôn đủ chỗ cho tất cả.'
          },
          {
            id: 3,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1428272920.component.damq2.3385702767396.jpg/GLC%20X254.jpg',
            title: 'Mercedes-Benz GLC mới',
            description: 'Khi mọi đỉnh cao chỉ là cuộc dạo chơi.'
          },
          {
            id: 4,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1_1769007899.component.damq6.3377966912259.png/simple-teaser-generic-suv-range..png',
            title: 'Tìm xe có sẵn trên Online Showroom',
            description: 'Nhanh chóng & Thuận tiện - Khám phá các mẫu xe hiện có tại Nhà phân phối trên toàn quốc.'
          },
          {
            id: 5,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1_1992557652.component.damq6.3386323289322.png/simple-teaser-item-loyalty-program.png',
            title: 'Tri ân khách hàng thân thiết',
            description: 'Ưu đãi hấp dẫn - áp dụng cho các dòng xe Mercedes-Benz, AMG, Maybach và xe điện EQ.'
          },
          {
            id: 6,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1858074757.component.damq6.3386241467865.jpg/mercedes-amg-c-43-4matic.jpg',
            title: 'Mercedes-AMG C 43 4MATIC',
            description: 'Cảm nhận chất adrenaline trong từng nhịp đập thể thao thuần túy. '
          },
          {
            id: 7,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1511877083.component.damq2.3377956036558.jpg/EQ%20Range.jpg',
            title: 'Các dòng xe thuần điện EQ từ Mercedes-Benz',
            description: 'Tương lai di chuyển thuần điện xuất phát từ cam kết phát triển bền vững của Mercedes-Benz.'
          },
          {
            id: 8,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_4.component.damq6.3329745563568.jpg/GSP_PC512400.jpg',
            title: 'Đặt hẹn dịch vụ trực tuyến',
            description: 'Đặt lịch hẹn dịch vụ trực tuyến một cách thuận tiện. '
          },
          {
            id: 9,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item.component.damq6.3365870683268.jpg/3113666_mbc88523.jpg',
            title: 'Hướng dẫn sử dụng dành cho chủ sở hữu xe trực tuyến mới',
            description: 'Truy cập vào Hướng dẫn sử dụng dành cho chủ sở hữu xe trực tuyến hoặc tải xuống phiên bản PDF.'
          },
          {
            id: 10,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_1859926677.component.damq2.3327373127295.png/AMG%2055%201856x1392.png',
            title: 'Mercedes-AMG: 55 năm hiệu suất lái',
            description: 'Mercedes-AMG đổi mới trên mọi hành trình khi vẫn giữ vững tinh thần làm chủ cuộc chơi.'
          },
          {
            id: 11,
            imageUrl: 'https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569_1730019915/simple_teaser_item_484807758.component.damq2.3270830075897.png/simple%20teaser%20(5).png',
            title: 'Xe đã qua sử dụng',
            description: 'An tâm với Mercedes-Benz Certified.'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

::-webkit-scrollbar {
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.w-full.overflow-x-scroll.whitespace-nowrap {
  display: flex;
  overflow-x: auto;
  width: auto;
}

.w-72 {
  flex: 0 0 auto;
}
</style>