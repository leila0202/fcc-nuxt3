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
    color: black;
    padding: 5px;
    margin: 0 2px;
    text-decoration: none;
    border-radius: 3px;
  }
 header a.router-link-active::before  {
    content: ">";
  }
  header a.router-link-active {
    background-color: green;
    color: white;
  }
  header li {
    list-style: none;
  }
</style>