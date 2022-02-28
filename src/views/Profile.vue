<template>
  <div class="w-2/3 xl:w-2/4 mx-auto mt-12">
    <div>
      <img :src="$auth.user.picture">
      <h2>Name: {{ $auth.user.name }}</h2>
      <p>E-mail: {{ $auth.user.email }}</p>
      <p>Nick: {{ $auth.user.nickname }}</p>
      <p>Locale: <span class="uppercase">{{ $auth.user.locale }}</span></p>
    </div>
  </div>
</template>