---
day: MON
monthdate: DEC O7
year: 2022
city: Dublin, IE
venue: Whelansgfds's
buttontext: Tickets
link: https://www.google.ie
---

<div class=" w-full grid grid-cols-10 sm:grid-cols-8 bg-gray-200">
  <div class="relative bg-gray-800  rounded-md text-center m-2 col-span-2 sm:col-span-2">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p class="text-white">{{day}}</p>
      <h2 class="  text-white font-bold text-lg">{{monthdate}}</h2>
      <p class="text-white">{{year}}</p>
    </div>
  </div>
  <div class="py-6 px-0 sm:p-4 col-span-6 sm:col-span-4 text-gray-800 flex-col sm:flex justify-start">
      <h1 class="text-2xl mr-2">{{city}}</h1>
      <h2 class="text-2xl mr-2 mb-2">{{venue}}</h2>
  </div>
  <!--div class="col-span-2 sm:col-span-2 relative">
        <button class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><a href="{{link}}" class="bg-red-800 text-white py-1 px-2 rounded animate-pulse">{{buttontext}}</a></button>
  </div-->
</div>
