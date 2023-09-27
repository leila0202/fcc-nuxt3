<template>
  <div>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/events">Events</NuxtLink>
        </li>
      </ul>
    </header>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
  header a {
    background-color: lightblue;
    padding: 5px;
    margin: 0 2px;
    text-decoration: none;
  }
  header ul li {
    list-style: none;
  }
</style>